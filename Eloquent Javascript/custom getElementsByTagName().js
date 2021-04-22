<script>
 function byTagName(node, tagName) {
    let elementArray = Array.from(node.childNodes);
    let returnArray = [];
    for (let i = 0; i < elementArray.length; i++) {
		if (elementArray[i].nodeType == Node.ELEMENT_NODE) {
        	let arrayItem = elementArray[i].nodeName.toLowerCase();        
          		if  (arrayItem == tagName) {
            returnArray[returnArray.length] = arrayItem;
// FIXME: Need to find a way to get recursive code to work on any descendants of the child elements - repeating the above
// code at each successive tier of the DOM tree until I reach the tips of the branches. The attempt below is not working. 
                 if (elementArray[i].hasChildNodes()) {
                     for (let child of elementArray[i].childNodes) {
                      byTagName(child, tagName);
                        /*(child.nodeType == Node.ELEMENT_NODE && child.nodeName.toLowerCase()
                      == tagName) returnArray[returnArray.length] = child;*/                  
                  }     
              }
           }             
        }
    }
    //console.log(returnArray);
    return returnArray;
  }
           
// Test cases one and three work, but not two, which needs to work on grandchildren:                  
  console.log(byTagName(document.body, "h1"));
  // → 1
  console.log(byTagName(document.body, "span"));
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span"));
  // → 2
</script>