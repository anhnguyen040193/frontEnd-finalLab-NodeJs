import React, { Component } from "react";
import userAPI from "../../api/userAPI";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import "./user.css";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loading: true,
    };
    this.myRef = React.createRef();
  }
  async componentDidMount() {
    try {
      const users = await userAPI.getAll();
      const newdata = users.response.map((item) => {
        const { dob } = item;
        return {
          ...item,
          dob: moment(dob).format("L"),
        };
      });
      this.setState({
        userData: newdata,
        loading: false,
      });
    } catch (error) {
      throw error;
    }
  }
  imageFormatter = (cell, row) => {
    return "<img src='" + cell + "'/>";
  };
  isExpandableRow(row) {
    if (row._id) return true;
    else return false;
  }

  expandComponent(row) {
    return (
      <>
        <div className="user__expand">
          <label>Phone</label>
          <input
            className="user__expand_input"
            value={row.phoneNumber}
            disabled
          />
        </div>
        <div className="user__expand">
          <label>Username</label>
          <input className="user__expand_input" value={row.username} disabled />
        </div>
        <div className="user__expand">
          <label>Gender</label>
          <input className="user__expand_input" value={row.gender} disabled />
        </div>
        <div className="user__expand">
          <label>Zip Code</label>
          <input className="user__expand_input" value={row.zipcode} disabled />
        </div>
        <div className="user__expand">
          <label>Country</label>
          <input className="user__expand_input" value={row.country} disabled />
        </div>
      </>
    );
  }

  render() {
    const { userData, loading } = this.state;
    const options = {
      sizePerPageList: [10, 20, 30],
      expandRowBgColor: "#f8f9fa",
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
            <h2 className="category__title">User</h2>
            <div className="user__table">
              <BootstrapTable
                ref={this.myRef}
                data={userData}
                hover
                search={true}
                options={options}
                pagination
                expandableRow={this.isExpandableRow}
                expandComponent={this.expandComponent}
                bodyStyle={{ fontFamily: "Roboto, sans-serif" }}
              >
                <TableHeaderColumn
                  width="210"
                  height="50px"
                  isKey={true}
                  dataField="_id"
                  dataSort
                >
                  ID
                  <i className="fas fa-sort"></i>
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="avatar"
                  dataFormat={this.imageFormatter}
                  width="70px"
                >
                  Avatar
                </TableHeaderColumn>
                <TableHeaderColumn width="115px" dataField="firstName" dataSort>
                  First Name <i className="fas fa-sort"></i>
                </TableHeaderColumn>
                <TableHeaderColumn width="115px" dataField="lastName" dataSort>
                  Last Name <i className="fas fa-sort"></i>
                </TableHeaderColumn>
                <TableHeaderColumn width="100px" dataField="dob" dataSort>
                  DOB <i className="fas fa-sort"></i>
                </TableHeaderColumn>

                <TableHeaderColumn
                  tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  width="20%"
                  dataField="email"
                  dataSort
                >
                  Email
                </TableHeaderColumn>

                <TableHeaderColumn
                  tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  width="10%"
                  dataField="isEmailValidate"
                >
                  Email Verifield
                </TableHeaderColumn>

                <TableHeaderColumn
                  tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  width="10%"
                  dataField="roles"
                  dataSort
                >
                  Roles <i className="fas fa-sort"></i>
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default User;
