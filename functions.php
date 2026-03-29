<?php
/**
 * Bootstrap functions for the theme.
 *
 * @package bootstrap-theme
 */

namespace Bootstrap\Theme;

/**
 * Get theme version.
 *
 * @return string
 */
function get_version(): string {
	$theme = wp_get_theme();
	return $theme->get( 'Version' );
}

// Autoload Composer dependencies.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

define( 'BOOTSTRAP_THEME_VERSION', get_version() );
define( 'BOOTSTRAP_THEME_DIRECTORY', get_template_directory() );
define( 'BOOTSTRAP_THEME_URI', get_template_directory_uri() );

// Includes.
require_once __DIR__ . '/inc/core.php';

// Setup.
Core\setup();
