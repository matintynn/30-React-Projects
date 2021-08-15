import React, { useState } from "react";
import Form from "./components/Form";
import data from "./data/db.json"
import { nanoid } from 'nanoid'

function App() {
  const [contacts, setContacts] = useState(data)
  const [addForm, setAddForm] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })
  const [emptyField, setEmptyField] = useState(false)

  const handleInputChange = (e) => {
    e.preventDefault()
    setEmptyField(false)
    const getNameField = e.target.getAttribute('name');
    const getValueField = e.target.value
    const newForm = { ...addForm }

    newForm[getNameField] = getValueField
    setAddForm(newForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newContact = {
      id: nanoid(),
      fullName: addForm.fullName,
      address: addForm.address,
      phoneNumber: addForm.phoneNumber,
      email: addForm.email
    }
    // newContacts array bc the db.json is array
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    setEmptyField(true)
    setAddForm({
      fullName: '',
      address: '',
      phoneNumber: '',
      email: ''
    })
  }

  const handleDelete = (id) => {
    console.log(id)
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <table className='content-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Tel</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* {(contacts.length < 1) &&
          (
            <tbody style={{ background: '#eee' }}>
              <td>You have no contact! Please add contact</td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          )} */}
        <tbody>
          {contacts.map((contact) => (
            <tr key={nanoid()}>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td className="delete">
                {contact.email}
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(contacts.length < 1) &&
        (
          <div style={{ padding: 15, background: "#eee" }}>
            You have no contact !
          </div>)
      }
      <Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} emptyField={emptyField} />
    </div>
  );
}

export default App;
