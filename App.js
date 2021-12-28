import React from "react";
import "./App.css";
import notification from "./Pictures/notification.png";
import inbox from "./Pictures/inbox.png";
import logo from "./Pictures/logo.png";
import video from "./Pictures/video.png";
import profile from "./Pictures/profile-pic.png";
import search from "./Pictures/search.png";
import news from "./Pictures/news.png";
import friends from "./Pictures/friends.png";
import group from "./Pictures/group.png";
import marketplace from "./Pictures/marketplace.png";
import watch from "./Pictures/watch.png";
import short1 from "./Pictures/shortcut-1.png";
import short2 from "./Pictures/shortcut-2.png";
import short3 from "./Pictures/shortcut-3.png";
import short4 from "./Pictures/shortcut-4.png";
import advertisement from "./Pictures/advertisement.png"
import mem1 from "./Pictures/member-1.png";
import mem2 from "./Pictures/member-2.png";
import mem3 from "./Pictures/member-3.png";
import mem4 from "./Pictures/member-4.png"
import upload from "./Pictures/upload.png";
import profile_pic from "./Pictures/profile-pic.png";
import photo from "./Pictures/photo.png";
import feeling from "./Pictures/feeling.png"
import live_video from "./Pictures/live-video.png";
import feed_img1 from "./Pictures/feed-image-1.png";
import feed_img2 from "./Pictures/feed-image-2.png";
import feed_img3 from "./Pictures/feed-image-3.png";
import feed_img4 from "./Pictures/feed-image-4.png";
import feed_img5 from "./Pictures/feed-image-5.png";
import like_blue from "./Pictures/like-blue.png";
import like from "./Pictures/like.png";
import comment from "./Pictures/comments.png";
import share from "./Pictures/share.png";
import feedback from "./Pictures/feedback.png";
import setting from "./Pictures/setting.png";
import arrow from "./Pictures/arrow.png";
import help from "./Pictures/help.png";
import display from "./Pictures/display.png";
import logout from "./Pictures/logout.png";
import location from "./Pictures/location.png"




class App extends React.Component {
  
