import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialForm = {
  FullName: '',
  EmailAdress: '',
  PhoneNumber: '',
  CompanyName: '',
  Message: '',
  bIncludeAddressDetails: false,
  AdressLine1: '',
  AdressLine2: '',
  CityTown: '',
  StateCounty: '',
  Postcode: '',
  Country: ''
}

const errorInitialState = {
  errors: ''
}

const Contact = () => {
  const [clicked, setClicked] = useState(false)
  const [form, updateForm] = useState(initialForm)
  const [error, setError] = useState(errorInitialState)

  const showForm = () => {
    setClicked(!clicked)
    // need to set includeAdressDetails field to true
    updateForm({ ...form, bIncludeAddressDetails: true })
    console.log(form)
  }

  function handleInput(e) {
    updateForm({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
    console.log(form)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    if (!form) return
    axios
      .post(
        'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit',
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .catch((error) => console.log(error))
  }

  return (
    <div className="contact-section">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="FullName">Full Name</label>
          <input
            type="text"
            id="fname"
            name="FullName"
            placeholder="Your name.."
            onChange={handleInput}
          />
          {error.FullName && (
            <small className="help is-danger">{error.errors}</small>
          )}
          <label htmlFor="EmailAdress">Email</label>
          <input
            type="text"
            id="email"
            name="EmailAdress"
            placeholder="Your email..."
            onChange={handleInput}
          />
          {error.EmailAdress && (
            <small className="help is-danger">{error.errors}</small>
          )}
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            name="PhoneNumber"
            placeholder="Your number..."
            onChange={handleInput}
          />
          {error.PhoneNumber && (
            <small className="help is-danger">{error.errors}</small>
          )}
          <label htmlFor="CompanyName">Company Name</label>
          <input
            type="text"
            id="CompanyName"
            name="CompanyName"
            placeholder="Your company..."
            onChange={handleInput}
          />
          <label htmlFor="Message">Message</label>
          <textarea
            id="message"
            name="Message"
            placeholder="Write something.."
            onChange={handleInput}
          ></textarea>
          {error.Message && (
            <small className="help is-danger">{error.errors}</small>
          )}
          <button type="button" name="button" onClick={showForm}></button>{' '}
          <label>Add adress details</label>
          {clicked === true ? (
            <div className="hidden">
              <br />
              <label htmlFor="AdressLine1">Adress line 1</label>
              <input
                type="text"
                id="adress"
                name="AdressLine1"
                onChange={handleInput}
              />
              {error.AdressLine1 && (
                <small className="help is-danger">{error.errors}</small>
              )}
              <label htmlFor="AdressLine2">Adress line 2</label>
              <input
                type="text"
                id="AdressLine2"
                name="adress2"
                onChange={handleInput}
              />
              {error.AdressLine2 && (
                <small className="help is-danger">{error.errors}</small>
              )}
              <label htmlFor="CityTown">City/Town</label>
              <input type="text" id="city" name="city" onChange={handleInput} />
              {error.errors && (
                <small className="help is-danger">{error.errors}</small>
              )}
              <label htmlFor="state">State/County</label>
              <input
                type="text"
                id="city-town"
                name="CityTown"
                onChange={handleInput}
              />
              {error.CityTown && (
                <small className="help is-danger">{error.errors}</small>
              )}
              <label htmlFor="Postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                name="Postcode"
                onChange={handleInput}
              />
              {error.Postcode && (
                <small className="help is-danger">{error.errors}</small>
              )}
              <label htmlFor="Country">Country</label>
              <input
                type="text"
                id="country"
                name="Country"
                onChange={handleInput}
              />
              {error.Country && (
                <small className="help is-danger">{error.errors}</small>
              )}
            </div>
          ) : null}
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  )
}

export default Contact
