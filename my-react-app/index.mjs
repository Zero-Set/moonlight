import './style.css';
// アロー関数を使って書いていこう
const onclickAdd = () => {
  // Step.0 動作することを確認する。
  // alert('!!');
  // step.1 変数を作る
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  // 以下の部分はfunctionに移動だよ。step10
  createIncompleteTodo(inputText);

  // step.2 DOM生成追加
  // const li = document.createElement('li');
  // // step.3 class名
  // const div = document.createElement('div');
  // div.className = 'list-row';
  // // step.4 入力した内容追加
  // const p = document.createElement('p');
  // p.className = 'todo-item';
  // p.innerText = inputText;

  // // Step7. 完了ボタン生成
  // const completeButton = document.createElement('button');
  // completeButton.innerText = '完了';
  // completeButton.addEventListener('click', () => {
  //   const moveTarget = completeButton.closest('li');
  //   // Step9. 完了ボタンを押すとまずはボタンを消す
  //   completeButton.nextElementSibling.remove();
  //   completeButton.remove();

  //   const backButton = document.createElement('button');
  //   backButton.innerText = '戻す';

  //   moveTarget.firstElementChild.appendChild(backButton);
  //   document.getElementById('complete-list').appendChild(moveTarget);
  // });

  // // Step8. 削除ボタン作成(こんな実装はバグの温床になってくる）
  // const deleteButton = document.createElement('button');
  // deleteButton.innerText = '削除';
  // deleteButton.addEventListener('click', () => {
  //   const deleteTarget = deleteButton.closest('li');
  //   document.getElementById('incomplete-list').removeChild(deleteTarget);
  // });

  // // step.5 HTMLの階層構造を作る。
  // div.appendChild(p);
  // div.appendChild(completeButton);
  // div.appendChild(deleteButton);
  // li.appendChild(div);

  // // step6. 未完了リストに追加する。
  // document.getElementById('incomplete-list').appendChild(li);
};

// 未完了のToDO

const createIncompleteTodo = (inputText) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = inputText;

  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    const moveTarget = completeButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    // step.11 戻すボタンの実装
    backButton.addEventListener('click', () => {
      //const todoText = backButton.previousElementSibling.textContent;
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest('li').remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById('complete-list').appendChild(moveTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById('incomplete-list').appendChild(li);
};

// 取得したいidを書く、イベントリスナー
document
  .getElementById('add-button')
  .addEventListener('click', onclickAdd, false);
