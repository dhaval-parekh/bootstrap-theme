<?php
/**
 * Bootstrap functions for the theme.
 *
 * @package bootstrap-theme
 */

namespace Bootstrap\Theme;

const VERSION = '1.0.0';

define( 'BOOTSTRAP_THEME_DIRECTORY', get_template_directory() );
define( 'BOOTSTRAP_THEME_URI', get_template_directory_uri() );

// Autoload Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

// Includes.
require_once __DIR__ . '/inc/core.php';

// Setup.
Core\setup();


