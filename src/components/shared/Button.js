import React from 'react'

function Button({value,className ,onClick=()=>{}}) {
  return (
    <div>
        <button onClick={onClick} className={`${className}`}>{value}</button>
    </div>
  )
}

export default Button