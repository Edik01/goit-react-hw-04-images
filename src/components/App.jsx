import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'API/apiPixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
export class App extends Component {
  state = {
    word: '',
    hits: [],
    page: 1,
    showLoadMore: false,
    isLoading: false,
  };
  async componentDidUpdate(prevProp, prevState) {
    if (
      prevState.word !== this.state.word ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const {
          data: { hits, totalHits },
        } = await fetchImages({ word: this.state.word, page: this.state.page });
        if (hits.length === 0)
          return alert(`Nothing was found for your request ${this.state.word}`);
        this.setState(prev => ({
          hits: [...prev.hits, ...hits],
          showLoadMore: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleSubmit = word => {
    this.setState({ word, page: 1, showLoadMore: false, hits: [] });
  };
  handleClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar handleSubmit={this.handleSubmit}></Searchbar>
        {this.state.hits && <ImageGallery hits={this.state.hits} />}
        {this.state.showLoadMore && (
          <Button handleClick={this.handleClick}>Load More</Button>
        )}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
