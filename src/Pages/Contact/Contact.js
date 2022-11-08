import React from 'react';
import contact from '../../Images/contact.jpg'

const Contact = () => {
    return (
        <div style={{
            background:`url(${contact})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className='bg-primary px-10 py-14 h-screen my-28'>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary text-red-500'>
                    Contact Us
                </p>
                <h1 className='text-4xl text-red-500'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md bg-white'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md bg-white'
                />
                <textarea
                    className='textarea w-full max-w-md bg-white'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Contact;