//AJAX function starts here loads file into 
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}

/*This is the javascripts for major project - interactive timeline*/

//defining movement object starts here
function Movement(movementName, movementDate, movementHistory, movementImpact, imageURL) {

  this.name = movementName;
  this.date = movementDate;
  this.history = movementHistory;
  this.impact = movementImpact;
  this.image = imageURL;

  //movment method
  this.displayMovement = function() {
    document.querySelector("#content h1").innerHTML = this.name;
    document.querySelector("#content h4").innerHTML = this.date;
    document.querySelector("#content").style.backgroundImage = this.image;
    document.querySelector("#history h3").innerHTML = "History";
    document.querySelector("#impact h3").innerHTML = "Impact";
    loadFileInto(this.history, "#history p");
    loadFileInto(this.impact, "#impact p");
  }
}
//defining movements

//timelineStart = new movement();
artNouvea = new Movement("Art Nouvea", "1890-1915", "artnouveahistory.html", "artnouveaimpact.html", "images/artnouvea.jpg");
futurism = new Movement("Futurism", "1910-1930", "futurismhistory.html", "futurismimpact.html", "futurism.jpg");
artDeco = new Movement("Art Deco", "1915-1925", "artdecohistory.html", "artdecoimpact.html", "artdeco.jpg");
bauhaus = new Movement("Bauhaus", "1920-1940", "bauhaushistory.html", "bauhausimpact.html", "bauhaus.jpg");
swissStyle = new Movement("International Typographic Style(Swiss Style)", "1950-1970", "swissstylehistory.html", "swissstyleimpact.html", "swissstylejpg");
kitsch = new Movement("American Kitsch", "1940’s - 1960’s", "kitschhistory.html", "kitschimpact.html", "kitsch.jpg");
popArt = new Movement("Pop Art ", "1970’s - 1980’", "poparthistory.html", "popartimpact.html", "popart.jpg");
newWave = new Movement("New Wave", "1890-1915", "newwavehistory.html", "newwaveimpact.html", "newwave.jpg");
postModernism = new Movement("Post Modernism", "1970-1990’", "postmodernismhistory.html", "postmodernismimpact.html", "postmodernism.jpg");
memphisDesign = new Movement("Memphis Design", " 1980’s-1990’", "memphishistory.html", "memphisimpact.html", "memphis.jpg");
//timelineEnd = new movement();

//mouseover function definition
/*
function displayBackground(){
  
}
*/

window.onload = function() {
  /*mouse over event
  document.querySelector("firstMovement").onmouseover =function(){
    displayBackground();
  }
  */

  //onlcick events start here
  document.querySelector("#startMovement").onclick = function() {
    timelineStart.displayMovement();
  }
  document.querySelector("#firstMovement").onclick = function() {
    artNouvea.displayMovement();
  }
}