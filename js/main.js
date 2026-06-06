(function () {
  var toggle = document.getElementById('news-toggle');
  if (!toggle) return;

  var hiddenItems = document.querySelectorAll('.news-item.is-hidden');
  var expanded = false;

  toggle.addEventListener('click', function () {
    expanded = !expanded;
    hiddenItems.forEach(function (item) {
      item.classList.toggle('is-hidden', !expanded);
    });
    toggle.textContent = expanded ? 'Show less' : 'Read more';
  });
})();
