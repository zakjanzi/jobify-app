import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'



const Error = () => {
    return <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3> Oh! Page not found</h3>
        <p>The page you're looking for etc.</p>
        <Link to="/">Go back Home</Link>
      </div>
      
    </Wrapper>
  }
  export default Error