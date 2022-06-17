// --------------------------------------------------------------
// 変数の定義の仕方は
// const（定数）かlet（変数）のどちらか

// 変にletで宣言すると、これどこかで変える予定あるの？ と思われるので基本はconstで

// documentの中にhtmlのすべてがオブジェクト化されている
//　この中からgetElementByIdという関数などを使って要素を取り出す
// --------------------------------------------------------------

// リストの親を代入
const listParent = document.getElementById("list-parent");

// templateを代入
const template = document.getElementById("list-template");

// ボタンたちを代入
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");

let listNum = 1; // リストの数

// -------------------------------------------------------
// 関数は
// ｀｀｀｀｀｀｀｀｀｀｀｀｀｀｀
// function 関数名(引数1, 2){
//   処理
// }
// ｀｀｀｀｀｀｀｀｀｀｀｀｀｀｀
// みたいにして書く
// -------------------------------------------------------

// ボタンを押したときの関数

function addList() {
  // リストの数を増やす
  listNum += 1;

  // 隠している雛形をコピーして代入
  const clone = template.cloneNode(false);

  // 見えるようにする
  clone.style.display = "";

  // idを「list-数」にする
  clone.id = "list-" + listNum;

  // 中の文字をlistNumの文字化したものにする
  clone.textContent = listNum.toString();

  // 親要素に追加
  listParent.appendChild(clone);

  // 要素の数によってボタンが押せるかを切り替える
  toggleBtnDisable();
}

//一番下のものを消す関数
function deleteList() {
  // 親から一番下の子要素を削除
  listParent.removeChild(listParent.childNodes[listNum + 1]);

  // リストの数を減らす
  listNum -= 1;

  // 要素の数によってボタンが押せるかを切り替える
  toggleBtnDisable();
}

// 要素の数でボタンが押せるかを切り替える関数
function toggleBtnDisable() {
  if (listNum <= 1) {
    deleteBtn.disabled = true;
  } else {
    deleteBtn.disabled = false;
  }

  if (listNum >= 5) {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
}
