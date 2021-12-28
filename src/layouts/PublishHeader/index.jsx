import React from "react";
import { Button, Menu, Dropdown, Space, Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";

import * as S from "./styles";

function PublishHeader({ setIsShowSidebar, userInfo, setUserInfo, setTheme }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo({});
  };

  return (
    <S.Header>
      <div>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => setIsShowSidebar(true)}
        ></Button>
        Logo
      </div>
      {userInfo.id ? (
        <Space>
          <Select
            defaultValue="light"
            onChange={(value) => setTheme(value)}
            style={{ width: 100 }}
          >
            <Select.Option value="light">Sáng</Select.Option>
            <Select.Option value="dark">Tối</Select.Option>
          </Select>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>Thông tin cá nhân</Menu.Item>
                <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <div>Hello {userInfo.username}</div>
          </Dropdown>
        </Space>
      ) : (
        <Button onClick={() => navigate(ROUTERS.LOGIN)}>Đăng nhập</Button>
      )}
    </S.Header>
  );
}

export default PublishHeader;
