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

}/*This is the javascripts for major project - interactive timeline*/

//defining movement object starts here
function movement(movementName, movementDate, movementHistory, movementImpact,imageURL){
  
  this.name = movementName;
  this.date = movementDate;
  this.history = movementHistory;
  this.impact = movementImpact;
  this.image = imageURL;
  
  //movment method
  this.displayMovement = function(){
    document.querySelector("#content h1").innerHTML = this.name;
    document.querySelector("#content h4").innerHTML = this.date;
    document.querySelector("#content").style.backgroundImage= "url("+ this.image +")";
    loadFileInto(this.history, "#content #history p");
    loadFileInto(this.impact, "#content #impact p");    
  }
  
  artNouvea = new movement("Art Nouvea","1890-1915","artnouveahistory.html","artnouveaimpact.html","artnouvea.jpg");
  futurism = new movement("Futurism","1910-1930","futurismhistory.html","futurismimpact.html","futurism.jpg");
  artDeco = new movement("Art Deco","1915-1925","artdecohistory.html","artdecoimpact.html","artdeco.jpg");
  bauhaus = new movement();
  temp = new movement();
  temp = new movement();
  temp = new movement();
  newWave = new movement("New Wave","1890-1915","newwavehistory.html","newwaveimpact.html","newwave.jpg");
  postModernism = new movement("Post Modernism","date","postmodernismhistory.html","postmodernismimpact.html","postmodernism.jpg");
  internationalStyle = new movement("International Typographic Style","date","internationalstylehistory.html","internationalstyleimpact.html","internationalstyle.jpg");
  
}

