const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateNewJoke)

generateNewJoke()

async function generateNewJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
res = await fetch('https://icanhazdadjoke.com/', config)
data = await res.json()
jokeEl.innerHTML = data.joke
}

// function generateNewJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data)=> {
//         jokeEl.innerHTML = data.joke
//     })
// }