import { Box, Container, Flex } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPosts/FeedPosts"
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"

const HomePage = () => {
    return <Container maxWidth={"container.lg"}>
        <Flex gap={20}>
            <Box flex={2} paddingY={10}>
                <FeedPosts />
            </Box>

            <Box flex={3} marginRight={20} display={{base: "none", lg: "block"}} maxWidth={"300px"}> 
                <SuggestedUsers />
            </Box>
        </Flex>
    </Container>
}

export default HomePage