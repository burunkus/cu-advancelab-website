/**
 * @author Ebuka Okpala
 * Date: 06/12/2021
 */

import React, {Component} from 'react'
import { Link } from "react-router-dom";

class Home extends Component {
    /**
     * 
     * replace "lab-items-container" div (line 52-98) with this if images is not desired!
     * <div className="row">
                  <div className="custom-card">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Cyberbully Detection on Text</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Nullam vel odio elementum, dapibus felis tempor, dapibus velit.</p>
                        <Link to="/labs" className="btn btn-primary">Learn more</Link>
                      </div>
                    </div>
                  </div>
                  <div className="custom-card">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Cyberbully Detection on Images</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Nullam vel odio elementum, dapibus felis tempor, dapibus velit.</p>
                        <Link to="/labs" className="btn btn-primary">Learn more</Link>
                      </div>
                    </div>
                  </div>
                </div>
     */
    render() {
        return (
          <div className="container-fluid">
            <div className="lab-container">
              <div className="title">
                <h3>EAGER SaTc AI-Cybersecurity Lab ...</h3>
              </div>
              <div className="brief-intro">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Nullam vel odio elementum, dapibus felis tempor, dapibus velit. Cras egestas suscipit felis, at varius arcu varius eu. Duis velit dolor, vulputate vel elit nec, venenatis dignissim tortor. Fusce sed erat interdum, commodo magna id, feugiat est. Proin erat mi, tempor eu iaculis id, molestie a dolor.
                </p>
              </div>
            </div>
            <div className="home-bg">
              <div className="lab-container">
                <div className="title">
                  <h3>Labs</h3>
                </div>
                <div className="lab-items-container">
                  <div className="lab-item">
                    <div className="lab-image">
                      <a href="https://placeholder.com" target="_blank">
                        <img src={"https://via.placeholder.com/350x200"}/>  
                      </a>
                    </div>
                    <div className="lab-info-container">
                      <div className="lab-title">
                        <h2><Link to="/labs">Cyberbully Detection on Text</Link></h2>
                      </div>
                      <div className="lab-brief-intro">
                        <p>Maecenas quis blandit enim. Fusce efficitur fringilla suscipit. Praesent vel pellentesque metus. Nullam tincidunt erat id dictum mollis. In pulvinar eget ante et dignissim. Integer</p>
                      </div>
                    </div>
                  </div>
                  <div className="lab-item">
                    <div className="lab-image">
                      <a href="https://placeholder.com" target="_blank">
                        <img src={"https://via.placeholder.com/350x200"}/>  
                      </a>
                    </div>
                    <div className="lab-info-container">
                      <div className="lab-title">
                        <h2><Link to="/labs">Cyberbully Detection on Image</Link></h2>
                      </div>
                      <div className="lab-brief-intro">
                        <p>Maecenas quis blandit enim. Fusce efficitur fringilla suscipit. Praesent vel pellentesque metus.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lab-item">
                    <div className="lab-image">
                      <a href="https://placeholder.com" target="_blank">
                        <img src={"https://via.placeholder.com/350x200"}/>  
                      </a>
                    </div>
                    <div className="lab-info-container">
                      <div className="lab-title">
                        <h2><Link to="/labs">Cyberbully Detection on Video</Link></h2>
                      </div>
                      <div className="lab-brief-intro">
                        <p>Maecenas quis blandit enim. Fusce efficitur fringilla suscipit. Praesent vel pellentesque metus. Nullam tincidunt erat id dictum mollis. In pulvinar eget ante et dignissim. Integer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span><Link to="/labs">View more</Link></span>
              </div>
            </div>
          </div>
        );
      }
  }

export default Home