import service from './service.js';

function createElement(obj) {
    let container = document.createElement('div');
    let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = obj.done;
        checkbox.addEventListener('change', () => {
            obj.done = !obj.done;
            description.style.textDecoration = obj.done ? 'line-through' : 'none';
        });
    let description = document.createElement('span');
        description.textContent = obj.desc;
        description.style.textDecoration = obj.done ? 'line-through' : 'none';
    let removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.addEventListener('click', () => {
            service.deleteById(obj.id);
            container.remove();
        });

    container.append(checkbox, description, removeBtn);
    return container;
}

service.data.forEach(el => document.body.appendChild(createElement(el)));

let inputDesc = document.querySelector('#desc');
let btnAdd = document.querySelector('#add');
    btnAdd.addEventListener('click', () => {
        if (!inputDesc.value.trim()) return alert('Description must not be empty!');
        let newItem = {
            desc: inputDesc.value.trim(),
            done: false
        };
        service.add(newItem);
        document.body.append(createElement(newItem));
    });
