import React from "react";
import "./About.css";
import Header from "../../Objects/Header/Header";

function About() {
  return (
    <div className="main">
      <Header />
      <h1 className="officer-title">Get Involved</h1>
      <div className="description">
        <br />
        Participation in all these chapters provides a unique combination of
        social interaction and professional dialogue among peers in their
        respective geographic areas. ACM Chapter members reflect all facets of
        computing from academia, research, business, and industry. Because of
        their subject‐specific nature, chapters typically focus on information
        and insight not easily found elsewhere.
        <br />
        <br />
        Joining an ACM chapter conveys a profound interest and dedication to the
        computing discipline. The next step is volunteering in a variety of
        roles and capacities that can benefit the chapter and advance career
        opportunities as well.
        <br />
        <br />
        Volunteer activities range from running for elected positions on chapter
        and SIG boards and serving in a wide variety of planning, management,
        and logistical support functions at SIG conferences. Members who get
        involved with ACM are creating networking and learning opportunities
        that advance both organizational and personal development.
      </div>
    </div>
  );
}
export default About;
