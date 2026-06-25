1. Wrong working directory

You were running npm run dev from postflow-api/ but your actual code was in postflow-api/backend/. We moved package.json into backend/ so everything ran from the right place.
2. Missing packages

dotenv wasn't installed in the backend/ folder. We ran npm install there to fix it.
3. Typo in mongoose import

database.js had import mongoose from "mongoosse" — an extra s. Fixed it to "mongoose".
4. Node.js version incompatibility

Mongoose v9 requires Node v21+, but you're on Node v18. We downgraded to mongoose@8 which supports Node 18.
5. connectDB not imported

index.js was calling connectDB without importing it. We added import connectDB from './config/database.js'.
6. .env in the wrong folder

The .env was in the root postflow-api/ folder, not in backend/ where the app runs. We copied it into backend/. You could see this was the problem because the log said injected env (0) — zero variables loaded.
7. Single quotes instead of backticks/no quotes

This was the final and trickiest bug. The mongoose.connect call looked like this:
jsawait mongoose.connect
('${process.env.MONGODB_URI}')
Two problems here — it was split across two lines, and it used single quotes '...' instead of passing the variable directly. So mongoose literally received the string ${process.env.MONGODB_URI} instead of the actual URI value, which is why it kept complaining about an invalid scheme. The fix was simply:
jsawait mongoose.connect(process.env.MONGODB_URI)