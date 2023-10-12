import React from "react";
import Table from "../../components/table/Table";
import { customersData } from "../../constants";

import './customers.scss'

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

export default function Customers() {
  return (
    <div className="customers">
      <div className="customers__header mb">
        <h2>Customers</h2>
      </div>
      <div className="customers__body">
        <div className="row">
          <div className="col pc-12 t-12 m-12">
            <div className="customers__body-card">
              <Table
                limit={10}
                renderHead={(item, index) => renderHead(item, index)}
                renderBody={(item, index) => renderBody(item, index)}
                headData={customerTableHead}
                bodyData={customersData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
