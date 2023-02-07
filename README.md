# FinancialAdvisor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Solution brief

I wanted to generate every single piece of data using the inputs provided by the user. So I included a few additional fields for the initial capital and user's current age.

An ideal solution would have been to react to form input changes. I could have subscribed to the Reactive form's `valueChanges` Observable and then would have called my business logic from the `CapitalBalanceProjectionService` in order to generate the data for the table and the chart. But that would have been really compute intensive. So I decided on including a button that the user would have to click in order to get the projection.

I've followed **Angular Style Guide's Conventions** like the *Single Responsibility Principal*, thereby:

- Keeping components clean and free of any business logic. All the components simply take user's inputs from the UI.
- All the heavy lifting of generating the projection data is being handled by the `CapitalBalanceProjectionService`.
- Common components, that could be reused across all the other modules are placed inside a `CoreModule`.
- Usually since we're using TypeScript, it's pretty self-documented. But I've added comments at a few places here and there to justify the decisions that I've made while implementing the logic. There are also some links added in the comments for context.

I've also added some *performance optimizations*:

- All the components use the `ChangeDetectionStrategy` of `OnPush` so as to make them much more performant and preventing unnecessary re-rendering.
- The App is built in mind to have multiple such calculators. But since the focus is on _capital balance projection_, I've abstracted it out into a separate Angular Module and I'm lazily loading it.

From the *look and feel* perspective:

- The App is fully responsive.
- I'm a fan of Dark Mode as I feel it's prettier on the eyes. But some users prefer Light Mode. So I've also added a Theme Switcher on the Navbar so that users could chose a Theme based on their preferences. Their theme preference would also be stored so that the next time they visit the site, they'll still see their theme of choice.

**A live version of the App would be available on [StackBlitz](https://stackblitz.com/github/SiddAjmera/AngularFinancialAdvisor) in a while**
