# Frequently Used Custom Scripts 

## 1. Attention jQuery script at the top of the page 

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/attentionTop.html.md)

## 2. Checking For Stock Modal Script

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/checkingStock.html.md)

## 3. How to Defer Parsing of Javascript for YouTube Iframe Videos

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/defer_youTube_iFrame.html.md)

## 4. Disable Button Input Until Conditional Checkbox is Checked

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/disableButtonCheckbox.html.md)

## 5. Integrate Instagram on your site, social feed import

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/instagramOnYourSite.html.md)

## 6. Scroll To Top of Page and Hide Button

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/scrollToTopBtnHide.html.md)

## 7. SOCIAL PROOF WIDGET / PLUGIN jQuery Javascript

- [code Snippets/Example](https://github.com/nickclaeboe/scratchOpz/blob/main/cutom-scripts/socialProof.html.md)

### NOTE 
- [jQuery Libraries](https://developers.google.com/speed/libraries/devguide#jquery)

Recent Release
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
```

-----------

```
<script>
  var globalProductsToken = ('{{sf-global-products}}');
</script>
```
```
 const globalProducts = GlobalProductData.filter((e) => {
    return globalProductsToken.match(e.identifier);
  });
  console.log(globalProducts);

  const globalProductSection = document.querySelector('#products-main');

  const createProducts = function(productList, target, t) {
    let content = '';
    let data_target = target;
    let type = t;
    for (i = 0; i < productList.length; i++) {
      content += `<div class="col-12 col-sm-6 mb-5">
                <div class="row">
                    <div class="col text-center">
                    <img src="${productList[i].defaultImage.url}" alt="" class="img-fluid bd-placeholder-img" />
                    </div>
                    <div class="col">
                    <div class="right-sec">
                        <p class="txt h5">${productList[i].name}</p>
                        <p class="txt h6">${productList[i].shortDescription}</p>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <div class="clearall"></div>
                        <div class="clearall"></div>
                        <p class="txt2 h6 mt-1">Price: <span draggable="true" id="i2fqeq">$${productList[i].price}</span>
                        </p>
                        <a href="products/${productList[i].slugName}" class="btn btn-lg prdBtn">Learn More</a>
                    </div>
                    </div>
                </div>
                </div>`
    }
    globalProductSection.innerHTML += content;
  }

  createProducts(globalProducts);
```


```
```
