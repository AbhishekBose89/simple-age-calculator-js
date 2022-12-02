let calculateAge = () => {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  

  let today = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;
  let currentYear = new Date().getFullYear();
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  //  If the user puts nothing in any of the fields and clicks the submit button

  if (day == "") {
    document.getElementById("showAge").innerText = "Please Provide Date";
    return false;
  } else if (month == "") {
    document.getElementById("showAge").innerText = "Please Provide Month";

    return false;
  } else if (year == "") {
    document.getElementById("showAge").innerText = "Please Provide Year";
    return false;
  }

  // If a user adds any string or any other character which is not a number in any of the fields

  if (isNaN(day)) {
    document.getElementById("showAge").innerText = "Please Provide Valid Date";
    return false;
  } else if (isNaN(month)) {
    document.getElementById("showAge").innerText = "Please Provide Valid Month";
    return false;
  } else if (isNaN(year)) {
    document.getElementById("showAge").innerText = "Please Provide Valid Year";
    return false;
  }

  //  If the user inputs a Month value greater than 12

  if (month > 12) {
    document.getElementById("showAge").innerText =
      "Please provide Month value in the range from 1 to 12";
    return false;
  }

  // If the user provides the year in YY or YYY or YYYYY, instead of YYYY

  if (year.length < 4 || year.length > 4) {
    document.getElementById("showAge").innerText =
      "Provide year in format YYYY";
    return false;
  }

  // If the user provides the month in M or MMM, instead of MM

  if (month.length < 2 || month.length > 2) {
    document.getElementById("showAge").innerText = "Provide Month in format MM";
    return false;
  }

  // If the user provides the year in D or DDD, instead of DD

  if (day.length < 2 || day.length > 2) {
    document.getElementById("showAge").innerText = "Provide Date in format DD";
    return false;
  }

  //  If a user adds a negative value in any of the fields

  if (day < 0) {
    document.getElementById("showAge").innerText =
      "Date cann't be 0 or less than 0";
    return false;
  } else if (month < 0) {
    document.getElementById("showAge").innerText =
      "Month cann't be 0 or less than 0";
    return false;
  } else if (year < 0) {
    document.getElementById("showAge").innerText =
      "Year cann't be 0 or less than 0 ";
    return false;
  }

  // If a user adds a Date which is not correct with a month

  if (day > months[month - 1]) {
    document.getElementById("showAge").innerText =
      "Please provide valid Date with respect to Month ";
    return false;
  }

  // if all the given inputs are correct

  if (day > today) {
    today = today + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (month > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let differenceOfDay = today - day;
  let differenceOfMonth = currentMonth - month;
  let differenceOfYear = currentYear - year;

  document.getElementById(
    "showAge"
  ).innerText = `Your Age is ${differenceOfYear} Years, ${differenceOfMonth} Months & ${differenceOfDay} Days`;
  
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";

   return true;

};
