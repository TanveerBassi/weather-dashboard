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

  // ["foo", "bar"]
  if (recentSearches.length) {
    const createRecentCity = (city) => {
      return `<li
        class="list-group-item border-top-0 border-end-0 border-start-0"
        data-city="${city}"
      >
        ${city}
      </li>`;
    };
  }

  const recentCities = recentSearches.map(createRecentCity).join("");

  // if render recent searches list
  const ul = `<ul class="list-group rounded-0">
      ${recentCities}
    </ul>`;
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
