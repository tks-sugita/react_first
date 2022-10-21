const onClickAdd = () => {
  //テキストボックスの値を取得,初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //Todo内容テキスト取得
    const text = addTarget.firstElementChild.innerText;
    //addTarget初期化
    addTarget.textContent = null;

    //li生成
    const li = document.createElement("li");
    li.innerText = text;

    //button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストの取得
      const text = backButton.parentElement.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //addTargetの子要素に
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //生成したdivタグをComplete-list配下に
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
