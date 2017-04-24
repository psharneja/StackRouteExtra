    
$(document).ready(function()  { 

	var userId = $.session.get('loggedInUser');
	var userType = $.session.get('loggedInUserType');
	var userBatch = $.session.get('loggedInUserBatch');
	var userSubcategory = $.session.get('loggedInUserSubCategory');
	var userName = $.session.get('loggedInUserName');
  var userEmail=$.session.get('loggedInUserEmailId');
  var userContact=$.session.get('loggedInUserContact');  
  var userProfile=$.session.get('loggedcompleteProfile');


	$('.adminuser').html(userName);

	$('.logout').on('click', function() {
		$.session.clear();
		window.setTimeout('location.reload()', 1000);
	});
//   var chatContentTemplate = $('#chatContent').html();
//   var friendDetailTemplate =$('#friendDetailTemplate').html();
//   var modalChatNameTemplate=$('#modalChatNameTemplate').html();
//   var modalChatContactTitleTemplate=$('#modalChatContactTitleTemplate').html();
//   var contactTemplate =$('#contactTemplate').html();
//   var messageTemplate=$('#messageTemplate').html();
//   var eventTemplate=$('#eventTemplate').html();
//   var chatTab=$('#tab1');
//   var contactTab =$('#tab2');
//   var eventTab=$('#tab4');
//   var ContactTabClass=$('.ContactTabClass');
//   var eventTabClass =$('.eventTabClass');
//   var friendDetailtoMessage=$('#friendDetailtoMessage');
//   var chatTitle=$('.chatTitle');
//   var contactModalTitle =$('.contactModalTitle');
//   var chatModalBody=$('.chatModalBody');
//   var friendDetailModalBody =$('.friendDetailModalBody');
//   var friendDetailModal=$('#friendDetailModal');
//   var btnSearch=$("#btnSearch");
//   var chatTabClass=$('.chatTabClass');
//   var url,ajaxType;
//   url='http://localhost:8080/friends?_sort=id&_order=DESC';
//   ajaxType='GET';
//   var friendIdMessage;
//   var formBtnSubmit=$('#formBtnSubmit');
//   var chatModalfooter=$('#chatModalfooter').html();
//   var chatFooter=$('.chatFooter');
//   var myModal=$('#myModal');
//   var friendBtnSubmit=$('#friendBtnSubmit');

//   //*************variable declaration end***************************************
//   ajaxFun(url,ajaxType,chatTab,chatContentTemplate); 


// btnSearch.click(function(){
//   chatTab.empty();
//   // $('.tabContentClass').empty();
//   //chatContentTemplate.empty();
//  var searchInput=$("#searchInput").val();
//  console.log(searchInput);
//  ajaxType="GET";
//  url="http://localhost:8080/friends?name="+searchInput;
//  ajaxFun(url,ajaxType,chatTab,chatContentTemplate);
// });

// chatTabClass.click(function(){
//   chatTab.empty();
//   url='http://localhost:8080/friends?_sort=id&_order=DESC';
//   ajaxType='GET';
//   ajaxFun(url,ajaxType,chatTab,chatContentTemplate); 
// })


//         //Showing chat detail for all friends
        

// // friend detail function 
//   chatTab.delegate(".frienddetailBtn", 'click', function()  { //Movie find function 
//     friendDetailModalBody.empty();
//         var friendId=$(this).attr('data-id');
//         url='http://localhost:8080/friends?id='+friendId;
//         ajaxType='GET';
//         ajaxFun(url,ajaxType,friendDetailModalBody,friendDetailTemplate);
//      });  

//  // showing message on click of div
//   chatTab.delegate(".ChatDiv", 'click', function()  { 
//     chatModalBody.empty();
//     chatTitle.empty();
//         var friendId=$(this).attr('data-id');
//         url='http://localhost:8080/message?friendId='+friendId;
//         ajaxType='GET';
//         ajaxFun(url,ajaxType,chatModalBody,messageTemplate);
        
//         url='http://localhost:8080/friends?id='+friendId;  
//         ajaxFun(url,ajaxType,chatTitle,modalChatNameTemplate) ;     
//      }); 

// //showing Name on click of contact in contact tab 
//   contactTab.delegate('.ContactDivTemplate','click',function(){
//       contactModalTitle.empty();
//        friendIdMessage=$(this).attr('data-id');
//       url='http://localhost:8080/friends?id='+friendIdMessage;
//         ajaxType='GET',
//         ajaxFun(url,ajaxType,contactModalTitle,modalChatContactTitleTemplate);
        
//         $('#ringTone').get(0).play();

//   });

//   //ringtone Feature
//   $('.audioClose').click(function(){
//     $('#ringTone').get(0).src="";
//   })
//   $('#ringToneClose').click(function(){
//      $('#ringTone').get(0).src="";
//   })

//   //navigate to message from friend detail
//   // friendDetailtoMessage.click( function()  { 
//   //   chatModalBody.empty();
//   //   chatTitle.empty();    
//   //       var friendId=$(this).attr('data-id');
//   //       url='http://localhost:8080/friends?id='+friendId;
//   //       ajaxType='GET';
//   //       showMessage(url,ajaxType,chatModalBody,messageTemplate);        
//   //    }); 

// //define showEvent for event function
//   function showEvent(url, ajaxType,appendElement,contentTemplate){
//     //var nameLead=$('.nameLead');
//   //  var EventHostTemplate=$('#EventHostTemplate').html();
//     $.ajax({
//               type:ajaxType,
//               url:url,
//               dataType:"json",
//              success:function(events){
//                  if(events.Response!="False")   {
//                      $.each(events, function(j,data){
//                      // var eventIdforPerson=data.id;
//                      // console.log(eventIdforPerson);
//                     appendElement.append(Mustache.render(contentTemplate,data));
//                     // url='http://localhost:8080/friends/'+eventIdforPerson;
//                     // ajaxFun(url,ajaxType,eventTab,eventTemplate);
//                          });
                      
//                     }       
//                   else { alert('list incorrect')} // else end
//                }
//              });
//       }


// //showing all the events
//   eventTabClass.click( function(){
    

//     ajaxType='GET';
//     url='http://localhost:8080/event';
//     showEvent(url,ajaxType,eventTab,eventTemplate);
//   });

//   // showing all the Contact in contact Tab
//   ContactTabClass.click( function(){

//     ajaxType="GET",
//     url='http://localhost:8080/friends?_sort=name&_order=ASC';
//     ajaxFun(url,ajaxType,contactTab,contactTemplate);

//   });

//                     //ajax function call
//    function ajaxFun(url, ajaxType,appendElement,contentTemplate) // Ajax Function define
//    {
//      $.ajax({
//          type: ajaxType,
//          url: url,
//                  dataType: "json",
//                  success: function(friends) {                      
//                   if(friends.Response!="False"){
//                     $.each(friends, function(j, data){
//                     appendElement.append(Mustache.render(contentTemplate,data)); //Mustache to render template
//                     });
//                  }
//                  else { alert('list incorrect');} 
//                 }
//             }); 
//          }




// //************Get operation over ******************************
// //object
// friendBtnSubmit.click (function(){

//  //var idSpan=$('.idSpan').text();
//  //console.log(idSpan);
//  var fname=$('#inputFriendName').val();
//  var emailId=$('#inputEmail').val();
//  var phoneNumber=$('#inputPhoneNumber').val();
//  var address=$('#inputAddress').val();
//  var friendObj={
//   name:fname,
//   picture: "http://placehold.it/32x32",
//   email:emailId,
//   phone:phoneNumber,
//   address: address
//         };
// console.log(friendObj);
//         url='http://localhost:8080/friends';
//         ajaxType="POST";
//         ajaxPost(url,ajaxType,chatTab,chatContentTemplate,friendObj);
//         location.reload();
//       //  ajaxFun(url,ajaxType,chatTab,chatContentTemplate);
        
// });


//  formBtnSubmit.click (function(){
//  var idSpan=$('.idSpan').text();
//  console.log(idSpan);
//  var inputMessage=$('#inputMessage').val();
//  var messageObj={
//  friendId:idSpan,
//   messageTime:Date(),
//   messages: inputMessage
//         };
//         url='http://localhost:8080/message';
//         ajaxType="POST";
//          $.ajax({
//          type: ajaxType,
//          url: url,
//                  dataType: "json",
//                  data:messageObj,
//                  success: function(newMessage) {
// chatModalBody.append(Mustache.render(messageTemplate,newMessage));
// $(chatModalBody).animate({ scrollTop: $(chatModalBody).prop("scrollHeight")}, 1000);
// $('#inputMessage').val("");
// }
//                  });
        
// });
// function ajaxPost(url, ajaxType,appendElement,contentTemplate,data) // Ajax Function define
//    {
//      $.ajax({
//          type: ajaxType,
//          url: url,
//                  dataType: "json",
//                  data:data,
//                  success: function(newFriend){
//                   chatTab.append(Mustache.render(chatContentTemplate,newFriend));
//                  }                 
                 
//             }); 
//          }

//     $('#myModal').on('shown.bs.modal', function()
//     {
//       var d = $(chatModalBody);
//       d.scrollTop(d.prop("scrollHeight"));
//       console.log("Scrolling");
//     });


//     function setModalMaxHeight(element)
//     {
//         this.$element     = $(element);
//         this.$content     = this.$element.find('.modal-content');
//         var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
//         var dialogMargin  = $(window).width() > 767 ? 60 : 20;
//         var contentHeight = $(window).height() - (dialogMargin + borderWidth);
//         var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
//         var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
//         var maxHeight     = contentHeight - (headerHeight + footerHeight);

//         this.$content.css({
//             'overflow': 'hidden'
//           });

//           this.$element
//             .find('.modal-body').css({
//                   'max-height': maxHeight-20,
//                   'overflow-y': 'auto'
//               });
//     }

//     $('.modal').on('show.bs.modal', function()
//     {
//           $(this).show();
//           setModalMaxHeight(this);
//     });

//     $(window).resize(function() {
//         if ($('.modal.in').length != 0)
//         {
//             setModalMaxHeight($('.modal.in'));
//           }
//     });
//     // End-of-Modal-Height-Setting
 
$("div#form1").append(
// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
$("<h3/>").text("Contact Form"),
 $("<p/>").text("This is my form. Please fill it out. It's awesome!"), $("<form/>", {
action: '#',
method: '#'
}).append(
// Create <form> Tag and Appending in HTML Div form1.
$("<input/>", {
type: 'text',
id: 'vname',
name: 'name',
placeholder: 'Your Name'
}), // Creating Input Element With Attribute.
$("<input/>", {
type: 'text',
id: 'vemail',
name: 'email',
placeholder: 'Your Email'
}), $("<textarea/>", {
rows: '5px',
cols: '27px',
type: 'text',
id: 'vmsg',
name: 'msg',
placeholder: 'Message'
}), $("<br/>"), $("<input/>", {
type: 'submit',
id: 'submit',
value: 'Submit'
})))
// variable declare 
var storeData;
// $('#notification').click(function(){
//     alert("noti clicked");
//     var form=true;
//     if(form==true){
//   $.ajax({
//     type:'GET',
//     var url='http://localhost:8070/form?id='+ formId,
//     success:function(data){

//     },
//     error:function(error){
//       console.log(error);
//     }
//   });    

// } else{
//   alert("no notification");
// }
// });
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var output = (month<10 ? '0' : '') + month + '/' +
              (day<10 ? '0' : '') + day + '/' +
              d.getFullYear();

var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var hour=d.getHours();
var minutes=d.getMinutes();
var second=d.getSeconds();
console.log("time" + time);
$('#date').text(output);

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
console.log(dayName);
console.log(day);
//  var ds=new Date('09/26/2016');
//  console.log(ds);
// var todayDayName=dayName[ds.getDay()];
// $('.')
// console.log(todayDayName);
var monthName=monthNames[month-1];
console.log(monthName);
$('.monthNameh2').text(monthName);

 $('[data-toggle="tooltip"]').tooltip();
 $('.card').click(function(){
    var divID=$(this).attr('id');
    $('.row').hide();
    
    console.log('#'+divID+'Id');

    if(divID=="Attendence"){
      $('#'+divID+'Id').show();
      $('#btnDiv').show();
      $('#pageId').text(divID+' Page');
    
      $.ajax({
      url:'/attendance?userId='+userId +'&date='+output,
      type:'GET',
      success:function(data){
        if(data.length>=1){
          $('.attendenceBtn').hide();
          $('div[id^="col_fld"]').removeClass('panel-danger')
          .addClass('panel-success');
          $('.attendh3').text("Attendence Marked");
         $('#imgID').attr('src','image/check.png');   
        }
      },
      error:function(error){
        console.log(error);
      }
     });
    }
    
    if(divID=="Report"){
      $('#'+divID+'Id').show();
      $('#btnDiv').show();
      $('#pageId').text(divID+' Page');
      var attendenceReportTemplate=$('#attendenceReportTemplate').html();
      var pillsClass=$('.pillsClass');
      var url="/attendance?userId="+userId+'&_sort=Date&_order=DESC';
      var ajaxType="GET";
      pillsClass.empty();
      var showdata={
        date:""
      }
      var countpresent=0;
      $.ajax({
        url:url,
        type:ajaxType,
        success:function(data){
          console.log(data.length);
          $('.presentCount').text(data.length);
            $.each(data,function(i, data){
                countpresent++;
                // console.log(data.length);
              var d = new Date(data.date);
              var todayDayName=dayName[d.getDay()];
             showdata.date=data.date +" : "+todayDayName;
              pillsClass.append(Mustache.render(attendenceReportTemplate,showdata));
            });
        },
        error:function(){
          alert("error in displaying report");
        }
      });
      console.log("present is"+countpresent);
      // $('.presentCount').text(countpresent);
      // ajaxFun(url,ajaxType,pillsClass,attendenceReportTemplate);
    }

    if(divID=="Profile"){
      $('#'+divID+'Id').show();
      $('#btnDiv').show();
      $('#pageId').text(divID+' Page');
    }

    if(divID=="ManageTask"){
      $('#'+divID+'Id').show();
      $('#btnDiv').show();
      $('#pageId').text(divID+' Page');
    }

    if(divID=="KnowledgeBase"){
      $('#'+divID+'Id').show();
      $('#btnDiv').show();
      $('#pageId').text(divID+' Page');
    }

    if(divID=="SoftInstallation"){
      $('#'+divID+'Id').show();
      $('#btnDiv').show();
      $('#pageId').text(divID+' Page');
    }


 });

 $('#backBtn').click(function(){
    $('.row').show();
    $('#btnDiv').hide();
    $('.content').hide();
    $('#DisplayInfo').empty();
 });

  // $("#cards").over(function(){
  //   $("#cards").flip();
  // }); 

//Attendence *************************************************


//*******code for showing request form after 10 
 // if(hour>10&&minutes>0&&second>0){
 //  $('.requestThumb').show();
 //  $('.attendenceThumb').hide();
 //  $('.time').text(time);
 // }
 

 $('.attendenceBtn').click(function(){
   $('div[id^="col_fld"]').removeClass('panel-danger')
   .addClass('panel-success');
     $('.attendh3').text("Attendence Marked");
     $('.attendenceBtn').hide();
     // $('#imgID').removeAttr('src');
     $('#imgID').attr('src','image/check.png');    
     var id=userId;  //get from session
     var date=output;
     var obj={
      userId:id,
      date:output
     }
     $.ajax({
      url:'/attendance',
      type:'POST',
      data:obj,
      success:function(data){
        // alert('success');

      },
      error:function(error){
        console.log(error);
      }
     });
 });

// $( "#datepicker" ).datetimepicker();
// $('#datetimepicker').data("DateTimePicker");
var count=0;

var showdata={
  completeProfile:userProfile
};
 var profileTemplate=$('#profileTemplate').html();
 var profileComplete=$('.profileComplete');
 // $('.progress-bar').text(userObj.completeProfile+'%');
    $('.progress-bar').css("width",showdata.completeProfile+'%');

 profileComplete.append(Mustache.render(profileTemplate,showdata));



 //Personal Detail **********************
 var DisplayInfo=$('#DisplayInfo');
 var personalTemplate =$('#personalTemplate').html();
 var professionalTemplate=$('#professionalTemplate').html();
 var educationalTemplate=$('#educationalTemplate').html();
 var technicalTemplate =$('#technicalTemplate').html();
 //Show Personal Detail
 $('#personalDetail').click(function(){
  var personalDetail={
    name:userName,
    email:userEmail,
    contactNumber:userContact,
    DOB: "",
    alternateContact: "",
    gender: "",
    address: "",
    id:""
  }
  var url='/personalDetail?personId='+userId;
  var ajaxType="GET";  
  DisplayInfo.empty();
  // ajaxFun(url,ajaxType,DisplayInfo,personalTemplate);
  $.ajax({
    type:'GET',
    url:url,
    success:function(data){
      $.each(data,function(i,data){
        personalDetail.DOB=data.DOB;
        personalDetail.alternateContact=data.alternateContact;
        personalDetail.gender=data.gender;
        personalDetail.address=data.address;
        personalDetail.id=data.id;
        DisplayInfo.append(Mustache.render(personalTemplate,personalDetail));
      });

    }

  })
 });
  var getcount=0;

 $('#professionalDetail').click(function(){
  var url='/professionalDetail?personId='+userId;
  var ajaxType="GET";  
  DisplayInfo.empty();
  ajaxFun(url,ajaxType,DisplayInfo,professionalTemplate);
 });

 $('#educationalDetail').click(function(){
  var url='/educationalDetails?personId='+userId;
  var ajaxType="GET";  
  DisplayInfo.empty();
  ajaxFun(url,ajaxType,DisplayInfo,educationalTemplate);
 });
 
 $('#technicalDetail').click(function(){
  var url='/technicalDetails?personId='+userId;
  var ajaxType="GET";  
  DisplayInfo.empty();
  ajaxFun(url,ajaxType,DisplayInfo,technicalTemplate);
 });

console.log("get count"+getcount);
//Edit Personal Information



DisplayInfo.delegate('.glyphEdit','click',function(){
  var li=$(this).closest('.pnl').find('li');
    // var li=$(this).closest('li');
    li.find('input.DOB').val(li.find('span.DOB').html());
    li.find('input.contact').val(li.find('span.contact').html());
    li.find('input.alternateContact').val(li.find('span.alternateContact').html());
    li.find('input.gender').val(li.find('span.gender').html());
    li.find('textarea.address').val(li.find('span.address').html());
    li.addClass('edit');
});

DisplayInfo.delegate('.glyphEditProfessional','click',function(){
    // var li=$(this).closest('li');
    var li=$(this).closest('.pnl').find('li');
    li.find('input.organisationalName').val(li.find('span.organisationalName').html());
    li.find('input.PreviousProject').val(li.find('span.PreviousProject').html());
    li.find('input.Experiance').val(li.find('span.Experiance').html());
    li.find('input.Superviser').val(li.find('span.Superviser').html());
    li.find('input.EmployeeId').val(li.find('span.EmployeeId').html());
    li.addClass('edit');
});

DisplayInfo.delegate('.glyphEditEducational','click',function(){
    var li=$(this).closest('.pnl').find('li');
    li.find('input.highestQualification').val(li.find('span.highestQualification').html());
    li.find('input.UniversityName').val(li.find('span.UniversityName').html());
    li.find('input.DegreeName').val(li.find('span.DegreeName').html());
    li.find('input.Duration').val(li.find('span.Duration').html());
    li.find('textarea.UniversityAddress').val(li.find('span.UniversityAddress').html());
    li.addClass('edit');
});

DisplayInfo.delegate('.glyphTechnicalDetail','click',function(){
    var li=$(this).closest('.pnl').find('li');
    li.find('input.github').val(li.find('span.github').html());
    li.find('input.linkdin').val(li.find('span.linkdin').html());
    li.find('input.skillSet').val(li.find('span.skillSet').html());
    li.find('input.OpenSourceProject').val(li.find('span.OpenSourceProject').html());
    li.addClass('edit');
});

DisplayInfo.delegate('.editCancel','click',function(){
   $(this).closest('li').removeClass('edit');   
});

DisplayInfo.delegate('.cancelProfessional','click',function(){
   $(this).closest('li').removeClass('edit');   
});

DisplayInfo.delegate('.cancelEducational','click',function(){
   $(this).closest('li').removeClass('edit');   
});

DisplayInfo.delegate('.cancelTechnical','click',function(){
   $(this).closest('li').removeClass('edit');   
});

var nextcount=0;
DisplayInfo.delegate('.editSave','click',function(){
   var li=$(this).closest('li');
   var obj={
    DOB:li.find('input.DOB').val(),    
    alternateContact:li.find('input.alternateContact').val(),
    gender:li.find('input.gender').val(),
    address:li.find('textarea.address').val()
  };   

var userObj={
  contactNumber:""
};
userObj.contactNumber=li.find('input.contact').val();
console.log(userObj.contactNumber);
$.ajax({
  url:'/user/'+userId,
  type:"PATCH",
  data:userObj,
  success:function(data){
    // alert('sucess for mobile');
    li.find('span.contact').html(userObj.contactNumber);
     // li.removeClass('edit');
  },
  error:function(){
    alert('error in mobile update');
  }
});

  $.each(obj, function(i,data){
    // console.log(data);
    if(data!=""&data!=0){
      count++;
    }
  });
var dataCount =10;
 var counts=parseInt(count)*5;
nextcount=count;
 count=0;
counts=parseInt(counts)+parseInt(dataCount);
console.log("current point is "+ counts);
var userObj={
  completeProfile:counts
};
$.ajax({
  url:'/user/'+userId,
  type:"PATCH",
  data:userObj,
  success:function(){
    $('.progress-bar').text(userObj.completeProfile+'%');
    $('.progress-bar').css("width",counts+'%');
  },
  error:function(){
    alert('error in mobile update');
  }
});
 

  
  console.log("count is"+ count);
  // var user=0;
    var url='/personalDetail/'+li.attr('data-id');
    // var ajaxType="PATCH";  
    $.ajax({
      url:url,
      type:'PATCH',
      data:obj,
      success:function(){
        li.find('span.DOB').html(obj.DOB);
         li.find('span.alternateContact').html(obj.alternateContact );
         li.find('span.gender').html(obj.gender);
         li.find('span.address').html(obj.address);
         // li.find('span.contact').html(obj.contactNumber);
         li.removeClass('edit');
      },
      error:function(){
        alert('error updating Personal Detail');
      }
      });
});

DisplayInfo.delegate('.saveProfessional','click',function(){
   var li=$(this).closest('li');
   var obj={
    organisationalName:li.find('input.organisationalName').val(),
    EmployeeId:li.find('input.EmployeeId').val(),
    PreviousProject:li.find('input.PreviousProject').val(),
    Experiance:li.find('input.Experiance').val(),
    SuperviserMailId:li.find('input.Superviser').val()
  };   
  var count=0;
  $.each(obj, function(i,data){
    // console.log(data);
    if(data!=""&data!=0){
      count++;
    }
  });
var dataCount =10;
count=nextcount+count;
 var counts=parseInt(count)*5;
 nextcount=count;
 count=0;
counts=parseInt(counts)+parseInt(dataCount);
console.log("current point is "+ counts);
var userObj={
  completeProfile:counts
};
$.ajax({
  url:'/user/'+userId,
  type:"PATCH",
  data:userObj,
  success:function(){
    $('.progress-bar').text(userObj.completeProfile+'%');
    $('.progress-bar').css("width",counts+'%');
  },
  error:function(){
    alert('error in mobile update');
  }
});
 
  // var user=0;
    var url='/professionalDetail/'+li.attr('data-id');
    var ajaxType="PATCH";  
    $.ajax({
      url:url,
      type:'PATCH',
      data:obj,
      success:function(){
         li.find('span.organisationalName').html(obj.organisationalName);
         li.find('span.EmployeeId').html(obj.EmployeeId );
         li.find('span.PreviousProject').html(obj.PreviousProject);
         li.find('span.Experiance').html(obj.Experiance);
         li.find('span.Superviser').html(obj.SuperviserMailId);
         li.removeClass('edit');
      },
      error:function(){
        alert('error updating Organisational Detail');
      }
      });
});

DisplayInfo.delegate('.saveEducational','click',function(){
   var li=$(this).closest('li');
   var obj={
    highestQualification:li.find('input.highestQualification').val(),
    UniversityName:li.find('input.UniversityName').val(),
    DegreeName:li.find('input.DegreeName').val(),
    Duration:li.find('input.Duration').val(),
    UniversityAddress:li.find('textarea.UniversityAddress').val()
  };   
  
  var count=0;
  $.each(obj, function(i,data){
    // console.log(data);
    if(data!=""&data!=0){
      count++;
    }
  });
var dataCount =10;
count=nextcount+count;
 var counts=parseInt(count)*5;
 nextcount=count;
 count=0;
counts=parseInt(counts)+parseInt(dataCount);
console.log("current point is "+ counts);
var userObj={
  completeProfile:counts
};
$.ajax({
  url:'/user/'+userId,
  type:"PATCH",
  data:userObj,
  success:function(){
    $('.progress-bar').text(userObj.completeProfile+'%');
    $('.progress-bar').css("width",counts+'%');
  },
  error:function(){
    alert('error in mobile update');
  }
});
  // var user=0;
    var url='/educationalDetails/'+li.attr('data-id');;
    var ajaxType="PATCH";  
    $.ajax({
      url:url,
      type:'PATCH',
      data:obj,
      success:function(){
         li.find('span.highestQualification').html(obj.highestQualification);
         li.find('span.UniversityName').html(obj.UniversityName );
         li.find('span.DegreeName').html(obj.DegreeName);
         li.find('span.Duration').html(obj.Duration);
         li.find('span.UniversityAddress').html(obj.UniversityAddress);
         li.removeClass('edit');
      },
      error:function(){
        alert('error updating Educational Detail');
      }
      });
});

DisplayInfo.delegate('.saveTechnical','click',function(){
   var li=$(this).closest('li');
   var obj={
    github:li.find('input.github').val(),
    linkdin:li.find('input.linkdin').val(),
    skillSet:li.find('input.skillSet').val(),
    OpenSourceProject:li.find('input.OpenSourceProject').val(),
  };   
  
  var count=0;
  $.each(obj, function(i,data){
    // console.log(data);
    if(data!=""&data!=0){
      count++;
    }
  });
var dataCount =10;
count=nextcount+count;
 var counts=parseInt(count)*5;
 nextcount=count;
 count=0;
counts=parseInt(counts)+parseInt(dataCount);
console.log("current point is "+ counts);
var userObj={
  completeProfile:counts
};
$.ajax({
  url:'/user/'+userId,
  type:"PATCH",
  data:userObj,
  success:function(){
    $('.progress-bar').text(userObj.completeProfile+'%');
    $('.progress-bar').css("width",counts+'%');
  },
  error:function(){
    alert('error in mobile update');
  }
});
  // var user=0;
    var url='/technicalDetails/'+li.attr('data-id');;
    var ajaxType="PATCH";  
    $.ajax({
      url:url,
      type:'PATCH',
      data:obj,
      success:function(){
         li.find('span.github').html(obj.github);
         li.find('span.linkdin').html(obj.linkdin );
         li.find('span.skillSet').html(obj.skillSet);
         li.find('span.OpenSourceProject').html(obj.OpenSourceProject);
         li.removeClass('edit');
      },
      error:function(){
        alert('error updating Technical Detail');
      }
      });
});

//Edit Personal Info End ******************************

console.log("totalcount is"+count);

// info on click ***********************************************
$('.adminuser').click(function(){
    var url='/user?id=' + userId;
    var ajaxType='GET';
    var infoTemplate=$('#infoTemplate').html();
    var MyInfoModalBody=$('.MyInfoModalBody');
    var batchTemplate=$('#batchTemplate').html();
    var catagoryTemplate=$('#catagoryTemplate').html();
    var mentorTemplate=$('#mentorTemplate').html();
    var userdata={};
    MyInfoModalBody.empty();
    ajaxFun(url,ajaxType,MyInfoModalBody,infoTemplate,userdata);
    url='/batch?id='+ userBatch;
    ajaxFun(url,ajaxType,MyInfoModalBody,batchTemplate,userdata);
    url='/subCategory?id='+ userSubcategory;
    ajaxFun(url,ajaxType,MyInfoModalBody,catagoryTemplate,userdata);
    var mentorId=500001;
    url='/user?id=' + mentorId;
    console.log("mentor");
    ajaxFun(url,ajaxType,MyInfoModalBody,mentorTemplate,userdata);
    console.log("mentor"); 

});
// $('#MyInfo').click()

function ajaxFun(url,ajaxType,appendElement,template,userdata){
  
       return $.ajax({
          url:url,
          type:ajaxType,
          success:function(data){
            // storeData=data;
            // console.log("user data" + storeData);
            $.each(data, function(j, data){
              if(data==""){
                getcount++;
              }
            appendElement.append(Mustache.render(template,data)); //Mustache to render template
                            });
             // return storeData;
             // userdata(data);
          },
          error:function(error){
            console.log("service error");
          }
        });
     }

 }); //ready function ends