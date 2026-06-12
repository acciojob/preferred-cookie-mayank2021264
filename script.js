document.addEventListener("DOMContentLoaded", () => {
  let font = document.getElementById('fontsize');
  let color = document.getElementById('fontcolor');
  let btn = document.getElementById('save');

  // Save preferences as cookies
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    let fsize = font.value;
    let fcolor = color.value;

    // set two separate cookies
    document.cookie = `fontsize=${fsize}; path=/`;
    document.cookie = `fontcolor=${fcolor}; path=/`;

    applyPreferences(fsize, fcolor);
  });

  // Helper: read cookie by name
  function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let c of cookies) {
      let [key, value] = c.trim().split('=');
      if (key === name) return value;
    }
    return null;
  }

  // Apply preferences to page
  function applyPreferences(size, color) {
    document.body.style.fontSize = size + 'px';
    document.body.style.color = color;
  }

  // On page load, check cookies and apply
  let savedSize = getCookie('fontsize');
  let savedColor = getCookie('fontcolor');

  if (savedSize && savedColor) {
    applyPreferences(savedSize, savedColor);
    font.value = savedSize;
    color.value = savedColor;
  }
});
