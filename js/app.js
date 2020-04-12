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

  function playVideos() {
    if (!playing) {
      vid1.play();
      vid2.play();
      console.log("starting videos")
    } else {
      vid1.stop();
      vid2.stop();
      console.log("stopping videos")
    }
  }


  function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
  }


  function changeSideById(e) {
    var side = e.target.getAttribute('id');
    var showClass = 'show-' + side;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;

    playVideos();
  }

  // set initial side
  changeSide();

  radioGroup.addEventListener('change', changeSide);

  leftArea.addEventListener('click', changeSideById);
  rightArea.addEventListener('click', changeSideById);


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
