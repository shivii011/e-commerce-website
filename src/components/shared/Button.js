import React from 'react'

function Button({value,className ,onClick=()=>{}}) {
  return (
    <div>
<<<<<<< HEAD
        <button onClick={onClick} className={` ${className}`}>{value}</button>
=======
        <button onClick={onClick} className={`${className}`}>{value}</button>
>>>>>>> 3f54a5ee3b4bf6396782147c37c9888f89f05a49
    </div>
  )
}

export default Button
// bg-purple border-2 rounded hover:border-2 hover:text-russian-violet hover:bg-white py-2 px-4 text-lg