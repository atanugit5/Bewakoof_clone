import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Td,
  textDecoration,
  Grid,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Image
              src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg"
              m={"auto"}
              w="180px"
              h="20px"
            />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Login
          </Button>
          <Link to="/cart">
            <Box mb="-8px" textAlign="center">
              {/* <CartCounter /> */}
            </Box>

            <Icon as={BsCart3} fontSize={"30px"} />
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
};
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={3}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={8}
                rounded={"xl"}
                minW={"800px"}
              >
                <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box>
      <Link
        href={href}
        role={"group"}
        display={"block"}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("black.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={500} ml="0px">
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            m="0px"
            _hover={{ textDecoration: "underline" }}
          >
            {subLabel}
          </Text>

          {/* <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)", textDecoration:"underline"}}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
        </Flex> */}
        </Stack>
      </Link>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MEN",
    href: "/men",
    children: [
        { label: "Topwear", href: "top-wear-men" },
        { label: "Bottomwear", href: "bottom-wear-men" },
        { label: "Sports & Activewear", href: "sports-wear-men" },
        {
          subLabel: "Printed T-Shirts",
          href: "printed T-shirts",
        },
        {
          subLabel: "Joggers",
          href: "printed T-shirts",
        },
        {
          subLabel: "Active T-Shirts",
          href: "printed T-shirts",
        },
        {
          subLabel: "Plain T-Shirts",
          href: "#",
        },
        {
          subLabel: "Pajams",
          href: "#",
        },
        {
          subLabel: "Sports T-Shirts",
          href: "#",
        },
  
        {
          subLabel: "Shirts",
          href: "#",
        },
        {
          subLabel: "Shorts",
          href: "#",
        },
        {
          subLabel: "Sports Joggers",
          href: "#",
        },
        {
          subLabel: "Kurtas",
          href: "kurtas",
        },
        {
          subLabel: "Jeans & Denims",
          href: "#",
        },
        { label: "Footwear", href: "foot-wear-men" },
        {
          subLabel: "Polo T-Shirts",
          href: "#",
        },
        {
          subLabel: "Boxers",
          href: "#",
        },
        {
          subLabel: "Sliders",
          href: "#",
        },
        {
          subLabel: "Jackets",
          href: "#",
        },
        {
          subLabel: "Trousers & Pants",
          href: "#",
        },
        {
          subLabel: "Flip-Flops & Slipers",
          href: "#",
        },
        { label: "Winterwear", href: "winter-wear-men" },
        { label: "Accessories", href: "top-wear-men" },
        {
          subLabel: "Casual Shoes",
          href: "#",
        },
        {
          subLabel: "Sweatshirt & Hoodie",
          href: "#",
        },
        {
          subLabel: "Backpacks",
          href: "/backpacks",
        },
        {
          subLabel: "Clogs",
          href: "#",
        },
        {
          subLabel: "Winter Jackets",
          href: "#",
        },
        {
          subLabel: "Caps",
          href: "#",
        },
        {},
  
        {
          subLabel: "Winter Joggers",
          href: "#",
        },
        {
          subLabel: "Masks",
          href: "#",
        },
        {},
        {
          subLabel: "Sweaters",
          href: "#",
        },
        {
          subLabel: "Socks",
          href: "#",
        },
        {},
      ],
  },
  {
    label: "WOMEN",
    href: "#",
    children: [
      { label: "Topwear", href: "top-wear-men" },
      { label: "Bottomwear", href: "bottom-wear-men" },
      { label: "Sports & Activewear", href: "sports-wear-men" },
      {
        subLabel: "Printed T-Shirts",
        href: "printed T-shirts",
      },
      {
        subLabel: "Joggers",
        href: "printed T-shirts",
      },
      {
        subLabel: "Active T-Shirts",
        href: "printed T-shirts",
      },
      {
        subLabel: "Plain T-Shirts",
        href: "#",
      },
      {
        subLabel: "Pajams",
        href: "#",
      },
      {
        subLabel: "Sports T-Shirts",
        href: "#",
      },

      {
        subLabel: "Shirts",
        href: "#",
      },
      {
        subLabel: "Shorts",
        href: "#",
      },
      {
        subLabel: "Sports Joggers",
        href: "#",
      },
      {
        subLabel: "Kurtas",
        href: "kurtas",
      },
      {
        subLabel: "Jeans & Denims",
        href: "#",
      },
      { label: "Footwear", href: "foot-wear-men" },
      {
        subLabel: "Polo T-Shirts",
        href: "#",
      },
      {
        subLabel: "Boxers",
        href: "#",
      },
      {
        subLabel: "Sliders",
        href: "#",
      },
      {
        subLabel: "Jackets",
        href: "#",
      },
      {
        subLabel: "Trousers & Pants",
        href: "#",
      },
      {
        subLabel: "Flip-Flops & Slipers",
        href: "#",
      },
      { label: "Winterwear", href: "winter-wear-men" },
      { label: "Accessories", href: "top-wear-men" },
      {
        subLabel: "Casual Shoes",
        href: "#",
      },
      {
        subLabel: "Sweatshirt & Hoodie",
        href: "#",
      },
      {
        subLabel: "Backpacks",
        href: "/backpacks",
      },
      {
        subLabel: "Clogs",
        href: "#",
      },
      {
        subLabel: "Winter Jackets",
        href: "#",
      },
      {
        subLabel: "Caps",
        href: "#",
      },
      {},

      {
        subLabel: "Winter Joggers",
        href: "#",
      },
      {
        subLabel: "Masks",
        href: "#",
      },
      {},
      {
        subLabel: "Sweaters",
        href: "#",
      },
      {
        subLabel: "Socks",
        href: "#",
      },
      {},
    ],
  },
  {
    label: "MOBILE COVER",
    children: [
      {
        label: "Job Board",

        subLabel: "Find your dream design job",
        href: "#",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
];

export default Navbar;
