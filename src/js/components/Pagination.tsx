import React from 'react'

type PaginationProps = {
  page: number
  offset: number
  setPage: any
  setOffset: any
}

const Pagination = ({ page, offset, setPage, setOffset }: PaginationProps) => {
  // Function which adds 20 to the offset state and adds 1 to the page state
  const nextPage = (event: any) => {
    event.preventDefault()
    setOffset(offset + 20)
    setPage(page + 1)
  }

  // Function which subtracts 20 from the offset state and subtracts 1 to the page state
  const previousPage = (event: any) => {
    event.preventDefault()
    setOffset(offset - 20)
    setPage(page - 1)
  }

  return (
    <div className='c-pagination'>
      {offset > 19 && (
        <button className='c-pagination__button' onClick={previousPage}>
          Previous Page
        </button>
      )}
      <p className='c-pagination__page'>{page}</p>
      <button className='c-pagination__button' onClick={nextPage}>
        Next Page
      </button>
    </div>
  )
}

export default Pagination
