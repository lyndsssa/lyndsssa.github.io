$(() => {

  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php'
  console.log(url);
  //api call & ingredient search
  $('.searchBar').on('submit', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();
    // console.log(userInput)

    const array = [];
    const $ul = $('.recpies');
    //create array to file through all of the data when user types key word
$ul.empty();
    let requestUrl = url + '?a=' + userInput;
      console.log(requestUrl);

    $.ajax({
            url: requestUrl,
            //dataType: "jsonp",
            //jsonpCallback: "logResults",
            success: function(data) {
              console.log(data);
              console.log(data.meals[0].strMeal);

  //  $ul.empty();
  //make loop to cycle through 5 items from data
              for (let i = 0; i < 5; i++) {

                const recipePic= data.meals[i].strMealThumb;

                console.log(data.meals[i]);  //log 5 meals
                const $li = $('<li>');
                console.log($li);
                //$li.text(data.meals[i].strMeal).attr('id', i);
                $li.append($('<a>').attr('href', recipePic).text(data.meals[i].strMeal));
                //made the information from data clickable links, takes you to the photo, my api does not have the actual recipe http site
                $ul.append($li);
                console.log($ul);

                  }
                  $('#container').append($ul);
                }
            })
        })
      })

      function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
