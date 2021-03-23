# Form Templates

The following snippets are provided to give quick access to standard form elements when building a landing page from scratch on the fly.

### All of our default forms utilize Bootstrap

- [Forms Docs](https://getbootstrap.com/docs/4.5/components/forms/)

- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

 
```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```
``` 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
```

## Lead Form `with <label>'s no placeholders`

> This first example is our default, basic lead form on most of our index/lead landing pages.

```
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
```
## Lead Form `Placeholders no <label>'s`
```
<form id="order_form" method="POST" action="">
   <div class="form-group"><input type="text" name="firstName" id="firstName" required="" placeholder="First Name" class="form-control"/></div>
   <div class="form-group"><input type="text" name="lastName" id="lastName" required="" placeholder="Last Name" class="form-control"/></div>
   <div class="form-group"><input type="text" name="address1" id="address1" required="" placeholder="Street Address" class="form-control"/></div>
   <div class="form-group"><input type="text" name="city" id="city" required="" placeholder="City" class="form-control"/></div>
   <div class="form-group"> 
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
   <div class="form-group"><input type="tel" name="zip" id="zip" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="5" required="" placeholder="Zip Code" class="form-control"/></div>
   <div class="form-group"><input type="tel" name="phone" id="phone" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="10" required="" placeholder="Phone Number" class="form-control"/></div>
   <div class="form-group"><input type="email" name="email" id="email" required="" placeholder="Email Address" class="form-control"/></div>
   <input type="submit" class="btn btn-primary" value="Order Now">
</form>

```

## Import Order Form

```
<form id="order_form" method="POST" action="">
   <div class="row innerFormWrap text-center"> 
      <div class="col col-12">
         <div class="form-group"><input type="tel" placeholder="Credit Card Number" name="cardNumber" id="creditCard" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="16" required="" class="form-control"/><input type="tel" placeholder="CVV" name="cardSecurityCode" id="creditCard-2" onkeyup="this.value=this.value.replace(/[^\d]/,'')" maxlength="4" required="" class="form-control"/></div>
         <div class="clearfix"></div>
      </div>
      <div class="col col-12">
         <div class="row">
            <div class="col">
               <div class="form-group">
                  <select name="cardMonth" required="" class="form-control">
                     <option value="">Card Month</option>
                     <option value="01">01 January</option>
                     <option value="02">02 February</option>
                     <option value="03">03 March</option>
                     <option value="04">04 April</option>
                     <option value="05">05 May</option>
                     <option value="06">06 June</option>
                     <option value="07">07 July</option>
                     <option value="08">08 August</option>
                     <option value="09">09 September</option>
                     <option value="10">10 October</option>
                     <option value="11">11 November</option>
                     <option value="12">12 December</option>
                  </select>
               </div>
            </div>
            <div class="col">
               <div class="form-group">
                  <select name="cardYear" required="" class="form-control">
                     <option value="">Card Year</option>
                     <option value="2021">2021</option>
                     <option value="2022">2022</option>
                     <option value="2023">2023</option>
                     <option value="2024">2024</option>
                     <option value="2025">2025</option>
                     <option value="2026">2026</option>
                     <option value="2027">2027</option>
                     <option value="2028">2028</option>
                     <option value="2029">2029</option>
                     <option value="2030">2030</option>
                  </select>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="submitWrap text-center"><input type="submit" value="NEXT" class="btn btn-primary checkBtn"/></div>
</form>
```

# Resources

Card Month

```
   ::Card Month
01::01
02::02
03::03
04::04
05::05
06::06
07::07
08::08
09::09
10::10
11::11
12::12
```

Card Month

```
   ::Card Month 
01::01 January
02::02 February
03::03 March
04::04 April
05::05 May
06::06 June
07::07 July
08::08 August
09::09 September
10::10 October
11::11 November
12::12 December
```

Card Year

```
   ::Card Year 
2021::2021
2022::2022
2023::2023
2024::2024
2025::2025
2026::2026
2027::2027
2028::2028
2029::2029
2030::2030
```
