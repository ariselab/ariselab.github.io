# ARiSE Lab Website

GitHub Pages site for the **ARiSE Lab** (Analytical Research in Software Engineering) at Columbia University.

Built with [Jekyll](https://jekyllrb.com/) and a custom bento-grid / glassmorphism dark theme.

## Project Structure

```
_data/              # All site data (edit these to update content)
  lab.yml           # Lab name, description, social links
  members.yml       # Faculty, PhD students, masters, alumni
  publications.yml  # Papers (title, authors, venue, year, links)
  projects.yml      # Research projects
  news.yml          # News/announcements
  reading.yml       # Reading group schedule and papers

_layouts/           # Page layouts
  bento.html        # Main bento-grid layout (dark theme)

_includes/bento/    # Reusable components
  nav.html          # Fixed navigation bar
  hero.html         # Hero section with mesh gradient
  overview.html     # Bento grid: about, stats, news, featured pub
  publications.html # Publications grouped by year
  members.html      # Team members by role
  projects.html     # Project cards
  reading.html      # Reading group table
  footer.html       # Site footer

_pages/home.html    # Homepage (assembles all sections)
assets/css/bento.css  # All styles
assets/js/bento.js    # Scroll animations, glow effects, mobile nav
```

## How to Add/Edit Content

All content lives in `_data/*.yml` files. Edit these to update the site — no HTML changes needed.

**Add a member** — edit `_data/members.yml`:
```yaml
phd_students:
  - name: "New Person"
    photo: "/images/photo.jpg"
    email: "email@columbia.edu"
    website: "https://example.com"
    description: "Research interests..."
```

**Add a publication** — edit `_data/publications.yml`:
```yaml
- title: "Paper Title"
  authors: "Author One, Author Two"
  venue: "Conference Name"
  year: 2026
  paper_url: "https://link-to-paper.pdf"
  code_url: "https://github.com/repo"
  award: "Best Paper"  # optional
```

**Add news** — edit `_data/news.yml`:
```yaml
- date: 2026-03-01
  text: "Our paper was accepted at ICSE 2026!"
```

## Running Locally

### Option 1: Jekyll (full site with Liquid templates)

```bash
# Install Ruby and Bundler (macOS)
brew install ruby
gem install bundler

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
# Open http://localhost:4000
```

### Option 2: Quick Preview (static HTML, no Jekyll required)

```bash
# Using npx (Node.js)
npx serve .
# Open http://localhost:3000/_preview_bento.html

# Or using Python
python3 -m http.server 8000
# Open http://localhost:8000/_preview_bento.html
```

The `_preview_bento.html` file is a standalone version of the site with hardcoded data, useful for quickly previewing design changes without Jekyll.

## Design

- **Theme**: Dark, Apple-style bento grid with glassmorphism
- **Typography**: Syne (display) + Outfit (body) via Google Fonts
- **Features**: Animated mesh gradient hero, cursor-following glow on cards, scroll-triggered reveal animations, frosted glass cards, responsive mobile layout
- **Colors**: Deep black background, blue-lavender accent gradient, frosted glass surfaces

## Branches

- `gh-pages` — production site (original academic theme)
- `feature/bento-redesign` — this experimental dark bento-grid design
- `feature/modern-redesign` — clean minimal light redesign experiment

## Credits

Originally forked from [Academic Pages](https://github.com/academicpages/academicpages.github.io) (Minimal Mistakes Jekyll Theme by Michael Rose, MIT License).
