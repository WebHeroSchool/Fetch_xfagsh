const card__container = document.querySelector('.card__container');
const user = 'xfagsh';

fetch('https://api.github.com/users/' + user)
    .then(
        (response) => {
            return response.json();
        }
    )
    .then(res => {
        getResponse(res);
    })
    .catch(err => {
        console.error(err);
    });

function getResponse(res) {
    console.log(res);
    createCard(res);
}

function createCard(obj) {
    // let bio;
    // if (!obj.bio) {
    //     bio = 'Нету bio'
    // } else {
    //     bio = obj.bio;
    // }
    let bio = (!obj.bio) ? 'Нету bio' : obj.bio;

    const text = `
    <div class="card">
        <div class="card__img">
            <img src="${obj.avatar_url}">
        </div>
        <div class="card__title">${obj.login}</div>
        <div class="card__description">${bio}</div>
        <a href="${obj.html_url}" target="_blank" class="card__link">${obj.html_url}</a>
    </div>
    `;
    card__container.insertAdjacentHTML('beforeend', text);
}
