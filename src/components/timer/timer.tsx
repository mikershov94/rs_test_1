import React from 'react';
import './timer.sass';

class Timer extends React.Component<TTimerProps> {
    private updateTime: () => void;
    private interval: NodeJS.Timeout | null;
    
    constructor(props: TTimerProps) {
        super(props);
        this.interval = null;

        this.updateTime = () => {
            this.props.updateTime();
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div className="timer">
                {this.props.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Timer;