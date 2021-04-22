const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

const displayBox = document.querySelector("#mountains");
const table = document.createElement("table");
const firstTableRow = document.createElement("tr");
const firstMountainArray = Object.keys(MOUNTAINS[0]); // creates an array from the object property names/keys, whose items
                                                      // can form the headers of the table columns
displayBox.appendChild(table);
table.style.border = "5px double pink";
table.style.width = "400px";
table.appendChild(firstTableRow);


function createTableHeaders(arrayObject) {
    for (let i = 0; i < arrayObject.length; i++) {	
    	const tableHeader = document.createElement("th");                  
    	tableHeader.appendChild(document.createTextNode(arrayObject[i]));	
	firstTableRow.appendChild(tableHeader);
    }
}
  
createTableHeaders(firstMountainArray);

function populateTable(dataset) {
	for (let i = 0; i < dataset.length; i++) {
		const tableRow = document.createElement("tr");
    		table.appendChild(tableRow);
    		const data = Object.values(dataset[i]); // creates an array out of the property values of each object in turn
                                                        // (the property names are the same for each object and have already 
                                                        // been entered via createTableHeaders())  
    		for (textValue of data) {
                	const cell = document.createElement("td");
                	const text = document.createTextNode(textValue);
      			cell.appendChild(text);
      			// NB: for below "if" condition to work, the nodeValue of the text node must be accessed
       			if (isNaN(text.nodeValue) === false) {
        			cell.style.textAlign = "right";  
			}
      			tableRow.appendChild(cell);
		}
	}
}

populateTable(MOUNTAINS);