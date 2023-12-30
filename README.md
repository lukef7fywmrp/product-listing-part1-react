<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>PRODUCT-LISTING-PART1-REACT</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite" />

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/lukef7fywmrp/product-listing-part1-react?style=flat&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/lukef7fywmrp/product-listing-part1-react?style=flat&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/lukef7fywmrp/product-listing-part1-react?style=flat&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/lukef7fywmrp/product-listing-part1-react?style=flat&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running product-listing-part1-react](#-running-product-listing-part1-react)
  - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

## The repository contains a Next.js web app for product listing. It provides interactive product listing components, including a product list, price info, product cards, and detailed product info. It utilizes various utilities and data definitions, and offers an efficient toolset for eCommerce websites, prioritizing UX with elements like tooltips, badges, and scrollable areas. Its comprehensive ESLint and TypeScript configurations ensure code quality and type safety, while Tailwind CSS and PostCSS handle aesthetics and style management.

## 📦 Features

- **_Feature 1_**: Interactive product listing components.
- **_Feature 2_**: Product list, price info, product cards, and detailed product info.
- **_Feature 3_**: Utilities and data definitions.
- **_Feature 4_**: Toolset for eCommerce websites.
- **_Feature 5_**: UX elements like tooltips, badges, and scrollable areas.
- **_Feature 6_**: ESLint and TypeScript configurations.
- **_Feature 7_**: Tailwind CSS and PostCSS for aesthetics and style management.

---

## 📂 Repository Structure

```sh
└── product-listing-part1-react/
    ├── .eslintrc.cjs
    ├── components.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public/
    ├── src/
    │   ├── App.tsx
    │   ├── components/
    │   │   ├── PriceInfo.tsx
    │   │   ├── ProductCard.tsx
    │   │   ├── ProductDetail.tsx
    │   │   ├── ProductInfo.tsx
    │   │   ├── ProductListing.tsx
    │   │   ├── ProductSkeleton.tsx
    │   │   └── ui/
    │   ├── index.css
    │   ├── lib/
    │   │   ├── definitions.ts
    │   │   └── utils.ts
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

```

---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tsconfig.node.json](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/tsconfig.node.json) | The provided code is a part of a React project for a product listing application, structured with TypeScript. The application contains components for product info, price, details, and a placeholder skeleton. The tsconfig.node.json file illustrates configurations for the TypeScript compiler, enabling settings like composite compilation, skipping library checks, and allowing synthetic default imports, specifically for the vite.config.ts file.                                                                                                    |
| [index.html](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/index.html)                 | The code depicts a React TypeScript project structure with Tailwind CSS for a product listing feature. The primary functionalities include displaying product details, prices, and a product list. It utilizes components (ProductCard, ProductDetail, etc.) to modularize these functionalities. The project utilizes ESLint for maintaining code consistency and Vite for build tooling and development server. The HTML file serves as a template and loads the main script from main.tsx.                                                                   |
| [components.json](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/components.json)       | The code implements a project structure for a React application for product listing, with several components like ProductCard, ProductDetail, and ProductInfo. The `components.json` configures the project's UI style, enabling typescript (tsx), and integrating Tailwind CSS for styling. It establishes path aliases for the components and utility functions. ESLint and PostCSS configurations are set, while TypeScript is configured with vite for a faster development environment.                                                                    |
| [package-lock.json](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/package-lock.json)   | The code provided is related to a React project structure, which is built around a product listing application. The main functionalities include product information and details, price information, product card, and product listing. This is further complemented by a set of dependent libraries mentioned in the package-lock.json file, for example, react, react-dom, and react-router-dom, that facilitates the web application's interaction and routing. The code also implies usage of TypeScript, with configuration files present.                 |
| [tailwind.config.js](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/tailwind.config.js) | The code provided presents the configuration for Tailwind CSS within a React-based product listing project. It tailors aspects such as dark mode, content paths, theme customization for things like containers, colors, border radius, and animations. Additionally, it includes animation keyframe definitions for two accordion effects, and extends Tailwind's animation utility for the same. The code also utilizes a plugin for animation-related CSS classes.                                                                                           |
| [vite.config.ts](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/vite.config.ts)         | This code defines the configuration for a Vite development server. It primarily incorporates the React-SWC plugin, sets an alias for the src directory, and excludes the js-big-decimal package from the dependency optimization process. It is part of a broader project structure that includes various PRODUCT-related components written in React & TypeScript, together with Tailwind for styling, ESLint for linting, PostCSS for post-processing CSS, and configurations for TypeScript.                                                                 |
| [tsconfig.json](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/tsconfig.json)           | The code represents the TypeScript configuration of a React project handled with Vite. It targets ES2020, uses modern development features, and configures JSX for React. It uses several linting rules to ensure code quality and specifies module resolution using a bundler. The resolved paths include the source directory, allowing module imports from there. Finally, it references a secondary TypeScript configuration, specifically for the Node.js environment.                                                                                     |
| [.eslintrc.cjs](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/.eslintrc.cjs)           | This is a React project called product-listing-part1-react, which has various components for product listing functionality. While the src directory contains source files and components, App.tsx is the main file that includes all the components. The ESLint configuration file.eslintrc.cjs ensures quality code by enforcing coding conventions. It is configured for TypeScript and React-hooks in a browser environment with ES2020 support. It also utilizes the react-refresh plugin for fast refresh in a development environment.                    |
| [package.json](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/package.json)             | This is a React.js project, structured for a Product Listing feature, having separate component files for product details such as price, card view, and listing. The package.json file shows dependencies primarily focused on UI (e.g., Tailwind CSS, radix-ui), image handling (react-image-gallery), navigation (react-router-dom), and state management (React). The scripts indicate development, build, linting, and preview tasks. Typescript is used, suggesting strong typing enforcement, with eslint and vite for linting and bundling respectively. |
| [postcss.config.js](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/postcss.config.js)   | The code is an extract from a React project structure, focusing on the postcss.config.js file, which is responsible for configuring PostCSS plugins. In this case, it's set up with two plugins — TailwindCSS for utility-first CSS and Autoprefixer to add vendor prefixes to CSS rules, enabling the rules to work with different browsers.                                                                                                                                                                                                                   |

