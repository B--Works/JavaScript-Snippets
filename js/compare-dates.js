$(function () {

  var checkDOB = function () {
    // Minimum age required to procede
    var minAge     = 13;
    // Get the values of the DOB fields
    var dobDay     = document.getElementsByName('DateOfBirthDay')[0].value.toString();
    var dobMonth   = document.getElementsByName('DateOfBirthMonth')[0].value.toString();
    var dobYear    = document.getElementsByName('DateOfBirthYear')[0].value.toString();
    var dob;

    // If the Day field is a single number, add a preceding 0
    if (dobDay.length < 2) {
      dobDay = '0' + dobDay;
    }

    // Create a string with the full DOB
    dob = dobYear + dobMonth + dobDay;

    // Today's date
    var today      = new Date();
    var todayDay   = today.getDate().toString();
    var todayMonth = today.getMonth() + 1;
    todayMonth = todayMonth.toString();
    var todayYear  = today.getFullYear();

    // Current year minus minimum age
    var minYear    = (todayYear - minAge).toString();

    // Create a string with the full minimum birth date
    var min        = minYear + todayMonth + todayDay;

    dob = parseInt(dob);
    min = parseInt(min);

    // If the DOB fields have values, and the date entered does not meet requirements, disable the submit button
    if (dobYear > 0 && dobMonth > 0 && dobDay > 0 && dob > min) {
      console.log('you are too young');
      document.getElementById('register-button').disabled = true;
    } else {
      document.getElementById('register-button').disabled = false;
    }
  }

  $('.dob select').change(function () {
    checkDOB();
  });
});