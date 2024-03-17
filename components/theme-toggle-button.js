import { IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { SunIcon, MoonIcon, ViewIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {  
    const { toggleColorMode} = useColorMode()

    const bgColor = useColorModeValue('#be864e', '#5a189a');
    const iconColor = useColorModeValue('black', 'white');

    return (
        <IconButton aria-label= "toggle theme"
        bg={bgColor}
        color={iconColor}
        // colorScheme={useColorModeValue("blue", "green")}
        icon={useColorModeValue(<ViewIcon />, <ViewIcon />)}
        onClick={toggleColorMode}
        ></IconButton>
    
    )

}
export default ThemeToggleButton