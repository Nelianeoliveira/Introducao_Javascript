const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('change-cat');

const getCats = async() => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return json.webpurl;

};

const loadImg = async() => {
    const img = document.getElementsByTagName('cat');
    img.src = await getCats();
};



btn.addEventListener('click', loadImg);

loadImg();