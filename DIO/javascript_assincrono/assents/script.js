const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat')



const getCats = async () => {

    const data = await fetch(BASE_URL);
    const json = await data.json();
    console.log(json.webpurl)
    return json.webpurl;


}
const LOAD_IMG = async () => {
    const CAT_IMG = document.getElementById('cat')
    CAT_IMG.src = await getCats();
}

CAT_BTN.addEventListener('click', LOAD_IMG);

LOAD_IMG();