# Google Maps Api jQuery 

### HTML Inputs 
```
<input type="text" name="city" id="fields_city" />
```

```
<select name="state" id="fields_state"></select>
```

```
<input type="tel" name="zip" class="zip-change" />
```

### call to API key
```
<script src="https://maps.googleapis.com/maps/api/js?key="></script>
```

### Full Script for Functionality

```
  <script type="text/javascript">
    $(function() {
      $('.zip-change').on('blur keyup', function() {
        var $this = $(this);
        if ($this.val().length == 5) {
          getAddressInfoByZip($this.val());
        }
      });
      $(".phn").keydown(function(e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode >= 35 && e.keyCode <= 40)) {
          return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
      });
    });

    function getAddressInfoByZip(zip) {
      if (zip.length >= 5 && typeof google != 'undefined') {
        var addr = {};
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'address': zip
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results.length >= 1) {
              for (var ii = 0; ii < results[0].address_components.length; ii++) {
                var street_number = route = street = city = state = zipcode = country = formatted_address = '';
                var types = results[0].address_components[ii].types.join(",");
                if (types == "street_number") {
                  addr.street_number = results[0].address_components[ii].long_name;
                }
                if (types == "route" || types == "point_of_interest,establishment") {
                  addr.route = results[0].address_components[ii].long_name;
                }
                if (types == "sublocality,political" || types == "locality,political" || types == "neighborhood,political" || types == "administrative_area_level_3,political") {
                  addr.city = (city == '' || types == "locality,political") ? results[0].address_components[ii].long_name : city;
                }
                if (types == "administrative_area_level_1,political") {
                  addr.state = results[0].address_components[ii].short_name;
                }
                if (types == "postal_code" || types == "postal_code_prefix,postal_code") {
                  addr.zipcode = results[0].address_components[ii].long_name;
                }
                if (types == "country,political") {
                  addr.country = results[0].address_components[ii].long_name;
                }
              }
              addr.success = true;
              for (name in addr) {}
              if (addr.country == 'United States') {
                var state = addr.state;
                var city = addr.city;
                $('#fields_state').find($('#fields_state').val(state)).attr('selected', 'selected');
                $('#fields_city').val(city);
                $('.zip-change').addClass('valid').removeClass('error');
              } else {
                $('#fields_state').find($('#fields_state').val('')).attr('selected', 'selected');
                $('.zip-change').addClass('error').removeClass('valid');
                $('#fields_city').val('');
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        });
      } else {
        return false;
      }
    }

    function response(obj) {}
  </script>
```

## Canadian Postal Codes Solution

```

<script src="https://maps.googleapis.com/maps/api/js?region=CA&components=country:CA&key={{gmaps-id}}&callback=Function.prototype"></script>
<script type="text/javascript">
  $(function() {
    $('.zip-change').on('blur keyup', function() {
      var $this = $(this);
      var val = $this.val();
      if (val.match(/^[\w\d]{3}$/)) {
        $this.val(val + ' ');
      }

      if ($this.val().length == 7) {
        getAddressInfoByZip($this.val())
      }
    });
  });

  function onError() {
    $('#fields_state').find($('#fields_state').val(''));
    $('.zip-change').addClass('error').removeClass('valid');
    $('#fields_city').val('');
  }

  function getAddressInfoByZip(zip) {
    if (zip.length >= 4 && typeof google != 'undefined') {
      var addr = {};
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'address': zip
      }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
          if (results.length >= 1) {
            for (var ii = 0; ii < results[0].address_components.length; ii++) {
              var street_number = route = street = city = state = zipcode = country = formatted_address = '';
              var types = results[0].address_components[ii].types;
              if (types.find(t => t == "street_number")) {
                addr.street_number = results[0].address_components[ii].long_name;
              } else if (types.find(t => t == "route" || t == "point_of_interest" || t == "establishment")) {
                addr.route = results[0].address_components[ii].long_name;
              } else if (
                types.find(t => {
                  return (
                    t == 'sublocality' ||
                    t == 'locality' ||
                    t == 'neighborhood' ||
                    t == 'administrative_area_level_3'
                  );
                })
              ) {
                addr.city = results[0].address_components[ii].long_name;
              } else if (types.find(t => t == "administrative_area_level_1")) {
                addr.state = results[0].address_components[ii].short_name;
              } else if (types.find(t => t == "postal_code" || t == "postal_code_prefix")) {
                addr.zipcode = results[0].address_components[ii].long_name;
              } else if (types.find(t => t == "country")) {
                addr.country = results[0].address_components[ii].long_name;
              }
            }
            addr.success = true;
            for (name in addr) {
              console.log('{{gmaps-id}}' + name + ': ' + addr[name]);
            }
            if (addr.country == 'Canada') {
              var state = addr.state;
              var city = addr.city;
              $('#fields_state').find($('#fields_state').val(state));
              $('#fields_city').find($('#fields_city').val(city));
              $('.zip-change').addClass('valid').removeClass('error');
              return true;
            } else {
              onError();
              return false;
            }
          } else {
            onError();
            return false;
          }
        } else {
          onError();
          return false;
        }
      });
    } else {
      return false;
    }
  }

  function response(obj) {}
</script> 
```
