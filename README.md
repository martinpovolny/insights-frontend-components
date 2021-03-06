[![Build Status](https://travis-ci.org/RedHatInsights/insights-frontend-components.svg?branch=master)](https://travis-ci.org/RedHatInsights/insights-chrome)
[![npm version](https://badge.fury.io/js/%40red-hat-insights%2Finsights-frontend-components.svg)](https://badge.fury.io/js/%40red-hat-insights%2Finsights-frontend-components)

# insights-frontend-components
Red Hat Insights Components for applications in a React.js environment

## Usage
npm install: `npm install @red-hat-insights/insights-frontend-components`

### Imports
Component
`import { Component } from 'node_modules/@red-hat-insights/insights-frontend-components`

SCSS
`@import '~@red-hat-insights/insights-frontend-components/index.css';`


## Development
Create a component inside of the PresentationalComponent folder

Structure
```
PresentationalComponents
└───YourComponent
    ├─── index.js
    ├─── your-component.js
    └─── your-component.scss
```

Build: `npm run build`
Test: `npm run test`

There is also a playground for any development
`npm run playground`

## Documentation Links
* Utils
    * [Redux](doc/utils/redux.md)
* Components
    * [Sample Component](doc/components/sample.md)
    * [Page Header](doc/components/page_header.md)
    * [Section](doc/components/section.md)
    * [Pagination](doc/components/pagination.md)
    * [Dropdown](doc/components/Dropdown.md)
    * [Table](doc/components/Table.md)
    * [Breadcrumbs](doc/components/breadcrumbs.md)

## Conbribution
### Commit format
[Semantic release](https://github.com/semantic-release/semantic-release) is used in this project, so to trigger new release you should add specific format into your commit messages and new release will be triggered when PR is merged.

#### Used formatter
[Commit analyzer wildcard](https://github.com/karelhala/commit-analyzer-wildcard) is used for parsing commit messages so to trigger new release add one of these strings into your commit and new release is triggered
* Major - `<x.x.x>` or `<x.x.?>` or `<x.?.x>` or `<x.?.?>`
* Minor - `<?.x.x>` or `<?.x.?>`
* Bug - `<?.?.x>`
* No release - `<no>`
