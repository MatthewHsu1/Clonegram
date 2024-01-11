import { Box, Flex, Spinner } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../components/Navbar/Navbar";

const PageLayout = ( {children}  ) => {
    const {pathname} = useLocation();
    const[user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== "/auth" && user
    const canRenderNavbar = !user && !loading && pathname !== "/auth"
    const checkingUserIsAuth = !user && loading

    if(checkingUserIsAuth){
        return <PageLayoutSpinner />
    }

    return(
        <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
            {/**Sidebar on the left side */}
            {canRenderSidebar  ? (
                <Box width={{base: "70px", md: "240px"}}>
                    <Sidebar />
                </Box> 
                ) : null }
            {/* Navbar */}
            {canRenderNavbar ? <Navbar /> : null}
            {/**Page Content on right side */}
            <Box flex={1} w={{base: "calc(100% -70px)", md: "calc(100% -240px)"}} marginX={"auto"}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};