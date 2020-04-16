$(document).ready(function() {


  var vid1 = document.getElementById('jon');
  var vid2 = document.getElementById('seth');

  enableInlineVideo(vid1);
  enableInlineVideo(vid2);


  var leftArea = document.querySelector('.left-area');
  var rightArea = document.querySelector('.right-area');
  var cube = document.querySelector('.cube');
  var scene = document.querySelector('.scene');
  var reset = document.querySelector('#reset');
  var currentClass = '';
  var playing = false;
  var paused = false

  function playVideos() {
    if (!playing) {
      vid1.play();
      vid2.play();
      playing = true;
      paused = false;
    }
  }

  function stopVideos() {
    if (playing) {
      vid1.pause();
      vid2.pause();
      paused = true;
      playing = false;
    }
  }

  function toggleVideos() {
    if (playing) {
      vid1.pause();
      vid2.pause();
    } else {
      vid1.play();
      vid2.play();
    }
  }


// toggle menu


$( "#infoSwitch" ).click(function() {
  $("#videoHold").toggleClass('on');
  $(".infoBody").toggleClass('flex');
  $(this).text($(this).text() == 'Info' ? 'Close' : 'Info');
  if (playing) {
    stopVideos()
  } else if (paused) {
    playVideos()
  }
});


  function changeSideById(e) {
    var side = e.target.getAttribute('id');
    var showClass = 'show-' + side;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
    playVideos();
    if (side === 'jon') {
      vid1.volume = 1;
      vid2.volume = 0.3;
    } else {
      vid1.volume = 0.2;
      vid2.volume = 1;

    }
  }

  leftArea.addEventListener('click', changeSideById);
  rightArea.addEventListener('click', changeSideById);

  vid1.addEventListener("ended", resetVid);
  vid2.addEventListener("ended", resetVid);


  function resetVid() {
    $( "#cubeHold" ).removeClass( "show-jon show-seth" )
    vid1.load();
    vid2.load();
  }

 //  setTimeout(function() {
 //     $("#infoSwitch").removeClass("dn");
 // }, 30000);


});
