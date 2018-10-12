$(document).ready(function() {

  $("button.clear-link").click(function(e) {

  var divs = document.querySelectorAll('#btn-clear');

    // console.log('test');

    [].forEach.call(divs, function(div) {
      if (div.classList.contains('uk-active')) {
        // debugger;
        // console.log('test');
        $(div).toggleClass("uk-active");
        var str = div.attributes[3].textContent.split(' ')[1];
        var toggleClass = str.slice(1, (str.length - 1));
        var element = $(`.uk-container.uk-padding.${toggleClass}.toggle-animation-queued`);
        UIkit.toggle(element).toggle();
      }
    });

  });

});
