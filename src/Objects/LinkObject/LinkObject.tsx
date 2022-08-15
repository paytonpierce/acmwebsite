import React from "react";
import "./LinkObject.css";

function toWebsite(link: string) {
  window.location.href = link;
}

export type LinkObjectProps = {
  title: string;
  link: string;
  image?: string;
};

function LinkObject({ title, link, image }: LinkObjectProps): JSX.Element {
  return (
    <div className="link-object-main" onClick={() => toWebsite(link)}>
      <div className="page">
        <div className="page-header">
          <div className="page-button-red" />
          <div className="page-button-yellow" />
          <div className="page-button-green" />
        </div>
        <img src={image} className="page-icon" />
        <p className="page-title">{title}</p>
      </div>
    </div>
  );
}
export default LinkObject;
