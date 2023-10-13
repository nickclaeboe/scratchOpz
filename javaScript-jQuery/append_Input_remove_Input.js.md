```
<script type="text/javascript">
	$('.cross-sells-item__price-empty-checkmark').click(function(e) {
		var ADDProdID = $(this).closest('.cross-sells-item').attr('data-plan-id');
		$(this).closest('.cross-sells-item').toggleClass('active');
		$(this).closest('.cross-sells-item').find('.cross-sells-item__price h4').html('Click To Remove');
		$('#order_form').append('<input type="hidden" name="product[]" class="prodAdd" value="' + ADDProdID + '">');
	});
	$('.cross-sells-item__price-checkmark').click(function(e) {
		var ADDProdID = $(this).closest('.cross-sells-item').attr('data-plan-id');
		$(this).closest('.cross-sells-item').toggleClass('active');
		$(this).closest('.cross-sells-item').find('.cross-sells-item__price h4').html('Click To Add');
		$('input[name="product[]"]').filter(function() {
			return this.value == ADDProdID;
		}).remove();
	});
</script>
```

StackOverflow Helper: [https://stackoverflow.com/questions/6732364/jquery-find-elements-with-value-x]

