import React, { useState } from "react";
import { Link as ReachLink } from "@reach/router";
import { useMutation } from "@apollo/client";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import AuthService from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

export default function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    AuthService.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box>
      <Link as={ReachLink} to="/login">
        ← Go to Login
      </Link>

      <h2>Signup</h2>
      <FormControl onSubmit={handleFormSubmit}>
        <Box>
          <FormLabel htmlFor="firstName">First Name:</FormLabel>
          <Input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="lastName">Last Name:</FormLabel>
          <Input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="pwd">Password:</FormLabel>
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}
