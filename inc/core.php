<?php
/**
 * Core functions for bootstrap theme.
 *
 * @package bootstrap-theme
 */

namespace Bootstrap\Theme\Core;

use const Bootstrap\Theme\VERSION;

/**
 * Setup function for the theme.
 *
 * @return void
 */
function setup(): void {
	// Theme supports.
	add_action( 'after_setup_theme', __NAMESPACE__ . '\\theme_supports' );

	// Enqueue styles and scripts.
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_styles_and_scripts' );
}

/**
 * Theme supports.
 *
 * @return void
 */
function theme_supports(): void {
	// Localization.
	load_theme_textdomain( 'bootstrap-theme', get_template_directory() . '/languages' );
}


/**
 * Enqueue styles and scripts.
 *
 * @return void
 */
function enqueue_styles_and_scripts(): void {
	wp_enqueue_style( 'bootstrap-theme-style', BOOTSTRAP_THEME_URI . '/build/index.css', [], VERSION, 'all' );
	wp_enqueue_script( 'bootstrap-theme-script', BOOTSTRAP_THEME_URI . '/build/index.js', [], VERSION, true );
}
