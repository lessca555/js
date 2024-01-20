//ordinary fetch
fetch('https://swapi.dev/api/people/1').then((res) => {
    if(!res.ok){
        throw Error('could not fetch the data')
    }
    return res.json()
}).then((data) => {
    console.log('json', data);
}).catch((err) => {
    console.error('error: ', err);
})