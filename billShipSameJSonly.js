<script>
      const form = document.getElementById('order_form');
      const checkbox = form.querySelector('input[name="billShipSame"]');
      const container = form.querySelector('#billShipSameOptionalContainer');
      container.style.display = checkbox.checked ? 'none' : 'block';
      checkbox.addEventListener('change', function(event) {
        if (event.target.checked) {
          container.style.display = 'none';
        } else {
          container.style.display = 'block';
        }
      })
</script>
