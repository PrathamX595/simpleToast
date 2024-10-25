import React from 'react'
import { 
    CloseIcon, 
    SuccessIcon, 
    FailureIcon, 
    WarningIcon 
} from "../Icons/Icons"

function Toast({message, type, onClose}) {
    const icons = {
        success: <SuccessIcon/>,
        fail: <FailureIcon/>,
        warning: <WarningIcon/>
    }

    const setIcon = icons[type] || null
  return (
    <div className=' w-96 max-h-24 bg-slate-100 text-black text-lg flex justify-between items-center p-3 rounded-xl border-4 border-black mb-2'>
        <div className='min-h-8 max-h-24'>
            {setIcon && (
                <div>
                    {setIcon}
                </div>
                )}
        </div>
        <p className='max-w-64 max-h-24 overflow-y-auto no-scrollbar text-xl font-medium'>
            {message}
        </p>
        <div>
            <button onClick={onClose}>
                <CloseIcon/>
            </button>
        </div>
    </div>
  )
}

export default Toast