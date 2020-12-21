'use strict';




const todoLists = document.getElementById('todolists');
const addList = document.getElementById('addlist');
const addButton = document.getElementById('addbutton');
const errorText = document.getElementById('error_message');



const createList = () => {
  const todoli = document.createElement('li');
  todoli.classList.add('todoli_edit');

  const endbutton = document.createElement('button');
  endbutton.classList.add('endbutton_edit');
  endbutton.textContent = "完了";

  const clrbutton = document.createElement('button');
  clrbutton.classList.add('clrbutton_edit');
  clrbutton.textContent = "削除";
  
  if(!addList.value){
   const errorMessage = document.createElement('p');
   errorText.textContent = '※リストを入力してください';
  } else{
    todoLists.appendChild(todoli);
    todoli.textContent = addList.value;
    todoli.appendChild(endbutton);
    todoli.appendChild(clrbutton);

    const clrList = () => {
      todoLists.removeChild(todoli);
    }
    endbutton.addEventListener('click',()=>{
      todoli.classList.add('endbutton_line');
      endbutton.classList.add('clrendbotton');
    })
clrbutton.addEventListener('click',()=>{
  clrList();
})
    errorText.textContent = "";
  }
}

const clrText = () => {
  addList.value = "";
}


addButton.addEventListener('click',()=>{
  createList();
  clrText();
})
