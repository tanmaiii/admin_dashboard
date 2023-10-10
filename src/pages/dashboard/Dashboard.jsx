import React from "react";
import "./dashboard.scss";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../../components/dashboard-wrapper/DashboardWrapper";
import Box from "../../components/box/Box";
import {data} from '../../constants'


export default function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item,i) => (
                <div key={i} className="col-6 col-md-6 col-sm-12">
                  <Box/>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>DashboardWrapperRight</DashboardWrapperRight>
    </DashboardWrapper>
  );
}
