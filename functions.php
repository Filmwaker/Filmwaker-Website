<?php
function filmwaker_en_scripts() {
    wp_enqueue_style( 'filmwaker-main', get_template_directory_uri() . '/styles.css', array(), '1.0' );
}
add_action( 'wp_enqueue_scripts', 'filmwaker_en_scripts' );
?>