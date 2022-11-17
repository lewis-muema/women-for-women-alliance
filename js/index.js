$(document).ready(function() {
  let $menutoggle;
  if (window.innerWidth <= 480) {
    $menutoggle = $(".menu-items").hide();
  } else {
    $menutoggle = $(".menu-items").show();
  }
  $(".menu").click(function() {
    $menutoggle.slideToggle();
    $(".menu-icon").toggleClass("menu-icon-up");
  });
});
function togglemenu() {
  if (window.innerWidth <= 480) {
    $menutoggle = $(".menu-items").hide();
  } else {
    $menutoggle = $(".menu-items").show();
  }
}
function redirect(url) {
    if(url) {
        window.location.href = `/${url}`;
    } else {
        window.location.href = '/';
    }
}
