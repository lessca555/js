axios.get('https://swapi.dev/api/people/1').then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.error('errornya: ', err.message);
})