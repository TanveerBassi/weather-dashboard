const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);

  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const renderRecentSearches = () => {
  const recentSearchesContainer = $("recent-searches-container");

  //get recent searches from LS
  const recentSearches = readFromLocalStorage("recentSearches", []);

  //if empty show alert
  if (recentSearches.length) {
  } else {
    const alert = `<div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
          </div>`;

    recentSearchesContainer.append(alert);
  }
};

const onReady = () => {
  renderRecentSearches();
};

$(document).ready(onReady);
