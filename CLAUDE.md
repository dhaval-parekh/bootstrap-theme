# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Watch mode: clears build, syncs theme.json → SCSS, starts wp-scripts
npm run build        # Production build: same as dev but no watch
npm run lint         # JS lint (wp-scripts) + PHP lint (phpcs)
npm run lint:js      # JS only
npm run lint:php     # PHP only (via composer)
npm run format       # Auto-fix JS + PHP formatting
npm run phpstan      # PHP static analysis (level 5+)
```

No test suite — `npm test` exits with an error.

## Architecture

### Design token flow

`theme.json` is the single source of truth for colors, typography, and spacing. `npm run sync-theme` (runs automatically during `dev`/`build`) generates `src/scss/_theme-variables.scss` from it via `sync-theme-json.js`. Never edit `_theme-variables.scss` directly.

### Build pipeline

`webpack.config.js` runs two Webpack configs in parallel:
1. **Default `@wordpress/scripts` config** — auto-discovers `src/blocks/*/index.js`, builds each block to `build/blocks/{name}/`
2. **Custom index config** — bundles `src/index.js` (SCSS + Bootstrap JS) to `build/index.js` / `build/index.css`

### Block registration

`inc/core.php` → `register_blocks()` contains a `$blocks` string array. Every new block directory added to `src/blocks/` **must** also be added here or WordPress will not load it.

### Block file structure (4 files per block)

- `block.json` — metadata, attributes, supports, `providesContext` / `usesContext` for parent-child relationships
- `index.js` — calls `registerBlockType(metadata.name, { edit, save })`
- `edit.js` — editor UI with `useBlockProps`, `InnerBlocks`, `InspectorControls`
- `save.js` — serialized frontend HTML with `useBlockProps.save`, `InnerBlocks.Content`

### Parent-child blocks with unique IDs

Blocks needing stable unique IDs (accordion, carousel) store a `blockId` attribute, set once in `edit.js`:
```js
useEffect( () => {
    if ( ! blockId ) {
        setAttributes( { blockId: `bs-${ clientId.substring( 0, 8 ) }` } );
    }
}, [ blockId, clientId, setAttributes ] );
```
Parents pass data down via `providesContext` in `block.json`; children declare `usesContext` and receive it as the `context` prop in both `edit.js` and `save.js`.

### SCSS import chain

`src/scss/main.scss` → `_variables.scss` → `_theme-variables.scss` (auto-generated) → Bootstrap via `~bootstrap/scss/bootstrap`

## PHP coding standards

From `.aiassistant/rules/WordPress.md` — enforced by `phpcs` and `phpstan`:

- **Tabs only**, no spaces for indentation
- Every PHP file must start with `declare(strict_types=1);`
- All code must be namespaced — no global functions (`namespace Bootstrap\Theme\Core;`)
- `snake_case` variables; full descriptive names, no abbreviations (`$post_identifier` not `$pid`)
- PHPDoc required on every function: `@param`, `@return`, `@since` with a blank line between tags
- Max 30 lines per function; use guard clauses (`if ( empty( $x ) ) { return; }`)
- Sanitize inputs (`sanitize_text_field`, `absint`), escape outputs (`esc_html`, `esc_url`), use nonces for state-changing operations
