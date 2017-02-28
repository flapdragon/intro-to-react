// Import React
import React from "react";
// Import React Icons
// import FaBeer from "react-icons/fa/beer";
// Import Material Design UI
// import mui from 'material-ui'; // nope
// import AlarmIcon from 'react-material-icons/icons/action/alarm';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactJax: require("../assets/react-jax.png"),
  reactLogo: require("../assets/react-logo-1000-transparent.png"),
  brookSource: require("../assets/brooksource-mobile.jpg"),
  facebookReactSite: require("../assets/facebook-react-site.png"),
  yoDawg: require("../assets/yo-dawg-abstration.jpg"),
  yoDawgNoText: require("../assets/Yo-Dawg-Heard-You.jpg"),
  reactVirtualDOM: require("../assets/onchange_vdom_change.svg"),
  theView: require("../assets/the-view-still.jpg"),
  myspace: require("../assets/myspace.png"),
  historyWebWhole: require("../assets/a-glimpse-into-the-history-of-web-development-and-design_568ad67f72846.png"),
  doleKemp96: require("../assets/dole-kemp-96.png"),
  angularOne: require("../assets/angular-1.png"),
  angularDragonBreath: require("../assets/angular-release-dragon-breath.png"),
  awesomeNodeJS: require("../assets/awesome-node-js.png"),
  awesomeReact: require("../assets/awesome-react.png"),
  reactWikipedia: require("../assets/react-wikipedia.png"),
  jsx01: require("../assets/jsx-01.png"),
  jsxXSS: require("../assets/jsx-xss.png"),
  jsxCE01: require("../assets/jsx-ce-01.png"),
  jsxCE02: require("../assets/jsx-ce-02.png"),
  uiDescriptionLogic: require("../assets/ui-description-logic.png"),
  stateless: require("../assets/stateless-02.png"),
  stateful: require("../assets/stateful.png"),
  lifecycle: require("../assets/reactjs_component_lifecycle_functions.png"),
  facebookReactParts: require("../assets/facebook-react-parts.png"),
  stackOverflowReact: require("../assets/stackoverflow-react.png"),
  stackOverflowAngular: require("../assets/stackoverflow-angular.png"),
  gitStatsAxios: require("../assets/git-stats-axios.png"),
  gitStatsSuperAgent: require("../assets/git-stats-superagent.png"),
  googleTrends: require("../assets/google-trends.png"),
  libscore: require("../assets/libscore.png"),
  stackExchange: require("../assets/stack-exchange.png"),
  spectacle: require("../assets/spectacle.png"),
  reduxForm: require("../assets/redux-form.png"),
  reactPlusD3: require("../assets/How-to-integrate-React-D3.jpg"),
  jaxNode: require("../assets/jax-node.jpg"),
  reactNativeJax: require("../assets/react-native-jax.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  reactBlue: "#00D8FF",
  darkGrey: "#2d2d2d",
  editorBackground: "#1d1f21",
  editorPurple: "#AC78C7",
  editorOrange: "#D59A63",
  editorGreen: "#87B477",
  editorRed: "#C16D7B",
  editorWhite: "#bfc6c9",
  reactPlusD3Grey: "#222222"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reactJax} width="666" height="533"></Image>
        </Slide>
        <Slide transition={["slide"]} bgColor="darkGrey">
          <Image src={images.reactLogo} width="500" height="500"></Image>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Intro to React
          </Heading>
          <Text margin="10px 0 0" textColor="editorWhite" size={5} bold>
            David Dean
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="darkGrey">
          <Text size={6} textColor="editorWhite" textAlign="left">David Dean</Text>
          <Text size={6} textColor="editorWhite" textAlign="left">Senior IT Developer at Florida Blue</Text>
          <Text size={6} textColor="editorWhite" textAlign="left">@priceyvulture</Text>
          <Text size={6} textColor="editorWhite" textAlign="left">https://github.com/flapdragon</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="darkGrey">
          <Heading size={2} caps lineHeight={1} textColor="primary">
            Purpose
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorWhite" textAlign="left">Historical Context</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorWhite" textAlign="left">High Level Overview</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorWhite" textAlign="left">Where to Begin With React</ListItem>
          <Text size={6} textColor="editorWhite" textAlign="left">Intended for developers at any level who are new to React</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.brookSource} width="1104" height="417"></Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
            A Very Brief History of Web Development
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="secondary" textAlign="left">Server Ages</ListItem>
          <ListItem margin="0 0 0 20px" textColor="secondary" textAlign="left">jQuery Empire</ListItem>
          <ListItem margin="0 0 0 20px" textColor="secondary" textAlign="left">Monolithic SPA Era</ListItem>
          <ListItem margin="0 0 0 20px" textColor="secondary" textAlign="left">Today</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            Server Ages: Pros
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorGreen" textAlign="left">All one technology</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Easier to understand/learn</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Easier to scale</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Better SEO</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            Server Ages: Cons
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorRed" textAlign="left">Every action requires round trip to server and browser re-render</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Content is always re-rendered</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Limited to no JS</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Limited dynamic functionality</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Browsers not as standardized</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.myspace}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.doleKemp96}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            JavaScript
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorGreen" textAlign="left">Released May 23, 1995</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Brendan Eich @ Netscape</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Written in 10 days</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            jQuery Empire: Pros
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorGreen" textAlign="left">Easy to learn</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Easy to integrate</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Plugins</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">SEO</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            jQuery Empire: Cons
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorRed" textAlign="left">Duplication of business logic</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Selector/Callback Hell</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Too many ways to do the same thing using the same tools</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Difficult to build large apps</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Difficult to scale/test</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Plugins (versions)</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            Monolithic SPA Era: Pros
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorGreen" textAlign="left">No more selectors</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Better separation of conerns</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Easier to scale</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Shift from DOM to data</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="tertiary">
            Monolithic SPA Era: Cons
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorRed" textAlign="left">Easy to build slow apps</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Too many ways to do the same thing using the same tools</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Frameworks don't always work well together</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Limited SEO</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.angularOne}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.angularDragonBreath}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.historyWebWhole}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="tertiary">
            Today = (pros) => React
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="editorGreen" textAlign="left">"Easy to reason about" - Everyone ever</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Easy to test</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Even more separation of concerns</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">Easy to integrate</ListItem>
          <ListItem margin="0 0 0 20px" textColor="editorGreen" textAlign="left">SEO</ListItem>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="tertiary">
            Today = (cons) => React
          </Heading>
          <ListItem margin="0 0 0 20px" textColor="editorRed" textAlign="left">Not opinionated enough - integration fatigue</ListItem>
        </Slide>

        <Slide transition={["spin"]} bgColor="darkGrey" bgImage={images.reactWikipedia}>
        </Slide>
        <Slide transition={["spin"]} bgColor="darkGrey" bgImage={images.facebookReactSite}>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" bgImage={images.theView}>
          <Heading size={1} fit caps lineHeight={1} textColor="reactBlue">
            React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            It's the View
          </Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={6} textColor="editorPurple" caps>React</Heading>
          <Heading size={4} textColor="editorOrange">It's NOT the View</Heading>
          <Text margin="10px 0 0 0" size={6} textColor="quartenary" textAlign="left">React challenges established best practices in MVC</Text>
          <Text margin="10px 0 0 0" size={6} textColor="quartenary" textAlign="left">Better to think of it as "Component-based" UI than MVC "View"</Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={6} textColor="editorPurple" caps>React</Heading>
          <Heading size={4} textColor="editorOrange">Core Concepts</Heading>
          <ListItem margin="10px 0 0 20px" textColor="quartenary" textAlign="left">JSX</ListItem>
          <ListItem margin="0 0 0 20px" textColor="quartenary" textAlign="left">Components</ListItem>
          <ListItem margin="0 0 0 20px" textColor="quartenary" textAlign="left">One-way Data Flow</ListItem>
          <ListItem margin="0 0 0 20px" textColor="quartenary" textAlign="left">Virtual DOM</ListItem>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">JSX</Heading>
          <Text margin="10px 0 0 20px" size={6} textColor="quartenary" textAlign="left">Syntax extension to JavaScript</Text>
          <Image src={images.jsx01} width="1261" height="357"></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">JSX</Heading>
          <Text margin="10px 0 0 20px" size={6} textColor="quartenary" textAlign="left">JSX Prevents Injection/XSS Attacks</Text>
          <Image src={images.jsxXSS}></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">JSX</Heading>
          <Image src={images.jsxCE01}></Image>
          <Image src={images.jsxCE02}></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">Components</Heading>
          <Text margin="10px 0 0 20px" size={6} textColor="quartenary" textAlign="left">UI Description and UI Logic are tightly coupled</Text>
          <Image src={images.uiDescriptionLogic} width="1081" height="471"></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">Components</Heading>
          <Text margin="10px 0 0 20px" size={6} textColor="quartenary" textAlign="left">Stateless</Text>
          <Image src={images.stateless} width="1089" height="483"></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">Components</Heading>
          <Text margin="10px 0 0 20px" size={6} textColor="quartenary" textAlign="left">Stateful ...</Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground" align="top">
          <Image src={images.stateful} width="1171" height="791"></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground" align="top">
          <Heading size={4} textColor="editorOrange">Components</Heading>
          <Text margin="10px 0 0 20px" size={6} textColor="quartenary">Component Lifecycle</Text>
          <Image src={images.lifecycle} width="1071" heigght="500"></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">One-way Data Flow</Heading>
          <ListItem margin="10px 0 0" textColor="quartenary" textAlign="left">Flows down the component hierarchy</ListItem>
          <ListItem margin="0 0 0" textColor="quartenary" textAlign="left">"Props down" -> Immutable, to children</ListItem>
          <ListItem margin="0 0 0" textColor="quartenary" textAlign="left">"State up" -> Mutable, up to parent</ListItem>
          <ListItem margin="0 0 0" textColor="quartenary" textAlign="left">Paradigm -> Removes confusion</ListItem>
          <Text size={6} textColor="editorRed" textAlign="left">Challenge is understanding which component should own state</Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">Virtual DOM</Heading>
          <Heading size={6} textColor="editorPurple">The Problem: the Actual DOM</Heading>
          <Text size={6} textColor="quartenary" textAlign="left">The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents</Text>
          <Text size={6} textColor="editorRed" textAlign="left">It's slow</Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="editorBackground">
          <Heading size={4} textColor="editorOrange">Virtual DOM</Heading>
          <Heading size={6} textColor="editorPurple">The Solution</Heading>
          <ListItem margin="10px 0 0" textColor="quartenary" textAlign="left">Re-render everything on every update!</ListItem>
          <ListItem margin="0 0 0" textColor="quartenary" textAlign="left">Diff</ListItem>
          <ListItem margin="0 0 0" textColor="quartenary" textAlign="left">Compute changes</ListItem>
          <ListItem margin="0 0 0" textColor="quartenary" textAlign="left">Batch execution</ListItem>
          <Text size={6} textColor="editorGreen" textAlign="left">Manipulating the virtual DOM is fast</Text>
        </Slide>
        {/* <Slide transition={["spin"]} bgColor="primary" bgImage={images.yoDawgNoText}>
          <Image src={images.yoDawg} width="1000" height="626"></Image>
        </Slide> */}
        <Slide transition={["spin"]} bgColor="primary">
          <Image src={images.reactVirtualDOM} width="1152" height="648"></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="editorOrange">
          <Heading size={2} fit caps lineHeight={1} textColor="darkGrey">
            How to Use React
          </Heading>
          <ListItem margin="10px 0 0" textColor="primary" textAlign="left">Large application</ListItem>
          <ListItem margin="0 0 0" textColor="primary" textAlign="left">Small piece that fits into larger app</ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="darkGrey" bgImage={images.facebookReactParts}>
        </Slide>
        <Slide transition={["fade"]} bgColor="editorOrange">
          <Heading size={2} fit caps lineHeight={1} textColor="darkGrey">
            Who Uses React
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">Facebook</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Netflix</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">AirBnB</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Instagram</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Lyft</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">New York Times</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Reddit</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Twitter</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Uber</ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="darkGrey" bgImage={images.awesomeReact}>
        </Slide>
        <Slide transition={["fade"]} bgColor="editorOrange">
          <Heading size={2} fit caps lineHeight={1} textColor="darkGrey">
            Why Do I Love React?
          </Heading>
          <ListItem margin="10px 0 0" textColor="primary" textAlign="left">Modularity -> Choice</ListItem>
          <ListItem margin="0 0 0" textColor="primary" textAlign="left">Separation of Concerns -> Knowledge</ListItem>
          <ListItem margin="0 0 0" textColor="primary" textAlign="left">JavaScript</ListItem>
          <ListItem margin="0 0 0" textColor="primary" textAlign="left">One-way Data Flow</ListItem>
          <ListItem margin="0 0 0" textColor="primary" textAlign="left">Immutability</ListItem>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Local Development Environment
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">IDE/Code Editor</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Build Tools</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Version Control System</ListItem>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            NODE
          </Heading>
          <Text margin="10px 0 0 0" size={6} textColor="primary" textAlign="left">Node is central to everything</Text>
          <Text margin="10px 0 0 0" size={6} textColor="primary" textAlign="left">Node -> NPM</Text>
          <Text margin="10px 0 0 0" size={6} textColor="primary" textAlign="left">Node -> Electron -> Atom/VS Code</Text>
          <Text margin="10px 0 0 0" size={6} textColor="primary" textAlign="left">Node -> Webpack/Grunt/Gulp</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="darkGrey" bgImage={images.awesomeNodeJS}>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            IDEs/Code Editors
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">GitHub Atom</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">JetBrains IntelliJ IDEA</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">JetBrains WebStorm</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Microsoft Visual Studio Code</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Vim</ListItem>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            IDEs/Code Editors: PLUGINS
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">Framework (react...)</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Build (language-babel...)</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Linting (linter, linter-eslint...)</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Versioning (Git, SVN...)</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Productivity (Emmet!, Snippets...)</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Testing (mocha-test-runner...)</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Pair Programming (atom-pair...)</ListItem>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Build Tools
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">Webpack</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Babel</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Linters -> Syntax</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Editor Config -> Code Style</ListItem>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Browser Plugins
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">React Developer Tools</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Redux DevTools</ListItem>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Version Control System (Git)
          </Heading>
          <ListItem margin="10px 0 0 20px" textColor="primary" textAlign="left">Try Git</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Git Flow</ListItem>
          <ListItem margin="0 0 0 20px" textColor="primary" textAlign="left">Git Commit Message Style</ListItem>
        </Slide>

        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.stackOverflowReact}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.stackOverflowAngular}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="primary">
          <Image src={images.gitStatsAxios}></Image>
          <Image src={images.gitStatsSuperAgent}></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.googleTrends}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.libscore}>
        </Slide>

        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.stackExchange}>
        </Slide>

        <Slide transition={["zoom"]} bgColor="darkGrey" bgImage={images.spectacle}>
        </Slide>

        <Slide transition={["spin"]} bgColor="reactPlusD3Grey">
          <Image src={images.reduxForm}></Image>
          <Heading size={5} caps lineHeight={1} textColor="editorWhite">
            Bring your forms into the 21st century with Redux Form
          </Heading>
          <Cite>Jonathan Stewart</Cite>
        </Slide>
        <Slide transition={["spin"]} bgColor="reactPlusD3Grey">
          <Image src={images.reactPlusD3}></Image>
          <Heading size={2} fit caps lineHeight={1} textColor="editorWhite">
            React + D3
          </Heading>
          <Cite>David Dean</Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="reactPlusD3Grey">
          <Image src={images.jaxNode} width="520" height="103"></Image>
          <Heading size={2} lineHeight={1} textColor="primary">
            Jax Node
          </Heading>
          <Text margin="10px 0 0" textColor="editorWhite" size={6}>www.meetup.com/Jax-Node-js-UG</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="reactPlusD3Grey">
          <Image src={images.reactNativeJax} width="204" height="225"></Image>
          <Heading size={2} lineHeight={1} textColor="primary">
            React Native Jax
          </Heading>
          <Text margin="10px 0 0" textColor="editorWhite" size={6}>www.meetup.com/React-Native-Jax</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="darkGrey">
          <Heading size={1} fit caps lineHeight={1} textColor="reactBlue">
            Thank you :)
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textColor="editorWhite">Linting errors are a direct reflection on your personality.</Quote>
            <Cite>David Dean</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
