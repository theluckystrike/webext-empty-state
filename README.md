[![CI](https://github.com/theluckystrike/webext-empty-state/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-empty-state/actions)
[![npm](https://img.shields.io/npm/v/webext-empty-state)](https://www.npmjs.com/package/webext-empty-state)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# webext-empty-state

Empty state UI components for Chrome extensions. Provides illustrated empty states, error states, loading transitions, and call-to-action buttons for Manifest V3 extensions.

## Installation

```bash
npm install webext-empty-state
```

## Usage

Import the EmptyState class and render states into any container element.

```typescript
import { EmptyState } from 'webext-empty-state';

// Initial empty state with action button
EmptyState.noData('container', 'Add Item', () => openForm());

// Error state with retry
EmptyState.error('container', 'Failed to load your data', () => retry());

// Offline state
EmptyState.offline('container', () => location.reload());

// No results from search
EmptyState.noResults('container', 'search query');
```

## API Reference

### EmptyState.render(containerId, options)

Base method for rendering a custom empty state.

- `containerId` - ID of the DOM element to render into
- `options.icon` - Emoji or icon string (default: inbox emoji)
- `options.title` - Required heading text
- `options.description` - Optional description paragraph
- `options.actionLabel` - Optional button label
- `options.onAction` - Optional callback when button is clicked

### EmptyState.error(containerId, message, onRetry)

Renders an error state with a warning icon and optional retry button.

### EmptyState.noResults(containerId, query)

Renders a no results state with a search icon. If query is provided, displays it in the description.

### EmptyState.noData(containerId, actionLabel, onAction)

Renders an empty state encouraging the user to add their first item.

### EmptyState.offline(containerId, onRetry)

Renders an offline state with a retry button.

## Requirements

- TypeScript 5.3+
- Chrome or Chromium-based browser extension (Manifest V3)

## About

Maintained by theluckystrike. Built for browser extension developers who need polished empty state components without external dependencies.

For issues and contributions, see the CONTRIBUTING guide.

## License

MIT

---

Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
