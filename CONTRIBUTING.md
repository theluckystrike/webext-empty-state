# Contributing to webext-empty-state

Thank you for your interest in contributing. This guide covers how to report issues and submit improvements.

## REPORTING ISSUES

Before creating a new issue, please search existing issues to avoid duplicates.

When reporting a bug, include:
- A clear description of the problem
- Steps to reproduce the issue
- Your environment (TypeScript version, browser, extension manifest version)
- Any relevant error messages or console output

For feature requests, explain:
- The use case you are trying to address
- How the feature should work
- Why this would be valuable to users

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Ensure the build passes
5. Submit a pull request

## CODE STYLE

This project uses standard TypeScript conventions:
- Use TypeScript types for all function parameters and return values
- Keep methods focused and single-purpose
- Add JSDoc comments for public API methods
- Use meaningful variable names

## TESTING

Before submitting changes, verify the TypeScript build compiles without errors:

```bash
npm install
npm run build
```

There are no additional test dependencies at this time. Manual testing can be performed by importing the package into a Chrome extension project.

## LICENSE

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
