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