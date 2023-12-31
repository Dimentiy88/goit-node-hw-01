const contacts = require("./contacts");
const argv = require("yargs").argv;

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      // ... id
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
