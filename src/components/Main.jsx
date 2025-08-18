import Footer from './Footer'
import Hero from './Hero'
import Nav from './Nav'
import Project from './Project'
import Testimonial from './Testimonial'
const Main = () => {
  return (
    <div className='bg-indigo-600'>
        <Nav/>
        <Hero/>
        <Project/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Main