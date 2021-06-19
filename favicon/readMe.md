# Favicons
## Markup for single favicon (.ico, .png or .gif)

```
<link rel="icon" type="image/x-icon" href="http://example.com/favicon.ico" />
<link rel="icon" type="image/png" href="http://example.com/favicon.png" />
<link rel="icon" type="image/gif" href="http://example.com/favicon.gif" />
```

## Markup for Multiple icons

```
<!-- Opera Speed Dial Favicon -->
  <link rel="icon" type="image/png" href="/speeddial-160px.png" />
			
<!-- Standard Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

<!-- For iPhone 4 Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png">

<!-- For iPad: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png">

<!-- For iPhone: -->
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">
```

### Notes
- If you've only got a favicon.ico in the root of your site, you don't need to use any of this markup. However, its still good practice to link to it Linking to the apple-touch-icons allows other apps and platforms to use the icon (such as Android)
- Place the Opera Speed Dial image first in the list, to avoid it appearing as the favicon

*[Source](https://iconhandbook.co.uk/reference/examples/favicons/)
