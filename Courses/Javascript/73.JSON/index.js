fetch("people.json")
.then(response=>response.json())
.then(value=>value.forEach(value=>console.log(value)))
.catch(error=>console.log(error));
