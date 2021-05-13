function bookTicket(countryName, price) {
  var name = prompt(
    "thanks for selecting, please type your name, price" + " " + price
  );
  alert("hi " + name + " thanks for booking " + countryName + " package");
}

function bujjiName() {
  var name="";
  name = document.getElementById("surname").value;

  document.getElementById("lname").value = name;

}