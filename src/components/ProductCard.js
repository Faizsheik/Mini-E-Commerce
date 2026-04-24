import {Link} from 'react-router-dom';
export default function ProductCard({product})
{
    return <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={product.images[0].image}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
               <Link to={"/product/"+product._id}>{product.name}</Link>
              </h5>
              {/* Ratings */}
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner" style={{width: `${product.ratings/5 * 100}%`}}></div>
                </div>
              </div>
              {/* how rating works behind CSS -------
              .rating-outer {
                  width: 100px;
                  height: 20px;
                  background: url('/images/star-empty.png') repeat-x;
                }

                .rating-inner {
                  height: 20px;
                  background: url('/images/star-filled.png') repeat-x;
                } */}

              <p className="card-text">{product.price}</p>
              <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Link</Link>
            </div>
          </div>
        </div>
}