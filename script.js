'use strict';

// ── 問題プール（12問）──────────────────────────────────────
const ALL_QUESTIONS = [
  {
    question: 'ビートルズが結成された都市はどこ？',
    choices: ['ロンドン', 'マンチェスター', 'リバプール', 'バーミンガム'],
    correct: 2,
    explanation: 'ビートルズは1960年にイングランドのリバプールで結成されました。'
  },
  {
    question: 'ビートルズのメンバーは何人？',
    choices: ['3人', '4人', '5人', '6人'],
    correct: 1,
    explanation: 'ジョン・レノン、ポール・マッカートニー、ジョージ・ハリスン、リンゴ・スターの4人です。'
  },
  {
    question: 'ビートルズのドラマーは誰？',
    choices: ['ジョン・レノン', 'ポール・マッカートニー', 'ジョージ・ハリスン', 'リンゴ・スター'],
    correct: 3,
    explanation: 'リンゴ・スターがビートルズの正式ドラマーです。1962年に加入しました。'
  },
  {
    question: '1969年にリリースされたビートルズ最後のアルバムのタイトルは？',
    choices: ['Revolver', 'Abbey Road', 'Let It Be', 'Rubber Soul'],
    correct: 1,
    explanation: 'Abbey Road は1969年9月にリリースされた、最後に録音されたアルバムです。'
  },
  {
    question: '「Hey Jude」がリリースされた年は？',
    choices: ['1965年', '1966年', '1967年', '1968年'],
    correct: 3,
    explanation: '「Hey Jude」は1968年にリリースされ、全英・全米チャート1位を獲得しました。'
  },
  {
    question: 'ビートルズが1964年に初めてアメリカに渡った際、出演したテレビ番組は？',
    choices: ['トゥナイト・ショー', 'エド・サリバン・ショー', 'レイト・ナイト', 'アメリカン・バンドスタンド'],
    correct: 1,
    explanation: '1964年2月、エド・サリバン・ショーへの出演でアメリカ中に旋風を起こしました。'
  },
  {
    question: 'ビートルズの公式解散年は？',
    choices: ['1968年', '1969年', '1970年', '1971年'],
    correct: 2,
    explanation: 'ビートルズは1970年に公式に解散を発表しました。'
  },
  {
    question: '「Let It Be」のプロデューサーとして知られる人物は？',
    choices: ['クインシー・ジョーンズ', 'フィル・スペクター', 'ジョージ・マーティン', 'ブライアン・エプスタイン'],
    correct: 1,
    explanation: 'Let It Be アルバムのオーバーダブ作業はフィル・スペクターが担当しました。'
  },
  {
    question: 'アルバム「Sgt. Pepper\'s Lonely Hearts Club Band」がリリースされたのはいつ？',
    choices: ['1965年', '1966年', '1967年', '1968年'],
    correct: 2,
    explanation: '1967年6月のリリース。ロック史上最重要アルバムのひとつとされています。'
  },
  {
    question: 'ビートルズのマネージャーとして知られる人物は？',
    choices: ['ジョージ・マーティン', 'ブライアン・エプスタイン', 'アラン・クライン', 'デレク・テイラー'],
    correct: 1,
    explanation: 'ブライアン・エプスタインがビートルズの伝説的なマネージャーです。1967年に逝去しました。'
  },
  {
    question: '次のうちビートルズのアルバムではないのはどれ？',
    choices: ['Revolver', 'Help!', 'Thriller', 'With the Beatles'],
    correct: 2,
    explanation: 'Thriller はマイケル・ジャクソンのアルバムです。他の3枚はビートルズの作品です。'
  },
  {
    question: 'ビートルズの楽曲「Yesterday」を主に作ったのは誰？',
    choices: ['ジョン・レノン', 'ジョージ・ハリスン', 'リンゴ・スター', 'ポール・マッカートニー'],
    correct: 3,
    explanation: 'Yesterdayはポール・マッカートニーがほぼ単独で作詞・作曲した名曲です。'
  }
];

// ── 状態管理 ──────────────────────────────────────────────
let questions = [];      // 今回の5問
let currentIndex = 0;    // 現在の問題番号（0〜4）
let score = 0;           // 正解数
let answered = false;    // この問題に答えたか

// ── 画面要素の取得 ─────────────────────────────────────────
const screenStart  = document.getElementById('screen-start');
const screenQuiz   = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');

