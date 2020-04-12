$(document).ready(function() {


  var vid1 = document.getElementById('jon');
  var vid2 = document.getElementById('seth');
  var videos = [vid1, vid2]

  var cube = document.querySelector('.cube');
  var scene = document.querySelector('.scene');
  var radioGroup = document.querySelector('.radio-group');
  var currentClass = '';


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

  $(".area").click(function() {
    var target = this.id;
    var videoTarget = document.getElementById(target);
    var showClass = 'show-' + target;
    console.log(target);
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
  })

  function playVideos() {
    vid1[vid1.paused ? 'play' : 'pause']();
    vid2[vid2.paused ? 'play' : 'pause']();
  }


  $(".button").on('click',
    (function() {
      $(this).html($(this).html() == 'Play' ? ' Pause ' : 'Play');
      playVideos();
      $(scene).toggleClass('bright');

    })
  );

  console.log(videos)


});
