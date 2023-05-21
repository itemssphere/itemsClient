const SimpleDataTable = () => {
  return (
    <div class="table-container">
      <ul class="table-head">
        <li class="table-image thead bold"></li>
        <li class="table-product thead bold">Product</li>
        <li class="table-quantity thead bold" style="text-align: right;">
          Quantity:
        </li>
        <li class="table-sum thead bold" style="text-align: right;">
          Sum:
        </li>
        <li class="table-date thead bold" style="text-align: right;">
          Date:
        </li>
        <li class="table-select thead bold"></li>
      </ul>
      <div class="table-body">
        <ul class="table-row" style="border-top: 1px solid #E6E6E6;">
          <div class="product-table-show-on-mobile">
            <li class="image-col">
              <div
                href="#"
                class="table-product-image"
                style="background-image: url('../image/iphone-banner-2.jpg');"
              ></div>
            </li>
            <li class="col-standard product-col">
              <div class="product-description-column">
                <div class="product-status">New</div>
                <a href="#" class="product-description-table">
                  <p class="product-description-table">
                    TCL 40S325 40 Inch 1080p Smart LED Roku TV
                  </p>
                </a>
                <div class="product-price-table">
                  <p class="product-price-current-table bold">
                    <input
                      type="text"
                      value="1,239.39"
                      disabled
                      class="editable-inputs bold"
                    />{" "}
                    ₾
                  </p>
                  <p class="product-price-old-price-table">
                    <input
                      type="text"
                      value="1,430.30"
                      class="editable-inputs"
                    />{" "}
                    ₾
                  </p>
                </div>
              </div>
            </li>
          </div>
          <li class="image-col product-table-hide-on-mobile">
            <div
              href="#"
              class="table-product-image"
              style="background-image: url('../image/iphone-banner-2.jpg');"
            ></div>
          </li>
          <li class="col-standard product-col product-table-hide-on-mobile">
            <div class="product-description-column">
              <div class="product-status">New</div>
              <a href="#" class="product-description-table">
                <p class="product-description-table">
                  TCL 40S325 40 Inch 1080p Smart LED Roku TV
                </p>
              </a>
              <div class="product-price-table">
                <p class="product-price-current-table bold">
                  <input
                    type="text"
                    value="1,239.39"
                    disabled
                    class="editable-inputs bold"
                  />{" "}
                  ₾
                </p>
                <p class="product-price-old-price-table">
                  <input type="text" value="1,430.30" class="editable-inputs" />{" "}
                  ₾
                </p>
              </div>
            </div>
          </li>
          <li class="col-standard counter-col set-width">
            <p class="thead-on-mobile bold">Quantity:</p>
            <div class="product-counter">
              <button class="counter-buttons">-</button>
              <input type="text" class="counter-input" value="1" />
              <button class="counter-buttons">+</button>
            </div>
          </li>
          <li class="sum-col set-width">
            <p class="thead-on-mobile bold">Sum:</p>
            <p class="bold fs20">1239.39₾</p>
          </li>
          <li class="date-col set-width">
            <p class="thead-on-mobile bold">Date:</p>
            <section>
              <div>
                <p class="date-col-title">Created:</p>
                <p class="date-col-value">2020-03-30</p>
              </div>
              <div>
                <p class="date-col-title">Updated:</p>
                <p class="date-col-value">2020-03-30</p>
              </div>
            </section>
          </li>
          <li class="actions-col set-width">
            <div class="flex-content">
              <p class="thead-on-mobile bold" style="visibility: hidden;">
                Sum:
              </p>
              <select
                name=""
                id=""
                disabled
                class="select-form-control"
                style=" margin-bottom: 20px;width: 150px; height: 32px; background: #F6F6F6; color: #707070; border-right-color: #F6F6F6;"
              >
                <option value="selling">Selling</option>
                <option value="opt1">opt1</option>
                <option value="opt2">opt2</option>
              </select>
            </div>
            <div class="actions-btns-table">
              <a href="#" class="hide-on-mobile-device">
                Edit Product
              </a>
              <button class="show-on-mobile-device">
                <img src="../image/svg/edit-pen.svg" alt="" />
              </button>
              <button class="remove-product-from-list-btn">
                <img src="../image/svg/trash.svg" alt="" />
              </button>
            </div>
          </li>
        </ul>
        <div class="show-more-btn-container">
          <button class="load-more">More</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleDataTable;