const progressFill    = document.getElementById('progress-fill');
const questionNumber  = document.getElementById('question-number');
const questionText    = document.getElementById('question-text');
const choicesEl       = document.getElementById('choices');
const feedbackEl      = document.getElementById('feedback');
const btnNext         = document.getElementById('btn-next');

const resultIcon      = document.getElementById('result-icon');
const resultTitle     = document.getElementById('result-title');
const resultScore     = document.getElementById('result-score');
const resultComment   = document.getElementById('result-comment');

// ── ユーティリティ ─────────────────────────────────────────
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showScreen(screen) {
  [screenStart, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ── ゲーム開始 ─────────────────────────────────────────────
function startGame() {
  // 12問からランダムに5問選ぶ
  questions = shuffle(ALL_QUESTIONS).slice(0, 5);
  currentIndex = 0;
  score = 0;
  showScreen(screenQuiz);
  showQuestion();
}

// ── 問題表示 ──────────────────────────────────────────────
function showQuestion() {
  const q = questions[currentIndex];
  answered = false;

  // プログレスバー
  progressFill.style.width = (currentIndex / 5 * 100) + '%';

  // 問題番号・テキスト
  questionNumber.textContent = currentIndex + 1;
  questionText.textContent = q.question;

  // フィードバック・次へボタンを隠す
  feedbackEl.classList.add('hidden');
  feedbackEl.className = 'feedback hidden';
  btnNext.classList.add('hidden');

  // 選択肢を生成
  choicesEl.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  q.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-label">${labels[idx]}</span>${choice}`;
    btn.addEventListener('click', () => selectAnswer(idx));
    choicesEl.appendChild(btn);
  });
}

// ── 回答処理 ──────────────────────────────────────────────
function selectAnswer(selectedIdx) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const buttons = choicesEl.querySelectorAll('.choice-btn');
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) score++;

  // ボタンの色付け
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // フィードバック表示
  feedbackEl.classList.remove('hidden', 'correct-fb', 'wrong-fb');
  if (isCorrect) {
    feedbackEl.classList.add('correct-fb');
    feedbackEl.innerHTML = `<span class="fb-icon">✅</span><strong>正解！</strong> ${q.explanation}`;
  } else {
    feedbackEl.classList.add('wrong-fb');
    feedbackEl.innerHTML = `<span class="fb-icon">❌</span><strong>不正解…</strong> ${q.explanation}`;
  }

  // 次へボタン or 結果へ
  btnNext.classList.remove('hidden');
  if (currentIndex === 4) {
    btnNext.textContent = '結果を見る';
  } else {
    btnNext.textContent = '次の問題へ';
  }
}

// ── 次の問題 ──────────────────────────────────────────────
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= 5) {
    showResult();
  } else {
    showQuestion();
  }
}

// ── 結果表示 ──────────────────────────────────────────────
function showResult() {
  progressFill.style.width = '100%';

  showScreen(screenResult);

  // スコアに応じたメッセージ
  const comments = [
    { min: 5, icon: '🏆', title: '満点！さすがビートルズ通！', comment: '完璧です！ビートルズの知識は申し分なし。\nあなたはまさに真のファンです！' },
    { min: 4, icon: '🎸', title: 'すばらしい！', comment: '4問正解はかなりの知識量です！\nあと少しで満点、次回もチャレンジを！' },
    { min: 3, icon: '🎵', title: 'なかなかいい線いってます！', comment: '半分以上正解です。\nもう少し勉強すれば完璧になれます！' },
    { min: 2, icon: '🎤', title: 'もう少し！', comment: 'ビートルズの曲を聴きながら\n知識も深めてみましょう！' },
    { min: 0, icon: '🥁', title: 'これからですね！', comment: 'ビートルズの名曲をぜひ聴いてみてください。\n次回は挽回できるはず！' },
  ];

  const result = comments.find(c => score >= c.min);

  resultIcon.textContent = result.icon;
  resultTitle.textContent = result.title;
  resultScore.innerHTML = `${score}<span> / 5問正解</span>`;
  resultComment.textContent = result.comment;
}

// ── イベントリスナー ───────────────────────────────────────
document.getElementById('btn-start').addEventListener('click', startGame);
btnNext.addEventListener('click', nextQuestion);
document.getElementById('btn-retry').addEventListener('click', startGame);
