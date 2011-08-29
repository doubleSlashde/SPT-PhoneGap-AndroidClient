//return 'indexedDB' in window || 'webkitIndexedDB' in window || 'mozIndexedDB' in window || 'moz_indexedDB' in window;
//mozIndexedDB

// Variablen
var database;					// nicht benutzt
var dataOriginName;				// nicht benutzt
var dataDestinationName;		// nicht benutzt


//Funktionen
function createDb() {
	log("createDb wird aufgerufen ABER NICHT UNTERSTÜTZT");
};

function save() {
	log("save wird in indexedDB aufgerufen ABER NICHT UNTERSTÜTZT");	
};

function load(store) {
	log("load wird in indexedDB aufgerufen ABER NICHT UNTERSTÜTZT");
	alert("Diese Funktion load wird noch nicht unterstützt");	
};

function writeTable() {
	log("write wurde in indexedDB aufgerufen ABER NICHT UNTERSTÜTZT");
	alert("Diese Funktion writeTable wird noch nicht unterstützt");
};


function deleteHistory() {
	log("Tabelle wird gelöscht ABER NICHT UNTERSTÜTZT");
	alert("Diese Funktion deleteHistory wird noch nicht unterstützt");
};

function cleanTable() {
	log("Tabelle wird gesäubert ABER NICHT UNTERSTÜTZT");
	alert("Diese Funktion cleanTable wird noch nicht unterstützt");
};

function gotooldmap(numberOfRoute) {
	// route suchen mit der nummer number und diese dann in map anzeigen
	log("gotooldmap wird in indexedDB aufgerufen ABER NICHT UNTERSTÜTZT");
	log("routenummer " + numberOfRoute + "soll angezeigt werden");
	alert("Diese Funktion gotooldmap wird noch nicht unterstützt");
};
