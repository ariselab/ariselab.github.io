# ARiSE Lab Website

GitHub Pages site for the **ARiSE Lab** (Analytical Research in Software Engineering) at Columbia University.

Built with [Jekyll 4](https://jekyllrb.com/) and a warm editorial design theme.

## Running Locally

### Prerequisites

macOS ships with Ruby 2.6 which is too old. You need **Ruby 3.1+**.

```bash
# Install Ruby via Homebrew
brew install ruby

# Add Homebrew Ruby to your PATH — add this line to ~/.zshrc
export PATH="$(brew --prefix ruby)/bin:$PATH"

# Reload shell
source ~/.zshrc

# Verify Ruby version (should be 3.x)
ruby --version

# Install Bundler
gem install bundler

# Install project dependencies
bundle install
```

### Run the dev server

```bash
bundle exec jekyll serve
```

Open http://localhost:4000. Jekyll watches for file changes and rebuilds automatically.

### Quick preview (no Ruby/Jekyll required)

```bash
python3 -m http.server 8234
```

Open http://localhost:8234. Only the homepage works this way; subpages require Jekyll.

## Project Structure

```
_data/                 # Site content as YAML (edit these to update)
  lab.yml              # Lab name, description, social links
  members.yml          # Faculty, PhD students, masters, alumni
  publications.yml     # Papers (title, authors, venue, year, links)
  projects.yml         # Research projects
  news.yml             # News/announcements
  reading.yml          # Reading group schedule
  navigation.yml       # Top navigation links

_layouts/              # Page templates
  modern.html          # Base layout (nav + footer + fonts)
  modern-page.html     # Inner page layout (title + content)

_includes/modern/      # Reusable HTML components
  nav.html             # Fixed navigation bar
  hero.html            # Hero section
  news.html            # News list
  members-preview.html # Team member cards
  publications-preview.html  # Recent publications
  footer.html          # Site footer

_pages/                # Content pages
assets/css/modern.css  # All styles
assets/js/modern.js    # Nav scroll, mobile toggle, scroll animations
index.html             # Homepage (static preview)
```

## Editing Content

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

## Design

- **Theme**: Warm editorial academic — cream background, refined typography
- **Typography**: Lora (serif display) + Figtree (sans body) via Google Fonts
- **Colors**: Cream `#faf8f5` background, wine `#7b2d4e` accent, gold `#b8963e` highlights
- **Features**: Scroll-triggered fade-in animations, frosted glass navbar, responsive mobile layout

## Credits

Originally forked from [Academic Pages](https://github.com/academicpages/academicpages.github.io) (Minimal Mistakes Jekyll Theme by Michael Rose, MIT License).
