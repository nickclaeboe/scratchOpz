  <button type="button" class="btn btn-danger noFomo position-fixed start-0 bottom-0 mb-3 ms-3" data-bs-toggle="modal" data-bs-target="#peerModal">
        NO FOMO
    </button>

     <?php include('peerPop-modal.php'); ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.0/jquery.cookie.min.js"></script>
    <script>
        // Delayed Modal Display + Cookie On Click
        $(document).ready(function() {

            var myModal = new bootstrap.Modal(document.getElementById('peerModal'), {});

            // If no cookie with our chosen name (e.g. no_thanks)...
            if ($.cookie("no_thanks") == null) {

                // Show the modal, with delay func. 

                function show_modal() {
                    myModal.show();
                }
                // myModal.show();
                // Set delay func. time in milliseconds
                window.setTimeout(show_modal, 3000);
            } else {
                $('.noFomo').slideToggle();
            }

            // On click of specified class (e.g. 'nothanks'), trigger cookie, which expires in 100 years
            $(".nothanks").click(function() {
                $.cookie('no_thanks', 'true', {
                    expires: 7,
                    path: '/'
                });
            });
        });

        $('body').on('hidden.bs.modal', '#peerModal', function() {
            //this call your method
            $('.noFomo').slideToggle();
        });
        $('.noFomo').click(function(){
            $(this).slideToggle();
        })
    </script>
    <style>
        body {
            padding-right: 0px !important;
            margin-right: 0px !important;
        }

        body.modal-open {
            overflow: auto;
        }

        .noFomo {
            display: none;
        }
    </style>

            <div class='modal fade' id='peerModal' tabindex="-1" aria-labelledby="peerModalLabel" aria-hidden="true">
            <div class='modal-dialog modal-dialog-centered'>
                <div class='modal-content bg-black position-relative'>
                    <button type="button" class="close text-white position-absolute top-0 end-0 nothanks mt-1 me-2" data-bs-dismiss="modal" aria-hidden="true">×</button>
                    <div class="row g-0 align-items-center justify-content-center">
                        <div class="col-12 col-md-5 overflow-hidden text-center">
                            <img src="/images/peerPopImg.jpg" class="d-none d-md-block" />
                            <img src="/images/peerPopImgMob.jpg" class="d-block d-md-none img-fluid" />
                        </div>
                        
                        <div class="col-12 col-md-7 text-center p-3 position-relative">
                            <h1 class="text-uppercase text-white mb-0">No Fomo!</h1>
                            <p class="lh-sm text-white">Join our VIP text list and get updated first about new parties, events and DJ's at District Atlanta Nightclub!</p>
                        <form class="row form-dark" id="signupPeerPop">
                                <div class="col text-center">
                                    <input type="tel" value="" name="phone" maxlength="10" onkeyup="this.value=this.value.replace(/[^\d]/,'')" id="phoneNumber" class="required phone form-control form-control-lg mb-3" placeholder="Mobile Number" autocomplete="phone">
                                    <div class="clear"></div>
                                    <p class="small lh-sm mb-3">By submitting this form, you agree to receive automated promotional messages. Consent is not a condition of purchase. Message frequency varies. Reply <span class="fw-bold text-uppercase">Stop</span> top opt out or <span class="fw-bold text-uppercase">Help</span> for help. Message & data rates apply. Terms and privacy policy <a href="#">found here.</a> </p>
                                    <button type="button" value="Subscribe" name="peer_subscribe" id="sendButton" class="button btn-lg btn-danger d-grid col-12 nothanks fs-5 text-uppercase">Join Now</button>
                                </div>
                                <div id="message"></div>
                                <div class="clearfix"></div>
                                
                                <p data-bs-dismiss="modal" aria-hidden="true" class="text-secondary nothanks text-uppercase small">No Thanks</p>
                            </form>
                        </div>
                    </div>
                    
                    
                    
                </div>
                <!-- / modal-content -->
          </div>
          <!--/ modal-dialog -->
        </div>

                             
