import React from 'react'

const SearchForm = () => {
    return (
             <div className="form-control">
            <form className="searchForm">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="#sailing #hiking #surfing..."
                  class="input input-bordered"
                />
                <button className="btn bg-accent border-none hover:bg-accent-focus btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
    )
}

export default SearchForm;