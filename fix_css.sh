#!/bin/bash

# Fix overflow: hidden in Navigation which clips the dropdown
sed -i '' 's/overflow: hidden;//g' src/components/Navigation.module.scss

# Fix mobile grid overlap
sed -i '' 's/grid-auto-rows: minmax(380px, auto);/grid-auto-rows: minmax(400px, auto);/g' src/components/Fleet.module.scss
sed -i '' 's/min-height: 380px;/min-height: 400px;/g' src/components/Fleet.module.scss

# Fix video path in o-nas
sed -i '' 's|"/videos/o-nas.mp4"|"/SKUTERY-GIZYCKO/videos/o-nas-hero.mp4"|g' src/app/\[locale\]/o-nas/page.tsx
