import React, { Component } from "react";
import productAPI from "../../api/productAPI";
import "./productdetail.css";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      loading: true,
      image: {},
      loadingImage: false,
      newData: {},
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
  handleChange = (e, name) => {
    const { newData } = this.state;
    const newValues = { ...newData, [name]: e.target.value };
    console.log(newValues);
    this.setState({ newData: newValues });
  };
  handleChangeImage = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    const img2 = e.target.files[0];
    formData.append("my-avatar", img2);
    formData.append("id", id);
    const upload = await productAPI.upImage(formData);
    this.setState({ loadingImage: true });
    if (upload) {
      this.setState({
        image: upload.data,
        loadingImage: false,
      });
      alert(upload.data.msg);
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { newData, productData } = this.state;
    const id = productData[0]?._id;
    const newValues = {
      _id: id,
      name: newData.name === undefined ? productData[0].name : newData.name,
      shortDescription:
        newData.shortDescription === undefined
          ? productData[0].shortDescription
          : newData.shortDescription,
      categoryId:
        newData.categoryId === undefined
          ? productData[0].categoryId
          : newData.categoryId,
      salePrice:
        newData.salePrice === undefined
          ? productData[0].salePrice
          : newData.salePrice,
      originalPrice:
        newData.originalPrice === undefined
          ? productData[0].originalPrice
          : newData.originalPrice,
    };
    await productAPI.update(newValues).then((value) => alert(value.message));
  };
  render() {
    const { loading, productData, image, loadingImage } = this.state;
    const id = productData[0]?._id;
    const file =
      Object.keys(image).length !== 0 ? image.file : productData[0]?.image;
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
                {loadingImage ? (
                  <div className="dash__spinner">
                    <div
                      className="spinner-grow text-primary"
                      role="status"
                    ></div>
                    <div
                      className="spinner-grow text-success"
                      role="status"
                    ></div>
                    <div
                      className="spinner-grow text-danger"
                      role="status"
                    ></div>
                  </div>
                ) : (
                  <>
                    <img className="image" src={file} id="image" />
                    <input
                      type="file"
                      name="my-avatar"
                      className="col-12 col-md-5 "
                      onChange={(e) => this.handleChangeImage(e, id)}
                    />
                  </>
                )}
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="description">Description</label>
                <input
                  type="text"
                  defaultValue={productData[0]?.shortDescription}
                  className="col-12 col-md-10 productDT__form_text"
                  id="description"
                  onChange={(e) => this.handleChange(e, "shortDescription")}
                />
              </div>

              <div className="mb-3 productDT__form_item">
                <label for="category">Category</label>
                <select
                  className="form-select col-12 col-md-10 productDT__form_text"
                  aria-label="Default select example"
                  defaultValue={productData[0]?.categoryId}
                  onChange={(e) => this.handleChange(e, "categoryId")}
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
                  onChange={(e) => this.handleChange(e, "salePrice")}
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
                  onChange={(e) => this.handleChange(e, "originalPrice")}
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
