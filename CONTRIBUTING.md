# Contributing to Anthropic Docs MCP Server

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the Anthropic Docs MCP Server.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Issues

- Use the issue templates provided
- Search existing issues before creating new ones
- Provide clear, detailed descriptions
- Include steps to reproduce for bugs

### Suggesting Features

- Use the feature request template
- Explain the use case and benefits
- Consider the impact on existing users
- Provide examples if possible

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Follow the PR template**
6. **Submit the pull request**

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

### Testing

- Test your changes locally
- Ensure existing functionality still works
- Add tests for new features when possible

### Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update type definitions

## Release Process

Releases are automated through GitHub Actions:

1. Update version in `package.json`
2. Create a git tag: `git tag v0.1.2`
3. Push the tag: `git push origin v0.1.2`
4. GitHub Actions will automatically publish to NPM

## Questions?

If you have questions about contributing, please:

1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Contact the maintainer directly

## Thank You

Your contributions help make this project better for everyone. We appreciate your time and effort!
