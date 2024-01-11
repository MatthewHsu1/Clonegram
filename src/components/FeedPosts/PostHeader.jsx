import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const PostHeader = ({avatar, username}) => {
    return <>
        <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"} marginY={2}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} al={username} size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    {username}
                    <Box color={"gray.500"}>
                        • 1w
                    </Box>
                </Flex>
            </Flex>
            <Box
            cursor={"pointer"}
            >
               <Text
                fontSize={12}
                color={"#FDA501"}
                fontWeight={"bold"}
                _hover={{
                        color: "#7138EC"
                }}
                transition={"0.2s ease-in-out"}
               >
                    Unfollow
               </Text>
            </Box>
        </Flex>
    </>
}

export default PostHeader