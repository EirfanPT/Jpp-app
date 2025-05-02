document.addEventListener("DOMContentLoaded", () => {
    const eventList = document.getElementById("event-list");
    fetch("data/events.json")
      .then(res => res.json())
      .then(events => {
        events.forEach(event => {
          eventList.innerHTML += `
            <div class="bg-white p-4 shadow rounded">
              <h2 class="text-xl font-bold">${event.title}</h2>
              <p>${event.date}</p>
              <a href="event.html?id=${event.id}" class="text-blue-500 mt-2 block">Details</a>
            </div>
          `;
        });
      });
  });
  