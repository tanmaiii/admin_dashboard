import React from "react";
import "./dashboard.scss";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../../components/dashboard-wrapper/DashboardWrapper";
import Box from "../../components/box/Box";
import {data} from '../../constants'

import SummaryBox,{SummaryBoxSpecial} from "../../components/summary-box/SummaryBox";


export default function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item,i) => (
                <div key={i} className="col-6 col-md-6 col-sm-12 mb">
                  <SummaryBox item={item}/>
                </div>
              ))
              }
            </div>
          </div>
          <div className="col-4 hide-md">
              <SummaryBoxSpecial item={data.revenueSummary}/>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>DashboardWrapperRight</DashboardWrapperRight>
    </DashboardWrapper>
  );
}


