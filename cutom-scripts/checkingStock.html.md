# Checking For Stock Modal Script
### Note
- Paste modal HTML immediately after the opening body tag, at the very top of the HTML. 
- Bootstrap CSS imported style sheet is required.

### HMTL Code Snippet
```
<!-- Checking Modal -->
<div id="pageModal" style="display: none;"><div id="pageWrap">
	<div id="progressText_1" class="progressText" style="display: none;">Checking if you Qualify for Special Offers...</div>
	<div id="progressText_2" class="progressText" style="display: none;">Congratulations You Qualified!</div>
	<div id="progressText_3" class="progressText" style="display: none;">Checking for Stock...</div>
	<div id="progressText_4" class="progressText" style="display: none;">Stock Available!</div>
	<div class="meter">
		<span style="width: 100%;"></span>
	</div>
</div> 
</div>
```

### Javascript Code Snippet
```
<script async="">
        function queue(start) {
            var rest = [].splice.call(arguments, 1),
                promise = $.Deferred();

            if (start) {
                $.when(start()).then(function () {
                    queue.apply(window, rest);
                });
            } else {
                promise.resolve();
            }
            return promise;
        }

        var playSlideshow = function() {
            queue(
                function () {
                    return $(".meter > span").animate({width: "7%"}, 2500);
                },
                function () {
                    return $('#progressText_1').hide();
                },
                function () {
                    return $('#progressText_2').show();
                },
                function () {
                    return $(".meter > span").animate({width: "33%"}, 1250);
                },
                function () {
                    return $('#progressText_2').delay(1250);
                },
                function () {
                    return $('#progressText_2').hide();
                },
                function () {
                    return $('#progressText_3').show();
                },
                function () {
                    return $(".meter > span").animate({width: "66%"}, 1250);
                },
                function () {
                    return $('#progressText_3').delay(1250);
                },
                function () {
                    return $('#progressText_3').hide();
                },
                function () {
                    return $('#progressText_4').show();
                },
                function () {
                    return $(".meter > span").animate({width: "100%"}, 1250);
                },
                function () {
                    return $('#progressText_4').delay(1250);
                },
                function () {
                    return $('#pageModal').fadeOut(1000);
                }

	        );
	};

        $(function() {
            playSlideshow();
        });
</script>
```

### CSS Include
```
<style>
	@charset "UTF-8";

/*---------------------------------------- PRELOADER STYLES ----------------------------------------*/

#pageModal {
    background-color: #fff; 
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 1000000;
}

#pageWrap {
    height: 120px;
    left: calc(50% - 240px);
    position: absolute;
    top: calc(50% - 60px);
    width: 480px;
}

#pageWrap2 {
    height: 400px;
    left: calc(50% - 240px);
    position: absolute;
    top: calc(50% - 200px);
    width: 480px;
}
pre {
    background: black;
    text-align: left;
    padding: 20px;
    margin: 0 auto 30px auto;
}

.meter {
    height: 20px;
    position: relative;
    margin: 30px 0 20px 0;
    background: #ddd;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
    -moz-box-shadow   : inset 0 -1px 1px rgba(255,255,255,0.3);
    box-shadow        : inset 0 -1px 1px rgba(255,255,255,0.3);
    overflow: hidden;
}
.meter > span {
    display: block;
    height: 20px;
    border-radius: 10px;
    background-color: #06973e;
    background-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            color-stop(0, rgb(43,194,83)),
            color-stop(1, rgb(84,240,84))
    );
    background-image: -moz-linear-gradient(
            center bottom,
            rgb(43,194,83) 37%,
            rgb(84,240,84) 69%
    );
    -webkit-box-shadow:
            inset 0 2px 9px  rgba(255,255,255,0.3),
            inset 0 -2px 6px rgba(0,0,0,0.4);
    -moz-box-shadow:
            inset 0 2px 9px  rgba(255,255,255,0.3),
            inset 0 -2px 6px rgba(0,0,0,0.4);
    box-shadow:
            inset 0 2px 9px  rgba(255,255,255,0.3),
            inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
}
.meter > span:after, .animate > span > span {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:
            -webkit-gradient(linear, 0 0, 100% 100%,
            color-stop(.25, rgba(255, 255, 255, .2)),
            color-stop(.25, transparent), color-stop(.5, transparent),
            color-stop(.5, rgba(255, 255, 255, .2)),
            color-stop(.75, rgba(255, 255, 255, .2)),
            color-stop(.75, transparent), to(transparent)
            );
    background-image:
            -moz-linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, .2) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(255, 255, 255, .2) 50%,
                    rgba(255, 255, 255, .2) 75%,
                    transparent 75%,
                    transparent
            );
    z-index: 1;
    -webkit-background-size: 50px 50px;
    -moz-background-size: 50px 50px;
    -webkit-animation: move 2s linear infinite;
    overflow: hidden;
}

.animate > span:after {
    display: none;
}

@-webkit-keyframes move {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 50px 50px;
    }
}

.progressText {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
}

#progressText_2,
#progressText_3,
#progressText_4 {
    display: none;
}

.progressTestimonial {
    margin-bottom: 30px;
    text-align: center;
}

.progressTestimonial .progressStars img {
    margin-bottom: 5px;
}

.progressTestimonial .progressQuote {
    font-size: 16px;
    text-align: center;
}

.progressTestimonial .progressName img {
    border-radius: 50%;
    height: 100px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 100px;
}

#progressTestimonial_2 {
    display: none;
}

/*----- Extra Small -----*/
@media(max-width: 767px) {

    #pageWrap {
        height: 120px;
        left: 30px;
        position: absolute;
        top: calc(50% - 60px);
        width: calc(100% - 60px);
    }

    #pageWrap2 {
        height: 400px;
        left: 30px;
        position: absolute;
        top: calc(50% - 200px);
        width: calc(100% - 60px);
    }

    .progressText {
        font-size: 15px;
    }

}
</style>
```
