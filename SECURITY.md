# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** create a public issue
2. **Do NOT** discuss the vulnerability publicly
3. Email the maintainer directly at: julianreddot@gmail.com

### What to Include

Please include the following information in your report:

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 1 week
- **Resolution**: Depends on complexity, but we aim for quick fixes

### Recognition

We appreciate responsible disclosure and will acknowledge security researchers who help improve the security of this project.

## Security Best Practices

When using this MCP server:

1. **Keep your installation updated**: Always use the latest version
2. **Verify package integrity**: Use `npm audit` to check for known vulnerabilities
3. **Use HTTPS**: Ensure all documentation URLs use HTTPS
4. **Review configurations**: Double-check your MCP configuration files

## Dependencies

We regularly update dependencies to address security vulnerabilities. You can check for updates with:

```bash
npm audit
npm update
```
