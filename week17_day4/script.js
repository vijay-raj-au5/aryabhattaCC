// $(document).ready(function(){
//    $("li").on("click", function(e) {
//       $("li").removeClass("active");
//       $(e.target).addClass("active");
//     });
   

// })

function tableAdd(){
   var table = document.createElement("BUTTON");
   table.setAttribute("id","tab");
   document.body.appendChild(table);
   
   

}

function tableRemove(){
   var table = document.getElementById('tab');
   console.log(table)
   
   table.remove()
   

}

