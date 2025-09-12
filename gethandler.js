let student = {
    name: 'Jack',
    age: 24
}

const handler = {

    // get the object key and value
    get(obj, prop) {

        return obj[prop];
  }
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Jack