'use strict';

// ── 問題プール（50問）──────────────────────────────────────
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
  },
  {
    question: 'ビートルズが初めてシングルをリリースした年は？',
    choices: ['1960年', '1961年', '1962年', '1963年'],
    correct: 2,
    explanation: '1962年10月、「Love Me Do」でデビューしました。'
  },
  {
    question: '「Come Together」が収録されたアルバムは？',
    choices: ['Help!', 'Revolver', 'Abbey Road', 'Let It Be'],
    correct: 2,
    explanation: '「Come Together」は1969年のアルバム「Abbey Road」のA面1曲目に収録されています。'
  },
  {
    question: 'ビートルズの中でギタリストとして知られるのは誰？',
    choices: ['ジョン・レノン', 'ポール・マッカートニー', 'ジョージ・ハリスン', 'リンゴ・スター'],
    correct: 2,
    explanation: 'ジョージ・ハリスンがリードギタリストです。インド音楽にも影響を受けた演奏で知られています。'
  },
  {
    question: '「Let It Be」の映画・ドキュメンタリーをリメイクした2021年公開の作品のタイトルは？',
    choices: ['Get Back', 'Come Together', 'Eight Days a Week', 'Imagine'],
    correct: 0,
    explanation: '「Get Back」はピーター・ジャクソン監督が制作し、2021年にDisney+で公開されました。'
  },
  {
    question: 'ビートルズが解散後、ジョン・レノンが1971年にリリースした代表曲は？',
    choices: ['My Sweet Lord', 'Imagine', 'Band on the Run', 'Photograph'],
    correct: 1,
    explanation: '「Imagine」はジョン・レノンのソロ活動の代表曲で、世界平和を訴えた名曲です。'
  },
  {
    question: '「A Hard Day\'s Night」は何の題名でもある？',
    choices: ['ビートルズの映画', 'ジョンの自伝', 'ポールの詩集', 'リンゴの写真集'],
    correct: 0,
    explanation: '1964年公開のビートルズ主演映画のタイトルでもあり、同名のアルバムも発売されました。'
  },
  {
    question: '「Strawberry Fields Forever」の「Strawberry Fields」とはもともと何？',
    choices: ['イチゴ農場', '孤児院の庭', '公園の名前', 'リバプールの海岸'],
    correct: 1,
    explanation: 'リバプールにあった救世軍の孤児院「Strawberry Field」の庭で、ジョンが子供の頃に遊んだ場所です。'
  },
  {
    question: 'ビートルズが最後に公の場で演奏したのはどこ？',
    choices: ['武道館', 'ウェンブリースタジアム', 'アップル社屋上', 'BBCスタジオ'],
    correct: 2,
    explanation: '1969年1月30日、ロンドンのアップル・コア社屋上での「ルーフトップ・コンサート」が最後の公演です。'
  },
  {
    question: '次のうちビートルズのメンバーでないのは誰？',
    choices: ['スチュアート・サトクリフ', 'ピート・ベスト', 'ブライアン・ジョーンズ', 'ジョン・レノン'],
    correct: 2,
    explanation: 'ブライアン・ジョーンズはローリング・ストーンズのメンバーです。サトクリフとベストは初期メンバーでした。'
  },
  {
    question: 'ビートルズが初来日した年は？',
    choices: ['1964年', '1965年', '1966年', '1967年'],
    correct: 2,
    explanation: 'ビートルズは1966年6月、日本武道館で公演を行いました。'
  },
  {
    question: 'ビートルズが日本武道館で行ったコンサートは何公演？',
    choices: ['3公演', '4公演', '5公演', '6公演'],
    correct: 2,
    explanation: '1966年6月30日〜7月2日の3日間で計5公演行われました。'
  },
  {
    question: '「In My Life」が収録されたアルバムは？',
    choices: ['Help!', 'Rubber Soul', 'Revolver', 'Abbey Road'],
    correct: 1,
    explanation: '「In My Life」は1965年のアルバム「Rubber Soul」に収録されています。'
  },
  {
    question: 'ビートルズのレコードレーベルは？',
    choices: ['EMI', 'Parlophone', 'Columbia', 'Decca'],
    correct: 1,
    explanation: 'ビートルズはEMI傘下の「Parlophone（パーロフォン）」からレコードをリリースしていました。'
  },
  {
    question: '「Eleanor Rigby」の主人公エレナー・リグビーは何をする人？',
    choices: ['教師', '看護師', '教会の掃除をする孤独な女性', '修道女'],
    correct: 2,
    explanation: '教会で米粒を拾い集める孤独な女性として描かれ、孤独をテーマにした名曲です。'
  },
  {
    question: '「Blackbird」を書いたのは主に誰？',
    choices: ['ジョン・レノン', 'ジョージ・ハリスン', 'ポール・マッカートニー', 'リンゴ・スター'],
    correct: 2,
    explanation: 'ポール・マッカートニーが作曲。アメリカの公民権運動に影響を受けて書かれたとされています。'
  },
  {
    question: '「Something」を作曲したのは誰？',
    choices: ['ジョン・レノン', 'ポール・マッカートニー', 'ジョージ・ハリスン', 'リンゴ・スター'],
    correct: 2,
    explanation: 'ジョージ・ハリスン作曲。フランク・シナトラが「史上最高のラブソング」と評した曲です。'
  },
  {
    question: 'ビートルズのアルバム「White Album」の正式タイトルは？',
    choices: ['The White Album', 'The Beatles', 'White', 'Four Beatles'],
    correct: 1,
    explanation: '正式タイトルは「The Beatles」。真っ白なジャケットから「ホワイト・アルバム」と呼ばれています。'
  },
  {
    question: '「Ob-La-Di, Ob-La-Da」はどのアルバムに収録されている？',
    choices: ['Abbey Road', 'Let It Be', 'The Beatles（White Album）', 'Magical Mystery Tour'],
    correct: 2,
    explanation: '「The Beatles（ホワイト・アルバム）」（1968年）に収録されています。'
  },
  {
    question: 'ビートルズの最初のナンバーワンヒット曲は？',
    choices: ['Love Me Do', 'Please Please Me', 'From Me to You', 'She Loves You'],
    correct: 1,
    explanation: '「Please Please Me」が1963年に全英チャート1位を獲得しました。'
  },
  {
    question: '「Lucy in the Sky with Diamonds」の頭文字を並べると何になる？',
    choices: ['LSD', 'LST', 'LDT', 'LCD'],
    correct: 0,
    explanation: 'L・S・Dとなることから薬物を示唆すると話題になりましたが、ジョンは息子の絵からインスピレーションを得たと語っています。'
  },
  {
    question: 'ポール・マッカートニーが弾く楽器として最も有名なのは？',
    choices: ['ドラム', 'ギター', 'ベースギター', 'キーボード'],
    correct: 2,
    explanation: 'ポール・マッカートニーはバンドのベーシストとして活躍し、独創的なベースラインで知られています。'
  },
  {
    question: 'ビートルズが設立したレコード会社・レーベルの名前は？',
    choices: ['Apple Records', 'Banana Records', 'Cherry Records', 'Lemon Records'],
    correct: 0,
    explanation: '1968年にアップル・コアの一部門として「Apple Records」を設立しました。'
  },
  {
    question: '「Here Comes the Sun」を作曲したのは？',
    choices: ['ジョン・レノン', 'ポール・マッカートニー', 'ジョージ・ハリスン', 'リンゴ・スター'],
    correct: 2,
    explanation: 'ジョージ・ハリスンが作曲し、Abbey Roadに収録。春の到来を歌った明るい名曲です。'
  },
  {
    question: 'ビートルズがインドで瞑想修行をした師匠は誰？',
    choices: ['ダライ・ラマ', 'マハリシ・マヘーシュ・ヨーギー', 'オショ・ラジニーシュ', 'サイ・ババ'],
    correct: 1,
    explanation: '1968年にインドでマハリシ・マヘーシュ・ヨーギーのもとで超越瞑想を学びました。'
  },
  {
    question: '「Let It Be」のアルバムで最後にリリースされたシングルは？',
    choices: ['Let It Be', 'Get Back', 'The Long and Winding Road', 'Don\'t Let Me Down'],
    correct: 2,
    explanation: '「The Long and Winding Road」が1970年5月、ビートルズ最後のシングルとしてリリースされました。'
  },
  {
    question: 'リンゴ・スターの本名は？',
    choices: ['リチャード・スターキー', 'ロジャー・スターン', 'ロバート・スチュワート', 'ランドルフ・スタンリー'],
    correct: 0,
    explanation: 'リンゴ・スターの本名はリチャード・スターキー（Richard Starkey）です。'
  },
  {
    question: '「Hey Jude」の「Jude」はもともと誰のことを指していた？',
    choices: ['ポールの息子', 'ジョンの息子ジュリアン', 'ジョージの弟', 'マネージャーの子供'],
    correct: 1,
    explanation: 'ポールが、両親の離婚で傷ついたジョンの息子ジュリアンを励ますために書きました。'
  },
  {
    question: 'ビートルズがアメリカで最初にリリースしたシングルは？',
    choices: ['Love Me Do', 'Please Please Me', 'I Want to Hold Your Hand', 'She Loves You'],
    correct: 2,
    explanation: '「I Want to Hold Your Hand」が1963年末にアメリカでリリースされ、爆発的なヒットとなりました。'
  },
  {
    question: '「Yellow Submarine」はどのアルバムに最初に収録された？',
    choices: ['Help!', 'Revolver', 'Magical Mystery Tour', 'Sgt. Pepper\'s'],
    correct: 1,
    explanation: '1966年のアルバム「Revolver」に収録。リンゴ・スターがボーカルを担当しています。'
  },
  {
    question: 'ジョン・レノンが1980年に亡くなった場所はどこ？',
    choices: ['ロンドン', 'リバプール', 'ニューヨーク', 'ロサンゼルス'],
    correct: 2,
    explanation: '1980年12月8日、ニューヨーク・マンハッタンの自宅アパート前で銃撃され亡くなりました。'
  },
  {
    question: '「Penny Lane」の「Penny Lane」とは何？',
    choices: ['架空の街の名前', 'リバプールの実在する通り', 'ロンドンの公園', 'リンゴの生まれた村'],
    correct: 1,
    explanation: 'リバプールに実在する通りの名前で、ジョンとポールが幼少期によく訪れた場所です。'
  },
  {
    question: 'ジョージ・ハリスンが亡くなった年は？',
    choices: ['1999年', '2000年', '2001年', '2002年'],
    correct: 2,
    explanation: 'ジョージ・ハリスンは2001年11月29日、肺がんのため58歳で亡くなりました。'
  },
  {
    question: 'ビートルズのコンサートツアーが最後に行われた年は？',
    choices: ['1964年', '1965年', '1966年', '1967年'],
    correct: 2,
    explanation: '1966年のサンフランシスコ公演を最後に、ビートルズはコンサート活動を終了しました。'
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
