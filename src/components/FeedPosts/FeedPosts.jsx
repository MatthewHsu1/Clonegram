import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import React, { useState, useEffect } from "react"

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {setIsLoading(false)}, 2000)
    },[])
    return (
        <Container maxWidth={"container.sm"} paddingY={10} paddingX={2}>
            {isLoading && [0,1,2,4].map((_,idx) => (
                <VStack key={idx} gap={4} alignItems={"flex-start"} marginBottom={10}>
                    <Flex>
                        <SkeletonCircle size={10}/>
                        <VStack gap={2} alignItems={"flex-start"} marginX={2}>
                            <Skeleton height={"10px"} width={"200px"}/>
                            <Skeleton height={"10px"} width={"100px"}/>
                        </VStack>
                        
                    </Flex>
                    <Skeleton width={"full"}>
                        <Box height={"500px"}>contents</Box>
                    </Skeleton>
                </VStack>
            ))}

            {!isLoading && (
                <>
                    <FeedPost img="/img1.png" username="Username" avatar="/img1.png"/>
                    <FeedPost img="/img2.png" username="Username2" avatar="/img2.png"/>
                </>
            )}
            
        </Container>
    )
}

export default FeedPosts