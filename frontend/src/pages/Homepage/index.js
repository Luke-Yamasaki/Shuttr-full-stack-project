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
    width: 48vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.05);
`;

const ImageSection = styled.section`
    width: 47vw;
    height: auto;
    border-radius: 0.5rem;
    display:flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.05);
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
    const [height, setHeight] = useState('95vh');

    useEffect(() => {
        setActivity('All Activity');
    },[])

    useEffect(() => {
        dispatch(restoreUser()).then(() => dispatch(getUsers()).then(() => dispatch(getImages()).then(() => setLoaded(true))));
    },[dispatch])

    useEffect(() => {
        if(activity === 'Newest') {
            dispatch(getImages())
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
        if(more === 'hidden') {
            setShowButton(false);
            setMore('scroll');
            setHeight('auto');
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
            <HomeFeed style={{height: `${height}`}}>
                <div className={styles.activityContainer}>
                    <div className={styles.selectContainer}>
                       <select onChange={handleSorting} name='sorting' className={styles.selectActivity} onBlur={(e) => e.target.style.border = 'none'}>
                            <option value=''>--  Activity  --</option>
                            <option value='Oldest'>Oldest</option>
                            <option value='Newest'>Newest</option>
                        </select>
                    </div>
                    <ImageSection>
                        <h5 style={{color: 'white', fontFamily: 'sans-serif', fontSize: '16px', width: '1195px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '25px', paddingLeft: '10px', textAlign: 'left' }}>People to follow</h5>
                        <div className={styles.imageCardWrapper}>
                            {activity === "Oldest" || activity === "All Activity" ? imagesArr.map(image =>
                                <div key={image.id} className={styles.imageCardBox} style={{backgroundImage: `url(${image.imageUrl})`}}>
                                    <div className={styles.imageDiv} ></div>
                                    <div className={styles.userInfoBox}>
                                        <div style={{display: 'flex', flexDirection: 'row', width: '200px', height: '75px', justifyContent: 'flex-start', gap: '15px' }}>
                                            <a href={`/users/${image.userId}`} className={styles.userIcon} style={{backgroundImage: `url(${usersObj[image.userId].profileImageUrl})`}}></a>
                                            <div className={styles.userDetails}>
                                                <Link to={`/users/${image.userId}`} className={styles.userLink}>{usersObj[image.userId].firstName} {usersObj[image.userId].lastName}</Link>
                                                <p className={styles.userInfoText}>@{usersObj[image.userId].username}</p>
                                            </div>
                                        </div>
                                        <div className={styles.userCount}>Posted: {imagesArr.filter(filterImage => filterImage.userId === image.userId).length} images</div>
                                    </div>
                                </div>
                            )
                            :
                            reversedImagesArr.map(image =>
                                <div key={image.id} className={styles.imageCardBox} style={{backgroundImage: `url(${image.imageUrl})`}}>
                                    <div className={styles.imageDiv} ></div>
                                    <div className={styles.userInfoBox}>
                                        <div style={{display: 'flex', flexDirection: 'row', width: '200px', height: '75px', justifyContent: 'flex-start', gap: '15px' }}>
                                            <a href={`/users/${image.userId}`} className={styles.userIcon} style={{backgroundImage: `url(${usersObj[image.userId].profileImageUrl})`}}></a>
                                            <div className={styles.userDetails}>
                                                <Link to={`/users/${image.userId}`} className={styles.userLink}>{usersObj[image.userId].firstName} {usersObj[image.userId].lastName}</Link>
                                                <p className={styles.userInfoText}>@{usersObj[image.userId].username}</p>
                                            </div>
                                        </div>
                                        <div className={styles.userCount}>Posted: {imagesArr.filter(filterImage => filterImage.userId === image.userId).length} images</div>
                                    </div>
                                </div>
                            )
                        }
                        </div>

                        {showButton && <div className={styles.moreDiv} onClick={(e) => handleMore(e)}><button type='button' onClick={handleMore} className={styles.moreBtn}>View more</button></div>}
                    </ImageSection>
                </div>
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
