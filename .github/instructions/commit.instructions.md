## Commitberichten

Het schrijven van duidelijke en consistente commitberichten is belangrijk om de codegeschiedenis begrijpelijk en traceerbaar te houden. Volg het **Conventional Commits**-format:

### **Structuur van een Commitbericht**

```
<type>[scope]: <korte beschrijving>
```


- **`<type>`**: Het type wijziging:
  - `feat`: Nieuwe functionaliteit.
  - `fix`: Bugfix.
  - `docs`: Aanpassingen aan documentatie.
  - `style`: Code-opmaak zonder functionele verandering.
  - `refactor`: Verbeteringen van bestaande code zonder nieuwe functies.
  - `test`: Toevoegen of aanpassen van tests.
  - `chore`: Onderhoudstaken, zoals dependency-updates.

- **`[scope]`** *(optioneel)*: De component, module of sectie waaraan je gewerkt hebt.
- **`<korte beschrijving>`**: Beschrijf kort de aanpassing in de tegenwoordige tijd (max. 50-72 tekens).

---

### **Regels voor Commitberichten**
1. **Bondig en specifiek**: Gebruik maximaal 50-72 tekens voor de korte beschrijving.
2. **Tegenwoordige tijd**: Bijv. "Voegt validatie toe" in plaats van "Voegde validatie toe".
3. **Geen punt aan het einde**: Sluit de korte beschrijving af zonder punt.

---

### **Voorbeelden**
#### Nieuwe Functionaliteit

```
feat(header): voeg dropdownmenu toe aan navbar
```


#### Bugfix

```
fix(api): los fout op bij het ophalen van gebruikersdata
```

#### Documentatie
```
docs(readme): voeg installatie-instructies toe
```

#### Refactor
```
refactor(utils): herstructureer formatteringslogica
```

#### Tests
```
test(auth): voeg tests toe voor wachtwoordherstel
```

#### Onderhoud
```
chore(dependencies): update axios naar v1.3.0
```


Met deze richtlijnen schrijf je consistente commitberichten die bijdragen aan een goed onderhoudbare codebase.
