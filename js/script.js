const url = "http://api.creativehandles.com/getRandomColor"
colors = () => {
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.body.style.backgroundColor = data.color;
    })
    .catch(function(err) {
        console.log(err);
    });
}


function myFunction() {
    colors(Math.random * colors())
}