import React from 'react'

function ContactForm() {
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        window.location.href = `mailto:tanmayabiswal.kn8@gmail.com?subject=Hello from ${data.get('name')}&body=${data.get('email-body')}`;
    }

    return (
        <section className='contact-me' id='contact-me'>
            <div className="decor">
                {/* for decoration */}
            </div>
            <div className="container">
                <div className="frame">
                    <h5>Get in touch</h5>
                    <form onSubmit={handleSubmit} encType="text/plain">
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