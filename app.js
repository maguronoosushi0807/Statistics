let currentSetId = null;
let currentProblem;
let answers = [];
let pool = [];
let unit = "";
let checked = false;
let currentSetProblems = [];  // 今回解く問題配列（シャッフル済み）
let currentProblemIndex = 0;  // 何問目か

// セット別学習ログ
let setStats = JSON.parse(localStorage.getItem("setStats")) || {};





function renderSetSelect() {
  const list = document.getElementById("setList");
  list.innerHTML = "";

  setLists.agriculture.forEach(set => {
    const div = document.createElement("div");
    div.className = "set-btn";

    const stat = setStats[set.id];

    let displayText = "0 / 0";
    let rate = 0;

    if (stat) {
      displayText = `${stat.correct} / ${stat.solved}`;
      rate = stat.solved > 0
        ? Math.round(stat.correct / stat.solved * 100)
        : 0;
    }

    div.style.setProperty("--rate", rate + "%");

    div.innerHTML = `
      <span class="set-name">${set.name}</span>
      <span class="set-rate">${displayText}</span>
    `;

    div.onclick = () => selectSet(set.id);
    list.appendChild(div);
  });
}




function selectSet(setId) {
  currentSetId = setId;

  // ★ セット内問題をシャッフルして保持
  currentSetProblems = shuffle([...problemSets[setId]]);
  currentProblemIndex = 0;

  document.getElementById("setSelectScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  loadProblem();
}



function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
let shuffledCountries = []; // 現在の問題用にシャッフル済み国名を保持

function loadProblem() {
  if (currentProblemIndex >= currentSetProblems.length) {
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("setSelectScreen").style.display = "block";
    return;
  }

  currentProblem = currentSetProblems[currentProblemIndex];
  answers = Array(5).fill(null);
  unit = currentProblem.unit;
  checked = false;

  // ★ 国の順番を一度だけシャッフル
  shuffledCountries = shuffle(currentProblem.rankings.map(r => r.country));

  render();
}



function render() {
  document.getElementById("title").textContent = currentProblem.title;
  document.getElementById("number").textContent = (currentProblemIndex+1)+"/"+currentSetProblems.length;
  
  const table = document.getElementById("statTable");
  
  // ★ ヘッダ行を必ず作る
  table.innerHTML = "<tr><th>順位</th><th>国名</th><th>"+unit+"</th></tr>";
  
  currentProblem.rankings.forEach((r, i) => {
    const row = document.createElement("tr");
    
  // td を作成
  const rankTd = document.createElement("td");
  rankTd.textContent = (i + 1) + "位";
  
  const countryTd = document.createElement("td");
  countryTd.textContent = answers[i] || "　";
  countryTd.onclick = () => removeAnswer(i);

  // 正誤判定が済んでいる場合、td にクラス付与
  if (checked && answers[i]) {
    if (answers[i] === r.country) {
      countryTd.classList.add("correct"); // 正解 → 青など
    } else {
      countryTd.classList.add("wrong");   // 不正解 → 赤など
    }
  }

  const valueTd = document.createElement("td");
  valueTd.textContent = r.value;

  // 行に追加
  row.appendChild(rankTd);
  row.appendChild(countryTd);
  row.appendChild(valueTd);

  table.appendChild(row);
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




function placeAnswer(country) {
  if (checked) checked = false;

  const idx = answers.findIndex(a => a === null);
  if (idx === -1) return;

  answers[idx] = country;
  render(); // ここでボタンに used クラスが付く

  if (answers.every(a => a !== null)) {
    setTimeout(checkAnswer, 150);
  }
}


function removeAnswer(i) {
  if (checked) checked = false;
  if (!answers[i]) return;

  answers[i] = null;
  render(); // usedクラスも自動更新される
}

function nextProblem() {
  checked = false;
  currentProblemIndex++;
  loadProblem();
}


function exitProblem(){
  // if (!confirm("このセットを中断しますか？")) return;
  
  // 状態を完全リセット
  currentSetId = null;
  currentSetProblems = [];
  currentProblemIndex = 0;
  answers = [];
  checked = false;
  
  // 画面切り替え
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("setSelectScreen").style.display = "block";
}


let stats = JSON.parse(localStorage.getItem("stats")) || {
  total: 0,
  correct: 0
};

function checkAnswer() {
  checked = true;

  let allCorrect = true;

  answers.forEach((a, i) => {
    if (a !== currentProblem.rankings[i].country) {
      allCorrect = false;
    }
  });

  // ===== セット別ログ更新 =====
  if (!setStats[currentSetId]) {
    setStats[currentSetId] = { solved: 0, correct: 0 };
  }

  setStats[currentSetId].solved += 1;
  if (allCorrect) {
    setStats[currentSetId].correct += 1;
  }

  localStorage.setItem("setStats", JSON.stringify(setStats));
  // ===========================

  render();

  if(allCorrect){
    setTimeout(() => {
      nextProblem();
    }, 800);
  }
}



renderSetSelect();