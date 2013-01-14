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
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0"+minutes;
  }
  return d + ' ' + month + ' ' + hours + ':' + minutes;
}

function getMonthName(nr) {
  switch(nr) {
    case 1 : return "januari";
    case 2 : return "februari";
    case 3 : return "maart";
    default : return "erm, todo ;)";
  }
}