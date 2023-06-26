let h1Element = document.body.children[0];
console.dir(h1Element);

let bodyElement = h1Element.parentElement;
console.dir(bodyElement);

let pSiblingElement = h1Element.nextElementSibling;
console.dir(pSiblingElement);

let sameH1Element = document.getElementById("first-title");
console.dir(sameH1Element);

let firstParagraph = document.querySelector(".first-paragraph");
console.dir(firstParagraph);

firstParagraph.textContent = 'This was changed by code';