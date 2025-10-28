class apilayer{
    constructor(){
        this.api = "https://www.apilayer.net/api"
        this.headers={"Accept-Encoding":"gzip","Connection":"Keep-Alive","Host":"www.apilayer.net","TE":"gzip, deflate; q=0.5","User-Agent":"Dalvik/2.1.0 (Linux; U; Android 12; SM-G965N Build/QP1A.190711.020)"}
        this.key="2ddcf98879872141c9cc2b4a2aec87b9"
    }
    async live_currency(){
        let req=await fetch(`${this.api}/live?access_key=${this.key}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {apilayer};