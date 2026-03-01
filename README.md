# webext-empty-state — Empty State Components
> **Built by [Zovo](https://zovo.one)** | `npm i webext-empty-state`

Error, no results, no data, and offline empty states with CTA buttons.

```typescript
import { EmptyState } from 'webext-empty-state';
EmptyState.noData('container', 'Add Item', () => openForm());
EmptyState.error('container', 'Failed to load', () => retry());
EmptyState.offline('container', () => location.reload());
```
MIT License
