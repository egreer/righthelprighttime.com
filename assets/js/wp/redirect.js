---
---
// This attempts to emulate 301 redirect for pages of the old wordpress site
var redirects = {
  '?page_id=6': 'services/',
  '?page_id=7': 'about/',
  '?page_id=8': 'contact/',
  '?page_id=9': 'links/',
  '?page_id=16': 'news/',
  '?p=62' : '2013/01/02/tedx-talk-on-compassion/'
};
(function() {
var s = document.location.search;
if (s in redirects) {
  window.location.replace(redirects[s]);
}
})();
