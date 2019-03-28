export default {
  buildElement(elementType, elementId, elementTextContent, elementValue) {
    let htmlElement = document.createElement(elementType);
    if (elementId) {
      htmlElement.setAttribute("id", elementId);
    }
  
    if (elementValue) {
      htmlElement.setAttribute("value", elementValue);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
  }
}
