const ul = document.getElementsByTagName("ul")[0];
const li = document.getElementsByTagName("li");
const button = document.getElementsByTagName("button")[0];
const input = document.getElementsByTagName('input')[0];
const list = document.getElementsByTagName("li");
const retrieve = document.querySelector(".retrive");

// Load data from local storage
const savedData = localStorage.getItem('savedList');
if (savedData) {
  ul.innerHTML = savedData;
}

Array.from(li).forEach(function(item){
  item.addEventListener("click", ()=>{
    item.classList.toggle('done');
  })
});

retrieve.addEventListener("click", ()=>{
    localStorage.clear();
    location.reload();
})


function adddelete(item){
  const deletebutton = document.createElement('button');
  deletebutton.innerHTML = "Delete";
  item.appendChild(deletebutton);     
  deletebutton.style.marginLeft ="20px";
  item.style.margin = "20px";
  deletebutton.addEventListener('click', ()=>{
    ul.removeChild(item);
    // Save updated data to local storage
    localStorage.setItem('savedList', ul.innerHTML);
  })
}

if(!savedData){
    for(let i = 0; i<list.length;i++){
        adddelete(list[i]);
      }
}



input.addEventListener("keypress", (e)=>{
  if(e.key==="Enter"){
    button.click();
  }
});

button.addEventListener('click', ()=>{
  if(input.value.length > 0){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    adddelete(li);
    input.value = '';
    // Save updated data to local storage
    localStorage.setItem('savedList', ul.innerHTML);
  }    
});
