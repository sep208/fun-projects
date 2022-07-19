import React from 'react';

import './custom-input.css';

const CustomInput = ({ handleChange, label, ...otherProps }) => (
 <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
 </div>
)

export default CustomInput;