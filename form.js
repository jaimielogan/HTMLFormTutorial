$(".submitButton").on("click", function(){
  var returnStatment = "Hello " + $(".name").val() +". It is so nice to meet you! Now I know you favorite color is " + $(".color").val() + ". That might not mean much, which is why I changed the font to return in that color! I also now know that if you had to choose between eating Pizza, Tacos, and Burgers for the rest of your life, you would choose " + $("[name = food]").val() + ".";
  $("#output").text(returnStatment).css("color",$(".color").val());
});
