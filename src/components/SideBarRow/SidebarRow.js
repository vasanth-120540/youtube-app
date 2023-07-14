import React from "react";
import "./SidebarRow.css";

function SidebarRow({
  selected,
  Icon,
  title,
  appendOnClick,
  rowKey,
  onLeftSelectedChanged,
}) {
  const extraParams = {};
  const onSideRowClick = () => {
    onLeftSelectedChanged(rowKey);
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
