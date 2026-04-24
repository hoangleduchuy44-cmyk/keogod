const matches = [
  {
    league: "Ngoại Hạng Anh",
    team1: "Man City",
    team2: "Arsenal",
    time: "02:00"
  },
  {
    league: "La Liga",
    team1: "Real Madrid",
    team2: "Barcelona",
    time: "03:00"
  }
];

const container = document.getElementById("match-list");

matches.forEach((m, index) => {
  container.innerHTML += `
    <div class="card">
      <div>${m.league}</div>

      <div class="match">
        <span>${m.team1}</span>
        <span>${m.time} | <span class="countdown" data-id="${index}">60</span>s</span>
        <span>${m.team2}</span>
      </div>

      <div class="odds">
        <button onclick="chon('${m.team1}')">1.8</button>
        <button onclick="chon('Hòa')">3.2</button>
        <button onclick="chon('${m.team2}')">2.1</button>
      </div>
    </div>
  `;
});

function chon(team) {
  alert("Bạn chọn: " + team);
}
