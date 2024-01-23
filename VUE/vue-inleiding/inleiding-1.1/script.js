// Items declareren vanuit de DOM naar JS.
const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

// Eventlistener op button zet functie in gang.

button.addEventListener('click', addProduct);

// Functie neemt waarde van input. -> Nieuw listitem -> listitem tekstwaarde = input.value -> listitem aan lijst toevoegen -> Inputvalue terug op 0 zetten.
function addProduct() {
    let inputvalue = input.value;
    let listItem = document.createElement('li');
    listItem.textContent = inputvalue;
    list.appendChild(listItem);
    input.value = '';
}