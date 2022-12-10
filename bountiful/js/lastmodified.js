const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
