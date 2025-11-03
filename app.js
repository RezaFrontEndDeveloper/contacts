// add contact
const addContact = (id, name, number) => {
  return { id, name, number };
};
// create contacts
const contacts = [
  addContact(1, "mohammad", "09129876543"),
  addContact(2, "ali", "09129722987"),
  addContact(3, "reza", "09121234567"),
];
console.log(contacts);
console.log("-------------------");
// remove contact
const removeContact = function (id) {
  const index = contacts.findIndex((item) => item.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
  }
};
removeContact(2);
console.log(contacts);

// editNumber
const editNumber = function (id, newNumber) {
  return contacts.forEach((item) => {
    if (item.id === id) {
      item.number = newNumber;
    }
  });
};
editNumber(1, "0123456789");
console.log(contacts);

const editName = function (id, newName) {
  contacts.forEach((item) => {
    if (item.id === id) {
      item.name = newName;
    }
  });
};
console.log(contacts);
editName(1, "korosh");
console.log(contacts);
