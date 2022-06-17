import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Profile
        </MenuButton>
        <MenuList zIndex={10000}>
          <MenuItem>
            <Link to="/login">Log-In</Link>
          </MenuItem>
          <MenuItem>Sign-up</MenuItem>
          <MenuItem>
            <Link to="/cart">Cart</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/orders">My Orders</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Profile;
