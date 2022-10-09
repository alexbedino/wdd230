const datefield = document.querySelector(".time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;