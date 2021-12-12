## Given script uses handlebars.js to echo the CSS :root psuedo Bootstrap classes.


```
<script>
  var root = document.querySelector(':root');
  var color = ('{{themeColor}}');
  var accent = ('{{themeAccent}}');
  var accentLt = ('{{themeAccentLt}}');
  var accentDk = ('{{themeAccentDk}}');
  var tone = ('{{themeTone}}');
  var colorBg = ('{{themeColorBg}}');
  var heroImg = ('{{themeHeroMain}}');
  var subMainImg = ('{{themeSubMain}}');
  root.style.setProperty('--theme-color', color);
  root.style.setProperty('--theme-accent', accent);
  root.style.setProperty('--theme-accentLt', accentLt);
  root.style.setProperty('--theme-accentDk', accentDk);
  root.style.setProperty('--theme-hero-img', heroImg);
  root.style.setProperty('--theme-sub-img', subMainImg);
  if (tone === 'dk') {
    root.style.setProperty('--theme-tone', colorBg);
  } else {

  }
</script>
```

## Base CSS and define :root vars 

```
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700");

:root {
  --theme-color: #4e4e4e;
  --theme-tone: #fff;
  --theme-accent: #f9745f;
  --theme-accentLt: #64d0a6;
  --theme-accentDk: #423b7d;
  --theme-hero-img: url(https://cdn.subscribefunnels.com/0ef23e8a-56d7-45c2-902d-f3ecaa8768fb/muscle/images/section-1.jpg);
    --theme-sub-img: url(https://cdn.subscribefunnels.com/0ef23e8a-56d7-45c2-902d-f3ecaa8768fb/muscle/images/section-2.jpg);
  /*Set hero background */
  --hero-gradient-direction: -180deg;
  --hero-gradient-startcolor: rgb(255 255 255 / 0%);
  /* Default startColor-span: 70%  */
  --hero-gradient-startColor-span: 50%;
  --hero-gradient-endColor: #f9745f;
  /* Default endColor-span: calc(70% + 2px) */
  --hero-gradient-endColor-span: calc(50% + 2px);
}

.heroMain {
  background-image: linear-gradient(var(--hero-gradient-direction), var(--hero-gradient-startcolor) var(--hero-gradient-startColor-span), var(--hero-gradient-endColor) var(--hero-gradient-endColor-span)) !important;
}

.heroMain:nth-of-type(even) {
  background-image: linear-gradient(var(--hero-gradient-direction), var(--hero-gradient-startcolor) var(--hero-gradient-startColor-span), var(--theme-accentDk) var(--hero-gradient-endColor-span)) !important;
}

.heroMain {
  // background-image: linear-gradient(115deg, #bfe8ee 70%, #ffec74 calc(70% + 2px)) !important;
}

.section-1 {
  background-image: var(--theme-hero-img);
}
.section-02 {
  background-image: var(--theme-sub-img);
}
.subHero {
  //background-image: url('https://cdn.subscribefunnels.com/b4bd0572-0613-4bf2-99f2-bbb290115c02/subHearo.jpg') !important;
  min-height: 250px !important;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position-x: top;
  background-position-y: center;
}

.heroImg {
  max-height: 480px;
}

.bg-teal {
  background-color: var(--theme-accentLt) !important;
}

.text-teal {
  color: var(--theme-accentLt) !important;
}

.text-accent {
  color: var(--theme-accent) !important;
}

.bg-accent {
  background-color: var(--theme-accent) !important;
}

.border-accent {
  border-color: var(--theme-accent) !important;
}

.border-lg {
  border-width: 6px !important;
}


.bg-accentDk {
  background-color: var(--theme-accentDk) !important;
}

.text-accentDk {
  color: var(--theme-accentDk) !important;
}

.bg-accentLt {
  background-color: var(--theme-accentLt) !important;
}

.text-accentLt {
  color: var(--theme-accentLt) !important;
}

.bg-black {
  background-color: #000 !important;
}
```

