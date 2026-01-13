# TeacherSlide

Markdown-based presentation system for teaching AP Computer Science, AP US History, and coaching Elk Grove Football.

## Quick Start

### Installation

```bash
# Install reveal-md globally
npm install -g reveal-md

# Or install project dependencies
npm install
```

### Running Presentations

```bash
# Browse all presentations
npm start

# Or use reveal-md directly
reveal-md slides/

# Present a specific deck
reveal-md slides/ap-cs/sample.md

# Enable live reload while editing
reveal-md slides/ap-cs/sample.md -w
```

### Presentation Controls

- **Arrow keys / Space** - Advance slides
- **ESC** - Slide overview/grid view
- **S** - Speaker notes view
- **F** - Fullscreen mode

## Project Structure

```
TeacherSlide/
├── slides/           # Markdown presentation files
│   ├── ap-cs/        # AP Computer Science decks
│   ├── ap-ush/       # AP US History decks
│   └── football/     # Football coaching decks
├── assets/           # Images, videos, and media
│   ├── ap-cs/
│   ├── ap-ush/
│   └── football/
├── css/              # Custom styling
│   └── custom.css    # Classroom-optimized styles
└── docs/             # Documentation and plans
    └── plans/
```

## Creating Slides

### Basic Markdown Format

```markdown
# Slide Title
Your content here

---

## Next Slide
- Bullet point 1
- Bullet point 2

----

### Vertical Slide (Sub-topic)
Use four dashes for vertical slides
```

### Slide Separators

- `---` - Horizontal slide (next in sequence)
- `----` - Vertical slide (sub-topic, down arrow)

### Adding Images

```markdown
![Description](../../assets/ap-cs/diagram.png)
```

### Adding Local Videos

```markdown
<video src="../../assets/football/drill.mp4" controls></video>
```

### Embedding YouTube Videos

```markdown
<iframe width="800" height="450"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen>
</iframe>
```

### Adding Code (for AP CS)

````markdown
```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}
```
````

### Speaker Notes (Optional)

```markdown
# Slide Title

Visible content

Note:
These notes only appear in speaker view (press S)
Students won't see this
```

## Git Workflow

```bash
# Check status
git status

# Add changes
git add slides/ap-cs/unit1.md

# Commit with descriptive message
git commit -m "feat(ap-cs): add loops practice problems"

# Push to GitHub
git push
```

## Custom Styling

Edit `css/custom.css` to customize:
- Font sizes
- Colors
- Code highlighting
- Image dimensions

Changes apply to all presentations automatically.

## Configuration

Edit `reveal-md.json` to configure:
- Theme
- Transitions
- Code highlighting theme
- Default reveal.js options

## Sample Presentations

Three sample presentations are included:

1. **AP CS:** `slides/ap-cs/sample.md` - Java variables lesson
2. **APUSH:** `slides/ap-ush/sample.md` - Constitutional Convention
3. **Football:** `slides/football/sample.md` - 3-4 Defense fundamentals

Run `npm start` and click any sample to see it in action.

## Tips

- Keep slides simple and visual
- Use large fonts (already configured in CSS)
- Test on classroom projector before first use
- Save frequently and commit to git
- Use Claude Code to generate/update slide content

## Resources

- [reveal-md Documentation](https://github.com/webpro/reveal-md)
- [reveal.js Documentation](https://revealjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)

## License

MIT
