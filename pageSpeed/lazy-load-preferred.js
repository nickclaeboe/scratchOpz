
<script type="text/javascript" defer="">
 
  /*! lozad.js - v1.5.0 */ ! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e()
  }(this, function() {
    "use strict";

    function t(t) {
      t.setAttribute("data-loaded", !0)
    }
    var e = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      },
      r = document.documentMode,
      n = {
        rootMargin: "0px",
        threshold: 0,
        load: function(t) {
          if ("picture" === t.nodeName.toLowerCase()) {
            var e = document.createElement("img");
            r && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.appendChild(e)
          }
          t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && (t.srcset = t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')")
        },
        loaded: function() {}
      },
      o = function(t) {
        return "true" === t.getAttribute("data-loaded")
      },
      a = function(e, r) {
        return function(n, a) {
          n.forEach(function(n) {
            n.intersectionRatio > 0 && (a.unobserve(n.target), o(n.target) || (e(n.target), t(n.target), r(n.target)))
          })
        }
      },
      i = function(t) {
        return t instanceof Element ? [t] : t instanceof NodeList ? t : document.querySelectorAll(t)
      };
    return function() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = e({}, n, d),
        c = u.rootMargin,
        s = u.threshold,
        g = u.load,
        l = u.loaded,
        f = void 0;
      return window.IntersectionObserver && (f = new IntersectionObserver(a(g, l), {
        rootMargin: c,
        threshold: s
      })), {
        observe: function() {
          for (var e = i(r), n = 0; n < e.length; n++) o(e[n]) || (f ? f.observe(e[n]) : (g(e[n]), t(e[n]), l(e[n])))
        },
        triggerLoad: function(e) {
          o(e) || (g(e), t(e), l(e))
        }
      }
    }
  });
                                                 
</script>

<script type="text/javascript" defer=""> 
  window.lazyLoad = lozad('.lazy');
  window.lazyLoad.observe(); 
  </script>
