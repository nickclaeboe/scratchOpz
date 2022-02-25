[https://blog.duda.co/responsive-google-maps-for-your-website](sauce)

Working with google maps api from Google Console 

## EMBED A GOOGLE MAP USING JAVASCRIPT VIA GOOGLE MAPS APIS

Google Maps can be integrated into a website via APIs. In addition to HTML and CSS, knowledge of JavaScript is required.  Although our example is quite simple, the Google Maps platform provides complex features including drawing map markers, calculating distance and areas, displaying prominent points of interest, heatmaps, and more.  You can find more details in the Google Map libraries.

Create an API key
Go to the Google Cloud Platform Console
Select or create the project for which you want to add an API key
Select APIs & Services > Credentials
Click Create credentials > API Key

It’s important to restrict the API key before using it in production. Restrictions provide added security and help ensure that only authorized requests are made with your API key.

Add the scripts and API code
Add the map styling code to your page:

```
<style>
 #map {
    width: 100%;
    height: 400px;
    background-color: grey;
}
</style>
```

Add the map script that propagates the map element, and edit coordinates:

```
<script>
    function initMap() {
      var macc = {lat: 42.1382114, lng: -71.5212585};
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 15, center: macc});
      var marker = new google.maps.Marker({position: macc, map: map});
    }
 </script>
```

Add Google Maps' API script:

```
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
```

Now you have a responsive map created using Google Maps JavaScript API.

