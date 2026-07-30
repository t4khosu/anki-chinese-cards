---
description: Commit changes following repo conventions (tests first, conventional tags, split by concern).
agent: build
---

1. Run the npm test suite. If tests fail, abort. Report failures.
2. Inspect `git status` and `git diff`.
3. If any changes seem inconsistent or problematic, inform the user. You may run the /ponytail-review command. Ask, if the user still wants to continue [y,n]
4. If changes span unrelated concerns, split them into separate commits.
5. Come up with commit messages for the commit(s). Format:

```
<tag>: <description>

- explain why the change was made
- (optional) more details / reasons for the commit
- ...
```

Commit tags: `feat` (new feature), `fix` (bug fix), `refactor` (restructure, no bug/feature), `chore` (non-src/test), `perf` (performance), `ci` (CI), `ops` (infra/deploy), `build` (build system/deps), `docs` (documentation), `style` (formatting), `revert` (revert), `test` (tests).

6. Propose the commit message(s) and affected files to the user. The user can approve or abort [y,n]
7. Stage the appropriate files and commit. If splitting, repeat per logical group.