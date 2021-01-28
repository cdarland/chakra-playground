import { Box, Flex, Spacer, Heading, useBreakpointValue } from "@chakra-ui/react";

const Header = () => {
  const flexVariant = useBreakpointValue({ base: "column", md: "row" });

  return (
    <header>
      <Box position="fixed" width="100vw" zIndex="zIndices.fixedElement" padding="20px" margin="0 0 20px" bg="brand.700">
        <Flex direction={flexVariant} align="center">
          <Box>
            <Heading as="h1" size="xl">Hello World</Heading>
          </Box>
          <Spacer/>
          <navigation>
            <Box>
              <Heading as="h2" size="l">Hello World</Heading>
            </Box>
          </navigation>
          <Spacer/>
          <Heading as="h2" size="l">Hello Other Stuff</Heading>
        </Flex>
      </Box>
    </header>    
  );  
};

export default Header;