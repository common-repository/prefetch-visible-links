<?php

add_action( 'admin_init', function () {

  add_settings_section(
		'prefetch_section', // секция
    __('Prefetch visible links', 'prefetch-visible-links'),
    function () {},
		'reading' // страница
	);

  add_settings_field(
    'prefetch-container',
    __('Container selector', 'prefetch-visible-links'), 
    function () {
      echo '
        <input name="prefetch-container" type="text" id="prefetch-container" aria-describedby="prefetch-container" value="'.get_option( 'prefetch-container', 'body' ).'" class="regular-text code">
        <p class="description" id="prefetch-container-description">'.__('CSS selector for container. Only links in this container will be prefetched', 'prefetch-visible-links').'</p>
      ';
    }, 
    'reading',
    'prefetch_section'
  );

  register_setting( 'reading', 'prefetch-container' );
  
});
