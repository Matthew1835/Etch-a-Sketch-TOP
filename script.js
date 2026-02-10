const container = document.getElementById("grid-container");
const popupBtn = document.getElementById("popup-btn");
const clearBtn = document.getElementById("clear-btn")

const createDivs = (size) => {
    container.innerHTML = "";

    for (let i = 0; i < (size * size); i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.width = `${100/size}%`;
        container.append(newDiv)
    }
}

// Mouse Hover
container.addEventListener("mouseover", e => {
    if (e.target.classList.contains("square")) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
})
// container.addEventListener("mouseout", e => {
//     if (e.target.classList.contains("square")) {
//         e.target.style.backgroundColor = "white";
//     }
// })

// Mouse Left Click and Drag
// container.addEventListener("mousemove", e => {
//     if (e.buttons === 1) {
//         if (e.target.classList.contains("square")) {
//             const red = Math.floor(Math.random() * 256);
//             const green = Math.floor(Math.random() * 256);
//             const blue = Math.floor(Math.random() * 256);

//             e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//         }
//     }
// })

document.addEventListener("DOMContentLoaded", () => createDivs(16));

popupBtn.addEventListener("click", () => {
    const size = Number(prompt("Enter your size (1 to 100): "));

    if (size < 1 || size > 100) {
        alert("Size must be between 1 and 100.");
        createDivs(16);
    } else {
        createDivs(size);
    }
})

clearBtn.addEventListener("click", () => {
    [...container.children].forEach(div => {
        div.style.backgroundColor = "white";
    })
})
