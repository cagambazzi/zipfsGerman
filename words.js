// German flashcards — the ~1000 most frequently used German words.
// One entry per line: german|translation1, translation2, ...
// Text in parentheses is a display-only hint; it is ignored when checking answers.
const RAW_WORDS = `
der|the (masc.)
die|the (fem./pl.)
das|the (neut.), that
und|and
sein|to be, his, its
in|in, into
ein|a, an, one
zu|to, too, at
haben|to have
ich|I
werden|to become, will
sie|she, they, you (formal)
von|from, of
nicht|not
mit|with
es|it
sich|oneself, himself, herself
auch|also, too
auf|on, onto, at
für|for
an|at, on, to
er|he
so|so, thus, such
dass|that (conjunction)
können|can, to be able to
dies|this
als|as, than, when
ihr|her, their, you (pl.)
ja|yes
wie|how, as, like
bei|at, near, by
oder|or
wir|we
aber|but, however
dann|then
man|one, you (impersonal)
da|there, since
noch|still, yet
nach|after, to, towards
was|what
also|so, therefore
aus|out of, from
all|all
wenn|if, when
nur|only, just
müssen|must, to have to
sagen|to say
um|around, at, in order to
über|over, about, above
machen|to do, to make
kein|no, none, not any
Jahr|year
du|you (informal)
mein|my
schon|already
vor|before, in front of
durch|through, by
geben|to give
mehr|more
andere|other, different
viel|much, a lot
kommen|to come
jetzt|now
sollen|should, ought to
mich|me
immer|always
Mensch|human, person
Frau|woman, wife, Mrs
gehen|to go, to walk
sehr|very
hier|here
bis|until, up to
groß|big, large, tall
wieder|again
Mal|time (occurrence)
zwei|two
gut|good, well
wissen|to know
neu|new
sehen|to see
lassen|to let, to leave
uns|us
weil|because
unter|under, among
denn|because, for
stehen|to stand
jed|each, every
Beispiel|example
Zeit|time
erste|first
ihm|him (dative)
ihn|him (accusative)
wo|where
lang|long
eigentlich|actually, really
damit|so that, with it
selbst|self, even
unser|our
oben|above, upstairs
liegen|to lie, to be located
Tag|day
Land|country, land
letzte|last
bleiben|to stay, to remain
doch|but, however, indeed
nun|now, well
etwas|something, somewhat
finden|to find
nichts|nothing
bringen|to bring
Leben|life
zwischen|between
alt|old
wenig|little, few
Hand|hand
Haus|house
drei|three
Fall|case, fall
Kind|child
Teil|part
hoch|high
Wort|word
Ende|end
Arbeit|work, job
Herr|man, Mr, sir
Auge|eye
Welt|world
Recht|right, law
Frage|question
gegen|against, versus
Seite|side, page
halten|to hold, to keep
nehmen|to take
sprechen|to speak
Weg|way, path
denken|to think
heute|today
weit|far, wide
Stadt|city, town
Woche|week
Monat|month
Zahl|number, figure
Gruppe|group
Problem|problem
Wasser|water
Kopf|head
Vater|father
Mutter|mother
Sohn|son
Tochter|daughter
Bruder|brother
Schwester|sister
Freund|friend
Familie|family
Name|name
Schule|school
Buch|book
Wagen|car, cart
Auto|car
Straße|street, road
Zimmer|room
Tür|door
Fenster|window
Tisch|table
Stuhl|chair
Bett|bed
Küche|kitchen
Garten|garden
Baum|tree
Blume|flower
Tier|animal
Hund|dog
Katze|cat
Pferd|horse
Vogel|bird
Fisch|fish
Brot|bread
Milch|milk
Wein|wine
Bier|beer
Kaffee|coffee
Tee|tea
Essen|food, meal
Fleisch|meat
Obst|fruit
Gemüse|vegetables
Apfel|apple
Ei|egg
Salz|salt
Zucker|sugar
Geld|money
Preis|price, prize
Markt|market
Laden|shop, store
Firma|company, firm
Büro|office
Arzt|doctor
Lehrer|teacher
Schüler|pupil, student
Student|student
Bild|picture, image
Musik|music
Film|film, movie
Spiel|game, play
Sport|sport
Ball|ball
Sonne|sun
Mond|moon
Stern|star
Himmel|sky, heaven
Erde|earth, soil
Luft|air
Feuer|fire
Wind|wind
Regen|rain
Schnee|snow
Wetter|weather
Winter|winter
Sommer|summer
Frühling|spring
Herbst|autumn, fall
Morgen|morning, tomorrow
Abend|evening
Nacht|night
Stunde|hour
Minute|minute
Sekunde|second
Uhr|clock, o'clock, watch
gestern|yesterday
morgen|tomorrow
früh|early
spät|late
oft|often
manchmal|sometimes
nie|never
selten|rarely
bald|soon
gerade|just, straight
schnell|fast, quick
langsam|slow
leicht|easy, light
schwer|hard, heavy
klein|small
kurz|short
breit|wide
schmal|narrow
dick|thick, fat
dünn|thin
warm|warm
kalt|cold
heiß|hot
kühl|cool
nass|wet
trocken|dry
hell|bright, light
dunkel|dark
laut|loud
leise|quiet, soft
schön|beautiful, nice
hässlich|ugly
jung|young
reich|rich
arm|poor
stark|strong
schwach|weak
gesund|healthy
krank|sick, ill
müde|tired
wach|awake
hungrig|hungry
durstig|thirsty
glücklich|happy
traurig|sad
böse|angry, evil
freundlich|friendly
nett|nice, kind
klug|clever, smart
dumm|stupid
richtig|correct, right
falsch|wrong, false
möglich|possible
nötig|necessary
wichtig|important
sicher|safe, sure, certain
frei|free
voll|full
leer|empty
offen|open
geschlossen|closed
fertig|ready, finished
sauber|clean
schmutzig|dirty
teuer|expensive
billig|cheap
weiß|white
schwarz|black
rot|red
blau|blue
grün|green
gelb|yellow
braun|brown
grau|grey, gray
rosa|pink
lieben|to love
hassen|to hate
mögen|to like
brauchen|to need
wollen|to want
dürfen|to be allowed to, may
arbeiten|to work
spielen|to play
lernen|to learn
studieren|to study
lehren|to teach
lesen|to read
schreiben|to write
hören|to hear, to listen
fühlen|to feel
riechen|to smell
schmecken|to taste
essen|to eat
trinken|to drink
kochen|to cook
schlafen|to sleep
aufwachen|to wake up
aufstehen|to get up
sitzen|to sit
laufen|to run, to walk
fahren|to drive, to travel
fliegen|to fly
schwimmen|to swim
springen|to jump
fallen|to fall
tragen|to carry, to wear
ziehen|to pull, to move
schieben|to push
werfen|to throw
fangen|to catch
öffnen|to open
schließen|to close
kaufen|to buy
verkaufen|to sell
bezahlen|to pay
kosten|to cost
verdienen|to earn, to deserve
suchen|to search, to look for
verlieren|to lose
gewinnen|to win
beginnen|to begin
anfangen|to start
enden|to end
beenden|to finish
warten|to wait
ankommen|to arrive
abfahren|to depart
reisen|to travel
besuchen|to visit
treffen|to meet, to hit
helfen|to help
danken|to thank
bitten|to ask for, to request
fragen|to ask
antworten|to answer
erzählen|to tell
erklären|to explain
verstehen|to understand
vergessen|to forget
erinnern|to remind, to remember
glauben|to believe
hoffen|to hope
wünschen|to wish
versprechen|to promise
lügen|to lie (tell untruth)
zeigen|to show
schauen|to look
beobachten|to observe
bemerken|to notice
entscheiden|to decide
wählen|to choose, to vote
versuchen|to try
schaffen|to manage, to create
gelingen|to succeed
scheitern|to fail
ändern|to change
wechseln|to switch, to change
bauen|to build
zerstören|to destroy
reparieren|to repair
putzen|to clean
waschen|to wash
schneiden|to cut
brechen|to break
töten|to kill
sterben|to die
leben|to live
geboren|born
wachsen|to grow
Gesicht|face
Haar|hair
Ohr|ear
Nase|nose
Mund|mouth
Zahn|tooth
Hals|neck, throat
Arm|arm
Bein|leg
Fuß|foot
Finger|finger
Herz|heart
Blut|blood
Knochen|bone
Haut|skin
Körper|body
Rücken|back
Bauch|belly, stomach
Schmerz|pain
Krankheit|illness, disease
Medizin|medicine
Krankenhaus|hospital
Apotheke|pharmacy
Polizei|police
Feuerwehr|fire brigade
Regierung|government
Staat|state
Volk|people, nation
Bürger|citizen
Politik|politics, policy
Partei|party (political)
Wahl|election, choice
Gesetz|law
Gericht|court, dish (food)
Richter|judge
Anwalt|lawyer
Krieg|war
Frieden|peace
Armee|army
Soldat|soldier
Waffe|weapon
Grenze|border, limit
Ausland|abroad, foreign country
Heimat|homeland
Dorf|village
Bauer|farmer
Feld|field
Wald|forest
Berg|mountain
Tal|valley
Fluss|river
See|lake, sea
Meer|sea, ocean
Insel|island
Strand|beach
Brücke|bridge
Bahnhof|train station
Zug|train
Bus|bus
Flugzeug|airplane
Schiff|ship
Fahrrad|bicycle
Reise|trip, journey
Urlaub|holiday, vacation
Hotel|hotel
Restaurant|restaurant
Kneipe|pub
Café|café
Rechnung|bill, invoice
Trinkgeld|tip (gratuity)
Kellner|waiter
Koch|cook, chef
Teller|plate
Glas|glass
Tasse|cup
Flasche|bottle
Messer|knife
Gabel|fork
Löffel|spoon
Suppe|soup
Salat|salad
Kuchen|cake
Käse|cheese
Butter|butter
Reis|rice
Nudel|noodle, pasta
Kartoffel|potato
Tomate|tomato
Zwiebel|onion
Banane|banana
Orange|orange
Zitrone|lemon
Erdbeere|strawberry
Nuss|nut
Schokolade|chocolate
Eis|ice, ice cream
Saft|juice
Wurst|sausage
Huhn|chicken
Schwein|pig, pork
Rind|beef, cattle
Lamm|lamb
Öl|oil
Pfeffer|pepper
Honig|honey
Mehl|flour
Kleidung|clothing
Hemd|shirt
Hose|trousers, pants
Rock|skirt
Kleid|dress
Jacke|jacket
Mantel|coat
Schuh|shoe
Socke|sock
Hut|hat
Mütze|cap
Brille|glasses
Ring|ring
Tasche|bag, pocket
Koffer|suitcase
Schlüssel|key
Schloss|lock, castle
Papier|paper
Stift|pen, pencil
Brief|letter
Karte|card, map, ticket
Zeitung|newspaper
Zeitschrift|magazine
Nachricht|news, message
Geschichte|story, history
Roman|novel
Gedicht|poem
Sprache|language
Übung|exercise
Aufgabe|task, exercise
Prüfung|exam, test
Note|grade, note
Klasse|class, grade
Universität|university
Bibliothek|library
Wissenschaft|science
Forschung|research
Technik|technology, technique
Computer|computer
Handy|mobile phone
Telefon|telephone
Internet|internet
Programm|program
Datei|file
Daten|data
Netz|net, network
Bildschirm|screen
Taste|key (button)
Maschine|machine
Motor|engine, motor
Werkzeug|tool
Metall|metal
Holz|wood
Stein|stone
Plastik|plastic
Stoff|fabric, material, substance
Farbe|color, paint
Form|shape, form
Größe|size
Gewicht|weight
Länge|length
Breite|width
Höhe|height
Tiefe|depth
Raum|room, space
Ort|place, location
Platz|place, square, room
Gebäude|building
Wohnung|apartment, flat
Miete|rent
Keller|cellar, basement
Dach|roof
Wand|wall
Boden|floor, ground
Treppe|stairs
Aufzug|elevator, lift
Bad|bath, bathroom
Spiegel|mirror
Lampe|lamp
Licht|light
Strom|electricity, current
Ofen|oven, stove
Kühlschrank|refrigerator
Schrank|cupboard, wardrobe
Regal|shelf
Sofa|sofa, couch
Teppich|carpet, rug
Vorhang|curtain
Kissen|pillow, cushion
Decke|blanket, ceiling
Handtuch|towel
Seife|soap
Bürste|brush
Kamm|comb
Zahnbürste|toothbrush
Mülleimer|rubbish bin, trash can
Müll|rubbish, garbage
Werk|work, factory
Fabrik|factory
Beruf|profession, job
Stelle|position, spot, job
Chef|boss
Kollege|colleague
Team|team
Sitzung|meeting, session
Termin|appointment
Plan|plan
Ziel|goal, target
Erfolg|success
Fehler|mistake, error
Grund|reason, ground
Folge|consequence, sequel
Ursache|cause
Wirkung|effect
Zweck|purpose
Mittel|means, remedy
Möglichkeit|possibility, opportunity
Gelegenheit|opportunity, occasion
Bedingung|condition
Regel|rule
Ordnung|order
Unordnung|disorder, mess
System|system
Methode|method
Weise|way, manner
Art|kind, type, manner
Sorte|sort, kind
Unterschied|difference
Vergleich|comparison
Verhältnis|relationship, ratio
Beziehung|relationship
Liebe|love
Hass|hatred
Angst|fear, anxiety
Mut|courage
Hoffnung|hope
Sorge|worry, care
Freude|joy
Glück|luck, happiness
Pech|bad luck
Trauer|grief, mourning
Wut|rage, anger
Ärger|trouble, annoyance
Ruhe|calm, quiet, rest
Stress|stress
Gefühl|feeling
Gedanke|thought
Idee|idea
Meinung|opinion
Wunsch|wish
Wille|will
Traum|dream
Erinnerung|memory
Wissen|knowledge
Kenntnis|knowledge, awareness
Erfahrung|experience
Fähigkeit|ability, skill
Kraft|strength, power
Macht|power, might
Energie|energy
Bewegung|movement, motion
Geschwindigkeit|speed
Richtung|direction
Abstand|distance, gap
Nähe|proximity, closeness
Ferne|distance, far away
Anfang|beginning
Mitte|middle, centre
Schluss|end, conclusion
Rest|rest, remainder
Stück|piece
Hälfte|half
Drittel|third (fraction)
Viertel|quarter
Menge|amount, quantity, crowd
Anzahl|number, quantity
Summe|sum, total
Prozent|percent
Grad|degree
Meter|metre, meter
Kilometer|kilometre
Kilo|kilo
Liter|litre, liter
Jahrhundert|century
Alter|age
Geburtstag|birthday
Hochzeit|wedding
Ehe|marriage
Mann|man, husband
Junge|boy
Mädchen|girl
Baby|baby
Onkel|uncle
Tante|aunt
Großvater|grandfather
Großmutter|grandmother
Enkel|grandchild, grandson
Cousin|cousin
Nachbar|neighbour, neighbor
Gast|guest
Besucher|visitor
Fremde|stranger, foreign land
Feind|enemy
Partner|partner
Mitglied|member
Verein|club, association
Gesellschaft|society, company
Gemeinschaft|community
Öffentlichkeit|public
Kultur|culture
Kunst|art
Künstler|artist
Theater|theatre, theater
Bühne|stage
Konzert|concert
Lied|song
Sänger|singer
Stimme|voice, vote
Ton|sound, tone
Geräusch|noise, sound
Instrument|instrument
Klavier|piano
Gitarre|guitar
Tanz|dance
Fest|festival, party
Party|party
Geschenk|gift, present
Überraschung|surprise
Feier|celebration
Weihnachten|Christmas
Ostern|Easter
Kirche|church
Gott|god
Glaube|faith, belief
Religion|religion
Seele|soul
Geist|spirit, mind, ghost
Tod|death
Grab|grave
Hölle|hell
Engel|angel
Teufel|devil
Wunder|miracle, wonder
Zauber|magic, spell
Märchen|fairy tale
Held|hero
König|king
Königin|queen
Prinz|prince
Ritter|knight
Burg|castle, fortress
Turm|tower
Mauer|wall
Tor|gate, goal
Schwert|sword
Kampf|fight, battle
Sieg|victory
Niederlage|defeat
Gefahr|danger
Schutz|protection
Sicherheit|security, safety
Risiko|risk
Unfall|accident
Verletzung|injury
Rettung|rescue
Hilfe|help
Dienst|service, duty
Pflicht|duty, obligation
Verantwortung|responsibility
Vertrauen|trust, confidence
Respekt|respect
Ehre|honour, honor
Schande|shame, disgrace
Schuld|guilt, debt, fault
Strafe|punishment, penalty
Gefängnis|prison
Verbrechen|crime
Dieb|thief
Mörder|murderer
Opfer|victim, sacrifice
Zeuge|witness
Beweis|proof, evidence
Wahrheit|truth
Lüge|lie
Geheimnis|secret
Rätsel|riddle, puzzle
Lösung|solution
Antwort|answer
Ergebnis|result
Entscheidung|decision
Vorschlag|suggestion, proposal
Rat|advice, council
Warnung|warning
Befehl|order, command
Erlaubnis|permission
Verbot|ban, prohibition
Vertrag|contract
Kosten|costs
Steuer|tax
Bank|bank, bench
Konto|account
Kredit|credit, loan
Schulden|debts
Reichtum|wealth
Armut|poverty
Wirtschaft|economy
Handel|trade, commerce
Industrie|industry
Landwirtschaft|agriculture
Produkt|product
Ware|goods, merchandise
Qualität|quality
Lieferung|delivery
Bestellung|order (purchase)
null|zero
eins|one
vier|four
fünf|five
sechs|six
sieben|seven
acht|eight
neun|nine
zehn|ten
elf|eleven
zwölf|twelve
zwanzig|twenty
dreißig|thirty
hundert|hundred
tausend|thousand
Million|million
zweite|second
dritte|third
Montag|Monday
Dienstag|Tuesday
Mittwoch|Wednesday
Donnerstag|Thursday
Freitag|Friday
Samstag|Saturday
Sonntag|Sunday
Januar|January
Februar|February
März|March
April|April
Mai|May
Juni|June
Juli|July
August|August
September|September
Oktober|October
November|November
Dezember|December
wer|who
wen|whom
wem|to whom
wann|when
warum|why
wieso|why, how come
wohin|where to
woher|where from
welcher|which
wessen|whose
wieviel|how much
hierher|over here (to here)
dorthin|over there (to there)
dort|there
drüben|over there
überall|everywhere
irgendwo|somewhere
nirgends|nowhere
draußen|outside
drinnen|inside
innen|inside
außen|outside
vorne|in front
hinten|at the back
links|left
rechts|right
geradeaus|straight ahead
neben|next to
hinter|behind
gegenüber|opposite, across from
entlang|along
innerhalb|within, inside of
außerhalb|outside of
während|during, while
seit|since, for
ab|from, off
trotz|despite
wegen|because of
statt|instead of
ohne|without
außer|except, besides
je|each, ever
sonst|otherwise, else
zwar|admittedly, indeed
etwa|approximately, roughly
ungefähr|approximately, roughly
fast|almost
kaum|hardly, barely
genug|enough
zu viel|too much
sogar|even
besonders|especially
vielleicht|maybe, perhaps
wahrscheinlich|probably
natürlich|of course, naturally
sicherlich|certainly
bestimmt|definitely, certain
leider|unfortunately
hoffentlich|hopefully
zum Glück|luckily
plötzlich|suddenly
endlich|finally, at last
zuerst|first, at first
zuletzt|last, finally
danach|afterwards
vorher|before, beforehand
nachher|afterwards
inzwischen|meanwhile
gleichzeitig|at the same time
nochmal|again, once more
weiter|further, on
zurück|back
vorbei|past, over
weg|away, gone
her|here (towards)
hin|there (away)
zusammen|together
allein|alone
gemeinsam|together, jointly
getrennt|separately
ähnlich|similar
gleich|same, equal, right away
verschieden|different, various
üblich|usual, customary
gewöhnlich|usually, ordinary
normal|normal
besonder|special
merkwürdig|strange, odd
seltsam|strange
komisch|funny, strange
lustig|funny
ernst|serious
ruhig|calm, quiet
nervös|nervous
aufgeregt|excited
zufrieden|satisfied, content
stolz|proud
peinlich|embarrassing
höflich|polite
frech|cheeky, rude
faul|lazy, rotten
fleißig|hard-working, diligent
ehrlich|honest
treu|loyal, faithful
mutig|brave
feige|cowardly
großzügig|generous
geizig|stingy
neugierig|curious
vorsichtig|careful, cautious
gefährlich|dangerous
nützlich|useful
nutzlos|useless
notwendig|necessary
zusätzlich|additional
genau|exact, precise
deutlich|clear, distinct
klar|clear
unklar|unclear
einfach|simple, easy, simply
schwierig|difficult
kompliziert|complicated
bequem|comfortable
unbequem|uncomfortable
angenehm|pleasant
zufällig|by chance, random
absichtlich|on purpose
benutzen|to use
verwenden|to use, to employ
gehören|to belong
besitzen|to own, to possess
bekommen|to get, to receive
erhalten|to receive, to preserve
schicken|to send
senden|to send, to broadcast
holen|to fetch, to get
legen|to lay, to put
stellen|to put, to place
setzen|to set, to put
hängen|to hang
stecken|to put, to stick
drücken|to press, to push
heben|to lift
sinken|to sink
steigen|to climb, to rise
reiten|to ride (a horse)
klettern|to climb
tanzen|to dance
singen|to sing
lachen|to laugh
weinen|to cry
lächeln|to smile
schreien|to scream, to shout
rufen|to call, to shout
flüstern|to whisper
schweigen|to be silent
reden|to talk
diskutieren|to discuss
streiten|to argue, to quarrel
kämpfen|to fight
üben|to practise, to practice
wiederholen|to repeat
merken|to notice, to remember
achten|to pay attention, to respect
`;

/**
 * Parses RAW_WORDS into card objects.
 * Each card keeps the full translation string for display and a list of
 * normalised accepted answers for grading.
 */
const WORDS = RAW_WORDS.trim().split('\n').map((line, index) => {
  const [german, english] = line.split('|');
  return {
    id: index,
    german: german.trim(),
    english: english.trim(),
    answers: english.split(',').map((a) => a.trim()).filter(Boolean),
  };
});
