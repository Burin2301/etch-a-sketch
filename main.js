//var tamanio
let size = 33*33   //inputSize()

//buttons
let btnSize = document.getElementById(`btnSize`)
let black = document.getElementById(`black`)
let rainbow = document.getElementById(`rainbow`)

//container
let container = document.getElementById(`container`)

function createGrid(size){
    for( let i = 1 ; i<size ; i++ ){
        let divs = document.createElement(`div`)
        divs.classList.add(`divs`)
        container.appendChild(divs)
    }
}


//hover

container.addEventListener(`mouseenter`, function(){
    divs.style.backgroundColor = `black`
})




createGrid(size)
