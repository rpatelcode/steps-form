var field = {};
    var isSinglename = false;    
    
    
    function populateTradingNameOptionsGroup(optionlist, optiongrouplabel){		
		if(optionlist){			
			var optgroup = $('<optgroup/>');
			optgroup.attr('label', optiongrouplabel);			
					
			$.each( optionlist, function( key, value ) {
				//optgroup.add($("<option></option>").attr("value",value.name).text(value.name));				
				optgroup.append($("<option></option>").val(value).html(value));			  	
			});			
			$("#TradeingName").append(optgroup);
		}
	}		
		
	$(document).ready(function () {
      
// Browser Support
    var settings = {
        "async": true,
        "crossDomain": true,
        //"url": "https://was-inter-sit.toronto.ca/cc_sr_v1/submit/Ombudsman",
        "url": "https://was-inter-qa.toronto.ca/cc_sr_v1/submit/Ombudsman",
        //"url": "https://secure.toronto.ca/cc_sr_v1/submit/Ombudsman",
        "method": "POST",
        "headers": {
          "content-type": "text/xml",
          "cache-control": "no-cache"
        },
        "data": ""
      }
      $.ajax(settings).fail( function(xhr, textStatus, errorThrown) {
        	console.log((xhr.responseText));
          console.log("Browser not supported");
          $('.indexpage').hide();
       		$('.viewpage').hide();
        	$('.successpage').show();
        	$('#download_pdf').hide();
          	
           document.getElementById("caseID").innerHTML = "<h2>Your browser doesn't support this app please update or change your browser</h1>";
          // If less than IE9
           if( !document.addEventListener ){
            document.getElementById("caseID").innerHTML = "<h2>Your browser doesn't support this app please update or change your browser</h1>";
            }
      });
    
    // End Browser Support

     //initialize the javascript
     App.init();
     App.masks();
      
     // Select 2 option
     $(".select2").select2({
     	width: '100%'
     });
     
    var Web_Contact_Consideration_MaxLength = 100;
	$('#Web_Contact_Consideration').keyup(function() {
	  var length = $(this).val().length;
	  var length = Web_Contact_Consideration_MaxLength-length;
	  $('#Web_Contact_Consideration_Chars').text(length);
	});
	
	var Summary_MaxLength = 4000;
	$('#Summary').keyup(function() {
	  var length = $(this).val().length;
	  var length = Summary_MaxLength-length;
	  $('#Summary_Chars').text(length);
	});
     
     //new code: populate tradingname drop down list from json file    
     //json contains array of type objects (grouped by type)	   
	 //$.getJSON("/cmsweb/divisionsbytype.json", function (data) {
	 $.getJSON("divisionsbytype.json", function (data) {		
		//console.log(data);
	    
	    //for each trading type get list of tradingnames
	    $.each( data, function( key, tradingtype ) {
		  	
		  	tradingtypenames = $.map( tradingtype.values, function( obj, i ) {
			  	return obj.name;
			});				
			
			//sort tradingtypenames
			tradingtypenames.sort( function( a, b ) {
			    a = a.toLowerCase();
			    b = b.toLowerCase();
			
			    return a < b ? -1 : a > b ? 1 : 0;
			});
			
			populateTradingNameOptionsGroup(tradingtypenames, tradingtype.type);		  
		});     	
	 }); 
         	
	/* 
	//old code
	//works if json file contains objects with name and type attributes
	//populate tradingname drop down list from json file    
	$.getJSON("/cmsweb/divisionsByNameAndType.json", function (data) {	
		//get unique trading types from json.tradingnames array
	    var tradingtypes = $.unique(data.map(function (tradingname) {
    			return tradingname.type;
    		})
    	);
	    //for each trading type get list of tradingnames - select options
	    $.each( tradingtypes, function( key, tradingtype ) {
		  	tradingtypenames = $.grep( data, function( obj, i ) {
			  	return obj.type === tradingtype;
			});	
			//sort tradingtypenames
			tradingtypenames.sort( function( a, b ) {
			    a = a.name.toLowerCase();
			    b = b.name.toLowerCase();
			
			    return a < b ? -1 : a > b ? 1 : 0;
			});
			populateTradingNameOptionsGroup(tradingtypenames, tradingtype);		  
		});     	
	}); 
	*/              

      //this is for parsley to validate 'on time'
      $(document).on('keypress', function (evt) {
        if (evt.isDefaultPrevented()) {
          // Assume that's because of maskedInput
          // See https://github.com/guillaumepotier/Parsley.js/issues/1076
          $(evt.target).trigger('input');
        }
      });

      //toggle single input data field
      $('#ckSingle').click(function () {
        //$('input[id$="ck1"]').click(function () {
        //$('input[type="checkbox"]').click(function(){
        
        $('#Firstname').val('');
        $('#Surname').val('');
        $('#Singlename').val('');

        //var inputValue = $(this).attr("value");
        //$("." + inputValue).toggle("hide");

        $('.single').toggle("hide");

        if ($(this).is(':checked')) { //if($(this).prop('checked')){

          isSinglename = true;

          //firstname and surname are not required              
          $('#Firstname').prop("required", false);
          $('#Surname').prop("required", false);
          $('#Singlename').prop("required", true);
        } else {

          isSinglename = false;

          //singlename is required              
          $('#Firstname').prop("required", true);
          $('#Surname').prop("required", true);
          $('#Singlename').prop("required", false);
        }
        //alert($('#Singlename').prop("required"));

        $('#myForm').parsley().reset();
      });

      //toggle consent personal information
      $('#btnPreview').hide();      
      $("input[name='Consent']").click(function () {
        if ($(this).val() === "No") {
          $('#btnPreview').hide();          
          $('.alert').show();
          $('#myForm').parsley().reset();
        }
        if ($(this).val() === "Yes") {
          $('#btnPreview').show();          
          $('.alert').hide();
        }
      });

      $('#myForm').parsley();

      // Privent Default submit, Validate form, Hide indexpage, reveal Viewpage
      $("#myForm").submit(function (e) {
        e.preventDefault();
        $('.indexpage').hide();
        $('.viewpage').show();
        // serialize form
        var formArray = $('form').serializeArray();
        for (var i = 0; i < formArray.length; i++) {
          //field[formArray[i]['name']] = formArray[i]['value'];
          field[formArray[i].name] = formArray[i].value;
        }
        console.log(field);

        // To dispay on page just for view
        document.getElementById("View_Firstname").innerHTML = field.Firstname;
        document.getElementById("View_Surname").innerHTML = field.Surname;
        document.getElementById("View_Singlename").innerHTML = field.Singlename;
        document.getElementById("View_Email").innerHTML = field.Email;
        document.getElementById("View_Address1").innerHTML = field.Address1;
        document.getElementById("View_Address2").innerHTML = field.Address2;
        document.getElementById("View_City").innerHTML = field.City;
        document.getElementById("View_Province").innerHTML = field.Province;
        document.getElementById("View_PostCode").innerHTML = field.PostCode;
        document.getElementById("View_Phone").innerHTML = field.Phone;

        if (field.PhoneType == "PhoneBH") {
          document.getElementById("View_PhoneType").innerHTML = "Work";
        } else if (field.PhoneType == "PhoneMB") {
          document.getElementById("View_PhoneType").innerHTML = "Cell";
        } else if (field.PhoneType == "PhoneAH") {
          document.getElementById("View_PhoneType").innerHTML = "Home";
        } else {
          document.getElementById("View_PhoneType").innerHTML = "";
        }
        //document.getElementById("View_PhoneType").innerHTML = field.PhoneType;

        document.getElementById("View_ContactTime").innerHTML = field.PhoneTime;
        document.getElementById("View_Web_Contact_Consideration").innerHTML = field.Web_Contact_Consideration;
        document.getElementById("View_What_Division").innerHTML = field.TradeingName;
        document.getElementById("View_Summary").innerHTML = field.Summary;

        //Create Json object

        $xml_json = '{ ' +
          '"Case_Web_Form": {' +

          '"Case": {' +
          '"XSDID": 1,' +
          '"Web_Contact_Consideration": "' + field.Web_Contact_Consideration + '",' +
          '"Consent_Received": "Yes",' +
          '"Summary": "' + field.Summary + '"' +
          '},' +
          '"Agency": {' +
          '"XSDID": 6,' +
          '"TradingName": "' + field.TradeingName + '"' +
          '},' +
          '"Party": {' +
          '"XSDID": 2,' +
          '"Firstname": "' + field.Firstname + '",' +
          '"Surname": "'+ field.Surname +''+ field.Singlename +'",' +         
          '"EMail": "' + field.Email + '",' +
          '"Children": {' +
          '"Party_RTYPE_Base_Person_Address": {' +
          '"XSDID": 20,' +
          '"AddressCode": "STREET",' +
          '"Address1": "' + field.Address1 + '",' +
          '"Address2": "' + field.Address2 + '",' +
          '"City": "' + field.City + '",' +
          '"PostCode": "' + field.PostCode + '",' +
          '"State": "' + field.Province + '"' +
          '}' +
          '},' +
          '"' + field.PhoneType + '": "' + field.Phone + '",' +
          '"Preferred_Contact_Time": "' + field.PhoneTime + '"' +
          '},' +
          '"Case_Complainant": {' +
          '"XSDID": 4,' +
          '"LINK_HOLDER_XSDID": 2,' +
          '"LINK_OWNER_XSDID": 1' +
          '},' +
          '"Case_Respondent": {' +
          '"XSDID": 7,' +
          '"LINK_HOLDER_XSDID": 6,' +
          '"LINK_OWNER_XSDID": 1' +
          '},' +
          '"ExtendedInfo": {' +
          '"AnyContent": ""' +
          '}' +
          '}' +
          '}';

        console.log($xml_json);

        // Used to generate PDF
        document.getElementById("PDF_Firstname").innerHTML = field.Firstname;
        document.getElementById("PDF_Surname").innerHTML = field.Surname;
        document.getElementById("PDF_Singlename").innerHTML = field.Singlename;
        document.getElementById("PDF_Email").innerHTML = field.Email;
        document.getElementById("PDF_Address1").innerHTML = field.Address1;
        document.getElementById("PDF_Address2").innerHTML = field.Address2;
        document.getElementById("PDF_City").innerHTML = field.City;
        document.getElementById("PDF_Province").innerHTML = field.Province;
        document.getElementById("PDF_PostCode").innerHTML = field.PostCode;
        document.getElementById("PDF_Phone").innerHTML = field.Phone;
        document.getElementById("PDF_PhoneType").innerHTML = field.PhoneType;
        document.getElementById("PDF_ContactTime").innerHTML = field.PhoneTime;
        document.getElementById("PDF_Web_Contact_Consideration").innerHTML = field.Web_Contact_Consideration;
        document.getElementById("PDF_What_Division").innerHTML = field.TradeingName;
        document.getElementById("PDF_Summary").innerHTML = field.Summary;
      });
    });

    function backToIndexpage() {
      //alert("back to index page");
      $('.indexpage').show();
      $('.viewpage').hide();
    }

    function soap() {
      var settings = {
        "async": true,
        "crossDomain": true,
        //"url": "https://was-inter-sit.toronto.ca/cc_sr_v1/submit/Ombudsman",
        "url": "https://was-inter-qa.toronto.ca/cc_sr_v1/submit/Ombudsman",
        //"url": "https://secure.toronto.ca/cc_sr_v1/submit/Ombudsman",
        "method": "POST",
        "headers": {
          "content-type": "text/xml",
          "cache-control": "no-cache"
        },
        "data": $xml_json
      }
      $.ajax(settings).done(function (response) {
        //console.log(response);
        //hide viewpage and show successpage
        $('.viewpage').hide();
        $('.successpage').show();

        var data = response['EventMessageResponse']['Response'];
        $ResponseBody = data.ResponseBody;
        //console.log($ResponseBody);

        $caseID = $($.parseXML($ResponseBody)).find("CaseNumber");
        //console.log($caseID.text());
        $validationMsg = $($.parseXML(response)).find("ValidationMsg");
        
       	if ($caseID.text()) {
          	document.getElementById("caseID").innerHTML = "Your complaint has been successfully submitted. Ombudsman Toronto will contact you within two business days. Your Case Number is <span style='font-weight: bold;'>" + $caseID.text() + "</span>.";
        }
        if ($validationMsg.text()) {
          	document.getElementById("caseID").innerHTML = "An error occurred while processing your online complaint. Please try again later or contact us by phone or in person to discuss your complaint.";
          	$('#download_pdf').hide();
          	console.log($validationMsg.text());
        }
        document.getElementById("PDF_caseID").innerHTML = $caseID.text();
      })
      .fail( function(xhr, textStatus, errorThrown) {
        	console.log((xhr.responseText));
        	
       		$('.viewpage').hide();
        	$('.successpage').show();
        	$('#download_pdf').hide();
          	
       		document.getElementById("caseID").innerHTML = "An error occurred while processing your online complaint. Please try again later or contact us by phone or in person to discuss your complaint.";
      });
    }

    // Print PDF
    function clkPrint() {      
      
      if(isSinglename){       
        $('#PDF_Firstname_row').remove();
        $('#PDF_Surname_row').remove();
      }else{       
        $('#PDF_Singlename_row').remove();
      }

      var divContents = $("#PDFContainer").html();
            
      var printWindow = window.open('about:blank','', 'height=400,width=800, status=yes, toolbar=no, location=yes, resizable=yes, menubar=no, scrollbars=yes');	
      
      printWindow.document.write('<html><head><title>Ombudsman Toronto</title>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(divContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }