import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { logout } from '../../store/session';
import Navbar from '../../components/Navbar/index';
import { restoreUser } from '../../store/session';
import { getUsers } from '../../store/users';
import { getImages } from '../../store/images';
import styled from 'styled-components';
import styles from './Homepage.module.css';

const HomeFeed = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ActivityBox = styled.div`
    width: 47vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    flex-direction: column;
`;

const ImageSection = styled.section`
    width: 47vw;
    height: 100vh;
    background-color: green;
    border-radius: 0.01rem;
    display:flex;
    flex-direction: column;
`;



const Homepage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const usersObj = useSelector(state => state.usersState.users);
    const usersArr = Object.values(usersObj);
    const imagesObj = useSelector(state => state.imagesState.images);
    const imagesArr = Object.values(imagesObj);
    const imagesArrCopy = [...imagesArr];
    const reversedImagesArr = imagesArrCopy.reverse();
    const [activity, setActivity] = useState('All Activity');
    const [loaded, setLoaded] = useState(false);
    const [showButton, setShowButton] = useState(true)
    const [more, setMore] = useState('hidden');

    useEffect(() => {
        setActivity('All Activity');
    },[])

    useEffect(() => {
        dispatch(restoreUser()).then(() => dispatch(getUsers()).then(() => dispatch(getImages()).then(() => setLoaded(true))));
    },[dispatch])

    useEffect(() => {
        if(activity === 'Newest') {
            dispatch(getImages()).then((res) => console.log(res))
        }
    },[activity])

    const handleLogout = () => {
        if (sessionUser) {
          dispatch(logout());
        } else {
          <Redirect to='/' />
        }
    };

    const handleMore = (e) => {
        e.preventDefault();
        let div = document.getElementsByClassName('wrapper')[0];
        if(more === 'hidden') {
            setShowButton(false);
            setMore('scroll');
            div.style.overflowY = more;
        }
    }

    if (!sessionUser)  {
        return <Redirect to="/welcome" />
    }

    const handleSorting = (e) => {
        e.preventDefault();
        const selectBox = document.getElementsByTagName('select')[0];
        const value = selectBox.options[selectBox.selectedIndex].value;
        setActivity(value);
    }

    // const handleSelectOld = (e) => {
    //     e.preventDefault();
    //     if(activity === 'Newest' && e.target.value === 'Oldest') {
    //         setActivity(e.target.value)
    //     }
    // }

    return loaded && (
        <div className={styles.wrapper} style={{overflowY: `${more}`}}>
            <Navbar/>
            <HomeFeed>
                <ActivityBox>
                    <select onChange={handleSorting} name='sorting' className={styles.selectActivity} onBlur={(e) => e.target.style.border = 'none'}>
                        <option value=''>--  Activity  --</option>
                        <option value='Oldest'>Oldest</option>
                        <option value='Newest'>Newest</option>
                    </select>
                    <ImageSection>
                        <h5>People to follow</h5>

                        <div className={styles.imageCardWrapper}>
                            {activity === "Oldest" || activity === "All Activity" ? imagesArr.map(image =>
                                <div key={image.id} className={styles.imageCardBox}>
                                    <div className={styles.imageDiv} style={{backgroundImage: `url(${image.imageUrl})`}}></div>
                                    <div className={styles.userInfoBox}>
                                        <img className={styles.userIcon} src={sessionUser.profileImageUrl}></img>
                                        <div className={styles.userDetails}>
                                            <Link to={`/users/${image.userId}`} className={styles.userLink}>{usersObj[image.userId].firstName} {usersObj[image.userId].lastName}</Link>
                                            <p className={styles.userInfoText}>{usersObj[image.userId].username}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            reversedImagesArr.map(image =>
                                <div key={image.id} className={styles.imageCardBox}>
                                    <div className={styles.imageDiv} style={{backgroundImage: `url(${image.imageUrl})`}}></div>
                                    <div className={styles.userInfoBox}>
                                        <img className={styles.userIcon} src={sessionUser.profileImageUrl}></img>
                                        <div className={styles.userDetails}>
                                            <Link to={`/users/${image.userId}`} className={styles.userLink}>{usersObj[image.userId].firstName} {usersObj[image.userId].lastName}</Link>
                                            <p className={styles.userInfoText}>{usersObj[image.userId].username}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        </div>

                        {showButton && <div className={styles.moreDiv} onClick={(e) => handleMore(e)}><button type='button' onClick={handleMore} className={styles.moreBtn}>View more</button></div>}
                    </ImageSection>
                </ActivityBox>
                {/* <aside>
                        <div>
                            <p>All-time views</p>
                            <button>Get daily stats with Shuttr Pro</button>
                        </div>
                        <div>
                            <p>Groups for you</p>
                            <div>
                                <div>
                                <img></img>
                                <a></a>
                                <button>Join</button>
                                </div>
                                <div>
                                    <img></img>
                                    <img></img>
                                    <img></img>
                                    <img></img>
                                </div>
                            </div>
                            <div>
                                <div>
                                <img></img>
                                <a></a>
                                <button>Join</button>
                                </div>
                                <div>
                                    <img></img>
                                    <img></img>
                                    <img></img>
                                    <img></img>
                                </div>
                            </div>
                        </div>
                    </aside> */}
            </HomeFeed>
        </div>
    )
}

export default Homepage;