</details>

<details closed><summary>Src</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vite-env.d.ts](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/vite-env.d.ts) | The given code represents a directory structure for a React application, specifically for a product listing feature. The application includes JavaScript, TypeScript, and CSS files organized in a typical structure featuring src for source code, public for static assets, and components, where the UI parts of the application are stored. The provided TS code snippet references vite/client in a Vite environment providing compatibility with Vite's client module.                                                  |
| [App.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/App.tsx)             | The code defines the main application component of a product listing application using React. It sets up routing in the application with a home route that renders a ProductListing component and a product-specific route that renders a ProductDetail component. The application also includes a Toaster component for user notifications. The accompanying directory tree indicates a structured React application with defined component, utility, and configuration files.                                               |
| [index.css](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/index.css)         | The provided code is a CSS file using the Tailwind CSS utility-first framework. It defines global styles for two different themes: light and dark. These styles include color variables for background, foreground, buttons, popovers, and borders, among other elements. Additionally, custom styles for the `body` tag, as well as `image-gallery-thumbnail` class, are defined. The color scheme can be toggled using the `.dark` class, changing all predefined styles to their dark mode counterparts.                   |
| [main.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/main.tsx)           | The provided code is the main entry point of a React application for a product listing page. It imports the main application component (App.tsx) and the global CSS file (index.css). It utilizes ReactDOM to render the App component within the StrictMode wrapper at the root element of the HTML document, enhancing error detection during the development phase. The directory tree also indicates the presence of product-related components, utility files, configurations for TypeScript, ESLint, PostCSS, and Vite. |

</details>

<details closed><summary>Components</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PriceInfo.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/PriceInfo.tsx)             | The given `PriceInfo` component in React is responsible for presenting the product price inclusive of VAT on a product listing page. It displays the price, a shopping bag icon, and logos of secondary platforms where the product is also available. Each logo is interactive, showing a tooltip with the platform name when hovered over. This component enhances the shopping user experience by providing price and additional purchasing platform information. |
| [ProductCard.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ProductCard.tsx)         | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [ProductDetail.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ProductDetail.tsx)     | The ProductDetail.tsx file in the React application is designed to fetch and display detailed information about a specific product. It utilizes the product's ID to request information from a fake API, handling loading and error states, and rendering the product details when successful. The details include the product's title, image, price, stock status, and a description, along with a back button and a checkout button.                               |
| [ProductInfo.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ProductInfo.tsx)         | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [ProductListing.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ProductListing.tsx)   | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [ProductSkeleton.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ProductSkeleton.tsx) | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                            |

</details>

<details closed><summary>Ui</summary>

| File                                                                                                                       | Summary                   |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [scroll-area.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/scroll-area.tsx) | HTTPStatus Exception: 429 |
| [sonner.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/sonner.tsx)           | HTTPStatus Exception: 429 |
| [skeleton.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/skeleton.tsx)       | HTTPStatus Exception: 429 |
| [card.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/card.tsx)               | HTTPStatus Exception: 429 |
| [button.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/button.tsx)           | HTTPStatus Exception: 429 |
| [badge.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/badge.tsx)             | HTTPStatus Exception: 429 |
| [tooltip.tsx](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/components/ui/tooltip.tsx)         | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Lib</summary>

| File                                                                                                           | Summary                   |
| -------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [utils.ts](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/lib/utils.ts)             | HTTPStatus Exception: 429 |
| [definitions.ts](https://github.com/lukef7fywmrp/product-listing-part1-react/blob/main/src/lib/definitions.ts) | HTTPStatus Exception: 429 |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the product-listing-part1-react repository:

```sh
git clone https://github.com/lukef7fywmrp/product-listing-part1-react.git
```

2. Change to the project directory:

```sh
cd product-listing-part1-react
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running product-listing-part1-react

```sh
npm run dev
```

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

[**Return**](#Top)

---
