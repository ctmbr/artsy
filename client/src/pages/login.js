import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import
  {
    Box,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
  } from "@chakra-ui/react";

import { LOGIN } from "../utils/mutations";
import AuthService from "../utils/auth";

function Login(props)
{
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) =>
  {
    event.preventDefault();
    try
    {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      AuthService.login(token);
    } catch (e)
    {
      console.log(e);
    }
  };

  const handleChange = (event) =>
  {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box className="form">
      <FormControl onSubmit={handleFormSubmit}>
        <Box>
          <FormLabel htmlFor="email">Email address:</FormLabel>
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
        {error ? (
          <Box>
            <FormErrorMessage>
              The provided credentials are incorrect
            </FormErrorMessage>
          </Box>
        ) : null}
        <Box onClick={handleFormSubmit} className="flex-row flex-end">
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}

export default Login;
