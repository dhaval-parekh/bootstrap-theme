# AI Development Guidelines: WordPress Project

## 1. Core Standards & Architecture

* **Strict Compliance:** All code **must** pass `phpcs` (WordPress Coding Standards) and `phpstan` (Level 5+) without
  errors or warnings.
* **Indentation:** Use **Tabs** only. Never use spaces for indentation (WordPress Standard).
* **Strict Typing:** Every PHP file must begin with `declare(strict_types=1);`.
* **Namespacing:** All themes and plugins **must** be encapsulated in a project-specific namespace. Global functions are
  prohibited.
	* *Pattern:* `namespace ProjectName\Component;`

## 2. Naming Conventions

* **Variables:** Use `snake_case` only.
* **Verbosity:** Use full, descriptive names. Abbreviations are strictly prohibited.
	* ✅ `$response`, `$post_identifier`, `$user_metadata`, `$error_message`
	* ❌ `$res`, `$pid`, `$data`, `$err`
* **Prefixing:** Prefix all hooks (actions/filters) or any non-namespaced elements with the project slug.

## 3. Function & Method Design

* **Single Responsibility:** Each function must perform exactly **one** task. If a function exceeds 30 lines, refactor
  it.
* **Type Hinting & Defaults:**
	* Every argument **must** have a defined data type.
	* Every argument **must** have a default value assigned.
	* Return types **must** be explicitly defined and utilize a **single type** (avoid union types like `string|int`).
* **Guard Clauses:** Always validate arguments at the start of a function. Return early if conditions are not met.
	* *Example:* `if ( empty( $user_id ) ) { return false; }`

## 4. Database & Security

* **Database Access:** Use the `$wpdb` global for all custom database interactions.
* **SQL Security:** Always wrap queries in `$wpdb->prepare()` to prevent SQL injection.
* **Data Integrity:**
	* **Always** sanitize inputs (e.g., `sanitize_text_field()`, `absint()`).
	* **Always** escape outputs (e.g., `esc_html()`, `esc_attr()`, `esc_url()`).
	* **Always** use Nonces for any form, AJAX, or REST API state-changing operations.

## 5. Documentation & Comments

* **PHPDoc:** Required for every Class, Method, and Function.
	* Must include: `@param`, `@return`, and `@since`.
	* Must leave a blank line between each tag.
* **Inline Comments:** Provide a `//` comment for every logical segment or block of code to explain the intent and logic
  of the following lines.

## 6. Reference Implementation (The Standard)

```php
<?php
/**
 * Short description.
 *
 * @package bootstrap-theme
 */
namespace MyProject\Features;

/**
 * Handles the retrieval of formatted user metadata.
 *
 * @since 1.0.0
 *
 * @param int $user_id The ID of the user. Default 0.
 *
 * @return string The formatted metadata string.
 */
function get_formatted_user_metadata( int $user_id = 0 ): string {
	
	// Guard clause: Return early if user ID is invalid
	if ( 0 === $user_id ) {
		return '';
	}

	// Fetch data using WordPress global database object
	global $wpdb;
	$table_name = $wpdb->prefix . 'usermeta';
	
	// Use prepare for SQL security
	$results = $wpdb->get_var( $wpdb->prepare( 
		"SELECT meta_value FROM $table_name WHERE user_id = %d AND meta_key = %s", 
		$user_id, 
		'display_name' 
	) );

	// Clean and return the data
	return $results ? sanitize_text_field( strval( $results )  ) : '';
}
