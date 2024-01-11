import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Comment from "../Comment/Comment"
import PostFooter from "../FeedPosts/PostFooter"

const ProfilePost = ({img}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            <GridItem 
                cursor={"pointer"}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                position={"relative"}
                aspectRatio={1/1}
                onClick={onOpen}    
            >
                <Flex
                    opacity={0}
                    _hover={{opacity: 1}}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    background={"blackAlpha.700"}
                    transition={"all 0.3 ease"}
                    zIndex={1}
                    justifyContent={"center"}
                >
                    <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                        <Flex>
                            <AiFillHeart size={20} />
                            <Text fontWeight={"bold"} marginLeft={2}>
                                7
                            </Text>
                        </Flex>
                        <Flex>
                            <FaComment size={20}/>
                            <Text fontWeight={"bold"} marginLeft={2}>
                                7
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Image src={img} alt="profile post" width={"100%"} height={"100%"} objectFit={"cover"} />
            </GridItem>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                isCentered={true}
                size={{base: "3xl", md: "5xl"}}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody background={"black"} paddingBottom={5}>
                        <Flex gap={4} width={{base: "90%", sm: "70%", md: "full"}} marginX={"auto"}>
                            <Box
                                marginY={"auto"}
                                borderRadius={4}
                                overflow={"hidden"}
                                border={"1px solid"}
                                borderColor={"whiteAlpha.300"}
                                flex={1.5}
                            >
                                <Image src={img} alt="profile post"/>
                            </Box>
                            <Flex flex={1} flexDirection={"column"} paddingX={10} display={{base: "none", md: "flex"}}>
                                <Flex justifyContent={"space-between"} alignItems={"center"}>
                                    <Flex alignItems={"center"} gap={4}>
                                        <Avatar src="/profilepic.png" size={"sm"} name={"Username"}/>
                                        <Text fontWeight={"bold"} fontSize={12}>
                                            Username
                                        </Text>
                                    </Flex>
                                    <Box _hover={{bg: "whiteAlpha.300", color: "red.600"}} borderRadius={4} padding={1}>
                                        <MdDelete size={20} cursor={"pointer"}/>
                                    </Box>
                                </Flex>
                                <Divider marginY={4} background={"gray.500"} />
                                <VStack width={"full"} alignItems={"start"} maxHeight={"450px"} overflowY={"auto"}>
                                    <Comment createdAt="1d age" username="username" profilePic="/profilepic.png" text={"Dummy images from unsplash"}/>
                                    <Comment createdAt="1d age" username="username" profilePic="/profilepic.png" text={"Dummy images from unsplash"}/>
                                </VStack>
                                <Divider marginY={4} background={"gray.800"}/>
                                <PostFooter isProfilePage={true}/>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfilePost