import React from 'react';
import axios from 'axios';

import './index.css';
import MovieDetail from '../MovieDetail';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      wheelSpinning: null,
      movieDetail: null,
      moviePoster: null
    };
    this.selectItem = this.selectItem.bind(this);
  }

  async selectItem() {
    this.state.wheelSpinning = true;
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
      setTimeout(async () => {
        const { selectedItem } = this.state;
        const { items } = this.props;
        const movieTitle = items[selectedItem].split(' ').join('+')
        const detailData = await axios.get(process.env.REACT_APP_BASE_URL + `/movie-detail?title=${movieTitle}`).then(data => { return data});
        this.setState({movieDetail: detailData.data.Plot})
        this.setState({moviePoster: detailData.data.Poster})
        this.setState({wheelSpinning: false})
      }, 5000);
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
    <div>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {
        this.state.wheelSpinning ? null : <MovieDetail movie={this.state.movieDetail} poster={this.state.moviePoster}></MovieDetail>
      }
    </div>
      
    );
  }
}
