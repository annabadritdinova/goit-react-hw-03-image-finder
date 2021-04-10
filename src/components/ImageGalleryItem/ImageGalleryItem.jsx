import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;

    return (
      <li className={styles.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          src={src}
          alt={alt}
          className={styles.ImageGalleryItemImage}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}