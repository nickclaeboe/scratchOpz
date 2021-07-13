/////////////////////// countdown to 100 with animation on index form top below/////////////////////////

<script> 
 
 // var counter = 599;
      var one        = 0;
      var ten        = 0;
      var hundered   = 6;
      var intervalId = setInterval(function(){
                        time();
                      }, .7);

      function time(){
         one--;

           if(one == -1){
              ten = ten - 1;
              one = 0 + 9;
            } 
            if(ten == -1 ){
              hundered = hundered - 1;
              ten = 0 + 9;
            }
            var wholeNum = hundered+''+ten+''+one;
            if(wholeNum == 100){
              clearInterval(intervalId);
            }

         $('.timer').html('<span>'+hundered+'</span><span>'+ten+'</span><span>'+one+'</span>');

      }
      
      var min    = 0;
      var second = 00;
      var zeroPlaceholder = 0;
      var counterId = setInterval(function(){
                        countUp();
                      }, 1000);

      function countUp () {
          second++;
          if(second == 59){
            second = 00;
            min = min + 1;
          }
          if(second == 10){
              zeroPlaceholder = '';
          }else
          if(second == 00){
              zeroPlaceholder = 0;
          }

          $('.count-up').html(min+':'+zeroPlaceholder+second);
      }

      var minute = 4;
      var sec = 59;
      var zeroPlaceholders = 0;
      var countersId = setInterval(function(){
                        countDown();
                      }, 1000);

      function countDown () {
          if(!minute == 0){
            sec--;
            if(sec == 00){
              sec = 59;
              minute = minute - 1;
            }
            if(sec < 10){
                zeroPlaceholders = 0;
            }else
            if(sec > 10){
                zeroPlaceholders = '';
            }

          }else{
            minute = 0;
            sec    = 00;
          }
          $('.count-down').html(minute+':'+zeroPlaceholders+sec);
      }</script>
	  
	  /*   use html below on page   */
	  
	  <div class="timer"><span>1</span><span>0</span><span>0</span> </div>

							
					
/////////////////////////////// countUp starting from 00:00 on checkout pages /////////////////////////////////////////////



<script>
	    $.fn.downCount = function (options, callback) {
        var settings = $.extend({
                date: null,
                offset: null
            }, options);

        // Save container
        var container = this;

        /**
         * Change client's local date to match offset timezone
         * @return {Object} Fixed Date object.
         */
        var currentDate = function () {
            // get client's current date
            var date = new Date();

            // turn date to utc
            var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

            // set new Date object
            var new_date = new Date(utc + (3600000*settings.offset))

            return new_date;
        };

        /**
         * Main downCount function that calculates everything
         */
var original_date = currentDate();
var target_date = new Date('12/31/2020 12:00:00'); // Count up to this date

function onButtonClick() {
    original_date = currentDate();
}

function countdown () {
        var current_date = currentDate(); // get fixed current date

        // difference of dates
        var difference = current_date - original_date;

        if (current_date >= target_date) {
            // stop timer
            clearInterval(interval);

            if (callback && typeof callback === 'function') callback();

            return;
        }

        // basic math variables
        var _second = 1000,
            _minute = _second * 60,
            _hour = _minute * 60,
            _day = _hour * 24;

        // calculate dates
        var days = Math.floor(difference / _day),
            hours = Math.floor((difference % _day) / _hour),
            minutes = Math.floor((difference % _hour) / _minute),
            seconds = Math.floor((difference % _minute) / _second);

            // fix dates so that it will show two digets
            days = (String(days).length >= 2) ? days : '0' + days;
            hours = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;
    
            // based on the date change the refrence wording
            var ref_days = (days === 1) ? 'day' : 'days',
                ref_hours = (hours === 1) ? 'hour' : 'hours',
                ref_minutes = (minutes === 1) ? 'minute' : 'minutes',
                ref_seconds = (seconds === 1) ? 'second' : 'seconds';

            // set to DOM
            container.find('.days').text(days);
            container.find('.hours').text(hours);
            container.find('.minutes').text(minutes);
            container.find('.seconds').text(seconds);

            container.find('.days_ref').text(ref_days);
            container.find('.hours_ref').text(ref_hours);
            container.find('.minutes_ref').text(ref_minutes);
            container.find('.seconds_ref').text(ref_seconds);
        };
        
        // start
        var interval = setInterval(countdown, 1000);
    };





$(document).ready(function(){
   $('.countdown').downCount();
});


</script>

user below on html of page : 

<span class="countdown bl" id="time"><span class="minutes">00</span>:<span class="seconds">00</span></span>




//////////////////////////////////////////////////// countDown from 5:00 on checkout page ////////////////////////////////////////////

			<script>
				function startTimer(duration, display) {
					var timer = duration,
					minutes, seconds;
					setInterval(function() {
						minutes = parseInt(timer / 60, 10);
						seconds = parseInt(timer % 60, 10);
						minutes = minutes < 10 ? "0" + minutes : minutes;
						seconds = seconds < 10 ? "0" + seconds : seconds;
						display.textContent = minutes + ":" + seconds;
						if (--timer < 0) {
							timer = duration;
						}
					}, 1000);
				}
				window.onload = function() {
					var fiveMinutes = 60 * 5,
					display = document.querySelector('#time');
					startTimer(fiveMinutes, display);
				};
			</script>
			
			use below on html of page 
			
			
			<span class="count-up bl" id="time">0:00</span>
			
			
////////////////////////// random 2 digit number for checkout page ///////////////////////////////


<?php echo rand(3, 23); ?> others are viewing this offer 



<!-------------------------------------TRUE countdown TIMER ----------->


			<script>
				
				
				function countdown() {
					
					let hours = document.getElementsByClassName('hours')[0];
					let minutes = document.getElementsByClassName('minutes')[0];
					let seconds = document.getElementsByClassName('seconds')[0];
					
					if (parseInt(hours.innerHTML) == 0 && parseInt(minutes.innerHTML) == 0 && parseInt(seconds.innerHTML) == 0) {
						return;
					}
					
					if (parseInt(seconds.innerHTML) >= 1) {
						let buffer = (parseInt(seconds.innerHTML) - 1).toString();
						buffer.length < 2 ? seconds.innerHTML = '0' + buffer : seconds.innerHTML = buffer;
					} else if (parseInt(seconds.innerHTML) == 0) {
						seconds.innerHTML = '59';
						if (parseInt(minutes.innerHTML) >= 1) {
							let buffer = (parseInt(minutes.innerHTML) - 1).toString();
							buffer.length < 2 ? minutes.innerHTML = '0' + buffer : minutes.innerHTML = buffer;
						} else if (parseInt(minutes.innerHTML) == 0) {
							minutes.innerHTML = '59';
							if (parseInt(hours.innerHTML) >= 1) {
								hours.innerHTML = '00';
							}
						}
					}
					
					setTimeout(countdown, 1000);
				}
				
				$(document).ready(function(){
					countdown(); 
				});
				
			</script>
			
			
			
			user below on html of page : 
			
		<span class="countdown bl" id="time"><span class="minutes">00</span>:<span class="seconds">00</span></span>
		
		
		<!-------------------------------------TRUE countdown TIMER ----------->
