fetch("people.json")
    .then(response=> response.json())
    .then(values=>values.forEach(value =>console.log(value.name)));
