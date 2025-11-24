import { IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { SunIcon, MoonIcon, ViewIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const { toggleColorMode} = useColorMode()

    return (
        <IconButton aria-label= "toggle theme"
        variant="glass"
        icon={useColorModeValue(<ViewIcon />, <ViewIcon />)}
        onClick={toggleColorMode}
        ></IconButton>

    )

}
export default ThemeToggleButton