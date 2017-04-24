
// My Custom JQuery
$(document).ready(function()  { 
var userId = $.session.get('loggedInUser');
	// var userType = $.session.get('loggedInUserType');
	// var userBatch = $.session.get('loggedInUserBatch');
	// var userSubcategory = $.session.get('loggedInUserSubCategory');
	var userName = $.session.get('loggedInUserName');
	// console.log(userId + " - " + userType + " - " + userBatch + " - " + userSubcategory + " - " + userName);
	$('.studentUser').html(userName);
});

$(function (){
	
console.log("main function");








});



// // My Custom JQuery

// $(function (){

// 	window.onload = function()
// 	{
//		$('input:text:visible:next').focus();
// 		console.log("Loading");
// 	}


// 	$('.getmovie').on('click', function() {
// 		srchMovie = $('#srchmov').val();
// 		srchMovie = srchMovie.trim();
// 		pageNo = 1;
// 		initRecNo = 0;
// 		recNo = 0;
// 		prv = 0;
// 		nxt = 1;
// 		getMovie();
// 	});



// 	var $list = $('#movielist');

// 	var movieTemp = $('#movietemplate').html();
// 	var searchTemp = $('#searchtemplate').html();
// 	var loadMoreTemp = $('#loadmoretemplate').html();
// 	var loadLessTemp = $('#loadlesstemplate').html();
// 	var modalTemp = $('#modaltemplate').html();

// 	var obj = {};

// 	var initRecNo = 0,recNo = 0, pageNo = 1;

// 	var prv = 0, nxt = 0;

// 	var srchMovie;

// 	function addMovie(movie){
// 		$list.append(Mustache.render(movieTemp, movie));
		
// 	}

// 	 function addModal(movie){
	 	
// 	 	$('.modalIn').append(Mustache.render(modalTemp, movie));
		
// 	 }

// 	$('.getmovie').on('click', function() {
// 		srchMovie = $('#srchmov').val();
// 		srchMovie = srchMovie.trim();
// 		pageNo = 1;
// 		initRecNo = 0;
// 		recNo = 0;
// 		prv = 0;
// 		nxt = 1;
// 		getMovie();
// 	});

// 	$list.delegate('#next','click', function(event){
// 		pageNo++;
// 		prv = 0;
// 		nxt = 1;
// 		getMovie();
// 	});

// 	$list.delegate('#prev','click', function(event){
// 		pageNo--;
// 		prv = 1;
// 		nxt = 0;
// 		getMovie();
// 	});

// 	function getMovie()
// 	{
// 		var movUrl = 'http://www.omdbapi.com/?s=' + srchMovie + '&y=&plot=short&r=json&page=' + pageNo;
		
// 		$('#movielist li').remove();

// 		//$list.append(Mustache.render(searchTemp, srchMovie));

// 		$.ajax({
// 			type: 'GET',
// 			url: movUrl,
// 			success : function (data) {
// 				var dispRecCount;
// 				if(data.Response == 'False')
// 				{
// 					console.log(srchMovie.length);

// 					if(srchMovie.length == 0)
// 					{
// 						var resultCount = {'length' : '0','movie' : 'Enter Something.!'};
// 					}
// 					else
// 					{
// 						var resultCount = {'length' : '0','movie' : srchMovie};
// 					}
// 					$list.append(Mustache.render(searchTemp, resultCount));
// 				}					
// 				else
// 				{
					
// 					var resultCount = {'length' : data['totalResults'],'movie' : srchMovie};
// 					$list.append(Mustache.render(searchTemp, resultCount));

// 					$.each(data['Search'], function(i, movie){
						
// 						if (movie.Poster == 'N/A')
// 						{
// 							movie.Poster = 'images/nopic.jpg';
// 						}
// 						if(i < 15)
// 						{							
// 							addMovie(movie);											
// 							dispRecCount = i;	
// 						}						
// 					});

// 					if (nxt == 1)
// 					{
// 						initRecNo = recNo;
// 						recNo = initRecNo + (dispRecCount + 1);
						
// 					}
// 					else if (prv == 1)
// 					{
// 						recNo = initRecNo;
// 						initRecNo = recNo - (dispRecCount + 1);
// 					}
// 					var sRecNo = initRecNo + 1;
// 					$('.showRecCount').html('Showing ' + sRecNo + ' - ' + recNo + ' Result(s)');
// 					console.log(dispRecCount + " out of " + resultCount.length);
// 					if (resultCount.length > recNo)
// 					{
// 						$list.append(Mustache.render(loadMoreTemp));
						
// 					}

// 					if (initRecNo > 0)
// 					{
// 						$list.append(Mustache.render(loadLessTemp));
						
// 					}
// 				}
// 			}
// 		});
// 	}

// 	$list.delegate('.mytitle','click', function(event){

// 		var clickTitle = $(this);
		
// 		$('.modalIn div').remove();

// 		$('.mymodtitle').html("Loading... <small> please wait...</small>");
// 		var myTitle = clickTitle.attr('data-id');
		
// 		var curMovUrl = 'http://www.omdbapi.com/?t=' + myTitle + '&y=&plot=short&r=json';

// 		$.ajax({
// 			type: 'GET',
// 			url: curMovUrl,
// 			success : function (data) {
				
// 				if(data.Response == 'True')
// 				{
// 					$('.mymodtitle').html(myTitle + " <small> [" + data.Year + "]</small>");
// 					if (data.Poster == 'N/A')
// 					{
// 						data.Poster = 'images/nopic.jpg';
// 					}

// 					addModal(data);
// 					$('#mymodal4').modal('show');
// 				}
// 			} 
// 		});
// 	});
// });
