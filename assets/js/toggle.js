var a = document.querySelectorAll("button#btn-clear");
var b = document.querySelectorAll('.toggle-animation-queued');
var c = [1,2,3,4,5,6,7,8,9,0,1];
$(document).ready(function(){
    $("button#btn-clear").click(function(){

        // if no buttons in the div are uk-active
        // add hidden attribute to all children of div below
        // then toggle this buttons toggle

        if($(a).hasClass('uk-active')) {
          console.log('test');
          $( this ).toggleClass("uk-active");
          setTimeout(function() {
              c = document.querySelectorAll('[hidden]');
          }, 1000);
        } else if(c.length == b.length) {
          console.log('test2');
          $( this ).toggleClass("uk-active");
        } else {
          $( this ).toggleClass("uk-active");
          for (var i=0; i < b.length; i++) {
            b[i].setAttribute( "hidden", true);
          }
          UIkit.toggle( this ).toggle();
          setTimeout(function() {
              c = document.querySelectorAll('[hidden]');
          }, 1000);
        }
        // $( this ).toggleClass("uk-active");
    });
});





// $(document).ready(function(){
//     $(".clear-link").click(function(){
//         $( ".toggle-animation-queued" ).each(function(){
//           UIkit.toggle( this ).toggle();
//           // add replace text
//         });
//     });
// });

// $(document).ready(function() {
//
//   $("button.clear-link").click(function(e) {
//
//   var divs = document.querySelectorAll('#btn-clear');
//
//     // console.log('test');
//
//     [].forEach.call(divs, function(funk) {
//       if (funk.classList.contains('uk-active')) {
//         // debugger;
//         // console.log('test');
//         $(funk).toggleClass("uk-active");
//         var str = funk.attributes[3].textContent.split(' ')[1];
//         var toggleClass = str.slice(1, (str.length - 1));
//         var element = $(`.uk-container.uk-padding.${toggleClass}.toggle-animation-queued`);
//         UIkit.toggle(element).toggle();
//       }
//     });
//
//   });
//
// });
