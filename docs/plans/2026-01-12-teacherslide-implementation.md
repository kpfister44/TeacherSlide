# TeacherSlide Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the TeacherSlide presentation system setup, verify functionality, and establish GitHub workflow.

**Architecture:** reveal-md CLI tool serving markdown presentations with custom classroom-optimized CSS. Git-based version control with GitHub remote for backup and multi-machine access.

**Tech Stack:** reveal-md (reveal.js wrapper), Node.js/npm, Markdown, Custom CSS, Git/GitHub

---

## Task 1: Install Dependencies and Verify Setup

**Files:**
- Verify: `package.json`
- Verify: `reveal-md.json`
- Verify: `css/custom.css`

**Step 1: Install reveal-md globally**

```bash
npm install -g reveal-md
```

Expected: Installation success message with version number

**Step 2: Verify reveal-md installation**

```bash
reveal-md --version
```

Expected: Version number displays (e.g., "6.1.3")

**Step 3: Install local project dependencies**

```bash
npm install
```

Expected: Creates `node_modules/` directory and installs reveal-md locally

**Step 4: Verify directory structure**

```bash
ls -la
```

Expected: See all directories (slides/, assets/, css/, docs/) and configuration files

**Step 5: Commit package-lock.json**

Wait - check .gitignore first to see if package-lock.json is ignored.

```bash
cat .gitignore | grep package-lock
```

Expected: "package-lock.json" appears in .gitignore (it is ignored, so no commit needed)

---

## Task 2: Test AP Computer Science Sample Presentation

**Files:**
- Test: `slides/ap-cs/sample.md`
- Verify: `css/custom.css` applies correctly
- Verify: `reveal-md.json` configuration works

**Step 1: Start the AP CS sample presentation**

```bash
reveal-md slides/ap-cs/sample.md
```

Expected: Browser opens automatically to `http://localhost:1948` with the Variables in Java presentation

**Step 2: Navigate through slides**

Manual test:
- Press arrow keys to navigate slides
- Verify horizontal slides work (---)
- Verify vertical slide works (----) on "Practice Problem" slide
- Press ESC to see overview
- Press F for fullscreen

Expected: All navigation works smoothly, slides display correctly

**Step 3: Verify styling**

Manual test:
- Check heading font sizes (should be large - 3.5em for h1)
- Check code blocks have syntax highlighting (Monokai theme)
- Check colors are high contrast (dark text on light background)
- Verify slide numbers appear in bottom right

Expected: Custom CSS from `css/custom.css` is applied, large readable fonts

**Step 4: Test live reload feature**

```bash
# Kill the current server (Ctrl+C)
# Restart with watch flag
reveal-md slides/ap-cs/sample.md -w
```

**Step 5: Make a test edit**

Open `slides/ap-cs/sample.md` in editor and change the title from "Variables in Java" to "Variables in Java - TEST"

Expected: Browser automatically refreshes with new title

**Step 6: Revert test edit**

Change title back to "Variables in Java" and save.

Expected: Browser refreshes again with original title

**Step 7: Stop the server**

Press Ctrl+C in terminal

Expected: Server stops, port 1948 released

---

## Task 3: Test AP US History Sample Presentation

**Files:**
- Test: `slides/ap-ush/sample.md`

**Step 1: Start the APUSH sample presentation**

```bash
reveal-md slides/ap-ush/sample.md
```

Expected: Browser opens with Constitutional Convention presentation

**Step 2: Navigate through presentation**

Manual test:
- Navigate through all slides
- Verify bullet points render correctly
- Check bold text styling (should be blue, bold)
- Check emphasized text (should be pink, italic)

Expected: All formatting renders correctly with classroom-optimized styling

**Step 3: Stop the server**

Press Ctrl+C

Expected: Server stops

---

## Task 4: Test Football Sample Presentation

**Files:**
- Test: `slides/football/sample.md`

**Step 1: Start the Football sample presentation**

```bash
reveal-md slides/football/sample.md
```

Expected: Browser opens with 3-4 Defense presentation

**Step 2: Verify code block styling**

Manual test:
- Navigate to slide with the formation diagram (ASCII art)
- Verify monospace font renders the diagram correctly
- Check code background color and padding

Expected: Formation diagram displays correctly in monospace font

**Step 3: Stop the server**

Press Ctrl+C

Expected: Server stops

---

## Task 5: Test Directory Browsing Mode

