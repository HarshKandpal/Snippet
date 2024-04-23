import React from 'react'

function GenericInput({
    labelName,
    id,
    type='text',
    className,
    placeholder='',
    labelClassName,
    ...otherPara
}) {
  return (
    <>
    <label htmlFor={id} className={labelClassName}>{labelName}</label>
    <br/>
    <input 
    className={className}
    id={id}
    type={type}
    placeholder={placeholder}
    {...otherPara} />
    </>
  )
}

export default GenericInput