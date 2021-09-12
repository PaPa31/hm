---
id: github-issue-update-docusaurus-to-beta
title: Github Issue Update Docusaurus to beta
date: 2021-09-09 23:14:44
---

:::caution
My error is gone!
:::

<!--

  ! PLEASE HELP US HELP YOU !

  Make it obvious to understand and reproduce this bug.
  Ideally, we should be able to understand it without running any code.

  Bugs are fixed faster if you include:
  - a repro repository to inspect the code
  - an url to see the problem live (if possible)

  Pro tip: create a reproducible demo of the bug with https://new.docusaurus.io

-->

## 🐛 Bug Report

### Prerequisites

<!--
IMPORTANT: Please check the following items before creating a issue.
Mark the checkbox by putting an X between the bracket.
This way we know you've done these steps first.
-->

- [x] I'm using the latest version of Docusaurus.
- [x] I have tried the `npm run clear` or `yarn clear` command.
- [x] I have tried `rm -rf node_modules yarn.lock package-lock.json` and re-installing packages.
- [x] I have tried creating a repro with https://new.docusaurus.io
- [x] I have read the console error message carefully (if applicable)

### Description

I have a working `2.0.0-alpha.72` Docusaurus version.
I tried to update Docusaurus to `2.0.0-beta.6` version, but I got the error:

```bash
Invalid sidebar file at "sidebars.auto.js".
```

I have these dependencies in `package.json`:

```bash
 "dependencies": {
    "@docusaurus/core": "^2.0.0-beta.6",
    "@docusaurus/preset-classic": "^2.0.0-beta.6",
    "@docusaurus/remark-plugin-npm2yarn": "^2.0.0-beta.6",
    "@docusaurus/theme-live-codeblock": "^2.0.0-beta.6",
    "@mdx-js/react": "^1.6.21",
    "clsx": "^1.1.1",
    "docusaurus-lunr-search": "^2.1.10",
    "docusaurus-plugin-auto-sidebars": "^1.0.7",
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  },
```

and I understand that this dependency: `"docusaurus-plugin-auto-sidebars": "^1.0.7"` is probably causing this error.
But I can't stop using this plugin. My site is big. And I want that it will more and more. And

### Have you read the [Contributing Guidelines on issues](https://github.com/facebook/docusaurus/blob/main/CONTRIBUTING.md#reporting-new-issues)?

Yes

## Steps to reproduce

Use https://new.docusaurus.io to create a CodeSandbox reproducible demo of the bug.

**I get an error**: Only a max of 500 modules is allowed in a sandbox

My Docusaurus site is big. I counted 513 articles.

