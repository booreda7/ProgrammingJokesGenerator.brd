const jokeText = document.getElementById('joke')
const button = document.getElementById('jokebtn')

button.addEventListener('click', theJoke)

async function theJoke(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming')
    const data = await res.json();
    let joke = "";
    if(data.joke == undefined){
        joke = `${data.setup} <br /> ${data.delivery}`
    }else{
        joke = data.joke
    }
    jokeText.innerHTML=joke
}