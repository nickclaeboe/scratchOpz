 
# SOCIAL PROOF WIDGET / PLUGIN jQuery Javascript 
## FOMO Popup Widget Snippet
  
### HTML Code Snippet
```
  <div id="i45z03" class="custom-social-proof">
  <div class="custom-notification">
    <div class="custom-notification-container">
      <div class="custom-notification-image-wrapper"><img src="https://cdn.subscribefunnels.com/ad7b7df4-a28a-4204-9ce6-7bf6b65c2a88/Xketo.png" /></div>
      <div class="custom-notification-content-wrapper">
        <p class="custom-notification-content"><span id="notify-customer">Mateo J</span>. - <span id="notify-state">ID</span><br />
          Purchased <strong><span id="notify-quantity">5</span></strong> Bottle<span id="notify-multiple">s</span> of {{bandName}}<br /><small><span id="notify-ago">47 minutes ago</span></small></p>
      </div>
    </div>
    <div class="custom-close"></div>
  </div>
</div>
```

### Javascript Code Snippet
```
  <script type="text/javascript">

// ------------------------------ Social Proof Notifications
$(document).ready(function () {
    var customerFirst = ['Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Logan', 'Sophia', 'Benjamin', 'Mia', 'Mason', 'Charlotte', 'Elijah', 'Amelia', 'Oliver', 'Evelyn', 'Jacob', 'Abigail', 'Lucas', 'Harper', 'Michael', 'Emily', 'Alexander', 'Elizabeth', 'Ethan', 'Avery', 'Daniel', 'Sofia', 'Matthew', 'Ella', 'Aiden', 'Madison', 'Henry', 'Scarlett', 'Joseph', 'Victoria', 'Jackson', 'Aria', 'Samuel', 'Grace', 'Sebastian', 'Chloe', 'David', 'Camila', 'Carter', 'Penelope', 'Wyatt', 'Riley', 'Jayden', 'Layla', 'John', 'Lillian', 'Owen', 'Nora', 'Dylan', 'Zoey', 'Luke', 'Mila', 'Gabriel', 'Aubrey', 'Anthony', 'Hannah', 'Isaac', 'Lily', 'Grayson', 'Addison', 'Jack', 'Eleanor', 'Julian', 'Natalie', 'Levi', 'Luna', 'Christopher', 'Savannah', 'Joshua', 'Brooklyn', 'Andrew', 'Leah', 'Lincoln', 'Zoe', 'Mateo', 'Stella', 'Ryan', 'Hazel', 'Jaxon', 'Ellie', 'Nathan', 'Paisley', 'Aaron', 'Audrey', 'Isaiah', 'Skylar', 'Thomas', 'Violet', 'Charles', 'Claire', 'Caleb', 'Bella', 'Josiah', 'Aurora', 'Christian', 'Lucy', 'Hunter', 'Anna', 'Eli', 'Samantha', 'Jonathan', 'Caroline', 'Connor', 'Genesis', 'Landon', 'Aaliyah', 'Adrian', 'Kennedy', 'Asher', 'Kinsley', 'Cameron', 'Allison', 'Leo', 'Maya', 'Theodore', 'Sarah', 'Jeremiah', 'Madelyn', 'Hudson', 'Adeline', 'Robert', 'Alexa', 'Easton', 'Ariana', 'Nolan', 'Elena', 'Nicholas', 'Gabriella', 'Ezra', 'Naomi', 'Colton', 'Alice', 'Angel', 'Sadie', 'Brayden', 'Hailey', 'Jordan', 'Eva', 'Dominic', 'Emilia', 'Austin', 'Autumn', 'Ian', 'Quinn', 'Adam', 'Nevaeh', 'Elias', 'Piper', 'Jaxson', 'Ruby', 'Greyson', 'Serenity', 'Jose', 'Willow', 'Ezekiel', 'Everly', 'Carson', 'Cora', 'Evan', 'Kaylee', 'Maverick', 'Lydia', 'Bryson', 'Aubree', 'Jace', 'Arianna', 'Cooper', 'Eliana', 'Xavier', 'Peyton', 'Parker', 'Melanie', 'Roman', 'Gianna', 'Jason', 'Isabelle', 'Santiago', 'Julia', 'Chase', 'Valentina', 'Sawyer', 'Nova', 'Gavin', 'Clara', 'Leonardo', 'Vivian', 'Kayden', 'Reagan', 'Ayden', 'Mackenzie', 'Jameson', 'Madeline', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elijah', 'Oliver', 'Jacob', 'Lucas', 'Michael', 'Alexander', 'Ethan', 'Daniel', 'Matthew', 'Aiden', 'Henry', 'Joseph', 'Jackson', 'Samuel', 'Sebastian', 'David', 'Carter', 'Wyatt', 'Jayden', 'John', 'Owen', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Isaac', 'Grayson', 'Jack', 'Julian', 'Levi', 'Christopher', 'Joshua', 'Andrew', 'Lincoln', 'Mateo', 'Ryan', 'Jaxon', 'Nathan', 'Aaron', 'Isaiah', 'Thomas', 'Charles', 'Caleb', 'Josiah', 'Christian', 'Hunter', 'Eli', 'Jonathan', 'Connor', 'Landon', 'Adrian', 'Asher', 'Cameron', 'Leo', 'Theodore', 'Jeremiah', 'Hudson', 'Robert', 'Easton', 'Nolan', 'Nicholas', 'Ezra', 'Colton', 'Angel', 'Brayden', 'Jordan', 'Dominic', 'Austin', 'Ian', 'Adam', 'Elias', 'Jaxson', 'Greyson', 'Jose', 'Ezekiel', 'Carson', 'Evan', 'Maverick', 'Bryson', 'Jace', 'Cooper', 'Xavier', 'Parker', 'Roman', 'Jason', 'Santiago', 'Chase', 'Sawyer', 'Gavin', 'Leonardo', 'Kayden', 'Ayden', 'Jameson', 'Kevin', 'Bentley', 'Zachary', 'Everett', 'Axel', 'Tyler', 'Micah', 'Vincent', 'Weston', 'Miles', 'Wesley', 'Nathaniel', 'Harrison', 'Brandon', 'Cole', 'Declan', 'Luis', 'Braxton', 'Damian', 'Silas', 'Tristan', 'Ryder', 'Bennett', 'George', 'Emmett', 'Justin', 'Kai', 'Max', 'Diego', 'Luca', 'Ryker', 'Carlos', 'Maxwell', 'Kingston', 'Ivan', 'Maddox', 'Juan', 'Ashton', 'Jayce', 'Rowan', 'Kaiden', 'Giovanni', 'Eric', 'Jesus', 'Calvin', 'Abel', 'King', 'Camden', 'Amir', 'Blake', 'Alex', 'Brody', 'Malachi', 'Emmanuel', 'Jonah', 'Beau', 'Jude', 'Antonio', 'Alan', 'Elliott', 'Elliot', 'Waylon', 'Xander', 'Timothy', 'Victor', 'Bryce', 'Finn', 'Brantley', 'Edward', 'Abraham', 'Patrick'];

    var customerLast = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var customerStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    var customerProvincesUK = ['ABE','ABD','ANS','ANT','ARD','ARM','BLA','BLY','BNB','BDG','BNE','BNS','BAS','BDF','BFS','BEX','BIR','BIR','BPL','BGW','BOL','BMH','BRC','BRD','BEN','BGE','BNH','BST','BRY','BUC','BKM','BUR','CLD','CAM','CMD','CRF','CMN','CKF','CSR','CGN','CHS','CHE','CLK','CLR','CWY','CKT','CON','COV','CGV','CRY','CMA','DAL','DEN','DER','DBY','DRY','DEV','DNC','DOR','DOW','DGY','DND','DGN','DUR','EAL','EAY','EDU','ELN','ERW','ERY','ESX','EDH','ELS','ENF','ESS','FAL','FER','FIF','GAT','GLG','GLS','GRE','GWN','HCK','HAL','HMF','HAM','HRY','HRW','HPL','HAV','HEF','HRT','HLD','HIL','HNS','IVC','AGY','IOW','IOS','ISL','KEN','KTT','KIR','KWL','LBH','LAN','LRN','LDS','LCE','LEC','LEW','LMV','LIN','LSB','LIV','LND','LUT','MFT','MAN','MDW','MTY','MRT','MDB','MLN','MIK','MON','MRY','MYL','NTL','NET','NWM','NWP','NYM','NTA','NFK','NAY','NDN','NEL','NLK','NLN','NSM','NTY','NYK','NTH','NBL','NGM','NTT','OLD','OMH','ORK','OXF','PEM','PKN','PTE','PLY','POL','POR','POW','RDG','RDB','RCC','RFW','RCT','RIC','RCH','ROT','RUT','SLF','SAW','SCB','SFT','SHF','ZET','SHR','SLG','SOL','SOM','SAY','SGC','SLK','STY','STH','SOS','SWK','SHN','STS','STG','SKP','STT','STE','STB','SFK','SND','SRY','STN','SWA','SWD','TAM','TFW','THR','TOB','TOF','TWH','TRF','VGL','WKF','WLL','WFT','WND','WRT','WAR','WBK','WDU','WLN','WSX','WSM','WGN','WIL','WNM','WRL','WOK','WLV','WOR','WRX','YOR'];

    var customerQuantities = ['1', '3', '5', '7'];

    function hideSocial() {
        clearInterval(window.socialInterval);
    }

    function updateSocial() {
        var rCustomerFirst = customerFirst[Math.floor(Math.random() * customerFirst.length)];
        var rCustomerLast = customerLast[Math.floor(Math.random() * customerLast.length)];
        var rStates = customerStates[Math.floor(Math.random() * customerStates.length)];
        var rProvincesUK = customerProvincesUK[Math.floor(Math.random() * customerProvincesUK.length)];
        var rQuantities = customerQuantities[Math.floor(Math.random() * customerQuantities.length)];
        var rAgo = Math.floor(Math.random() * 59) + 1;

        $('#notify-customer').html(rCustomerFirst + ' ' + rCustomerLast);
        $('#notify-state').html(rStates);
        $('#notify-provincesuk').html(rProvincesUK);
        $('#notify-quantity').html(rQuantities);
        $('#notify-ago').html(rAgo + ' minutes ago');
        if (rQuantities > 1) {
            $('#notify-multiple').html('s');
        } else {
            $('#notify-multiple').html('');
        }
    }

    var socialStart = 2000;
    var socialVisible = 4000;
    var socialHidden = 10000;

    function showSocial() {
        $(".custom-social-proof").stop().slideToggle('slow', function () {
            if ($('.custom-social-proof').css('display') == 'none') {
                updateSocial();
            };
        });
        setTimeout(function () {
            if (!$(".custom-social-proof").hasClass('disabled')) {
                $(".custom-social-proof").slideToggle('slow', function () {
                    updateSocial();
                });
            };
        }, socialVisible);
    }

    $(".custom-close").click(function () {
        $(".custom-social-proof").stop().slideToggle('slow');
        $(".custom-social-proof").addClass('disabled');
        hideSocial();
    });

    updateSocial();

    setTimeout(function () {
        showSocial();
        window.socialInterval = setInterval(showSocial, socialHidden);
    }, socialStart);

});
</script>
```

