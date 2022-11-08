import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Booked = ({setBook, book}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d6yjn7h', 'template_89n8ow9', form.current, 'HbAlwM6mfKNrj-mUX')
        .then((result) => {
            toast.success(`Thank you for Your Reservation Please Check your Eamil For more details`)
            setBook(null)
        }, (error) => {
            toast.error(error.text);
        });
        e.target.reset()
    };

    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <label htmlFor="book-modal" onClick={() => setBook(null)} className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg text-primary">Booking for : {book}</h3>
                    <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <div className="w-full max-w-xs">
                            <label>Name</label>
                            <input type="text" name="user_name" className="input input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <div className="w-full max-w-xs">
                            <label>Email</label>
                            <input type="email" name="user_email" className="input input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <div className="w-full max-w-xs">
                            <label>Phone</label>
                            <input type="text" name="phone" className="input input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <div className="w-full max-w-xs">
                            <label>Check In</label>
                            <input type="date" name="checkInDate" className="input input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <div className="w-full max-w-xs">
                            <label>Check Out</label>
                            <input type="date" name="checkOutDate" className="input input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <div className="w-full max-w-xs">
                            <label>Total People</label>
                            <input type="number" name="pax" min='1' max="4" className="input input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <div className="w-full max-w-xs">
                            <label>Message</label>
                            <textarea name="message" rows={5} className="textarea input-bordered w-full max-w-xs bg-white"/>
                        </div>

                        <input type="submit" value="Confirm" className="btn btn-primary w-full max-w-xs"/>
                    </form>
                </div>   
            </div>
        </div>
    );
};

export default Booked;