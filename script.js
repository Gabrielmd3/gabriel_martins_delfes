const inputBox = document.getElementById("input-box")
const containerLista = document.getElementById("lista_container")
const btn = document.getElementById("btn")
let lista = []

async function addTask() {
    if (inputBox.value === '')
        alert("escreva alguma coisa antes de adicionar")
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        containerLista.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        lista.push(inputBox.value)
        inputBox.value = ''
    }
}

containerLista.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") 
    {
        texto_a_remover = e.target.parentElement.textContent.slice(0, -1)
        e.target.parentElement.remove()
        lista = lista.filter(item => item !== texto_a_remover);
        let texto = ''
        if(lista.length == 0)
            texto = "Parabens!! Você acabou todas suas atividades, se tiver mais alguma não esqueça de inclui-la"
        else
        {
            texto = `você ainda tem ${lista.length} tarefas para fazer \n`
            lista.forEach((element, index) => texto += `tarefa ${index+1}: ${element} \n`)
        }
        alert(texto)
    }
}, false)