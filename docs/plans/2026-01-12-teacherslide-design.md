# TeacherSlide: Markdown-Based Presentation System

**Date:** 2026-01-12
**Purpose:** Create a streamlined, AI-integrated presentation workflow for teaching AP Computer Science, AP US History, and coaching Elk Grove Football

## Project Overview

TeacherSlide is a lightweight presentation engine that allows Kyle to create and maintain teaching presentations using Markdown files. The system integrates Claude Code for rapid content generation and leverages git for year-over-year version control of curriculum materials.

### Core Requirements

1. **Markdown-based content** - All presentations authored in plain text Markdown files
2. **Organized by subject** - Separate directories for AP CS, APUSH, and Football
3. **Embedded media support** - Smooth handling of images, local videos, and YouTube embeds
4. **AI workflow integration** - Claude Code generates and updates slide content
5. **Simple presentation** - Single command to launch and present any deck
6. **Version control** - Git tracking for iterative improvement of materials

## Technology Stack

- **reveal-md** - CLI tool that renders Markdown as reveal.js presentations
- **Markdown** - Content format with simple slide separators (`---`)
- **Custom CSS** - Classroom-optimized styling (large fonts, high contrast)
- **Git + GitHub** - Version control and remote backup
- **Node.js/npm** - For reveal-md installation and execution

## Architecture

### Directory Structure

```
TeacherSlide/
├── package.json            # npm dependencies tracking
├── reveal-md.json          # reveal-md configuration
├── css/
│   └── custom.css          # Classroom-optimized styles
├── slides/
│   ├── ap-cs/              # AP Computer Science presentations
│   │   ├── unit1.md
│   │   ├── unit2.md
│   │   └── variables.md
│   ├── ap-ush/             # AP US History presentations
│   │   ├── civil-war.md
│   │   ├── reconstruction.md
│   │   └── constitutional-convention.md
│   └── football/           # Elk Grove Football presentations
│       ├── playbook.md
│       ├── 3-4-defense.md
│       └── scouting.md
├── assets/                 # Media files organized by subject
│   ├── ap-cs/
│   │   ├── java-variables.png
│   │   └── loop-demo.gif
│   ├── ap-ush/
│   │   ├── civil-war-map.jpg
│   │   └── reconstruction-video.mp4
│   └── football/
│       ├── 3-4-defense.png
│       └── practice-drill.mp4
└── docs/
    └── plans/              # Design documents and plans
```

### Presentation Loading

reveal-md handles all presentation loading and serving:

1. **Single deck presentation:** `reveal-md slides/ap-cs/unit1.md`
2. **Directory browsing:** `reveal-md slides/` (shows clickable listing of all decks)
3. **Live reload during editing:** `reveal-md slides/ap-cs/unit1.md -w`

The browser automatically opens to `http://localhost:1948` with the presentation loaded.

### Markdown Format

Slides use standard reveal.js markdown conventions:

```markdown
# Slide Title
Content goes here

---

## Next Slide
- Bullet point 1
- Bullet point 2

----

### Vertical Slide (Sub-topic)
This creates a vertical slide accessible with down arrow
```

**Separators:**
- `---` - Horizontal slide (next in sequence)
- `----` - Vertical slide (sub-topic, accessed via down arrow)

## Classroom-Optimized Styling

### Design Goals

High school students sitting at the back of the classroom must be able to read all content clearly on a projector.

### Styling Priorities

1. **Large fonts** - Minimum 32px for body text, 48px+ for headings
2. **High contrast** - Dark text on light backgrounds (projector-friendly)
3. **Code readability** - Large monospace fonts with syntax highlighting
4. **Image sizing** - Default to fill most of slide without manual adjustments

### Implementation

Create `reveal-md.json` config file specifying:
- Custom CSS file path (`css/custom.css`)
- Theme base (e.g., "simple" or "serif")
- Code syntax highlighting theme
- Default reveal.js options

Example CSS customizations:
```css
.reveal h1 { font-size: 3em; }
.reveal p, .reveal li { font-size: 1.8em; }
.reveal code { font-size: 1.5em; }
.reveal img { max-height: 70vh; }
```

## Media Handling

### Local Media Assets

**Images:**
```markdown
![Water Cycle Diagram](../assets/ap-ush/water-cycle.png)
```

**Videos:**
```markdown
<video src="../assets/football/practice-drill.mp4" controls></video>
```

**File paths:** Use relative paths from the markdown file location (`../assets/subject/file.ext`)

### Online Video Embedding

**YouTube:**
```markdown
<iframe width="800" height="450"
  src="https://www.youtube.com/embed/VIDEO_ID"
  data-autoplay
  allowfullscreen>
</iframe>
```

**Key features:**
- Use `/embed/` URL format (not `/watch?v=`)
- reveal.js auto-detects and manages playback
- `data-autoplay` starts video when slide appears
- Videos automatically pause when navigating away
- Works with YouTube, Vimeo, and other embeddable services

## Claude Code Workflow Integration

### Content Generation

**Creating new slide decks:**
```
"Claude, create a 10-slide deck about Java variables for AP CS.
Include examples of int, double, String, and boolean.
Save it as slides/ap-cs/variables.md"
```

Claude Code will:
- Generate markdown with proper separators
- Include syntax-highlighted code examples
- Reference placeholder images in assets folder
- Follow classroom styling conventions

