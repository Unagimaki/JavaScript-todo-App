const addBtn = document.querySelector('.btn_add')
const body = document.querySelector('.todo_body')

addBtn.addEventListener('click', addTodo)

let todos = []
console.log(todos.length)
let text = 'Пустой список'



let todo = {
    name: ' ',
    marked: false,
    id: Math.random().toFixed(3)
}

function addTodo() {
    let add = prompt('Название дела')
    todos.push(
        {
            name: add,
            marked: false,
            id: Math.random().toFixed(3)
        }
    )
    render()
}

function render() {
    let html = ' '
    todos.map((item, index) => {
        item.marked ? html +=
        `
        <div class="todo_item marked">
            <li >${item.name}</li><button onclick="removeTodo(${item.id})" class="delete_btn">Удалить</button><button onclick="markTodo(${item.id})" class="mark_btn">Важное</button>
        </div>
        `
        :
        html +=
        `
        <div class="todo_item">
            <li >${item.name}</li><button onclick="removeTodo(${item.id})" class="delete_btn">Удалить</button><button onclick="markTodo(${item.id})" class="mark_btn">Важное</button>
        </div>
        `

    })
    body.innerHTML = html;
    todos.length === 0 ? body.innerHTML = text : false

}


function removeTodo(id) {
    todos.forEach((item, index) => {
        item.id == id ? todos.splice(index, 1)
        : false
    })

    render()
}

function markTodo(id) {
    todos.map((item) => {
        item.id == id && item.marked ? item.marked = false :
        item.id == id && !item.marked ? item.marked = true :
        false
    })
    render(id)
}

render()