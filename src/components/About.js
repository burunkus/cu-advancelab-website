/**
 * @author Ebuka Okpala
 * Date: 06/12/2021
 */

import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div className="lab-container">
              <div className="title">
                <h3>About us </h3>
              </div>
              <div className="brief-intro">
                <p>
                EAGER SaTc AI-Cybersecurity Lab is .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Nullam vel odio elementum, dapibus felis tempor, dapibus velit. Cras egestas suscipit felis, at varius arcu varius eu. Duis velit dolor, vulputate vel elit nec, venenatis dignissim tortor. Fusce sed erat interdum, commodo magna id, feugiat est. Proin erat mi, tempor eu iaculis id, molestie a dolor.
                </p>
              </div>
            </div>
            <div className="team-bg">
              <div className="lab-container">
                  <div className="title">
                    <h3>The Team</h3>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-3 g-4">
                    <div className="col">
                      <div className="card h-100">
                        <img src="https://via.placeholder.com/215x180" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text"> Name here</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100">
                        <img src="https://via.placeholder.com/215x180" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text">Name here</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100">
                        <img src="https://via.placeholder.com/215x180" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text">Name here</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100">
                        <img src="https://via.placeholder.com/215x180" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text">Name here</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        );
      }
  }

export default About