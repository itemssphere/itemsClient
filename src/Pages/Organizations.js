import React, { useState } from "react";
import Banner from "../Components/OrganizationPages/Banner";
import { Link, Route } from "react-router-dom";
import styles from "../Components/OrganizationPages/style.module.css";
import Navigation from "../Components/OrganizationPages/Navigation";
import AccountInformation from "../Components/OrganizationPages/AccountInformation";
import OrganizationsSocialPrograms from "../Components/OrganizationPages/OrganizationsSocialPrograms";
import OrganizationsProducts from "../Components/OrganizationPages/OrganizationsProducts";
import Sold from "../Components/OrganizationPages/Sold";
import MyOrders from "../Components/OrganizationPages/MyOrders";

const Organizations = () => {
    const [editAccountInfo, setEditAccountInfo] = useState(false);
    const [editsocialProgram, setEditsocialProgram] = useState(false);
  return (
    <div className="container">
      <div className="pages-anchor">
        <Link to="/">Home</Link>
        <span>{`>`}</span>
        <Link to="/about">About Us</Link>
      </div>
      <Banner />
      <div className={styles["organizations-content-blocks"]}>
        <Navigation />
        <div className={styles["organizations-page-main-content-container"]}>
            <Route path="/organizations/account-information" exact>
                <AccountInformation onEdit={editAccountInfo} setOnEdit={setEditAccountInfo} />
            </Route>
            <Route path="/organizations/social-projects" exact>
                <OrganizationsSocialPrograms onEdit={editsocialProgram} setOnEdit={setEditsocialProgram} />
            </Route>
            <Route path="/organizations/products" exact>
                <OrganizationsProducts onEdit={editsocialProgram} setOnEdit={setEditsocialProgram} />
            </Route>
            <Route path="/organizations/sold" exact>
                <Sold onEdit={editsocialProgram} setOnEdit={setEditsocialProgram} />
            </Route>
            <Route path="/organizations/my-orders" exact>
                <MyOrders onEdit={editsocialProgram} setOnEdit={setEditsocialProgram} />
            </Route>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
