let student = {
    name: 'Jack',
    age: 23
}

const handler = {
    set: function (obj, prop, value) {
        if (obj[prop]) {
            
            // cannot change the student value
            console.log('Read only')
        }
    }
};

const proxy = new Proxy(student, handler);

proxy.name = 'John'; // Read only
proxy.age = 33; // Read only