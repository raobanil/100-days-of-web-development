let h1Element = document.body.children[0];
console.dir(h1Element);

let bodyElement = h1Element.parentElement;
console.dir(bodyElement);

let pSiblingElement = h1Element.nextElementSibling;
console.dir(pSiblingElement);

let sameH1Element = document.getElementById("first-title");
console.dir(sameH1Element);

// ADD AN ELEMENT
let newAnchorElement = document.createElement('a');
newAnchorElement.textContent = 'This anchor element was added by code!';
newAnchorElement.href = 'https://github.com';

let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement);