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
  {main_state.header_state.withNav.map((rcuozybk, i) => (
  <Link as={NextLink} href={rcuozybk.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {rcuozybk.at(0)}
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
  <Link as={NextLink} href={`/material/setup`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Setup`}
</Text>
</Link>
  <Link as={NextLink} href={`/material/accordion`} sx={{"_hover": {"textDecoration": "None"}, "padding": "0.25rem 0rem"}}>
  <Text sx={{"fontSize": 13, "fontWeight": "500", "color": null, "opacity": "0.85", "transition": "opacity 350ms ease", "_hover": {"opacity": "1"}}}>
  {`Accordions`}
</Text>
</Link>
</VStack>
</VStack>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`2xl`} sx={{"opacity": "0.80", "padding": "0rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Material setup`}
</Text>
</Heading>
  <Box sx={{"padding": "1.5rem 0rem"}}>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} fontSize={["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"]}fontWeight={`400`}letterSpacing={`-0.02em`}lineHeight={`1.35`}margin={`0`}marginBottom={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h2": ({node, ...props}) => <Heading {...props} fontSize={["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"]}fontWeight={`400`}lineHeight={`48px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h3": ({node, ...props}) => <Heading {...props} fontSize={["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"]}fontWeight={`400`}lineHeight={`40px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h4": ({node, ...props}) => <Heading {...props}  />, "h5": ({node, ...props}) => <Heading {...props}  />, "h6": ({node, ...props}) => <Heading {...props}  />, "p": ({node, ...props}) => <Text {...props} fontSize={`14px`}fontWeight={`400`}letterSpacing={`0`}lineHeight={`24px`}margin={`0`}marginBottom={`16px`}padding={`0`}transition={`all 550ms ease`} />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"font_size": ["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"], "font_weight": "400", "line_height": "1.35", "letter_spacing": "-0.02em", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h2": {"font_size": ["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"], "font_weight": "400", "line_height": "48px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h3": {"font_size": ["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"], "font_weight": "400", "line_height": "40px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "p": {"font_size": "14px", "font_weight": "400", "line_height": "24px", "letter_spacing": "0", "margin_bottom": "16px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`A \`material library\` is a comprehensive collection of pre-designed and pre-engineered materials that serve as a valuable resource for designers, architects, engineers, and artists. It encompasses a diverse range of materials, each with specific properties, textures, colors, and performance characteristics. Material libraries provide a structured repository of options for use in various projects, enabling creators to efficiently select and apply suitable materials without the need for extensive research or testing. These libraries often include samples, specifications, and digital representations of materials, fostering creativity, standardization, and informed decision-making in design and construction processes.

`}
</ReactMarkdown>
</Box>
  <Heading size={`lg`}>
  {`Importing material library`}
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} fontSize={["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"]}fontWeight={`400`}letterSpacing={`-0.02em`}lineHeight={`1.35`}margin={`0`}marginBottom={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h2": ({node, ...props}) => <Heading {...props} fontSize={["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"]}fontWeight={`400`}lineHeight={`48px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h3": ({node, ...props}) => <Heading {...props} fontSize={["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"]}fontWeight={`400`}lineHeight={`40px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h4": ({node, ...props}) => <Heading {...props}  />, "h5": ({node, ...props}) => <Heading {...props}  />, "h6": ({node, ...props}) => <Heading {...props}  />, "p": ({node, ...props}) => <Text {...props} fontSize={`14px`}fontWeight={`400`}letterSpacing={`0`}lineHeight={`24px`}margin={`0`}marginBottom={`16px`}padding={`0`}transition={`all 550ms ease`} />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"font_size": ["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"], "font_weight": "400", "line_height": "1.35", "letter_spacing": "-0.02em", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h2": {"font_size": ["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"], "font_weight": "400", "line_height": "48px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h3": {"font_size": ["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"], "font_weight": "400", "line_height": "40px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "p": {"font_size": "14px", "font_weight": "400", "line_height": "24px", "letter_spacing": "0", "margin_bottom": "16px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`To import and use the material library, we need to import the module at the top first. Add the following import statment to your page: `}
</ReactMarkdown>
  <Box sx={{"width": "100%"}}>
  <Prism customStyle={{"width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`from app.core.base import RxBasePage
from app.helpers.nav_helpers import NavHelper

# Add the following import statement...
import app.material as rf
`}
</Prism>
</Box>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} fontSize={["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"]}fontWeight={`400`}letterSpacing={`-0.02em`}lineHeight={`1.35`}margin={`0`}marginBottom={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h2": ({node, ...props}) => <Heading {...props} fontSize={["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"]}fontWeight={`400`}lineHeight={`48px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h3": ({node, ...props}) => <Heading {...props} fontSize={["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"]}fontWeight={`400`}lineHeight={`40px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h4": ({node, ...props}) => <Heading {...props}  />, "h5": ({node, ...props}) => <Heading {...props}  />, "h6": ({node, ...props}) => <Heading {...props}  />, "p": ({node, ...props}) => <Text {...props} fontSize={`14px`}fontWeight={`400`}letterSpacing={`0`}lineHeight={`24px`}margin={`0`}marginBottom={`16px`}padding={`0`}transition={`all 550ms ease`} />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"font_size": ["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"], "font_weight": "400", "line_height": "1.35", "letter_spacing": "-0.02em", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h2": {"font_size": ["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"], "font_weight": "400", "line_height": "48px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h3": {"font_size": ["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"], "font_weight": "400", "line_height": "40px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "p": {"font_size": "14px", "font_weight": "400", "line_height": "24px", "letter_spacing": "0", "margin_bottom": "16px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`Once you have the above module imported, you can start using the various material design library available. Check out the left panel for a list of available material design for \`Reflex\``}
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
  {main_state.header_state.withNav.map((tnwcbjrd, i) => (
  <Link as={NextLink} href={tnwcbjrd.at(1)} key={i} sx={{"opacity": "0.85", "transition": "opacity 600ms ease", "_hover": {"textDecoration": "None", "opacity": "1"}}}>
  <Heading size={`s`} sx={{"paddingTop": "0.3rem", "color": "white", "fontWeight": "semibold"}}>
  {tnwcbjrd.at(0)}
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
  <Link as={NextLink} href={`/material/setup`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Setup`}
</Text>
</Link>
</AccordionPanel>
  <AccordionPanel>
  <Link as={NextLink} href={`/material/accordion`} sx={{"_hover": {"textDecoration": "None"}}}>
  <Text>
  {`Accordions`}
</Text>
</Link>
</AccordionPanel>
</AccordionItem>
</Accordion>
  <HStack alignItems={`start`} sx={{"width": "100%"}}>
  <VStack sx={{"width": ["100%", "100%", "100%", "60%", "60%"], "top": "0", "position": "block", "paddingTop": ["2rem", "2rem", "2rem", "5rem", "5rem"], "alignItems": "start", "paddingLeft": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingRight": ["2rem", "2rem", "2rem", "2rem", "2rem"], "paddingBottom": "6rem", "transition": "all 550ms ease", "minHeight": "100vh"}}>
  <Heading size={`2xl`} sx={{"opacity": "0.80", "padding": "0rem 0rem", "letterSpacing": "0.01em"}}>
  <Text>
  {`Material setup`}
</Text>
</Heading>
  <Box sx={{"padding": "1.5rem 0rem"}}>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} fontSize={["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"]}fontWeight={`400`}letterSpacing={`-0.02em`}lineHeight={`1.35`}margin={`0`}marginBottom={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h2": ({node, ...props}) => <Heading {...props} fontSize={["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"]}fontWeight={`400`}lineHeight={`48px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h3": ({node, ...props}) => <Heading {...props} fontSize={["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"]}fontWeight={`400`}lineHeight={`40px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h4": ({node, ...props}) => <Heading {...props}  />, "h5": ({node, ...props}) => <Heading {...props}  />, "h6": ({node, ...props}) => <Heading {...props}  />, "p": ({node, ...props}) => <Text {...props} fontSize={`14px`}fontWeight={`400`}letterSpacing={`0`}lineHeight={`24px`}margin={`0`}marginBottom={`16px`}padding={`0`}transition={`all 550ms ease`} />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"font_size": ["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"], "font_weight": "400", "line_height": "1.35", "letter_spacing": "-0.02em", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h2": {"font_size": ["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"], "font_weight": "400", "line_height": "48px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h3": {"font_size": ["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"], "font_weight": "400", "line_height": "40px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "p": {"font_size": "14px", "font_weight": "400", "line_height": "24px", "letter_spacing": "0", "margin_bottom": "16px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`A \`material library\` is a comprehensive collection of pre-designed and pre-engineered materials that serve as a valuable resource for designers, architects, engineers, and artists. It encompasses a diverse range of materials, each with specific properties, textures, colors, and performance characteristics. Material libraries provide a structured repository of options for use in various projects, enabling creators to efficiently select and apply suitable materials without the need for extensive research or testing. These libraries often include samples, specifications, and digital representations of materials, fostering creativity, standardization, and informed decision-making in design and construction processes.

`}
</ReactMarkdown>
</Box>
  <Heading size={`lg`}>
  {`Importing material library`}
</Heading>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} fontSize={["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"]}fontWeight={`400`}letterSpacing={`-0.02em`}lineHeight={`1.35`}margin={`0`}marginBottom={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h2": ({node, ...props}) => <Heading {...props} fontSize={["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"]}fontWeight={`400`}lineHeight={`48px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h3": ({node, ...props}) => <Heading {...props} fontSize={["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"]}fontWeight={`400`}lineHeight={`40px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h4": ({node, ...props}) => <Heading {...props}  />, "h5": ({node, ...props}) => <Heading {...props}  />, "h6": ({node, ...props}) => <Heading {...props}  />, "p": ({node, ...props}) => <Text {...props} fontSize={`14px`}fontWeight={`400`}letterSpacing={`0`}lineHeight={`24px`}margin={`0`}marginBottom={`16px`}padding={`0`}transition={`all 550ms ease`} />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"font_size": ["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"], "font_weight": "400", "line_height": "1.35", "letter_spacing": "-0.02em", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h2": {"font_size": ["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"], "font_weight": "400", "line_height": "48px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h3": {"font_size": ["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"], "font_weight": "400", "line_height": "40px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "p": {"font_size": "14px", "font_weight": "400", "line_height": "24px", "letter_spacing": "0", "margin_bottom": "16px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`To import and use the material library, we need to import the module at the top first. Add the following import statment to your page: `}
</ReactMarkdown>
  <Box sx={{"width": "100%"}}>
  <Prism customStyle={{"width": "100%"}} language={`python`} style={dark} sx={{"width": "100%"}}>
  {`from app.core.base import RxBasePage
from app.helpers.nav_helpers import NavHelper

# Add the following import statement...
import app.material as rf
`}
</Prism>
</Box>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} fontSize={["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"]}fontWeight={`400`}letterSpacing={`-0.02em`}lineHeight={`1.35`}margin={`0`}marginBottom={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h2": ({node, ...props}) => <Heading {...props} fontSize={["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"]}fontWeight={`400`}lineHeight={`48px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h3": ({node, ...props}) => <Heading {...props} fontSize={["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"]}fontWeight={`400`}lineHeight={`40px`}margin={`0`}marginBottom={`24px`}marginTop={`24px`}padding={`0`}transition={`all 550ms ease`} />, "h4": ({node, ...props}) => <Heading {...props}  />, "h5": ({node, ...props}) => <Heading {...props}  />, "h6": ({node, ...props}) => <Heading {...props}  />, "p": ({node, ...props}) => <Text {...props} fontSize={`14px`}fontWeight={`400`}letterSpacing={`0`}lineHeight={`24px`}margin={`0`}marginBottom={`16px`}padding={`0`}transition={`all 550ms ease`} />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"font_size": ["39.199999999999996px", "44.800000000000004px", "44.800000000000004px", "50.4px", "56px"], "font_weight": "400", "line_height": "1.35", "letter_spacing": "-0.02em", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h2": {"font_size": ["31.499999999999996px", "36.0px", "36.0px", "40.5px", "45px"], "font_weight": "400", "line_height": "48px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "h3": {"font_size": ["23.799999999999997px", "27.200000000000003px", "27.200000000000003px", "30.6px", "34px"], "font_weight": "400", "line_height": "40px", "margin_top": "24px", "margin_bottom": "24px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}, "p": {"font_size": "14px", "font_weight": "400", "line_height": "24px", "letter_spacing": "0", "margin_bottom": "16px", "margin": "0", "padding": "0", "transition": "all 550ms ease"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`Once you have the above module imported, you can start using the various material design library available. Check out the left panel for a list of available material design for \`Reflex\``}
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
  {`Material`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
