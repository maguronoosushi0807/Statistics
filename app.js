let currentProblem;
let answers = [];
let pool = [];
let checked = false;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function loadProblem() {
  const genre = "meat";
  currentProblem = shuffle(problemSets[genre])[0];
  answers = Array(5).fill(null);
  pool = shuffle(currentProblem.rankings.map(r => r.country));
  render();
}

function render() {
  document.getElementById("title").textContent = currentProblem.title;

  const table = document.getElementById("statTable");
  table.innerHTML = `
    <tr><th>順位</th><th>国名</th><th>数値</th></tr>
  `;

  currentProblem.rankings.forEach((r, i) => {
  const row = document.createElement("tr");

  let cls = "answer-pill empty";
  if (answers[i]) {
    if (checked) {
      cls = answers[i] === r.country
        ? "answer-pill correct"
        : "answer-pill wrong";
    } else {
      cls = "answer-pill";
    }
  }

  const pill = answers[i]
    ? `<div class="${cls}">${answers[i]}</div>`
    : `<div class="${cls}">　</div>`;

  row.innerHTML = `
    <td>${i + 1}位</td>
    <td onclick="removeAnswer(${i})">${pill}</td>
    <td>${r.value}</td>
  `;
  table.appendChild(row);
});

  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  pool.forEach(c => {
    const div = document.createElement("div");
    div.className = "choice";
    div.textContent = c;
    div.onclick = () => placeAnswer(c);
    choices.appendChild(div);
  });
}

function placeAnswer(country) {
  const idx = answers.findIndex(a => a === null);
  if (idx === -1) return;

  answers[idx] = country;
  pool = pool.filter(c => c !== country);
  render();

  // ★ 全部埋まったら即チェック
  if (answers.every(a => a !== null)) {
    setTimeout(checkAnswer, 150); // タップ→即反応しすぎない調整
  }
}

function removeAnswer(i) {
  if (!answers[i]) return;
  pool.push(answers[i]);
  answers[i] = null;
  render();
}

function nextProblem() {
  checked = false;
  loadProblem();
}

let stats = JSON.parse(localStorage.getItem("stats")) || {
  total: 0,
  correct: 0
};

function checkAnswer() {
  checked = true;

  let correct = 0;
  answers.forEach((a, i) => {
    if (a === currentProblem.rankings[i].country) correct++;
  });

  stats.total += 5;
  stats.correct += correct;
  localStorage.setItem("stats", JSON.stringify(stats));

  render(); // ★ 色反映のため再描画

  alert(
    `今回：${correct}/5\n` +
    `累計正答率：${(stats.correct / stats.total * 100).toFixed(1)}%`
  );
}

loadProblem();
