const colors = ['yellow', 'red', 'blue', 'purple', 'green'];
document.body.style.backgroundColor = 'Blue';
function myFunction() {
    const colorChange = parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[colorChange];
}