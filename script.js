//your JS code here. If required.
//your JS code here. If required.
let font = document.getElementById('fontsize');
let color = document.getElementById('fontcolor');
let btn = document.getElementById('save');

btn.addEventListener('click', (event) => {
	event.preventDefault();
	let fsize = font.value;
	let fcolor = color.value;
	console.log(fsize,fcolor);
	document.cookie = `fontsize = ${fsize}; path=/`;
	document.cookie = `fontcolor=${fcolor}; path=/`;

	applyPreferences(fsize,fcolor);
});

function getCookies(name){
	let cookies = document.cookie.split(';');
	for(let c of cookies){
		let [key,vale] = c.trim().split('=');
		if(key===name) return value;
	}
	return null;
}

function applyPreferences(size,color){
	document.body.style.fontSize = size+'px';
	document.body.style.color = color;
}


window.addEventListener('DOMContentLoaded', () => {
  let savedSize = getCookie('fontsize');
  let savedColor = getCookie('fontcolor');

  if (savedSize && savedColor) {
    applyPreferences(savedSize, savedColor);
    // also update inputs so user sees current values
    font.value = savedSize;
    color.value = savedColor;
  }
});