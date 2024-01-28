import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresdata = [
  {
    title: "เรียนด้วยความสนุกสนาน",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia vero totam architecto sint, repellendus deleniti quae, eum labore enim magni dolorem, illum accusantium blanditiis excepturi ipsa tempore ut at?",
  },
  {
    title: "เนื้อหาที่เข้าใจง่าย",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia vero totam architecto sint, repellendus deleniti quae, eum labore enim magni dolorem, illum accusantium blanditiis excepturi ipsa tempore ut at?",
  },
  {
    title: "การอธิบายที่เห็นภาพ",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia vero totam architecto sint, repellendus deleniti quae, eum labore enim magni dolorem, illum accusantium blanditiis excepturi ipsa tempore ut at?",
  },
  {
    title: "เป็นคอร์สเเรียนฟรี คุณภาพ",
    text: "ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia vero totam architecto sint, repellendus deleniti quae, eum labore enim magni dolorem, illum accusantium blanditiis excepturi ipsa tempore ut at?",
  },
];



function Features() {
  return (
    <div className="features" id="features">
      <div className="features-heading">
        <h1 className="gradient-text">เว็บนี้จะมีคลิปที่ผมจะสอนให้คุณเขียน MERN stack ได้อย่างเข้าใจและใช้ได้จริง</h1>
      </div>
      <div className="features-container">
        {/* ,อันข้างล่างคือfeaturesมันคืออันเดียวกับfeature เลยใช้componentมาจากfeature */}
      {featuresdata.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  );
}

export default Features;
