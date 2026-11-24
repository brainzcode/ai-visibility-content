// Shared runtime for Luminous social image sources.
// 1. Copies <template id="x"> into every element with data-use="x", so a
//    component (the annotated phone, a map) is written once per post.
// 2. Once fonts load, positions each .callout beside its [data-anchor] and
//    draws its leader line. Callouts keep their DOM order top to bottom and
//    never overlap.
// 3. Sets <html data-ready="1">, which render.py waits for before exporting.
(function () {
  var NS = 'http://www.w3.org/2000/svg';

  // Loop so templates can nest (the phone template holds a map slot).
  var pending;
  while ((pending = document.querySelectorAll('[data-use]:not([data-used])')).length) {
    pending.forEach(function (slot) {
      var tpl = document.getElementById(slot.getAttribute('data-use'));
      if (!tpl) throw new Error('Missing template #' + slot.getAttribute('data-use'));
      slot.setAttribute('data-used', '');
      slot.appendChild(tpl.content.cloneNode(true));
    });
  }

  function layoutCallouts(ann) {
    var box = ann.getBoundingClientRect();
    var k = box.width / ann.offsetWidth; // undo the slot's scale
    function rel(el) {
      var r = el.getBoundingClientRect();
      return { x: (r.left - box.left) / k, y: (r.top - box.top) / k, w: r.width / k, h: r.height / k };
    }
    var phone = rel(ann.querySelector('.phone'));
    var svg = ann.querySelector('.leaders');
    var floor = -Infinity;
    ann.querySelectorAll('.callout').forEach(function (c) {
      var anchor = ann.querySelector('[data-anchor="' + c.getAttribute('data-for') + '"]');
      if (!anchor) throw new Error('Callout has no anchor: ' + c.getAttribute('data-for'));
      var a = rel(anchor);
      var ax = a.x + a.w - 4;
      var ay = a.y + a.h / 2;
      var h = c.offsetHeight;
      var top = Math.max(ay - h / 2, floor + 16);
      c.style.top = top + 'px';
      floor = top + h;
      var cy = top + h / 2;
      var elbow = phone.x + phone.w + 16;
      var path = document.createElementNS(NS, 'path');
      path.setAttribute('d', 'M' + ax + ' ' + ay + ' H' + elbow + ' L' + (c.offsetLeft - 2) + ' ' + cy);
      svg.appendChild(path);
      var dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', ax);
      dot.setAttribute('cy', ay);
      dot.setAttribute('r', 6);
      svg.appendChild(dot);
    });
  }

  document.fonts.ready.then(function () {
    document.querySelectorAll('.ann').forEach(layoutCallouts);
    document.documentElement.setAttribute('data-ready', '1');
  });
})();
