import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="con">
        <div>
          <Link to="/keytaxdate" className="Link">
            <div>
              Capital Gains Tax Filing and Payment Deadlines Filing Date
            </div>
          </Link>
          <hr />
          <Link to="/cg" className="Link">
            <div>Corporation Tax & Companies House Statutory Filing Dates</div>
          </Link>
          <hr />
          <Link to="/It" className="Link">
            <div>Inocme Tax Self-Assessment Filing and Payment Deadlines</div>{" "}
          </Link>
          <hr />
          <Link to="/Pas" className="Link">
            <div>
              Pay as You Earn (PAYE) and Construction Industry Scheme (CIS)
              Filing and Payment Deadlines
            </div>{" "}
          </Link>
          <hr />
          <Link to="/Vat" className="Link">
            <div>VAT Filing and Payment Deadlines</div>
          </Link>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Menu;
