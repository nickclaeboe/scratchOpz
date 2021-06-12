// Bootstrap collapse slide effect

$('.collapse').on('show.bs.collapse', function(e) {
	if( $('#'+this.id+'').hasClass('navbar-collapse') ){
		$(document).find('#'+this.id+'').slideDown(500);
	}
});

$('.collapse').on('hide.bs.collapse', function(e) {
	if( $('#'+this.id+'').hasClass('navbar-collapse') ){
		$(document).find('#'+this.id+'').slideUp(500);
	}
});

// Add open class
$('.collapse').on('show.bs.collapse', function(e) {
	if( $('#'+this.id+'').hasClass('navbar-collapse') ){
		$(document).find('[data-toggle="collapse"][data-target="#'+this.id+'"]').addClass('open');
		$(document).find('#'+this.id+'').slideDown(500);
	}
});

$('.collapse').on('hide.bs.collapse', function(e) {
	if( $('#'+this.id+'').hasClass('navbar-collapse') ){
		$(document).find('[data-toggle="collapse"][data-target="#'+this.id+'"]').removeClass('open');
		$(document).find('#'+this.id+'').slideUp(500);
	}
});
