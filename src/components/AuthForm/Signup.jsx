import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";


const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        email:"",
        password:""
        
    });
    const [show, setShow] = useState(false);
    const {loading, error, signup} = useSignUpWithEmailAndPassword();

    return (
        <>
            <Input
                placeholder="Email"
                fontSize={14}
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value})}
                type="email"
                size={"sm"}
            />
            <Input
                placeholder="Username"
                fontSize={14}
                type="text"
                value={inputs.username}
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value})}
            />
            <Input
                placeholder="Full Name"
                fontSize={14}
                type="text"
                value={inputs.fullName}
                size={"sm"}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value})}
            />
            <InputGroup>
                <Input
                    placeholder="Password"
                    fontSize={14}
                    type={show ? "text" : "password"}
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value})}
                />
                <InputRightElement height={"full"}>
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShow(!show)}>
                        {show ? <ViewIcon/> : <ViewOffIcon/>}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status="error" fontSize={13} padding={2} borderRadius={4} >
                    <AlertIcon fontSize={12}/>
                    {error.message}
                </Alert>
            )}

            {/*Log in button*/}
            <Button width={"full"} colorScheme="blue" size={"sm"} fontSize={14}
                isLoading={loading} onClick={() => signup(inputs)}
            >
                Sign up
            </Button>
        </>
    )
}

export default Signup