# React + Vite

## Contact form CAPTCHA configuration

The Contact Us form uses reCAPTCHA v2. The public site key is configured in
`src/pages/Contact.jsx`; the matching secret key must stay on the PHP server.

For Hostinger, create `ggs-private-config.php` one directory above `public_html`
and have it return the following values:

```php
<?php
return [
    'RECAPTCHA_SECRET_KEY' => 'your-recaptcha-secret',
    'SMTP_USERNAME' => 'your-gmail-address',
    'SMTP_PASSWORD' => 'your-gmail-app-password',
];
```

The PHP endpoint also reads these values from environment variables, if
configured. Do not put this file in `public_html` or commit it to Git. PHP cURL
must be enabled for server-side CAPTCHA verification.

For local Vite development, set `RECAPTCHA_SECRET_KEY`, `SMTP_USERNAME`, and
`SMTP_PASSWORD` in the environment before running `npm run dev`. These are
server-only values and must not use `VITE_` variable names.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
