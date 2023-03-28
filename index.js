const container = document.getElementById("container");

let rows = document.getElementsByClassName("gridRow");

let cells = document.getElementsByClassName("cell");




for (let i = 0; i < 16; i++){

    let row = document.createElement("div");

    container.appendChild(row).className = "gridRow";
}


for (let i = 0 ; i < 16; i++){
    for (let j = 0; j < 16; j++) {

        let column = document.createElement("div");
        
        rows[j].appendChild(column).className = "cell";

    }
}

const elements = document.querySelectorAll("div.cell");
console.log(elements)

elements.forEach((item) => {
    item.addEventListener('mousemove', () => {
        
        item.setAttribute('style', 'background-color:black');
    })

    // item.addEventListener('touchend', () => {
    //     item.setAttribute('style', 'background-color:black');
    // })
    
    
})

