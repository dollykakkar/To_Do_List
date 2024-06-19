let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let dltBtn=document.createElement("button");
    dltBtn.innerText="delete";
    dltBtn.classList.add(".delete");
    item.appendChild(dltBtn);

    ul.appendChild(item);
    input.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let ListItem=event.target.parentElement;
        ListItem.remove();
        console.log("deleted");
    }
});

