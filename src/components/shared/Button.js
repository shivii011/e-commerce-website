import React from 'react'

function Button({value,className ,onClick=()=>{}}) {
  return (
    <div>
        <button onClick={onClick} className={`bg-purple border-2 rounded hover:border-2 hover:text-russian-violet hover:bg-white py-2 px-4 text-lg ${className}`}>{value}</button>
    </div>
  )
}

export default Button