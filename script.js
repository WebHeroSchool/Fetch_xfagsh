const card__container = document.querySelector(".card__container");
const user = "xfagsh";
const date = new Date();

const getDate = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (date) {
      return resolve(date);
    } else {
      return reject("Время неизвестно");
    }
  }, 2000);
});

const getUserInfo = fetch("https://api.github.com/users/" + user).then(
  (res) => {
    return res.json();
  }
);

// function getResponse(res) {
//     createCard(res);
// }

Promise.all([getDate, getUserInfo])
  .then(([date, users]) => {
    // console.log(date);
    // console.log(users);
    // getResponse(users);
    users.date = date;
    createCard(users);
  })
  .catch((err) => {
    console.error(err);
  });

// .then(
//     (response) => {
//         return response.json();
//     }
// )
// .then(res => {
//     getResponse(res);
// })
// .catch(err => {
//     console.error(err);
// });

function createCard(obj) {
  // let bio;
  // if (!obj.bio) {
  //     bio = 'Нету bio'
  // } else {
  //     bio = obj.bio;
  // }
  let bio = !obj.bio ? "Нету bio" : obj.bio;
  const date = obj.date;
  const text = `
    <div class="card">
        <div class="card__img">
            <img src="${obj.avatar_url}">
        </div>
        <div class="card__title">${obj.login}</div>
        <div class="card__description">${bio}</div>
        <a href="${obj.html_url}" target="_blank" class="card__link">${
    obj.html_url
  }</a>
        <p>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</p>
    </div>
    `;
  card__container.insertAdjacentHTML("beforeend", text);
}

// preloader 3 second

let spiner = document.getElementById("spiner");

card__container.style.display = "none";

function hiddenSpiner() {
  spiner.style.display = "none";
  card__container.style.display = "block";
}

setTimeout(hiddenSpiner, 3000);