### Content Updates

**Editing existing decks:**
```
"Claude, add a practice problem slide to the end of
slides/ap-cs/variables.md about declaring multiple variables"
```

**Bulk operations:**
```
"Claude, add a 'Review Questions' slide to the end of
every markdown file in slides/ap-ush/"
```

### Media Management

**Finding and embedding media:**
```
"Claude, help me find a diagram of the 3-4 defense formation
and add it to slides/football/playbook.md"
```

Claude can:
- Search for relevant images
- Download to appropriate assets subfolder
- Update markdown with correct relative paths
- Suggest YouTube videos and generate embed code

### Key Advantage

Plain text markdown files allow Claude Code to:
- Read and analyze slide content programmatically
- Perform bulk find-and-replace operations
- Generate new content following existing patterns
- Maintain consistency across all presentations

This is significantly harder with PowerPoint/Google Slides binary formats.

## Version Control Strategy

### Git Workflow

**Initial setup:**
```bash
git init
git add .
git commit -m "feat: initial TeacherSlide setup"
```

**Daily workflow:**
```bash
# Make changes with Claude's help
git add slides/ap-cs/unit1.md
git commit -m "feat(ap-cs): update unit1 with new Java 17 examples"
```

**Year-over-year evolution:**
```bash
# Review last year's changes
git log slides/ap-cs/unit1.md

# Compare to previous year
git diff HEAD~1 slides/ap-cs/unit1.md

# Revert changes that didn't work
git checkout HEAD~1 -- slides/ap-ush/civil-war.md
```

### GitHub Integration

**Remote backup and multi-machine access:**
```bash
# Initial push
git remote add origin https://github.com/yourusername/TeacherSlide.git
git push -u origin main

# Daily sync (if using multiple machines)
git pull    # Get latest changes
git push    # Send new changes
```

**Benefits:**
- Automatic backup of all teaching materials
- Access from both home and school (if using multiple machines)
- Full history of what worked/didn't work each year
- GitHub renders markdown files for web preview
- Option to share with other teachers (public repo) or keep private

### Commit Convention

Follow standard commit message format:
```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor
Scopes: ap-cs, ap-ush, football, config
```

Examples:
- `feat(ap-cs): add loops practice problems`
- `fix(ap-ush): correct Civil War battle dates`
- `docs(football): update playbook with new formations`

## Presentation Workflow

### Launching Presentations

**Option 1: Present specific deck**
```bash
cd ~/TeacherSlide
reveal-md slides/ap-cs/unit1.md
```

**Option 2: Browse and select**
```bash
reveal-md slides/
# Opens directory listing, click any deck
```

**Option 3: Live editing mode**
```bash
reveal-md slides/ap-cs/unit1.md -w
# Auto-refreshes when you save changes
```

Browser automatically opens to `http://localhost:1948`.

### Navigation Controls

**During presentation:**
- **Arrow keys / Space** - Advance slides
- **ESC** - Slide overview/grid view
- **S** - Speaker notes view (if notes added to slides)
- **F** - Fullscreen mode

### Speaker Notes (Optional)

Add notes that appear in speaker view but not on main slides:

```markdown
# Variables in Java

Types store different kinds of data

Note:
Remember to mention the difference between primitive and reference types.
Ask class for examples before showing the list.
```

### Multi-Computer Setup (If Needed)

**At home:**
1. Edit slides with Claude Code
2. Commit changes
3. Push to GitHub

**At school:**
1. `git pull` to get latest changes
2. `reveal-md slides/` to present

## Installation Requirements

### One-time Setup

```bash
# Install reveal-md globally
npm install -g reveal-md

# Verify installation
reveal-md --version
```

### Per-Machine Requirements

If using multiple computers, install reveal-md on each:
- Home machine
- School machine(s)

## Known Considerations

### Potential Gotchas

1. **Internet dependency** - YouTube embeds require internet connection during presentation
2. **Projector compatibility** - Test custom CSS on classroom projector once (weird resolutions)
3. **Global installation** - reveal-md must be installed globally on each machine used
4. **Asset paths** - Relative paths must be correct when moving files around

### Testing Checklist

Before first classroom use:
- [ ] Test on classroom projector (font sizes, contrast, resolution)
- [ ] Verify YouTube embeds work on school network
- [ ] Test navigation controls on presentation laptop
- [ ] Confirm local video formats play correctly
- [ ] Check speaker notes view if using

## Success Criteria

The TeacherSlide system succeeds if:

1. **Speed** - Creating new presentations is faster than PowerPoint/Google Slides
2. **AI Integration** - Claude Code seamlessly generates and updates slide content
3. **Maintainability** - Year-over-year updates are simple and trackable
4. **Reliability** - Presentations work smoothly in classroom without technical issues
5. **Flexibility** - Easy to embed any media (images, videos, code examples)
6. **Consistency** - Styling changes propagate to all presentations automatically

## Future Enhancements (Out of Scope)

Potential additions not included in initial implementation:

- Export to PDF for handouts
- Interactive code examples (live execution)
- Student quiz/poll integration
- Presentation analytics (time spent per slide)
- Shared slide library with other teachers
- Mobile remote control for advancing slides

These can be considered after validating the core workflow.
