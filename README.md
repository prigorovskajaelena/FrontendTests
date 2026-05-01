# Playwright API Tests

## 📌 Project Description

This project contains automated API tests using Playwright.

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone <your-repo-url>
```

2. Install dependencies:

```
npm install
```

3. Install Playwright browsers:

```
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```
npx playwright test
```

Run tests in UI mode:

```
npx playwright test --ui
```

---

## 📁 Project Structure

* `tests/` — test files
* `src/` — DTOs and helpers
* `.github/workflows/` — CI configuration

---

## 🚀 Notes

* Make sure the backend server is running before executing tests.
* Tests use real API endpoints.
