// #1

let count = 1;
document.querySelector('.color').addEventListener('mouseover', function () {
    if (count === 1) {
        event.target.style.backgroundColor = 'red';
        count = 2;
    }
    else if (count === 2) {
        event.target.style.backgroundColor = 'yellow';
        count = 3;
    }
    else if (count === 3) {
        event.target.style.backgroundColor = 'green';
        count = 1;
    }
})
document.querySelector('.color').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = '';
})

// #2

document.querySelector('.secret').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.borderColor = 'green';
    event.target.textContent = 'Хочеш знати який?';
    event.target.style.color = 'blue';
    document.querySelector('.secret').addEventListener('mousedown', function () {
        event.target.style.backgroundColor = 'black';
        event.target.style.borderColor = 'yellow';
        event.target.textContent = 'А я тобі не скажу!';
        event.target.style.color = 'white';    
    })
    document.querySelector('.secret').addEventListener('mouseup', function () {
        event.target.style.backgroundColor = 'yellow';
        event.target.style.borderColor = 'green';
        event.target.textContent = 'Хочеш знати який?';
        event.target.style.color = 'blue';    
    })
})
document.querySelector('.secret').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = '';
    event.target.style.borderColor = '';
    event.target.textContent = 'У мене є секрет!';
    event.target.style.color = 'blue';
})

// #3

document.querySelector('.jpg1').addEventListener('click', function () {
    let click = prompt("Write image url");
    event.target.style.backgroundImage = `url('${click}')`;
})
document.querySelector('.jpg2').addEventListener('click', function () {
    let click = prompt("Write image url");
    event.target.style.backgroundImage = `url('${click}')`;
})
document.querySelector('.jpg3').addEventListener('click', function () {
    let click = prompt("Write image url");
    event.target.style.backgroundImage = `url('${click}')`;
})

// #4

document.querySelector('.text1').addEventListener('click', function () {
    event.target.style.color = 'red';
})
document.querySelector('.text2').addEventListener('click', function () {
    event.target.style.color = 'yellow';
})
document.querySelector('.text3').addEventListener('click', function () {
    event.target.style.color = 'green';
})
document.querySelector('.text4').addEventListener('click', function () {
    event.target.style.color = 'blue';
})
document.querySelector('.text5').addEventListener('click', function () {
    event.target.style.color = 'orange';
})
document.querySelector('.text6').addEventListener('click', function () {
    event.target.style.color = 'gray';
})