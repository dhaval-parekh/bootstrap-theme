<?php
/**
 * Core functions for bootstrap theme.
 *
 * @package bootstrap-theme
 */

namespace Bootstrap\Theme\Core;

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

	// Register blocks.
	add_action( 'init', __NAMESPACE__ . '\\register_blocks' );
}

/**
 * Register blocks.
 *
 * @return void
 */
function register_blocks(): void {
	// List of blocks to register.
	$blocks = [
		'alert',
		'badge',
		'progress',
		'spinner',
		'card',
		'button-group',
		'accordion',
		'accordion-item',
		'list-group',
		'list-group-item',
		'breadcrumb',
		'breadcrumb-item',
		'carousel',
		'carousel-item',
	];

	// Register blocks.
	foreach ( $blocks as $block ) {
		register_block_type( BOOTSTRAP_THEME_DIRECTORY . '/build/blocks/' . $block );
	}
}

/**
 * Theme supports.
 *
 * @return void
 */
function theme_supports(): void {
	/**
	 * Editor styles.
	 */
	add_theme_support( 'editor-styles' );
	add_editor_style( 'build/index.css' );

	/**
	 * Localization.
	 */
	load_theme_textdomain( 'bootstrap-theme', get_template_directory() . '/languages' );
}

/**
 * Enqueue styles and scripts.
 *
 * @return void
 */
function enqueue_styles_and_scripts(): void {
	$asset_file = BOOTSTRAP_THEME_DIRECTORY . '/build/index.asset.php';

	if ( file_exists( $asset_file ) ) {
		$asset = require $asset_file;
	} else {
		$asset = [
			'dependencies' => [],
			'version'      => BOOTSTRAP_THEME_VERSION,
		];
	}

	wp_enqueue_style( 'bootstrap-theme-style', BOOTSTRAP_THEME_URI . '/build/index.css', [], $asset['version'], 'all' );
	wp_enqueue_script( 'bootstrap-theme-script', BOOTSTRAP_THEME_URI . '/build/index.js', $asset['dependencies'], $asset['version'], true );
}
