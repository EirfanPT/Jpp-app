document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
    fetch("data/events.json")
      .then(res => res.json())
      .then(events => {
        const event = events.find(e => e.id == eventId);
        if (event) {
          document.getElementById("event-detail").innerHTML = `
            <div class="bg-white p-4 shadow rounded">
              <h2 class="text-2xl font-bold">${event.title}</h2>
              <p class="text-gray-700 mt-2">Date: ${event.date}</p>
              <p class="mt-4">More details coming soon...</p>
            </div>
          `;
        }
      });
  });
  