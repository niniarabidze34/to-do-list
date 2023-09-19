const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add')
const clearBtn = document.getElementById('clear')
const clearDoneBtn = document.getElementById('clear-done')
const ul = document.getElementById('todo-container')

function addToDoItem(){
    const li = document.createElement('li')
    li.innerText = input.value
    ul.appendChild(li)
    li.addEventListener('click', handleMarkAsDone)
}

function handleMarkAsDone(e){
    const clickedItem = e.target
    clickedItem.classList.add('completed');
}

function handleClick(){
    addBtn.addEventListener('click', () => {
        if(input.value){
            addToDoItem()
        }
    })
}
function handleClearAll(){
    clearBtn.addEventListener('click', () => {
        ul.innerHTML = ''
    })
}

function handleClearDone(){
    clearDoneBtn.addEventListener('click', () =>{
        const doneItems = document.querySelectorAll('.completed')
        console.log(doneItems);
        doneItems.forEach((el) => el.outerHTML = '')
    })

}
handleClick()
handleClearAll()
handleClearDone()