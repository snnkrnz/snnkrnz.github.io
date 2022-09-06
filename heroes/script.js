const hide = document.getElementById("hide");
const mainModal = document.getElementById("main-modal");
const normal = document.getElementById("normal-mode");
const hard = document.getElementById("hard-mode");
const bottomModal = document.getElementById("bottom-modal");
const send = document.getElementById("send");
const heroes = document.getElementById("heroes");
const heroList = document.getElementById("hero-list");

// hero list - array
const lolHeroes = ["Aatrox",
"Ahri",
"Akali",
"Akshan",
"Alistar",
"Amumu",
"Anivia",
"Annie",
"Aphelios",
"Ashe",
"Aurelion Sol",
"Azir",
"Bard",
"Bel'Veth",
"Blitzcrank",
"Brand",
"Braum",
"Caitlyn",
"Camille",
"Cassiopeia",
"Cho'Gath",
"Corki",
"Darius",
"Diana",
"Dr. Mundo",
"Draven",
"Ekko",
"Elise",
"Evelynn",
"Ezreal",
"Fiddlesticks",
"Fiora",
"Fizz",
"Galio",
"Gangplank",
"Garen",
"Gnar",
"Gragas",
"Graves",
"Gwen",
"Hecarim",
"Heimerdinger",
"Illaoi",
"Irelia",
"Ivern",
"Janna",
"Jarvan IV",
"Jax",
"Jayce",
"Jhin",
"Jinx",
"Kai'Sa",
"Kalista",
"Karma",
"Karthus",
"Kassadin",
"Katarina",
"Kayle",
"Kayn",
"Kennen",
"Kha'Zix",
"Kindred",
"Kled",
"Kog'Maw",
"LeBlanc",
"Lee Sin",
"Leona",
"Lillia",
"Lissandra",
"Lucian",
"Lulu",
"Lux",
"Malphite",
"Malzahar",
"Maokai",
"Master Yi",
"Miss Fortune",
"Mordekaiser",
"Morgana",
"Nami",
"Nasus",
"Nautilus",
"Neeko",
"Nidalee",
"Nilah",
"Nocturne",
"Nunu ve Willump",
"Olaf",
"Orianna",
"Ornn",
"Pantheon",
"Poppy",
"Pyke",
"Qiyana",
"Quinn",
"Rakan",
"Rammus",
"Rek'Sai",
"Rell",
"Renata Glasc",
"Renekton",
"Rengar",
"Riven",
"Rumble",
"Ryze",
"Samira",
"Sejuani",
"Senna",
"Seraphine",
"Sett",
"Shaco",
"Shen",
"Shyvana",
"Singed",
"Sion",
"Sivir",
"Skarner",
"Sona",
"Soraka",
"Swain",
"Sylas",
"Syndra",
"Tahm Kench",
"Taliyah",
"Talon",
"Taric",
"Teemo",
"Thresh",
"Tristana",
"Trundle",
"Tryndamere",
"Twisted Fate",
"Twitch",
"Udyr",
"Urgot",
"Varus",
"Vayne",
"Veigar",
"Vel'Koz",
"Vex",
"Vi",
"Viego",
"Viktor",
"Vladimir",
"Volibear",
"Warwick",
"Wukong",
"Xayah",
"Xerath",
"Xin Zhao",
"Yasuo",
"Yone",
"Yorick",
"Yuumi",
"Zac",
"Zed",
"Zeri",
"Ziggs",
"Zilean",
"Zoe",
"Zyra"];
const lower = lolHeroes.map(e => {
    return e.toLowerCase();
  });

// new game
function yenile(){
    location.reload();
    }

// click play , display none - flex mainModal bottomModal heroList
function hardMode(){
    mainModal.style.display = "none";
    bottomModal.style.display = "flex";
    heroList.style.display = "flex";
// focus input
document.querySelector("#champ-input").focus();

// time 20:00
var timeoutHandle;
function countdown(minutes, seconds) {
function tick() {
        var counter = document.getElementById("time");
        counter.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }

        if(minutes+seconds== -1){
            counter.innerHTML = "<small>Süre Doldu</small>";
            let sonucGoster = document.getElementById("end-game");
            let girisiGizle = document.getElementById("modal-input");
            let skorGoster = document.getElementById("score");

            girisiGizle.style.display = "none";
            sonucGoster.style.display = "block";
            endScore = skorGoster.innerText;

            // delete undefined
            let value;
            unuttun = lolHeroes.filter(function(item) {
                return item !== value
            })

            sonucGoster.innerHTML = `<div id="your-score">Skorun: ${endScore}</div>
            <div id="missed">Unuttukların:<br> ${unuttun} </div><br>
            <button id="new-game" onclick="yenile()">Tekrar Oyna</button>`
        }
    }
    tick();
}
countdown(20, 00);

