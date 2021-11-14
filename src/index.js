import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグを未完了リストから削除
  const deleteTarget = target.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = text;

  // liタグを生成
  const li = document.createElement("li");

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // div以下を作成
    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親要素を完了リストから削除
      const deleteTargetDiv = backButton.parentNode;
      const deleteTarget = deleteTargetDiv.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(p);
    div.appendChild(backButton);
    const li = document.createElement("li");
    li.appendChild(div);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
