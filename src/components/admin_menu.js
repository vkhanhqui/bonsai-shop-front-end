import React from "react";
import { Menu } from "antd";
import Chart from "../components/Chart";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const AdminMenu = () => {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      // theme="dark"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 250,
        height: 600,
        marginLeft: -215,
        marginTop: -80,
        marginRight: -50,
        marginBottom: -80,
      }}
      className="menu"
    >
      <Menu.Item key="sub1" icon={<MailOutlined />} title="Tổng quan">
        <Link to="/overview" className="cart-btn">
          Tổng quan
        </Link>
      </Menu.Item>
      <Menu.Item
        key="sub2"
        icon={<AppstoreOutlined />}
        title="Quản Lý Đơn Hàng"
      >
        <Link to="/manage-bill" className="cart-btn">
          Quản Lý Đơn Hàng
        </Link>
      </Menu.Item>
      <Menu.Item key="sub4" icon={<SettingOutlined />} title="Quản Lý Sản Phẩm">
        <Link to="/manage-product" className="cart-btn">
          Quản Lý Sản Phẩm
        </Link>
      </Menu.Item>
      <Menu.Item
        key="sub5"
        icon={<SettingOutlined />}
        title="Quản Lý Loại Sản Phẩm"
      >
        <Link to="/manage-category" className="cart-btn">
          Quản Lý Loại Sản Phẩm
        </Link>
      </Menu.Item>
      <Menu.Item
        key="sub6"
        icon={<SettingOutlined />}
        title="Quản Lý Nhân Viên"
      >
        <Link to="/manage-staff" className="cart-btn">
          Quản Lý Nhân Viên
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default AdminMenu;
