function calculate() {
  let end = "10 Jun 2024 01:00:00"; // Corrected date format
  document.getElementById("end-date").innerHTML=end

  let old = new Date(end);
  let news = new Date();
  let final = old - news;
  final = new Date(final) / 1000;
  console.log(final);

  document.getElementById("day").value = Math.floor(final / 3600 / 24);
  document.getElementById("hour").value = Math.floor((final / 3600) % 24);
  document.getElementById("minute").value = Math.floor(final / 60) % 60;
  document.getElementById("second").value = Math.floor(final % 60);
}

// Call the function initially
calculate();

// Set up an interval to call the function every second (1000 milliseconds)
setInterval(calculate, 1000);
