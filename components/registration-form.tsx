"use client"

import React from "react"
import { useForm } from "react-hook-form"

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm()
  const [formData, setFormData] = React.useState({ plan: "" })
  const [emailBody, setEmailBody] = React.useState("")

  const onSubmit = (data) => {
    setFormData(data)
    setEmailBody(`Name: ${data.name}\nEmail: ${data.email}\nPlan: ${data.plan}`)
  }

  const mailtoLink = `mailto:nayyaungchi0ld@gmail.com?subject=Training Registration - ${formData.plan}&body=${encodeURIComponent(emailBody)}`

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <select {...register("plan")}>
        <option value="basic">Basic Plan</option>
        <option value="premium">Premium Plan</option>
      </select>
      <button type="submit">Register</button>
      {mailtoLink && <a href={mailtoLink}>Send Email</a>}
    </form>
  )
}

export default RegistrationForm
