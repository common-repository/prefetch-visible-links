jQuery(window).one('load', function () {

  const prefetcedUrls = new Set();
    
  /**
   * Create <link href="${href}" rel="${rel}" as="${as}"> in <head>
   * @param {String} href href attribute
   * @param {String?} rel rel attribute
   * @param {String?} as as attribute
   */
  function prefetch (href, rel = 'prefetch', as = null) {
    if (!href) {
      return
    }

    const preloadLink = document.createElement("link");
    preloadLink.href = href;
    preloadLink.rel = rel;
    if (as) {
      preloadLink.as = as;
    }
    document.head.appendChild(preloadLink);
    prefetcedUrls.add(href)
  }

  /**
   * Check is element in viewport
   * @param {Element} el
   * @returns {Boolean}
   */
  function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

  /**
   * Find <a> in viewport and prefetch them
   */
  function prefetchVisibleLinks() {
    let selector = 
      + `a[href^="${prefetchConfig.base}/"]`                                 // Only internal links
      + `:not([href="${location.origin + location.pathname}"])`              // Exclude current URL
      + `:not([href^="${location.origin + location.pathname}#"])`            // Exclude current URL with any hash
      + `:not([href^="${location.origin + location.pathname}?replytocom="])` // Exclude reply to comment links
      + `:not([href^="${prefetchConfig.base}/wp-"])`                         // Exclude all WP pages
      + [...prefetcedUrls].reduce((s,u) => s+=`:not([href="${u}"])`, '')     // Exclude already prefetched links
    
    const links = jQuery(prefetchConfig.container).find(selector)
    links.each(function () {
      if (isElementInViewport(this)) {
        prefetch(this.href)
      }
    })
  }

  // Run first search on window loaded
  prefetchVisibleLinks()

  // Run on scroll
  jQuery(window).on('scroll', prefetchVisibleLinks); 

  // Make prefetch global for using third-paty plugins and themes
  window.prefetch = prefetch
});