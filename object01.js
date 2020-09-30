var person = new Object();
    person.Firstname = 'shravan'
    person.Lastname = 'kumar'
    person.age = '20'
    person.hight = '6'

    console.log(person)
    console.log(typeof person)

    for(var i in person){
        console.log(i+ ' ' +person[i])
    }

    console.log(person.Firstname)
    console.log(person.Lastname)
    console.log(person.age)
    console.log(person.hight)
