import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const FeedPost = ({img, username, avatar}) => {
    return <>
        <PostHeader avatar={avatar} username={username}/>
        <Box marginY={5} borderRadius={4} overflow={"hidden"}>
            <Image src={img} alt={username}/>
        </Box>
        <PostFooter avatar={avatar}/>
    </>
        
    
}

export default FeedPost