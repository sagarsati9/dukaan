import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import Pagination from '../pagination/pagination';
import slogan from '../dummyData/dummyData';
import './mainContent.css';

const Maincontent = () => {

    const [arr, setarr] = useState(slogan);
    const [size, setsize] = useState(arr.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    const lastPage = Math.ceil(arr.length / postsPerPage);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    const [Hover, setHover] = useState(false);
    const [id, setid] = useState('');
    const [clicked, setclicked] = useState('');
    const [enteredtext, setenteredtext] = useState('');
    const [search, setsearch] = useState('');
    
    const onHoverEnter = (index) => {
        setHover(true);
        setid(index);
    }

    const onHoverLeave = () => {
        setHover(false);
        setclicked('');
    }
    
    const nextpage = () => {
        (currentPage < lastPage) ? 
        setCurrentPage(currentPage+1) : 
        setCurrentPage(currentPage);
    }
    
    const copy = (data, index) =>  {
        navigator.clipboard.writeText(data);
        if(index===clicked){
            setclicked('');
        }
        setclicked(index);
    }
    
    const changesearch = (event) => {
        setenteredtext(event.target.value);
        // console.log(event.target.value);
    }
    const ans = (enteredtext) =>{
        setarr([...slogan.filter(word => word.includes(enteredtext))])
        // console.log(arr);

        setsearch(enteredtext);
    }
    
    useEffect (
        () => {
            setsize(arr.length);
        }, [arr]
    )
    
    return (
        <div className="maincontent">
            <div className="maincontent_body">
                <div className="maincontent_heading">
                    Free slogan maker
                </div>
                <div className="maincontent_text">
                    Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                </div>
                <div className="maincontent_Search_heading">
                    Word for your slogan
                </div>
                <input type="text" 
                    className="maincontent_searchbox" 
                    value={enteredtext}
                    onChange={changesearch}
                />
                <br />
                <Button className="maincontent_generate_button"
                     onClick={()=>{ans(enteredtext)}}
                
                >Generate slogans</Button>
                <div className="maincontent_line"></div>
                <br />
                <div className='maincontent_search_result'>
                    {
                        arr ? 
                        <div className='search_result'>
                            We have generated {size} slogans for "{search}"
                        </div>
                        :
                        ""
                    }
                    <Button>Download</Button>
                </div>
                <br />
                <div className="maincontent_data_box">
                    {
                        currentPosts.map((data, index) =>
                            <li key={index} 
                            tabIndex='-3'
                            >
                                
                                <div className="maincontent_data"
                                    onMouseEnter={()=>onHoverEnter(index)}  
                                    onMouseLeave={()=>onHoverLeave()}
                                    onClick={()=>copy(data, index)}    
                                >
                                    {data}
                                </div>

                                {
                                    Hover && index===id ? 

                                    <div className='maincontent_alert'>
                                        {clicked===index ? "Copied" : "Click to copy text"}
                                    </div>
                                    :
                                    <div></div>
                                }
                            </li>
                        )
                    }
                </div>
                <br />
                    <div className="maincontent_line"></div>
                <div className='maincontent_pagination'>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={arr.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        lastPage={lastPage}
                    />
                    <Button onClick={nextpage}>Next &gt;</Button>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Maincontent;