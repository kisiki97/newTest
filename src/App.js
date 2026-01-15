/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState( ['글제목1', '글제목2', '글제목3' ]);
  let [내용, 내용바뀐후] = useState(['내용1' , '내용3', '내용3']);

  function 내용바꾸기() {
    var 뉴어레이 = [...내용];
    뉴어레이[2] = '여잨코드변경';
    내용바뀐후(뉴어레이);
  }

  return (
    <div className="App Test">
      <div className='Header'>  머리  </div>
      <div className="Content">
         <div>
            <p>{ 글제목[0] }
              <button onClick={내용바꾸기} > 버튼 </button> </p>
            <p>{ 내용[0] }</p>
          </div>
          <div>
            <p>{ 글제목[1] } </p>
            <p>{ 내용[1] }</p>
          </div>
          <div>
            <p>{ 글제목[2] } </p>
            <p>{ 내용[2] }</p>
          </div>
          <div>
            <p>{ 글제목[3] } </p>
            <p>{ 내용[3] }</p>
          </div>
        </div>



        <Modal/>

      <div className="Footer">  발  </div>
    </div>
  );
}

function Modal(){
  return(
    <p>asd</p>
  )
}

export default App;