  state={settingsMenuToggle : false, darkbtn : false}
  settingsMenuToggle = (toggle) => {
    this.setState({settingsMenuToggle:!this.state.settingsMenuToggle})
  }
  render() {
    return (
    <>
    <html>
      <nav>
        <div className="nav-left">
          <img src={logo} className="logo"/>
            <ul>
              <li><img src={notification}/></li>
              <li><img src={inbox}/></li>
              <li><img src={video}/></li>
            </ul>
        </div>
        <div class="nav-right">
          <div className="search-box">
            <img src={search}/>
            <input type="text" placeholder="Search"/>
          </div>
          <div className="nav-user-icon online" onClick={this.settingsMenuToggle}>
          <img src={profile}/>
          </div>
        </div>
        {this.state.settingsMenuToggle && <div className="settings-menu">
          <div className="settings-menu-inner">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <a href="#">See Your Profile</a>
              </div>
            </div>
            <div className="pro"></div>
              <div className="user-profile">
                <img src={feedback}/>
                <div>
                  <p>John Nicholson</p>
                  <a href="#">Help us to improve the design</a>
                </div>
              </div>
              <div className="pro"></div>
              <div className="settings-links">
                <img src={setting}/>
                <a href="#">Settings & Privacy <img style={{width : "10px"}} src={arrow}/></a>
              </div>
              <div className="settings-links">
                <img src={help}/>
                <a href="#">Help & Support<img style={{width : "10px"}} src={arrow}/></a>
              </div>
              <div className="settings-links">
                <img src={display}/>
                <a href="#">Display & Accessibity<img style={{width : "10px"}} src={arrow}/></a>
              </div>
              <div className="settings-links">
                <img src={logout}/>
                <a href="#">Logout<img style={{width : "10px"}} src={arrow}/></a>
              </div>
          </div>
        </div>
        }
      </nav>
      <div className="container">
        <div className="left-sidebar">
          <div className="imp-links">
            <a href="#"><img src={news}/>Latest News</a>
            <a href="#"><img src={friends}/>Friends</a>
            <a href="#"><img src={group}/>Group</a>
            <a href="#"><img src={marketplace}/>Market Place</a>
            <a href="#"><img src={watch}/>Watch</a>
            <a href="#">See More</a>
          </div>
          <div className="shortcut-links">
            <p>Your Shortcuts</p>
            <a href="#"><img src={short1}/>Web Developers</a>
            <a href="#"><img src={short2}/>Web Design Course</a>
            <a href="#"><img src={short3}/>Full Stack</a>
            <a href="#"><img src={short4}/>Website Experts</a>
            
          </div>
        </div>

        <div className="main-container">
          <div className="story-gallery">
            <div className="story story1">
              <img src={upload}/>
              <p>Post Story</p>
            </div>
            <div className="story story2">
              <img src={mem1}/>
              <p>Allison</p>
            </div>
            <div className="story story3">
              <img src={mem2}/>
              <p>Jackson</p>
            </div>
            <div className="story story4">
              <img src={mem3}/>
              <p>Samona</p>
            </div>
            <div className="story story5">
              <img src={mem4}/>
              <p>John Doe</p>
            </div>
          </div>
          <div className="write-post-container">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <small>Public</small>
              </div>
            </div>
            <div className="post-input-container">
              <textarea rows={3} placeholder="what's on your mind, John?"></textarea>
              <div className="add-post-links">
                <a href="#"><img src={live_video}/>Live Video</a>
                <a href="#"><img src={photo}/>Photo/Video</a>
                <a href="#"><img src={feeling}/>Feeling/Activity</a>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <small>November 20 2021, 11:40 AM</small>
              </div>
            </div>
            <p className="post-text">Hi I'm a Developer. Subscribe <span>@Dev Hacks</span> my YouTube Channel to get cool UI design tricks.<a href="#">#Easy Tutorial</a> <a href="#">#YouTube Channel</a></p>
            <img src={feed_img1} className="post-img"/>
            <div className="post-row">
              <div className="activity-icons">
                <div><img src={like_blue}/>120</div>
                <div><img src={comment}/>45</div>
                <div><img src={share}/>20</div>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <small>November 22 2021, 07:40 AM</small>
              </div>
            </div>
            <p className="post-text">Hi I'm a Developer. Like, Comment & Share <span>@Dev Hacks</span> Follow my YouTube Channel to get cool UI design tricks.<a href="#">#Easy Tutorial</a> <a href="#">#YouTube Channel</a></p>
            <img src={feed_img2} className="post-img"/>
            <div className="post-row">
              <div className="activity-icons">
                <div><img src={like_blue}/>340</div>
                <div><img src={comment}/>55</div>
                <div><img src={share}/>28</div>
              </div>
              <div className="post-profile-icon">
                <img src={profile_pic}/>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <small>November 25 2021, 08:13 PM</small>
              </div>
            </div>
            <p className="post-text">Like, Comment, Share & tag <span>@Dev Hacks</span> Share with your friends & Follow my YouTube Channel to get cool UI design tricks.Ask your doubts in Comment Section.<a href="#">#Easy Tutorial</a> <a href="#">#YouTube Channel</a></p>
            <img src={feed_img3} className="post-img"/>
            <div className="post-row">
              <div className="activity-icons">
                <div><img src={like}/>130</div>
                <div><img src={comment}/>55</div>
                <div><img src={share}/>24</div>
              </div>
              <div className="post-profile-icon">
                <img src={profile_pic}/>
              </div>
            </div>
          </div>
          
          <div className="post-container">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <small>November 25 2021, 08:13 PM</small>
              </div>
            </div>
            <p className="post-text">Like, Comment, Share & tag <span>@Dev Hacks</span> Share with your friends & Follow my YouTube Channel to get cool UI design tricks.Ask your doubts in Comment Section.<a href="#">#Easy Tutorial</a> <a href="#">#YouTube Channel</a></p>
            <img src={feed_img4} className="post-img"/>
            <div className="post-row">
              <div className="activity-icons">
                <div><img src={like}/>430</div>
                <div><img src={comment}/>135</div>
                <div><img src={share}/>84</div>
              </div>
              <div className="post-profile-icon">
                <img src={profile_pic}/>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="user-profile">
              <img src={profile_pic}/>
              <div>
                <p>John Nicholson</p>
                <small>November 25 2021, 11:13 PM</small>
              </div>
            </div>
            <p className="post-text">Like, Comment, Share & tag <span>@Dev Hacks</span> Share with your friends & Follow my YouTube Channel to get cool UI design tricks.Ask your doubts in Comment Section.<a href="#">#Easy Tutorial</a> <a href="#">#YouTube Channel</a></p>
            <img src={feed_img5} className="post-img"/>
            <div className="post-row">
              <div className="activity-icons">
                <div><img src={like}/>90</div>
                <div><img src={comment}/>65</div>
                <div><img src={share}/>14</div>
              </div>
              <div className="post-profile-icon">
                <img src={profile_pic}/>
              </div>
            </div>
          </div>
          <button className="load-more-btn" type="button">Load More</button>
        </div>

        <div className="right-sidebar">
          <div className="sidebar-title">
            <h4>Events</h4>
            <a href="#">See All</a>
          </div>
          <div className="event">
            <div className="left-event">
              <h3>03</h3>
              <span>November</span>
            </div>
            <div className="right-event">
              <h4>Social Media</h4>
              <p><img src={location}/> Willson Tech Park</p>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="event">
            <div className="left-event">
              <h3>10</h3>
              <span>December</span>
            </div>
            <div className="right-event">
              <h4>Social Media</h4>
              <p><img src={location}/> Dev Tech Park</p>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="sidebar-title">
            <h4>Advertisement</h4>
            <a href="#">Close</a>
          </div>
          <img src={advertisement} className="sidebar-ads"/>
          <div className="sidebar-title">
            <h4>Conversation</h4>
            <a href="#">Hide Chat</a>
          </div>
          <div className="online-list">
            <div className="online">
              <img src={mem1}/>
            </div>
            <p>Alison Mina</p>
          </div>
          <div className="online-list">
            <div className="online">
              <img src={mem2}/>
            </div>
            <p>Jackson Aston</p>
          </div>
          <div className="online-list">
            <div className="online">
              <img src={mem3}/>
            </div>
            <p>Samona Rose</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright 2021 - Dev Hack YouTube Channel</p>
      </div>
      </html>
  </>
  );
}
}

export default App;

