

$("#html").one("mouseover", function() {
    $("#carrot-open, #carrot-close, #html").removeClass("hide").addClass('permahover');
  });

$("#css").one("mouseover", function() {
    $("#css, #css-open, #css-close").removeClass("hide").addClass('permahover');
  });

  $("#js").one("mouseover", function() {
    $("#js, #js-open, #js-close").removeClass("hide").addClass('permahover');
  });


    $("#flip").mouseover(function(){
      $("#panel").slideToggle("fast");
    });
  