import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Model = ({ children, isOpened, onClose, size = 'md' }) => {
  const sizeClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }[size]

  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    ref.current = document.querySelector('#modal-root')
    setMounted(true)
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])
  if (!isOpened) {
    return null
  }
  return mounted && ref.current
    ? createPortal(
        <>
          <div
            className={`fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40`}
          >
            <div className={`rounded-lg p-5 ${sizeClass} bg-gray-100 dark:bg-gray-800`}>
              {children}
            </div>
          </div>
        </>,
        ref.current
      )
    : null
}

export default Model
