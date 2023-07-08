import myContacts from "./db/contacts.js"
import { program } from "commander";

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'list':  
        const allContacts = await myContacts.listContacts();
        console.table(allContacts);
        break;
  
      case 'get':
        const oneContact = await myContacts.getContactById(id);
        console.log(oneContact);
        break;
  
      case 'add':
        const newContact = await myContacts.addContact({name, email, phone})
        console.log(newContact);
        break;

      case 'remove':
        const removeById = await myContacts.removeContact(id);
        console.log(removeById);
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  catch(error) {
    console.log(error.message)
  }
  
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>")

    program.parse();

    const options = program.opts();
    invokeAction(options)