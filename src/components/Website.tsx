"use client";
import Link from "next/link";
import styles from "../app/page.module.css";
import {
  Title,
  Text,
  Button,
  Container,
  Grid,
  Image,
  Box,
} from "@mantine/core";
export default function Website() {
  return (
    <div>
      <div className={styles.main}>
        <Container className={styles.wrapper}>
          <Grid>
            <Grid.Col visibleFrom="md" span={{ lg: 4, md: 3 }}>
              <Box style={{ display: "flex", justifyContent: "end" }}>
                <Image maw="310" h="auto" src={"./images/doctor1.png"} alt="" />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ lg: 8, md: 9 }}>
              <div style={{ justifyContent: "start" }} className={styles.inner}>
                <Title className={styles.smart}>Welcome to</Title>
                <Title className={styles.healthcare}>
                  an{" "}
                  <Text
                    c="#ff4912"
                    component="span"
                    fs="italic"
                    className={styles.system}
                    inherit
                  >
                    expert system
                  </Text>{" "}
                  for diagnosing malaria and typhoid{" "}
                </Title>

                <Box
                  hiddenFrom="md"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Image
                    maw="310"
                    h="auto"
                    src={"./images/doctor1.png"}
                    alt=""
                  />
                </Box>
                <Text
                  mt="xl"
                  pt="lg"
                  fs="italic"
                  size="xl"
                  c="var(--mantine-color-pink-6)"
                  className={styles.description}
                >
                  Please what test will you like to go for?
                </Text>
                <div className={styles.controls}>
                  <Link href={"/diagnose?t=malaria"} passHref>
                    <Button
                      mr={"lg"}
                      radius="xl"
                      c="#fa1b35"
                      bg="var(--mantine-color-white)"
                      className={styles.control}
                      size="lg"
                    >
                      Malaria
                    </Button>
                  </Link>
                  <Link href={"/diagnose?t=typhoid"} passHref>
                    <Button
                      radius="xl"
                      c="#fa1b35"
                      bg="var(--mantine-color-white)"
                      className={styles.control}
                      size="lg"
                    >
                      Typhoid
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
