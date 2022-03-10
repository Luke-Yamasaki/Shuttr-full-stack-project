import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { logout } from '../../store/session';
import Navbar from '../../components/Navbar/index';
import styled from 'styled-components';
import styles from './Homepage.module.css';

const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
`;

const Nav = styled.nav`
    height: 5vh;
    width: 100vw;
    background-color: #212124;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;



const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    if (!sessionUser) return (
      <Redirect to="/welcome" />
    );

    const handleLogout = () => {
        if (sessionUser) {
          dispatch(logout());
        } else {
          <Redirect to='/' />
        }
    };

    return (
        <HomeWrapper>
            {/* <nav>
                <ul>
                    <li>Logo</li>
                    <li>You</li>
                    <li>Explore</li>
                    <li>Search Bar</li>
                    <li>Upload</li>
                    <li>Notification</li>
                    <li>User Icon</li>
                    <button onClick={handleLogout}>Log out</button>
                </ul>
            </nav> */}
            <Navbar/>
            <div>
                <div>
                    <div>
                        <select>
                            <option>All Activity</option>
                            <option>Following</option>
                            <option>People</option>
                            <option>Groups</option>
                        </select>
                        <div>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                    <section>
                        <p></p>
                        <div>
                            <div>
                                <img></img>
                                <div>
                                    <img></img>
                                    <div>
                                        <a></a>
                                        <p></p>
                                    </div>
                                    <button>
                                        <svg></svg>
                                        <p>Follow</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button>View more</button>
                    </section>
                    <aside>
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
                    </aside>
                </div>


            </div>
        </HomeWrapper>
    )
}

export default Homepage;
