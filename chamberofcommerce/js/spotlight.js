const spotlightDiv = document.querySelectorAll(".spotlight div");
const data = 'js/data.json';


fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject['business']

        const filtered = businesses.filter((business) => {
            return business.membership == "Silver" || business.membership == "Gold";

        });


        spotlightDiv.forEach((spotlight, index) => {
            const rand = Math.floor(Math.random() * filtered.length);
            const business = filtered[rand];

       

            let name = document.createElement("h2");
            let logo = document.createElement("img");
            let hr = document.createElement('hr');
            let address = document.createElement("p");
            let phone = document.createElement("p");

            name.textContent = business.name;
            logo.setAttribute('src', business.imageurl);
            logo.setAttribute('alt',` ${business.name} logo`)
            logo.setAttribute('loading', 'lazy');
            address.textContent = business.address;
            phone.textContent = business.phone;

            spotlight.appendChild(logo);
            spotlight.appendChild(address);
            spotlight.appendChild(phone);
            spotlight.appendChild(hr);

            filtered.splice(rand, 1);
        });
    });