function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function display(dimension) {
    let rowDivs;
    document.querySelector(".container").innerHTML = "";
    for (let i = 0; i < dimension; ++i) {
        rowDivs = document.createElement("div");
        rowDivs.setAttribute("class", "flex-row");
        rowDivs.classList.add("container");
        for (let j = 0; j < dimension; ++j) {
            rowDivs.innerHTML += `<div class="flex-item"></div>`;
        }
    
        rowDivs.addEventListener("mouseover", (event) => {
            if (event.target.className === "flex-item")
                event.target.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
            else
                event.stopPropagation();
        });
    
        document.querySelector(".container").appendChild(rowDivs);
    }
}

document.querySelector("#new-dimension").addEventListener("click", () => {
    let getDimension = Number(document.querySelector("#dimension").value);
    let newDimension = getDimension * 20;
    document.querySelector(".container").style.height = `${newDimension}px`;
    document.querySelector(".container").style.width = `${newDimension}px`;

    display(getDimension);

    const temp =  document.querySelectorAll(".flex-row");

    temp.forEach((div) => {
        div.style.width = `${newDimension}px`;
        div.style.height = `${newDimension}px`;
    });
});


document.querySelector("#reset").addEventListener("click", () => {
    const temp =  document.querySelectorAll(".flex-item");

    temp.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});

display(16);