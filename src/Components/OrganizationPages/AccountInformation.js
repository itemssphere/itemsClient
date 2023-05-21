import React, {useState} from "react";
import styles from "./style.module.css";

const AccountInformation = ({ onEdit, setOnEdit, formData }) => {
  const [localFormData, setLocalFormData] = useState({
    organizationName: typeof formData !== "undefined" ? formData.organizationName : "",
    organizationNameGeo: typeof formData !== "undefined" ? formData.organizationNameGeo : "",
    accountType: typeof formData !== "undefined" ? formData.accountType : "",
    aboutEn: typeof formData !== "undefined" ? formData.aboutEn : "",
    aboutGeo: typeof formData !== "undefined" ? formData.aboutGeo : "",
    categories: typeof formData !== "undefined" ? formData.categories : [],
    phone: typeof formData !== "undefined" ? formData.phone : "",
    email: typeof formData !== "undefined" ? formData.email : "",
    city: typeof formData !== "undefined" ? formData.city : "",
    cityGeo: typeof formData !== "undefined" ? formData.cityGeo : "",
    address: typeof formData !== "undefined" ? formData.address : "",
    addressGeo: typeof formData !== "undefined" ? formData.addressGeo : "",
    postalCode: typeof formData !== "undefined" ? formData.postalCode : "",
    facebook: typeof formData !== "undefined" ? formData.facebook : "",
    instagram: typeof formData !== "undefined" ? formData.instagram : "",
    youtube: typeof formData !== "undefined" ? formData.youtube : "",
    contact: typeof formData !== "undefined" ? formData.contact : "",
    contactNumber: typeof formData !== "undefined" ? formData.contactNumber : "",
    legalInfo: typeof formData !== "undefined" ? formData.legalInfo : "",
    idNum: typeof formData !== "undefined" ? formData.idNum : "",
    iBan: typeof formData !== "undefined" ? formData.iBan : "",
  })

  return (
    <>
      <div className={styles["section-head-container"]}>
        <p className={`bold ${styles["section-head-title"]}`}>
          Account Informaton
        </p>
        <div className={styles["section-head-action-btns"]}>
          <button
            className={`${styles["no-background-btn"]} ${styles["underlined"]} ${styles["on-desktop"]}`}
          >
            Profile Preview
          </button>
          <button
            className={`${styles["no-background-btn"]} ${styles["underlined"]} ${styles["on-mobile"]}`}
          >
            Preview
          </button>
          {!onEdit && (
            <button
              className={styles["border-blue-btn"]}
              onClick={() => setOnEdit(true)}
            >
              Edit
            </button>
          )}
          {onEdit && (
            <button
              className={`${styles["background-blue-btn"]} ${styles["save-changes"]}`}
              style={{ marginRight: "30px" }}
            >
              Save Changes
            </button>
          )}
          {onEdit && (
            <button
              className={`${styles["no-background-btn"]} ${styles["cancel-edit"]}`}
              onClick={() => setOnEdit(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className={styles["account-info-form"]}>
        <div
          className={`${styles["form-input-container"]} ${styles["no-margin"]}`}
        >
          <label className={styles["organization-label"]}>
            Organization Name
          </label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={`${styles["form-control-orgs"]} ${styles["editable"]}`}
              placeholder="Enter Organization Name"
              value={localFormData.organizationName}
              onChange={(e) => {
                setLocalFormData({...localFormData, organizationName: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={`${styles["form-control-orgs"]} ${styles["editable"]}`}
              disabled
              placeholder="Enter Organization Name"
              value={localFormData.organizationName}
              onChange={(e) => {
                setLocalFormData({...localFormData, organizationName: e.target.value})
              }}
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label
            className={styles["organization-label"]}
            style={{ visibility: "hidden" }}
          >
            Organization Name
          </label>
          {onEdit ? (
            <input
              style={{ borderColor: "#2E76FC" }}
              type="text"
              name="search"
              className={`${styles["form-control-orgs"]} ${styles["editable"]}`}
              placeholder="შეიყვანეთ ორგანიზაციის სახელი"
              value={localFormData.organizationNameGeo}
              onChange={(e) => {
                setLocalFormData({...localFormData, organizationNameGeo: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={`${styles["form-control-orgs"]} ${styles["editable"]}`}
              placeholder="შეიყვანეთ ორგანიზაციის სახელი"
              disabled
              value={localFormData.organizationNameGeo}
              onChange={(e) => {
                setLocalFormData({...localFormData, organizationNameGeo: e.target.value})
              }}
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Account Type</label>
          <input
            type="text"
            name="search"
            className={styles["form-control-orgs"]}
            disabled
            placeholder="Enter Account Type"
            value={localFormData.accountType}
            onChange={(e) => {
              setLocalFormData({...localFormData, accountType: e.target.value})
            }}
          />
        </div>
        <div className={styles["account-info-about"]}>
          <div
            className={`${styles["form-input-container"]}`}
            style={{ marginBottom: "10px" }}
          >
            <label className={styles["organization-label"]}>About</label>
            {onEdit ? (
              <textarea
                style={{ borderColor: "#2E76FC" }}
                cols="30"
                rows="10"
                className={styles["account-info-about-input"]}
                placeholder="Eng"
                value={localFormData.aboutEn}
                onChange={(e) => {
                  setLocalFormData({...localFormData, aboutEn: e.target.value})
                }}
              ></textarea>
            ) : (
              <textarea
                cols="30"
                rows="10"
                className={styles["account-info-about-input"]}
                placeholder="Eng"
                disabled
                value={localFormData.aboutEn}
                onChange={(e) => {
                  setLocalFormData({...localFormData, aboutEn: e.target.value})
                }}
              ></textarea>
            )}
          </div>
          <div
            className={`${styles["form-input-container"]}`}
            style={{ marginBottom: "10px" }}
          >
            <label
              className={styles["organization-label"]}
              style={{ visibility: "hidden" }}
            >
              About
            </label>
            {onEdit ? (
              <textarea
                style={{ borderColor: "#2E76FC" }}
                cols="30"
                rows="10"
                className={styles["account-info-about-input"]}
                placeholder="Geo"
                value={localFormData.aboutGeo}
                onChange={(e) => {
                  setLocalFormData({...localFormData, aboutGeo: e.target.value})
                }}
              ></textarea>
            ) : (
              <textarea
                cols="30"
                rows="10"
                className={styles["account-info-about-input"]}
                placeholder="Geo"
                disabled
                value={localFormData.aboutGeo}
                onChange={(e) => {
                  setLocalFormData({...localFormData, aboutGeo: e.target.value})
                }}
              ></textarea>
            )}
          </div>
        </div>
        <div
          className={styles["form-input-container"]}
          style={{ marginBottom: "11px" }}
        >
          <label className={styles["organization-label"]}>Categories</label>
          {onEdit ? (
            <input
              style={{ borderColor: "#2E76FC" }}
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="+ add categories"
              onChange={(e) => {
                console.log(e)
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="+ add categories"
              disabled
              onChange={(e) => {
                console.log(e)
              }}
            />
          )}
        </div>
        <div className={styles["tags-content-container"]}>
          {
            localFormData.categories.map((cat) => {
              return <div className={styles['tag']}></div>
            })
          }
        </div>
        <div className={styles["divider"]}></div>
        <p
          className={`bold ${styles["section-head-title"]}`}
          style={{ width: "100%", marginBottom: "30px" }}
        >
          Contact Information
        </p>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Phone</label>
          {onEdit ? (
            <input
              type="text"
              style={{ borderColor: "#2E76FC" }}
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Your Phone Number"
              value={localFormData.phone}
              onChange={(e) => {
                setLocalFormData({...localFormData, phone: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Your Phone Number"
              disabled
              value={localFormData.phone}
              onChange={(e) => {
                setLocalFormData({...localFormData, phone: e.target.value})
              }}
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Email Address</label>
          {onEdit ? (
            <input
              type="email"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Enter Your Email Address"
              value={localFormData.email}
              onChange={(e) => {
                setLocalFormData({...localFormData, email: e.target.value})
              }}
            />
          ) : (
            <input
              type="email"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Your Email Address"
              disabled
              value={localFormData.email}
              onChange={(e) => {
                setLocalFormData({...localFormData, email: e.target.value})
              }}
            />
          )}
        </div>
        <div
          className={`${styles["form-input-container"]} ${styles["no-margin"]}`}
        >
          <label className={styles["organization-label"]}>City</label>
          {onEdit ? (
            <select
              name="search"
              className={styles["select-form-control"]}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "30px",
                outlineColor: "#2E76FC",
              }}
              value={localFormData.city}
              onChange={(e) => {
                setLocalFormData({...localFormData, city: e.target.value})
              }}
            >
              <option value="Tbilisi">Tbilisi</option>
              <option value="Batumi">Batumi</option>
            </select>
          ) : (
            <select
              name="search"
              disabled
              className={styles["select-form-control"]}
              style={{ width: "100%", height: "48px", borderRadius: "30px" }}
              value={localFormData.city}
              onChange={(e) => {
                setLocalFormData({...localFormData, city: e.target.value})
              }}
            >
              <option value="Tbilisi">Tbilisi</option>
              <option value="Batumi">Batumi</option>
            </select>
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label
            className={styles["organization-label"]}
            style={{ visibility: "hidden" }}
          >
            City
          </label>
          {onEdit ? (
            <input
              type="text"
              style={{ borderColor: "#2E76FC" }}
              name="search"
              className={styles["form-control-orgs"]}
              value={localFormData.cityGeo}
              onChange={(e) => {
                setLocalFormData({...localFormData, cityGeo: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              value={localFormData.cityGeo}
              onChange={(e) => {
                setLocalFormData({...localFormData, cityGeo: e.target.value})
              }}
              disabled
            />
          )}
        </div>
        <div
          className={`${styles["form-input-container"]} ${styles["no-margin"]}`}
        >
          <label className={styles["organization-label"]}>Street Address</label>
          {onEdit ? (
            <input
              type="text"
              style={{ borderColor: "#2E76FC" }}
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Street Address"
              value={localFormData.address}
              onChange={(e) => {
                setLocalFormData({...localFormData, address: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Street Address"
              value={localFormData.address}
              onChange={(e) => {
                setLocalFormData({...localFormData, address: e.target.value})
              }}
              disabled
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label
            className={styles["organization-label"]}
            style={{ visibility: "hidden" }}
          >
            Street Address
          </label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="შეიყვანეთ მისამართი"
              value={localFormData.addressGeo}
              onChange={(e) => {
                setLocalFormData({...localFormData, addressGeo: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              disabled
              placeholder="შეიყვანეთ მისამართი"
              value={localFormData.addressGeo}
              onChange={(e) => {
                setLocalFormData({...localFormData, addressGeo: e.target.value})
              }}
            />
          )}
        </div>
        <div style={{ width: "100%" }}>
          <div className={styles["form-input-container"]}>
            <label className={styles["organization-label"]}>Phostal Code</label>
            {onEdit ? (
              <input
                type="text"
                name="search"
                style={{ borderColor: "#2E76FC" }}
                className={styles["form-control-orgs"]}
                placeholder="საფოსტო ინდექსი"
                value={localFormData.postalCode}
                onChange={(e) => {
                  setLocalFormData({...localFormData, postalCode: e.target.value})
                }}
              />
            ) : (
              <input
                type="text"
                name="search"
                className={styles["form-control-orgs"]}
                placeholder="საფოსტო ინდექსი"
                disabled
                value={localFormData.postalCode}
                onChange={(e) => {
                  setLocalFormData({...localFormData, postalCode: e.target.value})
                }}
              />
            )}
          </div>
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Website</label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Website URL"
              value={localFormData.websiteUrl}
              onChange={(e) => {
                setLocalFormData({...localFormData, websiteUrl: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Website URL"
              disabled
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Facebook</label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Facebook URL"
              value={localFormData.facebook}
              onChange={(e) => {
                setLocalFormData({...localFormData, facebook: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Facebook URL"
              disabled
              value={localFormData.facebook}
              onChange={(e) => {
                setLocalFormData({...localFormData, facebook: e.target.value})
              }}
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Instagram</label>
          {onEdit ? (
            <input
              type="text"
              style={{ borderColor: "#2E76FC" }}
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Instagram URL"
              value={localFormData.instagram}
              onChange={(e) => {
                setLocalFormData({...localFormData, instagram: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Instagram URL"
              disabled
              value={localFormData.instagram}
              onChange={(e) => {
                setLocalFormData({...localFormData, instagram: e.target.value})
              }}
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Youtube</label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Youtube URL"
              value={localFormData.youtube}
              onChange={(e) => {
                setLocalFormData({...localFormData, youtube: e.target.value})
              }}
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Youtube URL"
              disabled
              value={localFormData.youtube}
              onChange={(e) => {
                setLocalFormData({...localFormData, youtube: e.target.value})
              }}
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>Contact Person</label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Enter Contact Person"
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Contact Person"
              disabled
            />
          )}
        </div>
        <div className={styles["form-input-container"]}>
          <label className={styles["organization-label"]}>
            Contact Person mobile number
          </label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Enter Contact Person mobile number"
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Contact Person mobile number"
              disabled
            />
          )}
        </div>
        <div className={styles["divider"]}></div>
        <p
          className={`bold ${styles["section-head-title"]}`}
          style={{ width: "100%", marginBottom: "12px" }}
        >
          Legal Information
        </p>
        <div
          className={styles["form-input-container"]}
          style={{ marginBottom: "16px" }}
        >
          {onEdit ? (
            <input
              type="file"
              style={{ display: "none", borderColor: "#2E76FC" }}
              id="upload-documents"
            />
          ) : (
            <input
              type="file"
              style={{ display: "none" }}
              id="upload-documents"
              disabled
            />
          )}
          <label
            htmlFor="upload-documents"
            className={styles["form-control-orgs"]}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#828282",
              cursor: "pointer",
            }}
          >
            + Upload Legal Documents
          </label>
        </div>
        <div
          className={styles["tags-content-container"]}
          style={{ marginBottom: "15px" }}
        >
          <div className={styles["tag"]}></div>
          <div className={styles["tag"]}></div>
        </div>
        <div
          className={styles["form-input-container"]}
          style={{ marginBottom: "0px" }}
        >
          <label className={styles["organization-label"]}>ID Number</label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Enter Your ID number"
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Your ID number"
              disabled
            />
          )}
        </div>
        <div
          className={styles["form-input-container"]}
          style={{ marginBottom: "0px" }}
        >
          <label className={styles["organization-label"]}>IBAN</label>
          {onEdit ? (
            <input
              type="text"
              name="search"
              style={{ borderColor: "#2E76FC" }}
              className={styles["form-control-orgs"]}
              placeholder="Enter Your IBAN"
            />
          ) : (
            <input
              type="text"
              name="search"
              className={styles["form-control-orgs"]}
              placeholder="Enter Your IBAN"
              disabled
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AccountInformation;
