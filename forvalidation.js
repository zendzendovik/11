let student = {
    name: 'Jack',
    age: 24
}

const handler = {

    // get the object key and value
    get(obj, prop) {

    // check condition
    if (prop == 'name') {
      return obj[prop];
    } else {
      return 'Not allowed';
    }
  }
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Jack
console.log(proxy.age); // Not allowed