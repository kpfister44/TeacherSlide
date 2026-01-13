// ABOUTME: Loads the requested markdown deck into the reveal.js shell
// ABOUTME: Deck selection uses a ?deck=slides/path.md query parameter

(function() {
  'use strict';

  const DEFAULT_DECK = 'slides/ap-cs/sample.md';
  const DECK_PARAM = 'deck';

  function getDeckPath() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get(DECK_PARAM);
    return requested && requested.trim() ? requested.trim() : DEFAULT_DECK;
  }

  function applyDeck(deckPath) {
    const deckSection = document.getElementById('deck');
    if (!deckSection) {
      return;
    }

    deckSection.setAttribute('data-markdown', deckPath);
    document.title = `TeacherSlide - ${deckPath}`;
  }

  window.TeacherSlideDeck = {
    getDeckPath,
    applyDeck,
  };
})();
