const addBtn = document.querySelector('.btn_add')
const body = document.querySelector('.todo_body')
addBtn.addEventListener('click', addTodo)
let todos = []

html = ''
body = html


function addTodo() {
    let add = prompt('Название дела')
    todos.push(add)

    let li = document.createElement('li')
    li.innerHTML = add
    body.append(li)

}

function render() {
    todos.forEach((item) => {
        html += 
        `
            <li class="todo_item">${add}</li>
        `
    })
}
