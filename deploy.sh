#!/bin/bash

# === Tailwind CSS Build ===
echo "🎨 Baue Tailwind-CSS..."
npm run build-once || { echo "❌ Fehler beim Tailwind-Build"; exit 1; }

# === Git Add, Commit, Push ===
echo "📦 Git Commit & Push..."
git add .
COMMIT_MSG="🔄 Update: $(date +'%Y-%m-%d %H:%M')"
git commit -m "$COMMIT_MSG"
git push || { echo "❌ Fehler beim Pushen"; exit 1; }

# === Done ===
echo "✅ Deployment abgeschlossen!"
echo "🌍 Live: https://jeremyyblum.github.io/Jeremys-Portfolio/"
