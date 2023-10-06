import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'API/apiPixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { useEffect, useState } from 'react';
export const App = () => {
  const [word, setWord] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getImages = async () => {
      try {
        const {
          data: { hits, totalHits },
        } = await fetchImages({ word, page });
        if (hits.length === 0)
          return alert(`Nothing was found for your request ${this.state.word}`);
        setHits(prev => [...prev, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, word]);

  const handleSubmit = word => {
    setWord(word);
    setPage(1);
    setShowLoadMore(false);
    setHits([]);
  };
  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar handleSubmit={handleSubmit}></Searchbar>
      {hits && <ImageGallery hits={hits} />}
      {showLoadMore && <Button handleClick={handleClick}>Load More</Button>}
      {isLoading && <Loader />}
    </div>
  );
};
