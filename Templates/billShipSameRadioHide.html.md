# BillShipSame Radio Button Hide Div Script

### HTML Code Snippet
```
<div class="terms kform_checkbox">
    <div class="question">
        Billing same as shipping
        <br />
        <input type="radio" name="billShipSame" id="sameYes" value="1" checked>
        <label for="sameYes">Yes</label>
        <input type="radio" name="billShipSame" id="sameNo" value="0">
        <label for="sameNo">No</label>
    </div>
</div>
<div class="billing hidden" id='kform_hiddenAddress'>

    <div class="label left">Address:</div>
    <div class="input left">
        <input name='address1' type='TEXT' isRequired>
    </div>
    <div class="spacer clear"></div>
    <div class="label left">City:</div>
    <div class="input left">
        <input name='city' type='TEXT' isRequired>
    </div>
    <div class="spacer clear"></div>
    <div class="label left" id="billToStateLabel">State:</div>
    <div class="input left">
        <select name='state' isRequired>
            <option value=''>Select State</option>
        </select>

    </div>
</div>
```

### jQuery Code Snippet
```
<script>
    $(document).ready(function() {
        var MainForm = '#order_form'; 
        $('input[name="billShipSame"]', MainForm).change(function() {
            if ($('input[name="billShipSame"]:checked', MainForm).val() == '1') {
                $('.billing', MainForm).hide();
            } else {
                $('.billing', MainForm).removeClass('hidden');
                $('.billing', MainForm).fadeIn('fast');
            }
        }).trigger('change');
    });
</script> 
```
