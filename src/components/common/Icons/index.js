import React from "react";
import {
  FaSignOutAlt,
  FaPenSquare,
  FaRegTrashAlt,
  FaTimes
} from "react-icons/fa";
import {
  IoMdHome,
  IoIosAdd,
  IoIosListBox,
  IoIosSettings
} from "react-icons/io";

export const Icons = {
  add: <IoIosAdd color="#ffffff" size={26} />,
  delete: <FaRegTrashAlt size={20} />,
  edit: <FaPenSquare size={20} />,
  home: <IoMdHome size={26} />,
  ideas: <IoIosListBox size={26} />,
  logout: <FaSignOutAlt size={26} />,
  settings: <IoIosSettings size={26} />,
  times: <FaTimes size={20} />
};
