import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    increment = () => {
        if (this.state.count < this.props.max) {
            this.setState({ count: this.state.count + 1 })
        }
    }

    render() {
        const { max } = this.props;
        const { count } = this.state;
        return (
            <>
                <h1 data-testid="count-value">{count}</h1>
                <button disabled={count >= max} onClick={this.increment}>Increment</button>
                {count >= max && <h2 className="max__range">Max Range Reached</h2>}
            </>
        )
    }
}

export default ClassCounter