If you want to reproduce my situation, you can just fork my [repo](https://github.com/PaPa31/hm) (github.com/PaPa31/hm), open package.json, change 4 lines (from `2.0.0-alpha.72` to `2.0.0-beta.6`) and run `npm ci` (analogous `rm -rf node_modules package-lock.json` and `npm install`, but in only one command). And run: `npm start`.

## Expected behavior

<!--
  How did you expect your project to behave?
  It’s fine if you’re not sure your understanding is correct.
  Write down what you thought would happen.
-->

I don't know.

## Actual behavior

<!--
  Did something go wrong?
  Is something broken, or not behaving as you expected?
  Describe this section in detail, and attach screenshots if possible.
  Don't only say "it doesn't work"!
  Please submit exhaustive and complete log messages (we also need the error strack-traces, not just the message).
  Please read error messages carefully: it often tells you exactly what you are doing wrong
-->

1. Remove trash ...

```bash
/mnt/sdc2/Yandex.Disk-parsh/hm ⑂documentation* $ rm -rf node_modules/ package-lock.json 
```

2. Install dependencies ...

```bash
/mnt/sdc2/Yandex.Disk-parsh/hm ⑂documentation* $ npm i
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated mkdirp@0.3.0: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

added 1459 packages, and audited 1460 packages in 1m

210 packages are looking for funding
  run `npm fund` for details

24 vulnerabilities (20 moderate, 4 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```

3. Start dev server...

```bash
/mnt/sdc2/Yandex.Disk-parsh/hm ⑂documentation* $ npm run start

> notes@0.0.0 start
> cross-env BASE_URL='/hm/' docusaurus start

Starting the development server...
Loading of version failed for version "current"
Error: Invalid sidebar file at "sidebars.auto.js".
These sidebar document ids do not exist:
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-10-useful-resources-and-links
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-2-firebase-and-right-database
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-3-creating-firebase-project
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-4-creating-axios-instance
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-5-sending-post-request
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-6-displaying-spinner-while-sending-request
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-7-handling-errors
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-8-retrieving-data-from-backend
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-9-0-removing-old-interceptors
- courses/react-complete-guide/10-burger-builder-project-accessing-server/10-9-1-renaming-component-willmount
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-0-lesson
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-11-using-routing-related-props
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-12-withrouter-hoc-and-route-props
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-14-absolute-vs-relative-paths-article
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-15-styling-active-route
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-16-passing-route-parameters
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-17-extracting-route-parameters
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-19-using-switch-to-load-single-route
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-2-routing-and-spas
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-20-navigation-programmatically
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-22-understanding-nested-routes
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-23-creating-dynamic-nested-routes
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-24-redirecting-requests
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-25-conditional-redirects
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-26-using-history-prop-to-redirect-replace
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-28-handling-404-case-unknown-routes
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-29-loading-routes-lazily
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-3-setting-up-links
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-30-lazy-loading-with-react-suspense
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-32-practice
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-34-useful-resources-and-links
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-4-setting-up-router-package
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-5-react-router-vs-react-router-dom
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-6-preparing-project-for-routing
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-7-setting-up-and-rendering-routes
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-8-rendering-components-for-routes
- courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-9-switching-between-pages
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-0-lesson
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-2-building-checkout-container
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-3-setting-up-routing-and-routes
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-4-navigation-to-checkout-page
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-5-navigation-back-and-to-next-page
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-6-passing-ingredients-via-query-params
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-7-navigating-to-contact-data-component
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-8-order-submission-and-passing-data-between-pages
- courses/react-complete-guide/12-adding-routing-to-burger-project/12-9-adding-orders-page
- courses/react-complete-guide/13-forms-and-form-validation/13-0-lesson
- courses/react-complete-guide/13-forms-and-form-validation/13-10-fixing-common-validation-gotcha
- courses/react-complete-guide/13-forms-and-form-validation/13-11-adding-validation-feedback
- courses/react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback
- courses/react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages
- courses/react-complete-guide/13-forms-and-form-validation/13-14-handling-overall-form-validity
- courses/react-complete-guide/13-forms-and-form-validation/13-17-useful-resources-and-links
- courses/react-complete-guide/13-forms-and-form-validation/13-3-creating-custom-dynamic-input-components
- courses/react-complete-guide/13-forms-and-form-validation/13-4-setting-up-js-config-for-form
- courses/react-complete-guide/13-forms-and-form-validation/13-5-dynamically-reate-inputs-base-on-js-config
- courses/react-complete-guide/13-forms-and-form-validation/13-6-adding-dropdown-component
- courses/react-complete-guide/13-forms-and-form-validation/13-7-handling-user-input
- courses/react-complete-guide/13-forms-and-form-validation/13-8-handling-form-submission
- courses/react-complete-guide/13-forms-and-form-validation/13-9-adding-custom-form-validation
- courses/react-complete-guide/14-redux/14-0-lesson
- courses/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component
- courses/react-complete-guide/14-redux/14-11-practice
- courses/react-complete-guide/14-redux/14-13-switching-case-in-reducer
- courses/react-complete-guide/14-redux/14-14-updating-state-immutably
- courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably
- courses/react-complete-guide/14-redux/14-16-immutable-update-patterns
- courses/react-complete-guide/14-redux/14-17-outsourcing-action-types
- courses/react-complete-guide/14-redux/14-18-combining-multiple-reducers
- courses/react-complete-guide/14-redux/14-19-understanding-state-types
- courses/react-complete-guide/14-redux/14-20-practice
- courses/react-complete-guide/14-redux/14-21-result-practice
- courses/react-complete-guide/14-redux/14-22-combining-local-ui-state-and-redux
- courses/react-complete-guide/14-redux/14-24-useful-resources-and-links
- courses/react-complete-guide/14-redux/14-4-understanding-redux-flow
- courses/react-complete-guide/14-redux/14-5-setting-up-reducer-and-store
- courses/react-complete-guide/14-redux/14-6-dispatching-actions
- courses/react-complete-guide/14-redux/14-7-adding-subscriptions
- courses/react-complete-guide/14-redux/14-8-connecting-react-to-redux
- courses/react-complete-guide/14-redux/14-9-connecting-store-to-react
- courses/react-complete-guide/15-add-redux-to-our-project/15-0-lesson
- courses/react-complete-guide/15-add-redux-to-our-project/15-2-installing-redux-and-react-redux
- courses/react-complete-guide/15-add-redux-to-our-project/15-3-basic-redux-setup
- courses/react-complete-guide/15-add-redux-to-our-project/15-4-finishing-reducer-for-ingredients
- courses/react-complete-guide/15-add-redux-to-our-project/15-5-connecting-burger-builder-container-to-our-store
- courses/react-complete-guide/15-add-redux-to-our-project/15-6-working-on-the-total-price-calculation
- courses/react-complete-guide/15-add-redux-to-our-project/15-7-redux-and-ui-state
- courses/react-complete-guide/15-add-redux-to-our-project/15-8-adjusting-checkout-and-contact-data
- courses/react-complete-guide/16-redux-advanced/16-0-lesson
- courses/react-complete-guide/16-redux-advanced/16-10-using-action-creators-and-get-state
- courses/react-complete-guide/16-redux-advanced/16-11-using-utility-functions
- courses/react-complete-guide/16-redux-advanced/16-12-linear-switch-case-statement
- courses/react-complete-guide/16-redux-advanced/16-16-useful-resources-and-links
- courses/react-complete-guide/16-redux-advanced/16-2-adding-middleware
- courses/react-complete-guide/16-redux-advanced/16-3-using-redux-devtools
- courses/react-complete-guide/16-redux-advanced/16-5-Introducing-action-creators
- courses/react-complete-guide/16-redux-advanced/16-6-action-creators-and-async-code
- courses/react-complete-guide/16-redux-advanced/16-7-handling-asynchronous-code
- courses/react-complete-guide/16-redux-advanced/16-8-restructuring-actions
- courses/react-complete-guide/16-redux-advanced/16-9-where-to-put-data-transforming-logic
- courses/react-complete-guide/17-redux-advanced-burger-project/17-0-lesson
- courses/react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions
- courses/react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer
- courses/react-complete-guide/17-redux-advanced-burger-project/17-12-working-on-order-actions
- courses/react-complete-guide/17-redux-advanced-burger-project/17-13-redirect-to-improve-ux
- courses/react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers
- courses/react-complete-guide/17-redux-advanced-burger-project/17-15-handling-purchases-and-updating-ui
- courses/react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases
- courses/react-complete-guide/17-redux-advanced-burger-project/17-17-fetching-orders-via-redux
- courses/react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers
- courses/react-complete-guide/17-redux-advanced-burger-project/17-2-installing-redux-devtools
- courses/react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued
- courses/react-complete-guide/17-redux-advanced-burger-project/17-3-preparing-folder-structure
- courses/react-complete-guide/17-redux-advanced-burger-project/17-4-creating-action-creators
- courses/react-complete-guide/17-redux-advanced-burger-project/17-5-executing-synchronous-code
- courses/react-complete-guide/17-redux-advanced-burger-project/17-6-fetching-ingredients-asynchronously
- courses/react-complete-guide/17-redux-advanced-burger-project/17-7-initializing-ingredients-in-burgerbuilder
- courses/react-complete-guide/17-redux-advanced-burger-project/17-8-changing-order-for-ingredients-manually
- courses/react-complete-guide/17-redux-advanced-burger-project/17-9-adding-order-actions
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-0-lesson
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-12-updating-the-ui-depending-on-auth-state
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-13-adding-a-logout-link
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-16-persistent-auth-state-with-local-storage
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-17-fixing-connect-plus-routing-errors
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-19-guarding-routes
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-2-understanding-authentication-in-single-page-application
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-3-required-app-adjustments
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-4-adding-an-auth-form
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-5-adding-actions
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-6-getting-a-token-from-backend
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-7-adding-sign-in
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-8-storing-the-token
- courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-9-adding-a-spinner
- courses/react-complete-guide/19-improving-our-burger-project/19-0-lesson
- courses/react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage
- courses/react-complete-guide/2-next-gen-javascript/next-gen-javascript-summary
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-0-lesson
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-12-working-with-props
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-13-children-prop
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-15-props-and-state
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-16-handling-events-with-methods
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-17-listenable-events
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-18-manipulating-state
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-19-function-components-naming
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-20-usestate-hook
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-22-passing-methods-between-components
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-23-adding-two-way-binding
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-25-working-with-inline-styles
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-26-practice-task
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-28-useful-resources
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-3-0-create-new-react-app
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-3-1-0-pure-react
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-3-1-1-react-with-jsx
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-3-2-0-using-create-react-app
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-3-2-1-react-script-error
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-4-1-ide-setup
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-4-2-initial-deploy
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-6-0-jsx
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-6-1-my-thoughts-about-jsx
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-7-jsx-restrictions
- courses/react-complete-guide/3-base-feature-syntax/Lessons/3-9-components-jsx-cheat-sheet
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-0-practice
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-1-create-components
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-10-add-styling
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-2-create-elements
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-3-create-nested-components
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-4-passing-data-through-props
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-5-add-state-to-class
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-6-add-event-handler-method
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-7-pass-method-reference
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-8-making-interactive-component
- courses/react-complete-guide/3-base-feature-syntax/Practice/3-9-add-two-way-binding
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-0-lesson
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-12-practice-solution
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-13-useful-resources
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-2-rendering-content-conditionally
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-3-handling-javascript-way
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-5-outputting-lists
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-6-lists-and-state
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-7-updating-state-immutably
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-8-lists-and-keys
- courses/react-complete-guide/4-lists-and-conditionals/Lessons/4-9-flexible-lists
- courses/react-complete-guide/4-lists-and-conditionals/Practice/4-0-practice
- courses/react-complete-guide/4-lists-and-conditionals/Practice/4-1-create-input-field
- courses/react-complete-guide/5-styling-react-components-and-elements/5-0-lesson
- courses/react-complete-guide/5-styling-react-components-and-elements/5-10-0-working-with-css-modules
- courses/react-complete-guide/5-styling-react-components-and-elements/5-10-1-0-css-modules-usage
- courses/react-complete-guide/5-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood
- courses/react-complete-guide/5-styling-react-components-and-elements/5-10-2-auto-generated-class-names
- courses/react-complete-guide/5-styling-react-components-and-elements/5-10-3-adding-class-selector
- courses/react-complete-guide/5-styling-react-components-and-elements/5-11-css-modules-and-media-queries
- courses/react-complete-guide/5-styling-react-components-and-elements/5-12-more-on-css-modules
- courses/react-complete-guide/5-styling-react-components-and-elements/5-13-useful-resources
- courses/react-complete-guide/5-styling-react-components-and-elements/5-3-setting-styles-dynamically
- courses/react-complete-guide/5-styling-react-components-and-elements/5-4-setting-class-names-dynamically
- courses/react-complete-guide/5-styling-react-components-and-elements/5-5-adding-and-using-radium
- courses/react-complete-guide/5-styling-react-components-and-elements/5-6-using-radium-for-media-queries
- courses/react-complete-guide/5-styling-react-components-and-elements/5-7-introducing-styled-components
- courses/react-complete-guide/5-styling-react-components-and-elements/5-8-more-on-styled-components
- courses/react-complete-guide/5-styling-react-components-and-elements/5-9-styled-components-and-dynamic-styles
- courses/react-complete-guide/6-debugging-react-apps/6-0-lesson
- courses/react-complete-guide/6-debugging-react-apps/6-5-using-error-boundaries
- courses/react-complete-guide/6-debugging-react-apps/6-7-useful-resources
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-0-lesson
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-11-controlling-useeffect-behavior
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-13-cleanup-work-with-useeffect-example
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-14-1-reference-vs-primitive-types
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-15-optimization-functional-components-with-react-memo
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-16-when-should-you-optimize
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-2-better-project-structure
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-20-windows-users-must-read
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-21-using-react-fragment
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-22-higher-order-components-hoc-intro
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-24-passing-unknown-props
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-25-setting-state-correctly
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-26-using-prop-types
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-27-using-refs
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-29-understanding-prop-chain-problems
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-3-splitting-app-into-components
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-30-using-context-api
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-33-useful-resources
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-4-comparing-stateless-and-stateful-components
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-5-class-based-vs-functional-components
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-6-class-component-lifecycle-overview
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-7-component-creation-lifecycle-in-action
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-8-0-component-update-lifecycle-for-props
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-8-1-component-update-lifecycle-in-action
- courses/react-complete-guide/7-diving-deeper-into-components-and-react-internals/7-9-component-update-lifecycle-state-changes
- courses/react-complete-guide/8-real-app-burger-builder/8-0-lesson
- courses/react-complete-guide/8-real-app-burger-builder/8-1-about-react-hooks
- courses/react-complete-guide/8-real-app-burger-builder/8-10-adding-dynamic-ingredient-component
- courses/react-complete-guide/8-real-app-burger-builder/8-11-adding-prop-type-validation
- courses/react-complete-guide/8-real-app-burger-builder/8-12-starting-burger-component
- courses/react-complete-guide/8-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically
- courses/react-complete-guide/8-real-app-burger-builder/8-14-calculating-ingredient-sum-dynamically
- courses/react-complete-guide/8-real-app-burger-builder/8-15-adding-build-control-component
- courses/react-complete-guide/8-real-app-burger-builder/8-16-outputting-multiple-build-controls
- courses/react-complete-guide/8-real-app-burger-builder/8-17-connecting-state-to-build-controls
- courses/react-complete-guide/8-real-app-burger-builder/8-18-removing-igredients-safely
- courses/react-complete-guide/8-real-app-burger-builder/8-19-displaying-and-updating-burger-price
- courses/react-complete-guide/8-real-app-burger-builder/8-20-adding-order-button
- courses/react-complete-guide/8-real-app-burger-builder/8-21-creating-order-summary-modal
- courses/react-complete-guide/8-real-app-burger-builder/8-22-showing-and-hiding-modal-with-animation
- courses/react-complete-guide/8-real-app-burger-builder/8-23-implementing-backdrop-component
- courses/react-complete-guide/8-real-app-burger-builder/8-24-adding-custom-button-component
- courses/react-complete-guide/8-real-app-burger-builder/8-25-implementing-button-component
- courses/react-complete-guide/8-real-app-burger-builder/8-26-adding-price-to-order-summary
- courses/react-complete-guide/8-real-app-burger-builder/8-27-adding-toolbar
- courses/react-complete-guide/8-real-app-burger-builder/8-28-using-logo
- courses/react-complete-guide/8-real-app-burger-builder/8-29-adding-reusable-navigation-items
- courses/react-complete-guide/8-real-app-burger-builder/8-3-planning-app-in-react
- courses/react-complete-guide/8-real-app-burger-builder/8-30-creating-responsive-sidedrawer
- courses/react-complete-guide/8-real-app-burger-builder/8-31-0-working-on-responsive-adjustments
- courses/react-complete-guide/8-real-app-burger-builder/8-31-1-working-on-responsive-adjustments
- courses/react-complete-guide/8-real-app-burger-builder/8-32-more-responsive-adjustments
- courses/react-complete-guide/8-real-app-burger-builder/8-33-reusing-backdrop
- courses/react-complete-guide/8-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button
- courses/react-complete-guide/8-real-app-burger-builder/8-35-adding-humburger-icon
- courses/react-complete-guide/8-real-app-burger-builder/8-38-improving-perfomance
- courses/react-complete-guide/8-real-app-burger-builder/8-4-planning-app-layout-and-component-tree
- courses/react-complete-guide/8-real-app-burger-builder/8-42-useful-resources-and-links
- courses/react-complete-guide/8-real-app-burger-builder/8-5-planing-state
- courses/react-complete-guide/8-real-app-burger-builder/8-6-must-read-enabling-css-module
- courses/react-complete-guide/8-real-app-burger-builder/8-7-setting-up-project
- courses/react-complete-guide/8-real-app-burger-builder/8-8-creating-layout-component
- courses/react-complete-guide/8-real-app-burger-builder/8-9-starting-implementation-burger-builder-container
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-0-lesson
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-10-sending-delete-request
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-12-handling-errors-locally
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-14-removing-interceptors
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-15-setting-default-global-configuration-for-axios
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-16-creating-and-using-axios-instances
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-18-useful-resources-and-links
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-3-understanding-project-and-intro-axios
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-4-creating-http-request-to-get-data
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-5-rendering-fetched-data-to-screen
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-6-transforming-data
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-7-making-post-selectable
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-8-fetching-data-on-update
- courses/react-complete-guide/9-reaching-out-web-http-ajax/9-9-posting-data-to-server

Available document ids are:
- api/love-project/love-project
- api/python3/python
- api/python3/venv-isolate-dependencies
- capture/capturing-video
- capture/recommended-resolution
- computer/components/adapters
- computer/components/audio-speakers
- computer/components/cables
- computer/components/components
- computer/components/cooler
- computer/components/coolers
- computer/components/cpu
- computer/components/disk
- computer/components/display
- computer/components/headphones
- computer/components/housing
- computer/components/keyboard
- computer/components/memory
- computer/components/microphone
- computer/components/motherboard
- computer/components/mouse
- computer/components/power-supply
- computer/components/sets
- computer/components/thermal-grease
- computer/components/videocard
- computer/components/webcam
- computer/components/wi-fi
- computer/new-computer-build
- computer/videos
- courses/0-all-courses
- courses/react-complete-guide/0-table-of-contents
- courses/react-complete-guide/add-redux-to-our-project/15-0-lesson
- courses/react-complete-guide/add-redux-to-our-project/15-2-installing-redux-and-react-redux
- courses/react-complete-guide/add-redux-to-our-project/15-3-basic-redux-setup
- courses/react-complete-guide/add-redux-to-our-project/15-4-finishing-reducer-for-ingredients
- courses/react-complete-guide/add-redux-to-our-project/15-5-connecting-burger-builder-container-to-our-store
- courses/react-complete-guide/add-redux-to-our-project/15-6-working-on-the-total-price-calculation
- courses/react-complete-guide/add-redux-to-our-project/15-7-redux-and-ui-state
- courses/react-complete-guide/add-redux-to-our-project/15-8-adjusting-checkout-and-contact-data
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-0-lesson
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-10-logging-users-out
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-11-accessing-protected-resources
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-12-updating-the-ui-depending-on-auth-state
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-13-adding-a-logout-link
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-16-persistent-auth-state-with-local-storage
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-17-fixing-connect-plus-routing-errors
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-19-guarding-routes
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-2-understanding-authentication-in-single-page-application
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-3-required-app-adjustments
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-4-adding-an-auth-form
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-5-adding-actions
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-6-getting-a-token-from-backend
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-7-adding-sign-in
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-8-storing-the-token
- courses/react-complete-guide/adding-authentication-to-our-burger-project/18-9-adding-a-spinner
- courses/react-complete-guide/adding-routing-to-burger-project/12-0-lesson
- courses/react-complete-guide/adding-routing-to-burger-project/12-10-implementing-navigation-links
- courses/react-complete-guide/adding-routing-to-burger-project/12-11-0-fetching-orders
- courses/react-complete-guide/adding-routing-to-burger-project/12-12-outputting-orders
- courses/react-complete-guide/adding-routing-to-burger-project/12-2-building-checkout-container
- courses/react-complete-guide/adding-routing-to-burger-project/12-3-setting-up-routing-and-routes
- courses/react-complete-guide/adding-routing-to-burger-project/12-4-navigation-to-checkout-page
- courses/react-complete-guide/adding-routing-to-burger-project/12-5-navigation-back-and-to-next-page
- courses/react-complete-guide/adding-routing-to-burger-project/12-6-passing-ingredients-via-query-params
- courses/react-complete-guide/adding-routing-to-burger-project/12-7-navigating-to-contact-data-component
- courses/react-complete-guide/adding-routing-to-burger-project/12-8-order-submission-and-passing-data-between-pages
- courses/react-complete-guide/adding-routing-to-burger-project/12-9-adding-orders-page
- courses/react-complete-guide/base-feature-syntax/Lessons/3-0-lesson
- courses/react-complete-guide/base-feature-syntax/Lessons/3-12-working-with-props
- courses/react-complete-guide/base-feature-syntax/Lessons/3-13-children-prop
- courses/react-complete-guide/base-feature-syntax/Lessons/3-15-props-and-state
- courses/react-complete-guide/base-feature-syntax/Lessons/3-16-handling-events-with-methods
- courses/react-complete-guide/base-feature-syntax/Lessons/3-17-listenable-events
- courses/react-complete-guide/base-feature-syntax/Lessons/3-18-manipulating-state
- courses/react-complete-guide/base-feature-syntax/Lessons/3-19-function-components-naming
- courses/react-complete-guide/base-feature-syntax/Lessons/3-20-usestate-hook
- courses/react-complete-guide/base-feature-syntax/Lessons/3-22-passing-methods-between-components
- courses/react-complete-guide/base-feature-syntax/Lessons/3-23-adding-two-way-binding
- courses/react-complete-guide/base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets
- courses/react-complete-guide/base-feature-syntax/Lessons/3-25-working-with-inline-styles
- courses/react-complete-guide/base-feature-syntax/Lessons/3-26-practice-task
- courses/react-complete-guide/base-feature-syntax/Lessons/3-28-useful-resources
- courses/react-complete-guide/base-feature-syntax/Lessons/3-3-0-create-new-react-app
- courses/react-complete-guide/base-feature-syntax/Lessons/3-3-1-0-pure-react
- courses/react-complete-guide/base-feature-syntax/Lessons/3-3-1-1-react-with-jsx
- courses/react-complete-guide/base-feature-syntax/Lessons/3-3-2-0-using-create-react-app
- courses/react-complete-guide/base-feature-syntax/Lessons/3-3-2-1-react-script-error
- courses/react-complete-guide/base-feature-syntax/Lessons/3-4-1-ide-setup
- courses/react-complete-guide/base-feature-syntax/Lessons/3-4-2-initial-deploy
- courses/react-complete-guide/base-feature-syntax/Lessons/3-6-0-jsx
- courses/react-complete-guide/base-feature-syntax/Lessons/3-6-1-my-thoughts-about-jsx
- courses/react-complete-guide/base-feature-syntax/Lessons/3-7-jsx-restrictions
- courses/react-complete-guide/base-feature-syntax/Lessons/3-9-components-jsx-cheat-sheet
- courses/react-complete-guide/base-feature-syntax/Practice/3-0-practice
- courses/react-complete-guide/base-feature-syntax/Practice/3-1-create-components
- courses/react-complete-guide/base-feature-syntax/Practice/3-10-add-styling
- courses/react-complete-guide/base-feature-syntax/Practice/3-2-create-elements
- courses/react-complete-guide/base-feature-syntax/Practice/3-3-create-nested-components
- courses/react-complete-guide/base-feature-syntax/Practice/3-4-passing-data-through-props
- courses/react-complete-guide/base-feature-syntax/Practice/3-5-add-state-to-class
- courses/react-complete-guide/base-feature-syntax/Practice/3-6-add-event-handler-method
- courses/react-complete-guide/base-feature-syntax/Practice/3-7-pass-method-reference
- courses/react-complete-guide/base-feature-syntax/Practice/3-8-making-interactive-component
- courses/react-complete-guide/base-feature-syntax/Practice/3-9-add-two-way-binding
- courses/react-complete-guide/burger-builder-project-accessing-server/10-0-lesson
- courses/react-complete-guide/burger-builder-project-accessing-server/10-10-useful-resources-and-links
- courses/react-complete-guide/burger-builder-project-accessing-server/10-2-firebase-and-right-database
- courses/react-complete-guide/burger-builder-project-accessing-server/10-3-creating-firebase-project
- courses/react-complete-guide/burger-builder-project-accessing-server/10-4-creating-axios-instance
- courses/react-complete-guide/burger-builder-project-accessing-server/10-5-sending-post-request
- courses/react-complete-guide/burger-builder-project-accessing-server/10-6-displaying-spinner-while-sending-request
- courses/react-complete-guide/burger-builder-project-accessing-server/10-7-handling-errors
- courses/react-complete-guide/burger-builder-project-accessing-server/10-8-retrieving-data-from-backend
- courses/react-complete-guide/burger-builder-project-accessing-server/10-9-0-removing-old-interceptors
- courses/react-complete-guide/burger-builder-project-accessing-server/10-9-1-renaming-component-willmount
- courses/react-complete-guide/debugging-react-apps/6-0-lesson
- courses/react-complete-guide/debugging-react-apps/6-5-using-error-boundaries
- courses/react-complete-guide/debugging-react-apps/6-7-useful-resources
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-0-lesson
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-11-controlling-useeffect-behavior
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-13-cleanup-work-with-useeffect-example
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-14-1-reference-vs-primitive-types
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-15-optimization-functional-components-with-react-memo
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-16-when-should-you-optimize
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-2-better-project-structure
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-20-windows-users-must-read
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-21-using-react-fragment
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-22-higher-order-components-hoc-intro
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-23-another-form-hoc
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-24-passing-unknown-props
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-25-setting-state-correctly
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-26-using-prop-types
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-27-using-refs
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-29-understanding-prop-chain-problems
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-3-splitting-app-into-components
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-30-using-context-api
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-33-useful-resources
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-4-comparing-stateless-and-stateful-components
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-5-class-based-vs-functional-components
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-6-class-component-lifecycle-overview
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-7-component-creation-lifecycle-in-action
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-8-0-component-update-lifecycle-for-props
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-8-1-component-update-lifecycle-in-action
- courses/react-complete-guide/diving-deeper-into-components-and-react-internals/7-9-component-update-lifecycle-state-changes
- courses/react-complete-guide/forms-and-form-validation/13-0-lesson
- courses/react-complete-guide/forms-and-form-validation/13-10-fixing-common-validation-gotcha
- courses/react-complete-guide/forms-and-form-validation/13-11-adding-validation-feedback
- courses/react-complete-guide/forms-and-form-validation/13-12-improving-visual-feedback
- courses/react-complete-guide/forms-and-form-validation/13-13-showing-error-messages
- courses/react-complete-guide/forms-and-form-validation/13-14-handling-overall-form-validity
- courses/react-complete-guide/forms-and-form-validation/13-17-useful-resources-and-links
- courses/react-complete-guide/forms-and-form-validation/13-3-creating-custom-dynamic-input-components
- courses/react-complete-guide/forms-and-form-validation/13-4-setting-up-js-config-for-form
- courses/react-complete-guide/forms-and-form-validation/13-5-dynamically-reate-inputs-base-on-js-config
- courses/react-complete-guide/forms-and-form-validation/13-6-adding-dropdown-component
- courses/react-complete-guide/forms-and-form-validation/13-7-handling-user-input
- courses/react-complete-guide/forms-and-form-validation/13-8-handling-form-submission
- courses/react-complete-guide/forms-and-form-validation/13-9-adding-custom-form-validation
- courses/react-complete-guide/improving-our-burger-project/19-0-lesson
- courses/react-complete-guide/improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-0-lesson
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-12-practice-solution
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-13-useful-resources
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-2-rendering-content-conditionally
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-3-handling-javascript-way
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-5-outputting-lists
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-6-lists-and-state
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-7-updating-state-immutably
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-8-lists-and-keys
- courses/react-complete-guide/lists-and-conditionals/Lessons/4-9-flexible-lists
- courses/react-complete-guide/lists-and-conditionals/Practice/4-0-practice
- courses/react-complete-guide/lists-and-conditionals/Practice/4-1-create-input-field
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-0-lesson
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-11-using-routing-related-props
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-12-withrouter-hoc-and-route-props
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-14-absolute-vs-relative-paths-article
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-15-styling-active-route
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-16-passing-route-parameters
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-17-extracting-route-parameters
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-19-using-switch-to-load-single-route
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-2-routing-and-spas
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-20-navigation-programmatically
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-22-understanding-nested-routes
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-23-creating-dynamic-nested-routes
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-24-redirecting-requests
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-25-conditional-redirects
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-26-using-history-prop-to-redirect-replace
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-28-handling-404-case-unknown-routes
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-29-loading-routes-lazily
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-3-setting-up-links
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-30-lazy-loading-with-react-suspense
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-32-practice
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-34-useful-resources-and-links
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-4-setting-up-router-package
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-5-react-router-vs-react-router-dom
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-6-preparing-project-for-routing
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-7-setting-up-and-rendering-routes
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-8-rendering-components-for-routes
- courses/react-complete-guide/multi-page-feeling-in-single-page-app-routing/11-9-switching-between-pages
- courses/react-complete-guide/next-gen-javascript/next-gen-javascript-summary
- courses/react-complete-guide/reaching-out-web-http-ajax/9-0-lesson
- courses/react-complete-guide/reaching-out-web-http-ajax/9-10-sending-delete-request
- courses/react-complete-guide/reaching-out-web-http-ajax/9-12-handling-errors-locally
- courses/react-complete-guide/reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally
- courses/react-complete-guide/reaching-out-web-http-ajax/9-14-removing-interceptors
- courses/react-complete-guide/reaching-out-web-http-ajax/9-15-setting-default-global-configuration-for-axios
- courses/react-complete-guide/reaching-out-web-http-ajax/9-16-creating-and-using-axios-instances
- courses/react-complete-guide/reaching-out-web-http-ajax/9-18-useful-resources-and-links
- courses/react-complete-guide/reaching-out-web-http-ajax/9-3-understanding-project-and-intro-axios
- courses/react-complete-guide/reaching-out-web-http-ajax/9-4-creating-http-request-to-get-data
- courses/react-complete-guide/reaching-out-web-http-ajax/9-5-rendering-fetched-data-to-screen
- courses/react-complete-guide/reaching-out-web-http-ajax/9-6-transforming-data
- courses/react-complete-guide/reaching-out-web-http-ajax/9-7-making-post-selectable
- courses/react-complete-guide/reaching-out-web-http-ajax/9-8-fetching-data-on-update
- courses/react-complete-guide/reaching-out-web-http-ajax/9-9-posting-data-to-server
- courses/react-complete-guide/real-app-burger-builder/8-0-lesson
- courses/react-complete-guide/real-app-burger-builder/8-1-about-react-hooks
- courses/react-complete-guide/real-app-burger-builder/8-10-adding-dynamic-ingredient-component
- courses/react-complete-guide/real-app-burger-builder/8-11-adding-prop-type-validation
- courses/react-complete-guide/real-app-burger-builder/8-12-starting-burger-component
- courses/react-complete-guide/real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically
- courses/react-complete-guide/real-app-burger-builder/8-14-calculating-ingredient-sum-dynamically
- courses/react-complete-guide/real-app-burger-builder/8-15-adding-build-control-component
- courses/react-complete-guide/real-app-burger-builder/8-16-outputting-multiple-build-controls
- courses/react-complete-guide/real-app-burger-builder/8-17-connecting-state-to-build-controls
- courses/react-complete-guide/real-app-burger-builder/8-18-removing-igredients-safely
- courses/react-complete-guide/real-app-burger-builder/8-19-displaying-and-updating-burger-price
- courses/react-complete-guide/real-app-burger-builder/8-20-adding-order-button
- courses/react-complete-guide/real-app-burger-builder/8-21-creating-order-summary-modal
- courses/react-complete-guide/real-app-burger-builder/8-22-showing-and-hiding-modal-with-animation
- courses/react-complete-guide/real-app-burger-builder/8-23-implementing-backdrop-component
- courses/react-complete-guide/real-app-burger-builder/8-24-adding-custom-button-component
- courses/react-complete-guide/real-app-burger-builder/8-25-implementing-button-component
- courses/react-complete-guide/real-app-burger-builder/8-26-adding-price-to-order-summary
- courses/react-complete-guide/real-app-burger-builder/8-27-adding-toolbar
- courses/react-complete-guide/real-app-burger-builder/8-28-using-logo
- courses/react-complete-guide/real-app-burger-builder/8-29-adding-reusable-navigation-items
- courses/react-complete-guide/real-app-burger-builder/8-3-planning-app-in-react
- courses/react-complete-guide/real-app-burger-builder/8-30-creating-responsive-sidedrawer
- courses/react-complete-guide/real-app-burger-builder/8-31-0-working-on-responsive-adjustments
- courses/react-complete-guide/real-app-burger-builder/8-31-1-working-on-responsive-adjustments
- courses/react-complete-guide/real-app-burger-builder/8-32-more-responsive-adjustments
- courses/react-complete-guide/real-app-burger-builder/8-33-reusing-backdrop
- courses/react-complete-guide/real-app-burger-builder/8-34-adding-sidedrawer-toggle-button
- courses/react-complete-guide/real-app-burger-builder/8-35-adding-humburger-icon
- courses/react-complete-guide/real-app-burger-builder/8-38-improving-perfomance
- courses/react-complete-guide/real-app-burger-builder/8-4-planning-app-layout-and-component-tree
- courses/react-complete-guide/real-app-burger-builder/8-42-useful-resources-and-links
- courses/react-complete-guide/real-app-burger-builder/8-5-planing-state
- courses/react-complete-guide/real-app-burger-builder/8-6-must-read-enabling-css-module
- courses/react-complete-guide/real-app-burger-builder/8-7-setting-up-project
- courses/react-complete-guide/real-app-burger-builder/8-8-creating-layout-component
- courses/react-complete-guide/real-app-burger-builder/8-9-starting-implementation-burger-builder-container
- courses/react-complete-guide/redux-advanced-burger-project/17-0-lesson
- courses/react-complete-guide/redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions
- courses/react-complete-guide/redux-advanced-burger-project/17-11-order-reducer
- courses/react-complete-guide/redux-advanced-burger-project/17-12-working-on-order-actions
- courses/react-complete-guide/redux-advanced-burger-project/17-13-redirect-to-improve-ux
- courses/react-complete-guide/redux-advanced-burger-project/17-14-combining-reducers
- courses/react-complete-guide/redux-advanced-burger-project/17-15-handling-purchases-and-updating-ui
- courses/react-complete-guide/redux-advanced-burger-project/17-16-resetting-price-after-purchases
- courses/react-complete-guide/redux-advanced-burger-project/17-17-fetching-orders-via-redux
- courses/react-complete-guide/redux-advanced-burger-project/17-19-refactoring-reducers
- courses/react-complete-guide/redux-advanced-burger-project/17-2-installing-redux-devtools
- courses/react-complete-guide/redux-advanced-burger-project/17-20-refactoring-reducers-continued
- courses/react-complete-guide/redux-advanced-burger-project/17-3-preparing-folder-structure
- courses/react-complete-guide/redux-advanced-burger-project/17-4-creating-action-creators
- courses/react-complete-guide/redux-advanced-burger-project/17-5-executing-synchronous-code
- courses/react-complete-guide/redux-advanced-burger-project/17-6-fetching-ingredients-asynchronously
- courses/react-complete-guide/redux-advanced-burger-project/17-7-initializing-ingredients-in-burgerbuilder
- courses/react-complete-guide/redux-advanced-burger-project/17-8-changing-order-for-ingredients-manually
- courses/react-complete-guide/redux-advanced-burger-project/17-9-adding-order-actions
- courses/react-complete-guide/redux-advanced/16-0-lesson
- courses/react-complete-guide/redux-advanced/16-10-using-action-creators-and-get-state
- courses/react-complete-guide/redux-advanced/16-11-using-utility-functions
- courses/react-complete-guide/redux-advanced/16-12-linear-switch-case-statement
- courses/react-complete-guide/redux-advanced/16-16-useful-resources-and-links
- courses/react-complete-guide/redux-advanced/16-2-adding-middleware
- courses/react-complete-guide/redux-advanced/16-3-using-redux-devtools
- courses/react-complete-guide/redux-advanced/16-5-Introducing-action-creators
- courses/react-complete-guide/redux-advanced/16-6-action-creators-and-async-code
- courses/react-complete-guide/redux-advanced/16-7-handling-asynchronous-code
- courses/react-complete-guide/redux-advanced/16-8-restructuring-actions
- courses/react-complete-guide/redux-advanced/16-9-where-to-put-data-transforming-logic
- courses/react-complete-guide/redux/14-0-lesson
- courses/react-complete-guide/redux/14-10-dispatching-actions-from-within-component
- courses/react-complete-guide/redux/14-11-practice
- courses/react-complete-guide/redux/14-13-switching-case-in-reducer
- courses/react-complete-guide/redux/14-14-updating-state-immutably
- courses/react-complete-guide/redux/14-15-updating-arrays-immutably
- courses/react-complete-guide/redux/14-16-immutable-update-patterns
- courses/react-complete-guide/redux/14-17-outsourcing-action-types
- courses/react-complete-guide/redux/14-18-combining-multiple-reducers
- courses/react-complete-guide/redux/14-19-understanding-state-types
- courses/react-complete-guide/redux/14-20-practice
- courses/react-complete-guide/redux/14-21-result-practice
- courses/react-complete-guide/redux/14-22-combining-local-ui-state-and-redux
- courses/react-complete-guide/redux/14-24-useful-resources-and-links
- courses/react-complete-guide/redux/14-4-understanding-redux-flow
- courses/react-complete-guide/redux/14-5-setting-up-reducer-and-store
- courses/react-complete-guide/redux/14-6-dispatching-actions
- courses/react-complete-guide/redux/14-7-adding-subscriptions
- courses/react-complete-guide/redux/14-8-connecting-react-to-redux
- courses/react-complete-guide/redux/14-9-connecting-store-to-react
- courses/react-complete-guide/styling-react-components-and-elements/5-0-lesson
- courses/react-complete-guide/styling-react-components-and-elements/5-10-0-working-with-css-modules
- courses/react-complete-guide/styling-react-components-and-elements/5-10-1-0-css-modules-usage
- courses/react-complete-guide/styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood
- courses/react-complete-guide/styling-react-components-and-elements/5-10-2-auto-generated-class-names
- courses/react-complete-guide/styling-react-components-and-elements/5-10-3-adding-class-selector
- courses/react-complete-guide/styling-react-components-and-elements/5-11-css-modules-and-media-queries
- courses/react-complete-guide/styling-react-components-and-elements/5-12-more-on-css-modules
- courses/react-complete-guide/styling-react-components-and-elements/5-13-useful-resources
- courses/react-complete-guide/styling-react-components-and-elements/5-3-setting-styles-dynamically
- courses/react-complete-guide/styling-react-components-and-elements/5-4-setting-class-names-dynamically
- courses/react-complete-guide/styling-react-components-and-elements/5-5-adding-and-using-radium
- courses/react-complete-guide/styling-react-components-and-elements/5-6-using-radium-for-media-queries
- courses/react-complete-guide/styling-react-components-and-elements/5-7-introducing-styled-components
- courses/react-complete-guide/styling-react-components-and-elements/5-8-more-on-styled-components
- courses/react-complete-guide/styling-react-components-and-elements/5-9-styled-components-and-dynamic-styles
- creative/premiere-pro/premiere-pro
- data/googles-protocol-buffers
- digital-design/binary-numbers/binary-numbers
- digital-design/binary-numbers/binary-trick
- digital-design/binary-numbers/bit
- digital-design/binary-numbers/crash-due-to-overflow
- digital-design/binary-numbers/ones-complement
- digital-design/binary-numbers/range-number-systems
- digital-design/binary-numbers/sign-extension
- digital-design/binary-numbers/sign-with-magnitude
- digital-design/binary-numbers/three-ideas-signed-binary-numbers
- digital-design/binary-numbers/twos-complement
- digital-design/binary-numbers/twos-complement-overflow
- digital-design/binary-numbers/weird-number
- digital-design/computer-abstraction-levels
- digital-design/exercises/all-exercises
- digital-design/exercises/exercises-101-130
- digital-design/exercises/exercises-131-160
- digital-design/exercises/exercises-161-190
- digital-design/logic-gates/logic-gates
- digital-design/nand
- disks/yandex-disk-usage-cloud-storage
- doc1
- doc2
- doc3
- entrance/docusaurus
- finance/money-transfers
- games/Cyberpunk 2077
- games/RDR2/rdr2-reinstall-win
- games/RDR2/read-dead-redemption-2
- goods/arduino
- goods/goods
- grammar/imperfective-sonnenhauser
- javascript/birth
- javascript/functions
- javascript/next-generation
- javascript/next-generation/arrow-functions
- javascript/next-generation/classes
- javascript/next-generation/var-let-const
- javascript/objects
- location/Lvovskaya-2020-2021/8-marсh-order
- location/Lvovskaya-2020-2021/black-friday-orders/when-starting-black-friday
- location/Lvovskaya-2020-2021/rostelekom
- location/Lvovskaya-2020-2021/support-polyglot-by-getting-t-short
- mdx
- music/music
- new-disk/additional-apps
- new-disk/computer-test
- new-disk/git-bash-node-ssh
- new-disk/how-copy-big-files
- new-disk/new-windows-setup
- new-disk/partitioning-new-disk
- new-disk/windows-terminal
- new-disk/yandex-disk-how-download
- node/bundlers/0-bundlers-review
- node/npm/do-i-commit-package-lock-json
- node/nvm
- node/nvm-windows
- pdf/pdf
- react/component
- react/element
- react/listenable-events
- react/render-element
- react/updating-element
- react/updating-necessary
- rhyme/all-rhymes
- rhyme/protopriest
- rhyme/sound/all-sounds
- rhyme/sound/ded-moroz-i-santa-claus
- rhyme/sound/hash
- rhyme/sound/headless-horseman
- rhyme/sound/one-virus-more
- rhyme/wolfs
- shells/automatic-directory-tree
- shells/bash/regex-in-bash
- shells/commands/sed/sed-my-experience
- shells/powershell/rm
- shells/windows-terminal-tips-and-tricks
- site-generators/breadcrumbs-for-jekyll-site
- site-generators/docusaurus/add-apple-style-window
- site-generators/docusaurus/live-codeblock-theme
- site-generators/docusaurus/lunr-search-plugin
- site-generators/docusaurus/npm-to-yarn
- site-generators/docusaurus/plugin-auto-sidebars
- site-generators/docusaurus/typedoc-plugin
- site-generators/github-pages-theme-in-one-step
- site-generators/jekyll/just-the-docs/breadcrumbs-android-fail
- site-generators/jekyll/use-any-theme-with-github-pages
- site-generators/site-generators-index
- site-generators/site-generators-with-simple-folder-structure
- sites/all-sites
- stories/new-ostap-bender/2020-12-23-ostapa-zaneslo
- stories/new-ostap-bender/Locations and Persons
- stories/new-ostap-bender/americansky-otkaznoi-kommersant-22-12-2020
- thoughts/birth-of-myths
- thoughts/black-hole-party
- thoughts/debugging
- thoughts/dyadya-vova
- thoughts/face-the-truth
- thoughts/fence
- thoughts/fucking-american-bastards
- thoughts/heart-in-ural
- thoughts/heidegger
- thoughts/i-afraid-big-many
- thoughts/kipling
- thoughts/knowledge-fences
- thoughts/lazy-beast
- thoughts/letter-to-brian-may
- thoughts/lev-nikolaevich-tolstoy
- thoughts/linter-check
- thoughts/magic-wand
- thoughts/mashas-post
- thoughts/more-reliable-than-death
- thoughts/my-link-chain
- thoughts/new-kind-exercise
- thoughts/new-knowledge
- thoughts/orenburg-is-the capital-of
- thoughts/orenburgs-main-attraction
- thoughts/papa-constant
- thoughts/prisoners-prayer
- thoughts/prometheus-lenin-torvalds
- thoughts/tomorrows-apple
- thoughts/train-history
- thoughts/tuesday
- thoughts/tupik
- thoughts/u-menya-vnutri-vse-zasoprotivlyalos
- thoughts/u-sytogo-vsegda-golodnyi-vinovat
- thoughts/uncle-vova
- thoughts/vot-ka4us-ya-v-sankah
- thoughts/when-sun
- thoughts/while-asphalt-fresh
- thoughts/ya-ocherstvel
- thoughts/ya-vinovat
- thoughts/zachem-zhe-razmhozheniye
- verbs/is-it-idiom
- videos/videos
- virtual-machines/docker/install-docker-software
- virtual-machines/docker/linter-in-docker
- virtual-machines/multipass/install-setup-multipass
- virtual-machines/multipass/lets-run-linux
- virtual-machines/multipass/local-k3s-cluster-multipass
- virtual-machines/multipass/working-with-multipass-instances
- vs-code/extension-api/all-self-built-extensions
- vs-code/extension-api/extension-generator
- vs-code/fira-code
- vs-code/ftp-and-ssh-plugins-and-settings
- vs-code/macros/0-auto-frontmatter
- vs-code/macros/1-auto-frontmatter
- vs-code/macros/auto-anchor
- vs-code/macros/test-for-auto-anchor
- vs-code/mdx-equals-md
- vs-code/regex/regex-examples
- vs-code/regex/regex-in-vs-code
- vs-code/snippets/all-snippets
- vs-code/snippets/anchor-from-clipboard
- vs-code/snippets/auto-front-matter
- vs-code/snippets/snippet-plus-shortcut
- vs-code/spell-checking
- vs-code/user-keyboard-shortcuts
- vs-code/windows-permission-denied
- windows-and-linux/grub-correction
- windows-and-linux/update-grub-not-see-windows
- workplace/git/conventional-commits
- workplace/git/delete-closed-pull-request
- workplace/git/download-one-folder
- workplace/git/git-best-practicies
- workplace/git/git-workflow
- workplace/git/gitignore-dont-hide-file
- workplace/git/resolving-git-line-ending-issues-in-wsl
- workplace/installed-programs
- workplace/linux/draw-in-linux-kde-plasma
- workplace/linux/kde-klipper-regex
- workplace/linux/read-only-file-system-error
- workplace/office/office-install
- workplace/onenote-to-markdown/chocolatey-install
- workplace/onenote-to-markdown/onenote-to-markdown
- workplace/onenote-to-markdown/pandoc-install
- workplace/windows/mv-permission-denied
- writing-system/cuneiform
    at Object.checkSidebarsDocIds (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/plugin-content-docs/lib/sidebars.js:339:19)
    at doLoadVersion (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/plugin-content-docs/lib/index.js:117:31)
    at async loadVersion (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/plugin-content-docs/lib/index.js:166:28)
    at async Promise.all (index 0)
    at async Object.loadContent (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/plugin-content-docs/lib/index.js:174:33)
    at async /mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/core/lib/server/plugins/index.js:58:46
    at async Promise.all (index 0)
    at async Object.loadPlugins (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/core/lib/server/plugins/index.js:57:27)
    at async Object.load (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/core/lib/server/index.js:186:82)
    at async start (/mnt/sdc2/Yandex.Disk-parsh/hm/node_modules/@docusaurus/core/lib/commands/start.js:44:19)

```

## Your environment

<!-- Include as many relevant details about the environment you experienced the bug in -->

- Public source code: https://github.com/PaPa31/hm
- Public site URL: https://papa31.github.io/
- Docusaurus version used: 2.0.0-alpha.72
- Environment name and version (e.g. Chrome 78.0.3904.108, Node.js 10.17.0): node v12.19.0
- Operating system and version (e.g. Ubuntu 20.04.2 LTS): MX Linux

## Reproducible demo

Use https://new.docusaurus.io to create a CodeSandbox reproducible demo of the bug.

**I get an error**: Only a max of 500 modules is allowed in a sandbox

<!--
  What happens if you skip this step?

  Someone will read your bug report, and maybe will be able to help you,
  but it’s unlikely that it will get much attention from the team. Eventually,
  the issue will likely get closed in favor of issues that have reproducible demos.

  Please remember that:

    * Issues without reproducible demos have a very low priority.
    * The person fixing the bug would have to do that anyway. Please be respectful of their time.
    * You might figure out the issues yourself as you work on extracting it.

  Thanks for helping us help you!
-->