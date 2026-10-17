/* ==========================================================
   LEÇONS — les 13 temps de l'anglais
   group : present | past | future  (couleur d'accent)
   tl    : frise chronologique (x de -1 à 1, 0 = maintenant)
   ========================================================== */

window.TENSE_GROUPS = {
  present: { label: 'Présent', color: 'blue', hex: '#d8c08a' },
  past:    { label: 'Passé',   color: 'purple', hex: '#b08d57' },
  future:  { label: 'Futur',   color: 'orange', hex: '#e3d3ad' },
};

window.LESSONS = [
  /* ------------------------------------------------------ */
  {
    id: 'present_simple',
    name: 'Present Simple',
    fr: 'Présent simple',
    group: 'present',
    level: 'A1',
    formula: 'S + V (+s à la 3e pers.)',
    summary: "Le temps des habitudes, des vérités générales et des états permanents. C'est le présent « photo d'identité » : il décrit comment sont les choses en général, pas ce qui se passe en ce moment.",
    tl: [{ k: 'dot', x: -0.75 }, { k: 'dot', x: -0.4 }, { k: 'dot', x: 0 }, { k: 'dot', x: 0.4 }, { k: 'dot', x: 0.75 }],
    tlCaption: "Action répétée régulièrement, avant, maintenant et après.",
    formation: [
      { label: 'Affirmation', code: 'I / you / we / they work — he / she / it works', ex: 'She works in a bank.' },
      { label: 'Négation', code: "S + do / does + not + base verbale", ex: "He doesn't (does not) like coffee." },
      { label: 'Question', code: 'Do / Does + S + base verbale ?', ex: 'Does she speak English?' },
      { label: 'Réponse courte', code: 'Yes, I do. / No, she doesn\'t.', ex: 'Do you live here? — Yes, I do.' },
    ],
    formationNotes: [
      "À la 3e personne du singulier (he, she, it), on ajoute -s : she works.",
      "Verbes en -s, -sh, -ch, -x, -o → -es : he goes, she watches, it fixes, he kisses.",
      "Consonne + y → -ies : study → studies, fly → flies. Mais voyelle + y → -s : play → plays.",
      "have → has à la 3e personne. Be est irrégulier : I am, you are, he is.",
      "Avec does / doesn't, le verbe principal perd son -s : Does he work? (jamais « Does he works? »).",
    ],
    uses: [
      { title: 'Habitudes et routines', desc: "Ce que l'on fait régulièrement, souvent avec un adverbe de fréquence.", examples: [['I get up at 7 every morning.', 'Je me lève à 7 h tous les matins.'], ['She usually takes the bus.', "Elle prend généralement le bus."]] },
      { title: 'Vérités générales et faits scientifiques', desc: "Ce qui est toujours vrai, indépendamment du moment.", examples: [['Water boils at 100 degrees.', "L'eau bout à 100 degrés."], ['The sun rises in the east.', "Le soleil se lève à l'est."]] },
      { title: 'États permanents', desc: "Situations stables : lieu de vie, profession, goûts, opinions.", examples: [['My brother lives in London.', 'Mon frère habite à Londres.'], ['I love jazz.', "J'adore le jazz."]] },
      { title: 'Horaires et programmes officiels (sens futur)', desc: "Transports, cinémas, cours : un futur fixé par un calendrier.", examples: [['The train leaves at 6:15 tomorrow.', 'Le train part à 6 h 15 demain.'], ['The film starts at 8.', 'Le film commence à 20 h.']] },
      { title: 'Après when, if, as soon as, before, until (sens futur)', desc: "Dans une subordonnée de temps ou de condition, on n'emploie pas will.", examples: [["I'll call you when I arrive.", "Je t'appellerai quand j'arriverai."], ['If it rains, we will stay home.', 'S\'il pleut, nous resterons à la maison.']] },
      { title: 'Récits, instructions, commentaires', desc: "Résumés de films, recettes, commentaires sportifs, titres de presse.", examples: [['First, you mix the flour and the eggs.', "D'abord, on mélange la farine et les œufs."], ['Messi shoots… and scores!', 'Messi tire… et marque !']] },
    ],
    signals: ['always', 'usually', 'often', 'sometimes', 'rarely', 'seldom', 'never', 'every day', 'every week', 'on Mondays', 'once a week', 'twice a year', 'in general', 'normally'],
    traps: [
      { title: 'Oublier le -s de la 3e personne', wrong: 'He work in Paris.', right: 'He works in Paris.', explain: "C'est l'erreur n°1 des francophones. He, she, it, mon frère, la société… = 3e personne du singulier → -s." },
      { title: 'Double marquage avec does', wrong: 'Does she likes tea?', right: 'Does she like tea?', explain: "Le -s est déjà porté par « does ». Le verbe principal reste à la base verbale. Idem à la forme négative : she doesn't like." },
      { title: 'Traduire « depuis » par le présent', wrong: 'I live here since 2015.', right: "I have lived here since 2015.", explain: "Le français dit « j'habite ici depuis 2015 » au présent, mais l'anglais exige le present perfect (ou present perfect continuous) pour une durée qui part du passé et continue." },
      { title: '« Être d\'accord » n\'est pas « be agree »', wrong: 'I am agree with you.', right: 'I agree with you.', explain: "Agree est un verbe à part entière. Même piège avec « I am born » au lieu de « I was born »." },
      { title: 'Place de l\'adverbe de fréquence', wrong: 'I go always to the gym.', right: 'I always go to the gym.', explain: "L'adverbe se place AVANT le verbe principal, mais APRÈS le verbe be : She is always late." },
    ],
    rules: [
      "Adverbe de fréquence : avant le verbe principal (I often read), après be (He is often tired), entre l'auxiliaire et le verbe (I have never seen).",
      "Les expressions de fréquence longues (every day, twice a week) se placent en fin de phrase.",
      "Les verbes d'état (know, like, want, believe, need, own…) restent au présent simple même pour « en ce moment » : I know the answer now.",
      "Question sur le sujet : pas de do/does ! Who lives here? (et non « Who does live here? »).",
    ],
    tip: "Repère mental : si tu peux ajouter « en général » ou « d'habitude » à ta phrase française, c'est le present simple.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'present_continuous',
    name: 'Present Continuous',
    fr: 'Présent progressif',
    group: 'present',
    level: 'A1',
    formula: 'S + am / is / are + V-ing',
    summary: "Le temps de l'action en train de se dérouler, des situations temporaires et des projets déjà organisés. Il traduit « être en train de ».",
    tl: [{ k: 'wave', a: -0.35, b: 0.35 }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "Action en cours autour du moment présent, limitée dans le temps.",
    formation: [
      { label: 'Affirmation', code: 'I am / he is / we are + V-ing', ex: "I'm reading a great book." },
      { label: 'Négation', code: 'S + am / is / are + not + V-ing', ex: "She isn't (is not) working today." },
      { label: 'Question', code: 'Am / Is / Are + S + V-ing ?', ex: 'Are you listening to me?' },
      { label: 'Réponse courte', code: "Yes, I am. / No, they aren't.", ex: "Is it raining? — Yes, it is." },
    ],
    formationNotes: [
      "Verbe terminé par -e muet → on supprime le e : make → making, write → writing (mais see → seeing, be → being).",
      "Une syllabe accentuée consonne-voyelle-consonne → on double la consonne : run → running, sit → sitting, begin → beginning.",
      "-ie → -ying : lie → lying, die → dying, tie → tying.",
      "Ne jamais oublier l'auxiliaire be : « I working » est faux.",
    ],
    uses: [
      { title: 'Action en cours au moment où l\'on parle', desc: "Ce qui se passe maintenant, sous nos yeux.", examples: [["Look! It's snowing.", 'Regarde ! Il neige.'], ["Be quiet, the baby is sleeping.", 'Silence, le bébé dort.']] },
      { title: 'Situation temporaire', desc: "Vraie en ce moment, mais pas de façon permanente (ces jours-ci, cette semaine).", examples: [["I'm living with my parents until I find a flat.", "Je vis chez mes parents jusqu'à ce que je trouve un appartement."], ["He's working on a new project this month.", 'Il travaille sur un nouveau projet ce mois-ci.']] },
      { title: 'Futur proche organisé (rendez-vous, arrangement)', desc: "Quelque chose de prévu, souvent avec une date ou une heure. Très fréquent à l'oral.", examples: [["I'm meeting Sarah tomorrow at 10.", "Je vois Sarah demain à 10 h."], ["We're flying to Rome on Friday.", "Nous prenons l'avion pour Rome vendredi."]] },
      { title: 'Évolution, changement en cours', desc: "Avec des verbes comme get, become, change, grow, improve.", examples: [["Your English is getting better.", "Ton anglais s'améliore."], ['The climate is changing.', 'Le climat change.']] },
      { title: 'Agacement avec always / constantly', desc: "Habitude répétée qui irrite le locuteur.", examples: [["You're always losing your keys!", 'Tu perds tout le temps tes clés !']] },
    ],
    signals: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week', 'these days', 'at present', 'Look!', 'Listen!', 'still', 'tonight (projet)'],
    traps: [
      { title: 'Verbes d\'état au progressif', wrong: "I'm knowing the answer.", right: 'I know the answer.', explain: "Les verbes d'état (know, understand, believe, want, need, like, love, hate, prefer, own, belong, seem, mean…) ne se mettent pas à la forme -ing : ils décrivent un état, pas une action." },
      { title: 'Oublier l\'auxiliaire be', wrong: 'She watching TV.', right: 'She is watching TV.', explain: "Le present continuous a TOUJOURS deux éléments : be conjugué + V-ing." },
      { title: 'Confondre habitude et action en cours', wrong: "I'm going to work by car every day.", right: 'I go to work by car every day.', explain: "« Every day » = habitude → present simple. Le progressif est réservé à ce qui est en cours ou temporaire." },
      { title: 'Verbes à double sens (think, have, see, taste…)', wrong: "I'm thinking you're right.", right: "I think you're right.", explain: "Think = opinion → simple. Think = réfléchir → progressif possible : I'm thinking about my future. De même : I have a car (posséder) / I'm having lunch (prendre un repas)." },
      { title: 'Orthographe du -ing', wrong: 'He is runing / makeing.', right: 'He is running / making.', explain: "Doublement de la consonne finale (run → running) et suppression du -e muet (make → making)." },
    ],
    rules: [
      "Liste des verbes d'état à mémoriser : know, believe, understand, remember, forget, mean, want, need, prefer, like, love, hate, own, belong, contain, seem, cost, agree.",
      "Les verbes de perception (see, hear, smell, taste) sont généralement au simple, souvent avec can : I can hear music.",
      "Pour un projet organisé : present continuous. Pour un horaire officiel : present simple. Pour une intention : be going to.",
    ],
    tip: "Repère mental : si tu peux dire « être en train de » ou « en ce moment / cette semaine », pense present continuous.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'present_perfect',
    name: 'Present Perfect',
    fr: 'Present perfect',
    group: 'present',
    level: 'A2',
    formula: 'S + have / has + participe passé',
    summary: "Le pont entre le passé et le présent. On l'utilise quand une action passée a un lien avec maintenant : un résultat visible, une expérience de vie, ou une période qui n'est pas terminée. C'est LE temps le plus difficile pour les francophones.",
    tl: [{ k: 'span', a: -0.8, b: 0 }, { k: 'dot', x: -0.45 }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "Action passée à un moment non précisé, dont l'effet ou la période touche le présent.",
    formation: [
      { label: 'Affirmation', code: 'I / you / we / they have + PP — he / she / it has + PP', ex: "I've (have) finished my report." },
      { label: 'Négation', code: "S + have / has + not + PP", ex: "She hasn't (has not) called yet." },
      { label: 'Question', code: 'Have / Has + S + PP ?', ex: 'Have you ever been to Japan?' },
      { label: 'Réponse courte', code: "Yes, I have. / No, he hasn't.", ex: 'Has he arrived? — No, he hasn\'t.' },
    ],
    formationNotes: [
      "Participe passé régulier = V-ed : work → worked, play → played.",
      "Participe passé irrégulier = 3e colonne de la liste : go → went → GONE, see → saw → SEEN, write → wrote → WRITTEN.",
      "Contractions : I've, you've, he's, she's, we've, they've (attention : he's peut être he is OU he has).",
    ],
    uses: [
      { title: 'Expérience de vie (sans date)', desc: "Ce qu'on a fait (ou jamais fait) au cours de sa vie. Le moment n'a pas d'importance.", examples: [["I've visited New York three times.", 'Je suis allé à New York trois fois.'], ["Have you ever eaten sushi?", 'As-tu déjà mangé des sushis ?']] },
      { title: 'Action passée avec un résultat présent', desc: "L'action est terminée, mais sa conséquence est visible maintenant.", examples: [["I've lost my keys.", "J'ai perdu mes clés (donc je ne peux pas rentrer)."], ["She's broken her leg.", "Elle s'est cassé la jambe (elle a un plâtre)."]] },
      { title: 'Durée jusqu\'à maintenant (for / since)', desc: "Une situation commencée dans le passé et qui continue. C'est la traduction de « depuis » + présent français.", examples: [["I've known him for ten years.", 'Je le connais depuis dix ans.'], ["We've lived here since 2018.", 'Nous habitons ici depuis 2018.']] },
      { title: 'Période non terminée', desc: "Avec today, this week, this year, so far : la période inclut encore le présent.", examples: [["I've drunk three coffees today.", "J'ai bu trois cafés aujourd'hui."], ["It has rained a lot this month.", 'Il a beaucoup plu ce mois-ci.']] },
      { title: 'Nouvelle récente (just, already, yet)', desc: "Une action qui vient de se produire ou qui était attendue.", examples: [["I've just seen your sister.", 'Je viens de voir ta sœur.'], ["Have you finished yet?", 'Tu as fini ?']] },
    ],
    signals: ['ever', 'never', 'just', 'already', 'yet', 'so far', 'up to now', 'recently', 'lately', 'since', 'for', 'this week', 'today', 'how long…?', 'It\'s the first time…', 'before (= déjà)'],
    traps: [
      { title: 'Avec un moment passé précis', wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.', explain: "Dès qu'il y a un repère passé terminé (yesterday, last week, in 2010, two days ago, when I was a child), on utilise le past simple. Le present perfect est interdit avec ces marqueurs." },
      { title: 'Traduire « depuis » par le présent', wrong: 'I work here for five years.', right: "I've worked here for five years.", explain: "« Je travaille ici depuis cinq ans » → present perfect (ou present perfect continuous : I've been working…). « I work here for five years » voudrait dire tout autre chose." },
      { title: 'Confondre for et since', wrong: "I've lived here since five years.", right: "I've lived here for five years.", explain: "FOR + durée (five years, two hours, a long time). SINCE + point de départ (2019, Monday, I was born, last summer)." },
      { title: 'Been ou gone ?', wrong: "She isn't here, she has been to Spain until Monday.", right: "She isn't here, she has gone to Spain until Monday.", explain: "Gone = parti et pas encore revenu. Been = allé et revenu (expérience)." },
      { title: 'Calque du passé composé français', wrong: "I have finished school in 2015.", right: "I finished school in 2015.", explain: "Le passé composé français ne se traduit PAS automatiquement par le present perfect. Si l'action est datée et terminée → past simple." },
      { title: 'Place de yet et already', wrong: "I have finished yet my work.", right: "I haven't finished my work yet. / I have already finished.", explain: "Yet : en fin de phrase, dans les négations et questions. Already : entre have et le participe, dans les affirmations." },
    ],
    rules: [
      "Question avec « When…? » → toujours past simple (When did you arrive?). Question avec « How long…? » → present perfect (How long have you lived here?).",
      "« It's the first / second time + present perfect » : It's the first time I've seen snow.",
      "Superlatif + present perfect : It's the best film I've ever seen.",
      "Ago ↔ past simple (I saw him two days ago). For ↔ present perfect si la situation continue (I've had this car for two years).",
      "En anglais américain, on entend parfois le past simple avec just / already / yet (Did you eat yet?) ; en anglais britannique, le present perfect reste la norme.",
    ],
    tip: "Repère mental : demande-toi « Est-ce que je donne une date passée terminée ? ». Oui → past simple. Non, et ça a un lien avec maintenant → present perfect.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'present_perfect_continuous',
    name: 'Present Perfect Continuous',
    fr: 'Present perfect progressif',
    group: 'present',
    level: 'B1',
    formula: 'S + have / has + been + V-ing',
    summary: "Il insiste sur la DURÉE ou l'ACTIVITÉ d'une action commencée dans le passé qui continue jusqu'à maintenant (ou vient juste de s'arrêter en laissant des traces).",
    tl: [{ k: 'wave', a: -0.8, b: 0 }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "Activité continue du passé jusqu'à maintenant.",
    formation: [
      { label: 'Affirmation', code: 'S + have / has + been + V-ing', ex: "I've been waiting for an hour." },
      { label: 'Négation', code: "S + haven't / hasn't + been + V-ing", ex: "She hasn't been sleeping well." },
      { label: 'Question', code: 'Have / Has + S + been + V-ing ?', ex: 'How long have you been learning English?' },
    ],
    formationNotes: [
      "Been est invariable : I have been, she has been.",
      "Même règles orthographiques du -ing que le present continuous.",
    ],
    uses: [
      { title: 'Durée d\'une activité jusqu\'à maintenant', desc: "Avec for, since, how long, all day, all morning. Traduit souvent « depuis » ou « ça fait … que ».", examples: [["I've been learning English for two years.", "J'apprends l'anglais depuis deux ans."], ["It has been raining since this morning.", 'Il pleut depuis ce matin.']] },
      { title: 'Activité récente avec des traces visibles', desc: "L'action vient de s'arrêter, mais on en voit les effets.", examples: [["You're out of breath. Have you been running?", 'Tu es essoufflé. Tu as couru ?'], ["Her eyes are red. She's been crying.", 'Ses yeux sont rouges. Elle a pleuré.']] },
      { title: 'Action répétée sur une période', desc: "Une activité qui se répète régulièrement récemment.", examples: [["I've been going to the gym a lot lately.", 'Je vais beaucoup à la salle ces derniers temps.']] },
    ],
    signals: ['for', 'since', 'how long…?', 'all day', 'all morning', 'all week', 'lately', 'recently', 'ça fait … que'],
    traps: [
      { title: 'Verbes d\'état', wrong: "I've been knowing her for years.", right: "I've known her for years.", explain: "Les verbes d'état (know, have = posséder, be, like, believe…) restent au present perfect simple." },
      { title: 'Quantité ou résultat → present perfect simple', wrong: "I've been writing three emails.", right: "I've written three emails. / I've been writing emails all morning.", explain: "Si on compte (combien ?) ou qu'on parle du résultat terminé → simple. Si on insiste sur l'activité et sa durée (depuis combien de temps ?) → progressif." },
      { title: 'Le présent français pour « depuis »', wrong: "I wait for you since 9 o'clock!", right: "I've been waiting for you since 9 o'clock!", explain: "« Je t'attends depuis 9 h » → present perfect continuous. Jamais de présent simple avec since/for pour une durée en cours." },
    ],
    rules: [
      "How long…? → progressif (durée). How many / How much…? → simple (quantité).",
      "Avec live et work, simple et progressif sont tous deux possibles : I've lived / I've been living here for years.",
      "Action terminée et datée → jamais ce temps, utiliser le past simple.",
    ],
    tip: "Repère mental : « Depuis combien de temps ? » → present perfect continuous. « Combien ? » → present perfect simple.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'past_simple',
    name: 'Past Simple',
    fr: 'Prétérit',
    group: 'past',
    level: 'A1',
    formula: 'S + V-ed / 2e colonne (irréguliers)',
    summary: "Le temps du récit et des actions passées TERMINÉES, situées à un moment précis et coupées du présent. Il correspond au passé simple, au passé composé ou à l'imparfait français selon le contexte.",
    tl: [{ k: 'dot', x: -0.55 }, { k: 'ref', x: -0.55, label: 'yesterday' }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "Action terminée à un moment précis du passé, sans lien avec maintenant.",
    formation: [
      { label: 'Affirmation', code: 'S + V-ed (réguliers) / forme 2 (irréguliers)', ex: 'I worked late yesterday. She went to Rome.' },
      { label: 'Négation', code: "S + did not (didn't) + base verbale", ex: "We didn't see the film." },
      { label: 'Question', code: 'Did + S + base verbale ?', ex: 'Did you call him?' },
      { label: 'Be', code: 'I / he / she / it was — you / we / they were', ex: 'They were tired. Was it expensive?' },
    ],
    formationNotes: [
      "Verbes réguliers : + -ed (play → played), + -d si -e final (live → lived), consonne + y → -ied (study → studied).",
      "Doublement : stop → stopped, plan → planned, prefer → preferred.",
      "Prononciation de -ed : /t/ après sons sourds (worked, stopped), /d/ après sons sonores (played, lived), /ɪd/ après t ou d (wanted, needed).",
      "Avec did / didn't, le verbe revient à la base verbale : Did she go? (jamais « Did she went? »).",
      "Il est le même à toutes les personnes (sauf be : was / were).",
    ],
    uses: [
      { title: 'Action terminée à un moment précis', desc: "Le moment est donné ou évident d'après le contexte.", examples: [['I met him in 2019.', "Je l'ai rencontré en 2019."], ['She called me two hours ago.', "Elle m'a appelé il y a deux heures."]] },
      { title: 'Succession d\'actions dans un récit', desc: "Les événements s'enchaînent dans l'ordre.", examples: [['He opened the door, turned on the light and sat down.', "Il ouvrit la porte, alluma la lumière et s'assit."]] },
      { title: 'Situation ou habitude passée terminée', desc: "Vraie pendant une période révolue (souvent avec used to).", examples: [['I lived in Lyon when I was a child.', "J'habitais à Lyon quand j'étais enfant."], ['We played tennis every Sunday.', 'Nous jouions au tennis tous les dimanches.']] },
      { title: 'Personnes décédées / périodes révolues', desc: "Une vie terminée est forcément au prétérit.", examples: [['Shakespeare wrote 39 plays.', 'Shakespeare a écrit 39 pièces.']] },
    ],
    signals: ['yesterday', 'last night', 'last week', 'last year', '… ago', 'in 2010', 'in the 90s', 'when I was young', 'then', 'after that', 'once (= autrefois)', 'the other day', 'When…?'],
    traps: [
      { title: 'Double marquage avec did', wrong: 'Did you went there?', right: 'Did you go there?', explain: "Did porte déjà le passé. Le verbe reste à la base verbale. Même règle : I didn't go (pas « didn't went »)." },
      { title: 'Present perfect avec un repère passé', wrong: "I've bought this car last year.", right: 'I bought this car last year.', explain: "Last year, ago, yesterday, in 2015 = moment terminé → past simple obligatoire." },
      { title: 'Confondre ago, for et since', wrong: 'I arrived since two hours.', right: 'I arrived two hours ago.', explain: "« Il y a » + durée = AGO, placé APRÈS la durée : two hours ago." },
      { title: 'Verbes irréguliers', wrong: 'I buyed / thinked / teached…', right: 'I bought / thought / taught…', explain: "Apprends les verbes irréguliers par familles (bought, brought, thought, caught, taught) : consulte la table dans le Dictionnaire." },
      { title: 'Imparfait ≠ past continuous automatiquement', wrong: 'When I was young, I was living in Paris.', right: 'When I was young, I lived in Paris.', explain: "L'imparfait français d'habitude ou d'état se traduit souvent par le past simple (ou used to), pas par le past continuous." },
    ],
    rules: [
      "Question sur le sujet : pas de did ! Who called you? What happened?",
      "Used to + base verbale = habitude passée terminée : I used to smoke (= je fumais, je ne fume plus).",
      "Would + base verbale peut aussi décrire une habitude passée dans un récit : Every summer we would go to the sea.",
    ],
    tip: "Repère mental : un repère de temps terminé (hier, en 2010, il y a) = past simple, toujours.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'past_continuous',
    name: 'Past Continuous',
    fr: 'Prétérit progressif',
    group: 'past',
    level: 'A2',
    formula: 'S + was / were + V-ing',
    summary: "Le temps de l'action en cours à un moment du passé. Il plante le décor d'un récit ou décrit une action interrompue par une autre.",
    tl: [{ k: 'wave', a: -0.8, b: -0.25 }, { k: 'dot', x: -0.5 }, { k: 'ref', x: -0.5, label: 'when…' }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "Action en déroulement (vague) interrompue par une action ponctuelle (point).",
    formation: [
      { label: 'Affirmation', code: 'I / he / she / it was — you / we / they were + V-ing', ex: 'I was watching TV at 9 pm.' },
      { label: 'Négation', code: "S + wasn't / weren't + V-ing", ex: "They weren't listening." },
      { label: 'Question', code: 'Was / Were + S + V-ing ?', ex: 'What were you doing last night?' },
    ],
    formationNotes: [
      "Was au singulier (I, he, she, it), were pour you, we, they.",
      "Mêmes règles orthographiques du -ing que le present continuous.",
    ],
    uses: [
      { title: 'Action en cours à un moment précis du passé', desc: "Ce qu'on était en train de faire à une heure donnée.", examples: [['At 8 o\'clock I was having dinner.', 'À 8 h, je dînais.'], ['This time last year we were living in Spain.', "L'an dernier à la même époque, nous vivions en Espagne."]] },
      { title: 'Action interrompue (when + past simple)', desc: "Une action longue (past continuous) est coupée par une action courte (past simple).", examples: [['I was cooking when the phone rang.', 'Je cuisinais quand le téléphone a sonné.'], ['While she was driving, she saw an accident.', 'Pendant qu\'elle conduisait, elle a vu un accident.']] },
      { title: 'Actions simultanées (while)', desc: "Deux actions longues en même temps.", examples: [['While I was reading, my wife was working.', 'Pendant que je lisais, ma femme travaillait.']] },
      { title: 'Description du décor d\'un récit', desc: "L'arrière-plan de l'histoire, l'ambiance.", examples: [['The sun was shining and the birds were singing.', 'Le soleil brillait et les oiseaux chantaient.']] },
    ],
    signals: ['while', 'when', 'as', 'at 5 o\'clock yesterday', 'at that moment', 'all evening', 'this time last week', 'all day yesterday'],
    traps: [
      { title: 'Inverser action longue et action courte', wrong: 'I cooked when the phone was ringing.', right: 'I was cooking when the phone rang.', explain: "L'action de fond (longue) → past continuous. L'action qui surgit (courte) → past simple." },
      { title: 'Was / were', wrong: 'They was playing football.', right: 'They were playing football.', explain: "Were avec you, we, they. Was avec I, he, she, it." },
      { title: 'Verbes d\'état', wrong: 'I was knowing the answer.', right: 'I knew the answer.', explain: "Les verbes d'état restent au past simple." },
      { title: 'Actions successives', wrong: 'He was getting up, was having a shower and was leaving.', right: 'He got up, had a shower and left.', explain: "Une succession d'actions terminées = past simple. Le progressif sert au décor, pas à l'enchaînement." },
    ],
    rules: [
      "While + action longue (past continuous) ; when + action courte (past simple) le plus souvent.",
      "When I arrived, she left (= elle est partie après mon arrivée) ≠ When I arrived, she was leaving (= elle était en train de partir).",
    ],
    tip: "Repère mental : « j'étais en train de… quand soudain… » = past continuous + past simple.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'past_perfect',
    name: 'Past Perfect',
    fr: 'Plus-que-parfait',
    group: 'past',
    level: 'B1',
    formula: 'S + had + participe passé',
    summary: "Le « passé du passé ». Il indique qu'une action s'est produite AVANT une autre action passée. Il correspond généralement au plus-que-parfait français (j'avais fait).",
    tl: [{ k: 'dot', x: -0.75 }, { k: 'ref', x: -0.75, label: 'action 1' }, { k: 'dot', x: -0.35 }, { k: 'ref', x: -0.35, label: 'action 2' }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "L'action 1 (past perfect) précède l'action 2 (past simple).",
    formation: [
      { label: 'Affirmation', code: 'S + had + PP (toutes personnes)', ex: 'The film had started when we arrived.' },
      { label: 'Négation', code: "S + hadn't + PP", ex: "I hadn't seen him before." },
      { label: 'Question', code: 'Had + S + PP ?', ex: 'Had you ever been there before?' },
    ],
    formationNotes: [
      "Had est identique à toutes les personnes.",
      "Contraction : I'd, she'd… (attention : 'd peut aussi être would).",
    ],
    uses: [
      { title: 'Antériorité dans le passé', desc: "Pour bien montrer quelle action a eu lieu en premier.", examples: [['When I arrived at the station, the train had left.', 'Quand je suis arrivé à la gare, le train était parti.'], ['She told me she had lost her job.', "Elle m'a dit qu'elle avait perdu son travail."]] },
      { title: 'Expérience avant un moment passé', desc: "Avec never, ever, before, already, by the time.", examples: [['I had never seen the sea before I was 15.', "Je n'avais jamais vu la mer avant mes 15 ans."], ['By the time he called, I had already gone to bed.', "Quand il a appelé, j'étais déjà couché."]] },
      { title: 'Discours indirect', desc: "Le present perfect et le past simple reculent au past perfect.", examples: [['"I have finished." → He said he had finished.', '« J\'ai fini. » → Il a dit qu\'il avait fini.']] },
      { title: 'Conditionnel passé (3e conditionnel) et regrets', desc: "If + past perfect, would have + PP. Wish + past perfect.", examples: [['If I had known, I would have come.', "Si j'avais su, je serais venu."], ['I wish I had studied harder.', "Je regrette de ne pas avoir travaillé plus."]] },
    ],
    signals: ['before', 'after', 'already', 'just', 'never', 'by the time', 'until', 'when', 'as soon as', 'by then'],
    traps: [
      { title: 'Abuser du past perfect', wrong: 'I had woken up, I had had breakfast and I had left.', right: 'I woke up, had breakfast and left.', explain: "Si les actions sont racontées dans l'ordre chronologique, le past simple suffit. Le past perfect sert à remonter en arrière." },
      { title: '« Would have » dans la subordonnée en if', wrong: 'If I would have known, I would have come.', right: 'If I had known, I would have come.', explain: "Jamais de would dans la proposition en if : if + past perfect." },
      { title: 'Confondre avec le past simple', wrong: 'When we got to the cinema, the film started.', right: 'When we got to the cinema, the film had started.', explain: "Avec « started », le film commence à notre arrivée. Avec « had started », il avait déjà commencé : nous l'avons raté !" },
    ],
    rules: [
      "Avec after et before, l'ordre est déjà clair : le past simple est souvent accepté (After he left, I went to bed).",
      "By the time + past simple, past perfect : By the time she arrived, we had eaten.",
      "It was the first time + past perfect : It was the first time I had flown.",
    ],
    tip: "Repère mental : si tu dois « rembobiner » le récit vers une action antérieure, utilise had + participe passé.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'past_perfect_continuous',
    name: 'Past Perfect Continuous',
    fr: 'Plus-que-parfait progressif',
    group: 'past',
    level: 'B2',
    formula: 'S + had been + V-ing',
    summary: "Il exprime la DURÉE d'une activité qui se déroulait jusqu'à un moment du passé. C'est l'équivalent passé du present perfect continuous.",
    tl: [{ k: 'wave', a: -0.85, b: -0.4 }, { k: 'ref', x: -0.4, label: 'then' }, { k: 'ref', x: 0, label: 'now' }],
    tlCaption: "Activité qui durait jusqu'à un repère passé.",
    formation: [
      { label: 'Affirmation', code: 'S + had been + V-ing', ex: 'I had been waiting for an hour when she arrived.' },
      { label: 'Négation', code: "S + hadn't been + V-ing", ex: "He hadn't been sleeping well." },
      { label: 'Question', code: 'Had + S + been + V-ing ?', ex: 'How long had you been working there?' },
    ],
    formationNotes: ["Forme identique à toutes les personnes : had been + V-ing."],
    uses: [
      { title: 'Durée jusqu\'à un moment passé', desc: "Traduit « depuis » avec un imparfait français (j'attendais depuis…).", examples: [['She had been working there for ten years when she was promoted.', "Elle travaillait là depuis dix ans quand elle a été promue."], ['We had been driving for hours.', 'Nous roulions depuis des heures.']] },
      { title: 'Cause d\'une situation passée', desc: "Une activité prolongée explique un état passé.", examples: [['He was tired because he had been running.', "Il était fatigué parce qu'il avait couru."], ['The ground was wet. It had been raining.', 'Le sol était mouillé. Il avait plu.']] },
    ],
    signals: ['for', 'since', 'how long', 'all day', 'before', 'when', 'by the time', 'until'],
    traps: [
      { title: 'L\'imparfait + depuis', wrong: 'I waited for two hours when he finally arrived.', right: 'I had been waiting for two hours when he finally arrived.', explain: "« J'attendais depuis deux heures quand… » → durée jusqu'à un moment passé → past perfect continuous." },
      { title: 'Verbes d\'état', wrong: 'I had been knowing him for years.', right: 'I had known him for years.', explain: "Les verbes d'état utilisent le past perfect simple." },
    ],
    rules: [
      "Durée (how long) → progressif ; quantité / résultat (how many) → past perfect simple.",
      "C'est le recul au discours indirect du present perfect continuous : « I've been waiting » → She said she had been waiting.",
    ],
    tip: "Repère mental : « …depuis X temps quand… » au passé = had been + V-ing.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'future_will',
    name: 'Future Simple (will)',
    fr: 'Futur avec will',
    group: 'future',
    level: 'A2',
    formula: 'S + will + base verbale',
    summary: "Le futur des décisions prises sur le moment, des prédictions basées sur une opinion, des promesses, offres et menaces. Will est un modal : il est suivi de la base verbale, sans to.",
    tl: [{ k: 'ref', x: 0, label: 'now' }, { k: 'dot', x: 0.55 }],
    tlCaption: "Action future, décidée ou prédite au moment où l'on parle.",
    formation: [
      { label: 'Affirmation', code: 'S + will (\'ll) + base verbale', ex: "I'll help you." },
      { label: 'Négation', code: "S + will not (won't) + base verbale", ex: "She won't come." },
      { label: 'Question', code: 'Will + S + base verbale ?', ex: 'Will you marry me?' },
      { label: 'Proposition', code: 'Shall I / Shall we + base verbale ?', ex: 'Shall I open the window?' },
    ],
    formationNotes: [
      "Will est identique à toutes les personnes, sans -s : he will go.",
      "Will not → won't (et non « willn't »).",
      "Jamais de to après will : « I will to go » est faux.",
    ],
    uses: [
      { title: 'Décision spontanée', desc: "Prise au moment même où l'on parle.", examples: [["The phone's ringing. — I'll get it!", 'Le téléphone sonne. — J\'y vais !'], ["I'm cold. — I'll close the window.", 'J\'ai froid. — Je vais fermer la fenêtre.']] },
      { title: 'Prédiction basée sur une opinion', desc: "Souvent avec I think, I'm sure, probably, I hope, maybe.", examples: [['I think it will rain tomorrow.', 'Je pense qu\'il pleuvra demain.'], ["She'll probably win.", 'Elle gagnera probablement.']] },
      { title: 'Promesses, offres, menaces, refus', desc: "Engagement du locuteur.", examples: [["I'll always love you.", "Je t'aimerai toujours."], ["The car won't start.", 'La voiture ne veut pas démarrer.']] },
      { title: 'Faits futurs certains', desc: "Ce qui arrivera de façon inévitable.", examples: [["I'll be 40 next year.", "J'aurai 40 ans l'année prochaine."]] },
    ],
    signals: ['tomorrow', 'next week', 'soon', 'in two days', 'one day', 'I think', 'I\'m sure', 'probably', 'perhaps', 'I hope', 'I promise'],
    traps: [
      { title: 'Will après when, if, as soon as…', wrong: "I'll call you when I will arrive.", right: "I'll call you when I arrive.", explain: "Dans une subordonnée de temps (when, as soon as, before, after, until) ou de condition (if, unless), on met le PRÉSENT, pas will. Différent du français !" },
      { title: 'To après will', wrong: 'I will to send it tomorrow.', right: 'I will send it tomorrow.', explain: "Will est un modal (comme can, must) : base verbale directement." },
      { title: 'Will pour un projet déjà décidé', wrong: "I will visit my aunt next weekend, I booked the train.", right: "I'm going to visit / I'm visiting my aunt next weekend.", explain: "Une intention déjà prise → be going to. Un arrangement organisé → present continuous. Will = décision sur le moment." },
      { title: 'Futur proche français « je vais »', wrong: "Look at those clouds! It will rain.", right: "Look at those clouds! It's going to rain.", explain: "Prédiction basée sur une preuve visible maintenant → be going to." },
    ],
    rules: [
      "Shall s'utilise avec I / we pour proposer ou demander un avis : Shall we dance? What shall I do?",
      "Won't exprime aussi un refus : He won't listen to me.",
      "Will + be + adjectif pour des états futurs : It will be cold.",
    ],
    tip: "Repère mental : décision sur le moment ou « je pense que » → will.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'future_going_to',
    name: 'Be Going To',
    fr: 'Futur proche (going to)',
    group: 'future',
    level: 'A2',
    formula: 'S + am / is / are + going to + base verbale',
    summary: "Le futur des intentions déjà décidées et des prédictions basées sur une preuve présente. Il traduit souvent « aller + infinitif » en français.",
    tl: [{ k: 'span', a: -0.35, b: 0 }, { k: 'ref', x: 0, label: 'now' }, { k: 'dot', x: 0.5 }],
    tlCaption: "La décision (ou la preuve) existe déjà maintenant ; l'action viendra plus tard.",
    formation: [
      { label: 'Affirmation', code: 'S + be + going to + base verbale', ex: "I'm going to study medicine." },
      { label: 'Négation', code: "S + be + not + going to + base", ex: "We aren't going to buy that house." },
      { label: 'Question', code: 'Be + S + going to + base ?', ex: 'Are you going to tell her?' },
    ],
    formationNotes: [
      "Ne pas oublier be : « I going to » est faux.",
      "À l'oral familier : gonna (I'm gonna call him) — à éviter à l'écrit.",
      "« Going to go » est correct : I'm going to go to London.",
    ],
    uses: [
      { title: 'Intention, projet déjà décidé', desc: "La décision a été prise avant le moment où l'on parle.", examples: [["I'm going to learn Spanish next year.", "Je vais apprendre l'espagnol l'an prochain."], ['She is going to sell her car.', 'Elle va vendre sa voiture.']] },
      { title: 'Prédiction basée sur une évidence présente', desc: "On voit des signes maintenant.", examples: [["Look at those clouds! It's going to rain.", 'Regarde ces nuages ! Il va pleuvoir.'], ["Watch out! You're going to fall!", 'Attention ! Tu vas tomber !']] },
    ],
    signals: ['Look!', 'Watch out!', 'next year', 'tonight', 'this weekend', 'soon', "I've decided", 'plan to'],
    traps: [
      { title: 'Oublier be', wrong: 'I going to call him.', right: "I'm going to call him.", explain: "Going to est toujours précédé de be conjugué (am, is, are)." },
      { title: 'Going to pour une décision spontanée', wrong: "— There's no milk. — Oh, I'm going to buy some!", right: "— There's no milk. — Oh, I'll buy some!", explain: "Décision prise à l'instant → will." },
      { title: 'Going to + V-ing', wrong: "I'm going to visiting Paris.", right: "I'm going to visit Paris.", explain: "Going to + base verbale (le to est celui de l'infinitif)." },
    ],
    rules: [
      "Was / were going to = intention passée non réalisée : I was going to call you, but I forgot.",
      "Intention (going to) ≈ arrangement (present continuous) ; le progressif insiste sur l'organisation (billets réservés, rendez-vous pris).",
    ],
    tip: "Repère mental : « c'est déjà prévu dans ma tête » ou « je vois que ça va arriver » → going to.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'future_continuous',
    name: 'Future Continuous',
    fr: 'Futur progressif',
    group: 'future',
    level: 'B1',
    formula: 'S + will be + V-ing',
    summary: "Il décrit une action qui sera EN COURS à un moment précis du futur. Il sert aussi à demander poliment les projets de quelqu'un.",
    tl: [{ k: 'ref', x: 0, label: 'now' }, { k: 'wave', a: 0.3, b: 0.8 }, { k: 'ref', x: 0.55, label: 'at 8 tomorrow' }],
    tlCaption: "Action en déroulement autour d'un moment futur.",
    formation: [
      { label: 'Affirmation', code: 'S + will be + V-ing', ex: 'This time tomorrow I will be flying to New York.' },
      { label: 'Négation', code: "S + won't be + V-ing", ex: "I won't be working on Monday." },
      { label: 'Question', code: 'Will + S + be + V-ing ?', ex: 'Will you be using the car tonight?' },
    ],
    formationNotes: ["Will be est invariable. Les verbes d'état n'y sont pas employés."],
    uses: [
      { title: 'Action en cours à un moment futur', desc: "Ce que l'on sera en train de faire.", examples: [['At 10 tomorrow I\'ll be taking my exam.', 'Demain à 10 h, je serai en train de passer mon examen.'], ['Don\'t call at 8, we\'ll be having dinner.', "N'appelle pas à 20 h, nous serons en train de dîner."]] },
      { title: 'Question polie sur les projets', desc: "Plus neutre et poli que will seul ou going to.", examples: [['Will you be coming to the party?', 'Est-ce que tu viendras à la fête ?']] },
      { title: 'Action qui se produira dans le cours normal des choses', desc: "Sans intention particulière.", examples: [["I'll be seeing John at work, I'll tell him.", 'Je verrai John au travail, je lui dirai.']] },
    ],
    signals: ['this time tomorrow', 'at 10 tomorrow', 'this time next week', 'in two hours', 'all day tomorrow', 'when you arrive'],
    traps: [
      { title: 'Oublier be', wrong: 'I will working tomorrow.', right: 'I will be working tomorrow.', explain: "Structure complète : will + be + V-ing." },
      { title: 'Verbes d\'état', wrong: 'I will be knowing the results tomorrow.', right: 'I will know the results tomorrow.', explain: "Les verbes d'état restent au futur simple." },
    ],
    rules: [
      "Futur continu = « je serai en train de ». Futur simple = action ponctuelle.",
      "When she arrives, I'll be cooking (je serai en train de cuisiner) ≠ When she arrives, I'll cook (je cuisinerai après son arrivée).",
    ],
    tip: "Repère mental : « je serai en train de » → will be + V-ing.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'future_perfect',
    name: 'Future Perfect',
    fr: 'Futur antérieur',
    group: 'future',
    level: 'B2',
    formula: 'S + will have + participe passé',
    summary: "Il indique qu'une action sera TERMINÉE avant un moment précis du futur. C'est le futur antérieur français (j'aurai fini).",
    tl: [{ k: 'ref', x: 0, label: 'now' }, { k: 'dot', x: 0.4 }, { k: 'ref', x: 0.75, label: 'by Friday' }],
    tlCaption: "L'action sera accomplie avant le repère futur.",
    formation: [
      { label: 'Affirmation', code: 'S + will have + PP', ex: 'I will have finished the report by Friday.' },
      { label: 'Négation', code: "S + won't have + PP", ex: "They won't have arrived by 6." },
      { label: 'Question', code: 'Will + S + have + PP ?', ex: 'Will you have finished by noon?' },
    ],
    formationNotes: ["Have reste invariable après will (jamais « will has »)."],
    uses: [
      { title: 'Action achevée avant un moment futur', desc: "Très souvent avec by + date / heure, ou by the time.", examples: [['By 2030, I will have paid off my loan.', "D'ici 2030, j'aurai remboursé mon prêt."], ['By the time you arrive, I will have cooked dinner.', "Quand tu arriveras, j'aurai préparé le dîner."]] },
      { title: 'Bilan à une date future', desc: "Quantité accumulée à un moment futur.", examples: [['Next month, we will have been married for ten years.', 'Le mois prochain, cela fera dix ans que nous sommes mariés.'], ['By the end of the day, I will have written 20 pages.', "À la fin de la journée, j'aurai écrit 20 pages."]] },
    ],
    signals: ['by tomorrow', 'by Friday', 'by 2030', 'by then', 'by the time', 'before', 'in two years\' time', 'by the end of'],
    traps: [
      { title: 'Will has', wrong: 'She will has finished.', right: 'She will have finished.', explain: "Après un modal (will), toujours la base verbale : have." },
      { title: 'By the time + will', wrong: 'By the time you will arrive, I will have left.', right: 'By the time you arrive, I will have left.', explain: "By the time est une conjonction de temps : présent simple dans la subordonnée." },
      { title: 'By ≠ until', wrong: 'I will have finished until Monday.', right: 'I will have finished by Monday.', explain: "By = au plus tard à (date limite). Until = jusqu'à (durée continue)." },
    ],
    rules: ["By + moment = « d'ici / au plus tard ». C'est le marqueur roi du future perfect."],
    tip: "Repère mental : « j'aurai fini d'ici… » → will have + participe passé.",
  },

  /* ------------------------------------------------------ */
  {
    id: 'future_perfect_continuous',
    name: 'Future Perfect Continuous',
    fr: 'Futur antérieur progressif',
    group: 'future',
    level: 'C1',
    formula: 'S + will have been + V-ing',
    summary: "Il mesure la DURÉE d'une activité jusqu'à un moment futur. On l'utilise pour dire « cela fera X temps que… ».",
    tl: [{ k: 'wave', a: -0.4, b: 0.7 }, { k: 'ref', x: 0, label: 'now' }, { k: 'ref', x: 0.7, label: 'in June' }],
    tlCaption: "Activité commencée avant, qui durera jusqu'au repère futur.",
    formation: [
      { label: 'Affirmation', code: 'S + will have been + V-ing', ex: 'In June, I will have been working here for 10 years.' },
      { label: 'Négation', code: "S + won't have been + V-ing", ex: "She won't have been waiting long." },
      { label: 'Question', code: 'Will + S + have been + V-ing ?', ex: 'How long will you have been living here?' },
    ],
    formationNotes: ["Forme invariable : will have been + V-ing pour toutes les personnes."],
    uses: [
      { title: 'Durée jusqu\'à un moment futur', desc: "Toujours avec une indication de durée (for…).", examples: [['By next year, I will have been learning English for five years.', "L'année prochaine, cela fera cinq ans que j'apprends l'anglais."], ['At 6, we will have been driving for ten hours.', 'À 18 h, cela fera dix heures que nous roulons.']] },
      { title: 'Cause d\'un état futur', desc: "Une activité prolongée expliquera un état futur.", examples: [["He'll be exhausted: he will have been working all night.", 'Il sera épuisé : il aura travaillé toute la nuit.']] },
    ],
    signals: ['for + durée', 'by + moment futur', 'by the time', 'by next…', 'in + mois / année'],
    traps: [
      { title: 'Oublier « been »', wrong: 'I will have working here for 10 years.', right: 'I will have been working here for 10 years.', explain: "La structure complète comporte 4 éléments : will + have + been + V-ing." },
      { title: 'Verbes d\'état', wrong: 'By May I will have been knowing her for a year.', right: 'By May I will have known her for a year.', explain: "Verbes d'état → future perfect simple." },
    ],
    rules: ["Simple (will have done) = résultat ; progressif (will have been doing) = durée de l'activité."],
    tip: "Repère mental : « cela fera X temps que… » au futur → will have been + V-ing.",
  },
];

/* ==========================================================
   COMPARATIFS — les confusions classiques des francophones
   ========================================================== */
window.COMPARISONS = [
  {
    id: 'pp_vs_ps',
    title: 'Present Perfect ou Past Simple ?',
    tenses: ['present_perfect', 'past_simple'],
    intro: "La confusion n°1. Les deux se traduisent souvent par le passé composé français, mais ils ne disent pas la même chose.",
    rows: [
      ['Moment précis terminé (yesterday, ago, in 2010)', 'Past simple', 'I saw her yesterday.'],
      ['Moment non précisé, expérience', 'Present perfect', "I've seen that film."],
      ['Période terminée (last week)', 'Past simple', 'I worked a lot last week.'],
      ['Période en cours (this week, today)', 'Present perfect', "I've worked a lot this week."],
      ['Question « When…? »', 'Past simple', 'When did you arrive?'],
      ['Question « How long…? » (encore vrai)', 'Present perfect', 'How long have you been here?'],
      ['Personne décédée / époque révolue', 'Past simple', 'Picasso painted many portraits.'],
    ],
  },
  {
    id: 'ps_vs_pc',
    title: 'Present Simple ou Present Continuous ?',
    tenses: ['present_simple', 'present_continuous'],
    intro: "Habitude permanente ou action en cours / temporaire ?",
    rows: [
      ['Habitude, routine', 'Present simple', 'I drink coffee every morning.'],
      ['Action en ce moment', 'Present continuous', "I'm drinking coffee right now."],
      ['Situation permanente', 'Present simple', 'She lives in Paris.'],
      ['Situation temporaire', 'Present continuous', "She's living in Paris this year."],
      ['Verbe d\'état', 'Present simple', 'I understand now.'],
      ['Horaire officiel', 'Present simple', 'The bus leaves at 8.'],
      ['Arrangement personnel', 'Present continuous', "I'm leaving at 8."],
    ],
  },
  {
    id: 'future_forms',
    title: 'Will, Going to ou Present Continuous ?',
    tenses: ['future_will', 'future_going_to', 'present_continuous'],
    intro: "Trois façons de parler du futur, trois nuances.",
    rows: [
      ['Décision prise sur le moment', 'Will', "OK, I'll take the red one."],
      ['Intention déjà décidée', 'Going to', "I'm going to buy a new phone."],
      ['Rendez-vous organisé', 'Present continuous', "I'm seeing the doctor at 3."],
      ['Prédiction (opinion)', 'Will', "I think he'll pass."],
      ['Prédiction (preuve visible)', 'Going to', "She's going to faint!"],
      ['Promesse / offre', 'Will', "I'll help you, I promise."],
      ['Horaire officiel', 'Present simple', 'The plane lands at 9.'],
    ],
  },
  {
    id: 'past_forms',
    title: 'Past Simple, Past Continuous ou Past Perfect ?',
    tenses: ['past_simple', 'past_continuous', 'past_perfect'],
    intro: "Les trois piliers du récit au passé.",
    rows: [
      ['Action principale, ponctuelle', 'Past simple', 'The phone rang.'],
      ['Action de fond, en cours', 'Past continuous', 'I was sleeping when the phone rang.'],
      ['Action antérieure', 'Past perfect', 'He had left when I arrived.'],
      ['Succession chronologique', 'Past simple', 'I arrived, saw him and left.'],
      ['Décor, ambiance', 'Past continuous', 'It was raining and people were rushing home.'],
    ],
  },
  {
    id: 'for_since_ago',
    title: 'For, Since ou Ago ?',
    tenses: ['present_perfect', 'past_simple'],
    intro: "Trois petits mots, trois temps différents.",
    rows: [
      ['FOR + durée (situation qui continue)', 'Present perfect', "I've lived here for 5 years."],
      ['SINCE + point de départ', 'Present perfect', "I've lived here since 2020."],
      ['AGO = il y a (action terminée)', 'Past simple', 'I moved here 5 years ago.'],
      ['FOR + durée (situation terminée)', 'Past simple', 'I lived in Rome for 2 years (then I left).'],
    ],
  },
];
