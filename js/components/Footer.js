(function () {
  'use strict';

  const Footer = () => {
    return (
      <footer class='footer'>
        <div class='footer-top section'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-5 col-md-6 col-12'>
                <div class='single-footer about'>
                  <div class='logo'>
                    <h5>marry Market</h5>
                  </div>
                  <p class='text'>
                    Votre satisfaction est notre raison d'être. Nous sommes pour
                    l'innovation, toujours plus loin, toujout plus hauts,
                    toujours plus forts
                  </p>
                  <p class='call'>
                    vous avez une Question ? appelez 24/7
                    <span>
                      <a href='tel:123456789'>+221704519370</a>
                    </span>
                  </p>
                </div>
              </div>
              <div class='col-lg-2 col-md-6 col-12'>
                <div class='single-footer links'>
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href='#'>A propos</a>
                    </li>

                    <li>
                      <a href='#'>Nous contacter</a>
                    </li>
                    <li>
                      <a href='#'>Aide</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-2 col-md-6 col-12'>
                <div class='single-footer links'>
                  <h4>Service Client</h4>
                  <ul>
                    <li>
                      <a href='#'>Payement</a>
                    </li>

                    <li>
                      <a href='#'>Retourner un produit</a>
                    </li>
                    <li>
                      <a href='#'>Livraison</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-12'>
                <div class='single-footer social'>
                  <h4>Get In Touch</h4>

                  <div class='contact'>
                    <ul>
                      <li>Parcelle Assaines .</li>
                      <li>Marché unité 17 place 40.</li>
                      <li>info@marrymarket.com</li>
                      <li>+221704519370</li>
                    </ul>
                  </div>
                  {/* End Single Widget */}
                  <ul>
                    <li>
                      <a href='#'>
                        <i class='ti-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='ti-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='ti-flickr'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='ti-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Top */}
        <div class='copyright text-center'>
          <div class='container'>
            <div class='inner'>
              <div class='row text-center'>
                <div class='col-lg-6 col-12 '>
                  <div class=''>
                    <p>
                      Copyright © 2021 made with <i class='fa fa-heart'></i>
                      <a href='https://github.com/tafa1618' target='_blank'>
                        {' '}
                        by Tapha Gaye
                      </a>{' '}
                      - All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  ReactDOM.render(<Footer />, document.getElementById('footer'));
})();
