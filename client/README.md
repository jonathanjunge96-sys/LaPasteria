LaPasteria

Välkommen till La Pasteria! En webbbutik för världens bästa pasta.
Här kan du se alla våra produkter, skapa favoriter, filtra produkter, registrera ett konto och beställa antingen som gäst eller som en inloggad användare. LaPasteria är byggd med React i frontend, Node.js och Express i backend samt MongoDB Atlas som databas. Autentisering hanteras med JWT och bcrypt.

## INSTRUKTIONER FÖR APPSTART

1. För att starta projektet behöver du ladda ner VS CODE via: https://code.visualstudio.com/download
2. Efter nedladdning -> starta VS Code på din datorn.
3. Öppna VS Code, tryck ctrl+ö för att få upp terminalen.
4. Skriv: git clone "https://github.com/jonathanjunge96-sys/LaPasteria.git" och tryck "Enter".
5. Projektet ska nu dyka upp i menyn till höger.
6. I menyn till höger, högerklicka på servermappen under "LaPasteria" och skapa en fil som heter ".env".
7. Kopiera de tre raderna du fått skickade till dig i en seperat ".env"-fil och klistra in i filen du nyss skapade.
8. Tryck ctrl+s för att snabbspara, tryck sedan ctrl+ö för att få upp terminalen igen.
9. Tryck på pilen bredvid plus-ikonen i terminalen och tryck "split terminal". Du har nu två terminalrutor.
10. I den ena (spelar ingen roll vilken): skriv "cd server" + enter, sen när du står i servermappen, kör: "npm install" + enter. Vänta tills installationen är klar.
11. Kör sedan: "npm run dev" + enter.
12. Se till så att du ser "Database connected" efteråt.
13. I den andra terminalen: skriv "cd client" + enter, sen när du står i client-mappen, kör: "npm install" + enter. Vänta tills installationen är klar.
14. Kör sedan: "npm start" + enter.
15. Nu ska appen startas i din webbläsare.

## Testanvändare

Email: test@test.com
Lösenord: password

## Backend

Backenden är byggd med Node.js och Express och körs på port 5000. 
Den hanterar all kommunikation mellan frontend och databasen MongoDB Atlas.
CORS används för att kunna köra servern på en port och frontend på en annan.

Jag har strukturerat backenden i tre delar:
Controllers: här ligger logiken. Tre stycken: en för användare, en för produkter och en för beställningar.
Routes: skickar inkommande anrop till rätt controller.
Models: definierar hur data ska se ut i databasen med hjälp av Mongoose.

För säkerhet används JWT för autentisering och bcrypt för att hasha och salta lösenord så att 
lösenord lagras aldrig i klartext i databasen. Vid inloggning jämförs det 
inmatade lösenordet med det hashade värdet i databasen.

En middleware (ValidateTokenHandler) körs innan skyddade routes och kontrollerar 
att JWT-token är giltig. Om ingen token finns fortsätter anropet ändå, 
vilket möjliggör köp som gäst.

## Projektanalys

Mitt första steg i projektet var att designa alla mina pages i Figma. 
Efter detta så gjorde jag ett par komponenter i form av knappar, kort, navbar osv.
Det kändes värt att lägga lite tid här, för sen var det bara att återanvända det mesta, vilket snabbar på utvecklingen väldigt mycket. 
Jag la inte alldeles för mycket tid på det estetiska här, utan använde det mer som en skiss. Sen efter det så löste jag det mesta av de "snygga" detaljerna i css efteråt.

Figma blir lite som ett "flödesscehma-light" där man får en bra överblick över projektet direkt. För mig personligen, som hellre ser saker framför sig visuellt än att bara läsa text, ser detta som ett fantastiskt verktyg som jag defintivt kommer att använda i mina projekt framöver. 

När jag gjort detta satte jag upp projektet, installerade alla paket och startade min dev-branch och satte igång att koda. 
Jag beslutade mig för att sätta upp backend direkt, eftersom jag precis hade gjort det i ett annat projekt, så jag hade det ganska färskt i minnet och jag hade mycket kod jag kunde återanvända. Jag struntade i att sätta upp en lokal databas, då jag tänkte att det bara skulle vara extraarbete senare att byta från lokal databas till MongoDb. 

Det fungerade bra hela projektet, men helt plötsligt på slutsträckan så kunde jag inte ansluta till databasen pga ett DNS-fel för att jag hade använt en SRV-connection string. SRV-anslutning använder DNS för att hitta servern automatiskt  och det enklare att sätta upp men kan blockeras av vissa nätverk. Standard-anslutning pekar direkt på serverns IP-adress och fungerar på fler nätverk. När jag ändrade till standard så löstes problemen. Men detta lärde mig att alltid ha data lokalt så att man kan arbeta trots att man inte kan ansluta till servern. 

I övrigt, så känner jag att detta projektet var det som fick poletten att trilla ner för mig. Jag kan nu tydligt se skillnader och framförallt likheter mellan de olika språk och projektstrukturer vi haft tidigare. Även fast det mesta arbete i denna branschen görs i team, så tyckte jag att det var jättebra att avsluta läsåret med ett indivduellt projekt där man fick ansvara och strukturera upp alla lager själv. Jag har under tidigare projekt jobbar mest med UI och BLL och tyckte det var lärorikt att få skapa, följa och första HELA flödet själv på en mycket djupare nivå än innan. Nu känner jag att jag har full förståelse för flödet från att en användare trycker: logga in -> handleSubmit(fetch) -> server.js -> routes(routerPost) -> middleware(validateToken) -> controller(User.findOne) -> modell(kollar databas med schema) -> databas -> controller(bcrypt, token) -> UI(får token).

Hade jag haft mer tid hade jag gjort appen ännu mer användarvänlig. Jag hade haft en kundvagn till vänster på produktsidan och jag hade lagt lite mer tid på att få en estetiskt snyggare app med andra typsnitt, effekter och en profilsida med tidigare beställningar och andra standardfunktioner som finns på de flesta webbshoppar. Jag insåg också att "username" är mensingslöst på en sida där man skapar konto med email som behöver vara unik. Hade man haft ett recenssionssystem eller liknande hade det kanske varit rimligare.

Men i det stora är jag väldigt nöjd med applikationen, men ännu mera nöjd att jag känner att jag verkligen förstår flödet och strukturen ur ett utvecklarperspektiv. 

## Länkar

Figma: https://www.figma.com/design/GqZKziVJi8O4btCvEY4Biq/LaPasteria?node-id=0-1&p=f&t=vuBfinXOMIzUQMVw-0
GitHub: https://github.com/jonathanjunge96-sys/LaPasteria.git






