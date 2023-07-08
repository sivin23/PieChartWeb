import { ServicesImg1, ServicesImg2, ServicesImg3} from '../assets/img/index';

function Services() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className='text-center my-5'>
          <h1 className='h1 about-title '>Our Services</h1>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center '>
          <div className='about-box container w-75 mb-5 d-flex flex-row justify-content-start align-items-start mx-auto'>
          <div className="row service-box">
            <div className="col-md-6 mb-3 ">
                <h3>IT Services</h3>
                <p>Transform your online presence with captivating web design, expertly crafted to engage your audience and drive results. Harness the power of mobile technology with custom Android and iOS app development, delivering seamless experiences that 

captivate users on the go. </p>
              </div>
              <div className='col-md-6 mb-3 '>
                <img src={ServicesImg1} alt="" width='90%' />
              </div>
              <div className="col-md-6 mb-3 ">
                <img src={ServicesImg2} alt="" width='90%' />
              </div>
              <div className="col-md-6 mb-3 ">
                <h3>Strategic Digital Marketing</h3>
                <p>Elevate your brand's online visibility and reach with comprehensive digital marketing strategies tailored to your unique goals, leveraging SEO, social media, and targeted advertising. Maximize your online presence and drive measurable results with data-driven digital marketing campaigns, optimizing conversion rates and expanding your customer base. </p>
              </div>
              <div className="col-md-6 mb-3 ">
                <h3>Talent Sourcing</h3>
                <p>Uncover top talent and build a high-performing team with our specialized talent sourcing services, leveraging a strategic approach to identify, attract, and engage skilled professionals in your industry. Streamline your recruitment process and access a pool of qualified candidates through our talent sourcing expertise, ensuring you find the right fit for your organization's needs and goals.  </p>
              </div>
              <div className="col-md-6 mb-3">
                <img src={ServicesImg3} alt="" width='90%' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services;