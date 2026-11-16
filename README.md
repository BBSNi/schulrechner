# Schulrechner – Berufliches Gymnasium, BBS Nienburg/Weser

Statische Webseite (nur HTML, CSS und JavaScript, kein Server nötig) mit Rechnern für das Berufliche Gymnasium.

## Inhalt

| Pfad | Zweck | Stand |
|---|---|---|
| `index.html` | Weiterleitung zum BG-Dashboard (alte Adresse und QR-Codes bleiben gültig) | 2026-11-15 |
| `Versetzung/index.html` | Versetzungsrechner Einführungsphase – Auswahl des Schwerpunkts (Ziel der Dashboard-Kachel) | neu 2026-11-15 |
| `Versetzung/agrarwirtschaft.html` | Versetzungsrechner Einführungsphase – Agrarwirtschaft | überarbeitet 2026-11-15 |
| `Versetzung/sozialpaedagogik.html` | Versetzungsrechner Einführungsphase – Sozialpädagogik | überarbeitet 2026-11-15 |
| `Versetzung/wirtschaft.html` | Versetzungsrechner Einführungsphase – Wirtschaft | überarbeitet 2026-11-15 |
| `Einbringung/index.html` | Einbringungsverpflichtung (Abitur 2027–2029) – Kombinationen der BBS Nienburg, Regeln nach § 15 Abs. 4 / Anlage 4 AVO-GOBAK | neu 2026-11-15 |
| `Abitur/index.html` | Abiturrechner (Abitur 2027–2029): Block I, Block II, Zulassung, Durchschnittsnote – nach dem Excel-Abiturrechner, abgeglichen mit § 15 Abs. 4 und Anlagen 1, 2, 4 AVO-GOBAK | neu 2026-11-15 |
| `js/abitur-daten.js` | Gemeinsame Daten: Prüfungsfachkombinationen der BBS Nienburg und Einbringung (für Einbringung und Abiturrechner) | neu 2026-11-15 |
| `impressum.html` | Impressum | neu 2026-11-15 |
| `Bilder/Logo.png` | Schullogo | |

Nicht enthalten (liegen nur in der lokalen Sicherung `Original_2026-11-15/`):
- Versetzungsrechner Technik – keine Neuaufnahme in die Einführungsphase mehr.

Die Versetzungsrechner sind mit Anlage 7 § 5 BbS-VO abgeglichen (Gewichtung der Lernbereiche: Konferenzbeschluss prüfen).
Die Einbringungsverpflichtung berechnet die Seite nach § 15 Abs. 4 und Anlage 4 AVO-GOBAK; die Kombinationen stammen aus der Prüfungsfächerwahl der BBS Nienburg (alle 152 Kombinationen; am 2026-11-15 mit den Einbringungsblättern der Prüfungsfächerwahl abgeglichen).
Ältere Meppener Seiten (Technik, Einbringung je Schwerpunkt) liegen nur in der lokalen Sicherung.

**Technik (seit 2026-11-16):** Einbringung und Abiturrechner enthalten den auslaufenden Schwerpunkt Technik (P1 Technik, Profilfach Betriebs- und Volkswirtschaft)
mit den 10 Nienburger Kombinationen aus den Blättern „Technik_ohne_SN“ (Nr. 1, 2, 3, 9, 10) und „Technik_SN“ (Nr. 16, 17, 22, 24, 25).
Die Nummern überschneiden sich mit Agrarwirtschaft – so stehen sie in der Prüfungsfächerwahl. Wenn kein Technik-Jahrgang mehr in der Qualifikationsphase ist, die Option wieder entfernen.

## Veröffentlichung

Über **GitHub Pages**: Einstellungen → Pages → Branch `main`, Ordner `/ (root)`.
Die Datei `.nojekyll` sorgt dafür, dass GitHub die Dateien unverändert ausliefert.

## Hinweise

- Berechnungen ohne Gewähr – verbindlich entscheidet die Klassenkonferenz.
- Keine personenbezogenen Daten: Die Rechner speichern und senden nichts, alles läuft im Browser.
