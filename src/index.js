import "./styles.css";

const calendarContent = document.getElementById("calendar-content");

const calendarWeek = document.getElementById("calendar-week");

const week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sut"];

for (let i = 0; i < week.length; i++) {
  const row = document.createElement("div");
  row.textContent = week[i];
  row.classList.add("week");
  calendarWeek.append(row);
}

function showCalendar(month, year) {
  let startDay = 1;
  const firstDayOfWeek = new Date(year, month).getDay();
  const numOfDays = 32 - new Date(year, month, 32).getDate();

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 7; j++) {
      if (startDay > numOfDays) {
        break;
      }
      if (i === 0 && j < firstDayOfWeek) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.append(cell);
      } else {
        const cell = document.createElement("div");
        cell.textContent = startDay;
        cell.classList.add("cell");
        row.append(cell);
        startDay++;
      }
    }

    calendarContent.append(row);
  }
}

showCalendar(4, 2022);
