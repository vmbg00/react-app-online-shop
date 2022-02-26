import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="section">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo"> <a href="index.html"><img src="./images/logo.png" alt="#" /></a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div className="menu-area">
                                <div className="limit-box">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}