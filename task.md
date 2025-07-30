# 🧁 Project 2: Interactive Bakery Homepage – Takenoverzicht (Weeks 4–6)

## 📌 Status
Frontend (HTML/CSS) is volledig afgerond. json-server en fetch-implementatie zijn werkend. Focus ligt nu op verdieping, polish en documentatie van de JavaScript-functionaliteit.

---

## ✅ Taken die al zijn voltooid
- [x] json-server setup met `db.json`
- [x] Fetch API gebruikt om favoriete producten op te halen
- [x] Hamburger menu geïmplementeerd (toggle werkt)
- [x] Basis styling en interactiviteit aanwezig

---

## 🚧 Verdiepingstaken om te voldoen aan evaluatiecriteria

### 🗂️ 1. Verbetering Productweergave
- [ ] Voeg beschrijving (`description`) toe aan `db.json` en toon op de site
- [ ] Voeg afbeelding (`image`) toe en toon met `<img>`
- [ ] Toon producten als visuele kaarten (cards) i.p.v. `<li>`
- [ ] Sorteer producten optioneel op naam of prijs

### 🔄 2. Extra functionaliteit Fetch
- [ ] Toon een "Loading..." spinner of animatie tijdens ophalen
- [ ] Toon een foutmelding als de fetch faalt (`try/catch` of `.catch`)
- [ ] Geef melding als er geen producten beschikbaar zijn

### 🍔 3. Hamburger Menu (Mobile Navigation)
- [ ] Voeg animatie toe aan het openen/sluiten van het menu
- [ ] Sluit menu automatisch bij klik buiten het menu
- [ ] Sluit menu met `Escape`-toets
- [ ] Voeg `aria-*` attributen toe voor toegankelijkheid

### 🧠 4. Browser Debugging & Devtools
- [ ] Gebruik Chrome DevTools om:
  - [ ] Consolefouten op te lossen
  - [ ] Fetch-verzoeken te inspecteren via Network-tab
  - [ ] Breakpoints te zetten in scripts
  - [ ] `console.warn()` of `console.error()` gebruiken bij fouten

### 🧼 5. Codekwaliteit (JS)
- [ ] Gebruik ES6+ syntax (`const`, `let`, arrow functions)
- [ ] Schrijf herbruikbare functies (`renderProduct(product)` bijvoorbeeld)
- [ ] Vermijd globale variabelen
- [ ] Gebruik `DOMContentLoaded` om te wachten tot DOM geladen is
- [ ] Voeg optioneel JS-bestanden op in modules (voor structuur)

---

## 🚀 Bonus (optioneel, voor verdieping of extra polish)

### ❤️ Favorieten opslaan
- [ ] Voeg een harticoon toe aan elk product
- [ ] Laat gebruikers klikken om favoriet toe te voegen/verwijderen
- [ ] Sla deze favorieten op in `localStorage`
- [ ] Toon een sectie “Jouw favorieten”

### 🔍 Zoek- en filterfunctie
- [ ] Voeg een zoekveld toe
- [ ] Filter producten live tijdens typen
- [ ] Voeg dropdown toe om te sorteren (op prijs/naam)

### ➕ Product toevoegen (admin feature)
- [ ] Voeg een formulier toe met `name`, `price`, `description`, `image`
- [ ] Verstuur POST-verzoek via fetch naar json-server
- [ ] Toon nieuw product direct op de pagina (zonder refresh)

---

## 🗃️ Git & Projectbeheer
- [ ] Werk in feature branches (1 per PBI of groepje features)
- [ ] Gebruik duidelijke commit messages (`feat:`, `fix:`, `style:`)
- [ ] Maak Pull Requests aan voor review
- [ ] Voeg uitleg toe aan README over het starten van json-server
- [ ] Deploy project op GitHub Pages of vergelijkbaar platform

---

## 📅 Suggestie: Verdelen over weken

| Week | Focus |
|------|-------|
| Week 4 | Loader, cards, foutmeldingen, aria/menu polish |
| Week 5 | Favorieten & zoeken toevoegen, animaties, devtools/debugging |
| Week 6 | Adminformulier (optioneel), afwerken, deploy, code review, presentatievoorbereiding |

---

