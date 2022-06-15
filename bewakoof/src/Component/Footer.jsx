import { Box, Image, Text, Link, Input, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as NLink } from "react-router-dom";
const Footer = () => {
  return (
    <Box bgColor={"rgb(22, 21, 21, 0.99)"} textColor="white" pb={"100px"}>
      <Box w={"80%"} m="auto" pt="80px" mb="10px">
        <NLink to="/">
          <Image
            w={"180px"}
            ml="0px"
            src={require("../Image/Bewakoof_icon.png")}
          />
        </NLink>
      </Box>
      <Box
        w={"77%"}
        m="auto"
        display={"flex"}
        justifyContent="space-between"
        textAlign={"left"}
      >
        <Box>
          <Text fontSize="sm" color={"rgba(228, 228, 13)"} mb="20px">
            CUSTOMER SERVICE
          </Text>
          <Text fontSize="sm">Contact Us</Text>
          <Text fontSize="sm">Track Order</Text>
          <Text fontSize="sm">Return Order</Text>
          <Text fontSize="sm">Cancel Order</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color={"rgba(228, 228, 13)"} mb="20px">
            COMPANY
          </Text>
          <Text fontSize="sm">About Us</Text>
          <Text fontSize="sm">We're Hiring</Text>
          <Text fontSize="sm">Terms & Conditiions</Text>
          <Link href="https://www.bewakoof.com/privacy-policy-and-disclaimer">
            Privacy Policy
          </Link>
          <Text fontSize="sm">Blog</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color={"rgba(228, 228, 13)"} mb="20px">
            CONNECT WITH US
          </Text>
          <Link display={"flex"} fontSize="25px">
            <i className="fa fa-facebook-square"></i>
            <Text fontSize={"xs"} p="5px">
              4.7M People Like this
            </Text>
          </Link>
          <Link display={"flex"} fontSize="25px" mt="10px">
            <i className="fa fa-instagram"></i>
            <Text fontSize={"xs"} p="5px">
              1M Followers
            </Text>
          </Link>
          <Box display={"flex"} gap="20px" mt="10px">
            <Link display={"flex"} fontSize="20px">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link display={"flex"} fontSize="20px">
              <i className="fa fa-pinterest-p"></i>
            </Link>
            <Link display={"flex"} fontSize="20px">
              <i className="fa fa-snapchat-ghost"></i>
            </Link>
            <Link display={"flex"} fontSize="20px">
              <i className="fa fa-apple"></i>
            </Link>
          </Box>
        </Box>
        <Box>
          <Text fontSize="sm" color={"rgba(228, 228, 13)"} mb="20px">
            KEEP UP TO DATE
          </Text>
          <Flex>
            <Input
              w={"200px"}
              border="none"
              borderRadius="0"
              borderBottom={"1px solid yellow"}
              type={"email"}
              placeholder="Enter Email Id"
            />
            <Input
              w={"120px"}
              fontSize="13px"
              bgColor={"yellow"}
              textColor="black"
              border={"none"}
              borderRadius="0"
              type="submit"
              value="SUBSCRIBE"
            />
          </Flex>
        </Box>
      </Box>
      <Box
        w={"75%"}
        ml="11%"
        mt="30px"
        display={"flex"}
        gap="10%"
        textAlign={"left"}
      >
        <Box>
          <Text fontSize="sm" mb="20px">
            15 Days return policy*
          </Text>
          <Text fontSize="sm">Cash on delivery*</Text>
        </Box>
        <Box>
          <Text fontSize={"sm"} color="rgba(228, 228, 13)" mb="20px">
            DOWNLOAD THE APP
          </Text>
          <Box display={"flex"} gap="5px">
            <Link href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en">
              <Image
                w="100px"
                src="https://images.bewakoof.com/web/app_android_v1.png"
              />
            </Link>
            <Link href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8">
              <Image
                w="100px"
                src="https://images.bewakoof.com/web/app_ios_v1.png"
              />
            </Link>
          </Box>
        </Box>
        <Box>
          <Text color="rgba(228, 228, 13)" mb="20px">
            100% SECURE PAYMENT
          </Text>

          <Image
            w="250px"
            src="https://images.bewakoof.com/web/secure-payments-image.png"
          />
        </Box>
      </Box>
      <Box w="80%" m="auto" mt="20px">
        <hr />
      </Box>
      <Box w="80%" m="auto" textAlign={"left"}>
        <Text mt="20px" fontSize={"lg"}>BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.</Text>
        <Text mt="20px" fontSize={"sm"}>
          Founded in 2012, Bewakoof is a lifestyle fashion brand that makes
          creative, distinctive fashion for the trendy, contemporary Indian.
          Bewakoof was created on the principle of creating impact through
          innovation, honesty and thoughtfulness.
        </Text>
        <Text mt="20px" fontSize={"sm"}>
          With a team of 400 members, and 2mn products sold till date. We like
          to experiment freely, which allows us to balance creativity and
          relatability, and our innovative designs. Our range of products is
          always fresh and up-to-date, and we clock sales of over 1 lakh
          products a month. Our innovation focus extends to our operations as
          well. We are vertically integrated, manufacture our own products, and
          cut out the middleman wherever possible. This direct-to-consumer model
          allows us to create high-quality fashion at affordable prices. A
          thoughtful brand, we actively attempt to minimize our environmental
          footprint and maximize our social impact. These efforts are integrated
          right into our day-to-day operations, from rainwater harvesting to
          paper packaging to employee benefits. To create an accessible,
          affordable and thoughtful experience of online shopping in India.
        </Text>
        <Text mt="20px" fontSize={"lg"}>
          ONLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND
          SUPER-EXCITING!
        </Text>
        <Text mt="20px" fontSize={"sm"}>
          Online Shopping has always been a fun and exciting task for most and
          more so when the shopping mall is none other than your own house. We
          have all had days when we have planned trips to the clothing store in
          advance, dreaming about what we would buy once we get there. Now we
          wouldnt think twice before indulging in some online shopping. Well,
          cut to todays time and age, you can do all this from the comfort of
          your home while enjoying many online shopping offers, right from
          amazing deals and discounts to one of the most robust user interface
          amongst most online shopping sites in India, with many shopping
          filters to make your shopping experience truly hassle free. This in
          our own words is what we call Bewakoof.com.
        </Text>
        <Text mt="20px" fontSize={"sm"}>
          Bewakoof, THE place to be when it comes to the coolest in online
          fashion, offers you fine, high-quality merchandise go ahead and
          indulge in a bit of online shopping for men and womens fashion. So
          browse through the exciting categories we have on offer from mens
          fashion to basic mens clothing as well as wide variety in womenswear
          and womens clothes to the amazing range of accessories, fill up your
          carts and get fast home delivery for all orders. All of this topped
          with our exclusive online shopping offers makes for an exciting,
          irresistible and uber cool combo! You can even gift some to your near
          and dear ones while being absolutely certain that it will put a smile
          on their faces.
        </Text>
        <Text mt="20px" fontSize={"lg"}>
          BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!
        </Text>
        <Text mt="20px" fontSize={"sm"}>
          Online fashion is definitely more accessible with Bewakoof.com.
          Explore the latest collections in Marvel t-shirts including avengers
          t-shirts and captain America t-shirts in official merchandise. Apart
          from these, quirkiest of T-shirts that you wont find on any online
          shopping sites in India are showcased at Bewakoof.com. If your
          wardrobe has been longing for a cool overhaul then bewakoof.com will
          certainly be your best bet amongst all online shopping sites. Also,
          take a tour of our bewakoof blog to stay abreast with the latest
          runway trends and be a trendsetter among your immediate circles. What
          we wear speaks volumes of us they say. But what if what you wore
          actually spoke what your mood was! Havent we all wondered where we
          could get those quirky t-shirts and sport them with confidence? Sure
          otherwise getting them made or even buying them from otherwise
          expensive online shopping sites for clothes may cost you substantially
          but with Bewakoof.com, you will understand that you do not have to
          spend a fortune on online fashion to look great. Sliders, joggers,
          sweatshirts, bag and bag packs and so much more are just some of the
          other items you can grab hold of here.
        </Text>
        <Text mt="20px" fontSize={"lg"}>
          AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP
          NOWHERE ELSE!
        </Text>
        <Text mt="20px" fontSize={"sm"}>
          Choose your product, get it ordered online, and we ensure that its
          delivery happens right at your doorstep anywhere in India. You just
          need to take care of the payment for the product from the comfort of
          your home, while we ensure free shipping all the time on almost
          everything with no strings attached. For any second thoughts after
          purchase, we have in place a return policy as well. One of the best
          you will find on any online shopping sites in India. For your online
          shopping experience to be safe and risk-free, we offer Cash On
          Delivery (COD) facility too. So you dont have to worry anymore about
          your hard earned money being stuck when you buy clothes online at
          bewakoof.com. Avail exciting online shopping offers like designs of
          the day and colour of the month when you shop with us. Make sure to
          use our easy 15-day returns policy, card or cash on delivery option
          and other customer-friendly features. A comprehensive sizing guide and
          detailed product descriptions coupled with high-resolution product
          shots will give you all the information to make the right buying
          decision. Give your wardrobe the much-needed upgrade with uber cool
          clothing head to Bewakoof.com for a great online shopping india
          experience now! Could you have asked for more?
        </Text>
        <Text mt="20px" fontSize={"lg"}>DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!</Text>
        <Text mt="20px" fontSize={"sm"}>
          We dont just offer you exciting options in online fashion but also
          give you amazing accessories with really cool bags and bag packs to
          choose from. Our bags and backpacks are compact, hassle-free and easy
          to stuff things in. And all of this with the swag that you get to
          carry along with it. Cool designs are what form a major part of our
          online fashion and we also ensure our accessories section doesnt feel
          left out!
        </Text>
        <Text mt="20px" fontSize={"sm"}>
          As for our accessories collection, they are also manufactured with
          impeccable quality materials. Our mobile covers are made from hard and
          durable polycarbonate, with a matte finish that will make for a great
          protection for your phone with the rough use that we put them through
          nowadays.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
