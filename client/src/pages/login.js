import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { LOGIN } from "../utils/mutations";
import AuthService from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      AuthService.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box className="container my-1">
      <Link as={ReachLink} to="/signup">
        ← Go to Signup
      </Link>

      <h2>Login</h2>
      <FormControl onSubmit={handleFormSubmit}>
        <Box className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Box>
        <Box className="flex-row space-between my-2">
          <FormLabel htmlFor="pwd">Password:</FormLabel>
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </Box>
        {error ? (
          <Box>
            <FormErrorMessage>
              The provided credentials are incorrect
            </FormErrorMessage>
          </Box>
        ) : null}
        <Box className="flex-row flex-end">
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}

export default Login;
