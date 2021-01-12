document.addEventListener("DOMContentLoaded", () => 
{
  const dropDown = document.createElement('select');
  const highPrio = document.createElement('option');
  const medPrio = document.createElement('option');
  const lowPrio = document.createElement('option');
  highPrio.textContent = 'High'
  medPrio.textContent = 'Medium'
  lowPrio.textContent = 'Low'
  
  let form = document.getElementById('create-task-form');
  form.appendChild(dropDown);
  dropDown.append(highPrio, medPrio, lowPrio);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = event.target.querySelector('input#new-task-description');
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
  

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
      li.remove();

    })


    if(dropDown.value == "High")
      {
        li.style.color = "red";
      }
      else if(dropDown.value == "Medium")
      {
        li.style.color = "yellow";
      }
      else 
      {
        li.style.color = "green";
      }
  })

});


function addTask() {
  jfslka;hfdpa
}