**Files:**
- Test: All markdown files in `slides/` directory

**Step 1: Start reveal-md in directory mode**

```bash
reveal-md slides/
```

Expected: Browser opens with a directory listing showing three folders (ap-cs, ap-ush, football)

**Step 2: Click into ap-cs folder**

Manual test: Click on "ap-cs" link in browser

Expected: Shows listing of markdown files in ap-cs/ (sample.md)

**Step 3: Click sample.md**

Manual test: Click on "sample.md" link

Expected: Presentation starts, shows Variables in Java slides

**Step 4: Navigate back to directory listing**

Click browser back button

Expected: Returns to directory listing

**Step 5: Test npm script**

```bash
# Stop current server (Ctrl+C)
npm start
```

Expected: Same directory browsing interface opens (npm start runs `reveal-md slides/`)

**Step 6: Stop the server**

Press Ctrl+C

Expected: Server stops

---

## Task 6: Test Subject-Specific npm Scripts

**Files:**
- Verify: `package.json` scripts section

**Step 1: Test ap-cs script**

```bash
npm run present:ap-cs
```

Expected: Browser opens to ap-cs directory listing

**Step 2: Stop and test ap-ush script**

```bash
# Ctrl+C to stop
npm run present:ap-ush
```

Expected: Browser opens to ap-ush directory listing

**Step 3: Stop and test football script**

```bash
# Ctrl+C to stop
npm run present:football
```

Expected: Browser opens to football directory listing

**Step 4: Stop the server**

Press Ctrl+C

Expected: Server stops

---

## Task 7: Create README Usage Examples

**Files:**
- Verify: `README.md` has complete instructions

**Step 1: Read through README**

```bash
cat README.md
```

Expected: README contains Quick Start, Project Structure, Creating Slides sections

**Step 2: Verify all sections are present**

Manual check:
- Quick Start with installation
- Running Presentations
- Presentation Controls
- Project Structure
- Creating Slides (with examples)
- Git Workflow
- Sample Presentations

Expected: All sections present and accurate

---

## Task 8: Create GitHub Repository

**Files:**
- Configure: Git remote
- Push: All commits to GitHub

**Step 1: Check current git status**

```bash
git status
```

Expected: Working tree clean, on branch main, 2 commits exist

**Step 2: Review commit history**

```bash
git log --oneline
```

Expected: Two commits visible (design doc, initial structure)

**Step 3: Create GitHub repository**

Manual step: Kyle needs to create GitHub repository at https://github.com/new

Repository name: `TeacherSlide`
Description: "Markdown-based presentation system for teaching"
Visibility: Choose private or public

Expected: GitHub repository created, shows git remote add command

**Step 4: Add GitHub remote**

```bash
git remote add origin https://github.com/YOURUSERNAME/TeacherSlide.git
```

Replace `YOURUSERNAME` with actual GitHub username.

Expected: Remote added successfully (no output)

**Step 5: Verify remote was added**

```bash
git remote -v
```

Expected: Shows origin with fetch and push URLs

**Step 6: Push to GitHub**

```bash
git push -u origin main
```

Expected: All commits pushed to GitHub, branch tracking set up

**Step 7: Verify on GitHub**

Manual step: Open browser to GitHub repository URL

Expected: All files visible on GitHub, commit history shows 2 commits

---

## Task 9: Test Media Asset Organization

**Files:**
- Verify: `assets/` directory structure
- Create: Test image to verify asset loading

**Step 1: Check assets directory structure**

```bash
ls -la assets/
ls -la assets/ap-cs/
ls -la assets/ap-ush/
ls -la assets/football/
```

Expected: Three subdirectories exist, all currently empty

**Step 2: Create a test markdown file with image reference**

Create `slides/ap-cs/test-image.md`:

```markdown
# Image Test

---

## Sample Image

![Test Image](../../assets/ap-cs/test.png)

This tests relative path image loading.
```

**Step 3: Create a simple test image**

For now, just verify the file structure is ready. Kyle will need to add actual images later when creating real content.

**Step 4: Document asset path pattern**

Verify README shows correct relative path pattern:

From `slides/ap-cs/file.md` → `../../assets/ap-cs/image.png`
From `slides/ap-ush/file.md` → `../../assets/ap-ush/image.png`

Expected: Pattern documented in README (already present)

**Step 5: Remove test file**

```bash
rm slides/ap-cs/test-image.md
```

