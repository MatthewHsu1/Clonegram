import { Avatar, Button, Flex, Text } from "@chakra-ui/react"
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
    const {handleLogout, loading, } = useLogout();
    const user = useAuthStore( state => state.user);
    
    if(user==null){
        return null;
    }
    
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Link to={`${user.username}`}>
                    <Avatar size={"lg"} src={user.profilePictureURL} />
                </Link>
                
                <Link to={`${user.username}`}>
                    <Text fontSize={12} fontWeight={"bold"}>
                        {user.username}
                    </Text>
                </Link>
            </Flex>
            <Button
                size={"xs"}
                background={"transparent"}
                _hover={{background: "transparent"}}
                fontSize={14}
                fontWeight={"medium"}
                color={"#FDA501"}
                cursor={"pointer"}
                onClick={handleLogout}
                isLoading={loading}
            >
                Log out
            </Button>
        </Flex>
        
    )
}

export default SuggestedHeader