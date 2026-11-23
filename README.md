# React + Vite

## Contact form CAPTCHA configuration

The Contact Us form uses reCAPTCHA v2. The public site key is configured in
`src/pages/Contact.jsx`; the matching secret key must stay on the PHP server.

For Hostinger, create `ggs-private-config.php` one directory above `public_html`
and have it return the following value:

```php
<?php
return [
    'RECAPTCHA_SECRET_KEY' => 'your-recaptcha-secret',
];
```

The form submits contact details to the configured Google Sheets script; it
does not send email or require SMTP credentials. Do not put the private config
file in `public_html` or commit it to Git. PHP cURL must be enabled for
server-side CAPTCHA verification.

For local Vite development, set `RECAPTCHA_SECRET_KEY` in the environment
before running `npm run dev`. It is server-only and must not use a `VITE_`
variable name.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
