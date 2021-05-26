import React, { Component } from "react";
import productAPI from "../../api/productAPI";

class ProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: {},
    };
  }

  handleChange = (e, name) => {
    const { newData } = this.state;
    const newValues = { ...newData, [name]: e.target.value };
    this.setState({ newData: newValues });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { newData } = this.state;
    const { history } = this.props;
    const newValues = {
      name: newData.name === undefined ? "" : newData.name,
      shortDescription:
        newData.shortDescription === undefined ? "" : newData.shortDescription,
      categoryId: newData.categoryId === undefined ? "" : newData.categoryId,
      salePrice: newData.salePrice === undefined ? "" : newData.salePrice,
      originalPrice:
        newData.originalPrice === undefined ? "" : newData.originalPrice,
    };
    await productAPI.addProduct(newValues).then((value) => {
      alert(value.message);
      return history.push("/products");
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="category__title">Add Product</h2>
        <form className="col-12 productDT__form" onSubmit={this.handleSubmit}>
          <div className="productDT__form_title">Product</div>
          <div className="mb-3 productDT__form_item">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="col-12 col-md-10 productDT__form_text"
              onChange={(e) => this.handleChange(e, "name")}
            />
          </div>

          <div className="mb-3 productDT__form_item">
            <label for="description">Description</label>
            <input
              type="text"
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
      </div>
    );
  }
}

export default ProductAdd;
