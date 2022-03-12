import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { logout } from '../../store/session';
import Navbar from '../../components/Navbar/index';
import { getUsers } from '../../store/users';
import styled from 'styled-components';
import styles from './Homepage.module.css';

const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const HomeFeed = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
`;

const ActivityBox = styled.div`
    width: 47vw;
    height: 70vh;
    background-color: grey;
    display: flex;
    flex-direction: column;
`;

const ImageSection = styled.section`
    width: 45vw;
    height: 60vh;
    background-color: white;
    border: 1px solid grey;
    border-radius: 0.01rem;
    display:flex;
    flex-direction: column;
`;



const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [activity, setActivity] = useState('All Activity');
    const [loaded, setLoaded] = useState(false);

    if (!sessionUser) return (
      <Redirect to="/welcome" />
    );

    useEffect(() => {
        dispatch(getUsers()).then(() => setLoaded(true));
    },[dispatch])

    const handleLogout = () => {
        if (sessionUser) {
          dispatch(logout());
        } else {
          <Redirect to='/' />
        }
    };

    return loaded && (
        <HomeWrapper>
            <Navbar/>
            <HomeFeed>
                <ActivityBox>
                    <select className={styles.selectActivity} onBlur={(e) => e.target.style.border = 'none'}>
                        <option>All Activity</option>
                        <option>People</option>
                        <option>Images</option>
                    </select>
                    <ImageSection>

                        <h5>People to follow</h5>

                        <div className={styles.imageCardWrapper}>
                            <div className={styles.imageCardBox}>
                                <img className={styles.image} src={sessionUser.profileImageUrl}></img>
                                <div className={styles.userInfoBox}>
                                    <img className={styles.userIcon} src={sessionUser.profileImageUrl}></img>
                                    <div className={styles.userDetails}>
                                        <Link to={`/users/${sessionUser.id}`} className={styles.userLink}>{`${sessionUser.firstName} ${sessionUser.lastName}`}</Link>
                                        <p className={styles.userInfoText}>{sessionUser.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.imageCardBox}>
                                <img className={styles.image} src={sessionUser.profileImageUrl}></img>
                                <div className={styles.userInfoBox}>
                                    <img className={styles.userIcon} src={sessionUser.profileImageUrl}></img>
                                    <div className={styles.userDetails}>
                                        <Link to={`/users/${sessionUser.id}`} className={styles.userLink}>{`${sessionUser.firstName} ${sessionUser.lastName}`}</Link>
                                        <p className={styles.userInfoText}>{sessionUser.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.imageCardBox}>
                                <img className={styles.image} src={sessionUser.profileImageUrl}></img>
                                <div className={styles.userInfoBox}>
                                    <img className={styles.userIcon} src={sessionUser.profileImageUrl}></img>
                                    <div className={styles.userDetails}>
                                        <Link to={`/users/${sessionUser.id}`} className={styles.userLink}>{`${sessionUser.firstName} ${sessionUser.lastName}`}</Link>
                                        <p className={styles.userInfoText}>{sessionUser.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.imageCardBox}>
                                <img className={styles.image} src={sessionUser.profileImageUrl}></img>
                                <div className={styles.userInfoBox}>
                                    <img className={styles.userIcon} src={sessionUser.profileImageUrl}></img>
                                    <div className={styles.userDetails}>
                                        <Link to={`/users/${sessionUser.id}`} className={styles.userLink}>{`${sessionUser.firstName} ${sessionUser.lastName}`}</Link>
                                        <p className={styles.userInfoText}>{sessionUser.username}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button>View more</button>
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
        </HomeWrapper>
    )
}

export default Homepage;
