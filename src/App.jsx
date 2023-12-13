import { useEffect, useRef, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [adviceTitle, setAdviceTitle] = useState("117")
  const [adviceContent, setAdviceContent] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.")

  const handleBtnClick = (e) => {
    axios.get("https://api.adviceslip.com/advice")
      .then((resp) => {
        console.log(resp.data.slip.id)
        console.log(resp.data.slip.advice)
        setAdviceTitle(resp.data.slip.id)
        setAdviceContent(resp.data.slip.advice)
      })
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", ()=>{
      handleResize()
    })
  })

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <div className="advice-title txt-small">
            ADVICE #{adviceTitle}
          </div>

          <div className="advice-content txt-large">
            "{adviceContent}"
          </div>

          <div className="advice-divider">
            {
              windowWidth > 1200 ? 
              <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
              : 
              <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            }
          </div>
          
          <div className="advice-generate">
            <a href='#' onClick={handleBtnClick}>
              <div id="dice" className="advice-btn-container">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
              </div>
            </a>
          </div>
        </div>

      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/ruperthnyagesoa/Me-To-Me-Talk">Ruperth Nyagesoa</a>.
      </div>
    </>
    
  )
}

export default App
