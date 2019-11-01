import React, { Component } from 'react';
import AppContext from '../AppContext';
import './ConfigIcon.css';
import Rating from './Rating';

class ConfigIcon extends Component {
    static contextType = AppContext;

    state = { 
    }

    render() { 
        const handleShowHideModal = this.context.showConfigWindow ? "display-block" : "display-none";
        const American = "American"
        return ( 
            <div id="config-window" className={handleShowHideModal}>

                {/* <form> */}
                    <h3>Stars</h3>
                    <div>
                        <Rating />
                    </div>

                    <h3>Category</h3>
                    <div className="formrow">
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="check1" 
                            id="check1" 
                            onChange={() => this.props.update(American)}
                        />
                        <label className="checklabel" htmlFor="check1">{American}</label>
                    </div>
                    <div className="formrow">
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="check2" 
                            id="check2" 
                        />
                        <label className="checklabel" htmlFor="check2">Mexican</label>
                    </div>

                    <h3>Open Now</h3>
                    <div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>   
                    </div>

                    {/* rename styling for these buttons */}
                    <div className='btn-signup-form-wrapper1'>
                        <button 
                            type="submit"
                            className="btn-signup-form"
                        >
                            All set!
                        </button>
                        </div>

                        <div className='btn-signup-form-wrapper2'>
                            <button 
                                type="reset" 
                                className="btn-signup-form"
                                onClick={this.context.hideModalForConfigWindow}
                        >
                            Never mind
                        </button>
                    </div>
                {/* </form> */}
            </div>
         );
    }
}
 
export default ConfigIcon;