import React, { Component } from 'react';
import AppContext from '../AppContext';
import './ConfigIcon.css';
import Rating from './Rating';

class ConfigIcon extends Component {
    static contextType = AppContext;

    state = { 
        american: "American", 
        mexican: "Mexican", 
        fastfood: "Fastfood", 
        isOn: false 
    }

    handleSwitch = () => {
        this.setState(prevState => ({ isOn: !prevState.isOn }), () =>
            this.props.updateIsOpen(this.state.isOn)
        );
    }

    handleSubmitFilters(e) {
       // e.preventDefault();     
    }

    render() { 
        const handleShowHideModal = this.context.showConfigWindow ? "display-block" : "display-none";

        const {american, mexican, fastfood} = this.state;

        const isOnLabel = this.state.isOn ? "YES" : "NO";
       
        return ( 
            <div id="config-window" className={handleShowHideModal}>

                <form>
                    <h3>Stars</h3>                    
                    <div>
                        <Rating updateStars={this.props.updateStars} />
                    </div>
                     
                    <h3>Category</h3>
                    <div className="formrow">
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="check1" 
                            id="check1" 
                            onChange={() => this.props.updateCategory(american)}
                        />
                        <label className="checklabel" htmlFor="check1">{american}</label>
                    </div>
                    <div className="formrow">
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="check2" 
                            id="check2" 
                            onChange={() => this.props.updateCategory(mexican)}
                        />
                        <label className="checklabel" htmlFor="check2">{mexican}</label>
                    </div>

                    <div className="formrow">
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="check3" 
                            id="check3" 
                            onChange={() => this.props.updateCategory(fastfood)}
                        />
                        <label className="checklabel" htmlFor="check3">{fastfood}</label>
                    </div>

                    <h3>Open Now</h3>
                    <div>
                        <label className="switch">
                            <input type="checkbox" onClick={this.handleSwitch} />
                            <span className="slider round"></span>
                        </label>
                        {isOnLabel}   
                    </div>

                    {/* rename styling for these buttons */}
                    <div className='btn-signup-form-wrapper1'>
                        <button 
                            type="button"
                            className="btn-signup-form"
                            onClick={this.context.hideModalForConfigWindow}
                        >
                            All set!
                        </button>
                        </div>

                        <div className='btn-signup-form-wrapper2'>
                            <button 
                                type="button" 
                                className="btn-signup-form"
                                onClick={this.context.hideModalForConfigWindow}
                        >
                            Never mind
                        </button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default ConfigIcon;