import React from "react";
import Table from "react-bootstrap/Table";

export default function UserTable({ user }) {
  return (
    <div className="m-5">

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th> Name</th>
            <th> User Name</th>
            <th> Email </th>
            <th> Address </th>
            <th> City </th>
            <th> ZIP code </th>
            <th> Phone </th>
            <th> Website </th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, index) => {
            return (
              <tr key={index}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.address.street}</td>
                <td>{u.address.city}</td>
                <td>{u.address.zipcode}</td>
                <td>{u.phone}</td>
                <td>{u.website}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
