"use client";

import {
  Button,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";

export default function NextRouter() {
  const router = useRouter();
  const [index, setIndex] = useQueryState(
    "index",
    parseAsInteger
      .withDefault(0)
      .withOptions({ history: "push", scroll: false })
  );

  const onTabClick = (index: number) => {
    setIndex(index);
  };

  const onButtonClick = () => {
    router.push("/");
  };

  return (
    <Grid gridTemplateRows={"1fr auto"}>
      <Tabs index={index} size="md" variant="enclosed" borderColor={"blue.500"}>
        <TabList>
          <Tab onClick={() => onTabClick(0)}>Tab 0</Tab>
          <Tab onClick={() => onTabClick(1)}>Tab 1</Tab>
          <Tab onClick={() => onTabClick(2)}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize={"xl"}>たぶぜろ</Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize={"xl"}>たぶいち</Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize={"xl"}>たぶに</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button colorScheme="black" variant={"link"} onClick={onButtonClick}>
        TOPに戻る
      </Button>
    </Grid>
  );
}
