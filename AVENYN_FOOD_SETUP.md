# AVENYN FOOD – projektstart

**Status: utveckling. Ej lanserad eller godkänd av Apple/Google.**

Avenyn Food utgår från det öppna MIT-licensierade FoodFlow-projektet. Den ursprungliga `LICENSE` och upphovsrättsinformationen ska behållas.

## Varumärke

- Namn: **Avenyn Food**
- Geografiskt fokus: **Göteborg**
- Profil: **blå (#1665C1), gul (#FFCC00), vit**
- Fristående plattform. Avenyn Taxis databas, betalningar och produktionsmiljö får inte användas eller ändras av misstag.
- Kundlöfte: *Beställ mat från lokala restauranger.*

## Teknik i denna kodbas

- iOS och Android: **Flutter** (kund och bud).
- Webb: **Next.js** (kund, restaurang, bud och admin).
- API: **NestJS**, PostgreSQL/PostGIS och Supabase-relaterade integrationer.
- Versionshantering: GitHub.

## Första anpassningen (på denna feature branch)

- Blå/gul grundpalett för Flutter och webb.
- Appnamn i Flutter och etiketter i Android/iOS.
- Sidlarnas metadata för kund, restaurang, bud och admin.

**Ej klart:** fullständig omprofilering av alla texter och bilder, svensk UI-översättning, svenska kronor, unika publicerings-ID:n, Stripe Connect, provisionsmotor och produktionssäkerhet.

## Funktioner att färdigställa före pilot

1. **Registrera restaurang** med organisationsnummer, kontaktuppgifter, avtal, öppettider, bank-/utbetalningsinformation och administrativt godkännande.
2. **Restaurangportal** för meny, pris, tillval, allergeninformation, öppettider, accepterad/nekad order och beräknad tillagningstid.
3. **Kundapp** med svenska som förvalt språk, svenska kronor, adressökning, restaurangval, kundvagn, beställning, avhämtning eller leverans.
4. **Budflöde** med accept/avböj, hämta upp, live-position endast under aktiv leverans och leveransbekräftelse.
5. **Admin** för restauranger, bud, kunder, beställningar, återbetalningar, reklamationer, provision och rapporter.
6. **Provision** med grundvärde 15 %, justerbar per restaurang i admin, med serverbaserad beräkning, korrekt avrundning, spårbar historik och korrekt momshantering.
7. **Betalning** med Stripe Connect: verifierade mottagare, utbetalningar, chargebacks, återbetalningar och robust webhook-hantering. Lägg aldrig hemliga API-nycklar i GitHub.
8. **Säkerhet**: separata miljöer, åtkomstkontroll per restaurang och roll, dataskydd, rate limits, order- och betalningsidempotens samt tester för obehörig dataåtkomst.

## Innan appbutikerna

- Ställ in unika Android applicationId och iOS bundle identifiers när certifikat och Firebase-/Google Maps-konfigurationer är förberedda. Nuvarande paket-ID:n är **inte** bytta avsiktligt för att inte bryta befintliga byggen.
- Byt ikoner, splash, marknadsbilder och all FoodFlow-profilering.
- Komplettera svensk lokalisering inklusive felmeddelanden och automatiska meddelanden.
- Granska integritetspolicy, användarvillkor, livsmedelsförmedling, allergeninformation, avtalen med restauranger/bud och svensk moms.
- Testa faktisk beställning, godkännande, betalning, återbetalning och leverans med testkonton innan någon produktionsbetalning aktiveras.
- Godkänd DSA-handlarstatus innebär inte att en ny app redan är godkänd för App Store.

## Första pilotmålet

Bjud in **5–10 restauranger i Göteborg** och börja med avhämtning samt restaurangernas egna leveranser. Starta separat budflöde efter att order- och betalningsflöden fungerar pålitligt.

## Notering

Ingen produktionsmiljö, betalning eller appbutiksinlämning görs som del av denna inledande varumärkesändring.
