/* Gemeinsame Daten für Einbringungsverpflichtung und Abiturrechner – Berufliches Gymnasium BBS Nienburg/Weser
   Abitur 2027 bis 2029 (AVO-GOBAK, letzte Änderung VO vom 03.03.2025). Ab Abitur 2030 neu fassen. */
/* ------------------------------------------------------------------
   1) Fächer
   ------------------------------------------------------------------ */
const FACH = {
  DE: "Deutsch", EN: "Englisch", SN: "Spanisch", MA: "Mathematik", BI: "Biologie",
  BIF: "Berufliche Informatik", VW: "Volkswirtschaft", BV: "Betriebs- und Volkswirtschaft",
  BRC: "Betriebswirtschaft mit Rechnungswesen-Controlling", AUT: "Agrar- und Umwelttechnologie", PP: "Pädagogik-Psychologie",
  TEE: "Technik"
};
const SCHWERPUNKT = {
  agrar:      { p1: "AUT", profil: "BV" },
  sozial:     { p1: "PP",  profil: "BV" },
  wirtschaft: { p1: "BRC", profil: "VW" },
  technik:    { p1: "TEE", profil: "BV", nw: "Naturwissenschaft (Physik bzw. belegte Naturwissenschaft)" }  // läuft aus: keine Neuaufnahme mehr
};

/* ------------------------------------------------------------------
   2) Prüfungsfachkombinationen der BBS Nienburg (Tabelle „Prüfungsfächer“ der Prüfungsfächerwahl)
      [Nr, P2, P3, P4, P5]; sn = Liste für Lernende mit Spanisch-Verpflichtung
   ------------------------------------------------------------------ */
