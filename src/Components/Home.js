import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <div className='homePage'>
      <div className='postContents'>
        <div className='postHeader'>
          <h1>タイトル</h1>
        </div>
      <div className='postTextContainer'>
          今はReactの学習中です。これから頑張って一人前のエンジニアになって活躍したいです。
      </div>
      <div className='nameAndDeleteButton'>
        <h3>@rikito</h3>
        <button>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Home