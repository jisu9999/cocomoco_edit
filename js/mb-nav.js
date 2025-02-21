$(document).ready(function () {
  // 메뉴바 클릭
  $("#mb-menuBar").click(function () {
    $(".mb-nav").animate(
      {
        left: 0,
      },
      400
    );
  });
  // 모바일용 메뉴 클릭시
  $(".mb-nav .gnb > li > a").click(function () {
    console.log(this);

    $(this).next(".mb-nav .mb-depth2").stop().slideToggle();
  });
  // 모바일용 메뉴 닫기 버튼
  $("#close-menu").click(function () {
    $(".mb-nav").animate({
      left: "-400px", //메뉴가 왼쪽 밖으로 나가도록 한다.
    });
  });
});
