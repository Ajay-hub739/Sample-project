# GGS Utilities website

This repository contains the React/Vite website. The contact form uses Google's
reCAPTCHA v2 checkbox and submits email through `public/send_mail.php` in
production. The Vite development middleware also verifies CAPTCHA responses
before sending local test emails.

## Contact form secrets

The public site key is configured in `src/pages/Contact.jsx`. Never put the
reCAPTCHA secret key or Gmail SMTP app password in React/Vite client variables,
HTML, or a committed file.

The PHP endpoint reads `RECAPTCHA_SECRET_KEY`, `SMTP_USERNAME`, and
`SMTP_PASSWORD` from the PHP process environment. It also supports a private PHP
configuration file at `ggs-private-config.php` one directory above the deployed
`public_html` directory (and at the project root for local PHP). That file must
return an array, for example:

```php
<?php
return [
    'RECAPTCHA_SECRET_KEY' => 'your-private-recaptcha-secret',
    'SMTP_USERNAME' => 'your-gmail-address',
    'SMTP_PASSWORD' => 'your-gmail-app-password',
];
```

The endpoint prefers environment variables when set. Keep this configuration
outside the web root and out of Git. The repository ignores the local
`ggs-private-config.php` file.

The repository also contains a pre-existing archived build and extracted
snapshot with legacy SMTP credentials. Do not deploy those old artifacts; deploy
a fresh `dist` build from the current source. Rotate any SMTP app password that
was previously stored in the repository. A source change cannot remove
credentials from Git history.

### Hostinger configuration

1. In Hostinger File Manager, place `ggs-private-config.php` in the account
   directory above `public_html`, not inside the public website directory.
2. Set its three values to the reCAPTCHA secret from Google and the Gmail SMTP
   address and app password used by PHPMailer. Do not use the Gmail account's
   normal password.
3. Ensure PHP cURL is enabled. The endpoint needs outbound HTTPS access to
   `www.google.com` and Gmail SMTP.
4. If the public site is served from a different directory layout, update the
   private-config path in `public/send_mail.php` to point to a file outside the
   document root.

### Local development

The Vite-only mail endpoint requires private values in the environment of the
process running Vite. In PowerShell, set them before starting the dev server:

```powershell
$env:RECAPTCHA_SECRET_KEY = 'your-private-recaptcha-secret'
$env:SMTP_USERNAME = 'your-gmail-address'
$env:SMTP_PASSWORD = 'your-gmail-app-password'
npm run dev
```

Add `localhost` to the allowed domains for the reCAPTCHA v2 key if it is not
already allowed. These values are read only by the Vite server middleware and
are not exposed through `import.meta.env`.

## Build, test, and deploy

- `npm run lint` checks the React and Vite code.
- `npm run build` creates the deployable site in `dist`. The `public` PHP
  endpoint and PHPMailer files are copied into that output.
- Test the contact form by completing the checkbox and submitting once. The
  email should arrive at `chandubilla050@gmail.com` and `info@ggsutilities.com`.
  An empty or invalid CAPTCHA token should receive an error and must not send an
  email.
- To deploy safely, build and review the generated `dist` output, then upload or
  deploy its contents using the existing Hostinger workflow. Keep the private
  configuration outside `public_html`; never upload it to GitHub or include it
  in the frontend build.
