# GitHub Copilot Instructions - Blazor WebAssembly App (.NET 10)

## Project Overview
This is a Blazor WebAssembly application built with .NET 10. 

The application follows modern best practices for Blazor WASM development.


## Coding Standards
- Use C# 12 features where appropriate
- Implement component-based architecture
- Follow SOLID principles
- Use nullable reference types
- Prefer async/await for asynchronous operations

## Blazor WebAssembly Best Practices
- Use app.css for css styles
- Implement proper dependency injection
- Use `IHttpClientFactory` for HTTP requests
- Leverage Blazor's component parameters and cascading parameters
- Use `@key` directive for optimized rendering of lists
- Implement efficient state management
- Use JS interop only when necessary

## Performance Considerations
- Minimize initial download size
- Use lazy loading for routes
- Implement efficient rendering techniques
- Consider using pre-rendering where appropriate
- Implement proper cancellation token handling

## Demo & UX Expectations
- Treat this project as a demo-ready application
- Prioritize visual polish, UX clarity, and smooth interactions
- Prefer elegant layouts, consistent spacing, and accessible color contrast
- Use subtle animations and hover effects where they enhance usability
- Avoid over-engineering; keep code readable and presentation-friendly

## Explanation & Learning
- When generating or modifying UI components, explain:
  - What was changed
  - Why it improves UX or maintainability
  - Any Blazor-specific best practices applied
- Use short, clear explanations suitable for live demos

## Design System
- Prefer CSS variables for colors, spacing, and typography
- Ensure light and dark mode compatibility
- Use semantic HTML elements inside Blazor components
- Keep styles centralized in `app.css`
