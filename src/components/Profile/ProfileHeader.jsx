import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader  = () => {
    return(
        <Flex gap={{base: 4, sm: 10}} paddingY={10} direction={{base:"column", sm: "row"}}>
            <AvatarGroup 
                size={{base: "xl", md: "2xl"}}
                justifySelf={"center"}
                alignSelf={"flex-start"}
                marginX={"auto"}
            >
                <Avatar name="Username" src="./profilepic.png" alt="Username logo"/>
            </AvatarGroup>
            <VStack alignItems={"start"} gap={2} marginX={"auto"} flex={1}>
                <Flex 
                    gap={4} 
                    direction={{base: "column", sm: "row"}}
                    justifyContent={{base: "center", sm: "flex-start"}}
                    alignItems={"center"}
                    width={"full"}
                >
                    <Text fontSize={{base: "sm", md: "lg"}}>
                        Username
                    </Text>
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                        <Button background={"white"} color={"black"} _hover={{background: "whiteAlpha.800"}} size={{base: "xs", md: "sm"}}>
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} marginRight={1}>0</Text>
                        Posts
                    </Text>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} marginRight={1}>0</Text>
                        Followers
                    </Text>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} marginRight={1}>0</Text>
                        Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"}  fontWeight={"bold"}>Something soemthing</Text>
                </Flex>
                <Text fontSize={"sm"}>Some bio...</Text>
            </VStack>
        </Flex>
    )
}

export default ProfileHeader