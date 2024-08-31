# apilayer
JavaScript library for apilayer.net
# main
```js
async function main(){
    const {apilayer} = require('./apilayer');
    const layer= new apilayer();
    let req=await layer.live_currency()
    console.log(req)
}
main()
```
