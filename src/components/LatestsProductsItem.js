export default function LatestProductsItem(props) {
    const imgUrl = "images/" + props.img;
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="sport_product">
                <figure><img src={imgUrl} alt="img"></img></figure>
                <h3>$<strong className="price_text">{props.price}</strong></h3>
                <h4>{props.productName}</h4>
            </div>
        </div>
    );
}