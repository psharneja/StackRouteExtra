// My Custom JQuery

$(function (){
	var userId = $.session.get('loggedInUser');
	var userType = $.session.get('loggedInUserType');
	var userBatch = $.session.get('loggedInUserBatch');
	var userSubcategory = $.session.get('loggedInUserSubCategory');
	var userName = $.session.get('loggedInUserName');
	console.log("From Manage User JQuery");
	console.log(userId + " - " + userType + " - " + userBatch + " - " + userSubcategory + " - " + userName);

	var batchList = [];
	// Nodes
	var $studListTab = $('.stud-list');
	var $adminListTab = $('.admin-list');
	
	// Templates
	var studTableTemp = $('#student-table-template').html();
	var studRowTemp = $('#student-row-template').html();
	var adminRowTemp = $('#admin-row-template').html();

	var studTableErrTemp = $('#student-table-error-template').html();
	var studRowErrTemp = $('#student-row-error-template').html();
	var adminRowErrTemp = $('#admin-row-error-template').html();
	
	// Function to append a Template
	function addTemplate ($parentNod, templateName, rec)
	{
		console.log("-->")
		console.log($parentNod);
		$parentNod.append(Mustache.render(templateName, rec));
	}

	// Load Student Details
	function loadStudDetails()
	{
		$.ajax(
		{
			type: 'GET',
			url: '/batch?status=active',
			success : function (batchData)
			{
				batchList = batchData;

				if(batchData.length > 0)
				{
					$.each(batchData, function (i, batch)
					{
						var showData = {
							'batchHead' : batch.batchName,
							'studentBodyId' : 'batch' + batch.id
						}
								
						addTemplate($studListTab, studTableTemp, showData);
						var $srow = $('#' + showData.studentBodyId);

						$.ajax(
						{
							type: 'GET',
							url: '/user?batch=' + batch.id + '&registered=true',
							success : function (studData)
							{
								if(studData.length > 0)
								{
									console.log(studData.length);
									$.each(studData, function (j, row)
									{
										console.log("row");
										addTemplate($srow, studRowTemp, row);
										$('.stud-more-details').fadeOut(0);
									});
								}
								else
								{
									addTemplate($srow, studRowErrTemp);
								}
							},
							error : function()
							{
								addTemplate($srow, studRowErrTemp);
							}
						});

					});
				}
				else
				{
					addTemplate($studListTab, studTableErrTemp);			
				}
			},
			error : function()
			{
				addTemplate($studListTab, studTableErrTemp);
			}
		});
	}

	// Load Admin Details
	function loadAdminDetails()
	{
		$.ajax(
		{
			type: 'GET',
			url: '/user?userType=admin',
			success : function (adminData)
			{
				console.log(adminData.length);
				$.each(adminData, function (i, row)
				{
					addTemplate($adminListTab, adminRowTemp, row);
					$('.stud-more-details').fadeOut(0);
				});
			},
			error: function()
			{
				addTemplate($adminListTab, adminRowErrTemp);
			}
		});
	}

	loadStudDetails();
	loadAdminDetails()

	// Event for toggling more details tab
	$studListTab.delegate('.more-details','click', function(){
		console.log("more details");
		$(this).closest('tr').next().fadeToggle(100);

		if ( $(this).attr('data-id') == 'open' )
		{
			$(this).html('<span class="glyphicon glyphicon-user"></span>&nbsp;<span class="glyphicon glyphicon-chevron-down"/>')
			$(this).attr('data-id','close');
		}
		else
		{
			$(this).html('<span class="glyphicon glyphicon-user"></span>&nbsp;<span class="glyphicon glyphicon-chevron-up"/>')
			$(this).attr('data-id','open');
		}
	});

	// Student refresh button event
	$('.ref-stud-button').on('click', function(){
		$('.stud-list table').remove();
		loadStudDetails();
	});

	// Admin refresh button event
	$('.ref-admin-button').on('click', function(){
		$('.admin-list tr').remove();
		loadAdminDetails();
	});
});