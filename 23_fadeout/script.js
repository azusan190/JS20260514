$(function() {
  // jQueryを記述
  //$("p").fadeout(5000)
  $("p").fadeout(2000,function() {
    alert("フェードアウトしました");
  });
});