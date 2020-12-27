import React, {Component} from 'react'
import Notifications from './Notification';
import Buzzlist from '../buzz/BuzzList';
import { connect } from 'react-redux';


class Dashboard extends Component {
    render() {
        console.log(this.props);
        const {buzz} = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Buzzlist buzz = {buzz}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
        }
    }

const mapStateToProps = (state) => {
    return({
        buzz: state.buzz.buzz
    })
}

export default connect(mapStateToProps)(Dashboard)