# Admin app för E-dice

## Syftet med appen:

Syftet med appen är att hantera de admin relaterade delarna för e-dice i en webapp.

## Saker att göra:

- Göra klart account view
- Refaktorisera navbaren så att den jobbar med state istället för headless ui grejor.

# Dokumentation

## CSS

- Appen är stylad med tailwind, sass (scss) är också aktivt i projektet. Egen styling bör undvikas.

## Struktur

- Alla vyer finns i views mappen, login är sidan för / och /app är dashboard sidan.
- En layout används för att rendera ut navbar och footer.
- En notfound sida finns, den är simpel.
- Just nu är det en simpel lösning för privata routes, denna kan refaktoriseras till en bättre lösning i framtiden.

## Aktuellt

- Just nu jobbar appen mot localstorage (Samma som edice grund appen)
- en custom hook för att underlätta med fetch är skapad, den behöver utvecklas vidare då den är halvfärdig
