$('#headgames-button').click(function(){
  $('#headgames').addClass('revealMe');
  $('#hotblooded').removeClass('revealMe');

});

$('#hotblooded-button').click(function(){
  $('#hotblooded').addClass('revealMe');
  $('#headgames').removeClass('revealMe');
});
