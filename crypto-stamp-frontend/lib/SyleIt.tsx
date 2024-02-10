import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'

import theme from "@/lib/theme"

export default function StyleIt({children} : {children: React.ReactNode})
        : React.ReactNode {
    return <>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>;
}
