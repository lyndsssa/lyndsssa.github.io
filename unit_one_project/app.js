$(() => {

  const url = 'https://www.themealdb.com/api/json/v1/1/'

  //api call & ingredient search
  $('.button').on('click', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();
    // console.log(userInput)

    const array = [];
    //create array to file through all of the data when user types key word

    let requestUrl = url + 'q=' + inputValue;


    $.ajax({
            url: requestUrl,
            dataType: 'jsonp',
            success: function(data) {
//connect to ajax


              for (let i = 0; i < userInput; i++) {
                   console.log(data[i]);
                 }
                  // console.log(data[i]);
