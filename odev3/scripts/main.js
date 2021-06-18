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

let todos = [];
let todosdate = [];

$("#hatirlanacak").submit(function(event) {
 
    var tarihnesnesi=new Date() 
    var date = tarihnesnesi.getDate() + "." + (tarihnesnesi.getMonth()+1) + "." + tarihnesnesi.getFullYear() + "-" + tarihnesnesi.getHours()+":"+tarihnesnesi.getMinutes()+":"+tarihnesnesi.getSeconds();

    event.preventDefault();

    let todo = {
        id: maxId() + 1,
        task: $("#giris").val().trim(),
        isDone: false,
        datetime: date
    }

    todos.push(todo);
    saveData();
    this.reset();
    listTodos();
});

$("body").on("change", "input[type='checkbox'][data-id]", function() {
    let id = $(this).data("id");

    let todo = getTodoById(id);
    saveData();
    listTodos();
});

$("body").on("dblclick", "li", function() {
    if (!confirm("Emin misiniz?"))
        return;
    let id = $(this).data("id");
    deleteById(id);
    saveData();
    listTodos();
});


function saveData() {
    localStorage["data"] = JSON.stringify(todos);
}

function loadData() {
    try {
        todos = JSON.parse(localStorage["data"]);
    }
    catch {
        todos = [];
    }
}

function deleteById(id) {
    let index;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            index = i;
            break;
        }
    }
    todos.splice(index, 1);
}

function getTodoById(id) {
    for (const todo of todos) {
        if (todo.id == id)
            return todo;
    }
    return null;
}

function maxId() {
    let max = 0;

    for (const todo of todos) {
        if (todo.id > max)
            max = todo.id;
    }

    return max;
}

function listTodos() {
    $("ul#todos").html("");
    let sortedTodos = todos.sort((a,b) => a.isDone - b.isDone);
    $.each(sortedTodos, function(index, todo) {
        let li = $("<li/>")
            .attr("id", todo.id);
        let cb = $("<i><i/>")
                    .attr("data-id", todo.id)
                    .addClass("fas fa-star")
                    .attr("onclick","yildizla("+todo.id+")")

        if (todo.isDone) {
            cb.css("color","gold")
        
        }
        else
        {
            cb.css("color","black")

        }
       
        li.append(cb);
        li.append(" " + todo.task);
        li.append("<br/>"+"<p style='font-size:10px;color:gray;'>"+todo.datetime+"</p>")
        $("ul#todos").append(li);
    });
}

$("#datechanger").on("change",
function datefilter(){
todosdate.splice(0,todosdate.length);
var dateval =($(this).val())
var secili = dateval.split("-");
var seciligun = secili[2];
var seciliay= secili[1].slice(1);

    for(var i=0;i<todos.length;i++)
    {
      var gun = todos[i].datetime.split(".",1);
      var ay1 = todos[i].datetime.split(".",2);
    var ay = ay1[1];
      if (gun==seciligun && ay ==seciliay)
      {
        
        todosdate.push(todos[i]);
      }
    }
    $("ul#todos").html("");
    $.each(todosdate, function(index, todo) {
        let li = $("<li/>")
            .attr("data-id", todo.id);
        let cb = $("<i><i/>")
        .attr("id", todo.id)
        .addClass("fas fa-star")
        .attr("onclick","yildizla("+todo.id+")")


if (todo.isDone) {
cb.css("color","gold")

}
else
{
    cb.css("color","black")
}
        li.append(cb);
        li.append(" " + todo.task);
        li.append("<br/>"+"<p style='font-size:12px;color:gray;'>"+todo.datetime+"</p>")
        $("ul#todos").append(li);
    });
})

$("#find").on("keypress",function(){
var val = $(this).val();

todosdate.splice(0,todosdate.length);

for (var i =0;i<todos.length;i++)
{
    if (todos[i].task.includes(val))
    {
        todosdate.push(todos[i]);
    }
}
$("ul#todos").html("");
$.each(todosdate, function(index, todo) {
    let li = $("<li/>")
        .attr("data-id", todo.id);
    let cb = $("<i><i/>")
    .attr("id", todo.id)
    .addClass("fas fa-star")
    .attr("onclick","yildizla("+todo.id+")")

if (todo.isDone) {
cb.css("color","gold")
}
else
{
    cb.css("color","black")
}

    li.append(cb);
    li.append(" " + todo.task);
    li.append("<br/>"+"<p style='font-size:10px;color:gray;'>"+todo.datetime+"</p>")
    $("ul#todos").append(li);
});

});

function yildizla(id){

    var todo = todos.find(function (todo1) {
        if (todo1.id ===id) {
          
            if (todo1.isDone==false)
            todo1.isDone=true;
            else
            todo1.isDone=false;
        }
    })
    $("#yildizlilar").prop('checked',false);
    saveData();
    listTodos();
}

$("#yildizlilar").change( function(){
    if( $(this).is(':checked') ) {
        todosdate.splice(0,todosdate.length);

        for(var i=0;i<todos.length;i++)
        {
            if(todos[i].isDone)
            {
                todosdate.push(todos[i]);
            }
        }
        $("ul#todos").html("");
        $.each(todosdate, function(index, todo) {
            let li = $("<li/>")
                .attr("data-id", todo.id);
            let cb = $("<i><i/>")
            .attr("id", todo.id)
            .addClass("fas fa-star")
            .attr("onclick","yildizla("+todo.id+")")
        
        if (todo.isDone) {
        cb.css("color","gold")
        }
        else
        {
            cb.css("color","black")
        
        }
        
            li.append(cb);
            li.append(" " + todo.task);
            li.append("<br/>"+"<p style='font-size:10px;color:gray;'>"+todo.datetime+"</p>")
            $("ul#todos").append(li);
        });
     }
     else{
        listTodos();
    }
 });

loadData();
listTodos();