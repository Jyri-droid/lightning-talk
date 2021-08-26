// Collect existing texts from <p> elements on the page
    var allParagraphs = document.getElementsByTagName("p");
    // Create arrays for storing original and alt texts
    let originalText = [];
    let altText = [];
    for (i = 0; i < allParagraphs.length; i++) {
        // Store texts created in HTML
        originalText[i] = allParagraphs[i].innerHTML;
        // Create & store code texts
        let str = allParagraphs[i].innerHTML;
        altText[i] = "";
        if (str.includes("I flex") == true) {
            altText[i] += "flex: " + str.match(/\d+/g) + "; ";
        }
        if (str.includes("My direct children flex horizontally") == true) {
            altText[i] += "display: flex; ";
        } 
        if (str.includes("My direct children flex vertically") == true) {
            altText[i] += "display: flex; flex-direction: column; ";
        }
        console.log(altText[i]);
    }
    // Create functions that show the wanted texts
    function showOriginalText() {
        for (j = 0; j < allParagraphs.length; j++) {
            allParagraphs[j].innerHTML = originalText[j];
        }
        document.getElementById("buttonOriginalText").style.opacity = "1";
        document.getElementById("buttonAltText").style.opacity = ".5";
    }
    function showAltText() {
        for (k = 0; k < allParagraphs.length; k++) {
            allParagraphs[k].innerHTML = altText[k];
        }
        document.getElementById("buttonOriginalText").style.opacity = ".5";
        document.getElementById("buttonAltText").style.opacity = "1";
    }
    // Make buttons change text when clicked
    document.getElementById("buttonOriginalText").addEventListener("click", showOriginalText);
    document.getElementById("buttonAltText").addEventListener("click", showAltText);