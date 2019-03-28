const apiBaseUrl = "http://localhost:8088";

export default {
  getAllParks() {
    return fetch(`${apiBaseUrl}/parks`).then(response => response.json());
  }
};
