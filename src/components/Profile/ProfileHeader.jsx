import { Avatar, AvatarGroup, Button, Flex, Text, useDisclosure, VStack } from "@chakra-ui/react"
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";

const ProfileHeader  = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore(state => state.user);
    const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
    const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Flex gap={{base: 4, sm: 10}} paddingY={10} direction={{base:"column", sm: "row"}}>
            <AvatarGroup 
                size={{base: "xl", md: "2xl"}}
                justifySelf={"center"}
                alignSelf={"flex-start"}
                marginX={"auto"}
            >
                <Avatar name="Username" src={userProfile.profilePictureURL} alt="Username logo"/>
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
                        {userProfile.username}
                    </Text>
                    {visitingOwnProfileAndAuth && (
                        <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                            <Button
                                background={"white"}
                                color={"black"}
                                _hover={{background: "whiteAlpha.800"}}
                                size={{base: "xs", md: "sm"}}
                                onClick={onOpen}
                            >
                                Edit Profile
                            </Button>
                        </Flex>
                    )}
                    {visitingAnotherProfileAndAuth && (
                        <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                            <Button background={"blue.500"} color={"white"} _hover={{background: "blue.600"}} size={{base: "xs", md: "sm"}}>
                                Follow
                            </Button>
                        </Flex>
                    )}
                </Flex>
                <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} marginRight={1}>{userProfile.posts.length}</Text>
                        Posts
                    </Text>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} marginRight={1}>{userProfile.followers.length}</Text>
                        Followers
                    </Text>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} marginRight={1}>{userProfile.following.length}</Text>
                        Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"}  fontWeight={"bold"}>{userProfile.fullName}</Text>
                </Flex>
                <Text fontSize={"sm"}>{userProfile.bio}</Text>
            </VStack>
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
        </Flex>
    )
}

export default ProfileHeader