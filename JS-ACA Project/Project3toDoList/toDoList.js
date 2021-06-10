document.body.style.background = "url('img/bg-img-5.jpg') no-repeat center center";
btnAdd.onclick = addElement;
btnRefresh.onclick = removeElement;

function addElement() {
    let li = document.createElement("li");
    if(input.value.length > 60){
        alert("Write your dream short, please!");
        input.value = "";
        return;
    }
    input.value.trim() !== '' ? ul.appendChild(li) : alert("Write your dream, please!");
    let text = document.createTextNode(input.value);
    let span = document.createElement("span");
    let del = document.createTextNode("X");
    li.appendChild(text);
    li.onclick =  () => li.classList.toggle("checked");
    span.appendChild(del);
    li.appendChild(span);
    span.classList.add("close");
    span.onclick = () => ul.removeChild(li);
    input.value = "";
}
function removeElement() {
    ul.innerHTML = ""
}