var a = document.querySelectorAll("button#btn-clear");
var b = document.querySelectorAll('div.uk-container.toggle-animation-queued');
var c = [1,2,3];
$(document).ready(function(){
    $("button#btn-clear").click(function(){
        if(c.length == b.length) {
          console.log("test-2");
          $( this ).toggleClass("uk-active");
        } else if($(a).hasClass('uk-active')) {
          console.log("test-1");
          $( this ).toggleClass("uk-active");
          setTimeout(function() {
              c = document.querySelectorAll('div.uk-container.toggle-animation-queued[hidden]');
          }, 400);
        } else {
          console.log("test-3");
          for (var i=0; i < b.length; i++) {
            b[i].setAttribute( "hidden", true);
          }
          $( this ).toggleClass("uk-active");
          UIkit.toggle( this ).toggle();
          setTimeout(function() {
              c = document.querySelectorAll('div.uk-container.toggle-animation-queued[hidden]');
          }, 300);
        }
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