const K = (sp, sn, liste) => liste.map(([nr, p2, p3, p4, p5]) => ({ nr, sp, sn, p1: SCHWERPUNKT[sp].p1, p2, p3, p4, p5 }));
const KOMBINATIONEN = [].concat(
  K("agrar", true, [[1,"DE","EN","BV","BIF"],[2,"DE","EN","BV","MA"],[3,"DE","EN","BIF","BV"],[4,"DE","MA","BV","EN"],[5,"DE","MA","BV","BIF"],
    [6,"DE","MA","BV","SN"],[7,"DE","MA","BIF","BV"],[8,"EN","MA","BV","DE"],[9,"EN","MA","BV","BIF"],[10,"EN","MA","BIF","BV"]]),
  K("agrar", false, [[11,"DE","EN","BV","BIF"],[12,"DE","EN","BV","MA"],[13,"DE","EN","BIF","BV"],[14,"DE","MA","BV","EN"],[15,"DE","MA","BV","SN"],
    [16,"DE","MA","BV","BIF"],[17,"DE","MA","BIF","BV"],[18,"EN","MA","BV","DE"],[19,"EN","MA","BV","BIF"],[20,"EN","MA","BIF","BV"]]),
  K("sozial", true, [[21,"DE","EN","BV","BI"],[22,"DE","EN","BV","MA"],[23,"DE","EN","BIF","BV"],[24,"DE","EN","BIF","BI"],[25,"DE","EN","BIF","MA"],
    [26,"DE","EN","BV","BIF"],[27,"DE","EN","BI","BIF"],[28,"DE","EN","BI","BV"],[29,"DE","MA","BV","BI"],[30,"DE","MA","BV","EN"],
    [31,"DE","MA","BV","SN"],[32,"DE","MA","BIF","BV"],[33,"DE","MA","BIF","BI"],[34,"DE","MA","BIF","EN"],[35,"DE","MA","BIF","SN"],
    [36,"DE","MA","BV","BIF"],[37,"DE","MA","BI","BIF"],[38,"DE","MA","BI","BV"],[39,"DE","BI","BV","EN"],[40,"DE","BI","BV","MA"],
    [41,"DE","BI","BV","SN"],[42,"DE","BI","BIF","EN"],[43,"DE","BI","BIF","MA"],[44,"DE","BI","BIF","SN"],[45,"EN","MA","BV","BI"],
    [46,"EN","MA","BV","DE"],[47,"EN","MA","BIF","BV"],[48,"EN","MA","BIF","BI"],[49,"EN","MA","BIF","DE"],[50,"EN","MA","BV","BIF"],
    [51,"EN","MA","BI","BIF"],[52,"EN","MA","BI","BV"],[53,"EN","BI","BV","DE"],[54,"EN","BI","BV","MA"],[55,"EN","BI","BIF","DE"],[56,"EN","BI","BIF","MA"]]),
  K("sozial", false, [[57,"DE","EN","BV","BI"],[58,"DE","EN","BV","MA"],[59,"DE","EN","BIF","BV"],[60,"DE","EN","BIF","BI"],[61,"DE","EN","BIF","MA"],
    [62,"DE","EN","BV","BIF"],[63,"DE","EN","BI","BIF"],[64,"DE","EN","BI","BV"],[65,"DE","MA","BV","BI"],[66,"DE","MA","BV","EN"],
    [67,"DE","MA","BV","SN"],[68,"DE","MA","BIF","BV"],[69,"DE","MA","BIF","BI"],[70,"DE","MA","BIF","EN"],[71,"DE","MA","BIF","SN"],
    [72,"DE","MA","BV","BIF"],[73,"DE","MA","BI","BIF"],[74,"DE","MA","BI","BV"],[75,"DE","BI","BV","EN"],[76,"DE","BI","BV","MA"],
    [77,"DE","BI","BV","SN"],[78,"DE","BI","BIF","EN"],[79,"DE","BI","BIF","MA"],[80,"DE","BI","BIF","SN"],[81,"EN","MA","BV","BI"],
    [82,"EN","MA","BV","DE"],[83,"EN","MA","BIF","BV"],[84,"EN","MA","BIF","BI"],[85,"EN","MA","BIF","DE"],[86,"EN","MA","BV","BIF"],
    [87,"EN","MA","BI","BIF"],[88,"EN","MA","BI","BV"],[89,"EN","BI","BV","DE"],[90,"EN","BI","BV","MA"],[91,"EN","BI","BIF","DE"],[92,"EN","BI","BIF","MA"]]),
  K("wirtschaft", true, [[93,"DE","EN","BIF","BI"],[94,"DE","EN","BIF","MA"],[95,"DE","EN","BIF","VW"],[96,"DE","EN","BIF","SN"],[97,"DE","EN","VW","BI"],
    [98,"DE","EN","VW","MA"],[99,"DE","EN","VW","BIF"],[100,"DE","EN","VW","SN"],[101,"DE","EN","BI","VW"],[102,"DE","EN","BI","BIF"],
    [103,"DE","MA","BIF","BI"],[104,"DE","MA","BIF","EN"],[105,"DE","MA","BIF","VW"],[106,"DE","MA","BIF","SN"],[107,"DE","MA","VW","BI"],
    [108,"DE","MA","VW","EN"],[109,"DE","MA","VW","SN"],[110,"DE","MA","VW","BIF"],[111,"DE","MA","BI","VW"],[112,"DE","MA","BI","BIF"],
    [113,"EN","MA","BIF","BI"],[114,"EN","MA","BIF","DE"],[115,"EN","MA","BIF","VW"],[116,"EN","MA","BIF","SN"],[117,"EN","MA","VW","BI"],
    [118,"EN","MA","VW","DE"],[119,"EN","MA","VW","SN"],[120,"EN","MA","VW","BIF"],[121,"EN","MA","BI","BIF"],[122,"EN","MA","BI","VW"]]),
  K("wirtschaft", false, [[123,"DE","EN","BIF","BI"],[124,"DE","EN","BIF","MA"],[125,"DE","EN","BIF","VW"],[126,"DE","EN","BIF","SN"],[127,"DE","EN","VW","BI"],
    [128,"DE","EN","VW","MA"],[129,"DE","EN","VW","BIF"],[130,"DE","EN","VW","SN"],[131,"DE","EN","BI","VW"],[132,"DE","EN","BI","BIF"],
    [133,"DE","MA","BIF","BI"],[134,"DE","MA","BIF","EN"],[135,"DE","MA","BIF","SN"],[136,"DE","MA","BIF","VW"],[137,"DE","MA","VW","BI"],
    [138,"DE","MA","VW","EN"],[139,"DE","MA","VW","SN"],[140,"DE","MA","VW","BIF"],[141,"DE","MA","BI","VW"],[142,"DE","MA","BI","BIF"],
    [143,"EN","MA","BIF","BI"],[144,"EN","MA","BIF","DE"],[145,"EN","MA","BIF","VW"],[146,"EN","MA","BIF","SN"],[147,"EN","MA","VW","BI"],
    [148,"EN","MA","VW","DE"],[149,"EN","MA","VW","SN"],[150,"EN","MA","VW","BIF"],[151,"EN","MA","BI","BIF"],[152,"EN","MA","BI","VW"]]),
  /* Technik (läuft aus, nur noch laufende Jahrgänge) – eigene Nummerierung der Blätter Technik_ohne_SN und Technik_SN */
  K("technik", false, [[1,"DE","MA","BV","EN"],[2,"DE","MA","BV","SN"],[3,"DE","MA","BV","BIF"],[9,"EN","MA","BV","DE"],[10,"EN","MA","BV","BIF"]]),
  K("technik", true, [[16,"DE","MA","BV","EN"],[17,"DE","MA","BV","BIF"],[22,"DE","MA","BV","SN"],[24,"EN","MA","BV","DE"],[25,"EN","MA","BV","BIF"]])
);
/* Abgeglichen mit den Einbringungsblättern der Prüfungsfächerwahl (Agrar_SN … Wirtschaft_ohne_SN), 2026-11-15;
   Technik_SN und Technik_ohne_SN, 2026-11-16. */

