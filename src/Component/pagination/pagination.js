import React from 'react';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, lastPage }) => {
  const pageNumbers = [];

  for (let i = currentPage-1; i <= Math.ceil(totalPosts / postsPerPage) && i<=currentPage+1; i++) {
    if(i>0){
      pageNumbers.push(i);
    }
  }

  const hello = () =>{
    paginate(currentPage+1);
  }

  return (
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page_item'>
            <a onClick={() => paginate(number)} className='page_link'>
              { currentPage === number ? <div className='pagination_selected'>{number}</div> : <div className='pagination_not_selected'>{number}</div> }
            </a>
          </li>
        ))}
        {
          currentPage + 1 < lastPage && <div className='page_next' onClick={hello}>&hellip;</div>
        }

        {
            <a onClick={() => paginate(lastPage)} className='page_link'>
              { currentPage !== lastPage && currentPage + 1 < lastPage && <div className='pagination_not_selected'>{lastPage}</div> }
            </a>
        }
      </ul>
  );
};

export default Pagination;