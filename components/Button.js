import React, { useEffect } from 'react'

const Button = ({
  leftIcon,
  rightIcon,
  isLoading,
  loadingText = 'Submitting',
  color = 'blue',
  size = 'md',
  variant = 'solid',
  isDisabled,
  children,
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center font-semibold transition duration-150 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm leading-4',
    md: 'px-4 py-2 text-sm leading-5',
    lg: 'px-4 py-2 text-base leading-6',
  }
  const colorClasses = {
    blue: {
      solid: `text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 focus:ring-blue-500`,
      outline: `text-blue-700 bg-white border-blue-500 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500`,
      ghost: `text-blue-700 bg-white hover:bg-blue-50 focus:ring-blue-500`,
    },
    gray: {
      solid: `text-gray-100 bg-gray-600 border border-transparent shadow-sm hover:bg-gray-700 focus:ring-gray-500`,
      outline: `text-gray-700 bg-white border-gray-500 hover:text-gray-600 hover:bg-gray-50 focus:ring-gray-500`,
      ghost: `text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500`,
    },
    yellow: {
      solid: `text-white bg-yellow-600 border border-transparent shadow-sm hover:bg-yellow-700 focus:ring-yellow-500`,
      outline: `text-yellow-700 bg-white border-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500`,
      ghost: `text-yellow-700 bg-white hover:bg-yellow-50 focus:ring-yellow-500`,
    },
    green: {
      solid: `text-white bg-green-600 border border-transparent shadow-sm hover:bg-green-700 focus:ring-green-500`,
      outline: `text-green-700 bg-white border-green-500 hover:text-green-600 hover:bg-green-50 focus:ring-green-500`,
      ghost: `text-green-700 bg-white hover:bg-green-50 focus:ring-green-500`,
    },
    red: {
      solid: `text-white bg-red-600 border border-transparent shadow-sm hover:bg-red-700 focus:ring-red-500`,
      outline: `text-red-700 bg-white border-red-500 hover:text-red-600 hover:bg-red-50 focus:ring-red-500`,
      ghost: `text-red-700 bg-white hover:bg-red-50 focus:ring-red-500`,
    },
  }
  const currentColor = colorClasses[color][variant]

  return (
    <button
      disabled={isLoading || isDisabled}
      className={`${baseClasses} ${
        sizeClasses[size]
      } ${currentColor} items-center justify-center rounded-md ${
        isDisabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      {...props}
    >
      {isLoading && (
        <svg
          className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      {isLoading ? loadingText : children}
      {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}

export default Button
