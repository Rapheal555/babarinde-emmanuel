"use client";

import { Box, Button, Text } from "@mantine/core";

export default function Question({
  quest,
  onClickYes,
  onClickNo,
}: {
  quest: string;
  onClickYes: any;
  onClickNo: any;
}) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "25dvh",
      }}
    >
      <Box>
        <Text ta="center" mb="lg">
          {quest}
        </Text>
        <Button
          onClick={onClickYes}
          size="md"
          m="md"
          px="xl"
          bg={"var(--mantine-color-green-7)"}
          c={"var(--mantine-color-white)"}
        >
          Yes
        </Button>
        <Button
          onClick={onClickNo}
          size="md"
          m="md"
          px="xl"
          c={"var(--mantine-color-white)"}
          bg={"var(--mantine-color-red-7)"}
        >
          No
        </Button>
      </Box>
    </Box>
  );
}
