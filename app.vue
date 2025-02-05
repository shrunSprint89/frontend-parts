<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = "custom-layout";
</script>

<template>
  <NuxtLayout :name="layout">
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <!-- <li>
          <NuxtLink to="/accessibility-compliance"
            >Accessibility Compliance</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/bundle-size-management"
            >Bundle Size Management</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/code-maintainability">Code Maintainability</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cross-cutting-concerns"
            >Cross-Cutting Concerns</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dependency-management">Dependency Management</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/developer-experience">Developer Experience</NuxtLink>
        </li>
        <li><NuxtLink to="/future-trends">Future Trends</NuxtLink></li>
        <li>
          <NuxtLink to="/headless-architecture">Headless Architecture</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/integration-with-apis">Integration with APIs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/internationalization">Internationalization</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/micro-frontends-architecture"
            >Micro Frontends Architecture</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/performance-optimization"
            >Performance Optimization</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/responsive-design-implementation"
            >Responsive Design Implementation</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/routing-management">Routing Management</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/security-practices">Security Practices</NuxtLink>
        </li>
        <li><NuxtLink to="/state-management">State Management</NuxtLink></li>
        <li>
          <NuxtLink to="/testing-strategies">Testing Strategies</NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/ui_reusability">User Interface Reusability</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </NuxtLayout>
</template>
