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
// remove contact
const removeContact = (id) => contacts.filter((item) => item.id !== id);
console.log(removeContact(2));
// edit number
const editNumber = (id, newNumber) => {
  const contact = contacts.find((item) => item.id === id);
  contact.number = newNumber;
  return contacts;
};
console.log(editNumber(1, "123456"));

// edit name
const editName = (id, newName) => {
  const contact = contacts.find((item) => item.id === id);
  contact.name = newName;
  return contacts;
};
console.log(editName(2, "behzad"));
console.log(contacts);
