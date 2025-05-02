document.addEventListener("DOMContentLoaded", () => {
    const eventSelect = document.getElementById("event");
    fetch("data/events.json")
      .then(res => res.json())
      .then(events => {
        events.forEach(event => {
          const option = document.createElement("option");
          option.value = event.id;
          option.textContent = event.title;
          eventSelect.appendChild(option);
        });
      });
  
    document.getElementById("registerForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registration submitted! Thank you.");
      // In real use, you'd send this data to Firebase or another backend
    });
  });
  