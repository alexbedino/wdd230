const requestURL = 'js/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    business.forEach(displayProphets);
  });

  
  function displayProphets(directory) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the directory's full name
    h2.textContent = `${directory.name}`;
    p1.textContent = `${directory.address}`;
    p2.textContent = `${directory.website}`;
    p3.textContent = `${directory.phone}`;
    p4.textContent = `Level: ${directory.membership}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute('alt', `${directory.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p2);
    card.appendChild(p4);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }