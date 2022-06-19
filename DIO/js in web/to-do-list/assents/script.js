'use strict';




var botao = document.getElementById('buttonIncrement').addEventListener('click', function(){
    const item = document.createElement('label');
    item.classList.add('labelItem')
    item.innerHTML = `
        <input type="checkbox" class="checkboxList" id="checkboxList">
        <div>${document.getElementById('incrementInput').value}</div>
        <input type="button" class="buttonList" id="buttonList" value="X">
    `
    document.getElementById('list').appendChild(item);
});
