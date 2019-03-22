# React 面试题 & 回答

> 本项目的面试题来源于 [sudheerj/reactjs-interview-questions](https://github.com/sudheerj/reactjs-interview-questions) 这个项目。突然兴起就动起了翻译的念头，但由于本人目前的主要技术栈并非 React，翻译的内容难免出现错误，希望各位见谅。如果您喜欢这个项目，请 Star，更感谢您的 Pull Request。

目前对于本项目，有以下短期的计划：

1. 完成前期的翻译工作
2. 为 React 16 新特性，添加在线示例或完整的示例代码
3. 新建一个 React 16 新特性介绍文档，收集本人已读或各大资讯平台上的优秀文章

对这个项目感兴趣的小伙伴，欢迎加入**React 面试大全翻译/校对小组**：

![wechat-qrcode](./images/wechat-group-qrcode.jpg)

### 目录
<!-- TOC -->
| 序号. | 问题 |
| --- | --------- | 
| | [Core React](#core-react) |
|1 | [什么是 React？](#什么是-react) |
|2 | [React 的主要特点是什么？](#react-的主要特点是什么) |
|3 | [什么是 JSX？](#什么是-jsx) |
|4 | [元素和组件有什么区别？](#元素和组件有什么区别) |
|5 | [如何在 React 中创建组件？](#如何在-react-中创建组件) |
|6 | [何时使用类组件和函数组件？](#何时使用类组件和函数组件) |
|7 | [什么是 Pure Components?](#什么是-pure-components) |
|8 | [React 的状态是什么？](#react-的状态是什么) |
|9 | [React 中的 props 是什么？](#react-中的-props-是什么) |
|10 | [状态和属性有什么区别？](#状态和属性有什么区别) |
|11 | [我们为什么不能直接更新状态？](#我们为什么不能直接更新状态) |
|12 | [回调函数作为 `setState()` 参数的目的是什么？](#回调函数作为-setstate-参数的目的是什么) |
|13 | [HTML 和 React 事件处理有什么区别？](#html-和-react-事件处理有什么区别) |
|14 | [如何在 JSX 回调中绑定方法或事件处理程序？](#如何在-jsx-回调中绑定方法或事件处理程序) |
|15 | [如何将参数传递给事件处理程序或回调函数？](#如何将参数传递给事件处理程序或回调函数) |
|16 | [React 中的合成事件是什么？](#react-中的合成事件是什么) |
|17 | [什么是内联条件表达式？](#什么是内联条件表达式) |
|18 | [什么是 "key" 属性，在元素数组中使用它们有什么好处？](#什么是-"key"-属性在元素数组中使用它们有什么好处) |
|19 | [refs 有什么用？](#refs-有什么用) |
|20 | [如何创建 refs？](#如何创建-refs) |
|21 | [什么 forward refs？](#什么-forward-refs) |
|22 | [*callback refs* 和 findDOMNode() 哪一个是首选选项？](#callback-refs-和-finddomnode-哪一个是首选选项) |
|23 | [为什么 String Refs 被弃用？](#为什么-string-refs-被弃用) |
|24 | [什么是 Virtual DOM？](#什么是-virtual-dom) |
|25 | [Virtual DOM 如何工作？](#virtual-dom-如何工作) |
|26 | [Shadow DOM 和 Virtual DOM 之间有什么区别？](#shadow-dom-和-virtual-dom-之间有什么区别) |
|27 | [什么是 React Fiber？](#什么是-react-fiber) |
|28 | [React Fiber 的主要目标是什么？](#react-fiber-的主要目标是什么) |
|29 | [什么是受控组件？](#什么是受控组件) |
|30 | [什么是非受控组件？](#什么是非受控组件) |
|31 | [createElement 和 cloneElement 有什么区别？](#createelement-和-cloneelement-有什么区别) |
|32 | [在 React 中的提升状态是什么？](#在-react-中的提升状态是什么) |
|33 | [组件生命周期的不同阶段是什么？](#组件生命周期的不同阶段是什么) |
|34 | [React 生命周期方法有哪些?](#react-生命周期方法有哪些?) |
|35 | [What are Higher-Order Components?](#what-are-higher-order-components) |
|36 | [How to create props proxy for HOC component?](#how-to-create-props-proxy-for-hoc-component) |
|37 | [What is context?](#what-is-context) |
|38 | [What is children prop?](#what-is-children-prop) |
|39 | [How to write comments in React?](#how-to-write-comments-in-react) |
|40 | [What is the purpose of using super constructor with props argument?](#what-is-the-purpose-of-using-super-constructor-with-props-argument) |
|41 | [What is reconciliation?](#what-is-reconciliation) |
|42 | [How to set state with a dynamic key name?](#how-to-set-state-with-a-dynamic-key-name) |
|43 | [What would be the common mistake of function being called every time the component renders?](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders) |
|44 | [Why is it necessary to capitalize component names?](#why-is-it-necessary-to-capitalize-component-names) |
|45 | [Why React uses `className` over `class` attribute?](#why-react-uses-classname-over-class-attribute) |
|46 | [What are fragments?](#what-are-fragments) |
|47 | [Why fragments are better than container divs?](#why-fragments-are-better-than-container-divs) |
|48 | [What are portals in React?](#what-are-portals-in-react) |
|49 | [What are stateless components?](#what-are-stateless-components) |
|50 | [What are stateful components?](#what-are-stateful-components) |
|51 | [How to apply validation on props in React?](#how-to-apply-validation-on-props-in-react) |
|52 | [What are the advantages of React?](#what-are-the-advantages-of-react) |
|53 | [What are the limitations of React?](#what-are-the-limitations-of-react) |
|54 | [What are error boundaries in React v16?](#what-are-error-boundaries-in-react-v16) |
|55 | [How error boundaries handled in React v15?](#how-error-boundaries-handled-in-react-v15) |
|56 | [What are the recommended ways for static type checking?](#what-are-the-recommended-ways-for-static-type-checking) |
|57 | [What is the use of `react-dom` package?](#what-is-the-use-of-react-dom-package) |
|58 | [What is the purpose of render method of `react-dom`?](#what-is-the-purpose-of-render-method-of-react-dom) |
|59 | [What is ReactDOMServer?](#what-is-reactdomserver) |
|60 | [How to use innerHTML in React?](#how-to-use-innerhtml-in-react) |
|61 | [How to use styles in React?](#how-to-use-styles-in-react) |
|62 | [How events are different in React?](#how-events-are-different-in-react) |
|63 | [What will happen if you use `setState()` in constructor?](#what-will-happen-if-you-use-setstate-in-constructor) |
|64 | [What is the impact of indexes as keys?](#what-is-the-impact-of-indexes-as-keys) |
|65 | [Is it good to use `setState()` in `componentWillMount()` method?](#is-it-good-to-use-setstate-in-componentwillmount-method) |
|66 | [What will happen if you use props in initial state?](#what-will-happen-if-you-use-props-in-initial-state) |
|67 | [How do you conditionally render components?](#how-do-you-conditionally-render-components) |
|68 | [Why we need to be careful when spreading props on DOM elements?](#why-we-need-to-be-careful-when-spreading-props-on-dom-elements) |
|69 | [How you use decorators in React?](#how-you-use-decorators-in-react) |
|70 | [How do you memoize a component?](#how-do-you-memoize-a-component) |
|71 | [How you implement Server Side Rendering or SSR?](#how-you-implement-server-side-rendering-or-ssr) |
|72 | [How to enable production mode in React?](#how-to-enable-production-mode-in-react) |
|73 | [What is CRA and its benefits?](#what-is-cra-and-its-benefits) |
|74 | [What is the lifecycle methods order in mounting?](#what-is-the-lifecycle-methods-order-in-mounting) |
|75 | [What are the lifecycle methods going to be deprecated in React v16?](#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16) |
|76 | [What is the purpose of `getDerivedStateFromProps()` lifecycle method?](#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method) |
|77 | [What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?](#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method) |
|78 | [What is the difference between createElement() and cloneElement() methods?](#what-is-the-difference-between-createelement-and-cloneelement-methods) |
|79 | [What is the recommended way for naming components?](#what-is-the-recommended-way-for-naming-components) |
|80 | [What is the recommended ordering of methods in component class?](#what-is-the-recommended-ordering-of-methods-in-component-class) |
|81 | [What is a switching component?](#what-is-a-switching-component) |
|82 | [Why we need to pass a function to setState()?](#why-we-need-to-pass-a-function-to-setstate) |
|83 | [What is strict mode in React?](#what-is-strict-mode-in-react) |
|84 | [What are React Mixins?](#what-are-react-mixins) |
|85 | [Why is `isMounted()` an anti-pattern and what is the proper solution?](#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution) |
|86 | [What are the Pointer Events supported in React?](#what-are-the-pointer-events-supported-in-react) |
|87 | [Why should component names start with capital letter?](#why-should-component-names-start-with-capital-letter) |
|88 | [Are custom DOM attributes supported in React v16?](#are-custom-dom-attributes-supported-in-react-v16) |
|89 | [What is the difference between constructor and getInitialState?](#what-is-the-difference-between-constructor-and-getinitialstate) |
|90 | [Can you force a component to re-render without calling setState?](#can-you-force-a-component-to-re-render-without-calling-setstate) |
|91 | [What is the difference between `super()` and `super(props)` in React using ES6 classes?](#what-is-the-difference-between-super-and-superprops-in-react-using-es6-classes) |
|92 | [How to loop inside JSX?](#how-to-loop-inside-jsx) |
|93 | [How do you access props in attribute quotes?](#how-do-you-access-props-in-attribute-quotes) |
|94 | [What is React proptype array with shape?](#what-is-react-proptype-array-with-shape) |
|95 | [How conditionally apply class attributes?](#how-conditionally-apply-class-attributes) |
|96 | [What is the difference between React and ReactDOM?](#what-is-the-difference-between-react-and-reactdom) |
|97 | [Why ReactDOM is separated from React?](#why-reactdom-is-separated-from-react) |
|98 | [How to use React label element?](#how-to-use-react-label-element) |
|99 | [How to combine multiple inline style objects?](#how-to-combine-multiple-inline-style-objects) |
|100 | [How to re-render the view when the browser is resized?](#how-to-re-render-the-view-when-the-browser-is-resized) |
|101 | [What is the difference between `setState()` and `replaceState()` methods?](#what-is-the-difference-between-setstate-and-replacestate-methods) |
|102 | [How to listen to state changes?](#how-to-listen-to-state-changes) |
|103 | [What is the recommended approach of removing an array element in React state?](#what-is-the-recommended-approach-of-removing-an-array-element-in-react-state) |
|104 | [Is it possible to use React without rendering HTML?](#is-it-possible-to-use-react-without-rendering-html) |
|105 | [How to pretty print JSON with React?](#how-to-pretty-print-json-with-react) |
|106 | [Why you can't update props in React?](#why-you-can't-update-props-in-react) |
|107 | [How to focus an input element on page load?](#how-to-focus-an-input-element-on-page-load) |
|108 | [What are the possible ways of updating objects in state?](#what-are-the-possible-ways-of-updating-objects-in-state) |
|109 | [Why function is preferred over object for `setState()`?](#why-function-is-preferred-over-object-for-setstate) |
|110 | [How can we find the version of React at runtime in the browser?](#how-can-we-find-the-version-of-react-at-runtime-in-the-browser) |
|111 | [What are the approaches to include polyfills in your `create-react-app`?](#what-are-the-approaches-to-include-polyfills-in-your-create-react-app) |
|112 | [How to use https instead of http in create-react-app?](#how-to-use-https-instead-of-http-in-create-react-app) |
|113 | [How to avoid using relative path imports in create-react-app?](#how-to-avoid-using-relative-path-imports-in-create-react-app) |
|114 | [How to add Google Analytics for React Router?](#how-to-add-google-analytics-for-react-router) |
|115 | [How to update a component every second?](#how-to-update-a-component-every-second) |
|116 | [How do you apply vendor prefixes to inline styles in React?](#how-do-you-apply-vendor-prefixes-to-inline-styles-in-react) |
|117 | [How to import and export components using React and ES6?](#how-to-import-and-export-components-using-react-and-es6) |
|118 | [Why React component names must begin with a capital letter?](#why-react-component-names-must-begin-with-a-capital-letter) |
|119 | [Why is a component constructor called only once?](#why-is-a-component-constructor-called-only-once) |
|120 | [How to define constants in React?](#how-to-define-constants-in-react) |
|121 | [How to programmatically trigger click event in React?](#how-to-programmatically-trigger-click-event-in-react) |
|122 | [Is it possible to use async/await in plain React?](#is-it-possible-to-use-async/await-in-plain-react) |
|123 | [What are the common folder structures for React?](#what-are-the-common-folder-structures-for-react) |
|124 | [What are the popular packages for animation?](#what-are-the-popular-packages-for-animation) |
|125 | [What is the benefit of styles modules?](#what-is-the-benefit-of-styles-modules) |
|126 | [What are the popular React-specific linters?](#what-are-the-popular-react-specific-linters) |
|127 | [How to make AJAX call and in which component lifecycle methods should I make an AJAX call?](#how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call) |
|128 | [What are render props?](#what-are-render-props) |
| | [React Router](#react-router) |
|129 | [What is React Router?](#what-is-react-router) |
|130 | [How React Router is different from history library?](#how-react-router-is-different-from-history-library) |
|131 | [What are the `<Router>` components of React Router v4?](#what-are-the-router-components-of-react-router-v4) |
|132 | [What is the purpose of `push()` and `replace()` methods of `history`?](#what-is-the-purpose-of-push-and-replace-methods-of-history) |
|133 | [How do you programmatically navigate using React Router v4?](#how-do-you-programmatically-navigate-using-react-router-v4) |
|134 | [How to get query parameters in React Router v4?](#how-to-get-query-parameters-in-react-router-v4) |
|135 | [Why you get "Router may have only one child element" warning?](#why-you-get-"router-may-have-only-one-child-element"-warning) |
|136 | [How to pass params to `history.push` method in React Router v4?](#how-to-pass-params-to-history.push-method-in-react-router-v4) |
|137 | [How to implement *default* or *NotFound* page?](#how-to-implement-default-or-notfound-page) |
|138 | [How to get history on React Router v4?](#how-to-get-history-on-react-router-v4) |
|139 | [How to perform automatic redirect after login?](#how-to-perform-automatic-redirect-after-login) |
| | [React Internationalization](#react-internationalization) |
|140 | [What is React Intl?](#what-is-react-intl) |
|141 | [What are the main features of React Intl?](#what-are-the-main-features-of-react-intl) |
|142 | [What are the two ways of formatting in React Intl?](#what-are-the-two-ways-of-formatting-in-react-intl) |
|143 | [How to use `<FormattedMessage>` as placeholder using React Intl?](#how-to-use-formattedmessage-as-placeholder-using-react-intl) |
|144 | [How to access current locale with React Intl?](#how-to-access-current-locale-with-react-intl) |
|145 | [How to format date using React Intl?](#how-to-format-date-using-react-intl) |
| | [React Testing](#react-testing) |
|146 | [What is Shallow Renderer in React testing?](#what-is-shallow-renderer-in-react-testing) |
|147 | [What is `TestRenderer` package in React?](#what-is-testrenderer-package-in-react) |
|148 | [What is the purpose of ReactTestUtils package?](#what-is-the-purpose-of-reacttestutils-package) |
|149 | [What is Jest?](#what-is-jest) |
|150 | [What are the advantages of Jest over Jasmine?](#what-are-the-advantages-of-jest-over-jasmine) |
|151 | [Give a simple example of Jest test case](#give-a-simple-example-of-jest-test-case) |
| | [React Redux](#react-redux) |
|152 | [What is flux?](#what-is-flux) |
|153 | [What is Redux?](#what-is-redux) |
|154 | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux) |
|155 | [What are the downsides of Redux compared to Flux?](#what-are-the-downsides-of-redux-compared-to-flux) |
|156 | [What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?](#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops) |
|157 | [Can I dispatch an action in reducer?](#can-i-dispatch-an-action-in-reducer) |
|158 | [How to access Redux store outside a component?](#how-to-access-redux-store-outside-a-component) |
|159 | [What are the drawbacks of MVW pattern?](#what-are-the-drawbacks-of-mvw-pattern) |
|160 | [Are there any similarities between Redux and RxJS?](#are-there-any-similarities-between-redux-and-rxjs) |
|161 | [How to dispatch an action on load?](#how-to-dispatch-an-action-on-load) |
|162 | [How to use `connect()` from React Redux?](#how-to-use-connect-from-react-redux) |
|163 | [How to reset state in Redux?](#how-to-reset-state-in-redux) |
|164 | [Whats the purpose of `at` symbol in the Redux connect decorator?](#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator) |
|165 | [What is the difference between React context and React Redux?](#what-is-the-difference-between-react-context-and-react-redux) |
|166 | [Why are Redux state functions called reducers?](#why-are-redux-state-functions-called-reducers) |
|167 | [How to make AJAX request in Redux?](#how-to-make-ajax-request-in-redux) |
|168 | [Should I keep all component's state in Redux store?](#should-i-keep-all-component's-state-in-redux-store) |
|169 | [What is the proper way to access Redux store?](#what-is-the-proper-way-to-access-redux-store) |
|170 | [What is the difference between component and container in React Redux?](#what-is-the-difference-between-component-and-container-in-react-redux) |
|171 | [What is the purpose of the constants in Redux?](#what-is-the-purpose-of-the-constants-in-redux) |
|172 | [What are the different ways to write `mapDispatchToProps()`?](#what-are-the-different-ways-to-write-mapdispatchtoprops) |
|173 | [What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?](#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops) |
|174 | [How to structure Redux top level directories?](#how-to-structure-redux-top-level-directories) |
|175 | [What is redux-saga?](#what-is-redux-saga) |
|176 | [What is the mental model of redux-saga?](#what-is-the-mental-model-of-redux-saga) |
|177 | [What are the differences between `call()` and `put()` in redux-saga?](#what-are-the-differences-between-call-and-put-in-redux-saga) |
|178 | [What is Redux Thunk?](#what-is-redux-thunk) |
|179 | [What are the differences between `redux-saga` and `redux-thunk`?](#what-are-the-differences-between-redux-saga-and-redux-thunk) |
|180 | [What is Redux DevTools?](#what-is-redux-devtools) |
|181 | [What are the features of Redux DevTools?](#what-are-the-features-of-redux-devtools) |
|182 | [What are Redux selectors and why to use them?](#what-are-redux-selectors-and-why-to-use-them) |
|183 | [What is Redux Form?](#what-is-redux-form) |
|184 | [What are the main features of Redux Form?](#what-are-the-main-features-of-redux-form) |
|185 | [How to add multiple middlewares to Redux?](#how-to-add-multiple-middlewares-to-redux) |
|186 | [How to set initial state in Redux?](#how-to-set-initial-state-in-redux) |
|187 | [How Relay is different from Redux?](#how-relay-is-different-from-redux) |
| | [React Native](#react-native) |
|188 | [What is the difference between React Native and React?](#what-is-the-difference-between-react-native-and-react) |
|189 | [How to test React Native apps?](#how-to-test-react-native-apps) |
|190 | [How to do logging in React Native?](#how-to-do-logging-in-react-native) |
|191 | [How to debug your React Native?](#how-to-debug-your-react-native) |
| | [React supported libraries & Integration](#react-supported-libraries-&-integration) |
|192 | [What is reselect and how it works?](#what-is-reselect-and-how-it-works) |
|193 | [What is Flow?](#what-is-flow) |
|194 | [What is the difference between Flow and PropTypes?](#what-is-the-difference-between-flow-and-proptypes) |
|195 | [How to use Font Awesome icons in React?](#how-to-use-font-awesome-icons-in-react) |
|196 | [What is React Dev Tools?](#what-is-react-dev-tools) |
|197 | [Why is DevTools not loading in Chrome for local files?](#why-is-devtools-not-loading-in-chrome-for-local-files) |
|198 | [How to use Polymer in React?](#how-to-use-polymer-in-react) |
|199 | [What are the advantages of React over Vue.js?](#what-are-the-advantages-of-react-over-vue.js) |
|200 | [What is the difference between React and Angular?](#what-is-the-difference-between-react-and-angular) |
|201 | [Why React tab is not showing up in DevTools?](#why-react-tab-is-not-showing-up-in-devtools) |
|202 | [What are Styled Components?](#what-are-styled-components) |
|203 | [Give an example of Styled Components?](#give-an-example-of-styled-components) |
|204 | [What is Relay?](#what-is-relay) |
|205 | [How to use TypeScript in `create-react-app` application?](#how-to-use-typescript-in-create-react-app-application) |
| | [Miscellaneous](#miscellaneous) |
|206 | [What are the main features of Reselect library?](#what-are-the-main-features-of-reselect-library) |
|207 | [Give an example of Reselect usage?](#give-an-example-of-reselect-usage) |
|208 | [What is an action in Redux?](#what-is-an-action-in-redux) |
|209 | [Does the statics object work with ES6 classes in React?](#does-the-statics-object-work-with-es6-classes-in-react) |
|210 | [Redux 只能与 React 一起使用么？](#redux-只能与-react-一起使用么) |
|211 | [Do you need to have a particular build tool to use Redux?](#do-you-need-to-have-a-particular-build-tool-to-use-redux) |
|212 | [How Redux Form `initialValues` get updated from state?](#how-redux-form-initialvalues-get-updated-from-state) |
|213 | [How React PropTypes allow different types for one prop?](#how-react-proptypes-allow-different-types-for-one-prop) |
|214 | [Can I import an SVG file as react component?](#can-i-import-an-svg-file-as-react-component) |
|215 | [Why are inline ref callbacks or functions not recommended?](#why-are-inline-ref-callbacks-or-functions-not-recommended) |
|216 | [What is render hijacking in react?](#what-is-render-hijacking-in-react) |
|217 | [What are HOC factory implementations?](#what-are-hoc-factory-implementations) |
|218 | [How to pass numbers to React component?](#how-to-pass-numbers-to-react-component) |
|219 | [Do I need to keep all my state into Redux? Should I ever use react internal state?](#do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state) |
|220 | [What is the purpose of registerServiceWorker in React?](#what-is-the-purpose-of-registerserviceworker-in-react) |
|221 | [What is React memo function?](#what-is-react-memo-function) |
|222 | [What is React lazy function?](#what-is-react-lazy-function) |
|223 | [How to prevent unnecessary updates using setState?](#how-to-prevent-unnecessary-updates-using-setstate) |
|224 | [How do you render Array, Strings and Numbers in React 16 Version?](#how-do-you-render-array,-strings-and-numbers-in-react-16-version) |
|225 | [How to use class field declarations syntax in React classes?](#how-to-use-class-field-declarations-syntax-in-react-classes) |
|226 | [What are hooks?](#what-are-hooks) |
|227 | [What are the rules needs to follow for hooks?](#what-are-the-rules-needs-to-follow-for-hooks) |
|228 | [How to ensure hooks followed the rules in your project?](#how-to-ensure-hooks-followed-the-rules-in-your-project) |
|229 | [What are the differences between Flux and Redux?](#what-are-the-differences-between-flux-and-redux) |
|230 | [What are the benefits of React Router V4?](#what-are-the-benefits-of-react-router-v4) |
|231 | [Can you describe about componentDidCatch lifecycle method signature?](#can-you-describe-about-componentdidcatch-lifecycle-method-signature) |
|232 | [在哪些情况下，错误边界不会捕获错误？](#在哪些情况下错误边界不会捕获错误) |
|233 | [Why do not you need error boundaries for event handlers?](#why-do-not-you-need-error-boundaries-for-event-handlers) |
|234 | [What is the difference between try catch block and error boundaries?](#what-is-the-difference-between-try-catch-block-and-error-boundaries) |
|235 | [React 16 中未捕获的错误的行为是什么？](#react-16-中未捕获的错误的行为是什么) |
|236 | [放置错误边界的正确位置是什么？](#放置错误边界的正确位置是什么) |
|237 | [从错误边界跟踪组件堆栈有什么好处？](#从错误边界跟踪组件堆栈有什么好处) |
|238 | [在定义类组件时，什么是必须的方法？](#在定义类组件时什么是必须的方法) |
|239 | [What are the possible return types of render method?](#what-are-the-possible-return-types-of-render-method) |
|240 | [构造函数的主要目的是什么？](#构造函数的主要目的是什么) |
|241 | [是否必须为 React 组件定义构造函数？](#是否必须为-react-组件定义构造函数) |
|242 | [什么是默认属性？](#什么是默认属性) |
|243 | [为什么不能在 componentWillUnmount 中调用 setState() 方法？](#为什么不能在-componentwillunmount-中调用-setstate-方法) |
|244 | [getDerivedStateFromError 的目的是什么？](#getderivedstatefromerror-的目的是什么) |
|245 | [当组件重新渲染时顺序执行的方法有哪些？](#当组件重新渲染时顺序执行的方法有哪些) |
|246 | [错误处理期间调用哪些方法？](#错误处理期间调用哪些方法) |
|247 | [What is the purpose of displayName class property?](#what-is-the-purpose-of-displayname-class-property) |
|248 | [支持 React 应用程序的浏览器有哪一些？](#支持-react-应用程序的浏览器有哪一些) |
|249 | [unmountComponentAtNode 方法的目的是什么？](#unmountcomponentatnode-方法的目的是什么) |
|250 | [什么是代码拆分？](#什么是代码拆分) |
|251 | [严格模式有什么好处?](#严格模式有什么好处) |
|252 | [What are Keyed Fragments?](#what-are-keyed-fragments) |
|253 | [React 支持所有的 HTML 属性么？](#react-支持所有的-html-属性么) |
|254 | [What are the limitations with HOCs?](#what-are-the-limitations-with-hocs) |
|255 | [How to debug forwardRefs in DevTools?](#how-to-debug-forwardrefs-in-devtools) |
|256 | [什么时候组件的 props 属性默认为 true？](#什么时候组件的-props-属性默认为-true) |
|257 | [什么是 NextJS 及其主要特征？](#什么是-nextjs-及其主要特征) |
|258 | [如何将事件处理程序传递给组件？](#如何将事件处理程序传递给组件) |
|259 | [在渲染方法中使用箭头函数好么？](#在渲染方法中使用箭头函数好么) |
|260 | [如何防止函数被多次调用？](#如何防止函数被多次调用) |
|261 | [JSX 如何防止注入攻击？](#jsx-如何防止注入攻击) |
|262 | [如何更新已渲染的元素？](#如何更新已渲染的元素) |
|263 | [你怎么说 props 是只读的？](#你怎么说-props-是只读的) |
|264 | [你认为状态更新是如何合并的？](#你认为状态更新是如何合并的) |
|265 | [如何将参数传递给事件处理程序？](#如何将参数传递给事件处理程序) |
|266 | [如何防止组件渲染？](#如何防止组件渲染) |
|267 | [安全地使用索引作为键的条件是什么？](#安全地使用索引作为键的条件是什么) |
|268 | [keys 是否需要全局唯一？](#keys-是否需要全局唯一) |
|269 | [用于表单处理的流行选择是什么？](#用于表单处理的流行选择是什么) |
|270 | [formik 相对于其他 redux 表单库有什么优势？](#formik-相对于其他-redux-表单库有什么优势) |
|271 | [为什么不需要使用继承？](#为什么不需要使用继承) |
|272 | [我可以在 React 应用程序中可以使用 web components 么？](#我可以在-react-应用程序中可以使用-web-components-么) |
|273 | [什么是 dynamic import？](#什么是-dynamic-import) |
|274 | [什么是 loadable 组件？](#什么是-loadable-组件) |
|275 | [什么是 suspense 组件？](#什么是-suspense-组件) |
|276 | [什么是基于路由的代码拆分？](#什么是基于路由的代码拆分) |
|277 | [举例说明如何使用 context？](#举例说明如何使用-context) |
|278 | [在 context 中默认值的目的是什么？](#在-context-中默认值的目的是什么) |
|279 | [你是怎么使用 contextType？](#你是怎么使用-contexttype) |
|280 | [什么是 consumer？](#什么是-consumer) |
|281 | [How do you solve performance corner cases while using context?](#how-do-you-solve-performance-corner-cases-while-using-context) |
|282 | [What is the purpose of forward ref in HOCs?](#what-is-the-purpose-of-forward-ref-in-hocs) |
|283 | [ref 参数对于所有函数或类组件是否可用？](#ref-参数对于所有函数或类组件是否可用) |
|284 | [在组件库中当使用 forward refs 时，你需要额外的注意？](#在组件库中当使用-forward-refs-时你需要额外的注意) |
|285 | [如何在没有 ES6 的情况下创建 React 类组件](#如何在没有-es6-的情况下创建-react-类组件) |
|286 | [是否可以在没有 JSX 的情况下使用 React？](#是否可以在没有-jsx-的情况下使用-react) |
|287 | [What is diffing algorithm?](#what-is-diffing-algorithm) |
|288 | [What are the rules covered by diffing algorithm?](#what-are-the-rules-covered-by-diffing-algorithm) |
|289 | [你什么时候需要使用 refs？](#你什么时候需要使用-refs) |
|290 | [Is it prop must be named as render for render props?](#is-it-prop-must-be-named-as-render-for-render-props) |
|291 | [在 Pure Component 中使用渲染属性会有什么问题？](#在-pure-component-中使用渲染属性会有什么问题) |
|292 | [如何使用渲染属性创建 HOC？](#如何使用渲染属性创建-hoc) |
|293 | [什么是 windowing 技术？](#什么是-windowing-技术) |
|294 | [你如何在 JSX 中打印 falsy 值？](#你如何在-jsx-中打印-falsy-值) |
|295 | [portals 的典型使用场景是什么?](#portals-的典型使用场景是什么) |
|296 | [How do you set default value for uncontrolled component?](#how-do-you-set-default-value-for-uncontrolled-component) |
|297 | [你最喜欢的 React 技术栈是什么?](#你最喜欢的-react-技术栈是什么) |
|298 | [Real DOM 和 Virtual DOM 有什么区别？](#real-dom-和-virtual-dom-有什么区别) |
|299 | [如何为 React 应用程序添加 bootstrap？](#如何为-react-应用程序添加-bootstrap) |
|300 | [您能否列出使用 React 作为前端框架的顶级网站或应用程序？](#您能否列出使用-react-作为前端框架的顶级网站或应用程序) |
|301 | [是否建议在 React 中使用 CSS In JS 技术？](#是否建议在-react-中使用-css-in-js-技术) |
<!-- /TOC -->

## Core React

1. ### 什么是 React？

    React 是一个**开源前端 JavaScript 库**，用于构建用户界面，尤其是单页应用程序。它用于处理网页和移动应用程序的视图层。React 是由 Facebook 的软件工程师 Jordan Walke 创建的。在 2011 年 React 应用首次被部署到 Facebook 的信息流中，之后于 2012 年被应用到 Instagram 上。


2. ### React 的主要特点是什么？

    React 的主要特性有：

    * 考虑到真实的 DOM 操作成本很高，它使用 VirtualDOM 而不是真实的 DOM
    * 支持服务端渲染。
    * 遵循单向数据流或数据绑定。
    * 使用可重用/可组合的 UI 组件开发视图。

3. ### 什么是 JSX？

    *JSX* 是 ECMAScript 一个类似 XML 的语法扩展。基本上，它只是为 `React.createElement()` 函数提供语法糖，从而让在我们在 JavaScript 中，使用类 HTML 模板的语法，进行页面描述。

    在下面的示例中，`<h1>` 内的文本标签会作为 JavaScript 函数返回给渲染函数。

    ```jsx
    class App extends React.Component {
      render() {
        return(
          <div>
            <h1>{'Welcome to React world!'}</h1>
          </div>
        )
      }
    }
    ```

4. ### 元素和组件有什么区别？

    一个 *Element* 是一个简单的对象，它描述了您希望在屏幕上以DOM节点或其他组件的形式呈现的内容。*Elements* 在它们的属性中可以包含其他 *Elements*。创建一个 React 元素是很轻量的。一旦元素被创建后，它将不会被修改。

    React Element 的对象表示如下：

    ```javascript
    const element = React.createElement(
      'div',
      {id: 'login-btn'},
      'Login'
    )
    ```

    上面的 `React.createElement()` 函数会返回一个对象。

    ```
    {
      type: 'div',
      props: {
        children: 'Login',
        id: 'login-btn'
      }
    }
    ```

    最后使用 `ReactDOM.render()` 方法渲染到 DOM：

    ```html
    <div id='login-btn'>Login</div>
    ```

    而一个组件可以用多种不同方式声明。它可以是一个含有 `render()` 方法的类。或者，在简单的情况中，它可以定义为函数。无论哪种情况，它都将
    props 作为输入，并返回一个 JSX 树作为输出：

    ```jsx
    const Button = ({ onLogin }) =>
      <div id={'login-btn'} onClick={onLogin} />
    ```

    然后 JSX 被转换成 `React.createElement()` 函数：

    ```javascript
    const Button = ({ onLogin }) => React.createElement(
      'div',
      { id: 'login-btn', onClick: onLogin },
      'Login'
    )
    ```

5. ### 如何在 React 中创建组件？

    有两种可行的方法来创建一个组件：

    1. **Function Components:** 这是创建组件最简单的方式。这些是纯 JavaScript 函数，接受 props 对象作为第一个参数并返回 React 元素：

        ```jsx 
        function Greeting({ message }) {
          return <h1>{`Hello, ${message}`}</h1>
        }
        ```

    2. **Class Components:** 您还可以使用 ES6 类来定义组件。上面的函数组件可以写成：

        ```jsx 
        class Greeting extends React.Component {
          render() {
            return <h1>{`Hello, ${this.props.message}`}</h1>
          }
        }
        ```

6. ### 何时使用类组件和函数组件？

    如果组件需要 *状态或生命周期方法*，那么使用类组件，否则使用函数组件。

7. ### 什么是 Pure Components?

    *`React.PureComponent`* 与 *`React.Component`* 完全相同，只是它为您处理了 `shouldComponentUpdate()` 方法。当属性或状态发生变化时，*PureComponent* 将对属性和状态进行浅比较。另一方面，*Component* 不会将当前的属性和状态与新的属性和状态进行比较。因此，在默认情况下，每当调用 `shouldComponentUpdate` 时，组件将重新渲染。

8. ### React 的状态是什么？

    组件的状态是一个对象，它包含某些信息，这些信息可能在组件的生命周期中发生更改。我们应该尽量使状态尽可能简单，并尽量减少有状态组件的数量。让我们创建一个包含消息状态的 User 组件，

    ```javascript
    class User extends React.Component {
      constructor(props) {
        super(props)
    
        this.state = {
          message: 'Welcome to React world'
        }
      }
    
      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        )
      }
    }
    ```
    
    ![state](images/state.jpg)
    
    状态（State）与属性（Props）类似，但它是私有的，完全由组件控制。也就是说，除了它所属的组件外，任何组件都无法访问它。

9. ### React 中的 props 是什么？

    *Props* 是组件的输入。它们是单个值或包含一组值的对象，这些值在创建时使用类似于 HTML 标记属性的命名约定传递给组件。它们是从父组件传递到子
    组件的数据。

    Props 的主要目的是提供以下组件功能：

    1. 将自定义数据传递到组件。
    2. 触发状态更改。
    3. 在组件的 `render()` 方法中通过 `this.props.reactProp` 使用。

    例如，让我们使用 `reactProp` 属性创建一个元素：

    ```jsx
    <Element reactProp={'1'} />
    ```

    然后，`reactProp` 将成为附加到 React props 对象的属性，该对象最初已存在于使用 React 库创建的所有组件上。

    ```
    props.reactProp
    ```

10. ### 状态和属性有什么区别？

   *props* 和 *state* 都是普通的 JavaScript 对象。虽然它们都保存着影响渲染输出的信息，但它们在组件方面的功能不同。Props 以类似于函数参数的方式传递给组件，而状态则类似于在函数内声明变量并对它进行管理。

11. ### 我们为什么不能直接更新状态？

    如果你尝试直接更新状态，则不会重新渲染组件？

    ```javascript
    //Wrong
    this.state.message = 'Hello world'
    ```

    而是使用 `setState()` 方法。它调度组件状态对象的更新。当状态更改时，组件通过重新渲染来响应。

    ```javascript
    //Correct
    this.setState({ message: 'Hello World' })
    ```

    **注意：** 您可以在 *constructor* 中或使用最新的 JavaScript 类属性声明语法直接设置状态对象。

12. ### 回调函数作为 `setState()` 参数的目的是什么？

    当 setState 完成和组件渲染后，回调函数将会被调用。由于 `setState()` 是异步的，回调函数用于任何后续的操作。

    **注意：** 建议使用生命周期方法而不是此回调函数。

    ```javascript
    setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))
    ```

13. ### HTML 和 React 事件处理有什么区别？

    1. 在 HTML 中事件名必须小写:

    ```html
    <button onclick='activateLasers()'>
    ```

    而在 React 中它遵循 *camelCase* (驼峰) 惯例：

    ```jsx
    <button onClick={activateLasers}>
    ```

    2. 在 HTML 中你可以返回 `false` 以阻止默认的行为：

    ```html
    <a href='#' onclick='console.log("The link was clicked."); return false;' />
    ```

    而在 React 中你必须地明确地调用 `preventDefault()` ：

    ```javascript
    function handleClick(event) {
      event.preventDefault()
      console.log('The link was clicked.')
    }
    ```

14. ### 如何在 JSX 回调中绑定方法或事件处理程序？

    实现这一点有三种可能的方法：

    1.	**Binding in Constructor:** 在 JavaScript 类中，方法默认不被绑定。这也适用于定义为类方法的 React 事件处理程序。通常我们在构造函数中绑定它们。

    ```javascript
    class Component extends React.Componenet {
      constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
      }
    
      handleClick() {
        // ...
      }
    }
    ```

    2. **Public class fields syntax:** 如果你不喜欢 bind 方案，则可以使用 *public class fields syntax* 正确绑定回调。

    ```jsx 
    handleClick = () => {
      console.log('this is:', this)
    }
    ```

    ```jsx 
    <button onClick={this.handleClick}>
      {'Click me'}
    </button>
    ```

    3. **Arrow functions in callbacks:** 你可以在回调函数中直接使用 *arrow functions*。

    ```jsx
    <button onClick={(event) => this.handleClick(event)}>
      {'Click me'}
    </button>
    ```

    **注意：** 如果回调函数作为属性传给子组件，那么这些组件可能触发一个额外的重新渲染。在这些情况下，考虑到性能，最好使用 `.bind()` 或 *public class fields syntax* 方案。

15. ### 如何将参数传递给事件处理程序或回调函数？

    您可以使用箭头函数来包装事件处理器并传递参数：

    ```jsx 
    <button onClick={() => this.handleClick(id)} />
    ```

    这相当于调用 `.bind`:

    ```jsx 
    <button onClick={this.handleClick.bind(this, id)} />
    ```

16. ### React 中的合成事件是什么？

    `SyntheticEvent` 是对浏览器原生事件的跨浏览器包装。它的 API 与浏览器的原生事件相同，包括 `stopPropagation()` 和 `preventDefault()`，除了事件在所有浏览器中的工作方式相同。

17. ### 什么是内联条件表达式？

    在 JS 中你可以使用 *if statements* 或 *ternary expressions* ，来实现条件判断。除了这些方法之外，您还可以在 JSX 中嵌入任何表达式，方法是将它们用大括号括起来，然后再加上 JS 逻辑运算符 `&&`。

    ```jsx 
    <h1>Hello!</h1>
    {
        messages.length > 0 && !isLogin ?
          <h2>
              You have {messages.length} unread messages.
          </h2>
          :
          <h2>
              You don't have unread messages.
          </h2>
    }
    ```

18. ### 什么是 "key" 属性，在元素数组中使用它们有什么好处？

    `key` 是一个特殊的字符串属性，你在创建元素数组时需要包含它。*Keys* 帮助 React 识别哪些项已更改、添加或删除。

    我们通常使用数据中的 IDs 作为 *keys*:

    ```jsx
    const todoItems = todos.map((todo) =>
      <li key={todo.id}>
        {todo.text}
      </li>
    )
    ```

    在渲染列表项时，如果你没有稳定的 IDs，你可能会使用 *index* 作为 *key*：

    ```jsx
    const todoItems = todos.map((todo, index) =>
      <li key={index}>
        {todo.text}
      </li>
    )
    ```

    **注意：**

    1. 由于列表项的顺序可能发生改变，因此并不推荐使用 *indexes* 作为 *keys*。这可能会对性能产生负面影响，并可能导致组件状态出现问题。
    2. 如果将列表项提取为单独的组件，则在列表组件上应用 *keys* 而不是 `li` 标签。
    3. 如果在列表项中没有设置 `key` 属性，在控制台会显示警告消息。

19. ### refs 有什么用？

    *ref* 用于返回对元素的引用。但在大多数情况下，应该避免使用它们。当您需要直接访问 DOM 元素或组件的实例时，它们可能非常有用。

20. ### 如何创建 refs？

    这里有两种方案
    1. 这是最近增加的一种方案。*Refs* 是使用 `React.createRef()` 方法创建的，并通过 `ref` 属性添加到 React 元素上。为了在整个组件中使用*refs*，只需将 *ref* 分配给构造函数中的实例属性。

    ```jsx 
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
      render() {
        return <div ref={this.myRef} />
      }
    }
    ```

    2. 你也可以使用 ref 回调函数的方案，而不用考虑 React 版本。例如，访问搜索栏组件中的 `input` 元素如下：

    ```jsx 
    class SearchBar extends Component {
       constructor(props) {
          super(props);
          this.txtSearch = null;
          this.state = { term: '' };
          this.setInputSearchRef = e => {
             this.txtSearch = e;
          }
       }
    
       onInputChange(event) {
          this.setState({ term: this.txtSearch.value });
       }
    
       render() {
          return (
             <input
                value={this.state.term}
                onChange={this.onInputChange.bind(this)}
                ref={this.setInputSearchRef} />
          );
       }
    }
    ```

    你也可以在使用 **closures** 的函数组件中使用 *refs*。

    **注意：** 您也可以使用内联引用回调，尽管这不是推荐的方法。

21. ### 什么 forward refs？

    *Ref forwarding* 是一个特性，它允许一些组件获取接收到 *ref* 对象并将它进一步传递给子组件。

    ```jsx 
    const ButtonElement = React.forwardRef((props, ref) => (
      <button ref={ref} className="CustomButton">
        {props.children}
      </button>
    ));
    
    // Create ref to the DOM button:
    const ref = React.createRef();
    <ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>
    ```

22. ### *callback refs* 和 findDOMNode() 哪一个是首选选项？

    最好是使用 *callback refs* 而不是 `findDOMNode()` API。因为 `findDOMNode()` 阻碍了将来对 React 的某些改进。

    使用 `findDOMNode` 已弃用的方案：

    ```javascript
    class MyComponent extends Component {
      componentDidMount() {
        findDOMNode(this).scrollIntoView()
      }
    
      render() {
        return <div />
      }
    }
    ```

    推荐的方案是：

    ```javascript
    class MyComponent extends Component {
      componentDidMount() {
        this.node.scrollIntoView()
      }
    
      render() {
        return <div ref={node => this.node = node} />
      }
    }
    ```

23. ### 为什么 String Refs 被弃用？

    如果您以前使用过 React，你可能会熟悉旧的 API，其中的 `ref` 属性是字符串，如 `ref={'textInput'}`，并且 DOM 节点的访问方式为`this.refs.textInput`。我们建议不要这样做，因为字符串引用有以下问题，并且被认为是遗留问题。字符串 refs 在 React v16 版本中被移除。

    1. 它们强制 React 跟踪当前执行的组件。这是有问题的，因为它使 React 模块有状态，这会导致在 bundle 中复制 React 模块时会导致奇怪的错误。
    2. 它们是不可组合的 - 如果一个库把一个 ref 传给子元素，则用户无法对其设置另一个引用。
    3. 它们不能与静态分析工具一起使用，如 Flow。Flow 无法猜测出 `this.refs` 上的字符串引用的作用及其类型。Callback refs 对静态分析更友好。
    4. 使用 "render callback" 模式（比如： <DataGrid renderRow={this.renderRow} />），它无法像大多数人预期的那样工作。

       ```jsx 
       class MyComponent extends Component {
         renderRow = (index) => {
           // This won't work. Ref will get attached to DataTable rather than MyComponent:
           return <input ref={'input-' + index} />;

           // This would work though! Callback refs are awesome.
           return <input ref={input => this['input-' + index] = input} />;
         }

         render() {
           return <DataTable data={this.props.data} renderRow={this.renderRow} />
         }
       }
       ```

24. ### 什么是 Virtual DOM？

    *Virtual DOM* (VDOM) 是 *Real DOM* 的内存表示形式。UI 的展示形式被保存在内存中并与真实的 DOM 同步。这是在调用的渲染函数和在屏幕上显示元素之间发生的一个步骤。整个过程被称为 *reconciliation*。

25. ### Virtual DOM 如何工作？

    *Virtual DOM* 分为三个简单的步骤。

    1. 每当任何底层数据发生更改时，整个 UI 都将以 Virtual DOM 的形式重新渲染。
        ![vdom](images/vdom1.png)

    2. 然后计算先前 Virtual DOM 对象和新的 Virtual DOM 对象之间的差异。
        ![vdom2](images/vdom2.png)

    3. 一旦计算完成，真实的 DOM 将只更新实际更改的内容。
        ![vdom3](images/vdom3.png)

26. ### Shadow DOM 和 Virtual DOM 之间有什么区别？

    [*Shadow DOM*](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn) 是一种浏览器技术，它解决了构建网络应用的脆弱性问题。Shadow DOM 修复了 CSS 和 DOM。它在网络平台中引入作用域样式。 无需工具或命名约定，您即可使用原生 JavaScript 捆绑 CSS 和标记、隐藏实现详情以及编写独立的组件。*Virtual DOM* 是一个由 JavaScript 库在浏览器 API 之上实现的概念。

27. ### 什么是 React Fiber？

    Fiber 是 React v16 中新的 *reconciliation* 引擎，或核心算法的重新实现。React Fiber 的目标是提高对动画，布局，手势，暂停，中止或者重用任务的能力及为不同类型的更新分配优先级，及新的并发原语等领域的适用性。

28. ### React Fiber 的主要目标是什么？

    *React Fiber* 的目标是提高其在动画、布局和手势等领域的适用性。它的主要特性是 **incremental rendering**: 将渲染任务拆分为小的任务块并将任务分配到多个帧上的能力。

29. ### 什么是受控组件？

    在随后的用户输入中，能够控制表单中输入元素的组件被称为受控组件，即每个状态更改都有一个相关联的处理程序。

    例如，我们使用下面的 handleChange 函数将输入框的值转换成大写：

    ```javascript
    handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()})
    }
    ```

30. ### 什么是非受控组件？

    非受控组件是在内部存储其自身状态的组件，当需要时，可以使用 ref 查询 DOM 并查找其当前值。这有点像传统的 HTML。

    在下面的 UserProfile 组件中，我们通过 ref 引用 `name` 输入框：

    ```jsx 
    class UserProfile extends React.Component {
      constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value)
        event.preventDefault()
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              {'Name:'}
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    ```

    在大多数情况下，建议使用受控组件来实现表单。

31. ### createElement 和 cloneElement 有什么区别？

    JSX 元素将被转换为 `React.createElement()` 函数来创建 React 元素，这些对象将用于表示 UI 对象。而 `cloneElement` 用于克隆元素并传递新的属性。

32. ### 在 React 中的提升状态是什么？

    当多个组件需要共享相同的更改数据时，建议将共享状态提升到最接近的共同祖先。这意味着，如果两个子组件共享来自其父组件的相同数据，则将状态移动到父组件，而不是在两个子组件中维护局部状态。

33. ### 组件生命周期的不同阶段是什么？

    组件生命周期有三个不同的生命周期阶段：

    1. **Mounting:** 组件已准备好挂载到浏览器的 DOM 中. 此阶段包含来自 `constructor()`, `getDerivedStateFromProps()`, `render()`, 和 `componentDidMount()` 生命周期方法中的初始化过程。

    2. **Updating:** 在此阶段，组件以两种方式更新，发送新的属性并使用 `setState()` 或 `forceUpdate()` 方法更新状态. 此阶段包含 `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` 和 `componentDidUpdate()` 生命周期方法。

    3. **Unmounting:** 在这个最后阶段，不需要组件，它将从浏览器 DOM 中卸载。这个阶段包含 `componentWillUnmount()` 生命周期方法。

    值得一提的是，在将更改应用到 DOM 时，React 内部也有阶段概念。它们按如下方式分隔开：

    1. **Render** 组件将会进行无副作用渲染。这适用于纯组件（Pure Component），在此阶段，React 可以暂停，中止或重新渲染。

    2. **Pre-commit** 在组件实际将更改应用于 DOM 之前，有一个时刻允许 React 通过`getSnapshotBeforeUpdate()`捕获一些 DOM 信息（例如滚动位置）。

    3. **Commit** React 操作 DOM 并分别执行最后的生命周期： `componentDidMount()` 在 DOM 渲染完成后调用, `componentDidUpdate()` 在组件更新时调用,  `componentWillUnmount()` 在组件卸载时调用。
    React 16.3+ 阶段 (也可以看[交互式版本](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

    ![phases 16.3+](images/phases16.3.jpg)

    React 16.3 之前

    ![phases 16.2](images/phases.png)


34. ### React 生命周期方法有哪些?

    React 16.3+

    - **getDerivedStateFromProps:** 在调用`render()`之前调用，并在 *每次* 渲染时调用。 需要使用派生状态的情况是很罕见得。值得阅读 [如果你需要派生状态](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    - **componentDidMount:** 首次渲染后调用，所有得 Ajax 请求、DOM 或状态更新、设置事件监听器都应该在此处发生。
    - **shouldComponentUpdate:** 确定组件是否应该更新。 默认情况下，它返回`true`。 如果您确定在更新状态或属性后不需要渲染组件，则可以返回`false`值。 它是一个提高性能的好地方，因为它允许您在组件接收新属性时阻止重新渲染。
    - **getSnapshotBeforeUpdate:** 在最新的渲染输出提交给 DOM 前将会立即调用，这对于从 DOM 捕获信息（比如：滚动位置）很有用。
    - **componentDidUpdate:** 它主要用于更新 DOM 以响应 prop 或 state 更改。 如果`shouldComponentUpdate()`返回`false`，则不会触发。
    - **componentWillUnmount** 当一个组件被从 DOM 中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。

    Before 16.3

    - **componentWillMount:** 在组件`render()`前执行，用于根组件中的应用程序级别配置。应该避免在该方法中引入任何的副作用或订阅。
    - **componentDidMount:** 首次渲染后调用，所有得 Ajax 请求、DOM 或状态更新、设置事件监听器都应该在此处发生。
    - **componentWillReceiveProps:** 在组件接收到新属性前调用，若你需要更新状态响应属性改变（例如，重置它），你可能需对比`this.props`和`nextProps`并在该方法中使用`this.setState()`处理状态改变。
    - **shouldComponentUpdate:** 确定组件是否应该更新。 默认情况下，它返回`true`。 如果您确定在更新状态或属性后不需要渲染组件，则可以返回`false`值。 它是一个提高性能的好地方，因为它允许您在组件接收新属性时阻止重新渲染。
    - **componentWillUpdate:** 当`shouldComponentUpdate`返回`true`后重新渲染组件之前执行，注意你不能在这调用`this.setState()`
    - **componentDidUpdate:** 它主要用于更新 DOM 以响应 prop 或 state 更改。 如果`shouldComponentUpdate()`返回`false`，则不会触发。
    - **componentWillUnmount:** 当一个组件被从 DOM 中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。

35. ### 什么是高阶组件（HOC）?

    *高阶组件*(*HOC*)就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件，它只是一种模式，这种模式是由`react`自身的组合性质必然产生的。

    我们将它们称为**纯组件**，因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件中的任何行为。

    ```javascript
    const EnhancedComponent = higherOrderComponent(WrappedComponent)
    ```

    HOC 有很多用例：

    1. 代码复用，逻辑抽象化
    2. 渲染劫持
    3. 抽象化和操作状态（`state`）
    4. 操作属性（`props`）
    
    > 译注：更详细用法请参考[高阶组件的使用](https://react.docschina.org/docs/higher-order-components.html)

36. ### 如何为高阶组件创建属性代理？

    你可以使用*属性代理*模式向输入组件增加或编辑属性（props）：

    ```jsx harmony
    function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true
          };

          return <WrappedComponent {...this.props} {...newProps} />
        }
      }
    }
    ```

37. ### 什么是上下文（Context）?

    *Context* 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递`props`。比如，需要在应用中许多组件需要访问登录用户信息、地区偏好、UI主题等。

    ```jsx harmony
    // 创建一个 theme Context,  默认 theme 的值为 light
    const ThemeContext = React.createContext('light');
    
    function ThemedButton(props) {
      // ThemedButton 组件从 context 接收 theme
      return (
        <ThemeContext.Consumer>
          {theme => <Button {...props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
    
    // 中间组件
    function Toolbar(props) {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }
    
    class App extends React.Component {
      render() {
        return (
          <ThemeContext.Provider value="dark">
            <Toolbar />
          </ThemeContext.Provider>
        );
      }
    }
    ```

38. ### children 属性是什么?

    *Children* 是一个属性（`this.props.chldren`），它允许您将组件作为数据传递给其他组件，就像您使用的任何其他组件一样。在组件的开始和结束标记之间放置的组件树将作为`children`属性传递给该组件。

    React API 中有许多方法中提供了这个不透明数据结构的方法，包括：`React.Children.map`、`React.Children.forEach`、`React.Children.count`、`React.Children.only`、`React.Children.toArray`。

    ```jsx harmony
    const MyDiv = React.createClass({
      render: function() {
        return <div>{this.props.children}</div>
      }
    })

    ReactDOM.render(
      <MyDiv>
        <span>{'Hello'}</span>
        <span>{'World'}</span>
      </MyDiv>,
      node
    )
    ```

39. ### 怎样在 React 中写注释?

    React/JSX 中的注释类似于 JavaScript 的多行注释，但是是用大括号括起来。

    **单行注释：**

    ```jsx harmony
    <div>
      {/* 单行注释（在原生 JavaScript 中，单行注释用双斜杠（//）表示） */}
      {`Welcome ${user}, let's play React`}
    </div>
    ```

    **多行注释：**

    ```jsx harmony
    <div>
      {/* 多行注释超过
       一行 */}
      {`Welcome ${user}, let's play React`}
    </div>
    ```

40. ### 构造函数使用带 props 参数的目的是什么？

    在调用`super()`方法之前，子类构造函数不能使用`this`引用。这同样适用于ES6子类。将`props`参数传递给`super()`的主要原因是为了在子构造函数中访问`this.props`。

    **带 props 参数:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)

        console.log(this.props) // prints { name: 'John', age: 42 }
      }
    }
    ```

    **不带 props 参数:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super()

        console.log(this.props) // prints undefined

        // but props parameter is still available
        console.log(props) // prints { name: 'John', age: 42 }
      }

      render() {
        // no difference outside constructor
        console.log(this.props) // prints { name: 'John', age: 42 }
      }
    }
    ```

    上面的代码片段显示`this.props`仅在构造函数中有所不同。 它在构造函数之外是相同的。

41. ### 什么是调解？

    当组件的`props`或`state`发生更改时，React 通过将新返回的元素与先前呈现的元素进行比较来确定是否需要实际的 DOM 更新。当它们不相等时，React 将更新 DOM 。此过程称为*reconciliation*。

42. ### 如何使用动态属性名设置 state ？

    如果您使用 ES6 或 Babel 转换器来转换您的 JSX 代码，那么您可以使用*计算属性名称*来完成此操作。

    ```javascript
    handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
    }
    ```

43. ### 每次组件渲染时调用函数的常见错误是什么？

    您需要确保在将函数作为参数传递时未调用该函数。

    ```jsx harmony
    render() {
      // Wrong: handleClick is called instead of passed as a reference!
      return <button onClick={this.handleClick()}>{'Click Me'}</button>
    }
    ```

    相反地，传递函数本身应该没有括号：

    ```jsx harmony
    render() {
      // Correct: handleClick is passed as a reference!
      return <button onClick={this.handleClick}>{'Click Me'}</button>
    }
    ```

44. ### 为什么有组件名称要首字母大写？

    这是必要的，因为组件不是 DOM 元素，它们是构造函数。 此外，在 JSX 中，小写标记名称是指 HTML 元素，而不是组件。

45. ### 为什么 React 使用`className`而不是`class`属性？

    `class`是 JavaScript 中的关键字，而 JSX 是JavaScript的扩展。这就是为什么 React 使用`className`而不是`class`的主要原因。传递一个字符串作为`className`属性。

    ```jsx harmony
    render() {
      return <span className={'menu navigation-menu'}>{'Menu'}</span>
    }
    ```

46. ### 什么是 Fragments ？

    它是 React 中的常见模式，用于组件返回多个元素。*Fragments*可以让你聚合一个子元素列表，而无需向 DOM 添加额外节点。

    ```jsx harmony
    render() {
      return (
        <React.Fragment>
          <ChildA />
          <ChildB />
          <ChildC />
        </React.Fragment>
      )
    }
    ```

    以下是简介语法，但是在一些工具中还不支持：

    ```jsx harmony
    render() {
      return (
        <>
          <ChildA />
          <ChildB />
          <ChildC />
        </>
      )
    }
    ```
    
    > 译注：`React 16` 以前，`render` 函数的返回必须有一个根节点，否则报错。

47. ### 为什么使用 Fragments 比使用容器 div 更好？

    1. 通过不创建额外的 DOM 节点，Fragments 更快并且使用更少的内存。这在非常大而深的节点树时很有好处。
    2. 一些 CSS 机制如*Flexbox*和*CSS Grid*具有特殊的父子关系，如果在中间添加 div 将使得很难保持所需的结构。
    3. 在 DOM 审查器中不会那么的杂乱

48. ### 在 React 中什么是 Portal ？

    *Portal* 提供了一种很好的将子节点渲染到父组件以外的 DOM 节点的方式。

    ```javascript
    ReactDOM.createPortal(child, container)
    ```

    第一个参数是任何可渲染的 React 子节点，例如元素，字符串或片段。第二个参数是 DOM 元素。

49. ### 什么是无状态组件？

    如果行为独立于其状态，则它可以是无状态组件。您可以使用函数或类来创建无状态组件。但除非你需要在组件中使用生命周期钩子，否则你应该选择函数组件。无状态组件有很多好处： 它们易于编写，理解和测试，速度更快，而且您可以完全避免使用`this`关键字。

50. ### 什么是有状态组件？

    如果组件的行为依赖于组件的*state*，那么它可以被称为有状态组件。这些*有状态组件*总是*类组件*，并且具有在`constructor`中初始化的状态。

    ```javascript
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

      render() {
        // ...
      }
    }
    ```

51. ### How to apply validation on props in React?

    When the application is running in *development mode*, React will automatically check all props that we set on components to make sure they have *correct type*. If the type is incorrect, React will generate warning messages in the console. It's disabled in *production mode* due performance impact. The mandatory props are defined with `isRequired`.

    The set of predefined prop types:

    1. `PropTypes.number`
    2. `PropTypes.string`
    3. `PropTypes.array`
    4. `PropTypes.object`
    5. `PropTypes.func`
    6. `PropTypes.node`
    7. `PropTypes.element`
    8. `PropTypes.bool`
    9. `PropTypes.symbol`
    10. `PropTypes.any`

    We can define `propTypes` for `User` component as below:

    ```jsx harmony
    import React from 'react'
    import PropTypes from 'prop-types'

    class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }

      render() {
        return (
          <>
            <h1>{`Welcome, ${this.props.name}`}</h1>
            <h2>{`Age, ${this.props.age}`}</h2>
          </>
        )
      }
    }
    ```

    **Note:** In React v15.5 *PropTypes* were moved from `React.PropTypes` to `prop-types` library.

52. ### What are the advantages of React?

    1. Increases the application's performance with *Virtual DOM*.
    2. JSX makes code easy to read and write.
    3. It renders both on client and server side (*SSR*).
    4. Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
    5. Easy to write unit and integration tests with tools such as Jest.

53. ### What are the limitations of React?

    1. React is just a view library, not a full framework.
    2. There is a learning curve for beginners who are new to web development.
    3. Integrating React into a traditional MVC framework requires some additional configuration.
    4. The code complexity increases with inline templating and JSX.
    5. Too many smaller components leading to over engineering or boilerplate.

54. ### What are error boundaries in React v16?

    *Error boundaries* are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch(error, info)` or `static getDerivedStateFromError() `:

    ```jsx harmony
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props)
        this.state = { hasError: false }
      }

      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info)
      }

      static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>{'Something went wrong.'}</h1>
        }
        return this.props.children
      }
    }
    ```

    After that use it as a regular component:

    ```jsx harmony
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
    ```

55. ### How error boundaries handled in React v15?

    React v15 provided very basic support for *error boundaries* using `unstable_handleError` method. It has been renamed to `componentDidCatch` in React v16.

56. ### What are the recommended ways for static type checking?

    Normally we use *PropTypes library* (`React.PropTypes` moved to a `prop-types` package since React v15.5) for *type checking* in the React applications. For large code bases, it is recommended to use *static type checkers* such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.

57. ### What is the use of `react-dom` package?

    The `react-dom` package provides *DOM-specific methods* that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

    1. `render()`
    2. `hydrate()`
    3. `unmountComponentAtNode()`
    4. `findDOMNode()`
    5. `createPortal()`

58. ### What is the purpose of render method of `react-dom`?

    This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

    ```
    ReactDOM.render(element, container[, callback])
    ```

    If the optional callback is provided, it will be executed after the component is rendered or updated.

59. ### What is ReactDOMServer?

    The `ReactDOMServer` object enables you to render components to static markup (typically used on node server). This object is mainly used for *server-side rendering* (SSR). The following methods can be used in both the server and browser environments:

    1. `renderToString()`
    2. `renderToStaticMarkup()`

    For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call `renderToString` to render your root component to a string, which you then send as response.

    ```javascript
    // using Express
    import { renderToString } from 'react-dom/server'
    import MyPage from './MyPage'

    app.get('/', (req, res) => {
      res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>')
      res.write('<div id="content">')
      res.write(renderToString(<MyPage/>))
      res.write('</div></body></html>')
      res.end()
    })
    ```

60. ### How to use innerHTML in React?

    The `dangerouslySetInnerHTML` attribute is React's replacement for using `innerHTML` in the browser DOM. Just like `innerHTML`, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a `__html` object as key and HTML text as value.

    In this example MyComponent uses `dangerouslySetInnerHTML` attribute for setting HTML markup:

    ```jsx harmony
    function createMarkup() {
      return { __html: 'First &middot; Second' }
    }

    function MyComponent() {
      return <div dangerouslySetInnerHTML={createMarkup()} />
    }
    ```

61. ### How to use styles in React?

    The `style` attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

    ```jsx harmony
    const divStyle = {
      color: 'blue',
      backgroundImage: 'url(' + imgUrl + ')'
    };

    function HelloWorldComponent() {
      return <div style={divStyle}>Hello World!</div>
    }
    ```

    Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. `node.style.backgroundImage`).

62. ### How events are different in React?

    Handling events in React elements has some syntactic differences:

    1. React event handlers are named using camelCase, rather than lowercase.
    2. With JSX you pass a function as the event handler, rather than a string.

63. ### What will happen if you use `setState()` in constructor?

    When you use `setState()`, then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: *Can only update a mounted or mounting component.* So we need to use `this.state` to initialize variables inside constructor.

64. ### What is the impact of indexes as keys?

    Keys should be stable, predictable, and unique so that React can keep track of elements.

    In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.

    ```jsx harmony
    {todos.map((todo, index) =>
      <Todo
        {...todo}
        key={index}
      />
    )}
    ```

    If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

    ```jsx harmony
    {todos.map((todo) =>
      <Todo {...todo}
        key={todo.id} />
    )}
    ```

65. ### Is it good to use `setState()` in `componentWillMount()` method?

    It is recommended to avoid async initialization in `componentWillMount()` lifecycle method. `componentWillMount()` is invoked immediately before mounting occurs. It is called before `render()`, therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in `componentDidMount()` instead of `componentWillMount()`.

    ```jsx harmony
    componentDidMount() {
      axios.get(`api/todos`)
        .then((result) => {
          this.setState({
            messages: [...result.data]
          })
        })
    }
    ```

66. ### What will happen if you use props in initial state?

    If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.

    The below component won't display the updated input value:

    ```jsx harmony
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          records: [],
          inputValue: this.props.inputValue
        };
      }

      render() {
        return <div>{this.state.inputValue}</div>
      }
    }
    ```

    Using props inside render method will update the value:

    ```jsx harmony
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          record: []
        }
      }

      render() {
        return <div>{this.props.inputValue}</div>
      }
    }
    ```

67. ### How do you conditionally render components?

    In some cases you want to render different components depending on some state. JSX does not render `false` or `undefined`, so you can use conditional *short-circuiting* to render a given part of your component only if a certain condition is true.

    ```jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address &&
          <p>{address}</p>
        }
      </div>
    )
    ```

    If you need an `if-else` condition then use *ternary operator*.

    ```jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address
          ? <p>{address}</p>
          : <p>{'Address is not available'}</p>
        }
      </div>
    )
    ```

68. ### Why we need to be careful when spreading props on DOM elements?

    When we *spread props* we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with `...rest` operator, so it will add only required props. For example,

    ```jsx harmony
    const ComponentA = () =>
      <ComponentB isDisplay={true} className={'componentStyle'} />

    const ComponentB = ({ isDisplay, ...domProps }) =>
      <div {...domProps}>{'ComponentB'}</div>
    ```

69. ### How you use decorators in React?

    You can *decorate* your *class* components, which is the same as passing the component into a function. **Decorators** are flexible and readable way of modifying component functionality.

    ```jsx harmony
    @setTitle('Profile')
    class Profile extends React.Component {
        //....
    }

    /*
      title is a string that will be set as a document title
      WrappedComponent is what our decorator will receive when
      put directly above a component class as seen in the example above
    */
    const setTitle = (title) => (WrappedComponent) => {
      return class extends React.Component {
        componentDidMount() {
          document.title = title
        }

        render() {
          return <WrappedComponent {...this.props} />
        }
      }
    }
    ```

    **Note:** Decorators are a feature that didn't make it into ES7, but are currently a *stage 2 proposal*.

70. ### How do you memoize a component?

    There are memoize libraries available which can be used on function components. For example `moize` library can memoize the component in another component.

    ```jsx harmony
    import moize from 'moize'
    import Component from './components/Component' // this module exports a non-memoized component

    const MemoizedFoo = moize.react(Component)

    const Consumer = () => {
      <div>
        {'I will memoize the following entry:'}
        <MemoizedFoo/>
      </div>
    }
    ```

71. ### How you implement Server Side Rendering or SSR?

    React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.

    ```jsx harmony
    import ReactDOMServer from 'react-dom/server'
    import App from './App'

    ReactDOMServer.renderToString(<App />)
    ```

    This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.

72. ### How to enable production mode in React?

    You should use Webpack's `DefinePlugin` method to set `NODE_ENV` to `production`, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.

73. ### What is CRA and its benefits?

    The `create-react-app` CLI tool allows you to quickly create & run React applications with no configuration step.

    Let's create Todo App using *CRA*:

    ```console
    # Installation
    $ npm install -g create-react-app

    # Create new project
    $ create-react-app todo-app
    $ cd todo-app

    # Build, test and run
    $ npm run build
    $ npm run test
    $ npm start
    ```
    It includes everything we need to build a React app:

    1. React, JSX, ES6, and Flow syntax support.
    2. Language extras beyond ES6 like the object spread operator.
    3. Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
    4. A fast interactive unit test runner with built-in support for coverage reporting.
    5. A live development server that warns about common mistakes.
    6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

74. ### What is the lifecycle methods order in mounting?

    The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.

    1. `constructor()`
    2. `static getDerivedStateFromProps()`
    3. `render()`
    4. `componentDidMount()`

75. ### What are the lifecycle methods going to be deprecated in React v16?

    The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.

    1. `componentWillMount()`
    2. `componentWillReceiveProps()`
    3. `componentWillUpdate()`

    Starting with React v16.3 these methods are aliased with `UNSAFE_` prefix, and the unprefixed version will be removed in React v17.

76. ### What is the purpose of `getDerivedStateFromProps()` lifecycle method?

    The new static `getDerivedStateFromProps()` lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or `null` to indicate that the new props do not require any state updates.

    ```javascript
    class MyComponent extends React.Component {
      static getDerivedStateFromProps(props, state) {
        // ...
      }
    }
    ```

    This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillReceiveProps()`.

77. ### What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?

    The new `getSnapshotBeforeUpdate()` lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to `componentDidUpdate()`.

    ```javascript
    class MyComponent extends React.Component {
      getSnapshotBeforeUpdate(prevProps, prevState) {
        // ...
      }
    }
    ```

    This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillUpdate()`.

78. ### What is the difference between createElement() and cloneElement() methods?

    In JSX the React element is transpiled to `React.createElement()` which represents an UI element. Whereas `React.cloneElement()` is used in order to clone an element and pass it new props.

79. ### What is the recommended way for naming components?

    It is recommended to name the component by reference instead of using `displayName`.

    Using `displayName` for naming component:

    ```javascript
    export default React.createClass({
      displayName: 'TodoApp',
      // ...
    })
    ```

    The **recommended** approach:

    ```javascript
    export default class TodoApp extends React.Component {
      // ...
    }
    ```

80. ### What is the recommended ordering of methods in component class?

    *Recommended* ordering of methods from *mounting* to *render stage*:

    1. `static` methods
    2. `constructor()`
    3. `getChildContext()`
    4. `componentWillMount()`
    5. `componentDidMount()`
    6. `componentWillReceiveProps()`
    7. `shouldComponentUpdate()`
    8. `componentWillUpdate()`
    9. `componentDidUpdate()`
    10. `componentWillUnmount()`
    11. click handlers or event handlers like `onClickSubmit()` or `onChangeDescription()`
    12. getter methods for render like `getSelectReason()` or `getFooterContent()`
    13. optional render methods like `renderNavigation()` or `renderProfilePicture()`
    14. `render()`

81. ### What is a switching component?

    A *switching component* is a component that renders one of many components. We need to use object to map prop values to components.

    For example, a switching component to display different pages based on `page` prop:

    ```jsx harmony
    import HomePage from './HomePage'
    import AboutPage from './AboutPage'
    import ServicesPage from './ServicesPage'
    import ContactPage from './ContactPage'

    const PAGES = {
      home: HomePage,
      about: AboutPage,
      services: ServicesPage,
      contact: ContactPage
    }

    const Page = (props) => {
      const Handler = PAGES[props.page] || ContactPage

      return <Handler {...props} />
    }

    // The keys of the PAGES object can be used in the prop types to catch dev-time errors.
    Page.propTypes = {
      page: PropTypes.oneOf(Object.keys(PAGES)).isRequired
    }
    ```

82. ### Why we need to pass a function to setState()?

    The reason behind for this is that `setState()` is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after `setState()` is called. That means you should not rely on the current state when calling `setState()` since you can't be sure what that state will be. The solution is to pass a function to `setState()`, with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of `setState()`.

    Let's say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.

    ```javascript
    // assuming this.state.count === 0
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    // this.state.count === 1, not 3
    ```

    If we pass a function to `setState()`, the count gets incremented correctly.

    ```javascript
    this.setState((prevState, props) => ({
      count: prevState.count + props.increment
    }))
    // this.state.count === 3 as expected
    ```

83. ### What is strict mode in React?

    `React.StrictMode` is an useful component for highlighting potential problems in an application. Just like `<Fragment>`, `<StrictMode>` does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for *development mode* only.

    ```jsx harmony
    import React from 'react'

    function ExampleApplication() {
      return (
        <div>
          <Header />
          <React.StrictMode>
            <div>
              <ComponentOne />
              <ComponentTwo />
            </div>
          </React.StrictMode>
          <Footer />
        </div>
      )
    }
    ```

    In the example above, the *strict mode* checks apply to `<ComponentOne>` and `<ComponentTwo>` components only.

84. ### What are React Mixins?

    *Mixins* are a way to totally separate components to have a common functionality. Mixins are **should not be used** and can be replaced with *higher-order components* or *decorators*.

    One of the most commonly used mixins is `PureRenderMixin`. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:

    ```javascript
    const PureRenderMixin = require('react-addons-pure-render-mixin')

    const Button = React.createClass({
      mixins: [PureRenderMixin],
      // ...
    })
    ````
    <!-- TODO: mixins are deprecated -->

85. ### Why is `isMounted()` an anti-pattern and what is the proper solution?

    The primary use case for `isMounted()` is to avoid calling `setState()` after a component has been unmounted, because it will emit a warning.

    ```javascript
    if (this.isMounted()) {
      this.setState({...})
    }
    ```

    Checking `isMounted()` before calling `setState()` does eliminate the warning, but it also defeats the purpose of the warning. Using `isMounted()` is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.

    An optimal solution would be to find places where `setState()` might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in `componentWillUnmount()`, prior to unmounting.

86. ### What are the Pointer Events supported in React?

    *Pointer Events* provide a unified way of handling all input events. In the olden days we have a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the *Pointer Events* specification.

    The following event types are now available in *React DOM*:

    1. `onPointerDown`
    2. `onPointerMove`
    3. `onPointerUp`
    4. `onPointerCancel`
    5. `onGotPointerCapture`
    6. `onLostPointerCaptur`
    7. `onPointerEnter`
    8. `onPointerLeave`
    9. `onPointerOver`
    10. `onPointerOut`

87. ### Why should component names start with capital letter?

    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

    You can define component class which name starts with lowercase letter, but when it's imported it should have capital letter. Here lowercase is fine:

    ```jsx harmony
    class myComponent extends Component {
      render() {
        return <div />
      }
    }

    export default myComponent
    ```

    While when imported in another file it should start with capital letter:

    ```jsx harmony
    import MyComponent from './MyComponent'
    ```

88. ### Are custom DOM attributes supported in React v16?

    Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn't recognize, React would just skip it. For example, this:

    ```jsx harmony
    <div mycustomattribute={'something'} />
    ```

    Would render an empty div to the DOM with React v15:

    ```html
    <div />
    ```

    In React v16 any unknown attributes will end up in the DOM:

    ```html
    <div mycustomattribute='something' />
    ```

    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.

89. ### What is the difference between constructor and getInitialState?

    You should initialize state in the constructor when using ES6 classes, and `getInitialState()` method when using `React.createClass()`.

    Using ES6 classes:

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
        this.state = { /* initial state */ }
      }
    }
    ```

    Using `React.createClass()`:

    ```javascript
    const MyComponent = React.createClass({
      getInitialState() {
        return { /* initial state */ }
      }
    })
    ```

    **Note:** `React.createClass()` is deprecated and removed in React v16. Use plain JavaScript classes instead.

90. ### Can you force a component to re-render without calling setState?

    By default, when your component's state or props change, your component will re-render. If your `render()` method depends on some other data, you can tell React that the component needs re-rendering by calling `forceUpdate()`.

    ```javascript
    component.forceUpdate(callback)
    ```

    It is recommended to avoid all uses of `forceUpdate()` and only read from `this.props` and `this.state` in `render()`.

91. ### What is the difference between `super()` and `super(props)` in React using ES6 classes?

    When you want to access `this.props` in `constructor()` then you should pass props to `super()` method.

    Using `super(props)`:

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
        console.log(this.props) // { name: 'John', ... }
      }
    }
    ```

    Using `super()`:

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super()
        console.log(this.props) // undefined
      }
    }
    ```

    Outside `constructor()` both will display same value for `this.props`.

92. ### How to loop inside JSX?

    You can simply use `Array.prototype.map` with ES6 *arrow function* syntax. For example, the `items` array of objects is mapped into an array of components:

    ```jsx harmony
    <tbody>
      {items.map(item => <SomeComponent key={item.id} name={item.name} />)}
    </tbody>
    ```

    You can't iterate using `for` loop:

    ```jsx harmony
    <tbody>
      for (let i = 0; i < items.length; i++) {
        <SomeComponent key={items[i].id} name={items[i].name} />
      }
    </tbody>
    ```

    This is because JSX tags are transpiled into *function calls*, and you can't use statements inside expressions. This may change thanks to `do` expressions which are *stage 1 proposal*.

93. ### How do you access props in attribute quotes?

    React (or JSX) doesn't support variable interpolation inside an attribute value. The below representation won't work:

    ```jsx harmony
    <img className='image' src='images/{this.props.image}' />
    ```

    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:

    ```jsx harmony
    <img className='image' src={'images/' + this.props.image} />
    ```

    Using *template strings* will also work:

    ```jsx harmony
    <img className='image' src={`images/${this.props.image}`} />
    ```

94. ### What is React proptype array with shape?

    If you want to pass an array of objects to a component with a particular shape then use `React.PropTypes.shape()` as an argument to `React.PropTypes.arrayOf()`.

    ```javascript
    ReactComponent.propTypes = {
      arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({
        color: React.PropTypes.string.isRequired,
        fontSize: React.PropTypes.number.isRequired
      })).isRequired
    }
    ```

95. ### How conditionally apply class attributes?

    You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

    ```jsx harmony
    <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
    ```

    Instead you need to move curly braces outside (don't forget to include spaces between class names):

    ```jsx harmony
    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
    ```

    *Template strings* will also work:

    ```jsx harmony
    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>
    ```

96. ### What is the difference between React and ReactDOM?

    The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server` we have *server-side rendering* support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

97. ### Why ReactDOM is separated from React?

    The React team worked on extracting all DOM-related features into a separate library called *ReactDOM*. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM. To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of React and React Native.

98. ### How to use React label element?

    If you try to render a `<label>` element bound to a text input using the standard `for` attribute, then it produces HTML missing that attribute and prints a warning to the console.

    ```jsx harmony
    <label for={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
    ```

    Since `for` is a reserved keyword in JavaScript, use `htmlFor` instead.

    ```jsx harmony
    <label htmlFor={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
    ```

99. ### How to combine multiple inline style objects?

    You can use *spread operator* in regular React:

    ```jsx harmony
     <button style={{...styles.panel.button, ...styles.panel.submitButton}}>{'Submit'}</button>
    ```

    If you're using React Native then you can use the array notation:

    ```jsx harmony
    <button style={[styles.panel.button, styles.panel.submitButton]}>{'Submit'}</button>
    ```

100. ### How to re-render the view when the browser is resized?

     You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

     ```javascript
     class WindowDimensions extends React.Component {
       componentWillMount() {
         this.updateDimensions()
       }

       componentDidMount() {
         window.addEventListener('resize', this.updateDimensions)
       }

       componentWillUnmount() {
         window.removeEventListener('resize', this.updateDimensions)
       }

       updateDimensions() {
         this.setState({width: $(window).width(), height: $(window).height()})
       }

       render() {
         return <span>{this.state.width} x {this.state.height}</span>
       }
     }
     ```

101. ### What is the difference between `setState()` and `replaceState()` methods?

     When you use `setState()` the current and previous states are merged. `replaceState()` throws out the current state, and replaces it with only what you provide. Usually `setState()` is used unless you really need to remove all previous keys for some reason. You can also set state to `false`/`null` in `setState()` instead of using `replaceState()`.

102. ### How to listen to state changes?

     The following lifecycle methods will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.

     ```
     componentWillUpdate(object nextProps, object nextState)
     componentDidUpdate(object prevProps, object prevState)
     ```

103. ### What is the recommended approach of removing an array element in React state?

     The better approach is to use `Array.prototype.filter()` method.

     For example, let's create a `removeItem()` method for updating the state.

     ```javascript
     removeItem(index) {
       this.setState({
         data: this.state.data.filter((item, i) => i !== index)
       })
     }
     ```

104. ### Is it possible to use React without rendering HTML?

     It is possible with latest version (>=16.2). Below are the possible options:

     ```jsx harmony
     render() {
       return false
     }
     ```

     ```jsx harmony
     render() {
       return null
     }
     ```

     ```jsx harmony
     render() {
       return []
     }
     ```

     ```jsx harmony
     render() {
       return <React.Fragment></React.Fragment>
     }
     ```

     ```jsx harmony
     render() {
       return <></>
     }
     ```

     Returning `undefined` won't work.

105. ### How to pretty print JSON with React?

     We can use `<pre>` tag so that the formatting of the `JSON.stringify()` is retained:

     ```jsx harmony
     const data = { name: 'John', age: 42 }

     class User extends React.Component {
       render() {
         return (
           <pre>
             {JSON.stringify(data, null, 2)}
           </pre>
         )
       }
     }

     React.render(<User />, document.getElementById('container'))
     ```

106. ### Why you can't update props in React?

     The React philosophy is that props should be *immutable* and *top-down*. This means that a parent can send any prop values to a child, but the child can't modify received props.

107. ### How to focus an input element on page load?

     You can do it by creating *ref* for `input` element and using it in `componentDidMount()`:

     ```jsx harmony
     class App extends React.Component{
       componentDidMount() {
         this.nameInput.focus()
       }

       render() {
         return (
           <div>
             <input
               defaultValue={'Won\'t focus'}
             />
             <input
               ref={(input) => this.nameInput = input}
               defaultValue={'Will focus'}
             />
           </div>
         )
       }
     }

     ReactDOM.render(<App />, document.getElementById('app'))
     ```

108. ### What are the possible ways of updating objects in state?

     1. **Calling `setState()` with an object to merge with state:**

         * Using `Object.assign()` to create a copy of the object:

             ```javascript
             const user = Object.assign({}, this.state.user, { age: 42 })
             this.setState({ user })
             ```

         * Using *spread operator*:

             ```javascript
             const user = { ...this.state.user, age: 42 }
             this.setState({ user })
             ```

     2. **Calling `setState()` with a function:**

         ```javascript
         this.setState(prevState => ({
           user: {
             ...prevState.user,
             age: 42
           }
         }))
         ```

109. ### Why function is preferred over object for `setState()`?

     React may batch multiple `setState()` calls into a single update for performance. Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

     This counter example will fail to update as expected:

     ```javascript
     // Wrong
     this.setState({
       counter: this.state.counter + this.props.increment,
     })
     ```

     The preferred approach is to call `setState()` with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

     ```javascript
     // Correct
     this.setState((prevState, props) => ({
       counter: prevState.counter + props.increment
     }))
     ```

110. ### How can we find the version of React at runtime in the browser?

     You can use `React.version` to get the version.

     ```jsx harmony
     const REACT_VERSION = React.version

     ReactDOM.render(
       <div>{`React version: ${REACT_VERSION}`}</div>,
       document.getElementById('app')
     )
     ```

111. ### What are the approaches to include polyfills in your `create-react-app`?

     1. **Manual import from `core-js`:**

         Create a file called (something like) `polyfills.js` and import it into root `index.js` file. Run `npm install core-js` or `yarn add core-js` and import your specific required features.

         ```javascript
         import 'core-js/fn/array/find'
         import 'core-js/fn/array/includes'
         import 'core-js/fn/number/is-nan'
         ```

     2. **Using Polyfill service:**

         Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to `index.html`:

         ```html
         <script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes'></script>
         ```

         In the above script we had to explicitly request the `Array.prototype.includes` feature as it is not included in the default feature set.

112. ### How to use https instead of http in create-react-app?

     You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

     ```json
     "scripts": {
       "start": "set HTTPS=true && react-scripts start"
     }
     ```

     or just run `set HTTPS=true && npm start`

113. ### How to avoid using relative path imports in create-react-app?

     Create a file called `.env` in the project root and write the import path:

     ```
     NODE_PATH=src/app
     ```

     After that restart the development server. Now you should be able to import anything inside `src/app` without relative paths.

114. ### How to add Google Analytics for React Router?

     Add a listener on the `history` object to record each page view:

     ```javascript
     history.listen(function (location) {
       window.ga('set', 'page', location.pathname + location.search)
       window.ga('send', 'pageview', location.pathname + location.search)
     })
     ```

115. ### How to update a component every second?

     You need to use `setInterval()` to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

     ```javascript
     componentDidMount() {
       this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
     }

     componentWillUnmount() {
       clearInterval(this.interval)
     }
     ```

116. ### How do you apply vendor prefixes to inline styles in React?

     React *does not* apply *vendor prefixes* automatically. You need to add vendor prefixes manually.

     ```jsx harmony
     <div style={{
       transform: 'rotate(90deg)',
       WebkitTransform: 'rotate(90deg)', // note the capital 'W' here
       msTransform: 'rotate(90deg)' // 'ms' is the only lowercase vendor prefix
     }} />
     ```

117. ### How to import and export components using React and ES6?

     You should use default for exporting the components

     ```jsx harmony
     import React from 'react'
     import User from 'user'

     export default class MyProfile extends React.Component {
       render(){
         return (
           <User type="customer">
             //...
           </User>
         )
       }
     }
     ```

     With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.

118. ### Why React component names must begin with a capital letter?

     In JSX, lowercase tag names are considered to be HTML tags. However, capitalized and lowercase tag names with a dot (property accessors) aren't.

     1. `<component />` compiles to `React.createElement('component')` (i.e, HTML tag)
     2. `<obj.component />` compiles to `React.createElement(obj.component)`
     3. `<Component />` compiles to `React.createElement(Component)`

119. ### Why is a component constructor called only once?

     React's *reconciliation* algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one.

120. ### How to define constants in React?

     You can use ES7 `static` field to define constant.

     ```javascript
     class MyComponent extends React.Component {
       static DEFAULT_PAGINATION = 10
     }
     ```

     *Static fields* are part of the *Class Fields* stage 3 proposal.

121. ### How to programmatically trigger click event in React?

     You could use the ref prop to acquire a reference to the underlying `HTMLInputElement` object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the `HTMLElement.click` method. This can be done in two steps:

     1. Create ref in render method:

         ```jsx harmony
         <input ref={input => this.inputElement = input} />
         ```

     2. Apply click event in your event handler:

         ```javascript
         this.inputElement.click()
         ```

122. ### Is it possible to use async/await in plain React?

     If you want to use `async`/`await` in React, you will need *Babel* and [transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator) plugin. React Native ships with Babel and a set of transforms.

123. ### What are the common folder structures for React?

     There are two common practices for React project file structure.

     1. **Grouping by features or routes:**

         One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

         ```
         common/
         ├─ Avatar.js
         ├─ Avatar.css
         ├─ APIUtils.js
         └─ APIUtils.test.js
         feed/
         ├─ index.js
         ├─ Feed.js
         ├─ Feed.css
         ├─ FeedStory.js
         ├─ FeedStory.test.js
         └─ FeedAPI.js
         profile/
         ├─ index.js
         ├─ Profile.js
         ├─ ProfileHeader.js
         ├─ ProfileHeader.css
         └─ ProfileAPI.js
         ```

     2. **Grouping by file type:**

         Another popular way to structure projects is to group similar files together.

         ```
         api/
         ├─ APIUtils.js
         ├─ APIUtils.test.js
         ├─ ProfileAPI.js
         └─ UserAPI.js
         components/
         ├─ Avatar.js
         ├─ Avatar.css
         ├─ Feed.js
         ├─ Feed.css
         ├─ FeedStory.js
         ├─ FeedStory.test.js
         ├─ Profile.js
         ├─ ProfileHeader.js
         └─ ProfileHeader.css
         ```

124. ### What are the popular packages for animation?

     *React Transition Group* and *React Motion* are popular animation packages in React ecosystem.

125. ### What is the benefit of styles modules?

     It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

     For example, these styles could be extracted into a separate component:

     ```javascript
     export const colors = {
       white,
       black,
       blue
     }

     export const space = [
       0,
       8,
       16,
       32,
       64
     ]
     ```

     And then imported individually in other components:

     ```javascript
     import { space, colors } from './styles'
     ```

126. ### What are the popular React-specific linters?

     ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called `eslint-plugin-react`. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types. Another popular plugin is `eslint-plugin-jsx-a11y`, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with `alt` text and `tabindex`, for example, will not be picked up by regular plugins.

127. ### How to make AJAX call and in which component lifecycle methods should I make an AJAX call?

     You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in `fetch`. You should fetch data in the `componentDidMount()` lifecycle method. This is so you can use `setState()` to update your component when the data is retrieved.

     For example, the employees list fetched from API and set local state:

     ```jsx harmony
     class MyComponent extends React.Component {
       constructor(props) {
         super(props)
         this.state = {
           employees: [],
           error: null
         }
       }

       componentDidMount() {
         fetch('https://api.example.com/items')
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 employees: result.employees
               })
             },
             (error) => {
               this.setState({ error })
             }
           )
       }

       render() {
         const { error, employees } = this.state
         if (error) {
           return <div>Error: {error.message}</div>;
         } else {
           return (
             <ul>
               {employees.map(item => (
                 <li key={employee.name}>
                   {employee.name}-{employees.experience}
                 </li>
               ))}
             </ul>
           )
         }
       }
     }
     ```

128. ### What are render props?

     **Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

     ```jsx harmony
     <DataProvider render={data => (
       <h1>{`Hello ${data.target}`}</h1>
     )}/>
     ```

     Libraries such as React Router and DownShift are using this pattern.

## React Router

129. ### What is React Router?

     React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

130. ### How React Router is different from history library?

     React Router is a wrapper around the `history` library which handles interaction with the browser's `window.history` with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node.

131. ### What are the `<Router>` components of React Router v4?

     React Router v4 provides below 3 `<Router>` components:

     1. `<BrowserRouter>`
     2. `<HashRouter>`
     3. `<MemoryRouter>`

     The above components will create *browser*, *hash*, and *memory* history instances. React Router v4 makes the properties and methods of the `history` instance associated with your router available through the context in the `router` object.

132. ### What is the purpose of `push()` and `replace()` methods of `history`?

     A history instance has two methods for navigation purpose.

     1. `push()`
     2. `replace()`

     If you think of the history as an array of visited locations, `push()` will add a new location to the array and `replace()` will replace the current location in the array with the new one.

133. ### How do you programmatically navigate using React Router v4?

     There are three different ways to achieve programmatic routing/navigation within components.

     1. **Using the `withRouter()` higher-order function:**

         The `withRouter()` higher-order function will inject the history object as a prop of the component. This object provides `push()` and `replace()` methods to avoid the usage of context.

         ```jsx harmony
         import { withRouter } from 'react-router-dom' // this also works with 'react-router-native'

         const Button = withRouter(({ history }) => (
           <button
             type='button'
             onClick={() => { history.push('/new-location') }}
           >
             {'Click Me!'}
           </button>
         ))
         ```

     2. **Using `<Route>` component and render props pattern:**

         The `<Route>` component passes the same props as `withRouter()`, so you will be able to access the history methods through the history prop.

         ```jsx harmony
         import { Route } from 'react-router-dom'

         const Button = () => (
           <Route render={({ history }) => (
             <button
               type='button'
               onClick={() => { history.push('/new-location') }}
             >
               {'Click Me!'}
             </button>
           )} />
         )
         ```

     3. **Using context:**

         This option is not recommended and treated as unstable API.

         ```jsx harmony
         const Button = (props, context) => (
           <button
             type='button'
             onClick={() => {
               context.history.push('/new-location')
             }}
           >
             {'Click Me!'}
           </button>
         )

         Button.contextTypes = {
           history: React.PropTypes.shape({
             push: React.PropTypes.func.isRequired
           })
         }
         ```

134. ### How to get query parameters in React Router v4?

     The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

     ```javascript
     const queryString = require('query-string');
     const parsed = queryString.parse(props.location.search);
     ```

     You can also use `URLSearchParams` if you want something native:

     ```javascript
     const params = new URLSearchParams(props.location.search)
     const foo = params.get('name')
     ```

     You should use a *polyfill* for IE11.

135. ### Why you get "Router may have only one child element" warning?

     You have to wrap your Route's in a `<Switch>` block because `<Switch>` is unique in that it renders a route exclusively.

     At first you need to add `Switch` to your imports:

     ```javascript
     import { Switch, Router, Route } from 'react-router'
     ```

     Then define the routes within `<Switch>` block:

     ```jsx harmony
     <Router>
       <Switch>
         <Route {/* ... */} />
         <Route {/* ... */} />
       </Switch>
     </Router>
     ```

136. ### How to pass params to `history.push` method in React Router v4?

     While navigating you can pass props to the `history` object:

     ```javascript
     this.props.history.push({
       pathname: '/template',
       search: '?name=sudheer',
       state: { detail: response.data }
     })
     ```

     The `search` property is used to pass query params in `push()` method.

137. ### How to implement *default* or *NotFound* page?

     A `<Switch>` renders the first child `<Route>` that matches. A `<Route>` with no path always matches. So you just need to simply drop path attribute as below

     ```jsx harmony
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/user" component={User}/>
       <Route component={NotFound} />
     </Switch>
     ```

138. ### How to get history on React Router v4?

     1. Create a module that exports a `history` object and import this module across the project.

         For example, create `history.js` file:

         ```javascript
         import { createBrowserHistory } from 'history'

         export default createBrowserHistory({
           /* pass a configuration object here if needed */
         })
         ```

     2. You should use the `<Router>` component instead of built-in routers. Imported the above `history.js` inside `index.js` file:

         ```jsx harmony
         import { Router } from 'react-router-dom'
         import history from './history'
         import App from './App'

         ReactDOM.render((
           <Router history={history}>
             <App />
           </Router>
         ), holder)
         ```

     3. You can also use push method of `history` object similar to built-in history object:

         ```javascript
         // some-other-file.js
         import history from './history'

         history.push('/go-here')
         ```

139. ### How to perform automatic redirect after login?

     The `react-router` package provides `<Redirect>` component in React Router. Rendering a `<Redirect>` will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

     ```javascript
     import React, { Component } from 'react'
     import { Redirect } from 'react-router'

     export default class LoginComponent extends Component {
       render() {
         if (this.state.isLoggedIn === true) {
           return <Redirect to="/your/redirect/page" />
         } else {
           return <div>{'Login Please'}</div>
         }
       }
     }
     ```

## React Internationalization

140. ### What is React Intl?

     The *React Intl* library makes internalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of *FormatJS* which provides bindings to React via its components and API.

141. ### What are the main features of React Intl?

     1. Display numbers with separators.
     2. Display dates and times correctly.
     3. Display dates relative to "now".
     4. Pluralize labels in strings.
     5. Support for 150+ languages.
     6. Runs in the browser and Node.
     7. Built on standards.

142. ### What are the two ways of formatting in React Intl?

     The library provides two ways to format strings, numbers, and dates: react components or an API.

     ```jsx harmony
     <FormattedMessage
       id={'account'}
       defaultMessage={'The amount is less than minimum balance.'}
     />
     ```

     ```javascript
     const messages = defineMessages({
       accountMessage: {
         id: 'account',
         defaultMessage: 'The amount is less than minimum balance.',
       }
     })

     formatMessage(messages.accountMessage)
     ```

143. ### How to use `<FormattedMessage>` as placeholder using React Intl?

     The `<Formatted... />` components from `react-intl` return elements, not plain text, so they can't be used for placeholders, alt text, etc. In that case, you should use lower level API `formatMessage()`. You can inject the `intl` object into your component using `injectIntl()` higher-order component and then format the message using `formatMessage()` available on that object.

     ```jsx harmony
     import React from 'react'
     import { injectIntl, intlShape } from 'react-intl'

     const MyComponent = ({ intl }) => {
       const placeholder = intl.formatMessage({id: 'messageId'})
       return <input placeholder={placeholder} />
     }

     MyComponent.propTypes = {
       intl: intlShape.isRequired
     }

     export default injectIntl(MyComponent)
     ```

144. ### How to access current locale with React Intl?

     You can get the current locale in any component of your application using `injectIntl()`:

     ```jsx harmony
     import { injectIntl, intlShape } from 'react-intl'

     const MyComponent = ({ intl }) => (
       <div>{`The current locale is ${intl.locale}`}</div>
     )

     MyComponent.propTypes = {
       intl: intlShape.isRequired
     }

     export default injectIntl(MyComponent)
     ```

145. ### How to format date using React Intl?

     The `injectIntl()` higher-order component will give you access to the `formatDate()` method via the props in your component. The method is used internally by instances of `FormattedDate` and it returns the string representation of the formatted date.

     ```jsx harmony
     import { injectIntl, intlShape } from 'react-intl'

     const stringDate = this.props.intl.formatDate(date, {
       year: 'numeric',
       month: 'numeric',
       day: 'numeric'
     })

     const MyComponent = ({intl}) => (
       <div>{`The formatted date is ${stringDate}`}</div>
     )

     MyComponent.propTypes = {
       intl: intlShape.isRequired
     }

     export default injectIntl(MyComponent)
     ```

## React Testing

146. ### What is Shallow Renderer in React testing?

     *Shallow rendering* is useful for writing unit test cases in React. It lets you render a component *one level deep* and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.

     For example, if you have the following component:

     ```javascript
     function MyComponent() {
       return (
         <div>
           <span className={'heading'}>{'Title'}</span>
           <span className={'description'}>{'Description'}</span>
         </div>
       )
     }
     ```

     Then you can assert as follows:

     ```jsx harmony
     import ShallowRenderer from 'react-test-renderer/shallow'

     // in your test
     const renderer = new ShallowRenderer()
     renderer.render(<MyComponent />)

     const result = renderer.getRenderOutput()

     expect(result.type).toBe('div')
     expect(result.props.children).toEqual([
       <span className={'heading'}>{'Title'}</span>,
       <span className={'description'}>{'Description'}</span>
     ])
     ```

147. ### What is `TestRenderer` package in React?

     This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or `jsdom`.

     ```jsx harmony
     import TestRenderer from 'react-test-renderer'

     const Link = ({page, children}) => <a href={page}>{children}</a>

     const testRenderer = TestRenderer.create(
       <Link page={'https://www.facebook.com/'}>{'Facebook'}</Link>
     )

     console.log(testRenderer.toJSON())
     // {
     //   type: 'a',
     //   props: { href: 'https://www.facebook.com/' },
     //   children: [ 'Facebook' ]
     // }
     ```

148. ### What is the purpose of ReactTestUtils package?

     *ReactTestUtils* are provided in the `with-addons` package and allow you to perform actions against a simulated DOM for the purpose of unit testing.

149. ### What is Jest?

     *Jest* is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a `jsdom` environment. It's often used for testing components.

150. ### What are the advantages of Jest over Jasmine?

     There are couple of advantages compared to Jasmine:

     - Automatically finds tests to execute in your source code.
     - Automatically mocks dependencies when running your tests.
     - Allows you to test asynchronous code synchronously.
     - Runs your tests with a fake DOM implementation (via `jsdom`) so that your tests can be run on the command line.
     - Runs tests in parallel processes so that they finish sooner.

151. ### Give a simple example of Jest test case

     Let's write a test for a function that adds two numbers in `sum.js` file:

     ```javascript
     const sum = (a, b) => a + b

     export default sum
     ```

     Create a file named `sum.test.js` which contains actual test:

     ```javascript
     import sum from './sum'

     test('adds 1 + 2 to equal 3', () => {
       expect(sum(1, 2)).toBe(3)
     })
     ```

     And then add the following section to your `package.json`:

     ```json
     {
       "scripts": {
         "test": "jest"
       }
     }
     ```

     Finally, run `yarn test` or `npm test` and Jest will print a result:

     ```console
     $ yarn test
     PASS ./sum.test.js
     ✓ adds 1 + 2 to equal 3 (2ms)
     ```

## React Redux

152. ### What is flux?

     *Flux* is an *application design paradigm* used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.

     The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

     ![flux](images/flux.png)

153. ### What is Redux?

     *Redux* is a predictable state container for JavaScript apps based on the *Flux design pattern*. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.

154. ### What are the core principles of Redux?

     Redux follows three fundamental principles:

     1. **Single source of truth:** The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
     2. **State is read-only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
     3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

155. ### What are the downsides of Redux compared to Flux?

     Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:

     1. **You will need to learn to avoid mutations:** Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like `redux-immutable-state-invariant`, Immutable.js, or instructing your team to write non-mutating code.
     2. **You're going to have to carefully pick your packages:** While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.
     3. **There is no nice Flow integration yet:** Flux currently lets you do very impressive static type checks which Redux doesn't support yet.

156. ### What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?

     `mapStateToProps()` is a utility which helps your component get updated state (which is updated by some other components):

     ```javascript
     const mapStateToProps = (state) => {
       return {
         todos: getVisibleTodos(state.todos, state.visibilityFilter)
       }
     }
     ```

     `mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

     ```javascript
     const mapDispatchToProps = (dispatch) => {
       return {
         onTodoClick: (id) => {
           dispatch(toggleTodo(id))
         }
       }
     }
     ```

157. ### Can I dispatch an action in reducer?

     Dispatching an action within a reducer is an **anti-pattern**. Your reducer should be *without side effects*, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

158. ### How to access Redux store outside a component?

     Yes. You just need to export the store from the module where it created with `createStore()`. Also, it shouldn't pollute the global window object.

     ```javascript
     store = createStore(myReducer)

     export default store
     ```

159. ### What are the drawbacks of MVW pattern?

     1. The DOM manipulation is very expensive which causes applications behaves slowly and inefficient.
     3. Due to circular dependencies, a complicated model was created around models and views.
     3. Lot of data changes happens for collaborative applications(like Google Docs).
     4. No way to do undo (travel back in time) easily without adding so much extra code.

160. ### Are there any similarities between Redux and RxJS?

     These libraries are very different for very different purposes, but there are some vague similarities.

     Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.

161. ### How to dispatch an action on load?

     You can dispatch an action in `componentDidMount()` method and in `render()` method you can verify the data.

     ```javascript
     class App extends Component {
       componentDidMount() {
         this.props.fetchData()
       }

       render() {
         return this.props.isLoaded
           ? <div>{'Loaded'}</div>
           : <div>{'Not Loaded'}</div>
       }
     }

     const mapStateToProps = (state) => ({
       isLoaded: state.isLoaded
     })

     const mapDispatchToProps = { fetchData }

     export default connect(mapStateToProps, mapDispatchToProps)(App)
     ```

162. ### How to use `connect()` from React Redux?

     You need to follow two steps to use your store in your container:

     1. **Use `mapStateToProps()`:** It maps the state variables from your store to the props that you specify.
     2. **Connect the above props to your container:** The object returned by the `mapStateToProps` function is connected to the container. You can import `connect()` from `react-redux`.

         ```jsx harmony
         import React from 'react'
         import { connect } from 'react-redux'

         class App extends React.Component {
           render() {
             return <div>{this.props.containerData}</div>
           }
         }

         function mapStateToProps(state) {
           return { containerData: state.data }
         }

         export default connect(mapStateToProps)(App)
         ```

163. ### How to reset state in Redux?

     You need to write a *root reducer* in your application which delegate handling the action to the reducer generated by `combineReducers()`.

     For example, let us take `rootReducer()` to return the initial state after `USER_LOGOUT` action. As we know, reducers are supposed to return the initial state when they are called with `undefined` as the first argument, no matter the action.

     ```javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     })

     const rootReducer = (state, action) => {
       if (action.type === 'USER_LOGOUT') {
         state = undefined
       }

       return appReducer(state, action)
     }
     ```

     In case of using `redux-persist`, you may also need to clean your storage. `redux-persist` keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.

     ```javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     })

     const rootReducer = (state, action) => {
       if (action.type === 'USER_LOGOUT') {
         Object.keys(state).forEach(key => {
           storage.removeItem(`persist:${key}`)
         })

         state = undefined
       }

       return appReducer(state, action)
     }
     ```

164. ### Whats the purpose of `at` symbol in the Redux connect decorator?

     The **@** symbol is in fact a JavaScript expression used to signify decorators. *Decorators* make it possible to annotate and modify classes and properties at design time.

     Let's take an example setting up Redux without and with a decorator.

     * **Without decorator:**

         ```javascript
         import React from 'react'
         import * as actionCreators from './actionCreators'
         import { bindActionCreators } from 'redux'
         import { connect } from 'react-redux'

         function mapStateToProps(state) {
           return { todos: state.todos }
         }

         function mapDispatchToProps(dispatch) {
           return { actions: bindActionCreators(actionCreators, dispatch) }
         }

         class MyApp extends React.Component {
           // ...define your main app here
         }

         export default connect(mapStateToProps, mapDispatchToProps)(MyApp)
         ```

     * **With decorator:**

         ```javascript
         import React from 'react'
         import * as actionCreators from './actionCreators'
         import { bindActionCreators } from 'redux'
         import { connect } from 'react-redux'

         function mapStateToProps(state) {
           return { todos: state.todos }
         }

         function mapDispatchToProps(dispatch) {
           return { actions: bindActionCreators(actionCreators, dispatch) }
         }

         @connect(mapStateToProps, mapDispatchToProps)
         export default class MyApp extends React.Component {
           // ...define your main app here
         }
         ```

     The above examples are almost similar except the usage of decorator. The decorator syntax isn't built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.

165. ### What is the difference between React context and React Redux?

     You can use **Context** in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for. Whereas **Redux** is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.

166. ### Why are Redux state functions called reducers?

     Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could *reduce* a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.

167. ### How to make AJAX request in Redux?

     You can use `redux-thunk` middleware which allows you to define async actions.

     Let's take an example of fetching specific account as an AJAX call using *fetch API*:

     ```javascript
     export function fetchAccount(id) {
       return dispatch => {
         dispatch(setLoadingAccountState()) // Show a loading spinner
         fetch(`/account/${id}`, (response) => {
           dispatch(doneFetchingAccount()) // Hide loading spinner
           if (response.status === 200) {
             dispatch(setAccount(response.json)) // Use a normal function to set the received state
           } else {
             dispatch(someError)
           }
         })
       }
     }

     function setAccount(data) {
      return { type: 'SET_Account', data: data }
     }
     ```

168. ### Should I keep all component's state in Redux store?

      Keep your data in the Redux store, and the UI related state internally in the component.

169. ### What is the proper way to access Redux store?

     The best way to access your store in a component is to use the `connect()` function, that creates a new component that wraps around your existing one. This pattern is called *Higher-Order Components*, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

     Let's take an example of `<FilterLink>` component using connect:

     ```javascript
     import { connect } from 'react-redux'
     import { setVisibilityFilter } from '../actions'
     import Link from '../components/Link'

     const mapStateToProps = (state, ownProps) => ({
       active: ownProps.filter === state.visibilityFilter
     })

     const mapDispatchToProps = (dispatch, ownProps) => ({
       onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
     })

     const FilterLink = connect(
       mapStateToProps,
       mapDispatchToProps
     )(Link)

     export default FilterLink
     ```

     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using `connect()` over accessing the store directly (using context API).

     ```javascript
     class MyComponent {
       someMethod() {
         doSomethingWith(this.context.store)
       }
     }
     ```

170. ### What is the difference between component and container in React Redux?

     **Component** is a class or function component that describes the presentational part of your application.

     **Container** is an informal term for a component that is connected to a Redux store. Containers *subscribe* to Redux state updates and *dispatch* actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.

171. ### What is the purpose of the constants in Redux?

     Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a `ReferenceError` immediately.

     Normally we will save them in a single file (`constants.js` or `actionTypes.js`).

     ```javascript
     export const ADD_TODO = 'ADD_TODO'
     export const DELETE_TODO = 'DELETE_TODO'
     export const EDIT_TODO = 'EDIT_TODO'
     export const COMPLETE_TODO = 'COMPLETE_TODO'
     export const COMPLETE_ALL = 'COMPLETE_ALL'
     export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
     ```

     In Redux you use them in two places:

     1. **During action creation:**

         Let's take `actions.js`:

         ```javascript
         import { ADD_TODO } from './actionTypes';

         export function addTodo(text) {
           return { type: ADD_TODO, text }
         }
         ```

     2. **In reducers:**

         Let's create `reducer.js`:

         ```javascript
         import { ADD_TODO } from './actionTypes'

         export default (state = [], action) => {
           switch (action.type) {
             case ADD_TODO:
               return [
                 ...state,
                 {
                   text: action.text,
                   completed: false
                 }
               ];
             default:
               return state
           }
         }
         ```

172. ### What are the different ways to write `mapDispatchToProps()`?

     There are a few ways of binding *action creators* to `dispatch()` in `mapDispatchToProps()`. Below are the possible options:

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
      action: () => dispatch(action())
     })
     ```

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
      action: bindActionCreators(action, dispatch)
     })
     ```

     ```javascript
     const mapDispatchToProps = { action }
     ```

     The third option is just a shorthand for the first one.

173. ### What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?

     If the `ownProps` parameter is specified, React Redux will pass the props that were passed to the component into your *connect* functions. So, if you use a connected component:

     ```jsx harmony
     import ConnectedComponent from './containers/ConnectedComponent';

     <ConnectedComponent user={'john'} />
     ```

     The `ownProps` inside your `mapStateToProps()` and `mapDispatchToProps()` functions will be an object:

     ```javascript
     { user: 'john' }
     ```

     You can use this object to decide what to return from those functions.

174. ### How to structure Redux top level directories?

     Most of the applications has several top-level directories as below:

     1. **Components**: Used for *dumb* components unaware of Redux.
     2. **Containers**: Used for *smart* components connected to Redux.
     3. **Actions**: Used for all action creators, where file names correspond to part of the app.
     4. **Reducers**: Used for all reducers, where files name correspond to state key.
     5. **Store**: Used for store initialization.

     This structure works well for small and medium size apps.

175. ### What is redux-saga?

     `redux-saga` is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

     It is available in NPM:

     ```console
     $ npm install --save redux-saga
     ```

176. ### What is the mental model of redux-saga?

     *Saga* is like a separate thread in your application, that's solely responsible for side effects. `redux-saga` is a redux *middleware*, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.

177. ### What are the differences between `call()` and `put()` in redux-saga?

     Both `call()` and `put()` are effect creator functions. `call()` function is used to create effect description, which instructs middleware to call the promise. `put()` function creates an effect, which instructs middleware to dispatch an action to the store.

     Let's take example of how these effects work for fetching particular user data.

     ```javascript
     function* fetchUserSaga(action) {
       // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
       // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
       const userData = yield call(api.fetchUser, action.userId)

       // Instructing middleware to dispatch corresponding action.
       yield put({
         type: 'FETCH_USER_SUCCESS',
         userData
       })
     }
     ```

178. ### What is Redux Thunk?

     *Redux Thunk* middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch()` and `getState()` as parameters.

179. ### What are the differences between `redux-saga` and `redux-thunk`?

     Both *Redux Thunk* and *Redux Saga* take care of dealing with side effects. In most of the scenarios, Thunk uses *Promises* to deal with them, whereas Saga uses *Generators*. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.

180. ### What is Redux DevTools?

     *Redux DevTools* is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.

181. ### What are the features of Redux DevTools?

     1. Lets you inspect every state and action payload.
     2. Lets you go back in time by *cancelling* actions.
     3. If you change the reducer code, each *staged* action will be re-evaluated.
     4. If the reducers throw, you will see during which action this happened, and what the error was.
     5. With `persistState()` store enhancer, you can persist debug sessions across page reloads.

182. ### What are Redux selectors and why to use them?

     *Selectors* are functions that take Redux state as an argument and return some data to pass to the component.

     For example, to get user details from the state:

     ```javascript
     const getUserData = state => state.user.data
     ```

183. ### What is Redux Form?

     *Redux Form* works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.

184. ### What are the main features of Redux Form?

       1. Field values persistence via Redux store.
       2. Validation (sync/async) and submission.
       3. Formatting, parsing and normalization of field values.

185. ### How to add multiple middlewares to Redux?

     You can use `applyMiddleware()`.

     For example, you can add `redux-thunk` and `logger` passing them as arguments to `applyMiddleware()`:

     ```javascript
     import { createStore, applyMiddleware } from 'redux'
     const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore)
     ```

186. ### How to set initial state in Redux?

     You need to pass initial state as second argument to createStore:

     ```javascript
     const rootReducer = combineReducers({
       todos: todos,
       visibilityFilter: visibilityFilter
     })

     const initialState = {
       todos: [{ id: 123, name: 'example', completed: false }]
     }

     const store = createStore(
       rootReducer,
       initialState
     )
     ```

187. ### How Relay is different from Redux?

     Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via *GraphQL* queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.

## React Native

188. ### What is the difference between React Native and React?

     **React** is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.

     **React Native** is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.

189. ### How to test React Native apps?

     React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network.

190. ### How to do logging in React Native?

     You can use `console.log`, `console.warn`, etc. As of React Native v0.29 you can simply run the following to see logs in the console:

     ```
     $ react-native log-ios
     $ react-native log-android
     ```

191. ### How to debug your React Native?

     Follow the below steps to debug React Native app:

     1. Run your application in the iOS simulator.
     2. Press `Command + D` and a webpage should open up at `http://localhost:8081/debugger-ui`.
     3. Enable *Pause On Caught Exceptions* for a better debugging experience.
     4. Press `Command + Option + I` to open the Chrome Developer tools, or open it via `View` -> `Developer` -> `Developer Tools`.
     5. You should now be able to debug as you normally would.

## React supported libraries & Integration

192. ### What is reselect and how it works?

     *Reselect* is a **selector library** (for Redux) which uses *memoization* concept. It was originally written to compute derived data from Redux-like applications state, but it can't be tied to any architecture or library.

     Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It's memoization and cache are fully customizable.

193. ### What is Flow?

     *Flow* is a *static type checker* designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving `null`, unlike most type systems.

194. ### What is the difference between Flow and PropTypes?

     Flow is a *static analysis tool* (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time. PropTypes is a *basic type checker* (runtime checker) which has been patched onto React. It can't check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.

195. ### How to use Font Awesome icons in React?

     The below steps followed to include Font Awesome in React:

     1. Install `font-awesome`:

     ```console
     $ npm install --save font-awesome
     ```

     2. Import `font-awesome` in your `index.js` file:

     ```javascript
     import 'font-awesome/css/font-awesome.min.css'
     ```

     3. Add Font Awesome classes in `className`:

     ```javascript
     render() {
       return <div><i className={'fa fa-spinner'} /></div>
     }
     ```

196. ### What is React Dev Tools?

     *React Developer Tools* let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).

     The official extensions available for different browsers or environments.
     1. **Chrome extension**
     2. **Firefox extension**
     3. **Standalone app** (Safari, React Native, etc)

197. ### Why is DevTools not loading in Chrome for local files?

     If you opened a local HTML file in your browser (`file://...`) then you must first open *Chrome Extensions* and check `Allow access to file URLs`.

198. ### How to use Polymer in React?

     1. Create a Polymer element:

         ```jsx harmony
         <link rel='import' href='../../bower_components/polymer/polymer.html' />
         Polymer({
           is: 'calender-element',
           ready: function() {
             this.textContent = 'I am a calender'
           }
         })
         ```

     2. Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the `index.html` of your React application:

         ```html
         <link rel='import' href='./src/polymer-components/calender-element.html'>
         ```

         3. Use that element in the JSX file:

         ```javascript
         import React from 'react'

         class MyComponent extends React.Component {
           render() {
             return (
               <calender-element />
             )
           }
         }

         export default MyComponent
         ```

199. ### What are the advantages of React over Vue.js?

     React has the following advantages over Vue.js:

     1. Gives more flexibility in large apps developing.
     2. Easier to test.
     3. Suitable for mobile apps creating.
     4. More information and solutions available.

200. ### What is the difference between React and Angular?

     | React | Angular |
     | ----- | ------- |
     | React is a library and has only the View layer | Angular is a framework and has complete MVC functionality |
     | React handles rendering on the server side | AngularJS renders only on the client side but Angular 2 and above renders on the server side |
     | React uses JSX that looks like HTML in JS which can be confusing | Angular follows the template approach for HTML, which makes code shorter and easy to understand |
     | React Native, which is a React type to build mobile applications are faster and more stable | Ionic, Angular's mobile native app is relatively less stable and slower |
     | In React, data flows only in one way and hence debugging is easy | In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult |

201. ### Why React tab is not showing up in DevTools?

     When the page loads, *React DevTools* sets a global named `__REACT_DEVTOOLS_GLOBAL_HOOK__`, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won't show up the tab.

202. ### What are Styled Components?

     `styled-components` is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.

203. ### Give an example of Styled Components?

     Lets create `<Title>` and `<Wrapper>` components with specific styles for each.

     ```javascript
     import React from 'react'
     import styled from 'styled-components'

     // Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
     const Title = styled.h1`
       font-size: 1.5em;
       text-align: center;
       color: palevioletred;
     `

     // Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
     const Wrapper = styled.section`
       padding: 4em;
       background: papayawhip;
     `
     ```

     These two variables, `Title` and `Wrapper`, are now components that you can render just like any other react component.

     ```jsx harmony
     <Wrapper>
       <Title>{'Lets start first styled component!'}</Title>
     </Wrapper>
     ```

204. ### What is Relay?

     Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.

205. ### How to use TypeScript in `create-react-app` application?

     When you create a new project supply `--scripts-version` option as `react-scripts-ts`. `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring TypeScript into the mix.

     Now the project layout should look like the following:

     ```
     my-app/
     ├─ .gitignore
     ├─ images.d.ts
     ├─ node_modules/
     ├─ public/
     ├─ src/
     │  └─ ...
     ├─ package.json
     ├─ tsconfig.json
     ├─ tsconfig.prod.json
     ├─ tsconfig.test.json
     └─ tslint.json
     ```

## Miscellaneous

206. ### What are the main features of Reselect library?

       1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
       2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
       3. Selectors are composable. They can be used as input to other selectors.

207. ### Give an example of Reselect usage?

     Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

     ```javascript
     import { createSelector } from 'reselect'

     const shopItemsSelector = state => state.shop.items
     const taxPercentSelector = state => state.shop.taxPercent

     const subtotalSelector = createSelector(
       shopItemsSelector,
       items => items.reduce((acc, item) => acc + item.value, 0)
     )

     const taxSelector = createSelector(
       subtotalSelector,
       taxPercentSelector,
       (subtotal, taxPercent) => subtotal * (taxPercent / 100)
     )

     export const totalSelector = createSelector(
       subtotalSelector,
       taxSelector,
       (subtotal, tax) => ({ total: subtotal + tax })
     )

     let exampleState = {
       shop: {
         taxPercent: 8,
         items: [
           { name: 'apple', value: 1.20 },
           { name: 'orange', value: 0.95 },
         ]
       }
     }

     console.log(subtotalSelector(exampleState)) // 2.15
     console.log(taxSelector(exampleState))      // 0.172
     console.log(totalSelector(exampleState))    // { total: 2.322 }
     ```

208. ### What is an action in Redux?

     *Actions* are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

     For example an example action which represents adding a new todo item:

     ```
     {
       type: ADD_TODO,
       text: 'Add todo item'
     }
     ```

209. ### Does the statics object work with ES6 classes in React?

     No, `statics` only works with `React.createClass()`:

     ```javascript
     someComponent= React.createClass({
       statics: {
         someMethod: function() {
           // ..
         }
       }
     })
     ```

     But you can write statics inside ES6+ classes like this:

     ```javascript
     class Component extends React.Component {
       static propTypes = {
         // ...
       }

       static someMethod() {
         // ...
       }
     }
     ```

210. ### Redux 只能与 React 一起使用么？

     Redux 可以用做任何 UI 层的数据存储。最常见的应用场景是 React 和 React Native，但也有一些 bindings 可用于 AngularJS，Angular 2,Vue，Mithril 等项目。Redux 只提供了一种订阅机制，任何其他代码都可以使用它。

211. ### Do you need to have a particular build tool to use Redux?

     Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all.

212. ### How Redux Form `initialValues` get updated from state?

     You need to add `enableReinitialize : true` setting.

     ```javascript
     const InitializeFromStateForm = reduxForm({
       form: 'initializeFromState',
       enableReinitialize : true
     })(UserEdit)
     ```

     If your `initialValues` prop gets updated, your form will update too.

213. ### How React PropTypes allow different types for one prop?

     You can use `oneOfType()` method of `PropTypes`.

     For example, the height property can be defined with either `string` or `number` type as below:

     ```javascript
     Component.PropTypes = {
       size: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number
       ])
     }
     ```

214. ### 我可以导入一个 SVG 文件作为 React 组件么?

     您可以直接将 SVG 作为组件导入，而不是将其作为文件加载。此功能仅在 `react-scripts@2.0.0` 及更高版本中可用。


     ```jsx 
     import { ReactComponent as Logo } from './logo.svg'

     const App = () => (
       <div>
         {/* Logo is an actual react component */}
         <Logo />
       </div>
     )
     ```

     **Note**: Don't forget about the curly braces in the import.

215. ### Why are inline ref callbacks or functions not recommended?

     If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

     ```jsx
     class UserForm extends Component {
       handleSubmit = () => {
         console.log("Input Value is: ", this.input.value)
       }
     ```


       render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              ref={(input) => this.input = input} /> // Access DOM input in handle submit
            <button type='submit'>Submit</button>
          </form>
        )
      }
     }
     ```
    
     But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function
    
     ```jsx
     class UserForm extends Component {
      handleSubmit = () => {
        console.log("Input Value is: ", this.input.value)
      }
    
      setSearchInput = (input) => {
        this.input = input
      }
    
      render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              ref={this.setSearchInput} /> // Access DOM input in handle submit
            <button type='submit'>Submit</button>
          </form>
        )
      }
     }
     ```

216. ### What is render hijacking in react?

     The concept of render hijacking is the ability to control what a component will output from another component. It actually means that you decorate your component by wrapping it into a Higher-Order component. By wrapping you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enables hijacking, but by using HOC you make your component behave in different way.

217. ### What are HOC factory implementations?

     There are two main ways of implementing HOCs in React. 1. Props Proxy (PP) and 2. Inheritance Inversion (II). They follow different approaches for manipulating the *WrappedComponent*.
     **Props Proxy**

     In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name **Props Proxy**.

     ```jsx

     function ppHOC(WrappedComponent) {
      return class PP extends React.Component {
        render() {
          return <WrappedComponent {...this.props}/>
        }
      }
     }
     ```

     **Inheritance Inversion**
     In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems **inverse**.

     ```jsx
     function iiHOC(WrappedComponent) {
      return class Enhancer extends WrappedComponent {
        render() {
          return super.render()
        }
      }
     }
     ```

218. ### 如何传递数字给 React 组件？

     传递数字时你应该使用 `{}`，而传递字符串时还需要使用引号：

     ```jsx
        React.render(<User age={30} department={"IT"} />, document.getElementById('container'));
     ```

219. ### Do I need to keep all my state into Redux? Should I ever use react internal state?

     It is up to developer decision. i.e, It is developer job to determine what kinds of state make up your application, and where each piece of state should liveSome users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.

     Below are the thumb rules to determine what kind of data should be put into Redux
     1. Do other parts of the application care about this data?
     2. Do you need to be able to create further derived data based on this original data?
     3. Is the same data being used to drive multiple components?
     4. Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
     5. Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?

220. ### 在 React 中 registerServiceWorker 的用途是什么?

     默认情况下，React 会为你创建一个没有任何配置的 service worker。Service worker 是一个 Web API，它帮助您缓存资源和其他文件，以便当用户离线或在弱网络时，他/她仍然可以在屏幕上看到结果，因此，它可以帮助您建立更好的用户体验，这是您目前应该了解的关于 Service worker 的内容。

     ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';
        import registerServiceWorker from './registerServiceWorker';

        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
     ```

221. ### What is React memo function?

     Class components can be restricted from rendering when their input props are the same using **PureComponent or shouldComponentUpdate**. Now you can do the same with function components by wrapping them in **React.memo**.

     ```jsx
     const MyComponent = React.memo(function MyComponent(props) {
      /* only rerenders if props change */
     });
     ```

222. ### React lazy 函数是什么?

     使用 React.lazy 函数允许你将动态导入的组件作为常规组件进行渲染。当组件开始渲染时，它会自动加载包含 OtherComponent 的包。它必须返回一个 Promise，该 Promise 解析后为一个带有默认导出 React 组件的模块。

     ```jsx
     const OtherComponent = React.lazy(() => import('./OtherComponent'));

     function MyComponent() {
      return (
        <div>
          <OtherComponent />
        </div>
      );
     }
     ```

     **注意：** React.lazy 和 Suspense 还不能用于服务端渲染。如果要在服务端渲染的应用程序中进行代码拆分，我们仍然建议使用 React Loadable。

223. ### 如何使用 setState 防止不必要的更新?

     你可以把状态的当前值与已有的值进行比较，并决定是否重新渲染页面。如果没有更改，你需要返回 `null` 以阻止渲染，否则返回最新的状态值。例如，用户配置信息组件将按以下方式实现条件渲染：

     ```jsx
     getUserProfile = user => {
       const latestAddress = user.address;
       this.setState(state => {
         if (state.address === latestAddress) {
           return null;
         } else {
           return { title: latestAddress };
         }
       });
     };
     ```

224. ### 如何在 React 16 版本中渲染数组、字符串和数值？ 

     **Arrays**: 与旧版本不同的是，在 React 16 中你不需要确保 **render** 方法必须返回单个元素。通过返回数组，你可以返回多个没有包装元素的同级元素。例如，让我们看看下面的开发人员列表：

     ```jsx
     const ReactJSDevs = () => {
       return [
         <li key="1">John</li>,
         <li key="2">Jackie</li>,
         <li key="3">Jordan</li>
       ];
     }
     ```

     你还可以将此数组项合并到另一个数组组件中：

     ```jsx
     const JSDevs = () => {
       return (
         <ul>
           <li>Brad</li>
           <li>Brodge</li>
           <ReactJSDevs/>
           <li>Brandon</li>
         </ul>
       );
     }
     ```

     **Strings and Numbers:** 在 render 方法中，你也可以返回字符串和数值类型：

     ```jsx
     // String
     render() {
      return 'Welcome to ReactJS questions';
     }
     // Number
     render() {
      return 2018;
     }
     ```

225. ### 如何在 React 类中使用类字段声明语法?

     使用类字段声明可以使 React 类组件更加简洁。您可以在不使用构造函数的情况下初始化本地状态，并通过使用箭头函数声明类方法，而无需额外对它们进行绑定。让我们以一个 counter 示例来演示类字段声明，即不使用构造函数初始化状态且不进行方法绑定：

     ```jsx
     class Counter extends Component {
       state = { value: 0 };

       handleIncrement = () => {
         this.setState(prevState => ({
           value: prevState.value + 1
         }));
       };

       handleDecrement = () => {
         this.setState(prevState => ({
           value: prevState.value - 1
         }));
       };

       render() {
         return (
           <div>
             {this.state.value}

             <button onClick={this.handleIncrement}>+</button>
             <button onClick={this.handleDecrement}>-</button>
           </div>
         )
       }
     }
     ```

226. ### 什么是 hooks?

     Hooks 是一个新的草案，它允许您在不编写类的情况下使用状态和其他 React 特性。让我们来看一个 useState 钩子示例：

     ```jsx
     import { useState } from 'react';

     function Example() {
       // Declare a new state variable, which we'll call "count"
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>
             Click me
           </button>
         </div>
       );
     }
     ```

227. ### Hooks 需要遵循什么规则?

     为了使用 hooks，您需要遵守两个规则：

     1. 仅在顶层的 React 函数调用 hooks。也就是说，你不能在循环、条件或内嵌函数中调用 hooks。这将确保每次组件渲染时都以相同的顺序调用 hooks，并且它会在多个 useState 和 useEffect 调用之间保留 hooks 的状态。
     2. 仅在 React 函数中调用 hooks。例如，你不能在常规的 JavaScript 函数中调用 hooks。

228. ### How to ensure hooks followed the rules in your project?

     React team released an ESLint plugin called **eslint-plugin-react-hooks** that enforces these two rules. You can add this plugin to your project using the below command,

     ```shell
     npm install eslint-plugin-react-hooks@next
     ```

     And apply the below config in your ESLint config file,
     ```javascript
     // Your ESLint configuration
     {
       "plugins": [
         // ...
         "react-hooks"
       ],
       "rules": {
         // ...
         "react-hooks/rules-of-hooks": "error"
       }
     }
     ```

     **Note:** This plugin is intended to use in Create React App by default.

229. ### What are the differences between Flux and Redux?

     Below are the major differences between Flux and Redux

     | Flux | Redux |
     | ----- | ------- |
     | State is mutable | State is immutable |
     | The Store contains both state and change logic | The Store and change logic are separate |
     | There are multiple stores exist | There is only one store exist |
     | All the stores are disconnected and flat | Single store with hierarchical reducers|
     | It has a singleton dispatcher | There is no concept of dispatcher |
     | React components subscribe to the store | Container components uses connect function|

230. ### What are the benefits of React Router V4?

     Below are the main benefits of React Router V4 module,
     1. In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(<BrowserRouter>) which wraps specific child router components(<Route>).
     2. You don't need to manually set history. The router module will take care history by wrapping routes with  <BrowserRouter> component.
     3. The application size is reduced by adding only the specific router module(Web, core, or native)

231. ### Can you describe about componentDidCatch lifecycle method signature?

     The **componentDidCatch** lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,
     1. error: - The error object which was thrown
     2. info: - An object with a componentStack key contains the information about which component threw the error.

     The method structure would be as follows
     ```javascript
     componentDidCatch(error, info)
     ```

232. ### 在哪些情况下，错误边界不会捕获错误？

     以下是错误边界不起作用的情况：

     1. 在事件处理器内
     2. **setTimeout** 或 **requestAnimationFrame** 回调中的异步代码
     3. 在服务端渲染期间
     4. 错误边界代码本身中引发错误时

233. ### 为什么事件处理器不需要错误边界?

     错误边界不会捕获事件处理程序中的错误。与 render 方法或生命周期方法不同，在渲染期间事件处理器不会被执行或调用。

     如果仍然需要在事件处理程序中捕获错误，请使用下面的常规 JavaScript `try/catch` 语句：

     ```javascript
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = { error: null };
       }

       handleClick = () => {
         try {
           // Do something that could throw
         } catch (error) {
           this.setState({ error });
         }
       }

       render() {
         if (this.state.error) {
           return <h1>Caught an error.</h1>
         }
         return <div onClick={this.handleClick}>Click Me</div>
       }
     }
     ```

     上面的代码使用普通的 JavaScript try/catch 块而不是错误边界来捕获错误。

234. ### try catch 与错误边界有什么区别?

     Try catch 块使用命令式代码，而错误边界则是使用在屏幕上呈现声明性代码。

     例如，以下是使用声明式代码的 try/catch 块：

     ```javascript
     try {
       showButton();
     } catch (error) {
       // ...
     }
     ```

     而错误边界包装的声明式代码如下：

     ```javascript
     <ErrorBoundary>
       <MyComponent />
     </ErrorBoundary>
     ```

     因此，如果在组件树深处某个位置组件的 **componentDidUpdate** 方法中，发生了由 **setState** 引发的错误，它仍然会正确地冒泡到最近的错误边界。

235. ### React 16 中未捕获的错误的行为是什么？

     在 React 16 中，未被任何错误边界捕获的错误将导致整个 React 组件树的卸载。这一决定背后的原因是，与其显示已损坏的界面，不如完全移除它。例如，对于支付应用程序来说，显示错误的金额比什么都不提供更糟糕。

236. ### 放置错误边界的正确位置是什么？

     错误边界使用的粒度由开发人员根据项目需要决定。您可以遵循这些方法中的任何一种：

     1. 可以包装顶层路由组件以显示整个应用程序中常见的错误消息。
     2. 您还可以将单个组件包装在错误边界中，以防止它们奔溃时影响到应用程序的其余部分。

237. ### 从错误边界跟踪组件堆栈有什么好处？

     除了错误消息和 JavaScript 堆栈，React 16 将使用错误边界的概念显示带有文件名和行号的组件堆栈。例如，BuggyCounter 组件显示组件堆栈信息：

     ![stacktrace](images/error_boundary.png)

238. ### 在定义类组件时，什么是必须的方法？

     在类组件中 render() 方法是唯一需要的方法。也就是说，对于类组件，除了 render() 方法之外的所有方法都是可选的。

239. ### render 方法可能返回的类型是什么?

     以下列表是 render 方法返回的类型：

     1. **React elements:** 用于告诉 React 如何渲染 DOM 节点。它包括 HTML 元素，如 `<div />` 和用户定义的元素。
     2. **Arrays and fragments:** 以数组的形式返回多个元素和包装多个元素的片段。
     3. **Portals:** 将子元素渲染到不同的 DOM 子树中。
     4. **String and numbers:** 在 DOM 中将字符串和数字都作为文本节点进行呈现。
     5. **Booleans or null:** 不会渲染任何内容，但这些类型用于有条件地渲染内容。

240. ### 构造函数的主要目的是什么？

     使用构造函数主要有两个目的：

     1. 通过将对象分配给 this.state 来初始化本地状态。
     2. 用于为组件实例绑定事件处理方法。

     例如，下面的代码涵盖了上述两种情况：

     ```javascript
     constructor(props) {
       super(props);
       // Don't call this.setState() here!
       this.state = { counter: 0 };
       this.handleClick = this.handleClick.bind(this);
     }
     ```

241. ### 是否必须为 React 组件定义构造函数？

     不，这不是强制的。也就是说，如果你不需要初始化状态且不需要绑定方法，则你不需要为 React 组件实现一个构造函数。

242. ### 什么是默认属性？

     defaultProps 被定义为组件类上的属性，用于设置组件类默认的属性值。它只适用于 undefined 的属性，而不适用于 null 属性。例如，让我们为按钮组件创建默认的 color 属性：

     ```javascript
     class MyButton extends React.Component {
       // ...
     }

     MyButton.defaultProps = {
       color: 'red'
     };

     ```

     如果未设置 props.color，则会使用默认值 `red`。 也就是说，每当您试图访问 color 属性时，它都使用默认值。

     ```javascript
     render() {
        return <MyButton /> ; // props.color will be set to red
      }
     ```

     **注意：** 如果你提供的是 null 值，它会仍然保留 null 值。

243. ### 为什么不能在 componentWillUnmount 中调用 setState() 方法？

     不应在 componentWillUnmount() 中调用 setState()，因为一旦卸载了组件实例，就永远不会再次装载它。

244. ### getDerivedStateFromError 的目的是什么？

     在子代组件抛出异常后会调用此生命周期方法。它以抛出的异常对象作为参数，并返回一个值用于更新状态。该生命周期方法的签名如下：

     ```javascript
     static getDerivedStateFromError(error)
     ```

     让我们举一个包含上述生命周期方法的错误边界示例，来说明 getDerivedStateFromError 的目的：

     ```javascript
     class ErrorBoundary extends React.Component {
       constructor(props) {
         super(props);
         this.state = { hasError: false };
       }

       static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

       render() {
         if (this.state.hasError) {
           // You can render any custom fallback UI
           return <h1>Something went wrong.</h1>;
         }

         return this.props.children;
       }
     }
     ```

245. ### 当组件重新渲染时顺序执行的方法有哪些？

     更新可能由属性或状态的更改引起。在重新渲染组件时，会按以下顺序调用下列方法。

     1. static getDerivedStateFromProps()
     2. shouldComponentUpdate()
     3. render()
     4. getSnapshotBeforeUpdate()
     5. componentDidUpdate()

246. ### 错误处理期间调用哪些方法？

     在渲染期间，生命周期方法内或任何子组件的构造函数中出现错误时，将会调用以下方法：
     1. static getDerivedStateFromError()
     2. componentDidCatch()

247. ### What is the purpose of displayName class property?

     The displayName string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.
     For example, To ease debugging, choose a display name that communicates that it’s the result of a withSubscription HOC.

     ```javascript
     function withSubscription(WrappedComponent) {
       class WithSubscription extends React.Component {/* ... */}
       WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
       return WithSubscription;
     }
     function getDisplayName(WrappedComponent) {
       return WrappedComponent.displayName || WrappedComponent.name || 'Component';
     }
     ```

248. ### 支持 React 应用程序的浏览器有哪一些？

     React 支持所有流行的浏览器，包括 Internet Explorer 9 和更高版本，但旧版本的浏览器（如IE 9 和 IE 10）需要一些 polyfill。如果你使用 **es5-shim and es5-sham** polyfill，那么它甚至支持不支持 ES5 方法的旧浏览器。

249. ### unmountComponentAtNode 方法的目的是什么？

     此方法可从 react-dom 包中获得，它从 DOM 中移除已装载的 React 组件，并清除其事件处理程序和状态。如果容器中没有装载任何组件，则调用此函数将不起任何作用。如果组件已卸载，则返回 true；如果没有要卸载的组件，则返回 false。该方法的签名如下：

     ```javascript
     ReactDOM.unmountComponentAtNode(container)
     ```

250. ### 什么是代码拆分？

     Code-Splitting 是 Webpack 和 Browserify 等打包工具所支持的一项功能，它可以创建多个 bundles，并可以在运行时动态加载。React 项目支持通过 dynamic import() 特性进行代码拆分。例如，在下面的代码片段中，它将使 moduleA.js 及其所有唯一依赖项作为单独的块，仅当用户点击 'Load' 按钮后才加载。

     **moduleA.js**
     ```javascript
     const moduleA = 'Hello';

     export { moduleA };
     ```
     **App.js**
     ```javascript
     import React, { Component } from 'react';

     class App extends Component {
       handleClick = () => {
         import('./moduleA')
           .then(({ moduleA }) => {
             // Use moduleA
           })
           .catch(err => {
             // Handle failure
           });
       };

       render() {
         return (
           <div>
             <button onClick={this.handleClick}>Load</button>
           </div>
         );
       }
     }

     export default App;
     ```

251. ### 严格模式有什么好处?

     在下面的情况下，<StrictMode> 将有所帮助：

     1. 使用 **unsafe lifecycle methods** 标识组件。
     2. 有关 **legacy string ref** API 用法发出警告。
     3. 检测无法预测的 **side effects**。
     4. 检测 **legacy context** API。
     5. 有关已弃用的 findDOMNode 用法的警告。

252. ### What are Keyed Fragments?

     The Fragments declared with the explicit <React.Fragment> syntax may have keys. The general usecase is mapping a collection to an array of fragments as below,

     ```javascript
     function Glossary(props) {
       return (
         <dl>
           {props.items.map(item => (
             // Without the `key`, React will fire a key warning
             <React.Fragment key={item.id}>
               <dt>{item.term}</dt>
               <dd>{item.description}</dd>
             </React.Fragment>
           ))}
         </dl>
       );
     }
     ```

     **Note:** key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.

253. ### React 支持所有的 HTML 属性么？

     从 React 16 开始，完全支持标准或自定义 DOM 属性。由于 React 组件通常同时使用自定义和与 DOM 相关的属性，因此 React 与 DOM API 一样都使用 camelCase 约定。让我们对标准 HTML 属性采取一些措施：

     ```javascript
     <div tabIndex="-1" />      // Just like node.tabIndex DOM API
     <div className="Button" /> // Just like node.className DOM API
     <input readOnly={true} />  // Just like node.readOnly DOM API
     ```

     除了特殊情况外，这些属性的工作方式与相应的 HTML 属性类似。它还支持所有 SVG 属性。

254. ### What are the limitations with HOCs?

     Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order
     1. **Don’t Use HOCs Inside the render Method:**
        It is not recommended to apply a HOC to a component within the render method of a component.
        ```javascript
        render() {
          // A new version of EnhancedComponent is created on every render
          // EnhancedComponent1 !== EnhancedComponent2
          const EnhancedComponent = enhance(MyComponent);
          // That causes the entire subtree to unmount/remount each time!
          return <EnhancedComponent />;
        }
        ```
        The above code impact performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once

     2. **Static Methods Must Be Copied Over:**
        When you apply a HOC to a component the new component does not have any of the static methods of the original component
        ```javascript
        // Define a static method
        WrappedComponent.staticMethod = function() {/*...*/}
        // Now apply a HOC
        const EnhancedComponent = enhance(WrappedComponent);

        // The enhanced component has no static method
        typeof EnhancedComponent.staticMethod === 'undefined' // true
        ```
        You can overcome this by copying the methods onto the container before returning it
        ```javascript
        function enhance(WrappedComponent) {
          class Enhance extends React.Component {/*...*/}
          // Must know exactly which method(s) to copy :(
          Enhance.staticMethod = WrappedComponent.staticMethod;
          return Enhance;
        }
        ```
     3. **Refs Aren’t Passed Through:**
        For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API

255. ### How to debug forwardRefs in DevTools?

     **React.forwardRef** accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component. For example, If you don't name the render function or not using displayName property then it will appear as ”ForwardRef” in the DevTools,

     ```javascript
     const WrappedComponent = React.forwardRef((props, ref) => {
       return <LogProps {...props} forwardedRef={ref} />;
     });
     ```

     But If you name the render function then it will appear as **”ForwardRef(myFunction)”**

     ```javascript
     const WrappedComponent = React.forwardRef(
       function myFunction(props, ref) {
         return <LogProps {...props} forwardedRef={ref} />;
       }
     );
     ```

     As an alternative, You can also set displayName property for forwardRef function,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         // ...
       }

       function forwardRef(props, ref) {
         return <LogProps {...props} forwardedRef={ref} />;
       }

       // Give this component a more helpful display name in DevTools.
       // e.g. "ForwardRef(logProps(MyComponent))"
       const name = Component.displayName || Component.name;
       forwardRef.displayName = `logProps(${name})`;

       return React.forwardRef(forwardRef);
     }
     ```

256. ### 什么时候组件的 props 属性默认为 true？

     如果没有传递属性值，则默认为 true。此行为可用，以便与 HTML 的行为匹配。例如，下面的表达式是等价的：

     ```javascript
     <MyInput autocomplete />

     <MyInput autocomplete={true} />
     ```

     **注意：** 不建议使用此方法，因为它可能与 ES6 对象 shorthand 混淆（例如，{name}，它是{ name:name } 的缩写）

257. ### 什么是 NextJS 及其主要特征？

     Next.js 是一个流行的轻量级框架，用于使用 React 构建静态和服务端渲染应用程序。它还提供样式和路由解决方案。以下是 NextJS 提供的主要功能：

     1. 默认服务端渲染
     2. 自动代码拆分以加快页面加载速度
     3. 简单的客户端路由 (基于页面)
     4. 基于 Webpack 的开发环境支持 (HMR)
     5. 能够使用 Express 或任何其他 Node.js HTTP 服务器
     6. 可自定义您自己的 Babel 和 Webpack 配置

258. ### 如何将事件处理程序传递给组件？

     可以将事件处理程序和其他函数作为属性传递给子组件。它可以在子组件中使用，如下所示：

     ```
     <button onClick={this.handleClick}>
     ```

259. ### 在渲染方法中使用箭头函数好么？

     是的，你可以用。它通常是向回调函数传递参数的最简单方法。但在使用时需要优化性能。

     ```javascript
     class Foo extends Component {
       handleClick() {
         console.log('Click happened');
       }
       render() {
         return <button onClick={() => this.handleClick()}>Click Me</button>;
       }
     }
     ```

     **注意：** 组件每次渲染时，在 render 方法中的箭头函数都会创建一个新的函数，这可能会影响性能。

260. ### 如何防止函数被多次调用？

     如果你使用一个事件处理程序，如 **onClick or onScroll** 并希望防止回调被过快地触发，那么您可以限制回调的执行速度。这可以通过以下可能的方式实现：

     1. **Throttling:** 基于时间的频率进行更改。例如，它可以使用 lodash 的 _.throttle 函数。
     2. **Debouncing:** 在一段时间不活动后发布更改。例如，可以使用 lodash 的 _.debounce 函数。
     3. **RequestAnimationFrame throttling:** 基于 requestAnimationFrame 的更改。例如，可以使用 raf-schd。

     > 注意：_.debounce , _.throttle 和 raf-schd 都提供了一个 cancel 方法来取消延迟回调。所以需要调用 componentWillUnmount，或者对代码进行检查来保证在延迟函数有效期间内组件始终挂载。

261. ### JSX 如何防止注入攻击？

     React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. For example, you can embed user input as below,
     React DOM 会在渲染 JSX 中嵌入的任何值之前对其进行转义。因此，它确保您永远不能注入任何未在应用程序中显式写入的内容。

     ```javascript
     const name = response.potentiallyMaliciousInput;
     const element = <h1>{name}</h1>;
     ```

     This way you can prevent XSS(Cross-site-scripting) attacks in the application.

262. ### 如何更新已渲染的元素？

     通过将新创建的元素传递给 ReactDOM 的 render 方法，可以实现 UI 更新。例如，让我们举一个滴答时钟的例子，它通过多次调用 render 方法来更新时间：

     ```javascript
     function tick() {
       const element = (
         <div>
           <h1>Hello, world!</h1>
           <h2>It is {new Date().toLocaleTimeString()}.</h2>
         </div>
       );
       ReactDOM.render(element, document.getElementById('root'));
     }

     setInterval(tick, 1000);
     ```

263. ### 你怎么说 props 是只读的？

     当您将组件声明为函数或类时，它决不能修改自己的属性。让我们来实现一个 capital 的函数：

     ```javascript
     function capital(amount, interest) {
        return amount + interest;
     }
     ```

     上面的函数称为 "pure" 函数，因为它不会尝试更改输入，并总是为相同的输入返回相同的结果。因此，React 有一条规则，即"所有 React 组件的行为都必须像纯函数一样。"

264. ### 你认为状态更新是如何合并的？

     When you call setState() in the component, React merges the object you provide into the current state. For example, let us take a facebook user with posts and comments details as state variables,
     当你在组件中调用 setState() 方法时，React 会将提供的对象合并到当前状态。例如，让我们以一个使用帖子和评论详细信息的作为状态变量的 Facebook 用户为例：

     ```javascript
       constructor(props) {
         super(props);
         this.state = {
           posts: [],
           comments: []
         };
       }
     ```

     现在，您可以独立调用 setState() 方法，单独更新状态变量：

     ```javascript
      componentDidMount() {
         fetchPosts().then(response => {
           this.setState({
             posts: response.posts
           });
         });

         fetchComments().then(response => {
           this.setState({
             comments: response.comments
           });
         });
       }
     ```

     如上面的代码段所示，`this.setState({comments})` 只会更新 comments 变量，而不会修改或替换 posts 变量。

265. ### 如何将参数传递给事件处理程序？

     在迭代或循环期间，向事件处理程序传递额外的参数是很常见的。这可以通过箭头函数或绑定方法实现。让我们以网格中更新的用户详细信息为例：

     ```javascript
     <button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>
     <button onClick={this.updateUser.bind(this, userId)}>Update User details</button>
     ```

     在这两种方法中，合成参数 e 作为第二个参数传递。您需要在箭头函数中显式传递它，并使用 bind 方法自动转发它。

266. ### 如何防止组件渲染？

     你可以基于特定的条件通过返回 null 值来阻止组件的渲染。这样它就可以有条件地渲染组件。

     ```javascript
     function Greeting(props) {
       if (!props.loggedIn) {
         return null;
       }

       return (
         <div className="greeting">
           welcome, {props.name}
         </div>
       );
     }
     ```

     ```javascript
     class User extends React.Component {
       constructor(props) {
         super(props);
         this.state = {loggedIn: false, name: 'John'};
       }

       render() {
        return (
            <div>
              //Prevent component render if it is not loggedIn
              <Greeting loggedIn={this.state.loggedIn} />
              <UserDetails name={this.state.name}>
            </div>
        );
       }
     ```

     在上面的示例中，greeting 组件通过应用条件并返回空值跳过其渲染部分。

267. ### 安全地使用索引作为键的条件是什么？

     有三个条件可以确保，使用索引作为键是安全的：
     1. 列表项是静态的，它们不会被计算，也不会更改。
     2. 列表中的列表项没有 ids 属性。
     3. 列表不会被重新排序或筛选。

268. ### keys 是否需要全局唯一？

     数组中使用的键在其同级中应该是唯一的，但它们不需要是全局唯一的。也就是说，您可以在两个不同的数组中使用相同的键。例如，下面的 book 组件在不同的组件中使用相同的数组：

     ```javascript
     function Book(props) {
       const index = (
         <ul>
           {props.pages.map((page) =>
             <li key={page.id}>
               {page.title}
             </li>
           )}
         </ul>
       );
       const content = props.pages.map((page) =>
         <div key={page.id}>
           <h3>{page.title}</h3>
           <p>{page.content}</p>
           <p>{page.pageNumber}</p>
         </div>
       );
       return (
         <div>
           {index}
           <hr />
           {content}
         </div>
       );
     }
     ```

269. ### 用于表单处理的流行选择是什么？

     Formik 是一个用于 React 的表单库，它提供验证、跟踪访问字段和处理表单提交等解决方案。具体来说，您可以按以下方式对它们进行分类：

     1. 获取表单状态输入和输出的值。
     2. 表单验证和错误消息。
     3. 处理表单提交。

     它用于创建一个具有最小 API 的可伸缩、性能良好的表单助手，以解决令人讨厌的问题。

270. ### formik 相对于其他 redux 表单库有什么优势？

     下面是建议使用 formik 而不是 redux 表单库的主要原因：

     1. 表单状态本质上是短期的和局部的，因此不需要在 redux（或任何类型的flux库）中跟踪它。
     2. 每次按一个键，Redux-Form 都会多次调用整个顶级 Redux Reducer。这样就增加了大型应用程序的输入延迟。
     3. 经过 gzip 压缩过的 Redux-Form 为 22.5 kB，而 Formik 只有 12.7 kB

271. ### 为什么不需要使用继承？

     在 React 中，建议使用组合而不是继承来重用组件之间的代码。Props 和 composition 都为您提供了以一种明确和安全的方式自定义组件外观和行为所需的灵活性。但是，如果您希望在组件之间复用非 UI 功能，建议将其提取到单独的 JavaScript 模块中。之后的组件导入它并使用该函数、对象或类，而不需扩展它。

272. ### 我可以在 React 应用程序中可以使用 web components 么？

     是的，您可以在 React 应用程序中使用 Web Components。尽管许多开发人员不会使用这种组合方式，但如果您使用的是使用 Web Components 编写的第三方 UI 组件，则可能需要这种组合。例如，让我们使用 Vaadin 提供的 Web Components 日期选择器组件：

     ```javascript
     import React, { Component } from 'react';
     import './App.css';
     import '@vaadin/vaadin-date-picker';

     class App extends Component {
       render() {
         return (
           <div className="App">
             <vaadin-date-picker label="When were you born?"></vaadin-date-picker>
           </div>
         );
       }
     }

     export default App;
     ```

273. ### 什么是 dynamic import？

     dynamic import() 语法是 ECMAScript 提案，目前不属于语言标准的一部分。它有望在不久的将来被采纳。在你的应用程序中，你可以使用 dynamic import() 来实现代码拆分。让我们举一个加法的例子：

     1. **Normal Import**
     ```javascript
     import { add } from './math';
     console.log(add(10, 20));
     ```

     2. **Dynamic Import**
     ```javascript
     import("./math").then(math => {
       console.log(math.add(10, 20));
     });
     ```

274. ### 什么是 loadable 组件？

     如果你想要在服务端渲染的应用程序中实现代码拆分，建议使用 Loadable 组件，因为 React.lazy 和 Suspense 还不可用于服务器端渲染。Loadable 允许你将动态导入的组件作为常规的组件进行渲染。让我们举一个例子：

     ```javascript
     import loadable from '@loadable/component'

     const OtherComponent = loadable(() => import('./OtherComponent'))

     function MyComponent() {
       return (
         <div>
           <OtherComponent />
         </div>
       )
     }
     ```

     现在，其他组件将以单独的包进行加载。

275. ### 什么是 suspense 组件？

     如果父组件在渲染时包含 dynamic import 的模块尚未加载完成，在此加载过程中，你必须使用一个 loading 指示器显示后备内容。这可以使用 **Suspense** 组件来实现。例如，下面的代码使用 Suspense 组件：

     ```javascript
     const OtherComponent = React.lazy(() => import('./OtherComponent'));

     function MyComponent() {
       return (
         <div>
           <Suspense fallback={<div>Loading...</div>}>
             <OtherComponent />
           </Suspense>
         </div>
       );
     }
     ```

     正如上面的代码中所展示的，懒加载的组件被包装在 Suspense 组件中。

276. ### 什么是基于路由的代码拆分？

     进行代码拆分的最佳位置之一是路由。整个页面将立即重新渲染，因此用户不太可能同时与页面中的其他元素进行交互。因此，用户体验不会受到干扰。让我们以基于路由的网站为例，使用像 React Router 和 React.lazy 这样的库：

     ```javascript
     import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
     import React, { Suspense, lazy } from 'react';

     const Home = lazy(() => import('./routes/Home'));
     const About = lazy(() => import('./routes/About'));

     const App = () => (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
           </Switch>
         </Suspense>
       </Router>
     );
     ```

     在上面的代码中，代码拆分将发生在每个路由层级。

277. ### 举例说明如何使用 context？

     **Context** 旨在共享可被视为全局的数据，用于 React 组件树。例如，在下面的代码中，允许手动通过一个 theme 属性来设置按钮组件的样式。

     ```javascript
     //Lets create a context with a default theme value "luna"
     const ThemeContext = React.createContext('luna');
     // Create App component where it uses provider to pass theme value in the tree
     class App extends React.Component {
       render() {
         return (
           <ThemeContext.Provider value="nova">
             <Toolbar />
           </ThemeContext.Provider>
         );
       }
     }
     // A middle component where you don't need to pass theme prop anymore
     function Toolbar(props) {
       return (
         <div>
           <ThemedButton />
         </div>
       );
     }
     // Lets read theme value in the button component to use
     class ThemedButton extends React.Component {
       static contextType = ThemeContext;
       render() {
         return <Button theme={this.context} />;
       }
     }
     ```

278. ### 在 context 中默认值的目的是什么？

     当在组件树中的组件没有匹配到在其上方的 Provider 时，才会使用 defaultValue 参数。这有助于在不包装组件的情况下单独测试组件。下面的代码段提供了默认的主题值 Luna。

     ```javascript
     const defaultTheme = "Luna"；
     const MyContext = React.createContext(defaultTheme);
     ```

279. ### 你是怎么使用 contextType？

     ContextType 用于消费 context 对象。ContextType 属性可以通过两种方式使用：

     1. **contextType as property of class:**
     可以为类的 contextType 属性分配通过 React.createContext() 创建的 context 对象。之后，您可以在任何生命周期方法和 render 函数中使用 `this.context` 引用该上下文类型最近的当前值。

     让我们在 MyClass 上按如下方式设置 contextType 属性：

     ```javascript
     class MyClass extends React.Component {
       componentDidMount() {
         let value = this.context;
         /* perform a side-effect at mount using the value of MyContext */
       }
       componentDidUpdate() {
         let value = this.context;
         /* ... */
       }
       componentWillUnmount() {
         let value = this.context;
         /* ... */
       }
       render() {
         let value = this.context;
         /* render something based on the value of MyContext */
       }
     }
     MyClass.contextType = MyContext;
     ```

     2. **Static field**
     你可以使用静态类属性来初始化 contextType 属性：

     ```javascript
     class MyClass extends React.Component {
       static contextType = MyContext;
       render() {
         let value = this.context;
         /* render something based on the value */
       }
     }
     ```

280. ### 什么是 consumer？

     Consumer 是一个订阅上下文更改的 React 组件。它需要一个函数作为子元素，该函数接收当前上下文的值作为参数，并返回一个 React 元素。传递给函数 value 参数的参数值将等于在组件树中当前组件最近的 Provider 元素的 value 属性值。举个简单的例子：

     ```javascript
     <MyContext.Consumer>
       {value => /* render something based on the context value */}
     </MyContext.Consumer>
     ```

281. ### How do you solve performance corner cases while using context?

     The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders. For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

     ```javascript
     class App extends React.Component {
       render() {
         return (
           <Provider value={{something: 'something'}}>
             <Toolbar />
           </Provider>
         );
       }
     }
     ```

     This can be solved by lifting up the value to parent state,

     ```javascript
     class App extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: {something: 'something'},
         };
       }

       render() {
         return (
           <Provider value={this.state.value}>
             <Toolbar />
           </Provider>
         );
       }
     }
     ```
282. ### What is the purpose of forward ref in HOCs?

     Refs will not get passed through because ref is not a prop. It handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

     The below HOC logs all props,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         componentDidUpdate(prevProps) {
           console.log('old props:', prevProps);
           console.log('new props:', this.props);
         }

         render() {
           const {forwardedRef, ...rest} = this.props;

           // Assign the custom prop "forwardedRef" as a ref
           return <Component ref={forwardedRef} {...rest} />;
         }
       }

       return React.forwardRef((props, ref) => {
         return <LogProps {...props} forwardedRef={ref} />;
       });
     }
     ```

     Let's use this HOC to log all props that get passed to our “fancy button” component,

     ```javascript
     class FancyButton extends React.Component {
       focus() {
         // ...
       }

       // ...
     }
     export default logProps(FancyButton);
     ```

     Now lets create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

     ```javascript
     import FancyButton from './FancyButton';

     const ref = React.createRef();
     ref.current.focus();
     <FancyButton
       label="Click Me"
       handleClick={handleClick}
       ref={ref}
     />;
     ```

283. ### ref 参数对于所有函数或类组件是否可用？

     常规函数或类组件不会接收到 ref 参数，并且 ref 在 props 中也不可用。只有在使用 React.forwardRef 定义组件时，才存在第二个 ref 参数。

284. ### 在组件库中当使用 forward refs 时，你需要额外的注意？

     当您开始在组件库中使用 forwardRef 时，您应该将其视为一个破坏性的更改，并为库发布一个新的主要版本。这是因为您的库可能具有不同的行为，如已分配了哪些引用，以及导出哪些类型。这些更改可能会破坏依赖于旧行为的应用程序和其他库。

285. ### 如何在没有 ES6 的情况下创建 React 类组件

     如果您不使用 ES6，那么您可能需要使用 create-react-class 模块。对于默认属性，你需要在传递对象上定义 getDefaultProps() 函数。而对于初始状态，必须提供返回初始状态的单独 getInitialState 方法。

     ```javascript
     var Greeting = createReactClass({
       getDefaultProps: function() {
           return {
             name: 'Jhohn'
           };
         },
       getInitialState: function() {
           return {message: this.props.message};
         },
       handleClick: function() {
          console.log(this.state.message);
       },
       render: function() {
         return <h1>Hello, {this.props.name}</h1>;
       }
     });
     ```

     **注意：** 如果使用 createReactClass，则所有方法都会自动绑定。也就是说，您不需要在事件处理程序的构造函数中使用 .bind(this)。

286. ### 是否可以在没有 JSX 的情况下使用 React？

     是的，使用 React 不强制使用 JSX。实际上，当您不想在构建环境中配置编译环境时，这是很方便的。每个 JSX 元素只是调用 React.createElement(component, props, ...children) 的语法糖。例如，让我们来看一下使用 JSX 的 greeting 示例：

     ```jsx
     class Greeting extends React.Component {
       render() {
         return <div>Hello {this.props.message}</div>;
       }
     }

     ReactDOM.render(
       <Greeting message="World" />,
       document.getElementById('root')
     );
     ```

     你可以在没有 JSX 的情况下编写相同的功能，如下所示：

     ```javascript
     class Greeting extends React.Component {
       render() {
         return React.createElement('div', null, `Hello ${this.props.message}`);
       }
     }

     ReactDOM.render(
       React.createElement(Greeting, {message: 'World'}, null),
       document.getElementById('root')
     );
     ```

287. ### What is diffing algorithm?

     React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.
     In this case, for displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:
     1. Two elements of different types will produce different trees.
     2. The developer can hint at which child elements may be stable across different renders with a key prop.

288. ### What are the rules covered by diffing algorithm?

     When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconsilation algorithm,

     1. **Elements Of Different Types:**
        Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example,  elements <a> to <img>, or from <Article> to <Comment> of different types lead a full rebuild.
     2. **DOM Elements Of The Same Type:**
        When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM eleemnts except className attribute,
        ```javascript
        <div className="show" title="ReactJS" />

        <div className="hide" title="ReactJS" />
        ```
     3. **Component Elements Of The Same Type:**
        When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.
     4. **Recursing On Children:**
        when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.
        ```javascript
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>

        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>

        ```
     5. **Handling keys:**
     React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,
     ```javascript
     <ul>
       <li key="2015">Duke</li>
       <li key="2016">Villanova</li>
     </ul>

     <ul>
       <li key="2014">Connecticut</li>
       <li key="2015">Duke</li>
       <li key="2016">Villanova</li>
     </ul>
     ```
289. ### 你什么时候需要使用 refs？

     这里是 refs 的一些使用场景：

     1. 管理聚焦、文本选择或媒体播放。
     2. 触发命令式动画。
     3. 与第三方 DOM 库集成。

290. ### Is it prop must be named as render for render props?

     Even though the pattern named render props, you don’t have to use a prop named render to use this pattern. i.e,  Any prop that is a function that a component uses to know what to render is technically a “render prop”. Lets take an example with the children prop for render props,

     ```javascript
     <Mouse children={mouse => (
       <p>The mouse position is {mouse.x}, {mouse.y}</p>
     )}/>
     ```

     Actually children prop doesn’t need to be named in the list of “attributes” in JSX element. Instead, you can keep it directly inside element,

     ```javascript
     <Mouse>
       {mouse => (
         <p>The mouse position is {mouse.x}, {mouse.y}</p>
       )}
     </Mouse>
     ```

     While using this above technique(without any name), explicitly state that children should be a function in your propTypes.

     ```javascript
     Mouse.propTypes = {
       children: PropTypes.func.isRequired
     };
     ```

291. ### 在 Pure Component 中使用渲染属性会有什么问题？

     如果在渲染方法中创建函数，则会否定纯组件的用途。因为浅属性比较对于新属性总是返回 false，在这种情况下，每次渲染都将为渲染属性生成一个新值。您可以通过将渲染函数定义为实例方法来解决这个问题。

292. ### 如何使用渲染属性创建 HOC？

     可以使用带有渲染属性的常规组件实现大多数高阶组件（HOC）。例如，如果希望使用 withMouse HOC 而不是 <Mouse> 组件，则你可以使用带有渲染属性的常规 <Mouse> 组件轻松创建一个 HOC 组件。

     ```javascript
     function withMouse(Component) {
       return class extends React.Component {
         render() {
           return (
             <Mouse render={mouse => (
               <Component {...this.props} mouse={mouse} />
             )}/>
           );
         }
       }
     }
     ```

293. ### 什么是 windowing 技术？

     Windowing 是一种技术，它在任何给定时间只呈现一小部分行，并且可以显著减少重新呈现组件所需的时间以及创建的 DOM 节点的数量。如果应用程序呈现长的数据列表，则建议使用此技术。react-window 和 react-virtualized 都是常用的 windowing 库，它提供了几个可重用的组件，用于显示列表、网格和表格数据。

294. ### 你如何在 JSX 中打印 falsy 值？

     Falsy 值比如 false，null，undefined 是有效的子元素，但它们不会呈现任何内容。如果仍要显示它们，则需要将其转换为字符串。我们来举一个如何转换为字符串的例子：

     ```javascript
     <div>
       My JavaScript variable is {String(myVariable)}.
     </div>
     ```

295. ### portals 的典型使用场景是什么?

     当父组件拥有 `overflow: hidden` 或含有影响堆叠上下文的属性（z-index、position、opacity 等样式），且需要脱离它的容器进行展示时，React portal 就非常有用。例如，对话框、全局消息通知、悬停卡和工具提示。

296. ### How do you set default value for uncontrolled component?

     In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a **defaultValue** attribute instead of **value**.

     ```javascript
     render() {
       return (
         <form onSubmit={this.handleSubmit}>
           <label>
             User Name:
             <input
               defaultValue="John"
               type="text"
               ref={this.input} />
           </label>
           <input type="submit" value="Submit" />
         </form>
       );
     }
     ```

     The same applies for `select` and `textArea` inputs. But you need to use **defaultChecked** for `checkbox` and `radio` inputs.

297. ### 你最喜欢的 React 技术栈是什么?

     尽管技术栈因开发人员而异，但最流行的技术栈用于 React boilerplate 项目代码中。它主要使用 redux 和 redux saga 进行状态管理和具有副作用的异步操作，使用 react-router 进行路由管理，使用 styled-components 库开发 React 组件，使用 axios 调用 REST api，以及其他支持的技术栈，如 webpack、reseselect、esnext、babel 等。

     你可以克隆 [https://github.com/react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) 并开始开发任何新的 React 项目。

298. ### Real DOM 和 Virtual DOM 有什么区别？
     以下是Real DOM和Virtual DOM之间的主要区别：

     | Real DOM | Virtual DOM |
     | ----- | ------- |
     | 更新速度慢 | 更新速度快 |
     | DOM 操作非常昂贵 | DOM 操作非常简单 |
     | 可以直接更新 HTML | 你不能直接更新 HTML |
     | 造成太多内存浪费 | 更少的内存消耗 |
     | 如果元素更新了，创建新的 DOM 节点 | 如果元素更新，则更新 JSX 元素 |

299. ### 如何为 React 应用程序添加 bootstrap？

     Bootstrap 可以通过三种可能的方式添加到 React 应用程序中：
     1. 使用 Bootstrap CDN:
        这是添加 bootstrap 最简单的方式。在 head 标签中添加 bootstrap 相应的 CSS 和 JS 资源。
     2. 把 Bootstrap 作为依赖项：
        如果您使用的是构建工具或模块绑定器（如Webpack），那么这是向 React 应用程序添加 bootstrap 的首选选项。
        ```shell
        npm install bootstrap
        ``
        ```
     3. 使用 React Bootstrap 包:
        在这种情况下，您可以将 Bootstrap 添加到我们的 React 应用程序中，方法是使用一个以 React 组件形式对 Bootstrap 组件进行包装后包。下面的包在此类别中很流行：
        1. react-bootstrap
        2. reactstrap

300. ### 您能否列出使用 React 作为前端框架的顶级网站或应用程序？

     以下是使用 React 作为前端框架的前 10 个网站：

     1. Facebook
     2. Uber
     3. Instagram
     4. WhatsApp
     5. Khan Academy
     6. Airbnb
     7. Dropbox
     8. Flipboard
     9. Netflix
     10. PayPal

301. ### 是否建议在 React 中使用 CSS In JS 技术？

     React 对如何定义样式没有任何意见，但如果您是初学者，那么好的起点是像往常一样在单独的 *.css 文件中定义样式，并使用类名引用它们。此功能不是 React 的一部分，而是来自第三方库。但是如果您想尝试不同的方法（JS中的CSS），那么 styled-components 库是一个不错的选择。