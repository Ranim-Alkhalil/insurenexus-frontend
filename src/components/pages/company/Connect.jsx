import './design/_connect.css';
import logo from './image/logo.jpeg';




export default function Connect(props){
    return (
        <>
          <html lang="en">
    
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>connect</title>
            {/* FOR BOOTSTRAP*/}
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
              crossOrigin="anonymous"
            />
    
            <link rel="stylesheet" href="/connectpage/_connect.css" />
            {/* for icons*/}
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
          </head>
    
          <body>
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src={logo} alt="Logo" width="50" height="50" className="image-logo" />
                 <span style={{ color: 'white' }}>InsureNexus</span>
                </a>
              </div>
            </nav>
    

      

              <div className="text">
              <i class="ri-wechat-fill">Connect With Us</i> 
              </div>

              <div className="line"></div>
              
             <div className="info">

              <div className="phone">
               <i class="ri-phone-line">By phone</i> 
              </div>
             
            <br/>
              
           <div className="e-mail">
          <i class="ri-mail-send-line">By Email</i>
           </div>
            
            </div>
            
          </body>
    
          </html>
        </>
      );
    }