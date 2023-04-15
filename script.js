// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//PUT DATE IN HEADER
var todayDate = dayjs();
$('#currentDay').text(todayDate.format('MMMM D, YYYY'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
 var desBox = document.querySelector('.description').value ;
//funtion to save input 
var dataInput = $(this).siblings('.description').val();




// USER CLICKS SAVE
$('.saveBtn').on('click', function(event){
    console.log('you clicked save');
  //var input text by user 
    var dataInput = $(this).siblings('.description').val();
  localStorage.setItem('dataInput', dataInput);
  event.preventDefault();
localStorage.getItem('dataInput');
})

function timeColorChange(){
    // current day and current hour 
   var currentTime = dayjs().hour() ; // this gets current time (number)
    console.log(dayjs().hour());
    // past time (number)/ we will split the ID 
    $('.time-block').each(function(){
      var blockTime = parseInt($(this).attr('id').split('-')[1]);
      console.log(blockTime);
      // if statements for each block that has time
    if(blockTime > currentTime){
      $(this).addClass('future');
    }else if(blockTime < currentTime) {
      $(this).addClass('past');
      $(this).removeClass('present')
  }else {
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
  }
});
};
timeColorChange();
