import React from 'react';
import './timer-page.sass';
import Timer from '../timer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTime } from '../../actions';

const mapStateToProps = (state: TStateApp) => {
    return {
        time: state.time
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ updateTime }, dispatch)
}

class TimerPage extends React.Component<TTimerProps> {
    render() {
        return(
            <div className="timer-page">
                <Timer time={this.props.time}
                       updateTime={this.props.updateTime} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);