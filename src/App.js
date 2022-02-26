function App() {
  return (
    <div>
      <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>
      <header className="section">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li><a href="index.html">Home</a> </li>
                        <li><a href="about.html">About</a> </li>
                        <li><a href="testmonial.html">Testmonial</a></li>
                        <li><a href="clients.html">Shop</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div id="main_slider" class="section carousel slide banner-main" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#main_slider" data-slide-to="0" class="active"></li>
            <li data-target="#main_slider" data-slide-to="1"></li>
            <li data-target="#main_slider" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="row marginii">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="carousel-caption ">
                      <h1>Welcome to <strong class="color">Our Shop</strong></h1>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour</p>
                      <a class="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                      <a class="btn btn-lg btn-primary" href="about.html" role="button">About </a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="img-box">
                      <figure><img src="images/boksing-gloves.png" alt="img" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="row marginii">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="carousel-caption ">
                      <h1>Welcome to <strong class="color">Our Shop</strong></h1>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour</p>
                      <a class="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                      <a class="btn btn-lg btn-primary" href="about.html" role="button">About</a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="img-box ">
                      <figure><img src="images/boksing-gloves.png" alt="img" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="row marginii">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="carousel-caption ">
                      <h1>Welcome to <strong class="color">Our Shop</strong></h1>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour</p>
                      <a class="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                      <a class="btn btn-lg btn-primary" href="about.html" role="button">About</a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="img-box">
                      <figure><img src="images/boksing-gloves.png" alt="img" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i class='fa fa-angle-left'></i></a>
          <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i class='fa fa-angle-right'></i>
          </a>
        </div>
      </section>
      <div id="plant" class="section  product">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="titlepage">
                <h2><strong class="black"> Our</strong> Latest Products</h2>
                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected randomised words which don't look even slightly
                  believable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clothes_main section ">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="sport_product">
                <figure><img src="images/basketball.png" alt="img" /></figure>
                <h3> $<strong class="price_text">50</strong></h3>
                <h4>basket ball</h4>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <div class="sport_product">
                <figure><img src="images/t-shirt.png" alt="img" /></figure>
                <h3> $<strong class="price_text">50</strong></h3>
                <h4> T-Shirt</h4>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <div class="sport_product">
                <figure><img src="images/game.png" alt="img" /></figure>
                <h3> $<strong class="price_text">50</strong></h3>
                <h4>Game</h4>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="sport_product">
                <figure><img src="images/basketball.png" alt="img" /></figure>
                <h3> $<strong class="price_text">50</strong></h3>
                <h4>basket ball</h4>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <div class="sport_product">
                <figure><img src="images/t-shirt.png" alt="img" /></figure>
                <h3> $<strong class="price_text">50</strong></h3>
                <h4>T-Shirt</h4>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
              <div class="sport_product">
                <figure><img src="images/game.png" alt="img" /></figure>
                <h3> $<strong class="price_text">50</strong></h3>
                <h4>Game</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
