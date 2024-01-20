$('#name').hide()
$('#gender').hide()
$('#home').hide()


const loadPlayer = async () => {
    try{
        const res = await fetch('https://swapi.dev/api/people/1')
        const data = await res.json()
        const res2 = await fetch('https://swapi.dev/api/planets/1/')
        const data2 = await res2.json()
        data.homeworld = data2.name
    
        $('#name').show()
        $('#name').text(data.name)
        $('#gender').show()
        $('#gender').text(data.gender)
        $('#home').show()
        $('#home').text(data.homeworld)
    }catch(err){
        console.error('errornya: ', err);
    }
}