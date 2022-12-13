
let dropdown1 = document.getElementById('fruit-dropdown1');
let dropdown2 = document.getElementById('fruit-dropdown2');
let dropdown3 = document.getElementById('fruit-dropdown3');
dropdown1.length = 0;
dropdown2.length = 0;
dropdown3.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text = 'Choose Fruit';
let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Choose Fruit';
let defaultOption3 = document.createElement('option');
defaultOption3.text = 'Choose Fruit';

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;
dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;
dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

const url = 'js/fruit.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option1;
        let option2;
        let option3;
    
    	for (let i = 0; i < data.length; i++) {
          option1 = document.createElement('option');
          option2 = document.createElement('option');
          option3 = document.createElement('option');
      	  option1.text = data[i].name;
          option2.text = data[i].name;
          option3.text = data[i].name;
      	  dropdown1.add(option1);
          dropdown2.add(option2);
          dropdown3.add(option3);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  


  });


