import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Table } from "react-bootstrap";
import AdmNav from "./AdmNav";

const Dashboard = () => {
  return (
    <div>
      <AdmNav/>
      <Container>
        <div className="mt-5 ">
        <h1>Dashboard</h1>
        <Button variant="primary">Add Product</Button>{' '}
          <Table className="table table-striped text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><Button variant="warning">Edit</Button>{' '} <Button variant="danger">Delete</Button>{' '}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard