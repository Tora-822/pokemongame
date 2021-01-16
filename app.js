const quiz = [
  {
    question: "ホウエン地方で最初に手に入れられないポケモンはどれ？",
    answers: [
      "キモリ",
      "ピカチュウ",
      "アチャモ",
      "ミズゴロウ"
    ],
    correct: "ピカチュウ"
  }, {
    question: "シンオウ地方のポケモン博士は誰？",
    answers: [
      "オダマキ博士",
      "オーキド博士",
      "ナナカマド博士",
      "ウツギ博士"
    ],
    correct: "ナナカマド博士"
  }, {
    question: "ポケモン全国図鑑のNo.491のポケモンはどれ？",
    answers: [
      "レジギガス",
      "ダークライ",
      "シェイミ",
      "アルセウス"
    ],
    correct: "ダークライ"
  }, {
    question: "ホウエン地方チャンピオン戦VSダイゴの１匹目のポケモンはどれ？",
    answers: [
    "アーマルド",
    "メタグロス",
    "ボスゴドラ",
    "エアームド"
  ],
    correct: "エアームド"
  },{
    question: "シンオウ地方のバトルタワーのタワータイクーンは誰？",
    answers: [
    "ジンダイ",
    "ダツラ",
    "クロツグ",
    "リラ"
  ],
    correct: "クロツグ"
  }
];

const quizLength = quiz.length; 
let quizIndex = 0;
let score = 0;

const $button = document .getElementsByTagName("button")
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent=quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();
//クイズの正誤の処理
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert(`不正解！正解は、「${quiz[quizIndex].correct}」です！`);
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz(); 
    }else if(score === 5){
      //全問正解したらこちらを実行
      window.alert(`終了！Congratulations！全問正解です！`);
    }else if(score === 0){
      //全問不正解したらこちらを実行
      window.alert(`終了！残念！全問不正解です！`);
  }else{
    //問題数がもうなければこちらを実行
    window.alert(`終了！あなたの正解数は` + score + `/` + quizLength + `です！`);
  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click",(e)=>{
    clickHandler(e);
  });
  handlerIndex++
};
