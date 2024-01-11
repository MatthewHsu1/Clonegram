import { Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
    return (
        <VStack paddingY={8} paddingX={6} gap={4}>
            <SuggestedHeader/>
            <Flex alignItems={"center"} justifyContent={"space-between"} width={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Username
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                    See all
                </Text>
            </Flex>
            <SuggestedUser name="username" followers={1000} avatar="./img1.png"/>
        </VStack>
    )
}

export default SuggestedUsers