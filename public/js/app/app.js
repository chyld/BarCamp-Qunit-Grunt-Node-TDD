$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  onClickHandlers();
}

function onClickHandlers(){
  $('.digit').on('click', clickDigit);
}

function offClickHandlers(){
  $('.digit').off('click');
}

function clickDigit(){
  var display = $('#display').text();
  var number = $(this).text();
  var output = display + number;
  output = parseInt(output, 10);
  $('#display').text(output);
}
