import React from 'react';
import InputMask from 'react-input-mask'

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'');

const MaskedInput = ({value, onChange}) =>{
    function handleChange(event){
        onchange({
            ...event,
            target: {
                ...event.target,
            Value: onlyNumbers(event.target.value),
            }
        });
    }
    
    return(
    <InputMask mask='99.999.999/9999-99' 
    value={value} 
    onChange={onChange}
    />
 );
};

export default MaskedInput;