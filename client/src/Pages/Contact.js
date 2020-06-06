import React from 'react'
import ContactForm from "../Components/ContactForm/Form"
import Social from '../Components/Social/Social'


function Contact() {

    return (
        <div className="container">
<ContactForm/>
<div className="text-center">
<Social />
</div>
        </div>
    )
}

export default Contact;