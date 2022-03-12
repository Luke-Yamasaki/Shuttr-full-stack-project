import {useState} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';
import './Searchbar.css';

const SearchbarWrapper = styled.div`
    height: 3vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 2px;
    margin-left: 300px
`;

const SearchForm = styled.form`
    width: 20vw;
    height: 3vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SearchButton = styled.button`
    width: 25px;
    height: 25px;
    bakcground-color: black;
`

const SearchInput = styled.input`
    width: 18vw;
    height: 3vh;
    padding: 0px;
    margin: 0px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 10px;

`;

const SmallSearch = () => {
    const [searchWord, setSearchWord] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchUrl = `/api/search/${e.target.value}`;

        return (
            <Redirect to={searchUrl} />
        )
    }

    return (
        <SearchbarWrapper>
            <SearchForm autoComplete='off' onSubmit={handleSearch} disabled={searchWord.length > 0 ? false : true}>
                <SearchButton className='searchBtn'/>
                <SearchInput
                    autoComplete='off'
                    className='searchInput'
                    type='text'
                    placeholder='Photos, people, or groups'
                    name='searchWord'
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                >
                </SearchInput>
            </SearchForm>
        </SearchbarWrapper>
    )
}

export default SmallSearch;
