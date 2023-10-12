import React, { useState } from "react";
import "./table.scss";

export default function Table(props) {
  const initDataShow =
    props.bodyData && props.limit
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);
  const [panSelect, setPanSelect] = useState(1);

  let pages = 1;
  let range = [];

  if(props.limit !== undefined){
    let page = Math.floor(props.bodyData.length / Number( props.limit));
    pages = props.bodyData.length % Number( props.limit) === 0 ? page : page + 1;
    range =  [...Array(pages).keys()];
  }

  const handleClick = (item) => {
    setPanSelect(item+1)
    setDataShow(props.bodyData.slice(Number(item) * Number(props.limit), Number(item + 1) * Number(props.limit)))
  }

  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              {props.headData.map((item, index) =>
                props.renderHead(item, index)
              )}
            </tr>
          </thead>
          <tbody>
            {dataShow.map((item, index) => props.renderBody(item, index))}
          </tbody>
        </table>
      </div>
      <div className="table__pagination">
        {range.map((item, index) => (
          <div className={`table__pagination-item ${panSelect === (item + 1) ? "active" : ""}`} key={index} onClick={() => handleClick(item)}>
            {item + 1}
          </div>
        ))}
      </div>
    </>
  );
}
