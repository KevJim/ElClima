import './styles/main.css';

const id = '1cd38fdfb4e576db86733fbddac42215';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const mountNode = document.getElementById("jsNode");
const City = document.getElementById("city");
const button = document.getElementById("search");

const createCard = async () => {
    let searchCity = City.value;
    const response = await fetch(`${baseUrl}q=${searchCity}&appid=${id}`);
    const data = await response.json();

    const nameCity = document.createElement("h3");
        nameCity.className = "weather-card-title";
        nameCity.textContent = data.name;

        const temperatura = document.createElement("h2");
        temperatura.className = "weather-card-temp";
        const ntemp = Math.floor(convTemp(data.main.temp))
        temperatura.textContent = `${ntemp} °C`;

        const image = document.createElement("img");
        image.className = "weather-image";
        image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        const pronostico = document.createElement("p");
        pronostico.className = "weather-card-pron";
        pronostico.textContent = data.weather.[0].description;

        const card = document.createElement("article");
        card.className = "weather-detail-card";
        card.appendChild(nameCity);
        card.appendChild(temperatura);
        card.appendChild(image);
        card.appendChild(pronostico);

        mountNode.append(card);
        City.value = "";
};

const convTemp = (temp) => {
    const ntemp = temp - 273;
    return ntemp;
}

const clean = document.querySelector("#reset");
clean.addEventListener("click", () => {
    mountNode.innerHTML = "";
})

button.addEventListener('click', createCard);