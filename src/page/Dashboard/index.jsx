import React, { Component } from "react";
import categoryAPI from "../../api/categoryAPI";
import productAPI from "../../api/productAPI";
import userAPI from "../../api/userAPI";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      productData: [],
      userData: [],
      loading: true,
    };
  }
  async componentDidMount() {
    try {
      const category = await categoryAPI.getAll();
      const newCategory = category.respone.map((item) => {
        const { descriptions = "", name = "", _id = "" } = item;
        return {
          descriptions,
          name,
          _id,
        };
      });
      const user = await userAPI.getAll();
      const product = await productAPI.getAll();
      this.setState({
        categoryData: newCategory,
        productData: product.response,
        userData: user.response,
        loading: false,
      });
    } catch (error) {
      throw error;
    }
  }
  render() {
    const { categoryData, productData, userData, loading } = this.state;
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
            <h2 className="dash__title">Dashboard</h2>
            <div className="row">
              <div className="col badge bg-primary dash__flexbox">
                <i className="fas fa-users dash__icon"></i>
                <div>
                  <div className="dash__length">{userData.length}</div>
                  <p className="dash__name">User</p>
                </div>
              </div>
              <div className="col badge bg-secondary dash__flexbox">
                <i className="fas fa-cube dash__icon"></i>
                <div>
                  <div className="dash__length">{categoryData.length}</div>
                  <p className="dash__name">Category</p>
                </div>
              </div>
              <div className="col badge bg-success dash__flexbox">
                <i className="fas fa-file-invoice-dollar dash__icon"></i>
                <div>
                  <div className="dash__length">{productData.length}</div>
                  <p className="dash__name">Product</p>
                </div>
              </div>
              <div className="col badge bg-info dash__flexbox">
                <i className="fas fa-shopping-cart dash__icon"></i>
                <div>
                  <div className="dash__length">0</div>
                  <p className="dash__name">Oder</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Dashboard;
