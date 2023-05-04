function veevaNavigateScene(linkBtn) {
	var page = linkBtn.attr('data-page');
	if(page == '') return false;
	
	veevaNavigateSceneWithID(page);
}
function veevaNavigateSceneWithID(id) {
	if(id == '') return false;
	
	var presentation = $('#main').attr('presentation-id');
	var toPage = presentation+'_'+id;
	var theURL = toPage + '.zip';
	com.veeva.clm.gotoSlide(theURL);
}

function veevaNavigatePresentation(linkBtn) {
	var id = linkBtn.attr('data-page');
	var presentation = linkBtn.attr('data-presentation');
	
	if(id == '' || presentation == '') return false;
	
	veevaNavigatePresentationWithID(id, presentation);
}
function veevaNavigatePresentationWithID(id, presentation) {
	if(id == '' || presentation == '') return false;
	
	var toPage = presentation+'_'+id;
	var theURL = toPage + '.zip';
	com.veeva.clm.gotoSlide(theURL, presentation);
}



$(document).ready(function() {
	// Hintergrundbild grösse laden und dem DIV zuweisen
	var c = 0;

	
	/*SUBMENU*/
	$('.open-submenu').click(function(){
		if($(this).find('.submenu:visible').length>0){
			$('.submenu').hide();
		} else {
			$('.submenu').hide();
			$(this).find('.submenu').show();
		}
	});
	
	/*POPUPS*/
	$('.popup-btn').click(function(){
		var sid = $('#main').attr('slide-id');
		if(sid == '03'){
			$('.popup').hide();
		}
		var pid = $(this).attr('id').replace('popup-btn-', '');
		$('#popup-'+pid).toggle();
	});
	$('.popup').click(function(){
		$(this).hide();
	});
	
	/*LINKS*/
	$('.link').click(function(){
		veevaNavigateScene($(this));
	});
	$('.linkEx').click(function(){
		veevaNavigatePresentation($(this));
	});
	
	$('.overlay').click(function(){
		if($(this).hasClass("inside")){
			//do nothing
		} else {
			localStorage.setItem("beforeOverlay", $('#main').attr('slide-id'));
		}
		veevaNavigateScene($(this));
	});
	
	$('.shared').click(function(){
		if($(this).hasClass("inside")){
			//do nothing
		} else {
			localStorage.removeItem("lastPresentation");localStorage.setItem("beforeShared", $('#main').attr('slide-id'));
		}
		veevaNavigateScene($(this));
	});
	$('.sharedEx').click(function(){
		if($(this).hasClass("inside")){
			//do nothing
		} else {
			localStorage.setItem("lastPresentation", $('#main').attr('presentation-id'));
			localStorage.setItem("beforeSharedEx", $('#main').attr('slide-id'));
		}
		veevaNavigatePresentation($(this));
	});
	
	$('.close-overlay-btn').click(function(){
		var sid = localStorage.getItem("beforeOverlay");
		localStorage.removeItem("beforeOverlay");
		
		if(sid != null) {
			veevaNavigateSceneWithID(sid);
		}
	});
	
	$('.return-btn').click(function(){
		if (localStorage.getItem("lastPresentation") === null) {
			var sid = localStorage.getItem("beforeShared");
			localStorage.removeItem("beforeShared");
			
			if(sid != null) {
				veevaNavigateSceneWithID(sid);
			}
		} else {
			var sid = localStorage.getItem("beforeSharedEx");
			localStorage.removeItem("beforeSharedEx");
			var pid = localStorage.getItem("lastPresentation");
			localStorage.removeItem("lastPresentation");
			veevaNavigatePresentationWithID(sid, pid);
		}
	});

	
});