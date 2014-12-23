
//computer picks random number
  var comNum = Math.floor(Math.random()*101);
  alert("Pick of a number between 1-100")
  function difference(a,b) {
    return Math.abs(a - b)
  };
  
  //main function to run after user has picked number
  function askNumber(){
    var userNum = Number($('#guess').val());
    
    //captures value of last picked number
    var lastNum = $("#lastpick li").first().text();

    //calculates difference between users number/com number and last picked number/com number
    var diff = difference(userNum,comNum);
    var diffLast = difference(lastNum,comNum);
    
    //changes the thermometer temp
    var tempChange =function tempChange(a, b, words){
      $('.thermometer').css("background","linear-gradient(to bottom, #fff 0%, #fff " + a + "%, rgb(231, 27, 10) " + b + "%, #db3f02 100%)");
      $('.thermometer').text("" + words + "")
    };

    //Displays last picked number to user
    function lastpick(number){
      $("#lastpick").prepend("<li>" + number + "</li>").children(':first').hide().fadeIn(1000);

    };

    //alert to display to user
    function highLow(phrase){
      $('#alert').html(phrase).hide().effect("slide", {direction: 'down', mode: 'show'}, 1000);
    }

    if(userNum == comNum){
      
      tempChange(100,100, "Hottest!");
      $('.thermometer').console.log()
    }
    else if (isNaN(userNum)){
      highLow("Pick a number!")
    }

    else if (userNum > comNum) {
      highLow("Guess Lower!")
      lastpick(userNum);
    }
    else{
      highLow("Guess Higher!")
      lastpick(userNum);
    };
    
    //where to change temperture based on distance of guess
    if (diff < 5) {
      tempChange(10,20, "Hot!");
    }
    else if (diff < 10){
      tempChange(30,40, "Warm!")
    }
    else{
      tempChange(70,80, "Cold!")
    }

  };
$(document).ready(function(){

  //enable enter button to submit
  $('#guess').keydown(function(event){    
    if(event.keyCode==13){
       $('#pick').trigger('click');
    }
    $('#guess').focus();
});
  //click to pick number
  $('#pick').click(function(){
  askNumber();
  $('#guess').val("")
  });

  //reload page
  $('.reset').click(function() {
    location.reload();
});
});