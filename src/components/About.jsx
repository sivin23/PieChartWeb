import { MainImg1, MainImg2, MainImg3} from '../assets/img/index';

function About() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className='text-center'>
          <h1 className='h1 about-title '>About Us</h1>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center '>
          <div className='about-box container mb-5 d-flex flex-row justify-content-start align-items-start mx-auto'>
          <div className="row box">
            <div className="col-md-6 mb-3 ">
                <h3>Technical Experience</h3>
                <p>We are well-versed in a variety of operating systems, networks, and databases. We work with just about any technology that a small business would encounter. We use this expertise to help customers with small to mid-sized projects. </p>
                <button className='abt-button'>BOOK ONLINE</button>
              </div>
              <div className='col-md-6 mb-3 '>
                <img src={MainImg1} alt="" width='100%' />
              </div>
              <div className="col-md-6 mb-3 ">
                <img src={MainImg2} alt="" width='100%' />
              </div>
              <div className="col-md-6 mb-3 ">
                <h3>High ROI</h3>
                <p>Do you spend most of your IT budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business.</p>
                <button className='abt-button'>SEE SERVICES</button>
              </div>
              <div className="col-md-6 mb-3 ">
                <h3>Satisfaction Guaranteed</h3>
                <p>The world of technology can be fast-paced and scary. That's why our goal is to provide an experience that is tailored to your company's needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work. </p>
                <button className='abt-button'>CONTACT US</button> 
              </div>
              <div className="col-md-6 mb-3">
                <img src={MainImg3} alt="" width='100%' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;