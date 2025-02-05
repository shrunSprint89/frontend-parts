# Accessibility Compliance in React

ESLint plugins for a11y provide comprehensive accessibility checking in React applications.

## Key Features
- ESLint a11y plugins
- ARIA integration
- Focus management
- Keyboard navigation

## Implementation Strategies
1. **ESLint Configuration**
   ```javascript
   // .eslintrc.js
   module.exports = {
     plugins: ['jsx-a11y'],
     extends: ['plugin:jsx-a11y/recommended']
   };
   ```

2. **Accessible Components**
   ```jsx
   import { useRef, useEffect } from 'react';

   function AccessibleModal({ isOpen, onClose, children }) {
     const modalRef = useRef();

     useEffect(() => {
       if (isOpen) {
         modalRef.current?.focus();
       }
     }, [isOpen]);

     return (
       <div
         ref={modalRef}
         role="dialog"
         aria-modal="true"
         tabIndex="-1"
       >
         {children}
         <button
           aria-label="Close dialog"
           onClick={onClose}
         >
           Close
         </button>
       </div>
     );
   }
   ```

## Best Practices
- Use semantic HTML
- Implement proper ARIA roles
- Manage focus states
- Provide keyboard shortcuts

## Testing
```javascript
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('component passes accessibility checks', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Common Patterns
- Form accessibility
- Modal management
- Navigation menus
- Screen reader support