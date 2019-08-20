
var $body = $("body") ;

$body.on("click", ".list li", markTask) ;
$body.on("click",".delete",deleteTask);

$(".newTask").on("click", addTask) ;
$(".markAll").on("click", allMarked) ;
$(".unmarkAll").on("click", noneMarked) ;


function addTask(){
    var taskText = prompt("¿Qué tienes que hacer?") ;
    if(taskText !== null && taskText !== "" ){    
        $(".list").append("<li>" + taskText + '<button class="delete"></button></li>') ;
    }
}

function markTask() {
    $(this).toggleClass("done");
    
} 

function allMarked() {
    $(".list li").addClass("done") ;
}

function noneMarked() {
    $(".list li").removeClass("done") ;
 
}

function deleteTask(e) {
    var $this = $(this);
    
    $this.parent().fadeOut(400, function(){
        
        $this.parent().remove() ;
        });
    
    e.stopPropagation() ;
    
}