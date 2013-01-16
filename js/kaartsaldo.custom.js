"use strict";

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
}

function formatAmount(amount) {
  amount = amount.replace(".", ",");
  if (amount.indexOf(",") == -1) {
    amount += ",00";
  }
  var amountFormatted = amount.substr(0, amount.indexOf(",")+1);
  amountFormatted += '<span class="cents"><sup>' + amount.substr(amount.indexOf(",")+1) + '</sup></span>';
  return amountFormatted;
}

function formatCardnumber(nr) {
  var result = '';
  for (var i=0; i<nr.length; i++) {
    if (i > 0 && i % 4 == 0) {
      result += ' ';
    }
    result += nr[i];
  }
  return result;
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