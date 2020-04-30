import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

import officeImg from '../images/shutterstock_696636415.jpg'

const Home = () => {
  return (
    <div className="home-section">
      <div className="first-col">
        <Carousel />
      </div>
      <div className="second-col">
        <div className="info">
          <h1>Justo Penetium te vix, scripta regione urbanitas</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <li>Mauris pretium quam vitae commodo fermentum.</li>
          <li>Mauris pretium quam vitae commodo fermentum.</li>
          <li>Mauris pretium quam vitae commodo fermentum.</li>
          <li>Mauris pretium quam vitae commodo fermentum.</li>
          <div className="button">
            <button className="blue-button">Learn More</button>
          </div>
        </div>
        <div className="image">
          <img src={officeImg} alt="office" className="office-image" />
        </div>
      </div>
      <div className="third-col">
        <div className="info-box">
          <div className="info">
            <h1>Donec risus erat, rutrum ut ipsum vel, consequat.</h1>
            <p>
              Phasellus turpis urna, pretium quis gravida vitae, feugiat et
              neque. Vivamus ex purus, congue quis maximus in, elementum ac
              augue. Nunc ut porttitor velit. Maecenas venenatis ante quis
              rhoncus varius. Curabitur dapibus, ligula at venenatis bibendum,
              leo nulla lacinia erat, vitae faucibus mi turpis eget dolor.
            </p>
            <button className="white-button">Login</button>
          </div>
        </div>
      </div>
      <div className="fourth-col">
        <h1>Nullam tincidunt gravida sapien maximus viverra.</h1>
        <h2>Phasellus vestibulum porta semper.</h2>
        <div className="info-columns">
          <p>
            Maecenas pretium velit eu vulputate ultricies. Praesent non justo
            placerat, laoreet justo in, iaculis est. Donec sed lorem tempor,
            sodales lorem a, placerat dui. Nulla consequat arcu ac tortor
            commodo vehicula. Nullam et tincidunt justo. Nulla ex erat, tempor
            quis ante eu, tristique facilisis nisl. Vestibulum pretium arcu
            libero, quis pharetra felis pulvinar ac.{' '}
          </p>
          <p>
            Nam velit orci, dapibus at mollis id, tincidunt ut metus. Vivamus
            non nunc a eros ultricies egestas. Aliquam elit nisl, dapibus eget
            vehicula eget, efficitur sit amet leo. Etiam libero elit, tincidunt
            tristique vestibulum ut, aliquet nec orci. Quisque eleifend velit
            sit amet enim dignissim, nec aliquam ante consectetur. Pellentesque
            faucibus blandit augue, ut lobortis turpis faucibus a. Nullam quis
            neque sodales, placerat dolor quis, pellentesque nibh.{' '}
          </p>
          <p>
            Morbi volutpat efficitur iaculis. Etiam lectus lectus, ultricies
            quis metus ac, lobortis tempus ligula. Quisque sed nunc dolor.
            Vestibulum fermentum lectus ullamcorper neque suscipit, in hendrerit
            nibh tempor. Sed sit amet nisi vitae magna tempor luctus ut id
            lectus. Curabitur vulputate commodo est at sagittis. Nulla elementum
            luctus mollis.
          </p>
        </div>
        <button className="blue-button">
          <Link to="/contact-us">Contact Us</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
