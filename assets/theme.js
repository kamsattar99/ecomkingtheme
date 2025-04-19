/* Theme JS for EcomKing Theme */

(function() {
  'use strict';
  
  // DOM elements
  const body = document.body;
  const cartDrawer = document.getElementById('CartDrawer');
  const searchDrawer = document.getElementById('SearchDrawer');
  const overlay = document.querySelector('.overlay');
  const cartToggle = document.querySelector('.js-cart-toggle');
  const searchToggle = document.querySelector('.js-search-toggle');
  const drawerCloseButtons = document.querySelectorAll('.drawer__close');
  const mobileMenuToggle = document.querySelector('.js-mobile-menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  
  // Initialize
  function init() {
    bindUIEvents();
  }
  
  // Bind UI Events
  function bindUIEvents() {
    // Cart drawer toggle
    if (cartToggle) {
      cartToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDrawer(cartDrawer);
      });
    }
    
    // Search drawer toggle
    if (searchToggle) {
      searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDrawer(searchDrawer);
      });
    }
    
    // Drawer close buttons
    drawerCloseButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        closeAllDrawers();
      });
    });
    
    // Overlay click
    if (overlay) {
      overlay.addEventListener('click', function() {
        closeAllDrawers();
      });
    }
    
    // Mobile menu toggle
    if (mobileMenuToggle && siteNav) {
      mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenuToggle.classList.toggle('is-active');
        siteNav.classList.toggle('is-active');
      });
    }
    
    // Close drawers on ESC key
    document.addEventListener('keyup', function(e) {
      if (e.key === 'Escape') {
        closeAllDrawers();
      }
    });
  }
  
  // Toggle drawer
  function toggleDrawer(drawer) {
    if (!drawer) return;
    
    const isActive = drawer.classList.contains('is-active');
    
    // Close all drawers first
    closeAllDrawers();
    
    // If drawer wasn't active, open it
    if (!isActive) {
      drawer.classList.add('is-active');
      overlay.classList.add('is-active');
      body.classList.add('drawer-open');
    }
  }
  
  // Close all drawers
  function closeAllDrawers() {
    const activeDrawers = document.querySelectorAll('.drawer.is-active');
    
    activeDrawers.forEach(function(drawer) {
      drawer.classList.remove('is-active');
    });
    
    if (overlay) {
      overlay.classList.remove('is-active');
    }
    
    body.classList.remove('drawer-open');
  }
  
  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', init);
})();
