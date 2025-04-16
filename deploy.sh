#!/bin/bash

# === Versionsnummer erstellen ===
VERSION=$(date +"v%Y.%m.%d-%H%M")
echo "📦 Starte Deployment: $VERSION"

# === Versionsnummer in version.js schreiben ===
echo "document.getElementById('version').textContent = '$VERSION';" > docs/scripts/version.js

# === Tailwind CSS Build ===
echo "🎨 Baue Tailwind-CSS..."
npm run build-once || { echo "❌ Fehler beim Tailwind-Build"; exit 1; }

# === Git Add, Commit, Push ===
echo "📦 Git Commit & Push..."
git add .
git commit -m "🚀 Deploy $VERSION"
git push || { echo "❌ Fehler beim Pushen"; exit 1; }

# === Done ===
echo "✅ Deployment abgeschlossen!"
echo "🌍 Live: https://jeremyyblum.github.io/Jeremys-Portfolio/"
echo "🔖 Version: $VERSION"

