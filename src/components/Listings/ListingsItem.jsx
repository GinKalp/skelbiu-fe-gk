import React, { useState } from "react";
import css from "./ListingsItem.module.css";
import { getFetchAuth } from "../../helpers/fetchHelper";
import { useAuthCtx } from "../../store/authContext";
import Button from "../UI/Button/Button";

const ListingsItem = ({ item, onModify, onDelete }) => {
  const { isLoggedIn, authData } = useAuthCtx();
  const [favorited, setFavorited] = useState(
    isLoggedIn ? item.fav_user : false
  );
  const onFavorite = async () => {
    await getFetchAuth(`/favorites/${item.id}`, authData.token);
    // console.log(fetchData);
    setFavorited(!favorited);
  };

  return (
    <div className={css.card}>
      {isLoggedIn && window.location.pathname !== "/my-account" && (
        <>
          {!favorited && (
            <i
              onClick={onFavorite}
              className="fa fa-heart-o"
              aria-hidden="true"
            />
          )}
          {favorited && (
            <i
              onClick={onFavorite}
              className="fa fa-heart"
              aria-hidden="true"
            />
          )}
        </>
      )}
      <img
        className={css.img}
        src={`${process.env.REACT_APP_URL_NEW}/images/${item.image}`}
        alt={""}
      />
      <div className={css.container}>
        <h4>
          <b>{item.title}</b>
        </h4>
        <p className={css.info}>
          <i className={`fa fa-tag ${css.icon}`} aria-hidden="true" />
          <span>{item.cat_name}</span>
        </p>
        <p className={css.info}>
          <i className={`fa fa-address-card ${css.icon}`} aria-hidden="true" />
          <span>
            <i>{item.town}</i>
          </span>
        </p>
        <p className={css.info}>
          <i className={`fa fa-user-o ${css.icon}`} aria-hidden="true" />
          <span>{item.username}</span>
        </p>
        <h3 className={css.price}>${item.price.toFixed(2)}</h3>
        {isLoggedIn && window.location.pathname === "/my-account" && (
          <Button onClick={() => onModify(item)}>Modify</Button>
        )}
        {isLoggedIn && window.location.pathname === "/my-account" && (
          <Button del onClick={() => onDelete(item)}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListingsItem;
