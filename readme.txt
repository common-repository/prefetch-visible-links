=== Prefetch visible links ===
Tags: prefetch, performance
Donate link: https://www.liqpay.ua/ru/checkout/kozack
Requires at least: 4.6
Tested up to: 4.9.8
Requires PHP: 5.3.0
Stable tag: trunk
License: GNU General Public License v3.0
License URI: https://gitlab.com/kozackunisoft/wp-prefetch/blob/master/LICENSE

Preloads the page before the visitor clicks on the link.

== Description ==
After loading the page, the plugin starts to follow the user's screen. And as soon as a link appears on the screen within your site - the browser executes the request and downloads it. Now that the user clicks on the link, the browser will instantly display a new cache page. Thus, User Experience will indicate that your site is loading instantly.

=== How it work ===

The plugin uses the built-in browser features to predict user behavior for preloading the tourniquet. See [this](https://en.wikipedia.org/wiki/Link_prefetching "Link prefetching")
 
=== API ===

The plugin also registers a global feature that you can use to preload any URL:
`
window.prefetch('https://example.com/custom/page')
`

== Installation ==
This section describes how to install the plugin and get it working.
 
e.g.
 
1. Upload `prefetch/` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Change container selector in Reading settings