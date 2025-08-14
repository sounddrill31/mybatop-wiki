<template>
  <nav class="custom-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo/Brand -->
      <div class="navbar-brand">
        <a href="/" class="brand-link">
          <div class="brand-icon">
            <div class="battery-logo">
              <div class="battery-body-mini">
                <div class="battery-level-mini"></div>
              </div>
              <div class="battery-tip-mini"></div>
            </div>
          </div>
          <span class="brand-text">mybatop</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="navbar-menu desktop">
        <div class="navbar-links">
          <a href="/" class="nav-link" :class="{ active: currentPath === '/' }">
            <span>Home</span>
          </a>
          <a href="/download" class="nav-link" :class="{ active: currentPath === '/download' }">
            <span>Download</span>
          </a>
          <a href="/docs/get-started" class="nav-link" :class="{ active: currentPath.startsWith('/docs') }">
            <span>Docs</span>
          </a>
        </div>
        
        <div class="navbar-actions">
          <div @click.prevent.stop="openSearch">
            <VPNavBarSearch class="navbar-search" />
          </div>
          
          <!-- Theme Toggle -->
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          
          <!-- GitHub Link -->
          <a href="https://github.com/vishnumur777/mybatop" class="github-link" target="_blank" rel="noopener noreferrer" title="View on GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu($event)" :class="{ open: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-links">
        <a href="/" class="mobile-link" :class="{ active: currentPath === '/' }" @click="closeMobileMenu">
          Home
        </a>
        <a href="/download" class="mobile-link" :class="{ active: currentPath === '/download' }" @click="closeMobileMenu">
          Download
        </a>
        <a href="/docs/get-started" class="mobile-link" :class="{ active: currentPath.startsWith('/docs') }" @click="closeMobileMenu">
          Docs
        </a>
      </div>
      <div class="mobile-actions">
        <button class="mobile-search-btn" @click.prevent.stop="openSearch">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          Search
        </button>
        
        <!-- Theme Toggle for Mobile -->
        <button class="mobile-theme-toggle" @click="toggleTheme">
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
        
        <a href="https://github.com/vishnumur777/mybatop" class="mobile-github-link" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { VPNavBarSearch } from 'vitepress/theme'
import { useRouter } from 'vitepress'
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

const router = useRouter()

// Reactive state
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDark = ref(false)
const currentPath = ref('/')

// Watch for route changes
watch(() => router.route.path, (newPath) => {
  currentPath.value = newPath
}, { immediate: true })

// Handle scroll effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Mobile menu functions
const toggleMobileMenu = (event) => {
  event.preventDefault()
  event.stopPropagation()
  
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Search functions
const openSearch = () => {
  // This triggers the VitePress search modal
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))
}

// Theme toggle function
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialize theme
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
  document.documentElement.classList.toggle('dark', isDark.value)
}

// Handle escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
  initTheme()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Custom Navbar Styles */
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.3);
  transition: all 0.3s ease;
}

.custom-navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: rgba(229, 231, 235, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Dark mode support */
:root.dark .custom-navbar {
  background: rgba(26, 26, 26, 0.85);
  border-bottom-color: rgba(55, 65, 81, 0.3);
}

:root.dark .custom-navbar.scrolled {
  background: rgba(26, 26, 26, 0.95);
  border-bottom-color: rgba(55, 65, 81, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand/Logo */
.navbar-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: 700;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.brand-link:hover {
  transform: translateX(2px);
}

.brand-icon {
  display: flex;
  align-items: center;
}

.battery-logo {
  display: flex;
  align-items: center;
  gap: 2px;
}

.battery-body-mini {
  width: 24px;
  height: 12px;
  border: 2px solid #22c55e;
  border-radius: 2px;
  position: relative;
  background: transparent;
}

.battery-level-mini {
  height: 100%;
  width: 80%;
  background: linear-gradient(90deg, #22c55e, #eab308);
  border-radius: 1px;
  animation: pulse 2s ease-in-out infinite alternate;
}

.battery-tip-mini {
  width: 2px;
  height: 6px;
  background: #22c55e;
  border-radius: 0 1px 1px 0;
}

.brand-text {
  background: linear-gradient(120deg, #22c55e 20%, #eab308 50%, #f59e0b 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes pulse {
  0% { opacity: 0.8; }
  100% { opacity: 1; }
}

/* Desktop Navigation */
.navbar-menu.desktop {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.nav-link.active {
  color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, #22c55e, #eab308);
  border-radius: 1px;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-btn,
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover,
.theme-toggle:hover {
  background: var(--vp-c-bg-soft);
  border-color: #22c55e;
  color: #22c55e;
  transform: translateY(-1px);
}

.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.3s ease;
}

.github-link:hover {
  background: var(--vp-c-bg-soft);
  border-color: #22c55e;
  color: #22c55e;
  transform: translateY(-1px);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 1001;
  pointer-events: auto;
}

.mobile-menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--vp-c-text-1);
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-links {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-link {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-link:hover,
.mobile-link.active {
  background: linear-gradient(120deg, rgba(34, 197, 94, 0.1), rgba(234, 179, 8, 0.08));
  color: #22c55e;
}

.mobile-actions {
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-search-btn,
.mobile-theme-toggle,
.mobile-github-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.mobile-search-btn:hover,
.mobile-theme-toggle:hover,
.mobile-github-link:hover {
  background: linear-gradient(120deg, rgba(34, 197, 94, 0.1), rgba(234, 179, 8, 0.08));
  border-color: #22c55e;
  color: #22c55e;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-menu.desktop {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .navbar-container {
    padding: 0 16px;
  }
  
  .brand-link {
    font-size: 1.3rem;
  }
  
  .battery-body-mini {
    width: 20px;
    height: 10px;
  }
}
</style>