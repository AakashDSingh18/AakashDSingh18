/**
 * Contribution Calendar Generator
 * Creates an interactive, animated contribution calendar visualization
 */

class ContributionCalendar {
  constructor(containerId, username) {
    this.container = document.getElementById(containerId);
    this.username = username;
    this.data = {};
    this.init();
  }

  async init() {
    console.log(`🎨 Initializing contribution calendar for ${this.username}`);
    await this.fetchContributionData();
    this.render();
    this.addEventListeners();
  }

  async fetchContributionData() {
    try {
      // Fetch GitHub user stats
      const response = await fetch(`https://api.github.com/users/${this.username}`);
      const userData = await response.json();

      this.data = {
        username: userData.login,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        avatar: userData.avatar_url,
      };

      console.log('✅ Contribution data fetched:', this.data);
    } catch (error) {
      console.error('❌ Error fetching contribution data:', error);
      this.data = { username: this.username, error: true };
    }
  }

  generateCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const calendarData = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const intensity = Math.floor(Math.random() * 5); // 0-4 intensity levels
      calendarData.push({
        date: new Date(d),
        intensity: intensity,
      });
    }

    return calendarData;
  }

  getContributionColor(intensity) {
    const colors = [
      '#0d1117', // level 0
      '#005a36', // level 1
      '#00872d', // level 2
      '#00ad1f', // level 3
      '#00d084', // level 4
    ];
    return colors[intensity] || colors[0];
  }

  render() {
    if (!this.container) {
      console.error('Container not found');
      return;
    }

    // Create header
    const header = document.createElement('div');
    header.className = 'contribution-header';
    header.innerHTML = `
      <h2>📊 Contribution Calendar ${new Date().getFullYear()}</h2>
      <p>🌟 Tracking contributions for @${this.username}</p>
    `;
    this.container.appendChild(header);

    // Create stats section
    const stats = document.createElement('div');
    stats.className = 'contribution-stats';
    stats.innerHTML = `
      <div class="stat-box">
        <span class="stat-label">Public Repos</span>
        <span class="stat-value">${this.data.public_repos || 0}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Followers</span>
        <span class="stat-value">${this.data.followers || 0}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Following</span>
        <span class="stat-value">${this.data.following || 0}</span>
      </div>
    `;
    this.container.appendChild(stats);

    // Create calendar grid
    const calendar = document.createElement('div');
    calendar.className = 'contribution-grid';

    const calendarData = this.generateCalendar();

    // Month labels
    const monthLabels = document.createElement('div');
    monthLabels.className = 'month-labels';
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    months.forEach((month, index) => {
      const label = document.createElement('span');
      label.textContent = month;
      monthLabels.appendChild(label);
    });
    calendar.appendChild(monthLabels);

    // Calendar squares
    const grid = document.createElement('div');
    grid.className = 'calendar-squares';

    calendarData.forEach((day, index) => {
      const square = document.createElement('div');
      square.className = `contribution-box contribution-level-${day.intensity}`;
      square.title = `${day.date.toDateString()}: ${day.intensity} contributions`;
      square.setAttribute('data-date', day.date.toISOString());
      square.setAttribute('data-intensity', day.intensity);

      // Add animation delay for staggered effect
      square.style.animationDelay = `${(index % 7) * 0.05}s`;

      square.addEventListener('mouseenter', (e) => this.showTooltip(e, day));
      square.addEventListener('mouseleave', () => this.hideTooltip());

      grid.appendChild(square);
    });

    calendar.appendChild(grid);

    // Add legend
    const legend = document.createElement('div');
    legend.className = 'contribution-legend';
    legend.innerHTML = `
      <span>Less</span>
      <div class="contribution-box contribution-level-0"></div>
      <div class="contribution-box contribution-level-1"></div>
      <div class="contribution-box contribution-level-2"></div>
      <div class="contribution-box contribution-level-3"></div>
      <div class="contribution-box contribution-level-4"></div>
      <span>More</span>
    `;
    calendar.appendChild(legend);

    this.container.appendChild(calendar);
  }

  showTooltip(event, day) {
    const tooltip = document.createElement('div');
    tooltip.className = 'contribution-tooltip';
    tooltip.innerHTML = `
      <strong>${day.date.toDateString()}</strong><br>
      ${day.intensity} contributions
    `;
    document.body.appendChild(tooltip);

    const rect = event.target.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.top - 50 + 'px';
    tooltip.style.pointerEvents = 'none';

    this.currentTooltip = tooltip;
  }

  hideTooltip() {
    if (this.currentTooltip) {
      this.currentTooltip.remove();
      this.currentTooltip = null;
    }
  }

  addEventListeners() {
    // Add any additional event listeners here
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('contribution-box')) {
        console.log('Clicked on contribution:', e.target.getAttribute('data-date'));
      }
    });
  }
}

// Utility function to create animated stats
function createAnimatedStats(containerId, stats) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const statsContainer = document.createElement('div');
  statsContainer.className = 'animated-stats-container';

  Object.entries(stats).forEach(([label, value], index) => {
    const statCard = document.createElement('div');
    statCard.className = 'stat-card';
    statCard.style.animationDelay = `${index * 0.1}s`;
    statCard.innerHTML = `
      <div class="stat-card-value">${value}</div>
      <div class="stat-card-label">${label}</div>
    `;
    statsContainer.appendChild(statCard);
  });

  container.appendChild(statsContainer);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Auto-initialize contribution calendar if element exists
    const calendarContainer = document.getElementById('contribution-calendar');
    if (calendarContainer) {
      new ContributionCalendar('contribution-calendar', 'AakashDSingh18');
    }
  });
} else {
  const calendarContainer = document.getElementById('contribution-calendar');
  if (calendarContainer) {
    new ContributionCalendar('contribution-calendar', 'AakashDSingh18');
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ContributionCalendar, createAnimatedStats };
}
