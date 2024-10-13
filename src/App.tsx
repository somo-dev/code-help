import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./features/layout/layout";
import { Faq } from "./features/faq/faq";
import { ContactUs } from "./features/contact-us/contact-us";
import { About } from "./features/about/about";
import { Home } from "./features/home/home";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "faq", element: <Faq /> },
        { path: "about", element: <About /> },
        { path: "contact-us", element: <ContactUs /> },
      ],
    },
  ]);

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={routes} />
    </MantineProvider>
  );
}
