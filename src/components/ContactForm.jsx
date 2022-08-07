import React from 'react'

function ContactForm() {
    return (
        <section className='contact-me' id='contact-me'>
            <div className="decor">
                {/* for decoration */}
            </div>
            <div className="container">
                <div className="frame">
                    <h5>Get in touch</h5>
                    <form action='mailto:tanmayabiswal.kn8@gmail.com' method='post' encType="text/plain">
                        <label className='hide-element' htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Email' />
                        
                        <label className='hide-element' htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' placeholder='Name' />

                        <label className='hide-element' htmlFor="email-body">Textbox for email body</label>
                        {/* <input type="text" name="email-body" id="email-body" placeholder='Body of Email' /> */}
                        <textarea name="email-body" id="email-body" cols="30" rows="8" placeholder='Body of Email'></textarea>

                        <label className='hide-element' htmlFor="submit">Submit Email</label>
                        <input className='primary-btn' type="submit" id='submit' value="Submit Email" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;