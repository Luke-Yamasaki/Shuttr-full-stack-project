import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
`;



const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
      <Redirect to="/welcome" />
    );

    return (
        <div>
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>You</li>
                    <li>Explore</li>
                    <li>Search Bar</li>
                    <li>Upload</li>
                    <li>Notification</li>
                    <li>User Icon</li>
                </ul>
            </nav>
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
        </div>
    )
}

export default Homepage;
