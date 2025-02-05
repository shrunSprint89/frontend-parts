# Internationalization (i18n) in React

react-i18next provides powerful internationalization capabilities for React applications.

## Key Features
- Flexible translation management
- Dynamic language switching
- Namespace support
- Format handling

## Implementation Strategies
1. **Setup Configuration**
   ```javascript
   // i18n.js
   import i18n from 'i18next';
   import { initReactI18next } from 'react-i18next';

   i18n
     .use(initReactI18next)
     .init({
       resources: {
         en: {
           translation: {
             welcome: 'Welcome',
             hello: 'Hello, {{name}}!'
           }
         }
       },
       lng: 'en',
       fallbackLng: 'en'
     });
   ```

2. **Component Usage**
   ```jsx
   import { useTranslation } from 'react-i18next';

   function Welcome() {
     const { t } = useTranslation();
     return (
       <h1>{t('welcome')}</h1>
       <p>{t('hello', { name: 'User' })}</p>
     );
   }
   ```

## Best Practices
- Organize translations by namespace
- Use HOC for class components
- Implement proper fallbacks
- Handle plural forms correctly

## Advanced Features
- Nested translations
- Dynamic content
- Format numbers/dates
- Context-aware translations

## Language Detection
```javascript
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag']
    }
  });
```