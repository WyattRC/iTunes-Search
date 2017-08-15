/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


var audio = document.querySelector('.music-player')
var searchForm = document.querySelector('.search-form')
var searchInput = document.querySelector('.search-input')
var submitButton = document.querySelector('.submit-button')
var results = document.querySelector('.results')
console.log('fudge')

submitButton.addEventListener('click', function(){
  console.log('hello')
  searchForm.innerHTML=``;
  fetch(`https://itunes.apple.com/search?limit=20&term=${searchInput.value}`)
  .then(function(response){
    response.json().then(function(data) {
        console.log("Results -", data);
            for(let i = 0; i < data.results.length; i++){

         results.innerHTML += `
         <div class="boxes">
         <h1>${data.results[i].trackName}</h1>
         <img src="${data.results[i].artworkUrl100}">
         <p>${data.results[i].artistName} - ${data.results[i].collectionName}</p>
         <button class="utility" data-preview-url="${data.results[i].previewUrl}">play</button>
         </div>
         `
         results.addEventListener('click', function(){
    var button = event.target
    var previewUrl = button.getAttribute('data-preview-url')

    if (previewUrl) {
      audio.src = previewUrl
      audio.play()
    }

  });
}
  })
})
});

// let test = data.results
// console.log(test)
// return test.map(function(test){
//   let li = document.createElement('li');
//    let img = document.createElement('img');
//    let span = document.createElement('span');
//   img.src = test.artworkUrl60
//   span.innerHTML = `${test.trackName}`;
//   document.li.appendChild('img');
// document.li.appendChild('span');
// document.ul.appendChild('li');

// var player = document.querySelector('.music-player')
//
// var form = document.querySelector('#search-form')
// var input = document.querySelector('#search-input')
//
// var results = document.querySelector('.results')



// var BASE_API_URL = 'https://itunes.apple.com/search?limit=50&term='
//
//
// submitButton.addEventListener('click', function(){
//   var value = searchInput.value
//   var query = encodeURIComponent(value)
//   return query;
//   console.log('hello')
// })
//
//
// function apiURL(query){
//   return BASE_API_URL + query;
//   console.log('hello')
// }

// function fun(event){
//   var query = encodeURIComponent(input.value)
//   return query
//   console.log('hello oz')
// }
// function apiURL(query){
//   return URL + query
//   console.log('hello')
// }
