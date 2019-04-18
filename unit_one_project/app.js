$(() => {
  //need a search recipe function, use recipeId from the data source
  //make sure to put above mainFun(becuase this needs to happen when they search)
  //once made open function & variable for searchId then add in recipeId in parameter to have the fuction call that specific recipe from the specific item user clicked on.
  //then add ajax, needs: url(where in api I am using + recipeId so it will get the data for that specific item), success(empty function called function peran data because this is the data source that we are using/ getting the data from)
  //make new div for entire recipe info to be displayed into
  //make new h1 for title of recipe
  //mamke new img for image of recipe to appear

  const searchRecipe = (recipeId) => {
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId,
      success: function(data) {
        console.log(data)
        let $div=$('<div>')
        let $h1=$('<h1>').addClass('title')
        let $img=$('<img>').attr('src', data.meals[0].strMealThumb).addClass('recipeImage')
        let $h2=$('<h2>').text(data.meals[0].strInstructions).addClass('Info')
        //make sure you go deep, start at the main data.meals then use the array [].strMealThumb(image source provided from api)
        //same for h2, make new h2 for instructions to appear, use .text for instructions to show in browser (use strInstructions provided in api)
        $h1.text(data.meals[0].strMeal)
        //now we want to make the title appear in h1, so do data.meals[0]. strMeal(title source provided by api)
        $div.append($h1)
        //append the h1 to the div to show up in browser
        $div.append($img)
        //append the image to the div to show up in browser
        $div.append($h2)
        //append the h2 instructins to the div to show in browser
        $('.allInfo').empty()
        $('.allInfo').append($div)



      }
    })

    //console.log(recipeId)
  }

  const mainFun = (requestUrl) => {

    const $ul = $('.recpies');

    $.ajax({
      url: requestUrl,
      success: function(data) {
        console.log(data);
        //console.log(data.meals[0].strMeal);

        //  $ul.empty();
        //make loop to cycle through 5 items from data
        for (let i = 0; i < 20; i++) {

          const recipePic= data.meals[i].strMealThumb;
          const recipeId= data.meals[i].idMeal;

          console.log(data.meals[i]);  //log 5 meals
          const $li = $('<li>');
          console.log($li);
          //$li.text(data.meals[i].strMeal).attr('id', i);
          $li.append($('<a>').attr("id", recipeId).text(data.meals[i].strMeal));
          //made the information from data clickable links, takes you to the photo, my api does not have the actual recipe http site

          $li.on('click', () => {searchRecipe(recipeId)})
          //put inside empty function so it will slow down, alloe recipe to be viewed

          $ul.append($li);
          console.log($ul);

        }
        $('#container').append($ul);
      }
    })
  }

  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php'
  console.log(url);
  //api call & ingredient search
  $('.searchBar').on('submit', (event) => {
    event.preventDefault();
  //listner, makes the submit listen to search bar
    const userInput = $('input[type="text"]').val();
    // console.log(userInput)

    const array = [];
    const $ul = $('.recpies');
    //create array to file through all of the data when user types key word
    $ul.empty();
    let requestUrl = url + '?a=' + userInput;
    console.log(requestUrl);

    mainFun(requestUrl); //calls new function, running code there
              //console.log(data.meals[0].strMeal);

  })

// Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      console.log(event.currentTarget);
      let dropdowns = document.getElementsByClassName("dropdown-content");
      console.log(dropdowns);
      //mainFun("yay");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


})
// declaring function outside of the ajax because it is already defined in html
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
