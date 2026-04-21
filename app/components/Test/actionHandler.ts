export function performAction(action?: string | null, url?: string) {
    if (!action) return;
    const safeUrl = url || "#";
    switch (action) {
        case 'open_new_tab_here':
            window.open(safeUrl, '_blank');
            break;
        case 'open_current_page':
            window.location.href = safeUrl;
            break;
        default:
            console.warn('Unknown action', action);
    }
}
