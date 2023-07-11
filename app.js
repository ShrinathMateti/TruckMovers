const scriptURL =
  "https://script.google.com/macros/s/AKfycbw823GsIsC-in5gC4bhboseZp_RZtHh0oU5hhSKAVuefLb3PVTlhEwtY8YGPeoscoZz/exec";
const form = document.forms["sheetdb-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thankyou We will Contact You Soon "))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
