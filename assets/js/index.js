// disappearing banner
function banruBannerDelete() {
    var x = document.getElementById("banruBanner");
    var button = document.getElementById("banruBannerButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    button.style.display = "none";
  }