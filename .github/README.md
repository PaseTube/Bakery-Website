## GitHub Copilot Custom Instructions & Prompts

Welkom bij dit project! In deze repository is GitHub Copilot geconfigureerd om gebruik te maken van custom instructions en specifieke prompts. Dit zorgt ervoor dat Copilot code genereert die beter aansluit bij de wensen en richtlijnen van dit project.

### Wat zijn custom instructions?
Custom instructions zijn aanvullende richtlijnen die aan Copilot worden meegegeven. Hiermee kan Copilot:
- Specifieke code style of conventies volgen
- Bepaalde frameworks of libraries prefereren
- Antwoorden en code genereren in de gewenste taal (bijvoorbeeld Nederlands)
- Project-specifieke best practices toepassen

### Hoe werkt het?
1. **Prompts**: Wanneer je een prompt (vraag of opdracht) aan Copilot geeft, worden de custom instructions automatisch meegenomen in de context.
2. **Automatische toepassing**: Copilot past deze instructies toe bij het genereren van code, documentatie of uitleg.
3. **Consistentie**: Hierdoor blijft de code consistent en afgestemd op de projectafspraken.

### Voorbeelden van custom instructions
- Gebruik altijd semantische HTML.
- Schrijf CSS volgens BEM-methodologie.
- Geef uitleg in het Nederlands.
- Gebruik geen inline styles.

### Tips voor het gebruik van Copilot met custom instructions
- Formuleer je prompts duidelijk en specifiek.
- Geef aan als je wilt afwijken van de standaard instructies.
- Review altijd de gegenereerde code op juistheid en stijl.


### Code review prompt gebruiken in Visual Studio Code

In deze repository vind je in `.github/prompts/code-review.prompt.md` een uitgebreide systeemprompt voor het beoordelen van code van trainees. Deze prompt is bedoeld om AI-systemen, zoals GitHub Copilot Chat of andere AI-plugins in Visual Studio Code, te voorzien van duidelijke beoordelingscriteria en feedbackstijl.

**Zo gebruik je de code-review prompt:**
1. Open Copilot
2. Voeg de bestanden/mappen toe die je gereviewd wilt hebben door te klikken op de 📎, of door ze er naartoe te slepen.
3. Begin met type in de chat `/` dan selecteer je daar de `/code-review`.
4. Je kunt dan nog instructies meegeven, maar dat is optioneel.
5. Druk op `enter` en de code-review word uitgevoerd.

**Tip:** Je kunt deze prompt ook aanpassen aan je eigen wensen of uitbreiden met project-specifieke aandachtspunten.

### Meer weten?
Voor meer informatie over het instellen van custom instructions in Copilot, zie de [officiële documentatie](https://docs.github.com/en/copilot).
