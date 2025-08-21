import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../utils";
import { clearDessert } from "../app/features/dessertsSlice";
import { Fragment } from "react";

export const Order = ({ setOrder }) => {
  const { desserts: product, totalPrice } = useSelector(
    (store) => store.desserts
  );
  const dispatch = useDispatch();
  return (
    <section className="order__confirmed-wrapper">
      <div className="order__confirmed">
        <div className="order__confirmed-info">
          <img
            className="order__confirmed-info-image"
            src="/images/icon-order-confirmed.svg"
            width="48"
            height="48"
            alt=""
          />
          <div className="order__confirmed-info-texts">
            <h2 className="order__confirmed-info-texts-title">
              Order Confirmed
            </h2>
            <p className="order__confirmed-info-texts-description">
              We hope you enjoy your food!
            </p>
          </div>
        </div>
        <div className="order__confirmed-list-wrapper">
          <ul className="order__confirmed__active__list">
            {product.map((product) => {
              return (
                <Fragment key={product.id}>
                  <li className="order__confirmed__active__item">
                    <div className="order__confirmed__active__item-wrapper">
                      <img
                        className="order__confirmed__active__image"
                        width="50"
                        height="50"
                        src={product.image.desktop}
                        alt={product.name}
                      />
                      <div className="order__confirmed__active__wrapper">
                        <h3 className="order__confirmed__active__title">
                          {product.name}
                        </h3>
                        <div className="order__confirmed__active-info">
                          <span className="order__confirmed__active__count">
                            {product.amount}x
                          </span>
                          <span className="order__confirmed__active__price-wrapper">
                            @
                            <span className="order__confirmed__active__price">
                              {formatNumber(product.price)}
                            </span>
                          </span>
                        </div>
                      </div>
                      <span className="order__confirmed__active__allPrice">
                        {formatNumber(product.price * product.amount)}
                      </span>
                    </div>
                  </li>
                  <div className="order__confirmed-line"></div>
                </Fragment>
              );
            })}
          </ul>
          <div className="your-card__order-total" style={{ marginBottom: "0" }}>
            <p className="your-card__order-total-title">Order Total</p>
            <p className="your-card__order-total-price">
              {formatNumber(totalPrice)}
            </p>
          </div>
        </div>
        <button
          className="order__confirmed-btn"
          onClick={() => {
            dispatch(clearDessert());
            setOrder(false);
          }}
        >
          Start New Order
        </button>
      </div>
    </section>
  );
};
