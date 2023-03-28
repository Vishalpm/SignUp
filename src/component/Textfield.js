import React from 'react'
import {ErrorMessage, useField} from 'formik'

const Textfield = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className='mb-2'>
      <label htmlform={field.name}>{label}</label>
      <input 
      className={`form-control shadow-none ${meta.touched && meta.error}`} 
        {...field} {...props}
        autoComplete="off"
      />

      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export default Textfield
