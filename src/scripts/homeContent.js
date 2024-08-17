import "../styles/homeContent.css"

function createHomeContent(content) {

    // const content = document.createElement("div");
    // content.classList.add("content");
    // document.body.appendChild(content);

    const priorityHigh = document.createElement("div");
    const priorityMid = document.createElement("div");
    const priorityLow = document.createElement("div");

    priorityHigh.classList.add("priorityHigh", "priorityRow");
    priorityMid.classList.add("priorityMid", "priorityRow");
    priorityLow.classList.add("priorityLow", "priorityRow");

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


