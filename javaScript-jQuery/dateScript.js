<script language="Javascript">
<!-- 

// Array of day names
var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday");

// Array of month Names
var monthNames = new Array(
"January","February","March","April","May","June","July",
"August","September","October","November","December");

var now = new Date();
document.write(dayNames[now.getDay()] + ", " + 
monthNames[now.getMonth()] + " " + 
now.getDate() + ", " + now.getFullYear());

// -->
</script>


scrit with days added			

<script language="Javascript">
<!-- 

// Array of day names
var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday");

// Array of month Names
var monthNames = new Array(
"January","February","March","April","May","June","July",
"August","September","October","November","December");

var now = new Date();
document.write(dayNames[now.getDay()+4] + ", " + 
monthNames[now.getMonth()] + " " + 
[now.getDate()+4] + ", " + now.getFullYear());

// -->
</script>



RewriteCond %{HTTP:CF-Visitor} '"scheme":"http"'
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [L]

/////////// best date script 				

<script type="text/javascript">
function getDate(days) {  
var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");    
var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");    
var now = new Date();   
now.setDate(now.getDate() + days);   
var nowString =   monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();   
document.write(nowString);   
}   
</script>



<script type="text/javascript">getDate(0)</script>

////////////// get month 


get month

<script type="text/javascript">var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.write("" + monthNames[d.getMonth()]);</script>



/////// countdown timer 5 minutes

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


<div id="viewing">
<img class="eye" alt="eye" src="assets/img/eye.png">
<p>13 others are viewing this offer right now - <span id="time">0:00</span>
</p>
</div>