// end game
let bitirbutton = document.getElementById('bitir');
bitirbutton.addEventListener('click', (event) => {
    countdown(00,00)
});

// question mark
    let soru = `<img id="heroes-image-qm" src="images/soru.jpg" alt="Soru">
<span id="hero-name-qm">?</span>`;

    if(heroList.style.display == "flex"){
        for(i=0;i<=lolHeroes.length -1;i++){
            var li = document.createElement('li');
            li.setAttribute("id", `all-heroes-${lolHeroes.indexOf(lolHeroes[i])}`);
            li.innerHTML = soru;
            heroList.appendChild(li);
        };
    }
}

const allHeroes = document.getElementById("all-heroes");
const heroesImage = document.getElementById("heroes-image");
const heroName = document.getElementById("hero-name");
let z = 0;

function normalMode(){
    document.getElementById("yapim").style.display = "block";

    setTimeout(yapim, 2000);
    function yapim() {
        document.getElementById("yapim").style.display = "none";
}

    
}

// input enter key
let input = document.getElementById("champ-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("send").click() = function() {tahmin()};
      }
    });

// send button
function tahmin(){

    let score = document.getElementById("score");
    let gelenTahmin = document.getElementById("champ-input").value;
    let kontrol = lolHeroes.find(s => s == gelenTahmin);
    let kontrol2 = lower.find(s => s == gelenTahmin.toLowerCase());
    let tahminIndex = lolHeroes.indexOf(gelenTahmin)
    let tahmin2Index = lower.indexOf(gelenTahmin.toLowerCase())
    let gelenId = document.getElementById(`all-heroes-${tahminIndex}`);
    let gelenId2 = document.getElementById(`all-heroes-${tahmin2Index}`);
    
    if(gelenTahmin==kontrol){
        if("all-heroes-"+tahminIndex == gelenId.getAttribute(`id`)){
            let img = `<img id="heroes-image" src="images/${gelenTahmin}.jpg" alt="${gelenTahmin}">
                        <span id="hero-name">${gelenTahmin}</span>`;
            gelenId.innerHTML = img;

            // go to img
            let goToHero = document.getElementById(`all-heroes-${tahminIndex}`);
            goToHero.scrollIntoView({behavior: 'smooth', block: 'nearest'});

            // not same name
            delete lower[lolHeroes.indexOf(gelenTahmin)]
            delete lolHeroes[lolHeroes.indexOf(gelenTahmin)]

            // +1
            score.innerText = `${z += 1}/161`;
            let wrong = document.getElementById("champ-input");
            wrong.style.border = "2px solid green";

            // input value del
            document.querySelector("#champ-input").value = "";
        }
    }
    else if(gelenTahmin.toLowerCase()==kontrol2){
    
        if("all-heroes-"+tahmin2Index == gelenId2.getAttribute(`id`)){
            let img = `<img id="heroes-image" src="images/${gelenTahmin}.jpg" alt="${gelenTahmin}">
                        <span id="hero-name">${lolHeroes[lower.indexOf(gelenTahmin)]}</span>`;
            
            gelenId2.innerHTML = img;
            // go to img
            let goToHero = document.getElementById(`all-heroes-${tahmin2Index}`);
            goToHero.scrollIntoView({behavior: 'smooth', block: 'center'});

            // not same name
            delete lolHeroes[lower.indexOf(gelenTahmin.toLowerCase())]
            delete lower[lower.indexOf(gelenTahmin.toLowerCase())]

            // +1
            score.innerText = `${z += 1}/161`;
            let wrong = document.getElementById("champ-input");
            wrong.style.border = "2px solid green";

            // input value del
            document.querySelector("#champ-input").value = "";
        }} 
     else {
        let wrong = document.getElementById("champ-input");
        wrong.style.border = "2px solid red";
    }
}