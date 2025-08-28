import React from 'react'

const CacheLoading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='animate-spin rounded-full h-13 w-12  border-t-4 border-blue-500'>  </div>
  <h2 className="ml-3 text-xl font-semibold"> Loading Data.</h2>
    
    </div>
  )
}

export default CacheLoading
