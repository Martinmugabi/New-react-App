import React from 'react'

 const contactme = () => {
  return (
    <div className='contactme'>
        <h1>Contact Me</h1>
        <p>If you have any questions or would like to get in touch, feel free to reach out!</p>

        <div>
            <h2>Get in Touch</h2>
            <p>You can contact me via email or through the form below.</p>
            <p>Email:</p>
            <p>phone;</p>
            <p>Address:</p>
            <p>1234 Street Name, City, Country</p>
        </div>
        <ul>
            <div className='contact-form'>
            <form>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' required />
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' required></textarea>
                <button type='submit'>Send Message</button>

            </form>
            </div>
        </ul>
        <p>Thank you for reaching out!</p>

    </div>
  )
}
 export default contactme;