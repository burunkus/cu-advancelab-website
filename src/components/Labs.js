/**
 * @author Ebuka Okpala
 * Date: 06/12/2021
 */

import React, {Component} from 'react'
import lab1 from '../lab_instructions/prediction.pdf'

class Labs extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div className="lab-container">
              <div className="title">
                <h3>Terms of Use</h3>
              </div>
              <div className="brief-intro">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet elit vitae leo posuere tincidunt. Nullam vel odio elementum, dapibus felis tempor, dapibus velit. Cras egestas suscipit felis, at varius arcu varius eu. Duis velit dolor, vulputate vel elit nec, venenatis dignissim tortor. Fusce sed erat interdum, commodo magna id, feugiat est. Proin erat mi, tempor eu iaculis id, molestie a dolor.
                </p>
              </div>
            </div>
            <div className="lab-bg">
              <div className="lab-container">
                <div className="title">
                  <h3>Current Labs</h3>
                </div>
                <dl>
                  <dt>Cyberbullying</dt>
                    <dd> 
                      - Cyberbully detection on text 
                      {/*<a onClick={(e) => this.handleClick(e)} className="btn btn-link" href="/instructions/prediction.pdf" rel='noopener noreferrer'>Intructions</a>*/}
                      <a className="btn btn-link" href={lab1} target="_blank">Intructions</a>
                      <a className="btn btn-link" href="#" target="_blank">Code</a>
                    </dd>
                    <dd> 
                      - Cyberbully detection on with hyparameter tuning
                      <a className="btn btn-link" href="#" target="_blank">Intructions</a>
                      <a className="btn btn-link" href="#" target="_blank">Code</a>
                    </dd>
                    <dd> 
                      - Cyberbully detection on image
                      <a className="btn btn-link" href="#" target="_blank">Intructions</a>
                      <a className="btn btn-link" href="#" target="_blank">Code</a>
                    </dd>
                </dl>
              </div>
            </div>
          </div>
        );
      }
  }

export default Labs