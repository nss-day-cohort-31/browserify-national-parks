import domManager from "./domManager";

export default {
  buildParkHtml(parkObject) {
    // <article>
    //  <h3>Park Name</h3>
    //  <p>State the park in located in</p>
    // </article>

    const parkArticle = domManager.buildElement(
      "article",
      `national-park--${parkObject.id}`
    );
    parkArticle.appendChild(domManager.buildElement("h3", undefined, parkObject.name));
    parkArticle.appendChild(domManager.buildElement("p", undefined, parkObject.state));

    return parkArticle;
  }
};
