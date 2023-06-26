const addBtn = document.querySelector('.btn_add')
const body = document.querySelector('.todo_body')
addBtn.addEventListener('click', addTodo)
let todos = []



function addTodo() {
    let add = prompt('Название дела')
    todos.push(add)
    render()
}

function render() {
    let html = ' '
    todos.forEach((item) => {
        html +=
        `
            <li class="todo_item">${item}</li>
        `
    })
    body.innerHTML = html 
}

