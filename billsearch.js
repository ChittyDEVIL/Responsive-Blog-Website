function compare() {
  var p = document.getElementsByClassName("form-input");

  if (p.length <= 9) {
    alert("Successful Search");
    window.location.replace("blogpost.html");
  } else {
    alert("Search Failed");
  }
}
