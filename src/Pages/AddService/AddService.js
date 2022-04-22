import React from 'react';

const AddService = () => {
    return (
        <div>
            <h2>Add Your Service</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <input className='pb-2' type="text" name="photoURL" id="" />
                <input className='pb-2' type="text" name="name" id="" />
                <textarea className='pb-2' type="text" name="descrioption" id="" />\
                <input type="submit" value="Save Service" />
            </form>
        </div>
    );
};

export default AddService;