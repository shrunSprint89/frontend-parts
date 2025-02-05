# Internationalization (i18n) in Svelte

svelte-i18n provides efficient internationalization capabilities for Svelte applications.

## Key Features
- Reactive translations
- Dictionary management
- Locale switching
- Format handling

## Implementation Strategies
1. **Setup Configuration**
   ```javascript
   // i18n.js
   import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

   addMessages('en', {
     welcome: 'Welcome',
     hello: 'Hello, {name}!'
   });

   init({
     fallbackLocale: 'en',
     initialLocale: getLocaleFromNavigator()
   });
   ```

2. **Component Usage**
   ```svelte
   <script>
   import { _ } from 'svelte-i18n';
   
   let name = 'User';
   </script>

   <h1>{$_('welcome')}</h1>
   <p>{$_('hello', { values: { name } })}</p>
   ```

## Best Practices
- Use reactive stores
- Implement lazy loading
- Handle loading states
- Manage translations efficiently

## Advanced Features
- Dynamic content
- Nested translations
- Format utilities
- Locale detection

## Store Implementation
```javascript
import { derived } from 'svelte/store';
import { dictionary, locale } from 'svelte-i18n';

export const translatedTitle = derived(
  [dictionary, locale],
  ([$dictionary, $locale]) => {
    return $dictionary[$locale]?.title || '';
  }
);
```