/* ------------------------------------------------------------------
   3) Einbringung nach § 15 Abs. 4 und Anlage 4 AVO-GOBAK
   ------------------------------------------------------------------ */
function einbringung(k) {
  const sp = SCHWERPUNKT[k.sp], P = [k.p1, k.p2, k.p3, k.p4, k.p5];
  const pf = f => P.includes(f);
  const pfLabel = f => f === k.p1 ? "P1" : (f === k.p2 || f === k.p3) ? "P2/P3" : f === k.p4 ? "P4" : f === k.p5 ? "P5" : "";
  const alle4 = "alle vier Halbjahre";
  const zeilen = [];
  /* hj = Halbjahre, aus denen gewählt wird; anzahl = wie viele davon zählen (bei weniger als hj.length: die besten) */
  const add = (fach, anzahl, hinweis, code, hj = [1, 2, 3, 4]) =>
    zeilen.push({ fach, anzahl, hinweis, code: code || "", hj, pf: code ? pfLabel(code) : "",
                  doppelt: code === k.p1 || code === k.p2, p13: code === k.p1 || code === k.p2 || code === k.p3 });

  /* Fremdsprachen (Anlage 4, Fußnote 2) */
  const enP = pf("EN"), snP = pf("SN");
  let en = 0, sn = 0, wahl = 2, kuerzeProfil = false, tauschHinweis = "";
  if (enP && snP) {                       // fortgeführte und weitere Fremdsprache als Prüfungsfach
    if (k.sp !== "wirtschaft") throw new Error("Kombination in diesem Schwerpunkt nicht vorgesehen");
    en = 4; sn = 4; wahl = 0; kuerzeProfil = true;   // Fußnote 2 Sätze 3 und 4
  } else if (k.sn) {                      // Spanisch verpflichtend (Fußnote 2 Sätze 1 und 2)
    if (enP) { en = 4; sn = 2; wahl = 0; }           // die zwei Spanisch-Ergebnisse füllen den Wahlbereich
    else { sn = 4; }
  } else {                                // Spanisch nicht verpflichtend
    if (snP) { sn = 4; }
    else { en = 4; if (!enP) tauschHinweis = "Wer Spanisch freiwillig belegt hat, kann diese vier Ergebnisse auch in Spanisch einbringen."; }
  }

  add(FACH.DE, 4, alle4, "DE");
  if (en) add(FACH.EN, en, enP ? alle4 : (tauschHinweis || alle4), "EN");
  if (sn) add(FACH.SN, sn, sn === 4 ? alle4 : "zwei Halbjahresergebnisse nach Wahl (zählen als weitere Fremdsprache)", "SN");
  add(FACH.MA, 4, alle4, "MA");
  add(FACH[k.p1], 4, alle4, k.p1);
  const profil = sp.profil;               // VW (Wirtschaft) bzw. BV (Gesundheit und Soziales)
  let nProfil = 4, nBIF = 4;
  if (kuerzeProfil) {                     // eines der Fächer VW oder BIF, das nicht Prüfungsfach ist, auf 2
    if (!pf(profil)) nProfil = 2; else if (!pf("BIF")) nBIF = 2;
  }
  add(FACH[profil], nProfil, nProfil === 4 ? alle4 : "zwei Halbjahresergebnisse nach Wahl", profil);
  add(FACH.BIF, nBIF, nBIF === 4 ? alle4 : "zwei Halbjahresergebnisse nach Wahl", "BIF");
  add(pf("BI") ? FACH.BI : (sp.nw || "Naturwissenschaft (Biologie bzw. belegte Naturwissenschaft)"), 4, alle4 + " in derselben Naturwissenschaft", "BI");
  add("Geschichte", 2, "1. und 2. Halbjahr", "GE", [1, 2]);
  add("Religion bzw. Werte und Normen", 2, "3. und 4. Halbjahr", "RE", [3, 4]);
  add("Praxis", 2, "1. und 2. Halbjahr", "PX", [1, 2]);
  if (wahl) add("Praxis, Sport oder weitere Fremdsprache", wahl, "zwei Ergebnisse aus einem dieser Fächer (Praxis: 3. und 4. Halbjahr) – in der Regel das bessere", "WAHL");
  const summe = zeilen.reduce((s, z) => s + z.anzahl, 0);
  return { zeilen, summe };
}
