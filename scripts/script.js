const addBtn = document.querySelector('.btn_add')
let body = document.querySelector('.todo_body')
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
        console.log(item)
        html +=
        `
            <li class="todo_item">${item}</li>
        `
    })
    console.log(html)
    body.innerHTML = html 
}

