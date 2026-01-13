# TeacherSlide Quick Reference

Quick cheat sheet for daily TeacherSlide usage.

## Starting a Presentation

```bash
# Browse all presentations
npm start

# Or directly present a specific deck
reveal-md slides/ap-cs/unit1.md
```

## Presentation Controls

| Key | Action |
|-----|--------|
| Arrow keys / Space | Next slide |
| ESC | Slide overview |
| S | Speaker notes view |
| F | Fullscreen |
| ? | Show all shortcuts |

## Markdown Syntax

### New Slide (Horizontal)
```markdown
---
```

### Sub-slide (Vertical)
```markdown
----
```

### Code Block
````markdown
```java
public class Example {
    // code here
}
```
````

### Image
```markdown
![Description](../../assets/subject/image.png)
```

### YouTube Video
```markdown
<iframe width="800" height="450"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen>
</iframe>
```

### Speaker Notes
```markdown
Note:
These notes only appear in speaker view (press S)
```

## Git Commands

```bash
# Check status
git status

# Add and commit
git add slides/ap-cs/unit1.md
git commit -m "feat(ap-cs): add unit 1 slides"

# Push to GitHub
git push
```

## Common Claude Prompts

### Generate New Slides
> "Claude, create a 10-slide deck about [topic] for [subject]. Save as slides/[subject]/[name].md"

### Update Existing Slides
> "Claude, add a practice problems slide to slides/ap-cs/unit1.md"

### Bulk Updates
> "Claude, add review questions to all slides in slides/ap-ush/"

### Fix Issues
> "Claude, the fonts in css/custom.css are too small. Increase h1 to 4em"

## File Paths

- Slides: `slides/[subject]/[name].md`
- Images: `assets/[subject]/[filename]`
- Custom CSS: `css/custom.css`
- Config: `reveal-md.json`

## Troubleshooting

**Slides don't load:**
- Check markdown syntax (triple backticks for code, --- for slides)
- Verify file is in slides/ directory

**Images don't show:**
- Check path is relative: `../../assets/subject/file.png`
- Verify image file exists

**CSS not applying:**
- Check `reveal-md.json` points to correct CSS file
- Clear browser cache and reload
