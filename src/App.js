import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import imagesServices from './services/imagesServices';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';

class App extends Component {
  constructor(props){
    super(props) 
    this.listRef = React.createRef();
  }

    state = {
    imageName: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      prevState.images.length < this.state.images.length &&
      this.state.currentPage > 2
    ) {
      const list = this.listRef.current +1; 
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.imageName !== this.state.imageName) {
      this.fetchImages();
    }
    if (snapshot !== null && this.state.currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onChangeQuery = imageName => {
    this.setState({
      imageName,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { imageName, currentPage } = this.state;
    const options = { imageName, currentPage };

    

    this.setState({ isLoading: true });

    imagesServices
      .fetchImagesAPI(options)
      .then(images => {
        this.setState(prevState => ({ 
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
          
        }));
        
      })
      
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        {error && <p>something went wrong: {error.message}</p>}

        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={this.state.images} />

        {isLoading && <Loader />}

        {shouldRenderLoadMoreButton && (
          <Button fetchImages={this.fetchImages} />
        )}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default App;