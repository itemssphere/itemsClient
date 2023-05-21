import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import MainSlider from "../Components/MainSlider/MainSlider";
import Categories from "../Components/Categories/Categories";
import SocialPrograms from "../Components/SocialProgram/SocialPrograms";
import axios from "axios";

const SocialProgramsPage = ({typesetter}) => {
  const [socialPrograms, setSocialPrograms] = useState({
    beforeSlider: [],
    afterSlider: []
  });

  useEffect(() => {
    typesetter(["categories", "charities"]);
    axios(`${process.env.REACT_APP_BASIC_URL}/socials?limit=16`)
        .then((response) => {
          let data = response.data.data;
          setSocialPrograms({
            beforeSlider: data.slice(0, 8),
            afterSlider: data.slice(8, 16)
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }, [typesetter])

  return (
    <div className="container">
      <div className="pages-anchor">
        <Link to="/">Home</Link>
        <span>{`>`}</span>
        <Link to="/social-programs">Social Programs</Link>
      </div>
      <div className="row" style={{ position: "relative", marginTop: "24px" }}>
        <div className="col-md-3 categories-container">
          <Categories />
        </div>
        <div className="col-md-9 slider-container">
          <div className="items-header-with-select" style={{marginBottom: "24px"}}>
            <p className="page-titles" style={{marginBottom: "0px"}}>
            Social Programs <span>60,000</span>
            </p>
            <div className="items-header-select">
              <span className="items-header-select-name">Sort by</span>
              <select className={`select-form-control shops-sort-dropdown`}>
                <option>A - Z</option>
                <option>A - Z</option>
                <option>A - Z</option>
              </select>
            </div>
          </div>
          <div className="market-content-container">
            {
              socialPrograms.beforeSlider.map((sp) => {
                return <SocialPrograms data={sp} key={sp.id} socialProgramsPage={true} />
              })
            }
            <div style={{width: "100%", marginBottom: "20px"}}>
              <MainSlider productsPages={true}/>
            </div>
            {
              socialPrograms.afterSlider.map((sp) => {
                return <SocialPrograms data={sp} key={sp.id} socialProgramsPage={true} />
              })
            }
          </div>
          <div className="load-more">
            <button className="load-more-button" >
              Load
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProgramsPage;
