import apiManager from "./apiManager";
import parkModule from "./park";

const listParks = {
  listNationalParks() {
    apiManager.getAllParks().then(parksArray => {
      console.log(parksArray);
      let nationParksFragment = document.createDocumentFragment();

      parksArray.forEach(park => {
        let parkHtml = parkModule.buildParkHtml(park);
        nationParksFragment.appendChild(parkHtml);
      });

      const nationalParksSection = document.querySelector("#national--parks");
      clearElement(nationalParksSection);
      nationalParksSection.appendChild(nationParksFragment);
    });
  }
};

export default listParks;
