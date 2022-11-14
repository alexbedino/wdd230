function getDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    var hours = today.getHours();
    var mins = today.getMinutes();
    today = `${yyyy}/${mm}/${dd} - ${hours}:${mins}`;

    document.getElementById("todayDate").value = today;
}

//call getDate() when loading the page
getDate();