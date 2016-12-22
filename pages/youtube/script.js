/*
 * GET https://www.googleapis.com/youtube/v3/videos?part=snippet&id=qxHQj6rrj_w&key={YOUR_API_KEY}
 * GET https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCSHsEkDUQO6r9yNrmLXqD3g&key={YOUR_API_KEY}
 */

createGuid = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + s4();
};


Date_toYMD = function() {
    var year, month, day;
    year = String(this.getFullYear());
    month = String(this.getMonth() + 1);
    if (month.length == 1) {
        month = '0' + month;
    }
    day = String(this.getDate());
    if (day.length == 1) {
        day = '0' + day;
    }
    return year  + month + day;
}
Date.prototype.toYMD = Date_toYMD;


displayError = function(text) {
	$('#error-msg').html(text);
	$('#error-msg').removeClass('hide');
}

hideError = function() {
	$('#error-msg').addClass('hide');
}


$(document).ready(function() {

	$('#get-video-info-button').click(function(event) {
		hideError();
		event.preventDefault();
		var videoId = $('#input-video-id').val();
		var title = $('#input-post-title').val();
		
		if(title) {
			displayError('Title is not empty !');
			return;
		}
		
		if(videoId) {
			//var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' +  apikey;
			var url = 'http://localhost:4000/pages/youtube/sample-video.json';
			
			$.getJSON(url, function(data) {
				var title = data['items'][0].snippet.title;
				$('#input-post-title').val(title);
				
				var guid = createGuid();
				$('#input-post-guid').val(guid);
				
				var permalinkDate = new Date().toYMD();
				var uri = title.toLowerCase().replace(/ /g,'-');
				$('#input-post-permalink').val(permalinkDate + '-' + uri + '-' + guid + '.md');
			})
			.fail(function( jqxhr, textStatus, error ) {
				var err = textStatus + ', ' + error;
				displayError('Request Failed: ' + err );
			});
		}
		else {
			displayError('Video Id is empty !');
		}
	});

});	
	
	
	
	
	
	
	
	
	
	
	
	
