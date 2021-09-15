import "./PersonalizedFooter.scss";

export const PersonalizedFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 footerOne">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium quo explicabo id,
              iusto consectetur repellat perspiciatis sunt ad incidunt, nobis alias. Ad dolore itaque
              reprehenderit ipsum illo natus sed debitis beatae, pariatur optio at voluptatem nam quaerat
              cumque odit animi necessitatibus quisquam vero consectetur exercitationem fuga. Mollitia, modi
              ad?
            </p>
          </div>

          <div className="col-xs-6 col-md-3 footerTwo">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="./order">SUV</a>
              </li>
              <li>
                <a href="./order">Sedan</a>
              </li>
              <li>
                <a href="./order">Hatchback Class</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3 footerThree">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="./order">Book Now</a>
              </li>
              <li>
                <a href="./order">Call Now</a>
              </li>
              <li>
                <a href="./signin">Log In</a>
              </li>
              <li>
                <a href="./signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">ICR Tim 3: </a> <b>Esmir Isić, Ilhan Ličina, Almir Mulalić </b>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