Expected: Test file removed

---

## Task 10: Create YouTube Embed Example

**Files:**
- Create: `slides/ap-ush/youtube-example.md`

**Step 1: Create example markdown with YouTube embed**

Create `slides/ap-ush/youtube-example.md`:

```markdown
# YouTube Embed Example

This is a demonstration of embedding YouTube videos

---

## How to Embed YouTube

Use this format:

\`\`\`markdown
<iframe width="800" height="450"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen>
</iframe>
\`\`\`

---

## Example Video

<iframe width="800" height="450"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  allowfullscreen>
</iframe>

(This is just a test - replace VIDEO_ID with your actual video)
```

**Step 2: Test the YouTube example**

```bash
reveal-md slides/ap-ush/youtube-example.md
```

Expected: Presentation opens, YouTube iframe appears on slide 3

**Step 3: Navigate to video slide**

Manual test: Navigate to the third slide with the embedded video

Expected: YouTube player appears (may show "Video unavailable" if no internet, but iframe should render)

**Step 4: Stop server**

Press Ctrl+C

Expected: Server stops

**Step 5: Commit YouTube example**

```bash
git add slides/ap-ush/youtube-example.md
git commit -m "docs(ap-ush): add YouTube embed example"
```

Expected: Commit created successfully

---

## Task 11: Create Speaker Notes Example

**Files:**
- Create: `slides/ap-cs/speaker-notes-example.md`

**Step 1: Create markdown with speaker notes**

Create `slides/ap-cs/speaker-notes-example.md`:

```markdown
# Speaker Notes Demo

This slide has hidden notes for the teacher

Note:
These notes are only visible in speaker view.
Press 'S' to open speaker view.
Students won't see this when you're presenting.

---

## Teaching Tips

Remember to ask questions

Note:
- Ask class for examples first
- Wait 5-10 seconds for responses
- Cold call if no volunteers
- Connect to previous lesson on variables

---

## Without Notes

This slide has no speaker notes.

Just regular content.
```

**Step 2: Test speaker notes**

```bash
reveal-md slides/ap-cs/speaker-notes-example.md
```

Expected: Presentation opens

**Step 3: Open speaker view**

Manual test:
1. Press 'S' key on keyboard
2. New window opens showing speaker view
3. Navigate through slides

Expected:
- Speaker view shows current slide, next slide, timer, and notes
- Notes appear on slides 1 and 2
- No notes on slide 3

**Step 4: Stop server**

Press Ctrl+C in both windows

Expected: Server stops

**Step 5: Commit speaker notes example**

```bash
git add slides/ap-cs/speaker-notes-example.md
git commit -m "docs(ap-cs): add speaker notes example"
```

Expected: Commit created

---

## Task 12: Document Claude Code Workflow

**Files:**
- Create: `docs/claude-workflow.md`

**Step 1: Create Claude workflow documentation**

Create `docs/claude-workflow.md`:

