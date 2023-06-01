 function createEvent(eventData) {
             
        var eventTemplate = [
                '<img src="../images/events/', eventData.Imgurl || '', ' " class="img-fluid eventFLyer d-none d-lg-block"><img src="../images/events/', eventData.Imgurlsq || '', ' " class="img-fluid eventFLyer d-block d-lg-none">',
                '<blockquote class="eventDate">', eventData.Date || '' ,'<br />',
                '<span class="eventTime">', eventData.Time || '' ,'</span></blockquote>',
                '<h2 class="eventArtist-content">', eventData.Artist || '' ,'</h2>',
                '<h3 class="eventDetail">', eventData.Detail || '' ,'</h3>',
                '<p class="lead eventDescription">', eventData.Description || '' ,'</p>',
                '<h4 class="mb-3 eventPrice">', eventData.Price || '' ,'</h4>',
                '<div class="row g-1 justify-content-start">',
                '<button class="btn btn-lg d-grid col-12 col-lg-6 btn-outline-danger eventBtn" id="eventbrite-widget-modal-trigger-<?php echo $eventId; ?>" type="button" onclick="', eventData.GtagCK || '' ,'">Get Tickets</button>',
                '<a class="btn btn-lg d-grid col-12 col-lg-6 btn-outline-warning" href="/contact.php" onclick="', eventData.GtagBT || '' ,'">Bottle Service</a>',
                '<a class="d-grid col-12 col-lg-4" href="', eventData.Link || '' ,'" target="_blank" onclick="', eventData.GtagEB || '' ,'"><span class="badge btn-outline-danger">EventBrite Event</span></a>',
                '<a class="d-grid col-12 col-lg-4" href="', eventData.FBevent || '' ,'" target="_blank" onclick="', eventData.GtagFBevent || '' ,'"><span class="badge btn-outline-primary">FB Event</span></a>',
                '<a class="d-grid col-12 col-lg-4" href="https://www.facebook.com/DistrictAtlanta/" target="_blank" onclick="', eventData.GtagFBPro || '' ,'"><span class="badge btn-outline-danger">District on FB</span></a></div>'
            ];

            // a jQuery node
            return $(eventTemplate.join(''));
            }

            var data = [
                {
                    "Imgurl": "<?php echo $flyerHZ; ?>",
                    "Imgurlsq": "<?php echo $flyerSQ; ?>",
                    "Date": "<?php echo $date; ?>",
                    "Time": "<?php echo $time; ?>",
                    "Artist": "<?php echo $artist; ?>",
                    "Detail": "<?php echo $detail; ?>",
                    "Description": "<?php echo $description; ?>",
                    "Price": "<?php echo $price; ?>",
                    "Link": "<?php echo $eventLink; ?>?aff=districtatlanta.com",
                    "FBevent": "<?php echo $fbEvent; ?>",
                    "GtagCK": "gtag('event','begin_checkout', {'eventPg_btn_name':'Buy Tickets, Initiate Checkout','page_name':'<?php echo $artist; ?>'});",
                    "GtagEB": "gtag('event','click', {'eventPg_btn_name':'EventBrite Event','page_name':'<?php echo $artist; ?>'});",
                    "GtagBT": "gtag('event','click', {'eventPg_btn_name':'Bottle Service','page_name':'<?php echo $artist; ?>'});",
                    "GtagFBevent": "gtag('event','click', {'eventPg_btn_name':'FB Event','page_name':'<?php echo $artist; ?>'});",
                    "GtagFBPro": "gtag('event','click', {'eventPg_btn_name':'FB Profile','page_name':'<?php echo $artist; ?>'});"
                },
            ];

            var events = $();
            // Store all the event nodes
            data.forEach(function(item, i) {
            events = events.add(createEvent(item));
            });

            // Add them to the page... for instance the <body>
            $(function() {
                $('.eventMain').html(events);
            });
