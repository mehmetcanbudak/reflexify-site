import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Breadcrumb, BreadcrumbItem, Button, Code, Heading, HStack, Image, Link, ListItem, OrderedList, Spacer, Text, Tooltip, UnorderedList, useColorMode, VStack } from "@chakra-ui/react"
import { CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import Script from "next/script"
import NextLink from "next/link"
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

  const ref_close = useRef(null); refs['ref_close'] = ref_close;
  const ref_header_color = useRef(null); refs['ref_header_color'] = ref_header_color;
  const ref_RxAnnouncement = useRef(null); refs['ref_RxAnnouncement'] = ref_RxAnnouncement;

  return (
  <Fragment><Fragment>
  <VStack sx={{"width": "100%", "minHeight": "100vh", "spacing": "0rem", "padding": "0", "margin": "0"}}>
  <Box sx={{"width": "100%", "display": ["none", "none", "none", "block"]}}>
  <HStack id={`RxAnnouncement`} ref={ref_RxAnnouncement} sx={{"width": "100%", "height": "45px", "bg": "#18181d", "padding": ["0rem 1rem", "0rem 1rem", "0rem 0.5rem", "0rem 4rem", "0rem 10rem"], "transition": "all 550ms ease"}}>
  <Box dangerouslySetInnerHTML={{"__html": " <div style='color: #b8b8ba;'>For updates follow <span><strong style='color: #fff;'>@lineindent</strong></span> on <span style='vertical-align: middle;'> <a href='https://www.youtube.com/@lineindent'><img src='/youtube.png' style='width: 28px; height: 28px; display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);'/></a></span> <a href='https://www.youtube.com/@lineindent'> <span style='color: #fff;'><strong> YouTube</strong></span></a></div>"}}/>
  <Spacer/>
  <Button colorScheme={`None`} id={`close`} onClick={...args => {hide(args)}} ref={ref_close}>
  <CloseIcon sx={{"color": "white"}}/>
  <Script strategy={`afterInteractive`}>
  {`
        function hide() {
            var RxAnnouncement = document.getElementById("RxAnnouncement");
            RxAnnouncement.style.display = "none";
        }

        // Get a reference to the button element
        var close = document.getElementById("close");

        // Add a click event listener to the button
        close.addEventListener("click", hide);
                    `}
</Script>
</Button>
</HStack>
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
  {main_state.header_state.withNav.map((wgsqzuyw, i) => (
  <Link as={NextLink} href={wgsqzuyw.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {wgsqzuyw.at(0)}
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
  {`26`}
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
  <Link as={NextLink} href={`/setup/setup`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Setup`}
</Text>
</Link>
  <Link as={NextLink} href={`/setup/nav`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Setting up navigation`}
</Text>
</Link>
  <Link as={NextLink} href={`/setup/drawer`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Setting up drawer`}
</Text>
</Link>
  <Link as={NextLink} href={`/setup/color`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Changing the colors`}
</Text>
</Link>
  <Link as={NextLink} href={`/setup/font`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Changing the fonts`}
</Text>
</Link>
  <Link as={NextLink} href={`/setup/git`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Adding a git repository`}
</Text>
</Link>
  <Link as={NextLink} href={`/setup/socials`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Adding social media`}
</Text>
</Link>
</VStack>
</VStack>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`2xl`} sx={{"opacity": "0.80", "padding": "0rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Adding a Git repository`}
</Text>
</Heading>
  <Heading size={`lg`} sx={{"opacity": "0.90", "padding": "2rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Config.py file`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`To add a GitHub repository and it's details (stars, forks, and version number), you can add the following paramters in your \`\`\`config.py\`\`\` file: `}
</ReactMarkdown>
  <Box sx={{"width": "100%", "padding": "1rem 0rem"}}>
  <Prism customStyle={{"width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`{
    "repo_name": "LineIndent/reflexify",
    "repo_url": "https://github.com/LineIndent/reflexify",
}
`}
</Prism>
</Box>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`Add the URL to your repository will scrape for the necessary details and display them as they are displayed on this page. This is a nice data visual for documentation or technical sites.`}
</ReactMarkdown>
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
  <HStack id={`RxAnnouncement`} ref={ref_RxAnnouncement} sx={{"width": "100%", "height": "45px", "bg": "#18181d", "padding": ["0rem 1rem", "0rem 1rem", "0rem 0.5rem", "0rem 4rem", "0rem 10rem"], "transition": "all 550ms ease"}}>
  <Box dangerouslySetInnerHTML={{"__html": " <div style='color: #b8b8ba;'>For updates follow <span><strong style='color: #fff;'>@lineindent</strong></span> on <span style='vertical-align: middle;'> <a href='https://www.youtube.com/@lineindent'><img src='/youtube.png' style='width: 28px; height: 28px; display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);'/></a></span> <a href='https://www.youtube.com/@lineindent'> <span style='color: #fff;'><strong> YouTube</strong></span></a></div>"}}/>
  <Spacer/>
  <Button colorScheme={`None`} id={`close`} onClick={...args => {hide(args)}} ref={ref_close}>
  <CloseIcon sx={{"color": "white"}}/>
  <Script strategy={`afterInteractive`}>
  {`
        function hide() {
            var RxAnnouncement = document.getElementById("RxAnnouncement");
            RxAnnouncement.style.display = "none";
        }

        // Get a reference to the button element
        var close = document.getElementById("close");

        // Add a click event listener to the button
        close.addEventListener("click", hide);
                    `}
</Script>
</Button>
</HStack>
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
  {main_state.header_state.withNav.map((uanobxeg, i) => (
  <Link as={NextLink} href={uanobxeg.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {uanobxeg.at(0)}
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
  {`26`}
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
  <Link as={NextLink} href={`/setup/setup`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Setup`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/setup/nav`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Setting up navigation`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/setup/drawer`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Setting up drawer`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/setup/color`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Changing the colors`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/setup/font`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Changing the fonts`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/setup/git`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Adding a git repository`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/setup/socials`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Adding social media`}
</Text>
</Link>
</AccordionPanel>
</AccordionItem>
</Accordion>
  <HStack alignItems={`start`} sx={{"width": "100%"}}>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`2xl`} sx={{"opacity": "0.80", "padding": "0rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Adding a Git repository`}
</Text>
</Heading>
  <Heading size={`lg`} sx={{"opacity": "0.90", "padding": "2rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Config.py file`}
</Text>
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`To add a GitHub repository and it's details (stars, forks, and version number), you can add the following paramters in your \`\`\`config.py\`\`\` file: `}
</ReactMarkdown>
  <Box sx={{"width": "100%", "padding": "1rem 0rem"}}>
  <Prism customStyle={{"width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`{
    "repo_name": "LineIndent/reflexify",
    "repo_url": "https://github.com/LineIndent/reflexify",
}
`}
</Prism>
</Box>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`Add the URL to your repository will scrape for the necessary details and display them as they are displayed on this page. This is a nice data visual for documentation or technical sites.`}
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
  {`Setup`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
