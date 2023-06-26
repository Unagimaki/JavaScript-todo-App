const addBtn = document.querySelector('.btn_add')
const body = document.querySelector('.todo_body')
addBtn.addEventListener('click', addTodo)
let todos = []

console.log('work')

function addTodo() {
    let add = prompt('Название дела')
    todos.push(add)
    todos.forEach((item) => {
        console.log(item)
    })

    let li = document.createElement('li')
    li.innerHTML = add
    body.append(li)

}
