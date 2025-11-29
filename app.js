let currentSetId = null;
let currentProblem = null;
let currentSetProblems = [];
let currentProblemIndex = 0;

let answers = [];
let unit = "";
let checked = false;
let shuffledCountries = [];

// ★ 今回プレイ中の一時成績（完走したら反映）
let sessionSolved = 0;
let sessionCorrect = 0;

// ★ その問題を「すでに記録したか」
let problemRecorded = false;

// セット別学習ログ
let setStats = JSON.parse(localStorage.getItem("setStats")) || {};


// ===============================
// セット選択画面
// ===============================
function renderSetSelect() {
  const list = document.getElementById("setList");
  list.innerHTML = "";

  setLists.agriculture.forEach(set => {
    const div = document.createElement("div");
    div.className = "set-btn";

    const stat = setStats[set.id];
    const totalProblems = problemSets[set.id]?.length || 0;

    // ✅ 未学習でも問題数は表示
    const solved = stat ? stat.solved : 0;
    const correct = stat ? stat.correct : 0;

    const displayText = `${correct} / ${totalProblems}`;

    // ✅ 進捗率（未学習は 0%）
    const rate = stat && stat.solved > 0
      ? Math.round(correct / totalProblems * 100)
      : 0;

    div.style.setProperty("--rate", rate + "%");

    div.innerHTML = `
      <span class="set-name">${set.name}</span>
      <span class="set-rate">${displayText}</span>
    `;

    div.onclick = () => selectSet(set.id);
    list.appendChild(div);
  });
}



// ===============================
// セット開始
// ===============================
function selectSet(setId) {
  currentSetId = setId;

  // ★ 今回セッション用に初期化
  sessionSolved = 0;
  sessionCorrect = 0;

  // 問題順シャッフル（1回だけ）
  currentSetProblems = shuffle([...problemSets[setId]]);
  currentProblemIndex = 0;

  document.getElementById("setSelectScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  loadProblem();
}


// ===============================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}


// ===============================
// 問題読み込み
// ===============================
function loadProblem() {
  if (currentProblemIndex >= currentSetProblems.length) {
    finishSet();
    return;
  }

  currentProblem = currentSetProblems[currentProblemIndex];
  answers = Array(5).fill(null);
  unit = currentProblem.unit;
  checked = false;
  problemRecorded = false;

  // ★ 国名シャッフル（この問題中は固定）
  shuffledCountries = shuffle(
    currentProblem.rankings.map(r => r.country)
  );

  render();
}


// ===============================
// 描画
// ===============================
function render() {
  document.getElementById("title").textContent = currentProblem.title;
  document.getElementById("number").textContent =
    `${currentProblemIndex + 1} / ${currentSetProblems.length}`;

  const table = document.getElementById("statTable");
  table.innerHTML = `<tr><th>順位</th><th>国名</th><th>${unit}</th></tr>`;

  currentProblem.rankings.forEach((r, i) => {
    const tr = document.createElement("tr");

    const rankTd = document.createElement("td");
    rankTd.textContent = `${i + 1}位`;

    const countryTd = document.createElement("td");
    countryTd.textContent = answers[i] || "　";
    countryTd.onclick = () => removeAnswer(i);

    if (checked && answers[i]) {
      countryTd.classList.add(
        answers[i] === r.country ? "correct" : "wrong"
      );
    }

    const valueTd = document.createElement("td");
    valueTd.textContent = r.value;

    tr.append(rankTd, countryTd, valueTd);
    table.appendChild(tr);
  });

  renderChoices();
}


function renderChoices() {
  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  shuffledCountries.forEach(country => {
    const div = document.createElement("div");
    div.className = "choice";
    if (answers.includes(country)) div.classList.add("used");

    div.textContent = country;
    div.onclick = () => placeAnswer(country);

    choices.appendChild(div);
  });
}


// ===============================
// 回答操作
// ===============================
function placeAnswer(country) {
  const idx = answers.findIndex(a => a === null);
  if (idx === -1) return;

  answers[idx] = country;
  render();

  if (answers.every(a => a !== null)) {
    setTimeout(checkAnswer, 200);
  }
}

function removeAnswer(i) {
  answers[i] = null;
  render();
}



// ===============================
// 正誤判定（1回のみ）
// ===============================
function checkAnswer() {
  if (problemRecorded) return; // ★ 最初の1回だけ記録

  problemRecorded = true;
  checked = true;

  let allCorrect = true;
  answers.forEach((a, i) => {
    if (a !== currentProblem.rankings[i].country) {
      allCorrect = false;
    }
  });

  sessionSolved += 1;
  if (allCorrect) sessionCorrect += 1;

  render();

  // ✅ 正解した時だけ次へ
  // if (allCorrect) {
  //   setTimeout(nextProblem, 800);
  // }
}



// ===============================
// 次の問題
// ===============================
function nextProblem() {
  currentProblemIndex++;
  loadProblem();
}


// ===============================
// セット完走時
// ===============================
function finishSet() {
  // ★ 完走した場合のみ記録を上書き
  setStats[currentSetId] = {
    solved: sessionSolved,
    correct: sessionCorrect
  };

  localStorage.setItem("setStats", JSON.stringify(setStats));

  exitToSetSelect();
}


// ===============================
// 中断（記録しない）
// ===============================
function exitProblem() {
  exitToSetSelect();
}


function exitToSetSelect() {
  currentSetId = null;
  currentSetProblems = [];
  currentProblemIndex = 0;
  answers = [];
  checked = false;

  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("setSelectScreen").style.display = "block";

  renderSetSelect();
}



// ===============================
// 記録の削除
// ===============================
function resetLearningStats() {
  if (!confirm("学習記録をすべてリセットしますか？")) return;

  // テーマ別学習記録を削除
  localStorage.removeItem("setStats");

  // メモリ上のデータも初期化
  setStats = {};

  // セット選択画面を再描画（即時反映）
  renderSetSelect();

  alert("学習記録をリセットしました。");
}



// 初期描画
renderSetSelect();
