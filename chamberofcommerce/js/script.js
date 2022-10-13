const datefield = document.querySelector(".time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// creating the show me message for Monday and Tuesday

const today = new Date();
const dayNumber = today.getDay();
const element = document.getElementById("message");
if (dayNumber == 1 || dayNumber == 2 ) {
	element.classList.add("showme")

} else {
	element.classList.add("hideme")

}