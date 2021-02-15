# Disable Alpha-Numerics on <input type="tel"/>
### use the onkeyup function below 

```
<input onkeyup="this.value=this.value.replace(/[^\d]/,'')"/>
```
