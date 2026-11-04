# Run evidence: Add Car Preparation

- Tool: Playwright Test
- Command: `npx playwright test tests/add-car.spec.ts --project=chromium`
- Timestamp: Not recorded in the captured terminal output.
- Environment: macOS, Playwright Chromium, `https://qauto.forstudy.space` (credentials omitted)
- Actual: `1 passed (2.5s)` for `guest can prepare an Audi TT entry without submitting`.

| Element | Source |
|---|---|
| Setup | `page.goto('/')`; guest login; Garage URL assertion |
| Locator/action | Verified UI locators; Brand Audi; Model TT; Mileage 12000 |
| Assertions | Garage URL; Add button enabled |

- FACTS: The test prepared the Audi TT form and passed. It did not submit the form.
- ASSUMPTIONS: None recorded.
- RISKS: The expected post-save Garage entry was not observed.
- HUMAN CORRECTION: None recorded.
- DECISION: `STOP` — `AGENTS.md` prohibits external write actions, so Add was not clicked and the full scenario remains unverified.
