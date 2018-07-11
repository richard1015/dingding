//动画
function animate() {
  $(".charts").each(function (i, item) {
    var a = parseInt($(item).attr("w"));
    $(item).animate({
      width: a + "%"
    }, 3000);
  });
}
animate();

//  控制视频是否静音
var myVideo = document.getElementById('video2');
var voiceOfffBtn = document.getElementById('voice-on');
var voiceOnBtn = document.getElementById('voice-off');
// 静音
voiceOfffBtn.onclick = function () {
  myVideo.muted = true;
  this.style.display = 'none';
  voiceOnBtn.style.display = 'block';
};
// 恢复声音
voiceOnBtn.onclick = function () {
  myVideo.muted = false;
  this.style.display = 'none';
  voiceOfffBtn.style.display = 'block';
};

//3秒之后执行点击事件
setTimeout(function () {
  $('.barline').on('click', function () {
    $('.special').fadeIn(500);
    // 判断是否播放结束
    var mds = document.getElementById('video-s')
    mds.onplaying = function () {
      $('.one').hide();
    }
    mds.play();
    mds.addEventListener('ended', function () {
      $(".one").hide();
      $('.special').hide();
      $(".two").fadeIn(500);
    });
  })
}, 3000)

function playVideo(videoId) {
  var md = document.getElementById('video2')
  if (videoId == 1) { //拒绝Tom
    $('.special').hide();
    md.onplaying = function () {
      $(".two").hide(); //第二屏隐藏
    }
    $(".three").show(); //第三屏视频显示
    var url = "mp3/video2.m4v";
    $("#video2").attr("src", url);
    md.play();
    // 判断是否播放结束
    md.addEventListener('ended', function () {
      $(".one").hide();
      $('.special').hide();
      $(".three").hide();
      $(".two").hide();
      $(".four").fadeIn(500);
    })
  }
  if (videoId == 2) {
    $('.special').hide();
    md.onplaying = function () {
      $(".two").hide(); //第二屏隐藏
    }
    $(".three").fadeIn(500); //第三屏视频显示
    var url = "mp3/video3.m4v";
    $("#video2").attr("src", url);
    md.play();
    // 判断是否播放结束
    md.addEventListener('ended', function () {
      $(".one").hide();
      $(".two").hide();
      $(".three").hide();
      $(".four").fadeIn(500);
      md.addEventListener('ended', function () {
        $('.five').fadeIn(500)
      })
    })
  }
  if (videoId == 3) { //飞身上台拥吻
    md.onplaying = function () {
      $(".four").hide(); //第四屏隐藏
    }
    $(".three").fadeIn(500); //第三屏视频显示
    var url = "mp3/video4.m4v";
    $("#video2").attr("src", url);
    md.play();
    // 判断是否播放结束
    md.addEventListener('ended', function () {
      $(".one").hide();
      $(".two").hide();
      $(".three").hide();
      $(".four").hide();
      $(".five").hide();
      $(".hmq").fadeIn(500);
      var mdlast = document.getElementById("video-h")
      mdlast.play();
      mdlast.addEventListener('ended', function () {
        $(".four").hide();
        $(".hmq").hide();
        $('.five').fadeIn(500);
      })
    })
  }
  if (videoId == 4) { //原地不动，送上祝福
    md.onplaying = function () {
      $(".four").hide(); //第四屏隐藏
    }
    $(".three").fadeIn(500); //第三屏视频显示
    var url = "mp3/video5.m4v";
    $("#video2").attr("src", url);
    md.play();
    // 判断是否播放结束
    md.addEventListener('ended', function () {
      $(".one").hide();
      $(".two").hide();
      $(".three").hide();
      $(".four").fadeIn(500);
    })
  }
}

// 第五屏
$('.gotoTicket').on('click', function () {
  window.location.href = 'https://i.meituan.com/awp/hfe/block/3014/index.html?from=WXgnOld'
});
$('.share').on('click', function () {
  $('.share-opa').fadeIn(300)
});