import React from 'react'
import style from '../Styles/page.module.css';
import searchIcon from '../Images/Component 32.png'
import filterIcon from '../Images/Component 39 (2)@2x.png';
import homeIcon from '../Images/home@2x.png'
import notificationIcon from '../Images/notification@2x.png'
import shopIcon from '../Images/heart@2x.png';
import messageIcons from '../Images/message@2x.png'
import walletIcon from '../Images/message.png'
import subscriptionIcons from '../Images/favorite@2x.png'
import myprofileIcons from '../Images/profile@2x.png'
import settingsIcons from '../Images/setting@2x.png'
import logoutIcons from '../Images/logout@2x.png'
import girlsPic from '../Images/pexels-ali-pazani-2613260.png'
import pic from '../Images/pexels-humphrey-muleba-2045248@2x.png'
import shareIcons from '../Images/share@2x.png'
import commentIcons from '../Images/comment@2x.png'
import heartsIcons from '../Images/heart icons jpg.png'
import men from '../Images/men pic.png'
import doll from '../Images/dolls.png'
import pexelsman from '../Images/pexels-anastasia-man.png'
import pxelSky from '../Images/pexels-sky.png'
import pexelsgenaro from '../Images/pexels-genaro.png'
import pexelsandrea from '../Images/pexels-andrea-piacquadio-3771118.png'

import pexelspixabay from '../Images/pexels-pixabay.png';
import pexelsantoni from '../Images/pexels-antoni.png'
import { Link } from 'react-router-dom';


const Page = () => {
    return (
        <section className={style.MC}>
            <article className={style.TopNav}>
                <h1>LOGO</h1>
                <label htmlFor=""><img src={searchIcon} alt="images" className={style.searchIcons} /> <input type="text" placeholder='Search Here' /> <img src={filterIcon} alt="images" className={style.filtericons} /> <span>filter</span></label>
                <a href="">Become a Seller</a>
            </article>

            <article className={style.MainContent}>
                <div className={style.Nav}>
                    <div>
                        <a href="#"><img src={notificationIcon} alt="Images" /> Notification</a>
                        <Link to='/page'><img src={homeIcon} alt="Images" /> Home</Link>
                        <a href="#"><img src={shopIcon} alt="Images" /> Shop</a>
                        <a href="#"> <img src={messageIcons} alt="Images" />Converstion</a>
                        <a href="#"><img src={walletIcon} alt="Images" /> Wallet</a>
                        <a href="#"><img src={subscriptionIcons} alt="" />Subscription</a>
                        <a href="#"><img src={myprofileIcons} alt="Images" /> My Profile</a>
                        <a href="#"><img src={settingsIcons} alt="Images" /> Settings</a>
                        <Link to='/' id={style.logout}> <img src={logoutIcons} alt="Images" />Logout</Link>
                    </div>
                    <h1 className={style.LD}>2022©logo name <span>Developed by ivan Infotech</span></h1>
                </div>

                {/* -------------------------------------- */}
                <div className={style.Content}>

                    <div>
                        <article className={style.PicContainer}>
                            <div className={style.div1}>
                                <img src={girlsPic} alt="" />
                                <h1>Lara Leons <span>@thewallart</span></h1>
                            </div>
                            <div className={style.div2}>
                                <h1>...</h1>
                            </div>
                        </article>

                        <article className={style.PC}>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span>Read More</span></p>
                            <img src={pic} alt="" />

                            <h1><img src={heartsIcons} alt="Images" />9.8k <img src={commentIcons} alt="Images" />8k <img src={shareIcons} alt="Images" />7.2k</h1>
                        </article>
                    </div>



                    {/* ------------------------------------ */}
                    <div>

                        <article className={style.PicContainer}>
                            <div className={style.div1}>
                                <img src={men} alt="" />
                                <h1>Lara Leons <span>@thecustomcreater</span></h1>
                            </div>
                            <div className={style.div2}>
                                <h1>...</h1>
                            </div>
                        </article>

                        <article className={style.PC}>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span>Read More</span></p>
                            <img src={doll} alt="" />

                            <h1><img src={heartsIcons} alt="Images" />8.8k <img src={commentIcons} alt="Images" />23k <img src={shareIcons} alt="Images" />1.2k</h1>
                        </article>
                    </div>
                </div>

                {/*--------------------------- side footer ---------------------*/}

                <div className={style.Bio}>
                    <h1>Artist <span>Photographers</span></h1>
                    <article>

                        <img src={pxelSky} alt="Images" />

                        <div className={style.PMC}>
                            <img src={pexelsman} alt="" />
                            <h1>Thomas Edward <span>@thewildwithyou</span></h1>
                        </div>
                    </article>
                    {/* ------------------------------- */}
                    <article>

                        <img src={pexelsgenaro} alt="Images" />

                        <div className={style.PMC}>
                            <img src={pexelsandrea} alt="" />
                            <h1>Thomas Edward <span>@thewildwithyou</span></h1>
                        </div>
                    </article>
                    {/* ----------------------------------------- */}
                    <article>

                        <img src={pexelspixabay} alt="Images" />

                        <div className={style.PMC}>
                            <img src={pexelsantoni} alt="" />
                            <h1>Thomas Edward <span>@thewildwithyou</span></h1>
                        </div>
                    </article>

                    <h1 id={style.PTC}> Privacy <span>Terms of Service </span><span>Cookie Notice</span></h1>

                </div>
            </article>
        </section>
    )
}

export default Page
