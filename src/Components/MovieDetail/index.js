import React from 'react';

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movie } = this.props;
        const { poster } = this.props;
        return (
            <div>
                { poster ? <img src={poster} style={{ 'width': '200px', 'marginTop': '10px' }}/> : null}
                { movie ? <h4>{movie}</h4> : null}
                
            </div>
        )
    }
}