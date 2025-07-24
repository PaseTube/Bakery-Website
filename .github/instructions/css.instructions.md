### **CSS-richtlijnen om code simpel, leesbaar en onderhoudbaar te houden**

#### **Structuur en Organisatie**
1. **Ordening en Groepering van Stijlen**  
   - Groepeer gerelateerde stijlen bij elkaar. Bijv.:  
     ```css
     /* Lay-out */
     position: relative;
     display: flex;

     /* Box-model */
     margin: 10px;
     padding: 20px;
     border: 1px solid #ccc;

     /* Visueel */
     background-color: #f5f5f5;
     color: #333;
     ```
   - Gebruik tools zoals [CSS Stylelint](https://stylelint.io/) om consistentie in de volgorde van regels af te dwingen.

2. **Modulaire CSS**  
   - Verdeel je CSS in kleinere modules (bijv. `buttons.css`, `typography.css`), zodat je alleen de benodigde stijlen importeert.

3. **Gebruik van een Reset of Normalize.css**  
   - Gebruik een basis-reset (*CSS reset*) of Normalize.css om consistent gedrag tussen verschillende browsers te garanderen.

4. **Commentaar bij Stijlen**  
   - Gebruik duidelijke commentaarregels om secties van de CSS te organiseren:
     ```css
     /* Herbruikbare Componenten */
     .button { 
       ...
     }

     /* Specifieke Pagina-Stijlen */
     .homepage-header {
       ...
     }
     ```

---

#### **Selectors en Specificiteit**
5. **Minimaliseer Selector-Nesting**  
   - Te veel geneste selectors maken het onnodig complex:
     ❌ Slecht:
     ```css
     .header .nav ul li a {
       color: #fff;
     }
     ```
     ✅ Beter:
     ```css
     .nav-link {
       color: #fff;
     }
     ```

6. **Beperk de Specificiteit**  
   - Vermijd overly-specific selectors, zoals IDs (`#id`) of combinaties van selectors. Geef de voorkeur aan klassen:
     ❌ Slecht:
     ```css
     #header p.intro-text {
       font-size: 16px;
     }
     ```
     ✅ Beter:
     ```css
     .intro-text {
       font-size: 16px;
     }
     ```

7. **Vermijd Overbodige Stijlen**  
   - Schrijf geen stijlen die niet nodig zijn:
     ❌ Slecht:
     ```css
     p {
       font-size: 16px;
       font-size: 16px;
     }
     ```
     ✅ Beter:
     ```css
     p {
       font-size: 16px;
     }
     ```

8. **Gebruik Korte Selectoren voor Herbruikbare Componenten**  
   - Gebruik duidelijke en korte namen voor component-klassen:
     ```css
     .btn { ... } /* Gebruik consistent `btn` voor knoppen */
     .card { ... } /* Duidelijke naam voor een content-kaart */
     ```

---

#### **Efficiënt Hergebruik en Beperk Duplicatie**
9. **Gebruik CSS Variabelen (`:root`)**  
   - Definieer globale waarden:
     ```css
     :root {
       --primary-color: #007bff;
       --secondary-color: #6c757d;
       --font-size-base: 16px;
     }

     body {
       color: var(--primary-color);
       font-size: var(--font-size-base);
     }
     ```

10. **Gebruik Herbruikbare Klassen**  
   - Vermijd stijlen opnieuw definiëren. Maak herbruikbare utility-klassen:
     ```css
     /* Utility-klassen */
     .text-center {
       text-align: center;
     }

     .margin-bottom-sm {
       margin-bottom: 10px;
     }
     ```

11. **Gebruik Componentgebaseerde Stijlen**  
   - Vermijd stijlen die zich richten op globale elementen; plaats ze binnen specifieke componenten:
     ```css
     /* Slecht */
     h1 {
       font-size: 24px;
     }

     /* Beter */
     .card-title {
       font-size: 24px;
     }
     ```

---

#### **Performance en Onderhoudbaarheid**
12. **Vermijd Inline Stijlen**  
   - Schrijf stijlen alleen in externe stylesheets voor schaalbaarheid:
     ❌ Slecht:
     ```html
     <div style="color: red; font-size: 20px;">Inhoud</div>
     ```
     ✅ Beter:
     ```html
     <div class="error-text">Inhoud</div>
     ```
     ```css
     .error-text {
       color: red;
       font-size: 20px;
     }
     ```

13. **Minimaliseer Gebruik van !important**  
   - Gebruik `!important` alleen als laatste redmiddel. Bij extensief gebruik wordt onderhoud lastig.

14. **Compressie en Minificatie**  
   - Gebruik tools zoals PostCSS of CSS-libraries (bijv. Sass) om CSS automatisch te optimaliseren bij productie.

15. **Beperk het Gebruik van Animaties**  
   - Overmatige of complexe CSS-animaties kunnen de prestaties schaden.

---

#### **Responsiviteit**
16. **Maak Slim Gebruik van Media Queries**  
   - Stijlen voor verschillende schermformaten moeten schaalbaar blijven en duidelijk gelabeld worden:
     ```css
     /* Basisstijl */
     .container {
       width: 100%;
     }

     /* Breakpoint voor tablets */
     @media screen and (width >= 768px) {
       .container {
         width: 95%;
       }
     }

     /* Breakpoint voor desktops */
     @media screen and (width >= 1024px) {
       .container {
         width: 80%;
       }
     }
     ```

17. **Gebruik Responsieve Eenheden**  
   - Gebruik flexibele eenheden zoals `%`, `em`, en `rem` in plaats van statische `px`-waarden:
     ```css
     body {
       font-size: 1rem; /* Aanpasbare schaalbaarheid */
     }

     .container {
       max-width: 80%;
     }
     ```

---

#### **Netheid**
18. **Gebruik Consistente Indentatie**  
   - Kies één stijl voor inspringen, bijvoorbeeld 2 of 4 spaties, en houd dit consistent. Gebruik een linting-tool zoals Prettier of Stylelint.

19. **Verwijder Ongebruikte CSS**  
   - Gebruik tools zoals PurgeCSS om ongebruikte stijlen op te ruimen en je CSS bestand klein te houden.

20. **Vermijd Teveel Unieke Specifieke Klassen**  
   - Gebruik algemene en herbruikbare stijlen zonder onnodig veel unieke selectoren.

---

Met deze richtlijnen blijft je CSS eenvoudig, onderhoudbaar en schaalbaar, met een focus op leesbaarheid en herbruikbaarheid!
