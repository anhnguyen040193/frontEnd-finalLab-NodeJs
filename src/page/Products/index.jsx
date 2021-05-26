import React, { Component } from "react";
import productAPI from "../../api/productAPI";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      loading: true,
    };
  }
  async componentDidMount() {
    try {
      const product = await productAPI.getAll();
      this.setState({
        productData: product.response,
        loading: false,
      });
    } catch (error) {
      throw error;
    }
  }
  imageFormatter = (cell, row) => {
    return <img src={cell} style={{ width: "60px" }} />;
  };
  IDFormatter = (cell, row) => {
    return <Link to={`/products-detail/${cell}`}>{cell}</Link>;
  };
  render() {
    const { loading, productData } = this.state;
    const options = {
      sizePerPageList: [10, 20, 30],
    };

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
            <h2 className="category__title">Products</h2>
            <div className="user__table">
              <BootstrapTable
                data={productData}
                hover
                search={true}
                options={options}
                pagination
                bodyStyle={{ fontFamily: "Roboto, sans-serif" }}
              >
                <TableHeaderColumn
                  width="180"
                  height="50px"
                  isKey={true}
                  dataField="_id"
                  dataSort
                  dataFormat={this.IDFormatter}
                >
                  ID
                  <i className="fas fa-sort"></i>
                </TableHeaderColumn>

                <TableHeaderColumn
                  tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  width="115px"
                  dataField="name"
                  dataSort
                >
                  Name <i className="fas fa-sort"></i>
                </TableHeaderColumn>
                <TableHeaderColumn
                  tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  width="115px"
                  dataField="lastName"
                  dataFormat={this.imageFormatter}
                >
                  Thumbnail
                </TableHeaderColumn>
                <TableHeaderColumn
                  tdStyle={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                  width="115px"
                  dataField="shortDescription"
                  dataSort
                >
                  Description <i className="fas fa-sort"></i>
                </TableHeaderColumn>
                <TableHeaderColumn
                  tdStyle={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "right",
                  }}
                  width="75px"
                  dataField="salePrice"
                  dataSort
                >
                  SALE($)<i className="fas fa-sort"></i>
                </TableHeaderColumn>

                <TableHeaderColumn
                  tdStyle={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "right",
                  }}
                  width="7%"
                  dataField="originalPrice"
                  dataSort
                >
                  Original Price($)<i className="fas fa-sort"></i>
                </TableHeaderColumn>

                <TableHeaderColumn
                  tdStyle={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                  dataField="image"
                  dataFormat={this.imageFormatter}
                  width="100px"
                >
                  Product Image
                </TableHeaderColumn>

                {/* <TableHeaderColumn
                  tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  width="5%"
                  dataField="roles"
                >
                  Action
                </TableHeaderColumn> */}
              </BootstrapTable>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Products;
