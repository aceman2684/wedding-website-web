const weddingDate = new Date("2022-09-24").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const difference = weddingDate - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown__days").innerHTML = days;
  document.getElementById("countdown__hours").innerHTML = hours;
  document.getElementById("countdown__minutes").innerHTML = minutes;
  document.getElementById("countdown__seconds").innerHTML = seconds;
}, 1000);
