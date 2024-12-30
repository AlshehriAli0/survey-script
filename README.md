## Overview 🌟
This script automates filling out *IAU* surveys on the Estibana platform. It logs in with your credentials, navigates through the surveys, fills out ratings, and submits them.

---

## Prerequisites 🛠️

1. **Node.js Installed**: Install Node.js from [https://nodejs.org/](https://nodejs.org/).
2. **Puppeteer Installed**:
   - Open a terminal and run:
     
     ```bash
     npm install puppeteer
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
4. Save the file.

---

## Running the Script ▶️

1. Open a terminal in the script's directory.
2. Run the script using: `node script.js`

---

## What the Script Does  🔍

1. Logs into the Estibana platform using the provided credentials. 🔑
2. Checks for available subject surveys and automates their completion:
- Rates items using a value of "3" (modifiable in the script). ⭐⭐⭐
- Fills in feedback text fields with "Nothing" (modifiable in the script). 📝
3. Submits surveys for teachers, following a similar process. 👩‍🏫👨‍🏫
4. Logs "All surveys complete" when all tasks are done. ✅

---

## Customization ✨

- **Modify Ratings**: Change the value `"3"` in the script to your preferred rating.
- **Customize Feedback**: Replace `"Nothing"` in the script with your desired feedback.

---


## Disclaimer ⚠️

Use this script at your own risk. Ensure compliance with the platform's terms of service and applicable laws.

