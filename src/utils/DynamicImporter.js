import React, { lazy, Suspense } from "react";

// Fallback loading component
const Fallback = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

/**
 * Creates a dynamically imported component with better code splitting
 * @param {Function} importCallback - Import function callback (e.g., () => import('./MyComponent'))
 * @param {Object} options - Configuration options
 * @returns {React.ComponentType} The lazy-loaded component
 */
export const createDynamicComponent = (importCallback, options = {}) => {
  const LazyComponent = lazy(importCallback);

  return (props) => (
    <Suspense fallback={options.fallback || <Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

/**
 * Preloads a component for future use
 * @param {Function} importCallback - Import function callback
 */
export const preloadComponent = (importCallback) => {
  const componentPromise = importCallback();
  return componentPromise;
};

/**
 * Creates a group of components that share the same chunk
 * This helps consolidate related components into a single download
 * @param {Object} componentMap - Map of component names to import callbacks
 * @returns {Object} Map of component names to lazy components
 */
export const createComponentGroup = (componentMap) => {
  const components = {};

  Object.entries(componentMap).forEach(([name, importCallback]) => {
    components[name] = createDynamicComponent(importCallback);
  });

  return components;
};
