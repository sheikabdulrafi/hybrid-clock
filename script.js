const secondData = document.querySelectorAll(".seconds");
const secondHand = document.querySelector(".secondHand");
const minuteData = document.querySelectorAll(".minutes");
const minuteHand = document.querySelector(".minuteHand");
const hourData = document.querySelectorAll(".hours");
const hourHand = document.querySelector(".hourHand");

function handRotator() {
  const current = new Date();
  const seconds = current.getSeconds();
  const minutes = current.getMinutes();
  const hours = current.getHours() % 12;

  minuteData.forEach((container) => {
    container.innerText = minutes;
  });

  secondData.forEach((container) => {
    container.innerText = seconds;
  });

  hourData.forEach((container) => {
    container.innerText = hours;
  });

  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg )`;
  hourHand.style.transform = `rotate(${hours * 30}deg)`;
}

setInterval(handRotator, 1000);