```markdown
# Claude Code Workflow Guide

This document explains how to use Claude Code to create and maintain TeacherSlide presentations.

## Generating New Slide Decks

### Full Deck Generation

**Prompt example:**

> Claude, create a 12-slide presentation about Java loops for AP Computer Science.
> Include for loops, while loops, and do-while loops with examples.
> Save it as slides/ap-cs/loops.md

Claude will:
- Generate markdown with proper `---` separators
- Include code examples with syntax highlighting
- Follow classroom styling (large fonts)
- Save to specified path

### Customizing Generated Content

**Prompt example:**

> Claude, in the loops presentation, add more practice problems after the while loops section.
> Include at least 3 problems of varying difficulty.

## Updating Existing Decks

### Adding Content

**Prompt example:**

> Claude, add a slide to the end of slides/ap-cs/variables.md about type casting.
> Include examples of casting between int and double.

### Bulk Updates

**Prompt example:**

> Claude, add a "Review Questions" slide to the end of every markdown file in slides/ap-ush/

This updates all APUSH presentations at once.

### Fixing Typos or Errors

**Prompt example:**

> Claude, in slides/ap-ush/civil-war.md, fix the date of the Battle of Gettysburg.
> It should be July 1-3, 1863.

## Managing Media Assets

### Finding and Adding Images

**Prompt example:**

> Claude, find a diagram showing the difference between stack and heap memory.
> Download it to assets/ap-cs/ and add it to slides/ap-cs/memory.md

### YouTube Embeds

**Prompt example:**

> Claude, I want to embed this YouTube video: https://www.youtube.com/watch?v=abc123
> Add it to slides/football/playbook.md on a new slide about zone coverage.

Claude will generate the correct iframe code with embed URL.

## Git Workflow with Claude

### Committing Changes

**Prompt example:**

> Claude, commit the changes to the loops presentation with an appropriate commit message.

Claude will:
- Stage the changed files
- Write a descriptive commit message following project conventions
- Create the commit

### Reviewing Changes Before Commit

**Prompt example:**

> Claude, show me what changed in slides/ap-cs/variables.md since the last commit.

## Style Customization

### Adjusting CSS

**Prompt example:**

> Claude, the heading font size is too small on the projector.
> Increase h1 to 4em and h2 to 3em in css/custom.css

### Theme Changes

**Prompt example:**

> Claude, I want to try a dark theme for better contrast.
> Update the CSS to use white text on dark backgrounds.

## Best Practices

1. **Be specific** - Include exact file paths and clear requirements
2. **Review before presenting** - Always test generated slides with `reveal-md`
3. **Commit frequently** - Commit after each significant change
4. **Use descriptive prompts** - More detail = better results
5. **Iterate** - Refine slides based on how they work in class

## Example Session Flow

1. Generate initial deck:
   > "Claude, create slides about the American Revolution for APUSH"

2. Review and refine:
   > "Claude, add more detail about the causes of the war"

3. Add media:
   > "Claude, add an image of the Boston Tea Party to the relevant slide"

4. Test presentation:
   > Run `reveal-md slides/ap-ush/american-revolution.md`

5. Make adjustments based on preview:
   > "Claude, increase the font size in the timeline table"

6. Commit final version:
   > "Claude, commit this new American Revolution presentation"

7. Push to GitHub:
   > Run `git push`

## Troubleshooting

### Slides Don't Display Correctly

Ask Claude to check:
- Markdown separator syntax (`---` and `----`)
- Image paths (should be relative: `../../assets/...`)
- Code block formatting (should use triple backticks)

### CSS Not Applying

Check `reveal-md.json` has correct path to `css/custom.css`

### Images Not Loading

Verify:
- Image file exists in assets/
- Path is relative from the markdown file location
- File name matches exactly (case-sensitive)

## Tips for Teaching-Specific Content

### AP Computer Science
- Always include code examples with proper syntax highlighting
- Use Java code blocks: ` ```java `
- Include practice problems with solutions on vertical slides

### AP US History
- Use bold for important names, dates, events
- Include discussion questions on final slides
- Link primary sources when relevant

### Football
- Use ASCII art for formations (monospace renders correctly)
- Include drill descriptions with specific timing
- Reference game film when available
```

**Step 2: Commit Claude workflow documentation**

```bash
git add docs/claude-workflow.md
git commit -m "docs: add Claude Code workflow guide"
```

Expected: Commit created successfully

---

## Task 13: Push All Changes to GitHub

**Files:**
- Push: All new commits to GitHub remote

**Step 1: Check current status**

```bash
git status
```

Expected: Working tree clean, all changes committed

**Step 2: Review commits to be pushed**

```bash
git log --oneline origin/main..HEAD
```

Expected: Shows commits for YouTube example, speaker notes example, and Claude workflow doc

**Step 3: Push to GitHub**

```bash
git push
```

Expected: All commits pushed successfully to GitHub

**Step 4: Verify on GitHub**

Manual step: Open GitHub repository in browser

Expected: All new files visible, commit history updated

---

## Task 14: Test Classroom Projector Compatibility (Manual)

**Files:**
- Test: All sample presentations on actual classroom projector

**Step 1: Documentation for Kyle**

This task must be done in the actual classroom with the projector.

Checklist:
- [ ] Connect laptop to classroom projector
- [ ] Run `reveal-md slides/ap-cs/sample.md`
- [ ] Check if fonts are large enough from back of room
- [ ] Verify colors have sufficient contrast
- [ ] Test navigation (arrow keys, ESC for overview)
- [ ] Check code blocks are readable
- [ ] Verify slide numbers are visible but not distracting

**Step 2: Document any issues**

If fonts are too small or colors need adjustment, note specific changes needed.

Create notes in `docs/projector-adjustments.md` if needed.

**Step 3: Make CSS adjustments if necessary**

If changes are needed, ask Claude to update `css/custom.css` based on findings.

---

## Task 15: Create Quick Reference Guide

**Files:**
- Create: `docs/quick-reference.md`

**Step 1: Create quick reference document**

Create `docs/quick-reference.md`:

```markdown
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
```

**Step 2: Commit quick reference**

```bash
git add docs/quick-reference.md
git commit -m "docs: add quick reference guide"
```

Expected: Commit created

---

## Task 16: Final Verification and Documentation Update

**Files:**
- Update: `README.md` to reference new documentation
- Verify: All systems functioning

**Step 1: Update README with documentation links**

Add to README.md after "Resources" section:

```markdown
## Additional Documentation

