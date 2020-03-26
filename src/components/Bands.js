import React from 'react'
import Band from './Band'

class Bands extends React.Component{

    render() {
        return (
            <div>
                {this.props.bands.map(band => <Band band={band} delete={this.props.delete} />)}
            </div>
        )
    }
}

export default Bands