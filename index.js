document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("reservation.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
