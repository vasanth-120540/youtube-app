import React from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title, appendOnClick, rowKey }) {
  const navigate = useNavigate();
  const extraParams = {};
  const onSideRowClick = () => {
    navigate(rowKey);
  };
  if (appendOnClick) {
    extraParams.onClick = onSideRowClick;
  }

  return (
    <div
      className={`sidebarRow ${selected ? "selected" : "none"}`}
      {...extraParams}
    >
      <Icon className="sidebarRow__icon" />
      <h1 className="sidebarRow__title">{title}</h1>
    </div>
  );
}

export default SidebarRow;
