import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Accordion, Box, Breadcrumb, BreadcrumbItem, Button, Heading, HStack, Image, Link, Spacer, Text, Tooltip, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextHead from "next/head"


export default function Component() {
  const main_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [Event, notConnected] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event([E('main_state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])

  const ref_header_color = useRef(null); refs['ref_header_color'] = ref_header_color;

  return (
  <Fragment><Fragment>
  <VStack sx={{"width": "100%", "minHeight": "100vh", "spacing": "0rem", "padding": "0", "margin": "0"}}>
  <Box sx={{"width": "100%", "display": ["none", "none", "none", "block"]}}>
  <HStack id={`header_color`} ref={ref_header_color} sx={{"width": "100%", "height": "50px", "position": "sticky", "boxShadow": "0 3px 6px 0 rgba(0, 0, 0, 0.5)", "transition": "height 350ms ease", "top": "0", "zIndex": "2", "backgroundColor": "black"}}>
  <Box sx={{"width": "100%", "paddingLeft": ["", "", "", "4rem", "10rem"], "paddingRight": ["", "", "", "4rem", "10rem"], "transition": "all 550ms ease", "display": ["none", "none", "none", "block"]}}>
  <HStack>
  <Link as={NextLink} href={`/`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Heading sx={{"fontSize": ["100%", "115%", "130%", "135%", "150%"], "color": "white", "transition": "all 550ms ease", "opacity": "1", "_hover": {"opacity": "0.85"}, "paddingRight": "3.5rem"}}>
  <Tooltip label={`Reflexify`} sx={{"cursor": "pointer"}}>
  {`Reflexify`}
</Tooltip>
</Heading>
</Link>
  <HStack spacing={`2rem`} sx={{"alignItems": "end", "transition": "opacity 500ms ease 500ms"}}>
  {main_state.header_state.withNav.map((inqtzqqz, i) => (
  <Link as={NextLink} href={inqtzqqz.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {inqtzqqz.at(0)}
</Heading>
</Link>
))}
</HStack>
  <Spacer/>
  <Tooltip label={`Switch theme mode`}>
  <Button colorScheme={`None`} onClick={toggleColorMode} sx={{"color": "white"}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</Tooltip>
  <Tooltip label={`Go to repository`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <HStack spacing={`1.15rem`} sx={{"cursor": "pointer"}}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='24' height='24' src='https://img.icons8.com/ios-filled/50/000000/git.png' style='filter: brightness(0) invert(1);'/>"}}/>
  <VStack alignItems={`start`} spacing={`0rem`}>
  <HStack>
  <Text sx={{"color": "white", "fontWeight": "semibold"}}>
  {`LineIndent/reflexify`}
</Text>
</HStack>
  <HStack>
  <HStack spacing={`0.35rem`}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='10' height='10' src='https://img.icons8.com/ios-filled/50/price-tag.png' style='filter: brightness(0) invert(1);' />"}}/>
  <Text sx={{"color": "white", "fontSize": 11}}>
  {`reflexify-0.0.8`}
</Text>
</HStack>
  <HStack spacing={`0.35rem`}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='10' height='10' src='https://img.icons8.com/ios-filled/50/star--v1.png' style='filter: brightness(0) invert(1);'/>"}}/>
  <Text sx={{"color": "white", "fontSize": 11}}>
  {`25`}
</Text>
</HStack>
  <HStack spacing={`0.35rem`}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='10' height='10' src='https://img.icons8.com/ios/50/code-fork.png' style='filter: brightness(0) invert(1);'/>"}}/>
  <Text sx={{"color": "white", "fontSize": 11}}>
  {`1`}
</Text>
</HStack>
</HStack>
</VStack>
</HStack>
</Link>
</Tooltip>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingLeft": ["1rem", "1rem", "0.5rem", "", ""], "paddingRight": ["1rem", "1rem", "0.5rem", "", ""], "transition": "all 550ms ease", "display": ["block", "block", "block", "none"]}}>
  <HStack>
  <HStack spacing={`1.5rem`}>
  <Link as={NextLink} href={`/`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Heading sx={{"fontSize": ["100%", "115%", "130%", "135%", "150%"], "color": "white", "transition": "all 550ms ease", "opacity": "1", "_hover": {"opacity": "0.85"}, "paddingRight": "3.5rem"}}>
  <Tooltip label={`Reflexify`} sx={{"cursor": "pointer"}}>
  {`Reflexify`}
</Tooltip>
</Heading>
</Link>
</HStack>
  <Spacer/>
  <Tooltip label={`Switch theme mode`}>
  <Button colorScheme={`None`} onClick={toggleColorMode} sx={{"color": "white"}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</Tooltip>
</HStack>
</Box>
</HStack>
  <HStack alignItems={`start`} sx={{"width": "100%"}}>
  <VStack sx={{"width": "20%", "top": "0", "position": "sticky", "paddingTop": "5rem", "alignItems": "start", "paddingLeft": ["", "", "", "4rem", "10rem"], "transition": "all 550ms ease"}}>
  <VStack sx={{"alignItems": "start"}}/>
</VStack>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`xl`} sx={{"paddingBottom": "2rem"}}>
  {`Welcome to Reflexify!`}
</Heading>
  <Heading size={`sm`}>
  {`This is the library's documentation. Select a link above to get started.`}
</Heading>
</VStack>
  <VStack sx={{"width": ["0%", "0%", "0%", "20%", "20%"], "top": "0", "position": "sticky", "paddingTop": "5rem", "alignItems": ["end", "end", "end", "start", "start"], "paddingRight": ["1rem", "1rem", "1rem", "", ""], "transition": "all 550ms ease"}}/>
</HStack>
  <HStack sx={{"width": "100%", "height": ["105px", "75px", "65px", "65px", "65px"], "position": "sticky", "bg": "#15171b", "transition": "height 350ms ease", "top": "0", "overflow": "hidden"}}>
  <Box sx={{"width": "100%", "paddingLeft": ["", "", "", "4rem", "10rem"], "paddingRight": ["", "", "", "4rem", "10rem"], "transition": "all 550ms ease", "display": ["none", "none", "none", "block"]}}>
  <HStack>
  <VStack sx={{"fontSize": "80%", "color": "white", "transition": "all 550ms ease", "alignItems": "start"}}>
  <Text>
  {`Made with Reflex & Reflexify`}
</Text>
  <Text>
  {`Copyright © 2022 - 2023 S. Ahmad P. Hakimi `}
</Text>
</VStack>
  <Spacer/>
  <HStack spacing={`2rem`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
</HStack>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingLeft": ["2rem", "2rem", "2rem", "", ""], "paddingRight": ["2rem", "2rem", "2rem", "", ""], "transition": "all 550ms ease", "display": ["none", "block", "block", "none"]}}>
  <HStack>
  <VStack sx={{"fontSize": "80%", "color": "white", "transition": "all 550ms ease", "alignItems": "start"}}>
  <Text>
  {`Made with Reflex & Reflexify`}
</Text>
  <Text>
  {`Copyright © 2022 - 2023 S. Ahmad P. Hakimi `}
</Text>
</VStack>
  <Spacer/>
  <HStack spacing={`2rem`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
</HStack>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingLeft": ["2rem", "2rem", "2rem", "", ""], "paddingRight": ["2rem", "2rem", "2rem", "", ""], "transition": "all 550ms ease", "display": ["block", "none", "none", "none"]}}>
  <HStack>
  <VStack alignItems={`start`} spacing={`1rem`}>
  <VStack sx={{"fontSize": "80%", "color": "white", "transition": "all 550ms ease", "alignItems": "start"}}>
  <Text>
  {`Made with Reflex & Reflexify`}
</Text>
  <Text>
  {`Copyright © 2022 - 2023 S. Ahmad P. Hakimi `}
</Text>
</VStack>
  <HStack spacing={`2rem`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
</HStack>
</VStack>
</HStack>
</Box>
</HStack>
</Box>
  <Box sx={{"width": "100%", "display": ["block", "block", "block", "none"]}}>
  <HStack id={`header_color`} ref={ref_header_color} sx={{"width": "100%", "height": "50px", "position": "sticky", "boxShadow": "0 3px 6px 0 rgba(0, 0, 0, 0.5)", "transition": "height 350ms ease", "top": "0", "zIndex": "2", "backgroundColor": "black"}}>
  <Box sx={{"width": "100%", "paddingLeft": ["", "", "", "4rem", "10rem"], "paddingRight": ["", "", "", "4rem", "10rem"], "transition": "all 550ms ease", "display": ["none", "none", "none", "block"]}}>
  <HStack>
  <Link as={NextLink} href={`/`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Heading sx={{"fontSize": ["100%", "115%", "130%", "135%", "150%"], "color": "white", "transition": "all 550ms ease", "opacity": "1", "_hover": {"opacity": "0.85"}, "paddingRight": "3.5rem"}}>
  <Tooltip label={`Reflexify`} sx={{"cursor": "pointer"}}>
  {`Reflexify`}
</Tooltip>
</Heading>
</Link>
  <HStack spacing={`2rem`} sx={{"alignItems": "end", "transition": "opacity 500ms ease 500ms"}}>
  {main_state.header_state.withNav.map((rdhcxwai, i) => (
  <Link as={NextLink} href={rdhcxwai.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {rdhcxwai.at(0)}
</Heading>
</Link>
))}
</HStack>
  <Spacer/>
  <Tooltip label={`Switch theme mode`}>
  <Button colorScheme={`None`} onClick={toggleColorMode} sx={{"color": "white"}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</Tooltip>
  <Tooltip label={`Go to repository`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <HStack spacing={`1.15rem`} sx={{"cursor": "pointer"}}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='24' height='24' src='https://img.icons8.com/ios-filled/50/000000/git.png' style='filter: brightness(0) invert(1);'/>"}}/>
  <VStack alignItems={`start`} spacing={`0rem`}>
  <HStack>
  <Text sx={{"color": "white", "fontWeight": "semibold"}}>
  {`LineIndent/reflexify`}
</Text>
</HStack>
  <HStack>
  <HStack spacing={`0.35rem`}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='10' height='10' src='https://img.icons8.com/ios-filled/50/price-tag.png' style='filter: brightness(0) invert(1);' />"}}/>
  <Text sx={{"color": "white", "fontSize": 11}}>
  {`reflexify-0.0.8`}
</Text>
</HStack>
  <HStack spacing={`0.35rem`}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='10' height='10' src='https://img.icons8.com/ios-filled/50/star--v1.png' style='filter: brightness(0) invert(1);'/>"}}/>
  <Text sx={{"color": "white", "fontSize": 11}}>
  {`25`}
</Text>
</HStack>
  <HStack spacing={`0.35rem`}>
  <Box dangerouslySetInnerHTML={{"__html": "<img width='10' height='10' src='https://img.icons8.com/ios/50/code-fork.png' style='filter: brightness(0) invert(1);'/>"}}/>
  <Text sx={{"color": "white", "fontSize": 11}}>
  {`1`}
</Text>
</HStack>
</HStack>
</VStack>
</HStack>
</Link>
</Tooltip>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingLeft": ["1rem", "1rem", "0.5rem", "", ""], "paddingRight": ["1rem", "1rem", "0.5rem", "", ""], "transition": "all 550ms ease", "display": ["block", "block", "block", "none"]}}>
  <HStack>
  <HStack spacing={`1.5rem`}>
  <Link as={NextLink} href={`/`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Heading sx={{"fontSize": ["100%", "115%", "130%", "135%", "150%"], "color": "white", "transition": "all 550ms ease", "opacity": "1", "_hover": {"opacity": "0.85"}, "paddingRight": "3.5rem"}}>
  <Tooltip label={`Reflexify`} sx={{"cursor": "pointer"}}>
  {`Reflexify`}
</Tooltip>
</Heading>
</Link>
</HStack>
  <Spacer/>
  <Tooltip label={`Switch theme mode`}>
  <Button colorScheme={`None`} onClick={toggleColorMode} sx={{"color": "white"}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</Tooltip>
</HStack>
</Box>
</HStack>
  <Accordion allowMultiple={true} sx={{"width": "100%", "padding": "1rem 2rem"}}>
  <Breadcrumb sx={{"padding": "1.25rem 0.5rem"}}>
  <BreadcrumbItem>
  <Link as={NextLink} href={`/home/start`}>
  <Text>
  {`Home`}
</Text>
</Link>
</BreadcrumbItem>
  <BreadcrumbItem>
  <Link as={NextLink} href={`/setup/setup`}>
  <Text>
  {`Setup`}
</Text>
</Link>
</BreadcrumbItem>
  <BreadcrumbItem>
  <Link as={NextLink} href={`/material/setup`}>
  <Text>
  {`Material`}
</Text>
</Link>
</BreadcrumbItem>
</Breadcrumb>
</Accordion>
  <HStack alignItems={`start`} sx={{"width": "100%"}}>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`xl`} sx={{"paddingBottom": "2rem"}}>
  {`Welcome to Reflexify!`}
</Heading>
  <Heading size={`sm`}>
  {`This is the library's documentation. Select a link above to get started.`}
</Heading>
</VStack>
</HStack>
  <HStack sx={{"width": "100%", "height": ["105px", "75px", "65px", "65px", "65px"], "position": "sticky", "bg": "#15171b", "transition": "height 350ms ease", "top": "0", "overflow": "hidden"}}>
  <Box sx={{"width": "100%", "paddingLeft": ["", "", "", "4rem", "10rem"], "paddingRight": ["", "", "", "4rem", "10rem"], "transition": "all 550ms ease", "display": ["none", "none", "none", "block"]}}>
  <HStack>
  <VStack sx={{"fontSize": "80%", "color": "white", "transition": "all 550ms ease", "alignItems": "start"}}>
  <Text>
  {`Made with Reflex & Reflexify`}
</Text>
  <Text>
  {`Copyright © 2022 - 2023 S. Ahmad P. Hakimi `}
</Text>
</VStack>
  <Spacer/>
  <HStack spacing={`2rem`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
</HStack>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingLeft": ["2rem", "2rem", "2rem", "", ""], "paddingRight": ["2rem", "2rem", "2rem", "", ""], "transition": "all 550ms ease", "display": ["none", "block", "block", "none"]}}>
  <HStack>
  <VStack sx={{"fontSize": "80%", "color": "white", "transition": "all 550ms ease", "alignItems": "start"}}>
  <Text>
  {`Made with Reflex & Reflexify`}
</Text>
  <Text>
  {`Copyright © 2022 - 2023 S. Ahmad P. Hakimi `}
</Text>
</VStack>
  <Spacer/>
  <HStack spacing={`2rem`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
</HStack>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingLeft": ["2rem", "2rem", "2rem", "", ""], "paddingRight": ["2rem", "2rem", "2rem", "", ""], "transition": "all 550ms ease", "display": ["block", "none", "none", "none"]}}>
  <HStack>
  <VStack alignItems={`start`} spacing={`1rem`}>
  <VStack sx={{"fontSize": "80%", "color": "white", "transition": "all 550ms ease", "alignItems": "start"}}>
  <Text>
  {`Made with Reflex & Reflexify`}
</Text>
  <Text>
  {`Copyright © 2022 - 2023 S. Ahmad P. Hakimi `}
</Text>
</VStack>
  <HStack spacing={`2rem`}>
  <Link as={NextLink} href={`https://github.com/LineIndent/reflexify`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "filter": "brightness(0) invert(1)"}}/>
</Link>
</HStack>
</VStack>
</HStack>
</Box>
</HStack>
</Box>
</VStack>
  <NextHead>
  <title>
  {`Reflexify`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
