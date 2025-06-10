<template>
  <div class="custom-download">
    <!-- Hero Section -->
    <section class="download-hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">📦 Available Now</span>
          </div>
          <h1 class="hero-title">
            Download <span class="gradient-text">mybatop</span>
          </h1>
          <p class="hero-description">
            Choose your Linux distribution and get started with mybatop in minutes.
            All packages are professionally built and tested.
          </p>
          <div class="version-info">
            <span class="version-badge">Latest: v1.0.0</span>
            <span class="release-date">Released: June 2025</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Options Section -->
    <section class="download-section">
      <div class="download-container">
        <div class="section-header">
          <h2>Choose Your Distribution</h2>
          <p>Select the package format that matches your Linux distribution</p>
        </div>
        
        <div class="download-grid">
          <!-- Debian/Ubuntu -->
          <div class="download-card featured">
            <div class="card-header">
              <div class="distro-logo">
                <img src="/debian-svgrepo-com.svg" alt="Arch Linux Logo" width="60" height="60" />
              </div>
              <div class="distro-info">
                <h3>Ubuntu / Debian</h3>
                <span class="distro-type">DEB Package</span>
              </div>
            </div>
            <div class="card-content">
              <p>For Ubuntu, Debian, Linux Mint, and other Debian-based distributions.</p>
              <div class="install-preview">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">sudo dpkg -i mybatop-1.0.0.deb</span>
                </div>
              </div>
            </div>
            <div class="card-actions">
              <a :href="debDownloadUrl" class="btn btn-primary" @click="trackDownload('deb')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download DEB
              </a>
              <div class="file-info">
                <span>Size: 9.4 KB</span>
                <span>•</span>
                <span>{{ debDownloads }} downloads</span>
              </div>
            </div>
          </div>

          <!-- Arch Linux -->
          <div class="download-card featured">
            <div class="card-header">
              <div class="distro-logo arch">
                <img src="/arch-linux-svgrepo-com.svg" alt="Arch Linux Logo" width="60" height="60">
              </div>
              <div class="distro-info">
                <h3>Arch Linux</h3>
                <span class="distro-type">AUR Package</span>
              </div>
            </div>
            <div class="card-content">
              <p>Available in the Arch User Repository (AUR) for Arch Linux and derivatives.</p>
              <div class="install-preview">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">yay -S mybatop</span>
                </div>
              </div>
            </div>
            <div class="card-actions">
              <a :href="archDownloadUrl" class="btn btn-primary" @click="trackDownload('arch')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PKG
              </a>
              <div class="file-info">
                <span>Size: 15.1 KB</span>
                <span>•</span>
                <span>{{ archDownloads }} downloads</span>
              </div>
            </div>
          </div>

          <!-- Fedora/CentOS -->
          <div class="download-card featured">
            <div class="card-header">
              <div class="distro-logo fedora">
                <img src="/fedora-changed.svg" alt="Arch Linux Logo" width="60" height="60">
              </div>
              <div class="distro-info">
                <h3>Fedora / CentOS</h3>
                <span class="distro-type">RPM Package</span>
              </div>
            </div>
            <div class="card-content">
              <p>For Fedora, CentOS, RHEL, openSUSE, and other RPM-based distributions.</p>
              <div class="install-preview">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">sudo rpm -i mybatop-1.0.0-1.fc41.noarch.rpm</span>
                </div>
              </div>
            </div>
            <div class="card-actions">
              <a :href="rpmDownloadUrl" class="btn btn-primary" @click="trackDownload('rpm')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download RPM
              </a>
              <div class="file-info">
                <span>Size: 2.3 MB</span>
                <span>•</span>
                <span>{{ rpmDownloads }} downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Source Code Section -->
    <section class="source-section">
      <div class="source-container">
        <div class="section-header">
          <h2>Source Code</h2>
          <p>Build mybatop from source or contribute to the project. Don't know how to install? <a href="/docs/install-from-source">Click Here</a></p>
        </div>
        
        <div class="source-grid">
          <div class="source-card">
            <div class="source-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <h3>Tarball Archive</h3>
            <p>Complete source code in compressed tar.gz format</p>
            <a :href="tarballUrl" class="btn btn-outline" @click="trackDownload('tarball')">
              Download TAR.GZ
            </a>
          </div>
          
          <div class="source-card">
            <div class="source-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
            </div>
            <h3>ZIP Archive</h3>
            <p>Source code in ZIP format for easy extraction</p>
            <a :href="zipUrl" class="btn btn-outline" @click="trackDownload('zip')">
              Download ZIP
            </a>
          </div>
          
          <div class="source-card">
            <div class="source-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </div>
            <h3>GitHub Repository</h3>
            <p>Clone the repository and contribute to development</p>
            <a href="https://github.com/vishnumur777/mybatop" class="btn btn-outline">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Help -->
    <section class="help-section">
      <div class="help-container">
        <div class="help-content">
          <h2>Need Help Installing?</h2>
          <p>Check out our comprehensive installation guide</p>
          <a href="/docs/install" class="btn btn-primary">
            View Installation Guide
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Download URLs
const debDownloadUrl = 'https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0.deb'
const archDownloadUrl = 'https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0-1-any.pkg.tar.zst'
const rpmDownloadUrl = 'https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0-1.fc41.noarch.rpm'
const tarballUrl = 'https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0.tar.gz'
const zipUrl = 'https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0.zip'

