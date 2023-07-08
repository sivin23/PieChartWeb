import { About } from '../components';

function Home() {
  return (
    <div className='container-fluid p-0 m-0'>
      <div className='hero-container px-5 m-0 d-flex flex-column justify-content-center'>
        <div className='hero-content '>
          <p>Transforming Businesses through Innovative IT Services, Strategic Digital Marketing, and Talent Sourcing</p>
          <button className='book-now-btn'>BOOK NOW</button>
        </div>
      </div>
      <hr className='hr'/>
      <About />
    </div>
  )
}

export default Home