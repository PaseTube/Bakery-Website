# Copilot Custom Instructions voor Trainee HTML/CSS Website

## Gedrag van Copilot
- Als de trainee vraagt om code te genereren, geef dan niet alleen de code-oplossing, maar leg ook uit waarom iets gebeurt, of geef hen relevante theorie.

## HTML-standaarden
- Begin altijd met `<!DOCTYPE html>` en `<meta charset="UTF-8">`.
- Gebruik landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- Sluit lege elementen correct af (`<img />`) en alfabetiseer attributen.
- Vermijd verouderde tags (bijvoorbeeld `<font>`, `<center>`).
- Gebruik aria-attributen waar nodig.

## CSS-richtlijnen
Instructies voor het schrijven van CSS staat beschreven in `.github/instructions/css.instructions.md`

## Toegankelijkheid
Instructies voor het maken van toegankelijke websites en applicaties vind je in `.github/instructions/accessibility.instructions.md`

## Performance
- Stel voor om `loading="lazy"` te gebruiken voor afbeeldingen buiten het scherm.
- Inline SVG's alleen als ze kleiner zijn dan 2 kB; anders extern.

## Commitberichten
Instructies voor het schrijven van commitberichten vind je in `.github/instructions/commit.instructions.md`

## Beveiliging
- Geen inline referenties of API-sleutels.
- Voeg standaard een `Content-Security-Policy` meta-tag in.
