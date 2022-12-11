import React from 'react';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto py-20 min-h-screen'>
            <div>
                <h1 className='text-center text-4xl uppercase'>Contact me</h1>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-10'>
                <div>
                    <iframe className='rounded-md' title='Google Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.686886309995!2d90.36147636309101!3d24.748999829917068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e0!3m2!1sen!2sbd!4v1670692876167!5m2!1sen!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <iframe className='rounded-md'
                        id="JotFormIFrame-223435427189057"
                        title="Form"
                        onload="window.parent.scrollTo(0,0)"
                        allowtransparency="true"
                        allowfullscreen="false"
                        allow="geolocation; microphone; camera"
                        src="https://form.jotform.com/223435427189057"
                        frameborder="0"
                        style={
                            {
                                minWidth: '100%',
                                height:'539px',
                                border:'none'
                            }
                        }
                        scrolling="no"
                    >
                    </iframe>


                </div>
                {/* <form className='bg-gray-700 p-10 rounded-md'>
                    <div className='mb-5'>
                        <input type="email" placeholder="Your Email" className="input input-bordered input-primary w-full" required/>
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder="Mobile Number" className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='mb-5'>
                        <textarea className="textarea textarea-primary w-full" placeholder="Your Message"></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <input type="submit" value="Send" className='btn btn-primary w-60'/>
                    </div>
                </form> */}
            </div>
        </div>
    );
};

export default Contact;