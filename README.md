# ABC Health Payment Flow

view the demo: https://abchealth-payment-flow.vercel.app/

This app simulates a payment flow and is fully responsive.

## Quickstart

1. clone this repo            `git clone https://github.com/michellelamx/abchealth-payment-flow.git`
2. install the dependencies   `npm i`
3. start the server           `npm run dev`

## Testing

Tests are written with Vitest and React Testing Library (using Jest DOM)

Run tests on all files         `npm run test`

## Accessiblity

- all inputs have `aria-labelledby` and `aria-invalid` properties
- the sections on the payment screen include `aria-expanded` or `aria-hidden` to indicate whether the section is open & visible or not
- all buttons (and links) have `aria-label` property
- all buttons/links and inputs have a focus state
- the user can tab through the form and press enter to "click" the button

## Built with...

- React with Typescript
- built with Vite
- React Router
- plain CSS (no preprocessors or libraries)
- React Hook Form for managing forms and their state
- zod for form validation and messaging

## Extras
- created a mock service that simulates a backend
  - user information, including name, balance, and number of invoices, is fetched from the mock service
  - credit card information is saved to the mock service on submission of the form
- Added React Context to store and pass data to all parts of the app
- Added focus states to buttons and inputs
- All svgs are React components

