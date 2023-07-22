import React from 'react'

export default function ContentSearch() {
  return (
    <>
        <label htmlFor="search" className="sr-only">
            Search
        </label>
        <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex intems-center pointer-events-none'>
                <MagnifyingClassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
                id="search-input"
                autoComplete="off"
                type="text"
                className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 
                    bg-white placeholder-gray-500 focus:outline-some focus:placeholder-gray-400 focus:ring-1
                    focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Search for any blog'
            />
            <ul className='w-80 border-solid brder rounded-md z-10 bg-white 
                max-80 overflow-auto absolute select is-mulitple'
                role="listbox"
            >
                <li onClick>

                </li> 
            </ul>
        </div>
    </>
  )
}
