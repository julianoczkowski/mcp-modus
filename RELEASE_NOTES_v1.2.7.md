# Release v1.2.7

## 🔒 Security & Infrastructure Improvements

### Migrated to npm Trusted Publishers (OIDC)

This release migrates the publishing workflow from token-based authentication to **Trusted Publishers using OIDC (OpenID Connect)**. This is a critical security update that aligns with npm's 2025 security requirements.

#### What Changed

- ✅ **Removed NPM_TOKEN dependency**: No more long-lived tokens to manage
- ✅ **OIDC Authentication**: Uses temporary, job-specific credentials via GitHub Actions
- ✅ **Automatic Provenance**: Each published package now includes cryptographic provenance attestation
- ✅ **Upgraded to Node.js 20**: Required for npm 11.5.1+ which supports OIDC
- ✅ **Updated npm automatically**: Workflow ensures latest npm version for OIDC support

#### Benefits

- **Enhanced Security**: No tokens to rotate, leak, or compromise
- **Compliance**: Meets npm's security requirements for 2025 and beyond
- **Automatic Provenance**: Users can verify package authenticity automatically
- **Simplified Workflow**: No secrets to configure or manage in GitHub

#### Technical Details

- **Workflow**: `.github/workflows/publish.yml` now uses OIDC authentication
- **Node.js**: Upgraded from v18 to v20 for npm 11.5.1+ compatibility
- **npm**: Automatically updated to latest version in workflow
- **Trusted Publisher**: Configured in npm portal for `julianoczkowski/mcp-modus` repository

## 📦 Package Information

- **Version**: 1.2.7
- **Node.js**: Requires Node.js 20+ (for OIDC support)
- **Total Components**: 43 Modus Web Components
- **Total Files**: 62 files
- **Tools**: 10 MCP tools across 3 categories

## 🚀 Installation

**Option 1: NPX (Recommended - No Installation)**
```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "npx",
      "args": ["-y", "@julianoczkowski/mcp-modus"]
    }
  }
}
```

**Option 2: Global Install**
```bash
npm install -g @julianoczkowski/mcp-modus
```

## 📚 Documentation Updates

- Updated `PUBLISHING.md` with Trusted Publishers setup instructions
- Added Node.js 20+ requirement documentation
- Updated troubleshooting section with OIDC-specific guidance

## 🔗 Related Links

- [npm Trusted Publishers Documentation](https://docs.npmjs.com/trusted-publishers)
- [GitHub Actions OIDC Documentation](https://docs.github.com/en/actions/deployment/security/hardening-your-deployments/about-security-hardening-with-openid-connect)
- [npm Security Changes 2025](https://github.blog/changelog/2025-09-29-strengthening-npm-security-important-changes-to-authentication-and-token-management/)

---

**Note**: This is primarily an infrastructure and security update. No functional changes to the MCP server itself.

