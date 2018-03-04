const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const degOffset = 90;

  const seconds = now.getSeconds() + 1;
  const secondsDegrees = ((seconds / 60) * 360) + degOffset;

  const minutes = now.getMinutes() + 1;
  const minutesDegrees = ((minutes / 60) * 360) + degOffset;

  const hours = now.getHours() + 1;
  const hoursDegrees = ((hours / 12) * 360) + degOffset;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
