import React, { Component } from "react";
import productAPI from "../../api/productAPI";
import "./productdetail.css";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const { match } = this.props;
    const getId = match.params.id;
    const getData = await productAPI.getOne(getId);
    this.setState({
      productData: getData.response,
      loading: false,
    });
  }
  render() {
    const { loading, productData } = this.state;
    console.log(loading);
    return (
      <div className="container">
        {loading ? (
          <div className="dash__spinner">
            <div className="spinner-grow text-primary" role="status"></div>
            <div className="spinner-grow text-success" role="status"></div>
            <div className="spinner-grow text-danger" role="status"></div>
          </div>
        ) : (
          <>
            <h2 className="category__title">Product Detail</h2>
            <form className="col-12 productDT__form">
              <div className="productDT__form_title">Product Detail</div>
              <div className="mb-3 productDT__form_item">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  value={productData[0]?.name}
                  className="col-12 col-md-10 productDT__form_text"
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="image">Image</label>
                <img src={productData[0]?.image} id="image" />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="thumnail">Thumbnail</label>
                <img src={productData[0]?.thumbnail} id="thumnail" />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="description">Description</label>
                <input
                  type="text"
                  value={productData[0]?.shortDescription}
                  className="col-12 col-md-10 productDT__form_text"
                  id="description"
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="category">Category</label>
                <input
                  type="text"
                  value={productData[0]?.categoryId}
                  className="col-12 col-md-10 productDT__form_text"
                  id="category"
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="saleP">Sale Price ($)</label>
                <input
                  type="number"
                  value={productData[0]?.salePrice}
                  className="col-12 col-md-10 productDT__form_text"
                  id="saleP"
                  onWheel={(e) => e.target.blur()}
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="originalP">Original Price ($)</label>
                <input
                  type="number"
                  value={productData[0]?.originalPrice}
                  className="col-12 col-md-10 productDT__form_text"
                  id="originalP"
                  onWheel={(e) => e.target.blur()}
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="images">Images</label>
                <img src="" id="images" />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="thumbnails">Thumbnails</label>
                <img src="" id="thumbnails" />
              </div>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default ProductDetail;
