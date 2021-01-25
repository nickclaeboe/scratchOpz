 
// if yall wanna force numeric fields to only accept numbers, heres a script for that 

<script type="text/javascript">

document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll('[type=tel]');
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function (e) {
            this.value = this.value.replace(/\D/g, '');
        })
    }
});
</script> 

// here is whaat we use on non-US sites (where zips have alphas and spaces 

<script type="text/javascript">
(function () {
    var includeZipFields = false;
    document.addEventListener("DOMContentLoaded", function () {
        var inputs = document.querySelectorAll('[type=tel]');
        for(var i = 0; i < inputs.length; i++) {
            if(!includeZipFields) {
                if(input[i].name.toLowerCase().indexOf('zip'))
                    break;
            }
            inputs[i].addEventListener('keyup', function (e) {
                this.value = this.value.replace(/\D/g, '');
            })
        }
    });
})();
</script>  
