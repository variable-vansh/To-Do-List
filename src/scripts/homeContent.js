import "../styles/homeContent.css"

let priorityHigh, priorityMid, priorityLow;

function createHomeContent(content) {

    priorityHigh = document.createElement("div");
    priorityMid = document.createElement("div");
    priorityLow = document.createElement("div");

    priorityHigh.classList.add("priorityHigh", "priorityRow");
    priorityMid.classList.add("priorityMid", "priorityRow");
    priorityLow.classList.add("priorityLow", "priorityRow");

    priorityHigh.setAttribute("id", "priorityHigh")
    priorityMid.setAttribute("id", "priorityMid")
    priorityLow.setAttribute("id", "priorityLow")

    const priorityHighTitle = document.createElement("div");
    const priorityMidTitle = document.createElement("div");
    const priorityLowTitle = document.createElement("div");

    priorityHighTitle.classList.add("priorityHighTitle", "priorityRowTitle");
    priorityMidTitle.classList.add("priorityMidTitle", "priorityRowTitle");
    priorityLowTitle.classList.add("priorityLowTitle", "priorityRowTitle");

    priorityHighTitle.innerText = "Priority High"
    priorityMidTitle.innerText = "Priority Mid"
    priorityLowTitle.innerText = "Priority Low"

    content.appendChild(priorityHighTitle);
    content.appendChild(priorityMidTitle);
    content.appendChild(priorityLowTitle);

    priorityHighTitle.appendChild(priorityHigh);
    priorityMidTitle.appendChild(priorityMid);
    priorityLowTitle.appendChild(priorityLow);
}


export { createHomeContent };


