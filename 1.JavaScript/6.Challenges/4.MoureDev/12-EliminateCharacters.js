// Replace with regex
function removeCharCallback(match, replaceString, offset, string) {
    return "";
}

var strWebsiteName = "ncode.tutsplus.comnnnn";
var strNewWebsiteName = strWebsiteName.replace(/(n)/gm, removeCharCallback);

console.log(strNewWebsiteName);

// Split
var strWebsiteName = "ncode.tutsplus.comnnnn";
var strNewWebsiteName = strWebsiteName.split("n").join(''); 
console.log(strNewWebsiteName);