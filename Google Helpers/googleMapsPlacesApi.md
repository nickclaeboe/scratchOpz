# Google Maps-Places Address Autofill

### How to set up address autofill/autocomplete on lead/order forms on sales funnels 

Google places api key link include and code to make it work. 

<aside>
💡 Be sure to update the document.querySelector()’s to the id’s on your form or set your form input id’s to the 3 below.

</aside>

<aside>
💡 Also, ‘country’ input must be showing for script to work correctly

</aside>

```jsx
<script async="" src="https://maps.googleapis.com/maps/api/js?key={{gmaps-id}}&libraries=places&callback=initAutocomplete&loading=async"></script>
<script>
  let autocomplete;
  let address1Field;
  let address2Field;
  let postalField;

  function initAutocomplete() {
    address1Field = document.querySelector("#fields_address1");
    address2Field = document.querySelector("#fields_address2");
    postalField = document.querySelector("#fields_zip");
    autocomplete = new google.maps.places.Autocomplete(address1Field, {
      componentRestrictions: {
        country: ["us", "ca"]
      },
      fields: ["address_components", "geometry"],
      types: ["address"],
    });
    address1Field.focus();
    autocomplete.addListener("place_changed", fillInAddress);
  }

  function fillInAddress() {
    const place = autocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }

        case "route": {
          address1 += component.short_name;
          break;
        }

        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }

        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality":
          document.querySelector("#fields_city").value = component.long_name;
          break;
        case "administrative_area_level_1": {
          document.querySelector("#fields_state").value = component.short_name;
          break;
        }
        case "country":
          document.querySelector("#fields_country_select").value = component.short_name;
          break;
      }
    }

    address1Field.value = address1;
    postalField.value = postcode;
    address2Field.focus();
  }

  window.initAutocomplete = initAutocomplete;
</script>
```

### Reference Links:

[https://developers.google.com/maps/documentation/javascript/place-autocomplete?authuser=1#javascript](https://developers.google.com/maps/documentation/javascript/place-autocomplete?authuser=1#javascript)

[https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform?authuser=1#maps_places_autocomplete_addressform-html](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform?authuser=1#maps_places_autocomplete_addressform-html)

[https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/places-autocomplete-addressform/jsfiddle](https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/places-autocomplete-addressform/jsfiddle)

# Autofill billing and shipping forms

```jsx
<script async="" src="https://maps.googleapis.com/maps/api/js?key={{gmaps-id}}&libraries=places&callback=initAutocomplete&loading=async"></script>
<script>
  let autocomplete;
  let address1Field;
  let address2Field;
  let postalField;
  let autocomplete2;
  let billaddress1Field;
  let billaddress2Field;
  let billpostalField;

  function initAutocomplete() {
    address1Field = document.querySelector("#fields_address1");
    address2Field = document.querySelector("#fields_address2");
    postalField = document.querySelector("#fields_zip");
    autocomplete = new google.maps.places.Autocomplete(address1Field, {
      componentRestrictions: {
        country: ["us", "ca"]
      },
      fields: ["address_components", "geometry"],
      types: ["address"],
    });
    address1Field.focus();
    autocomplete.addListener("place_changed", fillInAddress);

    billaddress1Field = document.querySelector("#billing_address1");
    billaddress2Field = document.querySelector("#billing_address2");
    billpostalField = document.querySelector("#billing_zip");
    autocomplete2 = new google.maps.places.Autocomplete(billaddress1Field, {
      componentRestrictions: {
        country: ["us", "ca"]
      },
      fields: ["address_components", "geometry"],
      types: ["address"],
    });
    billaddress1Field.focus();
    autocomplete2.addListener("place_changed", fillInAddress2);
  }

  function fillInAddress() {
    const place = autocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }

        case "route": {
          address1 += component.short_name;
          break;
        }

        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }

        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality":
          document.querySelector("#fields_city").value = component.long_name;
          break;
        case "administrative_area_level_1": {
          document.querySelector("#fields_state").value = component.short_name;
          break;
        }
        case "country":
          document.querySelector("#fields_country_select").value = component.short_name;
          break;
      }
    }

    address1Field.value = address1;
    postalField.value = postcode;
    address2Field.focus();
  }

  function fillInAddress2() {
    const place = autocomplete2.getPlace();
    let address1 = "";
    let postcode = "";
    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }

        case "route": {
          address1 += component.short_name;
          break;
        }

        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }

        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality":
          document.querySelector("#billing_city").value = component.long_name;
          break;
        case "administrative_area_level_1": {
          document.querySelector("#billing_state").value = component.short_name;
          break;
        }
        case "country":
          document.querySelector("#billing_country").value = component.short_name;
          break;
      }
    }

    billaddress1Field.value = address1;
    billpostalField.value = postcode;
    billaddress2Field.focus();
  }

  window.initAutocomplete = initAutocomplete; 
</script>
```
