
let channel = '';
let active = false; 
let keyword = '';
let users = {};
let count = 0;
let participants = [];

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['']
});



client.connect().catch(console.error);


client.on('message', (channel, tags, message, self) => {

    if(self) return;
    
    if(active && message === keyword){
        users[tags.username] = true;

        count = Object.keys(users).length;

        participants = Array.from(Object.keys(users));
        updateParticipants(participants);
        console.log(participants);
    }

});

function startentry(){
    active = true;
}

function setKeyword(){

    keyword = document.getElementById("keyword").value;
    console.log('Keyword has been setted');

}

$("#zorunlu").click(function(){
    var kanaladi = $(".zorla > input[type=text]").val();
    $(".kanalbaslik").prepend(kanaladi);

    if(kanaladi.length==0){
        $("body").overhang({
            type: "error",
            message: "Kanal Adı Boş Bırakılamaz."
          });
        $(".kanalgir").modal('show');
        $(".uyariborder").css("border", "2px dotted red")
    } else {
        $(".kanalgir").modal('hide');
        $("body").overhang({
            custom: true,
            textColor: "#27273c",
            primary: "#27273c",
            accent: "#86377b",
            message: "Hoş Geldin " + kanaladi + " 😜",
            customClasses: "overhang-overrides"
          });
    }
});
$(".keygir").keydown(function(){
    var ayarla = $(".bosgecme > input[type=text]").val();
    if (ayarla.length > 0){
        $(".altindaki > button").removeClass("disabled")
    } if (ayarla.length < 2){
        $(".altindaki > button").addClass("disabled")
    }
});
$("#tostkatilim").click(function(){
    $(".katilustu > button").removeClass("disabled")
    $(".sifirustu > button").removeClass("disabled")
});
$("#basladi").click(function(){
    $(".baslatustu > button").removeClass("disabled")
    $(".baslatustu > button").addClass("rainbow")
});
$("#tostsifir").click(function(){
    $('#sifirintostu').toast('show')
});
$("#tostkatilim").click(function(){
    $('#katilimtostu').toast('show')
});
$("#basladi").click(function(){
    $('#basladitostu').toast('show')
});
$("#tostkatilim").click(function() {
    var ayarlaicerigi = $(".bosgecme > input[type=text]").val();
    $(".keygoster").html(`Keyword ayarlandı. Sohbete <h2>${ayarlaicerigi}</h2> yazarak çekilişe katılabilirsiniz.`)
});
$("#tostsifir").click(function() {
    $("#keyword").val("");
    $(".altindaki > button").addClass("disabled")
    $(".katilustu > button").addClass("disabled")
    $(".sifirustu > button").addClass("disabled")
})

function setChannel(){
    channel = document.getElementById("channel").value;
    console.log(channel);
    

    client.join("#" + channel);
    document.getElementById("chat").innerHTML = `<iframe frameborder="0"
                        scrolling="no"
                        id="chat_embed"
                        src="https://www.twitch.tv/embed/${channel}/chat?parent=snnkrnz.github.io&darkpopout"
                        height="100%"
                        width="100%">
                    </iframe>`;
}
//reset

function reset(){

    active = false;
    keyword = '';
    users = {};
    count = 0;
    keyword ='';
    participants = [];

    document.getElementById("parts").innerHTML = ``;
    document.getElementById("winner").innerHTML = ``;
}

function start(){
    if(!participants.length) return noPart();
    if(participants.length === 1) return onePart(participants[0]);
    let winningNumber = Math.floor((Math.random() * participants.length));
    let winner = participants[winningNumber];
    
    
    announceWinner(winner);
}

function updateParticipants(participants){
    let innerPart = '';
    participants.forEach(participant => {
        innerPart += `<li class="list-group-item">${participant}</li>`;
    });
    document.getElementById("parts").innerHTML = innerPart;
}

$(".baslatustu > button").click(function() {
      $(".wingoster").fadeOut(1).delay(3000).fadeIn(10000);
});

function announceWinner(winner){

    document.getElementById("winner").innerHTML = `<div class="alert alert-success" role="alert">
                                <h1 class="alert-heading">~ Tebrikler ~ </h1>
                                <p>ÇEKİLİŞİ KAZANAN</p>
                                <div class="wingoster kutlama">${winner}</div>
                                <p><img src="img/cool-doge.gif"></p>
                                <hr>
                                <p class="mb-0"><a target="blank" href="https://www.twitch.tv/popout/${channel}/viewercard/${winner}?popout=">Kartını Gör →</a></p>
                            </div>`;
}

function noPart(){
    document.getElementById("winner").innerHTML = `<div class="alert alert-danger text-center" role="alert">
                                <h1 class="alert-heading">HATA</h1>
                                <p class="h4 mt-2">Çekilişe kimse katılmamış. Yalnız mısın? <br>Üzülme. İnsanları tanıdıkça yalnızlık güzelleşiyor.
                                <img src="img/yalniz.jpg" width="auto" height="380"></p>
                            </div>`;
}

function onePart(winner){
    document.getElementById("winner").innerHTML = `<div class="alert alert-warning text-dark" role="alert">
                                <h1 class="alert-heading">TEK KİŞİLİK DEV KADRO</h1>
                                <p class="h4 my-2">Tebrikler! 1 kişi arasından 1. oldun.. <br>Hep böyle şanslı mısın ${winner}? </p>
                                <img src="img/neemic.png" width="auto" height="380">
                            </div>`;
}

