import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { signIn } from "../Redux/Auth/action";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate, useLocation } from "react-router-dom";
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth);
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(signIn({ email: email, password: password }));
    };
    const navigate = useNavigate();
    const location = useLocation();
    console.log("auth", auth);
    useEffect(() => {
      if (location?.state?.pathname && auth) {
        navigate(location?.state?.pathname, { replace: true });
      }
    },[location?.state,navigate,auth]);
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type={"submit"}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  