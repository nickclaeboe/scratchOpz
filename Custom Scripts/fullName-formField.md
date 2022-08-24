# Use "Full Name" for a form field

We cannot submit a single form field for a name - it has to be two fields, `firstName`, and `lastName`.

If a lead form needs to have a single name field, follow these steps.

1. Make `firstName` and `lastName` fields be hidden fields.

2. Add a `fullName` form field

3. Use javascript to process the value of the `fullName` field into `firstName` and `lastName`

Example Code:



```

	<input type="hidden" placeholder="First Name" id="firstName" name="firstName" value="" required="" class="form-control"/>
	<input type="hidden" placeholder="Last Name" id="lastName" name="lastName" value="" required="" class="form-control"/>
	<input type="text" placeholder="Full Name" id="fullName" name="fullName" value="" required="" class="form-control"/>

	....

	<script>
		$(function() {
			$('#fullName').blur(function(e) {
				var val = e.target.value;
				var names = val.split(' ', 2);

				$('[name=firstName]').val(names[0] || '');
				$('[name=lastName]').val(names[1] || '');
			});
		});
	</script>

```

## verifying Your Work

To confirm successful implementation, ensure you only see one form field on your lead form. Test the flow using a full name. If done correctly, the flow should complete with the correct first and last name on the order.

Giving one name for the fullName field (ie: a value with no space), should result in a form error.
