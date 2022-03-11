import Navbar from "../../components/Navbar";
import styled from 'styled-components';
import {useSelector, useEffect} from 'react-redux';
import {Link} from 'react-router-dom';

const SinglePageWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: grey;
    overflow: scroll;
`

const SingleImagePage = () => {
    const imagesObj = useSelector(state => state.imagesState.images);
    const image = Object.values(imagesObj);



    return (
        <SinglePageWrapper>
            <Navbar />
            <div style={{
                width: '100vw',
                height: 'auto',
                display: 'flex',
                flexDireciton: 'column'
            }}>
                <div>
                    <img src={imageUrl}></img>
                    <h2></h2>
                    <

                </div>
            </div>

        </SinglePageWrapper>
    )
}
