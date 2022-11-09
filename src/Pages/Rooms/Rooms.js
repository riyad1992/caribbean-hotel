import React, { useState } from 'react';
import room1 from '../../Images/PHOTO-2020-11-05-21-47-52 (2).jpg'
import room2 from '../../Images/PHOTO-2020-11-05-21-47-53 (1).jpg'
import room3 from '../../Images/PHOTO-2020-11-05-21-47-56.jpg'
import Booked from './Booked';

const Rooms = () => {
    const [book, setBook] = useState(null)
    return (
        <div>
            <h1 className='flex text-xl justify-center text-red-500 font-bold'>Reservation Your Room</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28 mt-12 mx-8'>
                <div className="card shadow-xl">
                    <figure><img src={room1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Single Room</h2>
                        <p>Bed : 1 Single bed</p>
                        <p>Capacity : 1 Person</p>
                        <p>Facility : Tv, Private Bathroom, WiFi, Hot and Cool Water</p>
                        <label for="my-modal" className="cursor-pointer text-green-500 font-bold">Trams & condition</label>
                        <div className="card-actions justify-between">
                            <button className="btn btn-active btn-link">USD $30</button>
                            <label 
                                htmlFor="book-modal"
                                onClick={() => setBook('Single Room')}
                                className="btn btn-primary text-white uppercase">Booking
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <figure><img src={room2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Double Room</h2>
                        <p>Bed : 1 Queen bed</p>
                        <p>Capacity : 2 Person</p>
                        <p>Facility : Tv, Private Bathroom, WiFi, Hot and Cool Water</p>
                        <label for="my-modal" className="cursor-pointer text-green-500 font-bold">Trams & condition</label>
                        <div className="card-actions justify-between">
                            <button className="btn btn-active btn-link">USD $40</button>
                            <label 
                                htmlFor="book-modal"
                                onClick={() => setBook('Double Room')}
                                className="btn btn-primary text-white uppercase">Booking
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <figure><img src={room3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Quadruple Room</h2>
                        <p>Bed : 2 Queen bed</p>
                        <p>Capacity : 4 Person</p>
                        <p>Facility : Tv, Private Bathroom, WiFi, Hot and Cool Water</p>
                        <label for="my-modal" className="cursor-pointer text-green-500 font-bold">Trams & condition</label>
                        <div className="card-actions justify-between">
                            <button className="btn btn-active btn-link">USD $50</button>
                            <label 
                                htmlFor="book-modal"
                                onClick={() => setBook('Quadruple Room')}
                                className="btn btn-primary text-white uppercase">Booking
                            </label>
                        </div>
                    </div>
                </div>

                
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-white text-gray-500">
                        <h3 className="font-bold text-lg">Cancelation Policy Caribbean Hotel</h3>
                        <p className="py-4">1. Guests booking rooms are required to pay the total cost of the booking in advance.</p>
                        <p className="py-4">2. The cancellation is free of charge 60 days prior to the date of arrival.</p>
                        <p className="py-4">3. The cancellation is 60% of charge 30 days prior to the date of arrival.</p>
                        <p className="py-4">4. The cancellation is 100% of charge 29 days prior to the date of arrival.</p>
                        <p className="py-4">5. For the non refundable bookings are no cancellation or changes possible. In case of a cancellation, 90% of the total amount will be charged as cancellation fee.</p>
                        <div className="modal-action">
                            <label for="my-modal" className="btn">Yes & Agree</label>
                        </div>
                    </div>
                </div>
                {
                    book && <Booked book={book} setBook = {setBook}></Booked>
                }
            </div>
        </div>
    );
};

export default Rooms;