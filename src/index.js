const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // 未完了リストの追加
    createIncompleteTodo(inputText);



};


// 渡された引数を元に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";

    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;


    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");
        completeButton.nextSibling.remove();
        completeButton.remove();


        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton)

        document.getElementById("complete-list").appendChild(moveTarget);       
        
        backButton.addEventListener("click", () => {
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            backButton.closest("li").remove();


        });
        
    });



    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        const deleteTarget  = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);

    });




    div.appendChild(p);
    li.appendChild(div);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    document.getElementById("incomplete-list").appendChild(li);




};

document.getElementById("add-button").addEventListener("click", onClickAdd);