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
function cleanGrid(){
    
    inputSize = parseInt(prompt(`Write a number from 16 to 99`))
    while(container.firstChild){
        container.removeChild(container.firstChild)   
    }

    createGrid( inputSize )
    
}

//Restart button, resets the canvas
btnRestart.addEventListener(`click`, ()=> {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    createGrid( inputSize )
 })
    

//hover effect -- mouse enter or mouse ends

btnBlack.addEventListener(`click`, function(){
    gridCell = document.querySelectorAll(`#cells`)
    gridCell.forEach(element => {
        element.classList.add(`paintable`)  
        element.classList.remove(`rainbowPaintable`)      
    });
    container.addEventListener(`dragover`, function(e){
        if(e.target.matches(`.paintable`)){
            e.target.classList.add(`blackPainted`)
            e.target.classList.remove(`paintable`)
            }

})})


//button for pop-up that defines size

btnSizeCanvas.addEventListener(`click`, cleanGrid)



//rgb??

const randomNumber = (number) =>{
    return Math.floor( Math.random() * number)
}

const getRandomColor = () =>{
    const h = randomNumber(360)
    const s = randomNumber(100)
    const l = randomNumber(100)
    return `hsl(${h}deg, ${s}%, ${l}%)`

}

btnRainbow.addEventListener(`click`, function(){
    gridCell = document.querySelectorAll(`#cells`)
    gridCell.forEach(element => {
        element.classList.add(`rainbowPaintable`)        
        element.classList.remove(`paintable`)
    })
    container.addEventListener(`dragover`, function(e){
        const randomColor = getRandomColor()
        if(e.target.matches(`.rainbowPaintable`)){
            e.target.style.backgroundColor = randomColor
            e.target.classList.remove(`rainbowPaintable`)
        }
    })
})





window.addEventListener(`load`, createGrid(inputSize))