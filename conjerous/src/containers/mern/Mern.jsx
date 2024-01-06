import React from 'react'
import './mern.css'
import { Feature } from '../../components'
function Mern() {
  return (
    <div className="mern section__margin" id = "MERN">
      <div className="mern-feature">
        <Feature title="MERN stack คือ??" text="MEAN Stack คือ JavaScript Framework ที่ใช้สำหรับการพัฒนาเว็บไซต์ โดยจะใช้ JavaScript เป็นหลัก โดยที่ตัวอักษรแต่ละตัวมีที่มาคือ

M มาจาก MongoDB เป็น NoSQL Database (Not Only SQL) ที่กำลังได้รับความนิยมอยู่ในขณะนี้

E มาจาก ExpressJS เป็น JavaScript Framework ตัวหนึ่งที่ทำงานอยู่ใน Node.js

A มาจาก Angular.js เป็น Front-end JavaScript Framework ที่พัฒนาโดย Google ซึ่งจะทำงานในฝั่ง Client เป็นหลัก

N มาจาก Node.js เป็น Back-end JavaScript Framework ที่นิยมเอาไว้ทำงานในฝั่ง Serverช้ในการประกอบอาชีพและพัฒนาตัวเองต่อไป"/>
      </div>
      <div className="mern-heading">
        <h1 className="gradient-text">MERN THE NEXT STEP OF PROGRAMMING</h1>
        <p>Explore the library</p>
      </div>
      <div className="mern-container">
        <Feature title="NODE JS " text="NodeJS คือ Cross Platform Runtime Environment สำหรับฝั่ง Server เป็น Open Source และ Library ที่ใช้สำหรับพัฒนาเว็บแอปพลิเคชันต่าง ๆ ด้วยภาษา JavaScript"/>
        <Feature title = "MongoDB" text="MongoDB เป็น NoSQL Database ที่สามารถใช้ข้าม Platform ได้ ซึ่งหลายคนอาจจะสงสัยว่าแล้ว NoSQL มันคืออะไร NoSQL มันคือการเข้าถึงข้อมูลต่างๆ โดยจะใช้เทคนิคของการดึงข้อมูลผ่าน Key Pair Value ซึ่งข้อดีของตัวนี้เราจะพูดในหัวข้อถัดไป โดยหลักๆ ก็คือมันจะเหมาะกับองค์กรที่อยากจะเข้าถึงข้อมูลได้อย่างรวดเร็ว อีกทั้งยังเหมาะกับการทำ Big Data อีกด้วย"/>
        <Feature title = "ExpressJs" text="Express.js คือ framework ที่ถูกพัฒนามาจากโมดูล http ของ Node.js แต่จะมาช่วยให้เราสามารถจัดการ Routing ได้ง่ายขึ้น สนับสนุนการทำ Middleware ทำงานได้รวดเร็ว มีประสิทธิภาพ  "/>
        <Feature title = "ReactJS" text="React เป็น JavaScript library ที่ใช้สำหรับสร้าง user interface ที่ให้เราสามารถเขียนโค้ดในการสร้าง UI ที่มีความซับซ้อนแบ่งเป็นส่วนเล็กๆออกจากกันได้ ซึ่งแต่ละส่วนสามารถแยกการทำงานออกจากกันได้อย่างอิสระ และทำให้สามารถนำชิ้นส่วน UI เหล่านั้นไปใช้ซ้ำได้อีก"/>
      </div>
    </div>
  )
}

export default Mern