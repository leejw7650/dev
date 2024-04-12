const buttonRed = document.getElementById('buttonRed');
const buttonGreen = document.getElementById('buttonGreen');
const buttonBlue = document.getElementById('buttonBlue');

const changeRed = () => {
    document.getElementById('component-red').style.backgroundColor = '#ff8f8f';
    document.getElementById('component-green').style.backgroundColor = '#ff8f8f';
    document.getElementById('component-blue').style.backgroundColor = '#ff8f8f';
}

const changeGreen = () => {
    document.getElementById('component-red').style.backgroundColor = '#8fff8f';
    document.getElementById('component-green').style.backgroundColor = '#8fff8f';
    document.getElementById('component-blue').style.backgroundColor = '#8fff8f';
}

const changeBlue = () => {
    document.getElementById('component-red').style.backgroundColor = '#8f8fff';
    document.getElementById('component-green').style.backgroundColor = '#8f8fff';
    document.getElementById('component-blue').style.backgroundColor = '#8f8fff';
}

buttonRed.addEventListener('click', changeRed);
buttonGreen.addEventListener('click', changeGreen);
buttonBlue.addEventListener('click', changeBlue);

