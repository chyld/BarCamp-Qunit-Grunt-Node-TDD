module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  offClickHandlers();
  onClickHandlers();
}

function teardownTest(){
}

test('Put 8 in display', function(){
  $('#d8').trigger('click');
  equal($('#display').text(), 8, '8 should be in display');
});

test('Put 78 in display', function(){
  $('#d7').trigger('click');
  $('#d8').trigger('click');
  equal($('#display').text(), 78, '78 should be in display');
});
