import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"


const SuggestedUser = ({name, followers, avatar}) => {
    const [isFollowed, setIsFollowed] = useState(false)

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} name={name} size={"md"} />
                <VStack spacing={2} alignItems={"flex-start"}>
                    <Box fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Box>
                    <Box fontSize={11} color={"gray.500"}>
                        {followers} followers
                    </Box>
                </VStack>
            </Flex>
            <Button 
                fontSize={13}
                background={"transparent"}
                padding={0}
                height={"max-content"}
                fontWeight={"medium"}
                color={"#FDA501"}
                cursor={"pointer"}
                _hover={{ color: "#7138EC"}}
                transition={"0.2s ease-in-out"}
                onClick={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    )
}

export default SuggestedUser