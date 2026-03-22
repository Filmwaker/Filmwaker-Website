<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbkip5b54pxmh1' );

/** Database username */
define( 'DB_USER', 'ungy8fnpyvrax' );

/** Database password */
define( 'DB_PASSWORD', 'hqg5fzfkmfmn' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'rZp~S$dv6l}cV$rTT_u;hfpX[^Qz%M[cu5N@Ms#DjH7RcX:NW!-y-5h*LHTE4UyI' );
define( 'SECURE_AUTH_KEY',   '1d+YgV|+%^FCas)5xRP{W^C~]iQ&*`#7vpGItb,Qm3g1^&cAt+O@Xr@ !dfY9]{}' );
define( 'LOGGED_IN_KEY',     'H+b|MN1BrY$3`ubo~cbW#+Y}eb(4BVDdqxOE{NKZf#*N0i!swpGq|f4:tNC8M>Q ' );
define( 'NONCE_KEY',         'jFSQ>.vn;>.6[SF+xlh5DH)~980Ue%pdP9&FD>_i1ZRjHi4ZSW^[[Xow{y^AUYm1' );
define( 'AUTH_SALT',         'g!Sz,_mjeJUAg,#lD/b%Cdb@i M]6HVpUxs1t/+!_UIS+]CtqpGBYzCn2bl|/<mE' );
define( 'SECURE_AUTH_SALT',  '0rZ1X[7;Gxo2^{oXt]efM-/M~mM]C(r;QJm5y+45RrEx.{)Um-(+<lKL]/uY/FIz' );
define( 'LOGGED_IN_SALT',    'KLd[HvYDw{4kr:yw5VEmTv%)~]MRnQqv}iXc37#{e<Wayg!)XWbeTp3uIOJtD[Bf' );
define( 'NONCE_SALT',        'sQs?w%eof~G>o!@)g;/{E>gGM &%8X/DSmb6~%iqO)KjAQmE)i?pw}BfT_!UG3Xt' );
define( 'WP_CACHE_KEY_SALT', '/8`P4mB8_L7~bJhOu;$Q7kMDIN=/tJ?0sjI|!~|E5EnJXNG$;4;Bdeu:Jf?GPv=k' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'fhc_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
@include_once('/var/lib/sec/wp-settings-pre.php'); // Added by SiteGround WordPress management system
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
