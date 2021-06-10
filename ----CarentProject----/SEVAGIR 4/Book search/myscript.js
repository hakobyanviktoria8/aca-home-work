$(document).ready(function(){
   $("#myform").submit(function(){
   	  var search = $("#books").val();
   	  if(!search)   	  {
   	  	alert("Please enter book title or auther");
   	  } else{
   	  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){
          for(i=0;i<response.items.length;i++){
           let title=$('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');
           let author=$('<h6 class="center-align white-text"> By: ' + response.items[i].volumeInfo.authors + '</h6>');
           let img = $('<img class="aligning card z-depth-5" id="dynamic"><br>' +
               '<a href=' + response.items[i].volumeInfo.infoLink + '>' +
               '<button id="imagebutton" class="btn secondary aligning">Read More</button></a>');
           let url= response.items[i].volumeInfo.imageLinks.thumbnail;
           img.attr('src', url);
           title.appendTo('#result');
           author.appendTo('#result');
           img.appendTo('#result');
          }
   	  });
      }
      return false;
   });
});