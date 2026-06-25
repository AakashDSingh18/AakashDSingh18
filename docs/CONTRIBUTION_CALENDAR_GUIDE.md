# 📊 Contribution Calendar Documentation

## Overview

This package provides creative and dynamic visualizations for your GitHub contribution calendar and activity graphs. It includes multiple tools and customizations to make your GitHub profile stand out.

## 📁 Project Structure

```
├── assets/
│   ├── contribution-styles.css      # Custom CSS animations and styling
│   ├── contribution-calendar.js     # Interactive calendar module
│   └── svg-animations.js            # SVG animation utilities
├── demo/
│   └── contribution-calendar.html   # Interactive demo page
├── docs/
│   └── USAGE.md                     # Detailed usage guide
└── README.md                        # Main profile README
```

## 🎨 Features

### 1. **Interactive Contribution Calendar**
- Real-time GitHub stats integration
- Hover tooltips showing contribution counts
- Smooth animations and transitions
- Responsive grid layout

### 2. **Dynamic Visualization**
- Color-coded contribution intensity levels
- Animated gradient effects
- Glowing effects on hover
- Wave and pulse animations

### 3. **Multiple Display Options**

#### Option A: GitHub Stats Cards (Recommended)
- Uses Vercel's `github-readme-stats` service
- Automatic daily updates
- Fully customizable themes

#### Option B: Activity Graph
- Real-time contribution tracking
- Shows your daily activity patterns
- Beautiful line chart visualization

#### Option C: Streak Statistics
- Current streak counter
- Longest streak tracking
- Weekly statistics

#### Option D: Interactive HTML Demo
- Standalone HTML page
- Self-contained visualization
- Can be deployed separately

## 🚀 Quick Start

### Step 1: Update Your README

Replace the old GitHub Stats section with this improved version:

```markdown
### 🎨 Creative Contribution Showcase

#### 📈 Dynamic Contribution Heatmap
![Contribution Graph](https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&theme=radical&show_icons=true&count_private=true&hide_border=true)

#### 🔥 Streak Statistics
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&theme=radical&hide_border=true)

#### 💻 Most Used Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=radical&hide_border=true)

#### 📊 Activity Graph
[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&theme=radical&hide_border=true)](https://github.com/YOUR_USERNAME)
```

### Step 2: Customize Theme Colors

Available themes for `github-readme-stats`:
- `radical` (recommended) - Red/Pink theme
- `gruvbox` - Earthy tones
- `tokyonight` - Purple/Blue theme
- `nord` - Blue/Gray theme
- `dracula` - Purple/Dark theme
- `monokai` - Monochrome

```markdown
# Change theme parameter
&theme=dracula
```

### Step 3: Add Interactive Calendar (Optional)

Include the interactive HTML demo:

```markdown
### 🎯 Interactive Contribution Calendar
[View Interactive Calendar](./demo/contribution-calendar.html)
```

## 🎨 Customization Guide

### CSS Animations

Edit `assets/contribution-styles.css` to customize:

```css
/* Change primary color */
--primary-color: #00d084;      /* Green */
--primary-dark: #05a66d;       /* Dark green */

/* Adjust animation speed */
animation: gradientShift 15s ease infinite;  /* Change 15s to desired duration */

/* Modify glow effect */
box-shadow: 0 0 20px var(--primary-color);   /* Increase 20px for stronger glow */
```

### JavaScript Configuration

Edit `assets/contribution-calendar.js`:

```javascript
// Change username
new ContributionCalendar('contribution-calendar', 'YOUR_USERNAME');

// Adjust contribution levels
const colors = [
  '#0d1117', // level 0 - no activity
  '#005a36', // level 1 - low activity
  '#00872d', // level 2 - medium activity
  '#00ad1f', // level 3 - high activity
  '#00d084', // level 4 - very high activity
];
```

## 📊 Understanding Contribution Levels

| Level | Color | Meaning |
|-------|-------|---------|
| 0 | `#0d1117` | No contributions |
| 1 | `#005a36` | 1-2 contributions |
| 2 | `#00872d` | 3-5 contributions |
| 3 | `#00ad1f` | 6-10 contributions |
| 4 | `#00d084` | 10+ contributions |

## 🎯 Best Practices

### 1. **Keep It Updated**
- The stats automatically refresh
- Activity graph updates daily
- No manual updates needed

### 2. **Use Consistent Colors**
- Match your personal brand
- Keep the color scheme cohesive
- Use the green (#00d084) for primary accent

### 3. **Optimize Performance**
- Images are cached and optimized
- Minimal JavaScript footprint
- Responsive design for all devices

### 4. **Accessibility**
- High contrast colors
- Alternative text for images
- Semantic HTML structure

## 🔗 Useful URLs

### GitHub Stats Service
- **Main**: https://github-readme-stats.vercel.app
- **Docs**: https://github.com/anuraghazra/github-readme-stats

### Activity Graph
- **Service**: https://github-readme-activity-graph.vercel.app
- **Docs**: https://github.com/Ashutosh00710/github-readme-activity-graph

### Streak Counter
- **Service**: https://github-readme-streak-stats.herokuapp.com
- **Docs**: https://github.com/DenverCoder1/github-readme-streak-stats

## 🛠️ Troubleshooting

### Issue: Images not loading
**Solution**: Clear browser cache or add timestamp to URL
```markdown
![Stats](URL?t=1)
```

### Issue: Stats showing old data
**Solution**: Wait 24 hours or force refresh by visiting the service URL

### Issue: Colors not displaying correctly
**Solution**: Ensure theme parameter is spelled correctly
```markdown
&theme=radical  # Correct
&theme=Radical  # Incorrect
```

## 📈 Advanced Customization

### Add Custom Parameters

```markdown
<!-- Additional options -->
![Stats](https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true&hide_border=true&show=reviews,discussions_started,discussions_answered&theme=radical)
```

### Create Custom Gradient Card

```html
<div style="background: linear-gradient(135deg, #00d084 0%, #05a66d 100%); padding: 20px; border-radius: 8px;">
  <h3 style="color: white;">Your Custom Stats</h3>
</div>
```

## 🎓 Learning Resources

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [SVG Animation Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)

## 📝 License

This project is licensed under MIT License - feel free to use and customize!

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue or create a pull request!

---

**Last Updated**: June 2026
**Version**: 1.0.0
**Author**: Aakash Deep Singh
