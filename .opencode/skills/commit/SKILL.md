---
name: commit
description: Use when the user asks to commit changes. Follows this repo's commit conventions including running tests, conventional commit tags, and splitting into multiple commits if needed.
---

# Commit Skill

When asked to commit changes, follow these steps strictly:

## Step 1: Run tests

Run the test suite first. If any tests fail, **stop** and do not commit. Report the failures to the user.

## Step 2: Review changes

Inspect `git status` and `git diff` to understand all changes. If the changes span multiple unrelated concerns (e.g. a feature + a dependency update + a doc fix), split them into separate commits.

## Step 3: Write the commit message

Format:

```
<tag>: <very short first line>

- Bullet point explaining why the change was made
- Another bullet point with more detail
- Keep bullets focused on reasoning, not just restating the diff
```

### Tags

| Tag | Use when |
|-----|----------|
| `feat` | Adds a new feature |
| `fix` | Fixes a bug |
| `refactor` | Rewrites/restructures code without fixing a bug or adding a feature |
| `chore` | Miscellaneous changes not touching src/test (e.g. updating dependencies, .gitignore) |
| `perf` | Refactor commits geared towards improving performance |
| `ci` | Continuous integration related |
| `ops` | Infrastructure, deployment, backup, recovery |
| `build` | Build system, CI pipeline, dependencies, project version |
| `docs` | Documentation changes (README, etc.) |
| `style` | Code formatting changes that don't affect meaning (whitespace, semicolons, etc.) |
| `revert` | Reverts a previous commit |
| `test` | Adds missing tests or corrects existing tests |

## Step 4: Commit

Stage the appropriate files and commit with the message. If splitting, repeat steps 3-4 for each logical group of changes.
