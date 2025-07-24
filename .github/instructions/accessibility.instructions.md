## **Toegankelijkheid**

Het verbeteren van de toegankelijkheid van een website is essentieel om ervoor te zorgen dat deze bruikbaar is voor iedereen, inclusief mensen met een handicap. Hier zijn aanvullende richtlijnen naast de basisregels om jouw website toegankelijker te maken:

### 1. **Alt-tekst**
- Voeg **betekenisvolle `alt`-teksten** toe aan alle afbeeldingen. Zorg ervoor dat:
  - Het kort en beschrijvend is (≤125 tekens).
  - Decoratieve afbeeldingen een lege `alt` hebben (`alt=""`) zodat schermlezers deze overslaan.

  **Voorbeeld**:
  ```html
  <img src="kat.jpg" alt="Een zwarte kat liggend op een houten stoel." />
  <img src="decoratieve-lijn.png" alt="" />
  ```

### 2. Kleur en Contrast
- Zorg ervoor dat tekst voldoende contrast heeft tegenover de achtergrond (≥4.5:1 voor lichaamstekst en ≥3:1 voor grote tekst).
- Gebruik tools zoals Contrast Checker om dit te testen.
- Vermijd kleurgebruik als enige middel om informatie over te brengen. Gebruik bijvoorbeeld tekst of symbolen naast kleuren.

Voorbeeld (voor slechtzienden):
❌ Slecht: "Klik op de groene knop om te bevestigen."
✅ Beter: "Klik op de groene knop met het vinkje om te bevestigen."

### 3. Logische DOM-volgorde
- Zorg dat de content in de DOM logisch geordend is, zodat schermlezers en toetsenbordnavigatie de inhoud correct interpreteren.
- Gebruik landmarks zoals <header>, <main>, <nav>, en <footer> om schermlezers te helpen navigeren.

Voorbeeld:

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### 4. Focusbeheer en Toetsenbordnavigatie
- Test toetsenbordnavigatie in de browser:
    - Controleer of een gebruiker met de Tab-toets door de hele pagina kan navigeren.
- Correct gebruik van tabindex:
    - Vermijd positieve tabindex-waarden, omdat dit een onlogische tab-volgorde kan creëren.
    - Gebruik tabindex="0" om een focusbaar element aan te geven dat standaard niet focusbaar is.
    - Gebruik tabindex="-1" om een element toegankelijk te maken via JavaScript zonder het in de tab-volgorde te zetten.

Voorbeeld:
```
<button tabindex="0">Bevestigen</button>
<a href="#sectie" tabindex="0">Ga naar sectie</a>
```

### 5. ARIA-attributen
- Gebruik ARIA (Accessible Rich Internet Applications) waar nodig, maar alleen als semantische HTML niet voldoende is.
- Vermijd overmatig gebruik van ARIA; gebruik HTML5-tags met ingebouwde toegankelijkheid waar mogelijk.

Voorbeelden van ARIA:
- Gebruik aria-label voor knoppen of links zonder tekst: `<button aria-label="Sluiten">x</button>`

- Gebruik aria-expanded om de status van een dropdownmenu aan te geven: `<button aria-expanded="false">Menu</button>`

### 6. Responsiviteit en Toegangstechnologieën
- Zorg dat de site zowel op desktop als mobiele apparaten correct werkt.
- Controleer of de site goed werkt met schermlezers zoals NVDA, JAWS (Windows), en VoiceOver (macOS/iOS).
- Test met verschillende browsers: Chrome, Firefox, Safari.


### 7. Formulieren
- Labels:
    - Voeg duidelijke label-elementen toe aan formuliervelden:
    ```html
    <label for="email">E-mailadres</label>
    <input type="email" id="email" />
    ```

- Toegankelijke foutmeldingen:
    - Gebruik duidelijke foutmeldingen wanneer een formulier onjuist is ingevuld. Combineer visuele indicaties (zoals rood gemarkeerde velden) met tekst.
    ```html
    <span role="alert">E-mailadres is verplicht.</span>
    ```

### 8. Tekst en Lettertypes
- Gebruik een minimaal lettertype van 16px voor basistekst.
- Stel regelafstand (line height) in om leesbaarheid te bevorderen, bijvoorbeeld 1.5.
- Zorg voor schaalbare tekst:
    - Vermijd vaste waarden in px en geef de voorkeur aan em of rem.

    Voorbeeld:

    ```css
    body {
        font-size: 1rem; /* 16px als basis */
        line-height: 1.5;
    }
    ```

### 9. Video’s en Audio
- Voeg ondertiteling toe aan video's en teksttranscripties voor audio.
- Zorg ervoor dat video's bedieningselementen hebben.
- Gebruik het aria-describedby attribuut om alternatieve beschrijvingen te leveren voor complexere media.

    Voorbeeld:

    ```html
        <video controls aria-describedby="videodesc">
        <source src="sample-video.mp4" type="video/mp4" />
        </video>

        <p id="videodesc">Deze video toont een uitleg over toegankelijkheid.</p>
    ```

10. Toetsenbordtoegankelijkheid
- Zorg ervoor dat interactieve elementen zoals knoppen, links en formuliervelden focusstate-stijlen hebben:

    ```css
    button:focus, a:focus {
        outline: 2px solid #007bff;
        outline-offset: 2px;
    }
    ```