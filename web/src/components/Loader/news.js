import React, { Component } from 'react';
import ReactDOM from 'react-router-dom';

import ContentLoader, { Facebook } from "react-content-loader";

import './style.css'

const NewsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={360}
    viewBox="0 0 300 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)

export default class Loader extends Component {
    
    render() {

        return (

            <div id="newsLoader">

              <NewsLoader />

              <NewsLoader />

              <NewsLoader />

              <NewsLoader />

              <NewsLoader />

              <NewsLoader />

            </div>

        )}

}