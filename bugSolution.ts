function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //This will work

// Or if you can modify the function itself
function greeterModified(person: string | string[]): string {
  if(typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}
console.log(greeterModified(user));
console.log(greeterModified("Jane"));