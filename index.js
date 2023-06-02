const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// =====просто функции для проверки===============================================
// listContacts().then(console.log);
// getContactById("rsKkOQUi80UsgVPCcLZZW").then(console.log);
// removeContact("rsKkOQUi80UsgVPCcLZZW").then(console.log);
addContact("Allen Raymond", "nulla.ante@vestibul.co.uk", "(992) 914-3999").then(
  console.log
);
//=================================================================================
