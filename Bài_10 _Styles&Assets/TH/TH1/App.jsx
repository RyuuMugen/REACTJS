import React from 'react';
import photo1 from './0.jpg';
import Logo from './logo.svg';
import { base64Photo } from './Constant';
import DeleteIcon from './DeleteIcon';
export default function App() {
  return (
    <div>
      <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
      <img src={photo1} width="200" height="100" className='img' />
      <div className='require-title'>Đây là ảnh dùng require</div>
      <img src={require('./0.jpg')} className='img2' />
      <div className='require-title'>Đây là ảnh dùng link online</div>
      <img src='https://upload.wikimedia.org/wikipedia/vi/d/da/Honkai_Impact_3rd_logo.png' className='img2' />
      <div className='require-title' >Đây là ảnh dùng svg</div>
      <img src={Logo} width="200" height="100" className='img3' />
      <div className='require-title'>Đây là ảnh dùng base64</div>
      <img src={base64Photo} width="200" height="100" className='img3' />
      <DeleteIcon />
    </div>
  );
}