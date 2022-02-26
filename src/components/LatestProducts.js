import LatestProductsItem from "./LatestsProductsItem";

export default function LatestProducts() {
    return (
        <div>
            <div id="plant" className="section  product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="titlepage">
                                <h2><strong className="black"> Our</strong> Latest Products</h2>
                                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected randomised words which don't look even slightly
                                    believable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clothes_main section ">
                <div className="container">
                    <div className="row">
                        <LatestProductsItem price="24.99" img="basketball.png" productName="Basketball" />

                        <LatestProductsItem price="19.99" img="t-shirt.png" productName="Green T-shirt" />

                        <LatestProductsItem price="49.99" img="game.png" productName="Bowling set" />
                    </div>
                </div>
            </div>
        </div>
    );
}