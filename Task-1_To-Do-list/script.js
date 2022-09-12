const inputBox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const  todolist = document.querySelector(".todolist");
const  eraseallbtn = document.querySelector(".footer button");

inputBox.onkeyup= ()=>{
    let userData = inputBox.value;
    if(userData.trim()!=0)
    {
        addbtn.classList.add("active");
    }
    else
    {
        addbtn.classList.remove("active");   
    }
}
showtasks();
addbtn.onclick =()=>{
    let userData =inputBox.value;
    let getlocalStorage = localStorage.getItem("new todo");
    if(getlocalStorage == null)
    {
        listArr =[];
    }
    else
    {
        listArr = JSON.parse(getlocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showtasks();
    addbtn.classList.remove("active"); 
}
function showtasks(){
    let getlocalStorage = localStorage.getItem("new todo");
    if(getlocalStorage == null)
    {
        listArr =[];
    }
    else
    {
        listArr = JSON.parse(getlocalStorage);
    }
    const pendingnumb =document.querySelector(".pendingnumb");
    pendingnumb.textContent=listArr.length;
    if(listArr.length >0){
        eraseallbtn.classList.add("active");
    }
    else{
        eraseallbtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element}<span onclick="deletetask(${index})";><i class="fa-solid fa-trash"></i></span></li>`;
    });
    todolist.innerHTML = newLiTag;
    inputBox.value = "";
}
function deletetask(index){
    let getlocalStorage = localStorage.getItem("new todo");
    listArr= JSON.parse(getlocalStorage);
    listArr.splice(index ,1);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showtasks();
}
eraseallbtn.onclick =()=>{
    listArr= [];
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showtasks();
}
