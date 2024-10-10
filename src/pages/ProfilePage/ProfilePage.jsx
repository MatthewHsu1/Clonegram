import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react"
import ProfileHeader from "../../components/Profile/ProfileHeader"
import ProfileTabs from "../../components/Profile/ProfileTabs"
import ProfilePosts from "../../components/Profile/ProfilePosts"
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername"
import { useParams } from "react-router-dom"
import {Link as RouterLink} from "react-router-dom";

const ProfilePage = () => {
    const { username } = useParams();
    const { isLoading, userProfile } = useGetUserProfileByUsername(username);

    if (!isLoading && !userProfile) {
        return <UserNotFound/>
    }

    return(
        <Container maxWidth={"container.lg"} paddingY={5}>
            <Flex 
                paddingY={10}
                paddingX={4}
                paddingLeft={{base: 4, md: 10}}
                width={"full"}
                marginX={"auto"}
                flexDirection={"column"}
            >
                {!isLoading && userProfile && <ProfileHeader/> }
                {isLoading && <ProfileHeaderSkeleton/>}
            </Flex>
            <Flex
                paddingX={{base:2, sm: 4}}
                maxWidth={"full"}
                marginX={"auto"}
                borderTop={"1px solid"}
                borderColor={"whiteAlpha.300"}
                direction={"column"}
            >
                <ProfileTabs/>
                <ProfilePosts/>
            </Flex>
        </Container>
    )
}

export default ProfilePage;

const UserNotFound = () => {
    return (
        <Flex flexDir={'column'} textAlign={'center'} mx={'auto'}>
            <Text fontSize={'2x1'}>
                User Not Found
            </Text>
            <Link as={RouterLink} to={'/'} color="blue.500" w={'max-content'} mx={'auto'}>
                Go home        
            </Link>
        </Flex>
    )
}

const ProfileHeaderSkeleton = () => {
    return (
        <Flex
            gap={{ base: 4, sm: 10}}
            py={10}
            direction={{ base: 'column', sm: "row"}}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <SkeletonCircle size={24}/>

            <VStack alignItems={{ base: 'center', sm: 'flex-start'}} gap={2} mx={'auto'} flex={1}>
                <Skeleton height={'12px'} width={'150px'} />
                <Skeleton height={'12px'} width={'100px'} />
            </VStack>
        </Flex>
    )
}