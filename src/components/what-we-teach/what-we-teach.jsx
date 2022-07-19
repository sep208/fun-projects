import React from 'react';
import './what-we-teach.css'

const What = () => (
 <div className="what-we-teach">
    <h1 className="what-title">What We Teach</h1>
    <p className="subtitle">We know you don't want to learn outdated things so we teach some of the more modern coding skills!</p>
    <hr></hr>
    <div className="text-image-div-what">
      <div className="subtitle-div-what">  <img src="python.png" className="image-div-item python-image-what" alt="" /> <p className="image-subtitle-what python-image-subtitle-what">Python ahh yes so many companys use python including Facebook Google Amozon Dropbox Youtube and so many more for a reason it is accessible and easy to use and powerful!</p></div>
      <div className="subtitle-div-what"> <img src="html.png" className="image-div-item html-image-what" alt="" /><p className="image-subtitle-what html-image-subtitle-what">HTML all websites are some form of it even companys like instagram Facebook Google Amozon pretty much every website!</p></div>
      <div className="subtitle-div-what"> <img src="css.png" className="image-div-item css-image-what" alt="" /> <p className="image-subtitle-what CSS-image-subtitle-what">CSS that is styling without it all websites would look really really bad! It is the styling on all of your websites a must need for Web development.</p></div>
      <div className="subtitle-div-what"> <img src="js.png" className="image-div-item js-image-what" alt="" /> <p className="image-subtitle-what JS-image-subtitle-what">JS(my personal favorite) it can be used for so many things including functionality on a website pretty much all big companys use it.</p></div>
    </div>
 </div>
)

export default What;