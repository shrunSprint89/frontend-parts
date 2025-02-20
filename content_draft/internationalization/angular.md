# Internationalization (i18n) in Angular

Built-in `@angular/localize` provides comprehensive internationalization support.

## Key Features
- Built-in i18n support
- Translation extraction
- Runtime language switching
- Number and date formatting

## Implementation Strategies
1. **Translation Setup**
   ```typescript
   // app.module.ts
   import { registerLocaleData } from '@angular/common';
   import localeFr from '@angular/common/locales/fr';
   
   registerLocaleData(localeFr);
   ```

2. **Template Usage**
   ```html
   <!-- In component template -->
   <h1 i18n="@@welcomeMessage">Welcome to our site</h1>
   <p i18n>Hello, {name}!</p>
   ```

3. **Translation Files**
   ```json
   {
     "welcomeMessage": "Bienvenue sur notre site",
     "hello": "Bonjour, {name}!"
   }
   ```

## Best Practices
- Use translation IDs consistently
- Implement fallback languages
- Handle pluralization properly
- Consider context in translations

## Advanced Features
- Currency formatting
- Date/time localization
- Plural rules
- Message parameters

## Build Configuration
```json
{
  "projects": {
    "app": {
      "i18n": {
        "sourceLocale": "en-US",
        "locales": {
          "fr": "src/locale/messages.fr.xlf",
          "es": "src/locale/messages.es.xlf"
        }
      }
    }
  }
}
```