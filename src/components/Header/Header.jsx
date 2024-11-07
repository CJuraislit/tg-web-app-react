import React from "react";
import Button from "../Button/Button";

const Header = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <Button onclick={onClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.first_name}</span>
    </div>
  );
};

export default Header;