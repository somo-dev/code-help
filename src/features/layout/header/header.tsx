import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconAngle } from "@tabler/icons-react";
import classes from "../header/header.module.css";
import { Link } from "react-router-dom";
import { ActionToggle } from "../../../components/theme-toggle/action-toggle";

const links = [
  { link: "/faq", label: "FAQs" },
  { link: "/about", label: "About us" },
  { link: "/contact-us", label: "Contact us" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      // onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Link to="/">
            <IconAngle
              style={{ width: rem(26), height: rem(26) }}
              stroke={2.5}
            />
          </Link>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
          <ActionToggle />
        </Group>
      </div>
    </header>
  );
}
