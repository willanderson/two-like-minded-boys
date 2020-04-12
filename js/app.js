$(document).ready(function() {


  var vid1 = document.getElementById('jon');
  var vid2 = document.getElementById('seth');
  var videos = [vid1, vid2]

  var leftArea = document.querySelector('.left-area');
  var rightArea = document.querySelector('.right-area');

  var cube = document.querySelector('.cube');
  var scene = document.querySelector('.scene');
  var radioGroup = document.querySelector('.radio-group');
  var currentClass = '';
  var playing = false;


  function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
  }

  // set initial side
  changeSide();

  radioGroup.addEventListener('change', changeSide);

  leftArea.addEventListener('change', changeSide);
  rightArea.addEventListener('change', changeSide);


  $(".button").on('click',
    (function() {
      $(this).html($(this).html() == 'Play' ? ' Pause ' : 'Play');
      playVideos();
      $(scene).toggleClass('bright');

    })
  );



vid1.onplaying = function() {
  $(scene).removeClass("dimmed")
}


});
