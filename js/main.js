'use strict';

{
  function setWord() {
    // word = words[Math.floor(Math.random() * words.length)];
    // 文字の重複を避けるため、spliceで抜き出す処理にする
    // （復習）spliceは抜き出したものが配列になるので、[0]で要素として取り出す
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'red',
    'blue',
    'pink',
    'yellow',
  ];
  // wordは処理ごとにランダムで選ばれるので変数とする
  let word;
  // 何番目の文字かを管理するための変数locationを定義しておく
  let loc = 0;
  let startTime;
  let isPlayng = false;
  const target = document.getElementById('target');
  // wordはwords配列からランダムに選ばれる
  // Mathfloorは小数点以下切り捨て（整数）
  // Math.random() * length <= length（1,2,3）番までの要素(0,1,2)
  // word = words[Math.floor(Math.random() * words.length)];
  // target.textContent = word;

  // 上記処理はsetWordで置き換え可能
  // setWord();

  document.addEventListener('click', () => {
    if (isPlayng === true) {
      return;
    }
    isPlayng = true;
    startTime = Date.now();
    setWord();
  });

  // clickのほかkeydownでキーボード入力をトリガーにできる
  document.addEventListener('keydown', e => {

  // 初めにメインとなる処理以外のケースを除外することでその後のコードを字下げせず書くことができる（early return）
    if (e.key !== word[loc]){
      return;
    }

    // // eはキー入力した値とし、それがwordのloc番目の配列とあっているかを照合する
    // // 合っていたらlocの次の文字を参照する
    // if (e.key === word[loc]) {
  loc++;
  target.textContent = '_'.repeat(loc) + word.substring(loc);

  // locがwordの要素数（文字数）となったとき、関数setWordを実行
  if (loc === word.length) {

    // words配列内要素がなくなったらhtmlのid=resultを取得しtextを表示
    if (words.length === 0) {
      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      const result = document.getElementById('result');
      result.textContent = `Finished ${elapsedTime} seconds!`;
      return;
    }

    setWord();
  }
  });

}