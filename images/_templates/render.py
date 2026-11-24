"""Render every .frame in a Luminous image source to PNG at its exact size.

Usage (from the repo root):
    /Users/sam/miniconda3/bin/python images/_templates/render.py images/<post-slug>/index.html [...]

Each frame needs data-out="<file name without .png>". PNGs are written next to
the HTML. The script stops with an error if a font fails to load or a PNG comes
out at the wrong size, so a bad export never reaches a scheduler.
"""

import struct
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as f:
        head = f.read(24)
    if head[:8] != b"\x89PNG\r\n\x1a\n":
        raise RuntimeError(f"{path} is not a PNG")
    return struct.unpack(">II", head[16:24])


def render(page, html: Path) -> list[str]:
    page.goto(html.resolve().as_uri())
    page.wait_for_function("document.documentElement.dataset.ready === '1'", timeout=15000)

    fonts = page.evaluate("[...document.fonts].map(f => [f.family, f.status])")
    bad = [f for f in fonts if f[1] != "loaded"]
    if bad:
        raise RuntimeError(f"{html}: fonts not loaded: {bad}")

    frames = page.locator(".frame[data-out]")
    count = frames.count()
    if count == 0:
        raise RuntimeError(f"{html}: no .frame[data-out] elements")

    lines = []
    for i in range(count):
        frame = frames.nth(i)
        name = frame.get_attribute("data-out")
        want = tuple(frame.evaluate("el => [el.offsetWidth, el.offsetHeight]"))
        out = html.parent / f"{name}.png"
        frame.screenshot(path=str(out), animations="disabled")
        got = png_size(out)
        if got != want:
            raise RuntimeError(f"{out}: expected {want[0]}x{want[1]}, got {got[0]}x{got[1]}")
        lines.append(f"  {out.name}  {got[0]}x{got[1]}")
    return lines


def main(paths: list[str]) -> None:
    if not paths:
        sys.exit(__doc__)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1800, "height": 2100}, device_scale_factor=1)
        for raw in paths:
            html = Path(raw)
            print(html)
            print("\n".join(render(page, html)))
        browser.close()


if __name__ == "__main__":
    main(sys.argv[1:])
