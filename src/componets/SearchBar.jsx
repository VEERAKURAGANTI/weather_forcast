import SearchIcon from '../assets/incons/search_icon.png';
import './SearchBar.css'
export function SearchBar() {
    return (
        <div className='search-box'>
            <input type="text" placeholder="📍Search" />
            <span className='search-icon'>
                <img src={SearchIcon} alt="search-icon" />
            </span>
        </div>
    );
}