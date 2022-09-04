function timeToMillis(days, hours, minutes, seconds) {

    var daysInMillis = days.toLong() * 24 * 60 * 60 * 1000
    var hoursInMillis = hours.toLong() * 60 * 60 * 1000
    var minutesInMillis = minutes.toLong() * 60 * 1000
    var secondsToMillis = seconds.toLong() * 1000

    return daysInMillis + hoursInMillis + minutesInMillis + secondsToMillis
}

console.log(timeToMillis(0, 0, 0, 10))
console.log(timeToMillis(2, 5, -45, 10))
console.log(timeToMillis(2000000000, 5, 45, 10))