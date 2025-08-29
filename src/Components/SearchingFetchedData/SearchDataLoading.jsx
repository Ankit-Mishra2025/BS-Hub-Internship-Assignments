import React from 'react'

const SearchDataLoading = () => {
  return (
    <div className='flex items-center justify-center h-[50] w-[20] mx-auto'>
      <div className='animate-spin h-13 w-13 rounded-full border-t-4 border-cyan-400'></div>
      <h2 className='ml-3 text-md font-semibold'>Loading....</h2>
    </div>
  )
}

export default SearchDataLoading

