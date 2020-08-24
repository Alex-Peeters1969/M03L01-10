
var num = 1;
var count = 0;
var mTries = 5;
var tLeft = mTries;
var altNumber = Math.floor(Math.random() * num + 1);


var name = prompt("Welkom! Wat is je naam?");
alert(`Hey ${name} ! Klik op OK om verder te gaan of druk op Enter`);

while (guess !== altNumber) {
  var guess = prompt('Voer een nummer in van 1 tot 20 om te beginnen met raden...');
    count += 1;
    tLeft -= 1;

    if (count > mTries) {      
      document.write('Voor een niewe game refrech de pagina.');
      break
    };

    if (guess == altNumber) {
          document.write('<p>YESSSSSS gefeliciteerd je hebt gewonnen</p>');
          document.write(`<p> Het juiste nummer was ${altNumber}.</p>`);
          document.write(`<p> Het kostte je ${count} poging(en) om het te raden.</p>`);
          document.write(`<p> Dag ${name} tot de volgende keer!</p>`);          
          break
        } else {           
            alert('Probeer het nog een keer');
            alert(`Je hebt nog ${tLeft} pogingen over!`);
          }  
  } 



  

  

  
