console.log('Script connected!');

const arrayOfLoveWishes = [
  "Міцного здоров'я та довгих років життя!",
  "Нехай кожен день буде сповнений енергії та сил!",
  "Бажаю тобі здоров'я, яке ніколи не підводить!",
  "Хай серце б'ється рівно, а тиск завжди буде нормальним!",
  "Міцного імунітету та чудового самопочуття!",
  "Нехай жодна хвороба не затьмарить твої дні!",
  "Сили, витримки та бадьорого настрою щодня!",
  "Хай здоров'я буде твоїм вірним супутником усе життя!",
  "Бажаю тобі завжди залишатися в тонусі та гарному настрої!",
  "Міцного сну, легкого пробудження та чудового дня!",
  "Бережи своє здоров'я, і воно віддячить тобі довголіттям!",
  "Нехай твоє тіло буде сильним, а дух – непохитним!",
  "Міцних нервів і гармонії в душі!",
  "Нехай твоє здоров'я буде таким же міцним, як твоя воля!",
  "Бажаю завжди бути в формі та повним життєвої енергії!",
  "Хай твоє серце б'ється тільки від радості!",
  "Легкості в тілі, ясності в голові та радості в серці!",
  "Бажаю здоров'я, що не знає меж!",
  "Щоб жоден вірус не мав шансів перед твоїм імунітетом!",
  "Нехай твоє здоров'я буде бездоганним, а життя – щасливим!"
];

document.getElementById('Wishes_btn').addEventListener('click', function() {
  console.log('Button clicked!');
  let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
  document.getElementById('p_Wishes').innerText = arrayOfLoveWishes[index];
});

let countOfHearts = 5;
console.log('countOfHearts: ' + countOfHearts);

document.getElementById('heartsforwishes').innerText = '💊'.repeat(countOfHearts);

const wishesBtn = document.getElementById('Wishes_btn');
const buyHeartsBtn = document.getElementById('btnbuyhearts');

wishesBtn.addEventListener('click', () => {
    if (countOfHearts > 0) {
        countOfHearts--;
        console.log('countOfHearts: ' + countOfHearts);
        document.getElementById('heartsforwishes').innerText = '💊'.repeat(countOfHearts) + '🤍'.repeat(5 - countOfHearts);
    }
    
    if (countOfHearts <= 0) {
        wishesBtn.disabled = true;
        wishesBtn.style.backgroundColor = 'grey';
        alert("Ліміт натискань досягнуто!");
    }
});

buyHeartsBtn.addEventListener('click', () => {
    countOfHearts = 5;
    document.getElementById('heartsforwishes').innerText = '💊'.repeat(countOfHearts);
    wishesBtn.disabled = false;
    wishesBtn.style.backgroundColor = '';
    document.getElementById('p_Wishes').innerText = '';
    document.getElementById('p_Wishes').style.backgroundColor = '';
    console.log('btnbuyhearts clicked!');
});

const images = [
  "images/gallery/254.jpg",
  "images/gallery/14190.jpg",
  "images/gallery/2149611232.jpg",
  "images/gallery/2148168440.jpg",
  "images/gallery/2149611193.jpg",
  "images/gallery/2149611238.jpg"
];

let currentIndex = 0;
const photo = document.getElementById("photo2");
const prevBtn = document.getElementById("photo1");
const nextBtn = document.getElementById("photo3");

function updateImage(index) {
  photo.style.opacity = 0; // Затемнення перед зміною
  setTimeout(() => {
      photo.src = images[index];
      photo.style.opacity = 1; // Плавне повернення видимості
  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
});

fetch('./vitamins.json')
  .then(response => response.json())
  .then(data => {
    const vitaminsContainer = document.getElementById("p_vitamins");
    data.forEach(item => {
      let divVitamin = document.createElement("div");
      divVitamin.classList.add("vitamin");
      divVitamin.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 style="font-size: 18px; margin-bottom: 10px;">${item.title}</h3>
          <p style="font-size: 14px; margin-bottom: 10px;">${item.description}</p>
          <img src="${item.image}" alt="Зображення вітаміну" style="width: 120px; height: 120px; object-fit: cover; display: block; margin: 0 auto;" onerror="this.onerror=null; this.src='images/default.jpg';">
          <button style="margin-top: 10px; font-size: 14px; padding: 5px 10px; cursor: pointer;" onclick="showFormula('${item.formula}')">Переглянути формулу</button>
        </div>
      `;
      vitaminsContainer.appendChild(divVitamin);
    });
  })
  .catch(error => console.error('Error fetching vitamins:', error));

// Функція для показу формули
function showFormula(formulaImage) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  const img = document.createElement("img");
  img.src = formulaImage;
  img.alt = "Формула вітаміну";
  img.style.width = "300px";
  img.style.height = "300px";
  img.style.objectFit = "contain";
  img.style.border = "2px solid white";

  const closeButton = document.createElement("button");
  closeButton.innerText = "Закрити";
  closeButton.style.position = "absolute";
  closeButton.style.top = "20px";
  closeButton.style.right = "20px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.fontSize = "16px";
  closeButton.style.cursor = "pointer";
  closeButton.style.backgroundColor = "white";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(img);
  modal.appendChild(closeButton);
  document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", () => {
  const vitaminsContainer = document.getElementById("p_vitamins");

  arrayOfVitamins.forEach((item) => {
    let divVitamin = document.createElement("div");
    divVitamin.classList.add("vitamin");

    let title = document.createElement("h3");
    title.innerText = item.title;

    let description = document.createElement("p");
    description.innerText = item.description;

    let imgVitamin = document.createElement("img");
    imgVitamin.src = item.image;
    imgVitamin.alt = item.title + " вигляд";
    imgVitamin.style.width = "150px";

    let imgFormula = document.createElement("img");
    imgFormula.src = item.formulaImage;
    imgFormula.alt = item.title + " формула";
    imgFormula.style.width = "150px";

    let buyButton = document.createElement("button");
    buyButton.innerText = "Купити";
    buyButton.classList.add("buy-btn");
    buyButton.addEventListener("click", () => {
      alert(`Ти купив ${item.title}!`);
    });

    divVitamin.appendChild(title);
    divVitamin.appendChild(description);
    divVitamin.appendChild(imgVitamin);
    divVitamin.appendChild(imgFormula);
    divVitamin.appendChild(buyButton);

    vitaminsContainer.appendChild(divVitamin);
  });
});
