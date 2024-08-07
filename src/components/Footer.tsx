import { Grid } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Grid as="footer" placeItems={"center"} pb={4}>
      <p>© 2024 papipupepon</p>
    </Grid>
  );
};
