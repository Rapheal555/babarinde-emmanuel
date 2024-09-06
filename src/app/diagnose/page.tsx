"use client";
import Malaria from "@/components/Malaria";
// import Steps from "@/components/Steps";
import Typhoid from "@/components/Typhoid";
import { Container, Text } from "@mantine/core";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const test = searchParams.get("t");
  let tes = "malaria";
  if (test == "malaria") {
    return (
      <Container mt="xl">
        <Malaria />
      </Container>
    );
  }
  if (test == "typhoid") {
    return (
      <Container mt="xl">
        <Typhoid />
      </Container>
    );
  }
  return (
    <Container mt="xl">
      <Text>Please select what ailment to diagnose</Text>
    </Container>
  );
}
