// My Custom JQuery

$(function (){
	var userId = $.session.get('loggedInUser');
	var userType = $.session.get('loggedInUserType');
	var userBatch = $.session.get('loggedInUserBatch');
	var userSubcategory = $.session.get('loggedInUserSubCategory');
	var userName = $.session.get('loggedInUserName');
	
	// Nodes
	var $yourFormRow = $('#your-form-row');
	var $otherFormRow = $('#other-form-row');
	var $formFields = $('#form-fields');
	// Templates
	var formRowTemp = $('#form-row-template').html();
	var formRowErrTemp = $('#form-row-error-template').html();
	var formFieldTemplate = $('#create-form-field-template').html();
	
	// Function to append a Template
	function addTemplate ($parentNod, templateName, rec)
	{
		$parentNod.append(Mustache.render(templateName, rec));
	}

	// Load My Form Details
	function loadMyFormDetails()
	{
		$.ajax(
		{
			type: 'GET',
			url: '/form?author=' + userId,
			success : function (formData)
			{
				if(formData.length > 0)
				{
					$.each(formData, function (i, form)
					{
						var showData = {
							'title' : form.title,
							'target' : form.targetAudience
						}
						addTemplate($yourFormRow, formRowTemp, showData);						
					});
				}
				else
				{
					addTemplate($yourFormRow, formRowErrTemp);
				}
			},
			error : function()
			{
				addTemplate($yourFormRow, formRowErrTemp);
			}
		});
	}

	// Load Other Form Details
	function loadOtherFormDetails()
	{
		$.ajax(
		{
			type: 'GET',
			url: '/form',
			success : function (formData)
			{
				var otherCount=0;
				if(formData.length > 0)
				{
					$.each(formData, function (i, form)
					{
						var showData = {
							'title' : form.title,
							'target' : form.targetAudience
						}

						if(form.author !== userId)								
						{
							addTemplate($otherFormRow, formRowTemp, showData);
							otherCount++;
						}
					});
					if(otherCount == 0)
						addTemplate($otherFormRow, formRowErrTemp);
				}
				else
				{
					addTemplate($otherFormRow, formRowErrTemp);
				}
			},
			error : function()
			{
				addTemplate($otherFormRow, formRowErrTemp);
			}
		});
	}

	// My Form refresh button event
	$('.ref-myform-button').on('click', function(){
		$('#your-form-row td').remove();
		loadMyFormDetails();
	});

	// Other Form refresh button event
	$('.ref-otherform-button').on('click', function(){
		$('#other-form-row td').remove();
		loadOtherFormDetails();
	});

	loadMyFormDetails();
	loadOtherFormDetails();

	$('#add-new-field-button').on('click', function(){
		addTemplate($formFields, formFieldTemplate);
	});
});