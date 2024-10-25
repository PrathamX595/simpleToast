import React from 'react'
import fail from "/fail.svg"
import success from "/success.svg"
import warning from "/warn.svg"
import close from "/close.svg"

const CloseIcon = () => (
    <img src={close} alt='close' className=' min-h-5'/>
  );
  
  const SuccessIcon = () => (
    <img src={success} alt='success' className=' min-h-8 '/>
  );
  
  const FailureIcon = () => (
    <img src={fail} alt='fail' className=' min-h-8 '/>
  );
  
  const WarningIcon = () => (
    <img src={warning} alt='warn' className=' min-h-8 '/>
  );
  
export { CloseIcon, SuccessIcon, FailureIcon, WarningIcon };