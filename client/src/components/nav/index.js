import React from "react";
import Auth from "../../utils/auth";
import Cart from "../cart";

import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Tabs>
          <TabList>
            <Tab className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </Tab>
            <Cart as={Tab} />
          </TabList>
        </Tabs>
      );
    } else {
      return (
        <Tabs>
          <TabList>
            <Tab className="mx-1">
              <Link to="/login">Login</Link>
            </Tab>
            <Tab className="mx-1">
              <Link to="/signup">Signup</Link>
            </Tab>
            <Cart as={Tab} />
          </TabList>
        </Tabs>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <nav aria-labelledby="nav-title">
            <h2>Artsy</h2>
          </nav>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
