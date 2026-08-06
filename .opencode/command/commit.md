---
description: Commit changes following repo conventions (conventional tags, split by concern).
agent: build
---

1. use `git diff` to get current changes.
2. group same concerns within individual commits.
3. formulate commit message(s) for the commit(s) with the following format:
```
<tag>: <description>

- explain why the change was made
- (optional) more details / reasons for the commit
- ...
```

Rules:
* Commit title should be 50 characters or less
* After the title there is an empty line
* The rest of the text is wrapped at 72 characters

Valid tags: `feat` (new feature), `fix` (bug fix), `refactor` (restructure, no bug/feature), `chore` (non-src/test), `perf` (performance), `ci` (CI), `ops` (infra/deploy), `build` (build system/deps), `docs` (documentation), `style` (formatting), `revert` (revert), `test` (tests).

4. display planned commits to the user. The user must approve [y,n]
5. stage and commit. Use `git add` to add whole files are partial files. Repeat for all commits.