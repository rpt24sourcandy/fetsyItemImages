import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';
import axios from 'axios';
import { useParams } from 'react-router';


let getImagesById =  ()=>{
  let url = window.location.href;
  url = url.split('/');
  console.log('URL, ', url);
  let id = url[4];

  axios.get(`/item/${id}/images`)
  .then((res)=>{
    console.log('DATA ', res.data);
    ReactDOM.render(<Slider slides={res.data}/>, document.getElementById('images'));
  });
}

getImagesById();
