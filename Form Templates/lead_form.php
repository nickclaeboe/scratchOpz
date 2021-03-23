<form id="order_form" method="POST" action="">
   <div class="form-group"><label for="firstName">First Name</label><input type="text" name="firstName" id="fName" required="" class="form-control"/></div>
   <div class="form-group"><label for="lastName">Last Name</label><input type="text" name="lastName" id="lName" required="" class="form-control"/></div>
   <div class="form-group"><label for="address1">Street Address</label><input type="text" name="address1" id="address1" required="" class="form-control"/></div>
   <div class="form-group"><label for="city">City</label><input type="text" name="city" id="city" required="" class="form-control"/></div>
   <div class="form-group">
      <label for="state">State</label>
      <select name="state" id="state" required="" class="form-control">
         <option value="">- -Select a State --</option>
         <option value="AL">Alabama (AL)</option>
         <option value="AK">Alaska (AK)</option> 
         <option value="AZ">Arizona (AZ)</option>
         <option value="AR">Arkansas (AR)</option>
         <option value="CA">California (CA)</option>
         <option value="CO">Colorado (CO)</option>
         <option value="CT">Connecticut (CT)</option>
         <option value="DE">Delaware (DE)</option>
         <option value="DC">District of Columbia (DC)</option>
         <option value="FL">Florida (FL)</option>
         <option value="GA">Georgia (GA)</option>
         <option value="HI">Hawaii (HI)</option>
         <option value="ID">Idaho (ID)</option>
         <option value="IL">Illinois (IL)</option>
         <option value="IN">Indiana (IN)</option>
         <option value="IA">Iowa (IA)</option>
         <option value="KS">Kansas (KS)</option>
         <option value="KY">Kentucky (KY)</option>
         <option value="LA">Louisiana (LA)</option>
         <option value="ME">Maine (ME)</option>
         <option value="MD">Maryland (MD)</option>
         <option value="MA">Massachusetts (MA)</option>
         <option value="MI">Michigan (MI)</option>
         <option value="MN">Minnesota (MN)</option>
         <option value="MS">Mississippi (MS)</option>
         <option value="MO">Missouri (MO)</option>
         <option value="MT">Montana (MT)</option>
         <option value="NE">Nebraska (NE)</option>
         <option value="NV">Nevada (NV)</option>
         <option value="NH">New Hampshire (NH)</option>
         <option value="NJ">New Jersey (NJ)</option>
         <option value="NM">New Mexico (NM)</option>
         <option value="NY">New York (NY)</option>
         <option value="NC">North Carolina (NC)</option>
         <option value="ND">North Dakota (ND)</option>
         <option value="OH">Ohio (OH)</option>
         <option value="OK">Oklahoma (OK)</option>
         <option value="OR">Oregon (OR)</option>
         <option value="PA">Pennsylvania (PA)</option> 
         <option value="RI">Rhode Island (RI)</option>
         <option value="SC">South Carolina (SC)</option>
         <option value="SD">South Dakota (SD)</option>
         <option value="TN">Tennessee (TN)</option>
         <option value="TX">Texas (TX)</option>
         <option value="UT">Utah (UT)</option>
         <option value="VT">Vermont (VT)</option> 
         <option value="VA">Virginia (VA)</option>
         <option value="WA">Washington (WA)</option>
         <option value="WV">West Virginia (WV)</option>
         <option value="WI">Wisconsin (WI)</option>
         <option value="WY">Wyoming (WY)</option>
      </select>
   </div>
   <div class="form-group"><label for="zip">Zip Code</label><input type="tel" name="zip" id="zip" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="5" required="" class="form-control"/></div>
   <div class="form-group"><label for="phone">Phone Number</label><input type="tel" name="phone" id="phone" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="10" required="" class="form-control"/></div>
   <div class="form-group"><label for="email">Email Address</label><input type="email" name="email" id="email" required="" class="form-control"/></div>
   <input type="submit" class="btn btn-primary" value="Order Now">
</form>
