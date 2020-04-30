import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const Contact = (props) => {
  const [phoneNumberInputs, setPhoneNumberInputs] = React.useState([
    'PhoneNumber'
  ])

  const { register, handleSubmit, watch, errors } = useForm()

  const appendPhoneNumberInputs = () => {
    var newInput = `PhoneNumber${phoneNumberInputs.length}`
    setPhoneNumberInputs([...phoneNumberInputs, newInput])
  }

  const notify = () => toast('Your form has been successfully submitted!')

  function onSubmit(data, e) {
    e.preventDefault()
    console.log(data)
    if (!data) return
    axios
      .post(
        'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit',
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(notify())
      .then(e.target.reset())
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          toast.error('Form error!')
        }
      })
  }

  const bIncludeAddressDetails = watch('bIncludeAddressDetails')

  return (
    <div className="contact-section">
      <div className="title-container">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="container">
          <div className="line-1">
            <div className="fline">
              <label>Full Name</label>
              <input
                id="FullName"
                name="FullName"
                ref={register({ required: true })}
              />
              {errors.FullName && <p className="help">This is required</p>}
            </div>
            <div className="fline">
              <label>Email Address</label>
              <input
                id="EmailAddress"
                name="EmailAddress"
                ref={register({ required: true })}
              />
              {errors.EmailAddress && <p className="help">This is required</p>}
            </div>
          </div>
          <div className="line-2">
            {phoneNumberInputs.map((phoneNumberInput, i) => (
              <div key={i}>
                <div className="fline">
                  <label htmlFor={phoneNumberInput}>
                    {phoneNumberInput.replace('-', ' ')}
                  </label>
                </div>
                <input
                  ref={register()}
                  id={phoneNumberInput}
                  name={phoneNumberInput}
                />
              </div>
            ))}
            <button
              type="button"
              className="new-button"
              onClick={appendPhoneNumberInputs}
            >
              Add New Phone Number
            </button>
          </div>

          <input
            id="CompanyName"
            name="CompanyName"
            defaultValue="default"
            ref={register}
            hidden={true}
          />

          <div className="line-3">
            <label>Message</label>
            <textarea
              id="Message"
              name="Message"
              ref={register({ required: true, maxLength: 500 })}
            ></textarea>
            {errors.Message && errors.Message.type === 'required' && (
              <p className="help">This is required</p>
            )}
            {errors.Message && errors.Message.type === 'maxLength' && (
              <p className="help">Max length must not exceed 500</p>
            )}
          </div>

          <label htmlFor="bIncludeAddressDetails" className="add-label">
            Add Address Details
          </label>
          <input
            name="bIncludeAddressDetails"
            type="checkbox"
            className="checkbox"
            ref={register}
          />

          {bIncludeAddressDetails && (
            <div className="hidden">
              <br />
              <div className="line-4">
                <div className="fline">
                  <label>Adress line 1</label>
                  <input
                    id="AdressLine1"
                    name="AdressLine1"
                    ref={register({ required: true })}
                  />
                  {errors.AdressLine1 && (
                    <p className="help">This is required</p>
                  )}
                </div>
                <div className="fline">
                  <label>Adress line 2</label>
                  <input id="AdressLine2" name="AdressLine2" ref={register} />
                </div>
              </div>
              <div className="line-5">
                <div className="sline">
                  <label>City/Town</label>
                  <input id="CityTown" name="CityTown" ref={register} />
                </div>
                <div className="sline">
                  <label>State/County</label>
                  <input id="StateCounty" name="StateCounty" ref={register} />
                </div>
                <div className="sline">
                  <label>Postcode</label>
                  <input
                    id="Postcode"
                    name="Postcode"
                    ref={register({ required: true })}
                  />
                  {errors.Postcode && <p className="help">This is required</p>}
                </div>
                <div className="sline">
                  <label>Country</label>
                  <input id="Country" name="Country" ref={register} />
                </div>
              </div>
            </div>
          )}
          <input type="submit"></input>
        </div>
      </form>
    </div>
  )
}

export default Contact
