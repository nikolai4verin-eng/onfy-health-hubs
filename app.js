/* Onfy Vitamins Hub — gut-hub filter mechanics in vanilla JS.
   No "All" chip (prod behaviour): nothing selected by default,
   clicking a chip/card selects it, clicking again deselects. */
(function () {
  'use strict';

  var LABELS = {
    muscles: 'Muscles & bones',
    energy: 'Energy & fatigue',
    immune: 'Immune system',
    heart: 'Heart & circulation',
    skin: 'Skin, hair & nails',
    nerves: 'Nerves & focus',
  };

  /* Why a set is missing for a goal — never a generic excuse.
     skin: every candidate pair doubles a nutrient (bundles doc §1).
     nerves: the only candidate (Restaxil pair) sits outside the proven
     price envelope of PhAn-1120, so it is not on the shelf. */
  var NO_SET = {
    skin: 'No set for this goal yet, on purpose: every candidate pair would double up biotin or zinc, and we don’t do that. The single products above are the honest option.',
    nerves: 'No set for this goal yet. The single products above are the honest option.',
  };
  var NO_SET_DEFAULT = 'No set for this goal yet. The single products above are the honest option.';

  /* Card that opens preselected: the largest shelf in the category. */
  var DEFAULT_GOAL = 'muscles';

  var current = null;
  var cards = [].slice.call(document.querySelectorAll('.scard[data-goal]'));
  var chipRows = [].slice.call(document.querySelectorAll('[data-chips]'));
  var items = [].slice.call(document.querySelectorAll('[data-goals]'));
  var clearBtn = document.getElementById('clearBtn');
  var ccnote = document.getElementById('ccnote');
  var ccnoteTxt = document.getElementById('ccnoteTxt');
  var setsEmptyTxt = document.getElementById('setsEmptyTxt');

  function refreshEmpty(railId, emptyId) {
    var rail = document.getElementById(railId);
    var empty = document.getElementById(emptyId);
    if (!rail || !empty) return;
    var any = rail.querySelector('[data-goals]:not(.hidden)');
    empty.classList.toggle('hidden', !!any);
    rail.classList.toggle('hidden', !any);
  }

  function apply(goal) {
    current = goal;
    cards.forEach(function (c) { c.classList.toggle('on', c.getAttribute('data-goal') === goal); });
    chipRows.forEach(function (row) {
      [].slice.call(row.querySelectorAll('.chip')).forEach(function (ch) {
        ch.classList.toggle('on', ch.getAttribute('data-goal') === goal);
      });
    });
    items.forEach(function (el) {
      var goals = (el.getAttribute('data-goals') || '').split(/\s+/);
      el.classList.toggle('hidden', !(goal === null || goals.indexOf(goal) !== -1));
    });
    refreshEmpty('setRail', 'setsEmpty');
    refreshEmpty('gdRail', 'gdEmpty');
    if (setsEmptyTxt) setsEmptyTxt.textContent = NO_SET[goal] || NO_SET_DEFAULT;
    if (clearBtn) clearBtn.classList.toggle('hidden', goal === null);
    if (ccnote) {
      ccnote.classList.toggle('hidden', goal === null);
      if (ccnoteTxt && goal !== null) {
        ccnoteTxt.textContent = 'Showing everything for “' + LABELS[goal] + '”: products, sets, the evidence check and guides.';
      }
    }
  }

  function toggle(goal) { apply(current === goal ? null : goal); }

  /* Selecting a goal changes the page below the fold — bring the user there,
     otherwise the click reads as "nothing happened". */
  function scrollToResults() {
    var target = document.getElementById('popRail');
    if (!target) return;
    var sec = target.closest('.sec') || target;
    var y = sec.getBoundingClientRect().top + window.pageYOffset - 16;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  cards.forEach(function (c) {
    c.addEventListener('click', function () {
      toggle(c.getAttribute('data-goal'));
      if (current !== null) scrollToResults();
    });
  });

  chipRows.forEach(function (row) {
    row.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (chip) toggle(chip.getAttribute('data-goal'));
    });
  });

  if (clearBtn) clearBtn.addEventListener('click', function () { apply(null); });
  [].slice.call(document.querySelectorAll('[data-reset]')).forEach(function (b) {
    b.addEventListener('click', function () { apply(null); });
  });

  /* FAQ accordion */
  [].slice.call(document.querySelectorAll('.faqitem')).forEach(function (item) {
    var q = item.querySelector('.faqq');
    var a = item.querySelector('.faqaO');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      a.hidden = !open;
    });
  });

  /* Prototype add-to-cart: white plus -> purple check */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-add]');
    if (!btn || btn.classList.contains('in')) return;
    btn.classList.add('in');
    btn.textContent = '✓';
  });

  /* Open on the largest shelf instead of an undifferentiated 28-product rail.
     No scroll on init — only on an actual click. */
  apply(DEFAULT_GOAL);

  /* Rail arrows */
  [].slice.call(document.querySelectorAll('[data-scroll]')).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var rail = document.querySelector(btn.getAttribute('data-scroll'));
      if (!rail) return;
      rail.scrollBy({ left: (parseInt(btn.getAttribute('data-dir'), 10) || 1) * rail.clientWidth * 0.8, behavior: 'smooth' });
    });
  });
})();
