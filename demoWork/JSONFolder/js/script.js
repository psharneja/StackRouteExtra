var str1, strImg;
var $poster=$("#poster");
 var  $tableClass=$('#tableClass');
 var title = $("#srch-term").val();
 var Search;
$(document).ready(function()  {
 $("#find").click(function()  { //Movie find function 
 $.ajax({
   type: 'GET',
   url: 'http://www.omdbapi.com/?s=' + title,
           dataType: "json",
           success: function(details) {
            Search=details.Search;
            var total =details.totalResults;
            var pageno=parseInt(total)/10;              
            if(Search.Response!="False")
            {  
              $('#successAlert').slideDown();
              $.each(Search, function(j, data) {
              $poster.append("<tr><td><img src=" + data.Poster + "/></td><td><table><tr><td>Title:</td><td>" + data.Title +"</td></tr><tr><td>Year</td><td>" + data.Year +"</td></tr><tr><td>IMDB ID :</td><td>" + data.imdbID+ "</td><tr><td>Movie Type:</td><td>" +data.Type+"</td></tr></table>");
              });
              $('#featuresHeading').slideDown();
              $('#features').slideDown();
              window.setTimeout(function() {
               $("#successAlert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
                });
                }, 2000); 
            }
           else
           {
              $('#FailAlert').slideDown();
               $("#featuresHeading").css("display", "none");
               $("#features").css("display", "none");
               window.setTimeout(function() {
                $("#FailAlert").fadeTo(500, 0).slideUp(500, function(){
                  $(this).remove(); 
                });
              }, 2000); 
           } // else end
          }//success function end
      }); // ajax end
   });  //click function ends
 }); //ready function ends