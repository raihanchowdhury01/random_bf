const image = document.getElementById("image");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const number = document.getElementById("number");
const loc = document.getElementById("loc");
const f = () => {
    const url = 'https://randomuser.me/api/?gender=male';
    fetch(url)
    .then(res => res.json())
    .then(data => dream(data))
}

function dream(user) {
    image.src = user.results[0].picture.large;

    const nameTitle = user.results[0].name.title;
    const fname = user.results[0].name.first;
    const lname = user.results[0].name.last;
    Name.innerText = `${nameTitle} : ${fname} ${lname}`;

    Email.innerText = user.results[0].email;
    number.innerText = user.results[0].phone;

    const city = user.results[0].location.city;
    const country = user.results[0].location.country;
    loc.innerText = `${city}, ${country}`;


    console.log(user.results[0]);
}

f();

