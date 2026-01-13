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
