import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../utils";
import { removeDessert } from "../app/features/dessertsSlice";

export const YourCard = ({ setOrder }) => {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.desserts
  );

  const dispatch = useDispatch();

  return (
    <div className="your-card">
      <h3 className="your-card__title">Your cart ({totalAmount})</h3>
      {desserts.length > 0 ? (
        <div className="your-card__list-wrapper">
          <div className="your-card__list">
            {desserts.map(({ name, amount, price, id }, index) => {
              return (
                <div key={id} className="your-card__item">
                  <h3 className="your-card__item-title">{name}</h3>
                  <div className="your-card__item-information">
                    <p className="your-card__item-information-count">
                      {amount}x
                    </p>
                    <p className="your-card__item-information-price">
                      @ {formatNumber(price)}
                    </p>
                    <p className="your-card__item-information-totalPrice">
                      {formatNumber(price * amount)}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeDessert(id))}
                    className="your-card__item-clear-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                    >
                      <path
                        fill="#CAAFA7"
                        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                      />
                    </svg>
                  </button>
                  {desserts.length - 1 > index ? (
                    <div
                      className="your-card__item-line"
                      style={{ marginTop: "1.6rem" }}
                    ></div>
                  ) : (
                    <div
                      className="your-card__item-line"
                      style={{ marginTop: "2.4rem" }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="your-card__order-total">
            <p className="your-card__order-total-title">Order Total</p>
            <p className="your-card__order-total-price">
              {formatNumber(totalPrice)}
            </p>
          </div>
          <div className="your-card_carbon">
            <img
              src="./images/icon-carbon-neutral.svg"
              alt=""
              width={20}
              height={20}
            />
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <button
            onClick={() => {
              setOrder(true);
            }}
            className="your-card__confirm"
          >
            <p>Confirm Order</p>
          </button>
        </div>
      ) : (
        <div className="your-card__empty">
          <img src="./images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
};
