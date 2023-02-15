const possibleAnswers = [
  '数あるNFTの中で\n部長を選んだあなたは\n素晴らしい',
  'X-Potionを\n手に入れよう',
  'X-Potionで\n部長は透明になれる',
  'X-potionの服用は\n各部長、1回だけ',
  '朝目を覚ますと\n体にドーナツが\nハマっていた',
  'これはSBTではない',
  '取引の履歴を\n形にしたもの',
  '書を捨て\nドーナツを食べよう',
  'ドーナツの穴は\nまだ誰のものでも\nありません',
  '右投げ\n左打ち',
  'ドーナツの白い部分は\nシナモンシュガー',
  '部長は\n運を捨て去っています',
  '存在することと\n実体があることは違う',
  '部長は\n3人家族',
  'カブトムシ\nみたいな名前の\nバンドが好き',
  '部長は\n電車通勤が苦手',
  '好きな動物は\nオオカミ',
  'AWOOOOOOO.',
  '保有作品は\n商用利用OK',
  '実はDiscordも\n存在しています',
  '穴のある食材は\n親近感が湧きます',
  '休憩するなら\nドーナツがオススメ',
  'miuradonuts.eth\n50年の長期契約中',
  'この証明書の\n保有枚数につき\n役職がつきます',
];

function getResponse() {
  let answer = document.getElementById('answer');
  answer.classList.add('hidden');
  answer.innerText = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  setTimeout(function () {
    answer.classList.remove('hidden');
  }, 400);
}
