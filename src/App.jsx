
import './App.css'

function App() {
  
  const qrImageUrl = '/assets/images/image-qr-code.png'


  return (
    <div className="app">
      
      <div className='qr-fondo'>

         
          <img className='imgbox' src={qrImageUrl} alt="codigo-qr" />  

          <p className='primer-parrafo'>Improve your front-end skills by building projects</p>

          <p className='segundo-parrafo'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      

      </div>
      
     
      
      <p className="read-the-docs">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/sebastianlm7" target="_blank">Sebastian Lopez Meyer</a>
      </p>
    </div>
  )
}

export default App
