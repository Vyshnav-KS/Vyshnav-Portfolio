function myFunction(x) {
    x.classList.toggle("change");
  }
  var myVar;

function myFunctionL() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}