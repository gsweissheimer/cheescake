import React, { Component } from 'react';
import ReactDOM from 'react-router-dom';

import ContentLoader, { Facebook } from "react-content-loader";

const HeaderLoader = (props) => (
    <ContentLoader 
        speed={2}
        width={1170}
        height={56}
        viewBox="0 0 1170 56"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1000" y="27" rx="3" ry="3" width="52" height="6" /> 
        <circle cx="40" cy="28" r="20" /> 
        <rect x="465" y="27" rx="3" ry="3" width="52" height="6" /> 
        <rect x="391" y="26" rx="3" ry="3" width="52" height="6" />
  </ContentLoader>
)

export default class Loader extends Component {
    
    render() {

        return (

            <div id="headerLoader">

              <HeaderLoader />

            </div>

        )}

}