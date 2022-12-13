// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("show") == -1) {
	  x.className += " show";
	} else { 
	  x.className = x.className.replace(" show", "");
	}
  };

  const firstname = document.getElementById("f1");
  const cell = document.getElementById("f2");
  const email = document.getElementById("f3");
  const fruit1 = document.getElementById("fruit-dropdown1");
  const fruit2 = document.getElementById("fruit-dropdown2");
  const fruit3 = document.getElementById("fruit-dropdown3");
  const specialr = document.getElementById("div7");
  const data1 = document.getElementById("summarydiv1");
  const data2 = document.getElementById("summarydiv2");
  const data3 = document.getElementById("summarydiv3");
  const data4 = document.getElementById("summarydiv4");
  const data5 = document.getElementById("summarydiv5");
  const data6 = document.getElementById("summarydiv6");
  const data7 = document.getElementById("summarydiv7");
  const datefield = document.querySelector(".time");
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

  function fun1(){
    data1.innerHTML = firstname.value;
    data2.innerHTML = cell.value;
    data3.innerHTML = email.value;
	localStorage.setItem("email", email.value);
    data4.innerHTML = fruit1.value;
    data5.innerHTML = fruit2.value;
    data6.innerHTML = fruit3.value;
    data7.innerHTML = specialr.value;
	datefield.innerHTML = `<em>${fulldate}</em>`;

  }

