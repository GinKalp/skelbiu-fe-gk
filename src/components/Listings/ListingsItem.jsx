import React, { useState } from "react";
import css from "./ListingsItem.module.css";
import { getFetchAuth } from "../../helpers/fetchHelper";
import { useAuthCtx } from "../../store/authContext";
import Button from "../UI/Button/Button";

const ListingsItem = ({ item, onModify }) => {
  const { isLoggedIn, authData } = useAuthCtx();
  const [favorited, setFavorited] = useState(
    isLoggedIn ? item.fav_user : false
  );
  const onFavorite = async () => {
    const fetchData = await getFetchAuth(
      `/favorites/${item.id}`,
      authData.token
    );
    console.log(fetchData);
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
        <p>{item.body}</p>
        <h3>${item.price.toFixed(2)}</h3>
        {isLoggedIn && window.location.pathname === "/my-account" && (
          <Button onClick={() => onModify(item)}>Modify</Button>
        )}
      </div>
    </div>
  );
};

export default ListingsItem;
