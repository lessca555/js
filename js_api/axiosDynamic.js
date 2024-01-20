$('#name').hide()
$('#gender').hide()
$('#home').hide()

// const loadPlayer = () => {
    
// }

const loadPlayer = async (id) => {
    try{
        id = $('#id').val()
        const people = await axios.get(`https://swapi.dev/api/people/${id}`)
        const planet = await axios.get(people.data.homeworld)
        people.data.homeworld = planet.data.name
        console.log(people.data.homeworld);
        $('#name').show()
        $('#name').text(people.data.name)
        $('#gender').show()
        $('#gender').text(people.data.gender)
        $('#home').show()
        $('#home').text(people.data.homeworld)
    }catch{(err) => {
        console.log('erronrya: ', err.message);
    }}
} 