- [Design Document](docs/plans/2026-01-12-teacherslide-design.md) - Complete system architecture and design decisions
- [Implementation Plan](docs/plans/2026-01-12-teacherslide-implementation.md) - Step-by-step implementation guide
- [Claude Code Workflow](docs/claude-workflow.md) - How to use Claude Code to create and maintain presentations
- [Quick Reference](docs/quick-reference.md) - Cheat sheet for daily usage
```

**Step 2: Commit README update**

```bash
git add README.md
git commit -m "docs: add links to additional documentation"
```

Expected: Commit created

**Step 3: Final verification checklist**

Verify all components:
- [ ] Directory structure complete
- [ ] package.json with dependencies
- [ ] reveal-md.json configuration
- [ ] Custom CSS with classroom styling
- [ ] Sample presentations for all three subjects
- [ ] README with complete instructions
- [ ] Additional documentation (design, workflow, quick ref)
- [ ] Git repository initialized
- [ ] GitHub remote configured (if Kyle created repo)
- [ ] All changes committed

**Step 4: Push final changes**

```bash
git push
```

Expected: All commits pushed to GitHub

---

## Task 17: Create First Real Presentation

**Files:**
- Create: First actual teaching presentation (Kyle's choice of subject)

**Step 1: Choose a topic**

Kyle should decide which presentation to create first based on upcoming lesson plans.

Options:
- AP CS: Loops, Arrays, Methods, Classes, etc.
- APUSH: Specific historical events or periods
- Football: Specific plays, formations, or drills

**Step 2: Use Claude Code to generate**

Example prompt to Claude Code:

> "Claude, create a 12-slide presentation about [topic] for [subject].
> Include [specific requirements].
> Save it as slides/[subject]/[filename].md"

**Step 3: Review generated slides**

```bash
reveal-md slides/[subject]/[filename].md
```

Navigate through all slides and verify:
- Content is accurate
- Examples are appropriate
- Styling works correctly
- No typos or errors

**Step 4: Make refinements**

Ask Claude to make any needed adjustments:

> "Claude, add more examples to slide 5"
> "Claude, include a practice problem at the end"

**Step 5: Commit the new presentation**

```bash
git add slides/[subject]/[filename].md
git commit -m "feat([subject]): add [topic] presentation"
git push
```

Expected: First real presentation ready for classroom use

---

## Implementation Complete

All tasks completed. TeacherSlide is now fully functional and ready for daily teaching use.

### Summary of What Was Built

1. ✅ Complete directory structure
2. ✅ reveal-md configuration with classroom-optimized settings
3. ✅ Custom CSS for large, high-contrast classroom display
4. ✅ Sample presentations for AP CS, APUSH, and Football
5. ✅ Comprehensive documentation
6. ✅ Git version control with GitHub integration
7. ✅ npm scripts for quick presentation launching
8. ✅ YouTube embed and speaker notes examples

### Next Steps for Kyle

1. Install reveal-md globally (`npm install -g reveal-md`)
2. Test sample presentations
3. Create GitHub repository and push
4. Test on classroom projector and adjust CSS if needed
5. Create first real presentation for upcoming lesson
6. Establish workflow of creating/updating presentations with Claude Code

### Ongoing Workflow

**Daily use:**
1. Ask Claude to create/update slides
2. Test locally with `reveal-md`
3. Commit changes with descriptive messages
4. Present in classroom

**Year-over-year:**
1. Git history tracks all changes
2. Easy to update from previous year
3. GitHub provides backup and access from multiple machines

### Support

If issues arise:
- Check `docs/quick-reference.md` for common commands
- Review `docs/claude-workflow.md` for Claude Code usage
- Consult design document for architectural details
- Ask Claude Code for help with specific issues
