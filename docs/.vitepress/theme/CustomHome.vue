<template>
  <div class="custom-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">⚡ Open Source Battery Monitor</span>
          </div>
          <h1 class="hero-title">
            <span class="gradient-text">mybatop</span>
          </h1>
          <p class="hero-description">
            Advanced battery monitoring and tracking tool for Linux systems. 
            Keep your battery healthy with real-time insights and historical data.
          </p>
          <div class="hero-actions">
            <a href="/download" class="btn btn-primary">
              <span>Download Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <a href="/docs/get-started" class="btn btn-secondary">
              Get Started
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="battery-demo">
            <div class="terminal-window">
              <div class="terminal-header">
                <div class="terminal-buttons">
                  <span class="btn-close"></span>
                  <span class="btn-minimize"></span>
                  <span class="btn-maximize"></span>
                </div>
                <span class="terminal-title">mybatop</span>
              </div>
              <div class="terminal-content">
                <div class="battery-display">
                  <div class="battery-icon">
                    <div class="battery-body">
                      <div class="battery-level" :style="{ width: batteryLevel + '%' }"></div>
                    </div>
                    <div class="battery-tip"></div>
                  </div>
                  <div class="battery-info">
                    <div class="battery-percentage">{{ batteryLevel }}%</div>
                    <div class="battery-status">{{ batteryStatus }}</div>
                  </div>
                </div>
                <div class="stats-grid">
                  <div class="stat-item">
                    <span class="stat-label">Health:</span>
                    <span class="stat-value good">{{ batteryHealth }}%</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">Cycles:</span>
                    <span class="stat-value">{{ batteryCycles }}</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">Temp:</span>
                    <span class="stat-value">{{ batteryTemp }}°C</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">Time:</span>
                    <span class="stat-value">{{ timeRemaining }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <div class="section-header">
          <h2>Why Choose mybatop?</h2>
          <p>Comprehensive battery monitoring with advanced features for power users</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Real-time Monitoring</h3>
            <p>Track battery status, health, temperature, and power consumption in real-time with detailed metrics.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Historical Tracking</h3>
            <p>Monitor battery degradation over time with comprehensive historical data and trend analysis.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>Terminal Interface</h3>
            <p>Clean, intuitive terminal-based interface that works perfectly in any Linux environment.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🐧</div>
            <h3>Linux Native</h3>
            <p>Built specifically for Linux systems with support for all major distributions.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📦</div>
            <h3>Easy Installation</h3>
            <p>Available as DEB, RPM, and AUR packages for seamless installation across distributions.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Interactive Charts & Tables</h3>
            <p>Visualized using <strong>Plotly</strong> for interactivity and insights.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧾</div>
            <h3>Generate reports across various formats</h3>
            <p>Generate battery reports as <strong>CSV, JSON, XML</strong> and <strong>HTML</strong> file formats.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💾</div>
            <h3>Export data into multiple formats</h3>
            <p>Export raw data into <strong> CSV, JSON </strong> and <strong>XML</strong> file formats .</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔽</div>
            <h3>Generate Reports based on separte classes</h3>
            <p>Generate reports across classes which are given. click <a href="docs/gen-reports#generate-report-with-classes">here</a> to know more.</p>
          </div></div>

      </div>
    </section>

    <section class="software-thank-section">
     <h2 class="powers"> ⚙️ Powered by Open Source </h2>
    <div class="logo-row">
      <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
        <img src="/bash-transparent.svg" alt="Bash Logo" />
      </a>
      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
        <img src="/python-127-svgrepo-com.svg" alt="Python Logo" />
      </a>
      <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
        <img src="/pandas-svgrepo-com.svg" alt="Pandas Logo" />
      </a>
    </div>
    </section>

    <!-- Installation Preview Section -->
    <section class="install-section">
      <div class="install-container">
        <div class="install-content">
          <h2>Quick Installation</h2>
          <p>Get started with mybatop in seconds</p>
          <div class="install-tabs">
            <button 
              v-for="(tab, index) in installTabs" 
              :key="index"
              :class="['tab-btn', { active: activeTab === index }]"
              @click="activeTab = index"
            >
              {{ tab.name }}
            </button>
          </div>
          <div class="install-code">
            <pre><code>{{ installTabs[activeTab].command }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2>Ready to Monitor Your Battery?</h2>
          <p>Join the community of Linux users who trust mybatop for battery management</p>
          <div class="cta-actions">
            <a href="/download" class="btn btn-primary large">
              Download mybatop
            </a>
            <a href="https://github.com/vishnumur777/mybatop" class="btn btn-outline large">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const batteryLevel = ref(78)
const batteryHealth = ref(92)
const batteryCycles = ref(247)
const batteryTemp = ref(32)
const timeRemaining = ref('2:34h')
const batteryStatus = ref('Discharging')
const activeTab = ref(0)

// Installation tabs
const installTabs = [
  {
    name: 'Ubuntu/Debian',
    command: 'wget https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0.deb\nsudo dpkg -i mybatop-1.0.0.deb'
  },
  {
    name: 'Arch Linux',
    command: 'yay -S mybatop'
  },
  {
    name: 'Fedora/CentOS',
    command: 'wget https://github.com/vishnumur777/mybatop/releases/download/1.0.0/mybatop-1.0.0-1.fc41.noarch.rpm\nsudo rpm -i mybatop-1.0.0-1.fc41.noarch.rpm'
  }
]

// Animation interval
let animationInterval = null

// Battery animation
const animateBattery = () => {
  const levels = [78, 82, 79, 85, 81, 77, 83]
  const statuses = ['Discharging', 'Charging', 'Discharging']
  const times = ['2:34h', '1:45h', '2:12h', '3:01h']
  
  let index = 0
  animationInterval = setInterval(() => {
    batteryLevel.value = levels[index % levels.length]
    batteryStatus.value = statuses[index % statuses.length]
    timeRemaining.value = times[index % times.length]
    index++
  }, 2000)
}

onMounted(() => {
  animateBattery()
})

onUnmounted(() => {
  if (animationInterval) {
    clearInterval(animationInterval)
  }
})
</script>

<style scoped>
/* Reset and base styles */
* {
  box-sizing: border-box;
}

.custom-home {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  padding: 120px 5vw 80px;
  position: relative;
  width: 100%;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(234, 179, 8, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.hero-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
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
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
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
}

.btn-secondary {
  background: var(--vp-c-bg-soft);
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

.btn.large {
  padding: 16px 32px;
  font-size: 1.1rem;
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.battery-demo {
  width: 100%;
  max-width: 450px;
}

.terminal-window {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.terminal-header {
  background: #2d2d2d;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.terminal-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn-close { background: #ff5f57; }
.btn-minimize { background: #ffbd2e; }
.btn-maximize { background: #28ca42; }

.terminal-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.terminal-content {
  padding: 24px;
  color: #ffffff;
  font-family: 'Monaco', 'Menlo', monospace;
}

.battery-display {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.battery-icon {
  display: flex;
  align-items: center;
}

.battery-body {
  width: 60px;
  height: 30px;
  border: 2px solid #22c55e;
  border-radius: 4px;
  position: relative;
  background: #2d2d2d;
}

.battery-level {
  height: 100%;
  background: linear-gradient(90deg, #22c55e, #eab308);
  border-radius: 2px;
  transition: width 0.5s ease;
}

.battery-tip {
  width: 4px;
  height: 16px;
  background: #22c55e;
  border-radius: 0 2px 2px 0;
  margin-left: 2px;
}

.battery-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.battery-percentage {
  font-size: 24px;
  font-weight: bold;
  color: #22c55e;
}

.battery-status {
  font-size: 12px;
  color: #888;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #333;
}

.stat-label {
  color: #888;
  font-size: 14px;
}

.stat-value {
  color: #ffffff;
  font-weight: 500;
}

.stat-value.good {
  color: #22c55e;
}

/* Features Section */
.features-section {
  padding: 80px 5vw;
  background: var(--vp-c-bg-soft);
  width: 100%;
}

.features-container {
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 32px;
}

.feature-card {
  background: var(--vp-c-bg);
  padding: 32px 24px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(34, 197, 94, 0.15);
  border-color: #22c55e;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.logo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  transition: all 0.3s ease;
  margin-left: 40vh;
}

.logo-row img {
  height: 10vh;
  width: 10vh;
  transition: transform 0.2s;
}
.powers {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 10vh;
  color: var(--vp-c-text-1);
}

.logo-row img:hover {
  transform: scale(1.1);
}
/* Installation Section */
.install-section {
  padding: 10px 5vw;
  background: var(--vp-c-bg);
  width: 100%;
}

.install-container {
  width: 100%;
}

.install-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.install-content h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.install-content p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
}

.install-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 12px 24px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background: linear-gradient(120deg, #22c55e, #eab308);
  color: white;
  border-color: #22c55e;
}

.tab-btn:hover:not(.active) {
  background: var(--vp-c-bg-mute);
}

.install-code {
  background: #1a1a1a;
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  overflow-x: auto;
  margin-bottom: 10vh;
}

.install-code pre {
  margin: 0;
  color: #ffffff;
  font-family: 'Monaco', 'Menlo', monospace;
  line-height: 1.6;
}

.install-code code {
  background: none;
  padding: 0;
  font-size: 14px;
}

/* CTA Section */
.cta-section {
  padding: 80px 5vw;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(234, 179, 8, 0.08) 50%, var(--vp-c-bg-soft) 100%);
  width: 100%;
}

.cta-container {
  width: 100%;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.cta-content p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-section,
  .features-section,
  .install-section,
  .cta-section {
    padding-left: 3vw;
    padding-right: 3vw;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    min-width: 200px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 80px 2vw 60px;
  }
  
  .features-section,
  .install-section,
  .cta-section {
    padding: 60px 2vw;
  }
  
  .terminal-content {
    padding: 16px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .install-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab-btn {
    width: 200px;
  }
}
</style>
