const recentSearchesContainer = $("recent-searches-container");

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

const handleRecentSearchClick = async (event) => {
  const target = $(event.target);

  // restrict clicks only from li
  if (target.is("li")) {
    // get data city attribute
    const cityName = target.attr("data-city");

    await renderWeatherInfo(cityName);
  }
};

const onReady = () => {
  renderRecentSearches();
};

recentSearchesContainer.click(handleRecentSearchClick);
$(document).ready(onReady);
