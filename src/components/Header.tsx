import { Grid, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Grid as="header" placeItems={"center"} pt={10}>
      <Text fontWeight={"bold"} fontSize={"4xl"}>
        nuqs demo
      </Text>
    </Grid>
  );
};
