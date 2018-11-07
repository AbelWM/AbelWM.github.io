$(function(){
    console.log('jquery started');
    
    $( '#videos a' ).click(function(e){
        // stop the link from making the browser
        // navigate to another page
        e.preventDefault();
        console.log( 'a video thumbnail was clicked.' );
        
        // 1) get the video URL out of the href of the link
        var url = $( this ).attr( 'href' );
        
        // 2) split the URL by the 'v=' in it
        // 3) the URL is in two parts, the second part is the video code
        var videoCode = url.split( 'v=' )[ 1 ] ;
        
        // 4) insert the video code into the youtube embed code
        $( '#youtube' ).attr( 'src', 'https://www.youtube.com/embed/'
                             + videoCode +
                             '?rel=0&amp;showinfo=0;autoplay=1' );
    });
	
	$(window).load(function() {
        $('.flexslider').flexslider();
	   itemWidth: 10;	
  });

});
    
    