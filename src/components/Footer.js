/**
 * @author Ebuka Okpala
 * Date: 06/12/2021
 */

import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
          <div className="container-fluid">
            <footer className="lab-container footer">
              <div className="line">
              &copy; <time dateTime="12-10-2021">2021</time> EAGER SaTC AI-Cybersecurity Lab
              </div>
            </footer>
          </div>
        );
      }
  }

export default Footer