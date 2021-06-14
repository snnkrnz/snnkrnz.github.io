$("#bugun").click(function(){
    $("#bugun").addClass("active")
    
    $(".bugun").removeClass("d-none")
    $("#yeni").removeClass("active")
    $("#yildizli").removeClass("active")
    $("#gecmis").removeClass("active")
    
    $(".bugun").addClass("d-block")
    $(".yeni").addClass("d-none")
    $(".yildizli").addClass("d-none")
    $(".gecmis").addClass("d-none")
})

$("#yeni").click(function(){
    $("#yeni").addClass("active")
    
    $(".yeni").removeClass("d-none")
    $("#bugun").removeClass("active")
    $("#yildizli").removeClass("active")
    $("#gecmis").removeClass("active")
    
    $(".yeni").addClass("d-block")
    $(".bugun").addClass("d-none")
    $(".yildizli").addClass("d-none")
    $(".gecmis").addClass("d-none")
})

$("#yildizli").click(function(){
    $("#yildizli").addClass("active")
    
    $(".yildizli").removeClass("d-none")
    $("#bugun").removeClass("active")
    $("#yeni").removeClass("active")
    $("#gecmis").removeClass("active")
    
    $(".yildizli").addClass("d-block")
    $(".bugun").addClass("d-none")
    $(".yeni").addClass("d-none")
    $(".gecmis").addClass("d-none")
})

$("#gecmis").click(function(){
    $("#gecmis").addClass("active")
    
    $(".gecmis").removeClass("d-none")
    $("#bugun").removeClass("active")
    $("#yeni").removeClass("active")
    $("#yildizli").removeClass("active")
    
    $(".gecmis").addClass("d-block")
    $(".bugun").addClass("d-none")
    $(".yeni").addClass("d-none")
    $(".yildizli").addClass("d-none")
})

$(".fa-book-reader").click(function(){
    $("#yeni").addClass("active")
    
    $(".yeni").removeClass("d-none")
    $("#bugun").removeClass("active")
    $("#yildizli").removeClass("active")
    $("#gecmis").removeClass("active")
    
    $(".yeni").addClass("d-block")
    $(".bugun").addClass("d-none")
    $(".yildizli").addClass("d-none")
    $(".gecmis").addClass("d-none")
})

$(".ekle").click(function(){
    var deger = $(".ortala > input").val()
    $(".eklenenler > ul").append(`<li><div class="form-check">
    <input type="checkbox" class="form-check-input " id="roundedExample2">
    <label class="form-check-label" for="roundedExample2">` + deger + ` </label> <span class="kucuk text-secondary ps-3">Ekl. Tarih: <span class="tarih">14.06.2021</span></span> <i class="bi bi-file-minus-fill float-end fs-5 delete"></i> <i class="bi bi-star-fill float-end fs-5 pe-2 yildiz"></i>
  </div></li>`)
  $(".ortala > input").val("")
})


// çokluda sıkıntı ↓
$(".ekle").click(function(){
$(".delete").click(function(){
    alert("Sil'e tıklandı")
})
})

$(".ekle").click(function(){
$(".yildiz").click(function(){
    alert("Yıldız'a tıklandı")
})
})