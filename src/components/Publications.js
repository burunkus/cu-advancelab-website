/**
 * @author Ebuka Okpala
 * Date: 06/12/2021
 */

import React, {Component} from 'react'

class Publications extends Component {
    render() {
        return (
          <div className="container-fluid">
              <div className="publication-bg">
                <div className="lab-container">
                <div className="title">
                  <h3>Publications</h3>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Paper title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Venenatis dignissim tortor. Fusce sed erat interdum, tempor eu iaculis id, molestie a dolor.</p>
                    <h6 className="card-subtitle mb-2 text-muted">Joe Doe, John Smith, Alice Smith, Jarden Allison</h6>
                    <a href="#" className="card-link">PDF</a>
                    <a href="#" className="card-link">Code</a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Paper title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Venenatis dignissim tortor. Fusce sed erat interdum, tempor eu iaculis id, molestie a dolor.</p>
                    <h6 className="card-subtitle mb-2 text-muted">Joe Doe, John Smith, Alice Smith, Jarden Allison</h6>
                    <a href="#" className="card-link">PDF</a>
                    <a href="#" className="card-link">Code</a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Paper title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Venenatis dignissim tortor. Fusce sed erat interdum, tempor eu iaculis id, molestie a dolor.</p>
                    <h6 className="card-subtitle mb-2 text-muted">Joe Doe, John Smith, Alice Smith, Jarden Allison</h6>
                    <a href="#" className="card-link">PDF</a>
                    <a href="#" className="card-link">Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
  }

export default Publications