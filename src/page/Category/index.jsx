import React, { Component } from "react";
import categoryAPI from "../../api/categoryAPI";
import "./category.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
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
      this.setState({
        categoryData: newCategory,
        loading: false,
      });
    } catch (error) {
      throw error;
    }
  }
  render() {
    const { categoryData, loading } = this.state;
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
            <h2 className="category__title">Category</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="category__id">
                    ID
                  </th>
                  <th scope="col" className="category__name">
                    Name
                  </th>
                  <th scope="col" className="category__des">
                    Descriptions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoryData.map((item, index) => {
                  return (
                    <tr key={`name${index}`}>
                      <th scope="row" className="category__ID">
                        {item._id}
                      </th>
                      <td className="category__Name">{item.name}</td>
                      <td className="category__Des">{item.descriptions}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}
export default Category;