// Download counters (mock data)
const debDownloads = ref(1247)
const archDownloads = ref(523)
const rpmDownloads = ref(384)

// Track downloads
const trackDownload = (type) => {
  console.log(`Download started: ${type}`)
  // You can add analytics tracking here
}

onMounted(() => {
  // Animate download counters
  const animateCounter = (ref, target) => {
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        ref.value = target
        clearInterval(timer)
      } else {
        ref.value = Math.floor(current)
      }
    }, 30)
  }
  
  setTimeout(() => {
    animateCounter(debDownloads, 1247)
    animateCounter(archDownloads, 523)
    animateCounter(rpmDownloads, 384)
  }, 500)
})
</script>

<style scoped>
/* Reset and base styles */
* {
  box-sizing: border-box;
}

.custom-download {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow-x: hidden;
}

/* Hero Section */
.download-hero {
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  padding: 120px 5vw 80px;
  position: relative;
  width: 100%;
}

.download-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(234, 179, 8, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  margin-bottom: 20px;
}

.badge-text {
  background: linear-gradient(120deg, #22c55e, #eab308);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 24px 0;
  line-height: 1.1;
  color: var(--vp-c-text-1);
}

.gradient-text {
  background: linear-gradient(120deg, #22c55e 20%, #eab308 50%, #f59e0b 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.version-info {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.version-badge {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--vp-c-divider);
}

.release-date {
  color: var(--vp-c-text-2);
  font-size: 14px;
  padding: 6px 0;
}

/* Download Section */
.download-section {
  padding: 80px 5vw;
  background: var(--vp-c-bg);
  width: 100%;
}

.download-container {
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.section-header p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--vp-c-text-2);
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.download-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
}

.download-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(25, 114, 58, 0.15);
  border-color: #22c55e;
}

.download-card.featured {
  border: 2px solid #22c55e;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}

.distro-logo {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.distro-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: var(--vp-c-text-1);
}

.distro-type {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.card-content {
  padding: 0 24px 24px;
}

.card-content p {
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  line-height: 1.6;
}

.install-preview {
  background: #1a1a1a;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
}

.command-line {
  color: #ffffff;
  margin-bottom: 8px;
}

.command-line:last-child {
  margin-bottom: 0;
}

.prompt {
  color: #22c55e;
  margin-right: 8px;
}

.command {
  color: #ffffff;
}

.alternative-text {
  color: #888;
  font-size: 12px;
  margin-top: 12px;
  font-style: italic;
}

.card-actions {
  padding: 0 24px 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  margin-bottom: 12px;
}

.btn-primary {
  background: linear-gradient(120deg, #22c55e, #eab308);
  color: white;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
  background: linear-gradient(120deg, #16a34a, #d97706);
  color: black;
}

.btn-secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-secondary:hover {
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-outline:hover {
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
}

.file-info {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

/* Source Code Section */
.source-section {
  padding: 80px 5vw;
  background: var(--vp-c-bg-soft);
  width: 100%;
}

.source-container {
  width: 100%;
}

.source-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.source-card {
  background: var(--vp-c-bg);
  padding: 32px 24px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.source-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
}

.source-icon {
  color: #22c55e;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.source-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.source-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 20px;
  line-height: 1.5;
}

/* Help Section */
.help-section {
  padding: 80px 5vw;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, var(--vp-c-bg) 100%);
  width: 100%;
}

.help-container {
  width: 100%;
  text-align: center;
}

.help-content h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.help-content p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .download-hero,
  .download-section,
  .source-section,
  .help-section {
    padding-left: 3vw;
    padding-right: 3vw;
  }
  
  .download-grid,
  .source-grid {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .popularity-badge {
    position: static;
    border-radius: 12px;
    margin-top: 8px;
  }
  
  .version-info {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .download-hero {
    padding: 80px 2vw 60px;
  }
  
  .download-section,
  .source-section,
  .help-section {
    padding: 60px 2vw;
  }
  
  .download-card,
  .source-card {
    margin: 0 auto;
    max-width: 100%;
  }
}
</style>