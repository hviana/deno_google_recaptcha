# deno_google_recaptcha

Google reCAPTCHA Checks for Deno.

## How to use

```typescript
import { RECaptcha } from "https://deno.land/x/deno_google_recaptcha/mod.ts";
//0.5 is the minimum score accepted in this example
const res = await RECaptcha.verify(
  "YOUR_recaptchaSecret",
  "YOUR_responseToken",
  0.5,
); //return true or false
console.log(res);
```

## About

Author: Henrique Emanoel Viana, a Brazilian computer scientist, enthusiast of
web technologies, cel: +55 (41) 99999-4664. URL:
https://sites.google.com/view/henriqueviana

Improvements and suggestions are welcome!
