import React from 'react';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let service = { name: e.target.name.value, img: e.target.photoURL.value, price: e.target.price.value, description: e.target.description.value }
        console.log(service);
        fetch('http://localhost:5000/service', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <h2>Add Your Service</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto' }}>
                <input className='mb-4' placeholder='name' type="text" name="name" id="" />
                <input className='mb-4' placeholder='PhotoUrl' type="text" name="photoURL" id="" />
                <input className='mb-4' placeholder='price' type="number" name="price" id="" />
                <textarea className='mb-4' placeholder='Description' type="text" name="description" id="" />
                <input type="submit" value="Save Service" />
            </form>
        </div>
    );
};

export default AddService;