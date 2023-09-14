import { useState } from 'react'
import './Search.css'
import { ReactComponent as MagicGlass } from './magicGlass.svg';
import { useAppDispatch } from '../../Store/store';
import { getPostsThunk } from '../../Store/post';

export const Search = () => {
    const [searchResult, setSearchResult] = useState('')

const dispatch = useAppDispatch()

    return <div>
        <input className='searchInput' type='search' placeholder="Search..." value={searchResult} onChange={(e) => { 
            setSearchResult(e.currentTarget.value) 
            dispatch(getPostsThunk({search: e.currentTarget.value}))}}></input>
        <button className='searchButton' onClick={() => dispatch(getPostsThunk({search: searchResult}))}>
            <MagicGlass/>
        </button>
    </div>
}