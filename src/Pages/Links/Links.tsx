import React from "react";
import "./Links.css";
import Header from "../../Objects/Header/Header";
import LinkObject from "../../Objects/LinkObject/LinkObject";
import { useEffect, useState } from "react";
import useFetch from "use-http";

export type linkType = {
  _id: number;
  _position: number;
  src: string;
  title: string;
  image?: string;
};

function Links() {
  const {
    loading,
    error,
    data = [],
  } = useFetch(
    "https://b707z0mydj.execute-api.us-east-2.amazonaws.com/easybase-test",
    {},
    []
  );
  const boxes: JSX.Element[] = [];
  data.map((value: linkType) => {
    boxes.push(
      <LinkObject title={value.title} link={value.src} image={value.image} />
    );
  });

  return (
    <div className="main">
      <Header />
      <h1 className="title">Links</h1>
      <p className="description">
        Here are just a few relevant events and links!
      </p>
      <table className="link-objects">{boxes}</table>
    </div>
  );
}
export default Links;
