const appUrl = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    try {
        const {data} = await axios(appUrl+username)

        createUserCard(data)
        getRepos(username)
    } catch (error) {
        if(error.response.status == 404){

            createErrorCard('we can not find any profile for'+' '+ username)
        }
    }
}

function createUserCard(user) {
    const card = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
            <li>${user.followers} <strong> Followers</strong></li>
            <li>${user.following} <strong> Following</strong></li>
            <li>${user.public_repos} <strong> Repos</strong></li>
        </ul>

        <div id="repos">
        </div>
    </div>
</div>`
main.innerHTML = card

}

async function getRepos(username) {
    try {
        const {data} = await axios(appUrl + username + '/repos?sort=created')

        addReposToCard(data)
    } catch (err) {
            createErrorCard('Repos not found try again.')
    }
}

function createErrorCard(msg) {
    const ErrCard = `<div class= "card">
                            <h1>${msg}</h1>
                    </div>`
main.innerHTML = ErrCard
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
    .slice(0, 10)
    .forEach(repo => {
        const repoLink = document.createElement('a')
        repoLink.classList.add('repo')
        repoLink.href = repo.html_url
        repoLink.target = '_blank'
        repoLink.innerText = repo.name

        reposEl.appendChild(repoLink)
    });
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const user = search.value

    if(user) {
        getUser(user)
       search.value = ''
    }
})