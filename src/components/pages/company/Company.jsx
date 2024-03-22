
/*images */
import logo from './image/logo.jpeg';
import cover from './image/cover.jpg';
import company from './image/company.jpg';

import './design/Style.css';



export default function Company(props) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>company_page</title>
         
          {/* for icons*/}
          <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
          {/* FOR BOOTSTRAP*/}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
          />
        </head>

        <body >
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="50" height="50" className="image-logo"  />
                  <span style={{ color: 'white' }}>InsureNexus</span>
               
              </a>
            </div>
          </nav>
        

          <div className="page">
            <div className="cover">
              <img src={cover} alt="" />
            </div>
{/* for line under the cover photo */}
            <div className="line"></div>

            <div className="compay_image">
              <img src={company} alt="" />
              <caption>
                <div className="c_name">
                  <span>Company Name</span>
                  <div className="box_info">
                    company infoooo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, incidunt! Ducimus
                    accusantium quaerat voluptatibus pariatur, tempore iste distinctio eveniet enim? Distinctio vitae
                    assumenda ad nostrum odit, adipisci incidunt voluptatibus repudiandae.
                  </div>
                </div>
              </caption>
            </div>


            <div className="cards">
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <i className="ri-hospital-line"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Health</h5>
                      <p className="text"  >
                        .....Insurance - Jordan offers medical insurance programs specifically designed to meet the needs of
                        all institutions and individuals in Jordan, through medical insurance programs that aim to provide
                        the highest level of insurance protection for individuals and their families in the face of the
                        continuous escalation in medical treatment costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <i className="ri-car-line"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Cars</h5>
                      <p className="text">
                        ..... Insurance - Jordan offers insurance programs.... specifically designed to meet the needs of all
                        institutions and individuals in Jordan, through insurance programs.... aiming to provide the highest
                        level of insurance protection for individuals and their families in the face of the continuous
                        escalation in costs.. ....
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <i className="ri-arrow-right-double-line"></i>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
