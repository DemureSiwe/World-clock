function updateTime() {
  let southAfricaElement = document.querySelector("#south-africa");
  if (southAfricaElement) {
    let southAfricaDateElement = southAfricaElement.querySelector(".date");
    let southAfricaTimeElement = southAfricaElement.querySelector(".time");
    let southAfricaTime = moment().tz("Africa/Johannesburg");

    southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM Do YYYY");
    southAfricaTimeElement.innerHTML = southAfricaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let kenyaElement = document.querySelector("#kenya");
  if (kenyaElement) {
    let kenyaDateElement = kenyaElement.querySelector(".date");
    let kenyaTimeElement = kenyaElement.querySelector(".time");
    let kenyaTime = moment().tz("Africa/Nairobi");

    kenyaDateElement.innerHTML = kenyaTime.format("MMMM Do YYYY");
    kenyaTimeElement.innerHTML = kenyaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
          </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
