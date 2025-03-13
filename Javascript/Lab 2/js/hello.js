var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var amPm = ""
var greeting;

if (hourNow > 18) {
 greeting = 'Good evening';
}
else if (hourNow > 12) {
 greeting = 'Good afternoon';
}
else if (hourNow > 0) {
 greeting = 'Good morning';
}
else {
 greeting = 'Welcome';
}
if (hourNow > 11) {
    hourNow = hourNow - 12;
    amPm = "pm";
}
 document.write(greeting);
 document.write("<br>Glad you're here<br>");
 document.write(hourNow, ":",minuteNow, " ", amPm);
 document.write()