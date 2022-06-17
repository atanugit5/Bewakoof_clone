import {
    Modal,
    Box,
    Flex,
    Image,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  import React from "react";
  
  const Checkout = ({ cart ,checkOutHandler}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box>
        <Button
          rounded={"none"}
          w={"400px"}
          mt={8}
          size={"lg"}
          py={"7"}
          bg={useColorModeValue("gray.900", "gray.50")}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
          onClick={onOpen}
        >
          CHECKOUT
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Purchase</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cart.map((el) => (
                <Box>
                  <Box m="10px">
                    <Flex>
                      <Image
                        src={el.image}
                        border={"1px solid black"}
                        rounded="lg"
                        objectFit={"contain"}
                        boxSize="100px"
                      />
                      <Text>{el.title}</Text>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={checkOutHandler}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  };
  
  export default Checkout;
  