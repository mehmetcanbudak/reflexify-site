import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Breadcrumb, BreadcrumbItem, Button, Code, Heading, HStack, Image, Link, ListItem, OrderedList, Spacer, Text, Tooltip, UnorderedList, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { CopyIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { Prism } from "react-syntax-highlighter"
import { dark, light } from "/styles/code/prism"
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
  const ref_pip = useRef(null); refs['ref_pip'] = ref_pip;
  const ref_prereq = useRef(null); refs['ref_prereq'] = ref_prereq;
  const ref_git = useRef(null); refs['ref_git'] = ref_git;

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
  {main_state.header_state.withNav.map((cjeanhhv, i) => (
  <Link as={NextLink} href={cjeanhhv.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {cjeanhhv.at(0)}
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
  <VStack sx={{"alignItems": "start"}}>
  <Link as={NextLink} href={`/home/start`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Getting started`}
</Text>
</Link>
  <Link as={NextLink} href={`/home/run`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Quick start`}
</Text>
</Link>
  <Link as={NextLink} href={`/home/create`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Creating your site`}
</Text>
</Link>
  <Link as={NextLink} href={`/home/publish`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Publishing your site`}
</Text>
</Link>
</VStack>
</VStack>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`2xl`} sx={{"opacity": "0.80", "padding": "0rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Welcome to Reflexify!`}
</Text>
</Heading>
  <Heading size={`lg`} sx={{"opacity": "0.90", "padding": "2rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Getting started`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`
**Reflexify** is a Python web boilerplate project built with **[Reflex](https://reflex.dev)**. and designed to provide a solid foundation for building web applications with Python and Reflex. The project comes pre-configured with a range of tools and features to make it easy for developers to get started building their applications, without the need to spend time setting up infrastructure or configuring tools.
`}
</ReactMarkdown>
  <Spacer/>
  <Heading size={`lg`} sx={{"opacity": "0.90", "padding": "2rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Installation guide`}
</Text>
</Heading>
  <Heading id={`prereq`} ref={ref_prereq} size={`md`} sx={{"opacity": "1", "padding": "0.75rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Prerequisites`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`
To use **Reflexify**, you need to have have the latest version of **Reflex** and **Python 3.5+** installed. If you don't have Reflex installed, installing Reflexify automatically installs it for you. You can install Reflexify using the following command:

`}
</ReactMarkdown>
  <Heading id={`pip`} ref={ref_pip} size={`md`} sx={{"opacity": "1", "padding": "0.75rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Python PIP Package`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`Currently you can get the **Reflexify** library by using the popular Python package manager \`pip\`. Ideally, you'll want to install this, as well as the main Reflexify library in a virtual environment. Open up a terminal and enter the following command:
`}
</ReactMarkdown>
  <Box sx={{"width": "100%", "padding": "1rem 0rem"}}>
  <Box sx={{"position": "relative"}}>
  <Prism customStyle={{"padding": "1em 3.2em 1em 1em", "width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`pip install reflexify`}
</Prism>
  <Button onClick={_e => Event([E("_set_clipboard", {content:"pip install reflexify"})], _e)} sx={{"position": "absolute", "top": "0.5em", "right": "0"}}>
  <CopyIcon/>
</Button>
</Box>
</Box>
  <Heading id={`git`} ref={ref_git} size={`md`} sx={{"opacity": "1", "padding": "0.75rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`GitHub Clone`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`To clone the Reflexify repository from GitHub, open a terminal or command prompt and navigate to the directory where you want to store the cloned repository. Then, run the following command:`}
</ReactMarkdown>
  <Box sx={{"width": "100%", "padding": "1rem 0rem"}}>
  <Box sx={{"position": "relative"}}>
  <Prism customStyle={{"padding": "1em 3.2em 1em 1em", "width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`git clone https://github.com/LineIndent/reflexify.git`}
</Prism>
  <Button onClick={_e => Event([E("_set_clipboard", {content:"git clone https://github.com/LineIndent/reflexify.git"})], _e)} sx={{"position": "absolute", "top": "0.5em", "right": "0"}}>
  <CopyIcon/>
</Button>
</Box>
</Box>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`This will download the repository to your local machine, and you can then start using the library.`}
</ReactMarkdown>
</VStack>
  <VStack sx={{"width": ["0%", "0%", "0%", "20%", "20%"], "top": "0", "position": "sticky", "paddingTop": "5rem", "alignItems": ["end", "end", "end", "start", "start"], "paddingRight": ["1rem", "1rem", "1rem", "", ""], "transition": "all 550ms ease"}}>
  <Link as={NextLink} href={`/home/start#prereq`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Prerequisites`}
</Text>
</Link>
  <Link as={NextLink} href={`/home/start#pip`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`PIP Package`}
</Text>
</Link>
  <Link as={NextLink} href={`/home/start#git`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`GitHub Clone`}
</Text>
</Link>
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
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
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
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
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
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
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
  {main_state.header_state.withNav.map((ytxrzlsp, i) => (
  <Link as={NextLink} href={ytxrzlsp.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {ytxrzlsp.at(0)}
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
  <AccordionItem>
  <AccordionButton sx={{"padding": "1rem 0.5rem"}}>
  <Heading size={`xs`}>
  {`Navigation`}
</Heading>
  <Spacer/>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <Link as={NextLink} href={`/home/start`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Getting started`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/home/run`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Quick start`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/home/create`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Creating your site`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/home/publish`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Publishing your site`}
</Text>
</Link>
</AccordionPanel>
</AccordionItem>
</Accordion>
  <HStack alignItems={`start`} sx={{"width": "100%"}}>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`2xl`} sx={{"opacity": "0.80", "padding": "0rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Welcome to Reflexify!`}
</Text>
</Heading>
  <Heading size={`lg`} sx={{"opacity": "0.90", "padding": "2rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Getting started`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`
**Reflexify** is a Python web boilerplate project built with **[Reflex](https://reflex.dev)**. and designed to provide a solid foundation for building web applications with Python and Reflex. The project comes pre-configured with a range of tools and features to make it easy for developers to get started building their applications, without the need to spend time setting up infrastructure or configuring tools.
`}
</ReactMarkdown>
  <Spacer/>
  <Heading size={`lg`} sx={{"opacity": "0.90", "padding": "2rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Installation guide`}
</Text>
</Heading>
  <Heading id={`prereq`} ref={ref_prereq} size={`md`} sx={{"opacity": "1", "padding": "0.75rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Prerequisites`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`
To use **Reflexify**, you need to have have the latest version of **Reflex** and **Python 3.5+** installed. If you don't have Reflex installed, installing Reflexify automatically installs it for you. You can install Reflexify using the following command:

`}
</ReactMarkdown>
  <Heading id={`pip`} ref={ref_pip} size={`md`} sx={{"opacity": "1", "padding": "0.75rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Python PIP Package`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`Currently you can get the **Reflexify** library by using the popular Python package manager \`pip\`. Ideally, you'll want to install this, as well as the main Reflexify library in a virtual environment. Open up a terminal and enter the following command:
`}
</ReactMarkdown>
  <Box sx={{"width": "100%", "padding": "1rem 0rem"}}>
  <Box sx={{"position": "relative"}}>
  <Prism customStyle={{"padding": "1em 3.2em 1em 1em", "width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`pip install reflexify`}
</Prism>
  <Button onClick={_e => Event([E("_set_clipboard", {content:"pip install reflexify"})], _e)} sx={{"position": "absolute", "top": "0.5em", "right": "0"}}>
  <CopyIcon/>
</Button>
</Box>
</Box>
  <Heading id={`git`} ref={ref_git} size={`md`} sx={{"opacity": "1", "padding": "0.75rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`GitHub Clone`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`To clone the Reflexify repository from GitHub, open a terminal or command prompt and navigate to the directory where you want to store the cloned repository. Then, run the following command:`}
</ReactMarkdown>
  <Box sx={{"width": "100%", "padding": "1rem 0rem"}}>
  <Box sx={{"position": "relative"}}>
  <Prism customStyle={{"padding": "1em 3.2em 1em 1em", "width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`git clone https://github.com/LineIndent/reflexify.git`}
</Prism>
  <Button onClick={_e => Event([E("_set_clipboard", {content:"git clone https://github.com/LineIndent/reflexify.git"})], _e)} sx={{"position": "absolute", "top": "0.5em", "right": "0"}}>
  <CopyIcon/>
</Button>
</Box>
</Box>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`This will download the repository to your local machine, and you can then start using the library.`}
</ReactMarkdown>
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
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
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
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
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
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/github.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/getreflex`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/twitter.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/youtube.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://discord.com/invite/T5WSbC2YtQ`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Image htmlHeight={`20px`} htmlWidth={`20px`} src={`/discord.png`} sx={{"cursor": "pointer", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
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
  {`Home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}