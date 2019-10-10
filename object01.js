    var person = new Object();
    person.Firstname = 'shravan'
    person.Lastname = 'kumar'
    person.age = '20'

    console.log(person)
    console.log(typeof person)

    for(var i in person){
        console.log(i+ ' ' +person[i])
    }

    console.log(person.Firstname)
    console.log(person.Lastname)
    console.log(person.age)

    var array = [1,2,3,4,5,6,7,8,9]
    for(var a in array){
        window.alert('The element at index '+ a +' is '+ array[a]);
    }
