import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <Button onclick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.first_name}</span>
    </div>
  );
};

export default Header;
