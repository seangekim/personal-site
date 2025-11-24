import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    },
    Button: {
        variants: {
            'glass': props => ({
                background: mode('rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.1)')(props),
                backdropFilter: 'blur(10px) saturate(180%)',
                WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                border: '1px solid',
                borderColor: mode('rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.18)')(props),
                boxShadow: mode(
                    '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                )(props),
                color: mode('#202023', 'whiteAlpha.900')(props),
                transition: 'all 0.3s ease',
                _hover: {
                    background: mode('rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.15)')(props),
                    transform: 'translateY(-2px)',
                    boxShadow: mode(
                        '0 6px 12px rgba(0, 0, 0, 0.15)',
                        '0 12px 40px 0 rgba(0, 0, 0, 0.5)'
                    )(props),
                    _disabled: {
                        background: mode('rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.1)')(props),
                        transform: 'none'
                    }
                },
                _active: {
                    background: mode('rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.12)')(props),
                    transform: 'translateY(0px)'
                }
            }),
            'glass-subtle': props => ({
                background: mode('rgba(190, 134, 78, 0.15)', 'rgba(90, 24, 154, 0.15)')(props),
                backdropFilter: 'blur(8px) saturate(150%)',
                WebkitBackdropFilter: 'blur(8px) saturate(150%)',
                border: '1px solid',
                borderColor: mode('rgba(190, 134, 78, 0.3)', 'rgba(90, 24, 154, 0.3)')(props),
                color: mode('#202023', 'whiteAlpha.900')(props),
                transition: 'all 0.3s ease',
                _hover: {
                    background: mode('rgba(190, 134, 78, 0.25)', 'rgba(90, 24, 154, 0.25)')(props),
                    borderColor: mode('rgba(190, 134, 78, 0.5)', 'rgba(90, 24, 154, 0.5)')(props),
                    transform: 'translateY(-1px)',
                    _disabled: {
                        background: mode('rgba(190, 134, 78, 0.15)', 'rgba(90, 24, 154, 0.15)')(props),
                        transform: 'none'
                    }
                },
                _active: {
                    background: mode('rgba(190, 134, 78, 0.2)', 'rgba(90, 24, 154, 0.2)')(props),
                    transform: 'translateY(0px)'
                }
            })
        }
    }
}

const fonts = {
    heading: "'M plus rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme