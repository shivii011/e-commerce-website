import React from 'react'

function Button({value,className ,onClick=()=>{}}) {
  return (
    <div>
        <button onClick={onClick} className={`bg-violet-500 border-2 rounded hover:border-2 hover:border-violet-600 hover:text-violet-700 hover:bg-white py-2 px-4 text-lg ${className}`}>{value}</button>
    </div>
  )
}

export default Button