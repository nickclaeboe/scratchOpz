```
<script>
 
  var root = document.querySelector(':root');
  var color = ('{{themeColor}}');
  var accent = ('{{themeAccent}}');
  var heroImg = ('{{themeHeroMain}}');
  const rgba = ('{{themeColorA}}') + ',.5';
  root.style.setProperty('--theme-color', color);
  root.style.setProperty('--theme-accent', accent);
  root.style.setProperty('--theme-hero-img', heroImg);
  root.style.setProperty('--theme-color-a', rgba);
  const globalProductsToken = ('{{sf-global-products}}');
 
</script>
```

```
<script async="">
/*  Global Products (all Products) */
const globalProducts = GlobalProductData.filter((e) => {
return globalProductsToken.match(e.identifier);
}); 

/*Orders products based on token Where:  
obj = string value from either sf-featured-product or sf-gadget-product
prdsList = object either featuredProducts or gadgetProducts */

  const orderProducts = function(obj, prdsList) {
    let ordered = [];
    const singles = obj.split(',');
    for (i = 0; i < prdsList.length; i++) {
      ordered.push(GlobalProductData.filter((el) => {
        return el.identifier === singles[i];
      })[0]);
    };
    return ordered;
  } 

  const globalProductSection = document.querySelector('#products-main');

  const createProducts = function(productList, target, t) {
    let content = '';
    let data_target = target;
    let type = t;
    for (i = 0; i < productList.length; i++) {
      content += `<div class="col-12 col-md-6 mt-5 border-top pt-5 border-light border-1">
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
  };

  let op = orderProducts(globalProductsToken, globalProducts);

  createProducts(op, 'prd', 'product');
</script>
```
