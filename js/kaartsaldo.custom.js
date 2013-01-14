"use strict";

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
}

function getDateString(javaDateString) {
  var date = new Date(javaDateString);
  var d = date.getDate();
  var m = date.getMonth()+1;
  var month = getMonthName(m);
//  var y = date.getFullYear();
  return d + ' ' + month + ' ' + date.getHours() + ':' + date.getMinutes();
}

function getMonthName(nr) {
  switch(nr) {
    case 1 : return "januari";
    case 2 : return "februari";
    case 3 : return "maart";
    default : return "erm, todo ;)";
  }
}