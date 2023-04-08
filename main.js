//variables

let btnSizeCanvas = document.getElementById(`btnSize`)
let btnBlack = document.getElementById(`black`)
let btnRainbow = document.getElementById(`rainbow`)

let container = document.getElementById(`container`)

let btnRestart = document.getElementById(`restart`)


let inputSize = 16
let canvasSize  //cambiar 16 por el input size

let cells
let divsToClear
//Create Grid 16x16

function multiply(a){
    canvasSize = a**2
}

function createGrid(s){
    container.style.gridTemplateColumns = (`repeat(${inputSize}, 1fr)`)
    container.style.gridTemplateRows = (`repeat(${inputSize}, 1fr)`)
    for( let i = 0 ; i < s ** 2 ; i++ ){
        cells = document.createElement(`div`)
        cells.setAttribute(`id`,`cells`)        //added ID 
        cells.classList.add(`divs`)             //added class
        container.appendChild(cells)       
    }
}

//clean grid, remove childs
divsToClear = document.getElementById(`cells`)
//btnRestart.addEventListener(`click`, cleanGrid)

function cleanGrid(){
    
    inputSize = parseInt(prompt(`Write a number from 16 to 99`))
    while(container.firstChild){
        container.removeChild(container.firstChild)   
    }
    createGrid( inputSize )
    
}

function findDivs(s){
    for(let i = 0; i < s**2 ; i++){
        console.log(`hola`)
    }
}

btnRestart.addEventListener(`click`, ()=> {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    createGrid( inputSize )
 })
    

//hover effect -- mouse enter or mouse ends
container.addEventListener(`dragover`, function(e){
    if(e.target.matches(`.divs`)){
        e.target.classList.add(`blackPainted`)
    }
})


//button for pop-up that defines size


btnSizeCanvas.addEventListener(`click`, cleanGrid)



//rbg??





window.addEventListener(`load`, createGrid(inputSize))