function updateTime() {
  let southAfricaElement = document.querySelector("#south-africa");
  let southAfricaDateElement = southAfricaElement.querySelector(".date");
  let southAfricaTimeElement = southAfricaElement.querySelector(".time");
  let southAfricaTime = moment().tz("Africa/Johannesburg");

  southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM Do YYYY");
  southAfricaTimeElement.innerHTML = southAfricaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let kenyaElement = document.querySelector("#kenya");
  let kenyaDateElement = kenyaElement.querySelector(".date");
  let kenyaTimeElement = kenyaElement.querySelector(".time");
  let kenyaTime = moment().tz("Africa/Nairobi");

  kenyaDateElement.innerHTML = kenyaTime.format("MMMM Do YYYY");
  kenyaTimeElement.innerHTML = kenyaTime.format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
