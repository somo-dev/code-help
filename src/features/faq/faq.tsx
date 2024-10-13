import {
  Container,
  Title,
  Accordion,
  Image,
  Flex,
  Button,
  Group,
  List,
  rem,
  ThemeIcon,
  Text,
} from "@mantine/core";
import classes from "./faq.module.css";
import { IconCheck } from "@tabler/icons-react";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];
export function Faq() {
  return (
    <>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br />{" "}
              components library
            </Title>
            <Text c="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>
          </div>
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"
            className={classes.image}
          />
        </div>
      </Container>
      <div className={classes.bgimg}>
        <Container size="lg" className={classes.wrapper}>
          <Title ta="center" className={classes.title}>
            Frequently Asked Questions
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>
                How can I reset my password?
              </Accordion.Control>
              <Accordion.Panel>
                {" "}
                <Flex>
                  {placeholder}
                  <Image
                    className={classes.faqImage}
                    m={10}
                    ml={30}
                    src={images[1]}
                    height={220}
                    w={220}
                  />
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>
                Can I create more that one account?
              </Accordion.Control>
              <Accordion.Panel>
                <Flex>
                  {placeholder}
                  <Image
                    className={classes.faqImage}
                    m={10}
                    ml={30}
                    src={images[0]}
                    height={220}
                    w={220}
                  />
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>
                How can I subscribe to monthly newsletter?
              </Accordion.Control>
              <Accordion.Panel>
                {" "}
                <Flex>
                  {placeholder}
                  <Image
                    className={classes.faqImage}
                    m={10}
                    ml={30}
                    src={images[4]}
                    height={220}
                    w={220}
                  />
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>
                Do you store credit card information securely?
              </Accordion.Control>
              <Accordion.Panel>
                {" "}
                <Flex>
                  {placeholder}
                  <Image
                    className={classes.faqImage}
                    m={10}
                    ml={30}
                    src={images[2]}
                    height={220}
                    w={220}
                  />
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>
                What payment systems to you work with?
              </Accordion.Control>
              <Accordion.Panel>
                {" "}
                <Flex>
                  {placeholder}
                  <Image
                    className={classes.faqImage}
                    m={10}
                    ml={30}
                    src={images[3]}
                    height={220}
                    w={220}
                  />
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
}
