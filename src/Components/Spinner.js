import React, { Component } from 'react';
import Loader from './Loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img 
          src={Loader} 
          alt="loading" 
          style={{ width: '100px', height: '100px', backgroundColor: 'transparent' }} 
        />
      </div>
    );
  }
}

export default Spinner;
