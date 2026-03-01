/**
 * Empty State — Illustrated empty, error, and loading states
 */
export class EmptyState {
    /** Render empty state */
    static render(containerId: string, options: { icon?: string; title: string; description?: string; actionLabel?: string; onAction?: () => void }): void {
        const container = document.getElementById(containerId);
        if (!container) return;
        const icon = options.icon || '📭';
        const actionBtn = options.actionLabel
            ? `<button style="margin-top:16px;padding:10px 24px;background:#3B82F6;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;font-weight:500" id="__empty_action__">${options.actionLabel}</button>`
            : '';
        container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center;font-family:-apple-system,sans-serif">
        <div style="font-size:48px;margin-bottom:16px">${icon}</div>
        <h3 style="margin:0 0 8px;font-size:18px;font-weight:600;color:#1F2937">${options.title}</h3>
        ${options.description ? `<p style="margin:0;font-size:14px;color:#6B7280;max-width:300px;line-height:1.5">${options.description}</p>` : ''}
        ${actionBtn}
      </div>`;
        if (options.onAction) container.querySelector('#__empty_action__')?.addEventListener('click', options.onAction);
    }

    /** Error state */
    static error(containerId: string, message: string, onRetry?: () => void): void {
        this.render(containerId, { icon: '⚠️', title: 'Something went wrong', description: message, actionLabel: onRetry ? 'Try Again' : undefined, onAction: onRetry });
    }

    /** No results state */
    static noResults(containerId: string, query?: string): void {
        this.render(containerId, { icon: '🔍', title: 'No results found', description: query ? `No matches for "${query}". Try a different search.` : 'Try adjusting your filters.' });
    }

    /** No data state */
    static noData(containerId: string, actionLabel?: string, onAction?: () => void): void {
        this.render(containerId, { icon: '📋', title: 'Nothing here yet', description: 'Get started by adding your first item.', actionLabel, onAction });
    }

    /** Offline state */
    static offline(containerId: string, onRetry?: () => void): void {
        this.render(containerId, { icon: '📡', title: 'You are offline', description: 'Check your connection and try again.', actionLabel: 'Retry', onAction: onRetry });
    }
}
