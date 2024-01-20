//XMLHttpRequest
const req = new XMLHttpRequest()
let data

req.onload = function(){
    data = JSON.parse(this.response)
    console.log(data);
}

req.onerror = function(){
    console.log('error', this);
}

req.open('GET', 'https://swapi.dev/api/people/1')
req.send()