import React, { Component } from "react";
import productAPI from "../../api/productAPI";
import userAPI from "../../api/userAPI";
import "./productdetail.css";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      loading: true,
      image: {},
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
  handleChange = (e, name) => {};
  handleChangeImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const img2 = e.target.files[0];
    formData.append("my-avatar", img2);
    const upload = await userAPI.upImage(formData);
    console.log("upload", upload.data);
    this.setState({
      image: upload.data,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(1234);
  };
  render() {
    const { loading, productData, image } = this.state;
    console.log(image);
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
            <h2 className="category__title">{productData[0]?.name}</h2>
            <form
              className="col-12 productDT__form"
              onSubmit={this.handleSubmit}
            >
              <div className="productDT__form_title">Product Detail</div>
              <div className="mb-3 productDT__form_item">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  defaultValue={productData[0]?.name}
                  className="col-12 col-md-10 productDT__form_text"
                  onChange={(e) => this.handleChange(e, "name")}
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="image">Image</label>
                <img src={productData[0]?.image} id="image" />
                <input
                  type="file"
                  name="my-avatar"
                  onChange={this.handleChangeImage}
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="description">Description</label>
                <input
                  type="text"
                  defaultValue={productData[0]?.shortDescription}
                  className="col-12 col-md-10 productDT__form_text"
                  id="description"
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="category">Category</label>
                <select
                  className="form-select col-12 col-md-10 productDT__form_text"
                  aria-label="Default select example"
                  // value={productData[0]?.categoryId}
                  defaultValue={productData[0]?.categoryId}
                >
                  <option selected>Open this select menu</option>
                  <option value="60a4d925dc5f579ffa3e6706">men</option>
                  <option value="60a4d925dc5f579ffa3e6707">women</option>
                  <option value="60a4d925dc5f579ffa3e6708">accessories</option>
                </select>
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="saleP">Sale Price ($)</label>
                <input
                  type="number"
                  defaultValue={productData[0]?.salePrice}
                  className="col-12 col-md-10 productDT__form_text"
                  id="saleP"
                  onWheel={(e) => e.target.blur()}
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="originalP">Original Price ($)</label>
                <input
                  type="number"
                  defaultValue={productData[0]?.originalPrice}
                  className="col-12 col-md-10 productDT__form_text"
                  id="originalP"
                  onWheel={(e) => e.target.blur()}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default ProductDetail;
