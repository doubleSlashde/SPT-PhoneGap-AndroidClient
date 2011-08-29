// Variablen

var host;

// anderes
window.log = function(message) {
	// Wichtig für die Konstolenausgabe
	console.log?console.log(message):alert(message);
};

//Funktionen
function initialize() {
	log("initialize wird in download gestartet");

	
	if ($.browser.webkit) {
		
		location.href='chromeStore.html';
		
	}else if($.browser.mozilla){
		
		location.href='mozillaStore.html';
		
	}else{
		alert( "Diese Seite wird von ihrem Browser nicht unterstützt! Bitte benutzen sie Chrome oder Firefox!!!" );
	}

	
	
	log("initialize wird beendet");
};

function installCallback(result) {
	log("installCallback wird in download gestartet");
	
	//zeigt an ob es installiert wurde oder nicht
	alert("Glueckwunsch, sie haben die App installiert :)");
	 
  	document.getElementById("installButton").setAttribute("value", "schon Installiert :) ");
	
	log("installCallback wird beendet");
}
 
function errorCallback(result) {
	log("errorCallback wird in download gestartet");
	
	//zeigt an ob es installiert wurde oder nicht
	alert("Leider konnte die App nicht installiert werden :(");
	
	document.getElementById("installButton").setAttribute("value", "klicken zum Installieren");
	
	log("errorCallback wird beendet");
}

function installFirefoxApp() {
	log("installFirefoxApp wird in download gestartet");
	
	log(window.location.hostname);
	log(window.location.host);
	log(window.location.href);
	
	navigator.apps.install({ 
		url: "http://" + window.location.host + "/cdp/test/internet/servlet/geoslash/manifest.webapp",
		onsuccess: installCallback,
		onerror: errorCallback
	});

	log("installFirefoxApp wird beendet");
}
	
function installChromeApp() {
	log("installChromeApp wird in download gestartet");
	
	log(window.location.hostname);
	log(window.location.host);
	log(window.location.href);
	
	location.href="http://" + window.location.host + "/cdp/test/internet/servlet/geoslash/chromeAppFile/webapp.crx";

	log("installChromeApp wird beendet");
}
