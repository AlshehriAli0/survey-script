## Overview 🌟
This script automates filling out *IAU* surveys on the Estibana platform. It logs in with your credentials, navigates through the surveys, fills out ratings, and submits them.

---

## Prerequisites 🛠️

1. **Node.js Installed**: Install Node.js from [https://nodejs.org/](https://nodejs.org/).
2. **Install Dependencies**:
   ```bash
   npm install
   # or bun install, pnpm install, yarn, etc.
   ```

---

## Setup ⚙️

1. **Clone or Download** this script.
2. Open the script in a text editor.
3. Replace the following variables with your credentials:

   ``` javascript
   const id = "your_id_here"; // Replace with your ID
   const password = "your_password_here"; // Replace with your password
   ```
4. Optionally, customize the rating and comment values:

   ``` javascript
   const RATING = "3"; // Rating value (1-5)
   const COMMENT = "Nothing"; // Feedback text for all comment fields
   ```
5. Save the file.

---

## Running the Script ▶️

1. Open a terminal in the script's directory.
2. Run the script using: `node index.js`

---

## What the Script Does  🔍

1. Logs into the Estibana platform using the provided credentials. 🔑
2. Checks for available subject surveys and automates their completion:
- Rates items using the `RATING` value (default: "3"). ⭐⭐⭐
- Fills in feedback text fields with the `COMMENT` value (default: "Nothing"). 📝
3. Submits surveys for teachers, following a similar process. 👩‍🏫👨‍🏫
4. Logs "All surveys complete" when all tasks are done. ✅

---

## Customization ✨

- **Modify Ratings**: Change the `RATING` constant at the top of the script to your preferred rating (1-5).
- **Customize Feedback**: Change the `COMMENT` constant at the top of the script to your desired feedback text.

---


## Disclaimer ⚠️

Use this script at your own risk. Ensure compliance with the platform's terms of service and applicable laws.

