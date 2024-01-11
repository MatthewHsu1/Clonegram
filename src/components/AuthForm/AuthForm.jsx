import { Box, Image,  VStack, Flex, Text } from "@chakra-ui/react"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)

    return(
        <>
            <Box border={"1px solid white"} borderRadius={4} padding={5} maxWidth={"500px"} minWidth={"300px"}>
                <VStack spacing={4}>
                    <Image src="/ManaGram.jpg" cursor={"pointer"} alt="ManaGram" width="auto"/>

                    {isLogin ? <Login/> : <Signup/>}

                    {/*--------- Or ---------- */}
                    <Flex alignItems={"center"} justifyContent={"center"} marginY={4} gap={1} width={"full"}>
                        <Box flex={2} height={"1px"} background={"gray.400"}/>
                        <Text marginX={1} color={"gray.400"}>Or</Text>
                        <Box flex={2} height={"1px"} background={"gray.400"}/>
                    </Flex>
                    <GoogleAuth loginOrSignUp={isLogin ? "Log in ": "Sign up "}/>
                </VStack>
            </Box>

            <Box border={"1px solid white"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box marginX={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account"}
                    </Box>
                    <Box marginX={2} fontSize={14} onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                        {isLogin ? "Sign Up" : "Log in"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}



export default AuthForm