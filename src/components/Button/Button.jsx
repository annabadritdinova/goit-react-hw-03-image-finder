import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  static propTypes = { fetchImages: PropTypes.func.isRequired };

  render() {
    return (
      <button onClick={this.props.fetchImages} className={styles.Button}>
        Load more
      </button>
    );
  }
}

export default Button;