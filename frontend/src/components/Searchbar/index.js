import {useState} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';
import './Searchbar.css';

const SearchbarWrapper = styled.div`
    height: 3vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 2px;
`;

const SearchForm = styled.form`
    width: 60vw;
    height: 3vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SearchButton = styled.button`
    width: 40px;
    height: 3vh;;
    bakcground-color: black;
`

const SearchInput = styled.input`
    width: 58vw;
    height: 3vh;
    padding: 0px;
    margin: 0px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    padding-left: 10px;

`;

const Searchbar = () => {
    const [searchWord, setSearchWord] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchUrl = `/api/search/?text=${e.target.value}`;

        return (
            <Redirect to={searchUrl} />
        )
    }

    return (
        <SearchbarWrapper>
            <SearchForm autoComplete='off' onSubmit={handleSearch} disabled={searchWord.length > 0 ? false : true}>
                <SearchButton />
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

export default Searchbar;
