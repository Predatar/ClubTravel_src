var toggleButton = document.getElementById("toggleButton");
var details = document.getElementsByClassName('hotDeals__details')[0];

toggleButton.addEventListener("click", function() {
  if (toggleButton.textContent === "ОТКРЫТЬ") {
    toggleButton.textContent = "ЗАКРЫТЬ";
  } else {
    toggleButton.textContent = "ОТКРЫТЬ";
  }
  
  details.classList.toggle("hidden");
});

var selectButtons = document.querySelectorAll('.selectButton');
for (var i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener('click', function() {
    var details = this.nextElementSibling;
    details.classList.toggle('hidden');
  });
}