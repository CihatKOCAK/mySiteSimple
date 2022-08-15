function getChristmas() {
    if(getMonth() === 11 && getDayofMonth() > 20) {
       if(getMonth() === 0 && getDayofMonth() < 10) {
           return true;
       }
       else return false;
    }
    else return false;
}

function getMonth() {
  var date = new Date();
  var month = date.getMonth();
  return month;
}
function getDayofMonth() {
  var date = new Date();
  var day = date.getDate();
  return day;
}
//January = 0, February = 1, March = 2, April = 3, May = 4, June = 5, July = 6, August = 7, September = 8, October = 9, November = 10, December = 11
export default getChristmas;