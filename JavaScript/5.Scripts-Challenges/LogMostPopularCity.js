const citiesList = [
    "sevilla",
    "madrid",
    "barcelona",
    "valencia",
    "bilbao",
    "zamora",
    "alicante",
    "granada",
    "cordoba",
    "santander",
    "almeria",
    "toledo",
    "valladolid",
    "sevilla",
    "madrid",
    "barcelona",
    "valencia",
    "bilbao",
    "zamora",
    "sevilla",
    "madrid",
    "barcelona",
    "valencia",
    "bilbao",
    "zamora",

];

function logMostPopulousCities(numCities) {
    const cities = {}
    citiesList.forEach(city => {
        cities[city] = !citiesList[city] ? 1 : citiesList[city] += 1
    })

    return Object.keys(cities)
        .map(city => ({ name: city, times: cities[city] }))
        .sort((a, b) => b.times - a.times)
        .slice(0, numCities)
        .map(city => city.name)
}

    logMostPopulousCities(5)