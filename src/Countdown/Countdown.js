import React, { useEffect, useState } from 'react';

class Countdown extends React.Component {
    state = {
        count: 10,
    };

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            });
        }, 1000);
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                alert('Time over');
            }
        }
    }

    render() {
        return <div>{this.state.count}</div>;
    }
}

const NewCountDown = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    });
    return <div>{count}</div>;
};

export { Countdown, NewCountDown };
