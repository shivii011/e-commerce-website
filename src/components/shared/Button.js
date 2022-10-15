import React from 'react'

function Button({value,className ,onClick=()=>{}}) {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <button onClick={onClick} className={` ${className}`}>{value}</button>
=======
        <button onClick={onClick} className={`${className}`}>{value}</button>
>>>>>>> 3f54a5ee3b4bf6396782147c37c9888f89f05a49
=======
        <button onClick={onClick} className={`bg-slate-700 border-2 rounded hover:border-2 hover:border-violet-600 hover:text-slate-900 hover:bg-white py-2 px-4 text-lg ${className}`}>{value}</button>
>>>>>>> e874aecf55dece980178b9a65f1ba131de3c56a8
    </div>
  )
}

export default Button
// bg-purple border-2 rounded hover:border-2 hover:text-russian-violet hover:bg-white py-2 px-4 text-lg