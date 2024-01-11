import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import React, { useState } from 'react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants"

const PostFooter = ({username, isProfilePage}) => {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const handleLike = () => {
        if(liked){
            setLiked(false)
            setLikeCount(likeCount - 1)
        }
        else{
            setLiked(true)
            setLikeCount(likeCount + 1)
        }
    }
    
    return ( 
        <Box marginBottom={20} marginTop={"auto"}>
            <Flex alignItems={"center"} gap={4} width={"full"} paddingTop={0} marginBottom={1} marginTop={4}>
                <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
                </Box>
                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo/>
                </Box>
            </Flex>
            <Text fontSize={"sm"} fontWeight={600}>
                {likeCount} likes
            </Text>
            {!isProfilePage && (
                <>
                    <Text fontSize={"sm"} fontWeight={700}>
                        {username}{" "}
                        <Text as={"span"} fontWeight={400}>
                            Caption
                        </Text>
                    </Text>
                    <Text fontSize={"sm"} color={"gray"}>
                        View all 1,000 comments
                    </Text>
                </>
            )}
            <Flex
                alignItems={"center"}
                gap={2}
                justifyContent={"space-between"}
            >
                <InputGroup>
                    <Input variant={"flushed"} placeholder="Add a comment..." fontSize={14}/>
                    <InputRightElement>
                        <Button 
                            fontSize={14} 
                            color={"#7138EC"} 
                            _hover={{color: "#FDA501"}} 
                            fontWeight={600} 
                            cursor={"pointer"}
                            background={"transparent"}
                            transition={"0.2s ease-in-out"}
                        >
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default PostFooter