class Person {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
  }

  greeting() {
    return `Hello there ${firstName} ${lastName}`;
  }

  calculateAge() {
    return Math.abs(
      new Date(Date.now() - this.birthday.getTime()).getUTCFullYear() - 1970
    );
  }
}

const mary = new Person("Mary", "Jane", "06-01-1997");

console.log(mary.calculateAge());
