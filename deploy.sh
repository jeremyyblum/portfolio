#!/bin/bash

# === Alte Version auslesen ===
VERSION_FILE="docs/scripts/version.js"
CURRENT_VERSION="v1.0"

if [ -f "$VERSION_FILE" ]; then
  EXTRACTED=$(grep -o "v[0-9]*\.[0-9]*" "$VERSION_FILE")
  if [[ $EXTRACTED =~ v([0-9]+)\.([0-9]+) ]]; then
    MAJOR=${BASH_REMATCH[1]}
    MINOR=${BASH_REMATCH[2]}
    MINOR=$((MINOR + 1))
    CURRENT_VERSION="v$MAJOR.$MINOR"
  fi
fi

VERSION=$CURRENT_VERSION
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
echo "🌍 Live: https://jeremyyblum.github.io/portfolio/"
echo "🔖 Version: $VERSION"

