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
    document.querySelector("body").style.backgroundImage = "url("+ this.image +")";
    document.querySelector("#history h3").innerHTML = "History";
    document.querySelector("#impact h3").innerHTML = "Impact";
    loadFileInto(this.history, "#history p");
    loadFileInto(this.impact, "#impact p");
  }
}

//defining movements

timelineStart = new Movement("Early Communication","Back in time","timelinestart.html","timelinestartimpact.html","");
artNouveau = new Movement("Art Nouveau", "1890-1915", "artnouveahistory.html", "artnouveaimpact.html", "images/artnouveau.png");
futurism = new Movement("Futurism", "1910-1930", "futurismhistory.html", "futurismimpact.html", "images/futurism.png");
artDeco = new Movement("Art Deco", "1925-1940", "artdecohistory.html", "artdecoimpact.html", "images/artdeco.png");
bauhaus = new Movement("Bauhaus", "1920-1940", "bauhaushistory.html", "bauhausimpact.html", "images/bauhaus.png");
swissStyle = new Movement("International Typographic Style(Swiss Style)", "1950-1970", "swissstylehistory.html", "swissstyleimpact.html", "images/swissstyle.png");
kitsch = new Movement("American Kitsch", "1940’s - 1960’s", "kitschhistory.html", "kitschimpact.html", "images/kitsch.png");
psychedelia = new Movement("Psychedelia", "1960's-1970's", "psychedeliahistory.html", "psychedeliaimpact.html", "images/psychedelic.png");
popArt = new Movement("Pop Art", "1950’s - 1970’s", "poparthistory.html", "popartimpact.html", "images/popart.png");
newWave = new Movement("New Wave", "1970's-1980's", "newwavehistory.html", "newwaveimpact.html", "images/newwave.png");
postModernism = new Movement("Post Modernism", "1970-1990’", "postmodernismhistory.html", "postmodernismimpact.html", "images/postmodernism.png");
memphisDesign = new Movement("Memphis Design", " 1980’s-1990’", "memphishistory.html", "memphisimpact.html", "images/memphis.png");
timelineEnd = new Movement("The Digital Era","1995-Present","end.html","timelineendimpact.html","");

//mouseover function definition
/*
function displayBackground(){
  
}
*/

window.onload = function() {
  
 //mouseover events for timeline start here
  document.querySelector("#firstMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/artnouveau.png"+")";
  }
  document.querySelector("#secondMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/futurism.png"+")";
  }
  document.querySelector("#thirdMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/bauhaus.png"+")";
  }
  document.querySelector("#fourthMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/artdeco.png"+")";
  }
  document.querySelector("#fifthMovement").onmouseover = function(){
   document.querySelector("body").style.backgroundImage = "url("+"images/kitsch.png"+")";
  }
  document.querySelector("#sixthMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/swissstyle.png"+")";
  }
  document.querySelector("#seventhMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/popart.png"+")";
  }
  document.querySelector("#eighthMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/newwave.png"+")";
  }
  document.querySelector("#ninthMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/postmodernism.png"+")";
  }
  document.querySelector("#tenthMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/memphis.png"+")";
  }
  document.querySelector("#extraMovement").onmouseover = function(){
    document.querySelector("body").style.backgroundImage = "url("+"images/psychedelic.png"+")";
  }
  
  //onlcick events start here for timeline 
  document.querySelector("#startMovement").onclick = function() {
    timelineStart.displayMovement();
  }
  document.querySelector("#firstMovement").onclick = function(){
    artNouveau.displayMovement();
  }
  document.querySelector("#secondMovement").onclick = function(){
    futurism.displayMovement();
  }
  document.querySelector("#thirdMovement").onclick = function(){
    bauhaus.displayMovement();
  }
  document.querySelector("#fourthMovement").onclick = function(){
    artDeco.displayMovement();
  }
  document.querySelector("#fifthMovement").onclick = function(){
    kitsch.displayMovement();
  }
  document.querySelector("#sixthMovement").onclick = function(){
    swissStyle.displayMovement();
  }
  document.querySelector("#seventhMovement").onclick = function(){
    popArt.displayMovement();
  }
  document.querySelector("#eighthMovement").onclick = function(){
    newWave.displayMovement();
  }
  document.querySelector("#ninthMovement").onclick = function(){
    postModernism.displayMovement();
  }
  document.querySelector("#tenthMovement").onclick = function(){
    memphisDesign.displayMovement();
  }
  document.querySelector("#extraMovement").onclick = function(){
    psychedelia.displayMovement();
  }
  document.querySelector("#endMovement").onclick = function(){
    timelineEnd.displayMovement();
  }
  document.querySelector("#reference").onclick = function(){
    referenceList ="references.html";
    imageList= "referenceimage.html";
   
    document.querySelector("#content h1").innerHTML = "References";
    document.querySelector("#content h4").innerHTML = " ";
    document.querySelector("#history h3").innerHTML = "History and Impact";
    document.querySelector("#impact h3").innerHTML = "Images";
    loadFileInto(referenceList, "#history p");
    loadFileInto(imageList, "#impact p");
  }
}