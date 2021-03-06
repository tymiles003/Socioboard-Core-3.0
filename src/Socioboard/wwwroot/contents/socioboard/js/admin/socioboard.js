/**
Core script to handle the entire theme and core functions
**/
var Socioboard = function() {

    var apiDomain = 'http://localhost:6361/';
    var Domain ='http://localhost:9821/';

}();

dashboard = function()
{
	// initialize core components
   // $('#addprofile').openModal();
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
      }
    );     
    Materialize.updateTextFields();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.facebookfeeds').slimScroll({
        color: '#3B5998',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });

    $('.twtfeeds').slimScroll({
        color: '#90caf9',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });

    $('#social_profile_list').slimScroll({
        color: '#424242',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });


    $('#recent_followers_list').slimScroll({
        color: '#424242',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });  	    
};


profile = function()
{
	// initialize core components
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({        
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.facebookfeeds').slimScroll({
        color: '#3B5998',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });

    $('.twtfeeds').slimScroll({
        color: '#90caf9',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });

    $('#social_profile_list').slimScroll({
        color: '#424242',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });


    $('#recent_followers_list').slimScroll({
        color: '#424242',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });
}

profilesetting = function()
{
	// initialize core components

    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	});
    Materialize.updateTextFields();

     // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });
}

smartinbox = function()
{
	// initialize core components
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.smartinbox_slider').slimScroll({
        color: '#1976D2',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    $('.smartinbox_filter_slider').slimScroll({
        color: '#424242',
        size: '10px',
        height: '200px',
        alwaysVisible: true
    });
}

inboxmessage = function()
{
    // initialize core components
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.inboxmessage_slider').slimScroll({
        color: '#1976D2',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    $('.inboxmsg_filter_slider').slimScroll({
        color: '#424242',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });
}

mytask = function()
{
	// initialize core components
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
      }
    );     


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.facebookfeeds').slimScroll({
        color: '#3B5998',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });

    $('.twtfeeds').slimScroll({
        color: '#90caf9',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });

    $('#social_profile_list').slimScroll({
        color: '#424242',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });


    $('#recent_followers_list').slimScroll({
        color: '#424242',
        size: '10px',
        height: '400px',
        alwaysVisible: true
    });
}

sentmessages = function()
{
    // initialize core components
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.smartinbox_slider').slimScroll({
        color: '#1976D2',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    $('.smartinbox_filter_slider').slimScroll({
        color: '#424242',
        size: '10px',
        height: '200px',
        alwaysVisible: true
    }); 
}

facebookfeeds = function()
{
	// initialize core components

	$('.modal-trigger').leanModal();
	$('ul.tabs').tabs();
	$('select').material_select();
	$('.tooltipped').tooltip({delay: 50});
	$('.dropdown-button').dropdown({
	    inDuration: 300,
	    outDuration: 225,
	    constrain_width: false, // Does not change width of dropdown to that of the activator
	    hover: true, // Activate on hover
	    gutter: 0, // Spacing from edge
	    belowOrigin: false, // Displays dropdown below the button
	    alignment: 'left' // Displays dropdown with edge aligned to the left of button
	});

	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	});


	// Basic
	$('.dropify').dropify();

	// Translated
	$('.dropify-fr').dropify({
	    messages: {
	        default: 'Glissez-déposez un fichier ici ou cliquez',
	        replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
	        remove:  'Supprimer',
	        error:   'Désolé, le fichier trop volumineux'
	    }
	});

	// Used events
	var drEvent = $('.dropify-event').dropify();

	drEvent.on('dropify.beforeClear', function(event, element){
	    return confirm("Do you really want to delete \"" + element.filename + "\" ?");
	});

	drEvent.on('dropify.afterClear', function(event, element){
	    alert('File deleted');
	});


	$('.facebookfeeds').slimScroll({
	    color: '#3B5998',
	    size: '10px',
	    height: '600px',
	    alwaysVisible: true
	});
}

twitterfeeds = function()
{
	// initialize core components
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' 
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });

    // twitter scroll 
    $('.twtfeeds').slimScroll({
        color: '#90CAF9',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });
}

instagramfeeds = function()
{
	// initialize core components
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.instagramfeeds').slimScroll({
        color: '-webkit-gradient(linear,left top,right top,color-stop(32%,#FAB51C),color-stop(60%,#EF0915),color-stop(100%,#BE039C))',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    $('.instagramcommand').slimScroll({
        color: '-webkit-gradient(linear,left top,right top,color-stop(32%,#FAB51C),color-stop(60%,#EF0915),color-stop(100%,#BE039C))',
        size: '10px',
        height: '300px',
        alwaysVisible: true
    });
}

//  youtube  feeds

googleplusfeeds = function()
{
	// initialize core components
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });


    $('.gplusfeeds').slimScroll({
        color: '#d32f2f',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });
}


// publish all
schedulemsg = function () {
    // initialize core components
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
    }
    );

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();

    $('input#input_text, textarea#ScheduleMsg').characterCounter();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });
};

socioqueue = function () {
    // initialize core components
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
    }
    );

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();

    $('input#input_text, textarea#ScheduleMsg').characterCounter();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });

   // $('#SocioQueue').DataTable();
};

draft = function () {
    // initialize core components
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
    }
    );

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();

    $('input#input_text, textarea#ScheduleMsg').characterCounter();


    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });

    //$('#DraftTable').DataTable();
};

calendar = function () {
    // initialize core components
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
    }
    );
   
    $('#calendar').fullCalendar();

    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-dÃ©posez un fichier ici ou cliquez',
            replace: 'Glissez-dÃ©posez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'DÃ©solÃ©, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });
}


// discovery
discovery = function () {
    // initialize core components

    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });

    // facebook scroll
    $('.facebookfeeds').slimScroll({
        color: '#3B5998',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    // google plus scroll
    $('.gplusfeeds').slimScroll({
        color: '#d32f2f',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    // instagram scroll 
    $('.instagramfeeds').slimScroll({
        color: '-webkit-gradient(linear,left top,right top,color-stop(32%,#FAB51C),color-stop(60%,#EF0915),color-stop(100%,#BE039C))',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    // twitter scroll 
    $('.twtfeeds').slimScroll({
        color: '#90CAF9',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    // section_filter scroll
    $('.section_filter').slimScroll({
        color: '#90CAF9',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });
}

// Smart Search
smartsearch = function () {
    // initialize core components

    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
    });


    $('.smartsearchfeeds').slimScroll({
        color: '#3B5998',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });

    $('.section_filter').slimScroll({
        color: '#3B5998',
        size: '10px',
        height: '600px',
        alwaysVisible: true
    });
}


groups = function()
{
    // initialize core components

    $('.modal-trigger').leanModal();
    //$('ul.tabs').tabs();
    $('select').material_select();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    Materialize.updateTextFields();

     // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });
}