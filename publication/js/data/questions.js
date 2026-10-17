/* ==========================================================
   BANQUE D'EXERCICES
   ['m', énoncé, [options], indexBonneRéponse, explication]   QCM
   ['f', énoncé avec ___ (verbe), [réponses acceptées], explication]   à compléter
   ['b', consigne FR, phrase EN attendue, [mots pièges], explication]   phrase à construire
   ========================================================== */

(function () {
  const BANK = {
    present_simple: [
      ['f', 'She ___ (work) in a hospital.', ['works'], "3e personne du singulier → -s : she works."],
      ['m', 'Water ___ at 100 °C.', ['boils', 'is boiling', 'boil', 'has boiled'], 0, "Vérité générale → present simple, avec -s (water = it)."],
      ['m', 'Choisis la phrase correcte.', ['Does he likes pizza?', 'Does he like pizza?', 'Do he like pizza?', 'Is he like pizza?'], 1, "Does porte le -s ; le verbe reste à la base : Does he like…?"],
      ['f', 'My parents ___ (not / live) in Paris.', ["don't live", 'do not live'], "Négation au pluriel : don't + base verbale."],
      ['f', 'He ___ (study) English every evening.', ['studies'], "Consonne + y → -ies : study → studies."],
      ['m', 'I ___ to the gym.', ['go always', 'always go', 'am always go', 'always goes'], 1, "L'adverbe de fréquence se place avant le verbe principal."],
      ['m', 'The train ___ at 7:45 tomorrow morning.', ['leaves', 'will leaving', 'is leave', 'leave'], 0, "Horaire officiel → present simple, même pour le futur."],
      ['f', '___ your sister ___ (speak) Spanish? (deux mots, ex : do … like)', ['does speak', 'does … speak', 'does...speak'], "Question à la 3e personne : Does your sister speak…?"],
      ['m', "I'll call you when I ___ home.", ['will get', 'get', 'am getting', 'got'], 1, "Après when (sens futur), on utilise le présent simple, pas will."],
      ['m', 'Choisis la phrase correcte.', ['I am agree with you.', 'I agree with you.', 'I agreeing with you.', 'I do agree to you.'], 1, "Agree est un verbe : I agree (jamais « I am agree »)."],
      ['f', 'She ___ (watch) TV every night.', ['watches'], "Verbe en -ch → -es : watches."],
      ['m', 'How often ___ to the cinema?', ['you go', 'do you go', 'are you going', 'does you go'], 1, "Question au présent simple : do + sujet + base."],
      ['f', 'It ___ (not / rain) much in summer here.', ["doesn't rain", 'does not rain'], "It = 3e personne : doesn't + base verbale."],
      ['b', 'Traduis : « Elle ne mange jamais de viande. »', 'She never eats meat', ['eat', 'is', 'not'], "Never avant le verbe, et -s à la 3e personne."],
      ['b', 'Traduis : « Est-ce que ton frère travaille le samedi ? »', 'Does your brother work on Saturdays', ['works', 'Do', 'is'], "Does + sujet + base verbale (work sans -s)."],
    ],

    present_continuous: [
      ['f', 'Be quiet! The baby ___ (sleep).', ['is sleeping', "'s sleeping"], "Action en cours au moment où l'on parle."],
      ['m', 'Look! It ___ .', ['snows', 'is snowing', 'snowing', 'has snowed'], 1, "« Look! » = action en cours → present continuous."],
      ['m', 'Choisis la phrase correcte.', ["I'm knowing the answer.", 'I know the answer.', 'I am know the answer.', 'I knowing the answer.'], 1, "Know est un verbe d'état : pas de forme en -ing."],
      ['f', 'They ___ (not / work) today, it is a holiday.', ["aren't working", 'are not working', "'re not working"], "Négation : be + not + V-ing."],
      ['f', 'What ___ you ___ (do) right now? (deux mots)', ['are doing', 'are … doing', 'are...doing'], "Question : be + sujet + V-ing."],
      ['m', "I ___ my parents this week because my flat is being painted.", ['stay with', 'am staying with', 'stays with', 'have stay with'], 1, "Situation temporaire (cette semaine) → present continuous."],
      ['m', "We ___ dinner with the Smiths tomorrow evening. It's all arranged.", ['have', 'are having', 'will having', 'had'], 1, "Arrangement organisé pour le futur → present continuous."],
      ['f', 'He ___ (run) in the park at the moment.', ['is running', "'s running"], "Doublement de la consonne : run → running."],
      ['m', 'Your English ___ better and better.', ['gets', 'is getting', 'get', 'has get'], 1, "Évolution en cours → present continuous."],
      ['m', 'Choisis la phrase correcte.', ['She watching TV now.', 'She is watching TV now.', 'She watches TV now.', 'She is watch TV now.'], 1, "Il faut l'auxiliaire be + V-ing."],
      ['m', 'I ___ you are right.', ['am thinking', 'think', 'thinking', 'am think'], 1, "Think = avoir une opinion → verbe d'état, present simple."],
      ['f', 'Why ___ you ___ (cry)? (deux mots)', ['are crying', 'are … crying', 'are...crying'], "Action en cours → Why are you crying?"],
      ['m', 'This week I ___ from home.', ['work', 'am working', 'works', 'have work'], 1, "« This week » = période temporaire → present continuous."],
      ['b', 'Traduis : « Je suis en train d\'écrire un e-mail. »', "I am writing an email", ['write', 'writeing', 'do'], "be + V-ing, et write → writing (le -e disparaît)."],
      ['b', 'Traduis : « Ils ne regardent pas la télé en ce moment. »', "They are not watching TV at the moment", ['watch', 'do', "don't"], "Négation : are not + V-ing."],
    ],

    present_perfect: [
      ['m', 'I ___ him yesterday.', ['have seen', 'saw', 'have saw', 'seen'], 1, "Yesterday = moment passé précis → past simple."],
      ['f', 'I ___ (lose) my keys. I can\'t open the door.', ['have lost', "'ve lost"], "Action passée avec résultat présent → present perfect."],
      ['m', '___ you ever ___ to Japan?', ['Did / go', 'Have / been', 'Have / went', 'Are / been'], 1, "Expérience de vie avec ever → Have you ever been…?"],
      ['m', "We've lived here ___ 2018.", ['for', 'since', 'ago', 'during'], 1, "Since + point de départ (une date)."],
      ['m', "I've known her ___ ten years.", ['since', 'for', 'ago', 'from'], 1, "For + durée."],
      ['f', 'She ___ (not / finish) her homework yet.', ["hasn't finished", 'has not finished'], "Négation avec yet → present perfect : hasn't + PP."],
      ['m', 'Choisis la phrase correcte.', ['I live here since five years.', "I've lived here for five years.", "I've lived here since five years.", 'I am living here for five years.'], 1, "« J'habite ici depuis 5 ans » → present perfect + for."],
      ['f', 'They ___ just ___ (arrive). (deux mots)', ['have arrived', 'have … arrived', 'have...arrived'], "Just se place entre have et le participe : They have just arrived."],
      ['m', "It's the first time I ___ snow.", ['see', 'saw', 'have seen', 'am seeing'], 2, "It's the first time + present perfect."],
      ['m', 'When ___ to London?', ['have you moved', 'did you move', 'have you move', 'you moved'], 1, "Question avec When → past simple."],
      ['f', 'How many cups of coffee ___ you ___ (drink) today? (deux mots)', ['have drunk', 'have … drunk', 'have...drunk'], "Période non terminée (today) → present perfect. Drink → drank → drunk."],
      ['m', 'Where is Tom? — He ___ to the bank. He\'ll be back soon.', ['has been', 'has gone', 'went', 'is gone'], 1, "Gone = parti et pas encore revenu."],
      ['m', "This is the best book I ___ .", ['ever read', 'have ever read', 'had never read', 'read ever'], 1, "Superlatif + present perfect."],
      ['f', 'I ___ already ___ (eat). I\'m not hungry. (deux mots)', ['have eaten', 'have … eaten', 'have...eaten'], "Already entre have et le participe passé."],
      ['m', 'Choisis la phrase correcte.', ['I have finished school in 2015.', 'I finished school in 2015.', 'I have finish school in 2015.', 'I did finished school in 2015.'], 1, "Date passée précise → past simple, même si le français dit « j'ai fini »."],
      ['b', 'Traduis : « Je travaille ici depuis 2019. »', 'I have worked here since 2019', ['work', 'for', 'am'], "« Depuis » + situation en cours → present perfect + since (date)."],
      ['b', 'Traduis : « As-tu déjà mangé des sushis ? »', 'Have you ever eaten sushi', ['Did', 'ate', 'eat'], "Expérience → Have + sujet + ever + participe passé."],
    ],

    present_perfect_continuous: [
      ['f', "I ___ (wait) for you for an hour!", ['have been waiting', "'ve been waiting"], "Durée d'une activité jusqu'à maintenant."],
      ['m', 'How long ___ English?', ['do you learn', 'have you been learning', 'are you learning', 'did you learn'], 1, "How long + activité en cours → present perfect continuous."],
      ['m', "You're out of breath. ___ ?", ['Did you run', 'Have you been running', 'Are you running', 'Do you run'], 1, "Traces visibles d'une activité récente."],
      ['m', 'Choisis la phrase correcte.', ["I've been knowing him for years.", "I've known him for years.", 'I know him for years.', "I'm knowing him for years."], 1, "Know = verbe d'état → present perfect simple."],
      ['m', "I ___ three emails this morning.", ['have been writing', 'have written', 'am writing', 'write'], 1, "Quantité (three emails) → present perfect simple."],
      ['f', 'It ___ (rain) since this morning.', ['has been raining', "'s been raining"], "Since + activité continue → present perfect continuous."],
      ['f', "She's tired because she ___ (work) all day.", ['has been working', "'s been working"], "Activité prolongée qui explique un état présent."],
      ['m', "I ___ for you since 9 o'clock!", ['wait', 'am waiting', 'have been waiting', 'waited'], 2, "« Je t'attends depuis 9 h » → present perfect continuous."],
      ['m', 'Her eyes are red. She ___ .', ['has been crying', 'cries', 'is cry', 'cried yesterday'], 0, "Traces visibles → present perfect continuous."],
      ['f', 'How long ___ you ___ (live) here? (deux mots)', ['have been living', 'have … been living', 'have...been living', 'have lived', 'have … lived'], "How long… → have you been living (ou have you lived)."],
      ['m', "We ___ the house all weekend and it's still not finished.", ['have painted', 'have been painting', 'paint', 'are paint'], 1, "Insistance sur l'activité inachevée → progressif."],
      ['f', 'They ___ (not / sleep) well lately.', ["haven't been sleeping", 'have not been sleeping'], "Négation : haven't been + V-ing."],
      ['b', "Traduis : « J'apprends l'anglais depuis deux ans. »", 'I have been learning English for two years', ['learn', 'since', 'am'], "Durée en cours → have been + V-ing + for."],
      ['b', 'Traduis : « Il pleut depuis ce matin. »', 'It has been raining since this morning', ['rains', 'for', 'is'], "Since + point de départ."],
    ],

    past_simple: [
      ['f', 'I ___ (go) to Rome last summer.', ['went'], "Go est irrégulier : go → went → gone."],
      ['m', 'Choisis la phrase correcte.', ['Did you went there?', 'Did you go there?', 'Have you went there?', 'Do you went there?'], 1, "Après did, le verbe reste à la base verbale."],
      ['f', 'She ___ (not / call) me yesterday.', ["didn't call", 'did not call'], "Négation : didn't + base verbale."],
      ['m', 'We ___ the film two days ago.', ['have seen', 'saw', 'see', 'seen'], 1, "Ago → past simple."],
      ['f', 'They ___ (buy) a new car last month.', ['bought'], "Buy → bought → bought."],
      ['m', 'I arrived ___ .', ['since two hours', 'two hours ago', 'for two hours ago', 'ago two hours'], 1, "« Il y a deux heures » = two hours ago."],
      ['f', 'He ___ (stop) the car and ___ (get) out. (deux verbes séparés par « and »)', ['stopped and got', 'stopped … got'], "Succession d'actions : stopped (doublement du p), got (irrégulier)."],
      ['m', 'Where ___ your holidays last year?', ['did you spend', 'have you spent', 'you spent', 'did you spent'], 0, "Last year → past simple : did + sujet + base."],
      ['m', 'Shakespeare ___ many plays.', ['has written', 'wrote', 'writes', 'was writing'], 1, "Personne décédée → past simple."],
      ['f', 'When I was a child, I ___ (live) in Lyon.', ['lived', 'used to live'], "Situation passée terminée → past simple (ou used to)."],
      ['m', 'They ___ tired after the trip.', ['was', 'were', 'did', 'been'], 1, "They → were."],
      ['f', 'I ___ (think) about you yesterday.', ['thought'], "Think → thought → thought."],
      ['m', 'Who ___ the window?', ['did break', 'broke', 'did broke', 'has broke'], 1, "Question sur le sujet : pas de did → Who broke…?"],
      ['m', 'I ___ smoke, but I stopped five years ago.', ['use to', 'used to', 'was used to', 'am used to'], 1, "Used to + base verbale = habitude passée terminée."],
      ['b', 'Traduis : « Je ne l\'ai pas vu hier. »', "I didn't see him yesterday", ['saw', "haven't", 'seen'], "Hier → past simple ; didn't + base verbale."],
      ['b', 'Traduis : « Quand es-tu arrivé ? »', 'When did you arrive', ['have', 'arrived', 'are'], "When → past simple : did + sujet + base."],
    ],

    past_continuous: [
      ['f', 'I ___ (cook) when the phone rang.', ['was cooking'], "Action longue interrompue → past continuous."],
      ['m', 'While she ___ , she saw an accident.', ['drove', 'was driving', 'has driven', 'drives'], 1, "While + action longue → past continuous."],
      ['m', 'They ___ football when it started to rain.', ['was playing', 'were playing', 'played', 'are playing'], 1, "They → were + V-ing."],
      ['m', 'I was reading when somebody ___ at the door.', ['was knocking', 'knocked', 'knocks', 'has knocked'], 1, "Action courte qui interrompt → past simple."],
      ['f', 'What ___ you ___ (do) at 8 o\'clock last night? (deux mots)', ['were doing', 'were … doing', 'were...doing'], "Action en cours à un moment passé précis."],
      ['m', 'The sun ___ and the birds were singing.', ['shone', 'was shining', 'is shining', 'has shone'], 1, "Description du décor → past continuous."],
      ['f', 'We ___ (not / listen) to the teacher.', ["weren't listening", 'were not listening'], "Négation : weren't + V-ing."],
      ['m', 'Choisis la phrase correcte.', ['I was knowing the answer.', 'I knew the answer.', 'I was know the answer.', 'I knowing the answer.'], 1, "Know = verbe d'état → past simple."],
      ['m', 'At this time yesterday, I ___ on the beach.', ['lay', 'was lying', 'was laying', 'have lain'], 1, "Action en cours à un moment passé ; lie → lying."],
      ['f', 'While I ___ (study), my brother was playing video games.', ['was studying'], "Deux actions simultanées → past continuous."],
      ['m', 'When I arrived, she ___ . I saw her put her coat on.', ['left', 'was leaving', 'had left', 'leaves'], 1, "Elle était en train de partir (action en cours)."],
      ['m', 'He ___ up, had a shower and left.', ['was getting', 'got', 'gets', 'had got'], 1, "Succession d'actions → past simple."],
      ['b', "Traduis : « Je dormais quand tu as appelé. »", 'I was sleeping when you called', ['slept', 'were', 'calling'], "Action longue (was sleeping) + action courte (called)."],
      ['b', 'Traduis : « Que faisais-tu hier soir à 21 h ? »', 'What were you doing at 9 pm last night', ['did', 'was', 'do'], "Were + sujet + V-ing."],
    ],

    past_perfect: [
      ['f', 'When we arrived, the film ___ (already / start).', ['had already started'], "Action antérieure à une autre action passée."],
      ['m', 'She told me she ___ her job.', ['lost', 'had lost', 'has lost', 'was losing'], 1, "Discours indirect : recul au past perfect."],
      ['m', 'If I ___ , I would have come.', ['knew', 'would have known', 'had known', 'have known'], 2, "3e conditionnel : if + past perfect."],
      ['m', 'I ___ the sea before I was 15.', ['never saw', 'had never seen', 'have never seen', "didn't saw"], 1, "Expérience avant un moment passé."],
      ['f', 'By the time he called, I ___ (go) to bed.', ['had gone', "'d gone"], "By the time + past simple, past perfect."],
      ['m', 'Choisis la phrase correcte.', ['If I would have known, I would have helped.', 'If I had known, I would have helped.', 'If I knew, I would have helped.', 'If I had knew, I would help.'], 1, "Jamais de would dans la proposition en if."],
      ['f', 'They ___ (not / eat) anything, so they were starving.', ["hadn't eaten", 'had not eaten'], "Négation : hadn't + PP."],
      ['m', 'It was the first time I ___ a plane.', ['took', 'had taken', 'have taken', 'was taking'], 1, "It was the first time + past perfect."],
      ['m', 'I wish I ___ harder at school.', ['studied', 'had studied', 'have studied', 'would study'], 1, "Regret sur le passé : wish + past perfect."],
      ['f', '___ you ever ___ (meet) him before that party? (deux mots)', ['had met', 'had … met', 'had...met'], "Question au past perfect : Had + sujet + PP."],
      ['m', 'When I got to the station, the train ___ . I had to wait for the next one.', ['left', 'had left', 'was leaving', 'has left'], 1, "Le train était déjà parti avant mon arrivée."],
      ['m', 'After she ___ her work, she went home.', ['had finished', 'has finished', 'was finishing', 'finishes'], 0, "Action antérieure (past perfect accepté, past simple possible avec after)."],
      ['b', "Traduis : « Il avait déjà mangé quand je suis arrivé. »", 'He had already eaten when I arrived', ['has', 'ate', 'arrive'], "Had + already + PP ; arrived au past simple."],
      ['b', "Traduis : « Si j'avais su, je serais venu. »", 'If I had known I would have come', ['would', 'knew', 'came'], "If + past perfect, would have + PP."],
    ],

    past_perfect_continuous: [
      ['f', 'I ___ (wait) for two hours when he finally arrived.', ['had been waiting'], "Durée jusqu'à un moment passé."],
      ['m', 'He was tired because he ___ all day.', ['has been working', 'had been working', 'was worked', 'works'], 1, "Activité prolongée qui explique un état passé."],
      ['m', 'The ground was wet. It ___ .', ['had been raining', 'has been raining', 'rains', 'is raining'], 0, "Traces d'une activité antérieure au passé."],
      ['m', 'Choisis la phrase correcte.', ['I had been knowing him for years.', 'I had known him for years.', 'I have been knowing him for years.', 'I knew him since years.'], 1, "Know = verbe d'état → past perfect simple."],
      ['f', 'How long ___ they ___ (live) there before they moved? (deux mots)', ['had been living', 'had … been living', 'had...been living', 'had lived'], "Durée avant un moment passé."],
      ['m', 'She ___ there for ten years when she was promoted.', ['worked', 'had been working', 'has been working', 'is working'], 1, "« Elle travaillait là depuis dix ans quand… »"],
      ['f', 'We ___ (drive) for hours, so we stopped for a coffee.', ['had been driving'], "Durée d'une activité jusqu'à un moment passé."],
      ['m', 'Her eyes were red because she ___ .', ['has been crying', 'had been crying', 'cries', 'is crying'], 1, "Cause d'une situation passée."],
      ['f', 'He ___ (not / sleep) well, so he looked exhausted.', ["hadn't been sleeping", 'had not been sleeping'], "Négation : hadn't been + V-ing."],
      ['m', 'By the time the bus came, we ___ for 40 minutes.', ['waited', 'had been waiting', 'were waiting', 'have waited'], 1, "Durée (for 40 minutes) jusqu'à un moment passé."],
      ['m', 'She said she ___ all morning.', ['has been studying', 'had been studying', 'studies', 'is studying'], 1, "Discours indirect de « I've been studying »."],
      ['b', "Traduis : « J'attendais depuis une heure quand elle est arrivée. »", 'I had been waiting for an hour when she arrived', ['was', 'since', 'has'], "Had been + V-ing + for."],
    ],

    future_will: [
      ['m', "The phone's ringing. — I ___ it!", ['am getting', "'ll get", 'get', 'am going to get'], 1, "Décision spontanée → will."],
      ['m', "I'll call you when I ___ .", ['will arrive', 'arrive', 'am arriving', 'arrived'], 1, "Après when (futur), présent simple."],
      ['m', 'Choisis la phrase correcte.', ['I will to send it tomorrow.', 'I will send it tomorrow.', 'I will sending it tomorrow.', 'I will sends it tomorrow.'], 1, "Will + base verbale, sans to."],
      ['f', 'I think it ___ (rain) tomorrow.', ['will rain', "'ll rain"], "Prédiction basée sur une opinion (I think)."],
      ['f', 'She ___ (not / come) to the party, she is ill.', ["won't come", 'will not come'], "Négation : won't + base verbale."],
      ['m', '___ I open the window?', ['Will', 'Shall', 'Do', 'Am'], 1, "Proposition avec I / we → Shall."],
      ['m', "If it ___ tomorrow, we'll stay at home.", ['will rain', 'rains', 'rain', 'is raining'], 1, "Proposition en if → présent simple."],
      ['f', "Don't worry, I ___ (help) you. I promise.", ['will help', "'ll help"], "Promesse → will."],
      ['m', "I'm sure she ___ the exam.", ['passes', 'will pass', 'is passing', 'pass'], 1, "Prédiction avec I'm sure → will."],
      ['m', 'As soon as he ___ , we will start the meeting.', ['arrives', 'will arrive', 'arrive', 'is arrive'], 0, "As soon as + présent simple."],
      ['f', '___ you ___ (marry) me? (deux mots)', ['will marry', 'will … marry', 'will...marry'], "Question : Will + sujet + base verbale."],
      ['m', 'The car ___ start. I think the battery is dead.', ["won't", "doesn't will", "willn't", 'not will'], 0, "Refus (même pour un objet) → won't."],
      ['b', "Traduis : « Je t'appellerai quand j'arriverai. »", "I will call you when I arrive", ['will', 'arriving', 'to'], "Présent simple après when : « when I arrive »."],
      ['b', "Traduis : « Je pense qu'il gagnera. »", 'I think he will win', ['wins', 'going', 'to'], "Opinion → will + base verbale."],
    ],

    future_going_to: [
      ['m', "Look at those black clouds! It ___ .", ['will rain', 'is going to rain', 'rains', 'is raining'], 1, "Prédiction basée sur une preuve visible → going to."],
      ['f', "I ___ (study) medicine next year. I've already decided.", ['am going to study', "'m going to study"], "Intention déjà décidée → be going to."],
      ['m', 'Choisis la phrase correcte.', ['I going to call him.', "I'm going to call him.", "I'm going to calling him.", 'I go to call him.'], 1, "Be + going to + base verbale."],
      ['m', "— There's no milk. — Oh, I ___ some!", ['am going to buy', "'ll buy", 'buy', 'bought'], 1, "Décision spontanée → will, pas going to."],
      ['f', 'They ___ (not / buy) that house. It\'s too expensive.', ["aren't going to buy", 'are not going to buy', "'re not going to buy"], "Négation : be + not + going to."],
      ['f', '___ you ___ (tell) her the truth? (mots : are … going to tell)', ['are going to tell', 'are … going to tell', 'are...going to tell'], "Question : Be + sujet + going to + base."],
      ['m', "Watch out! You ___ !", ['will fall', 'are going to fall', 'fall', 'are falling down to'], 1, "Danger imminent visible → going to."],
      ['m', 'She has bought paint. She ___ her room.', ['will paint', 'is going to paint', 'paints', 'painted'], 1, "Intention démontrée par des préparatifs → going to."],
      ['m', 'I ___ call you, but I forgot. Sorry!', ['am going to', 'was going to', 'will', 'went to'], 1, "Intention passée non réalisée → was going to."],
      ['f', 'We ___ (visit) our grandparents this weekend. We planned it last month.', ['are going to visit', "'re going to visit", 'are visiting', "'re visiting"], "Projet décidé → going to (ou present continuous)."],
      ['m', 'He is going to ___ to London next month.', ['go', 'going', 'goes', 'went'], 0, "Going to + base verbale : « going to go » est correct."],
      ['b', 'Traduis : « Il va pleuvoir. » (on voit des nuages)', 'It is going to rain', ['will', 'raining', 'goes'], "Preuve visible → be going to."],
      ['b', "Traduis : « Nous allons acheter une nouvelle voiture. »", 'We are going to buy a new car', ['will', 'buying', 'go'], "Intention → be going to + base verbale."],
    ],

    future_continuous: [
      ['f', 'This time tomorrow I ___ (fly) to New York.', ['will be flying', "'ll be flying"], "Action en cours à un moment futur."],
      ['m', "Don't call me at 8, I ___ dinner.", ['will have', 'will be having', 'have', 'am have'], 1, "Je serai en train de dîner → future continuous."],
      ['m', 'Choisis la phrase correcte.', ['I will working tomorrow.', 'I will be working tomorrow.', 'I will be work tomorrow.', 'I be working tomorrow.'], 1, "Will + be + V-ing."],
      ['m', '___ the car tonight? I\'d like to borrow it.', ['Will you be using', 'Are you use', 'Do you use', 'Will you using'], 0, "Question polie sur les projets → future continuous."],
      ['f', 'At 10 tomorrow I ___ (take) my exam, so I can\'t meet you.', ['will be taking', "'ll be taking"], "Action en cours à 10 h demain."],
      ['f', 'They ___ (not / work) on Monday. It\'s a bank holiday.', ["won't be working", 'will not be working'], "Négation : won't be + V-ing."],
      ['m', 'When you arrive, I ___ in the garden, so come round the back.', ['will work', 'will be working', 'work', 'worked'], 1, "Je serai en train de travailler → future continuous."],
      ['m', 'Choisis la phrase correcte.', ['I will be knowing the results tomorrow.', 'I will know the results tomorrow.', 'I will knowing the results tomorrow.', 'I knowing the results tomorrow.'], 1, "Know = verbe d'état → futur simple."],
      ['m', 'This time next week, we ___ on a beach in Greece.', ['will lie', 'will be lying', 'lie', 'are lain'], 1, "Action en cours à un moment futur."],
      ['f', 'What ___ you ___ (do) at 6 pm tomorrow? (deux mots : will … be doing)', ['will be doing', 'will … be doing', 'will...be doing'], "Question : Will + sujet + be + V-ing."],
      ['b', 'Traduis : « Demain à midi, je serai en train de travailler. »', 'Tomorrow at noon I will be working', ['work', 'am', 'have'], "Will be + V-ing."],
      ['b', 'Traduis : « Est-ce que tu viendras à la fête ? » (question polie)', 'Will you be coming to the party', ['come', 'are', 'do'], "Question polie → Will + sujet + be + V-ing."],
    ],

    future_perfect: [
      ['f', 'I ___ (finish) the report by Friday.', ['will have finished', "'ll have finished"], "Action terminée avant un moment futur (by Friday)."],
      ['m', 'By the time you arrive, I ___ dinner.', ['will cook', 'will have cooked', 'cook', 'have cooked'], 1, "Le dîner sera prêt avant ton arrivée."],
      ['m', 'By the time you ___ , I will have left.', ['will arrive', 'arrive', 'will have arrived', 'arrived'], 1, "By the time + présent simple."],
      ['m', 'Choisis la phrase correcte.', ['She will has finished by noon.', 'She will have finished by noon.', 'She will have finish by noon.', 'She will finished by noon.'], 1, "Will + have (invariable) + participe passé."],
      ['m', 'I will have finished ___ Monday.', ['until', 'by', 'since', 'for'], 1, "By = au plus tard à (date limite)."],
      ['f', 'They ___ (not / arrive) by 6, the traffic is terrible.', ["won't have arrived", 'will not have arrived'], "Négation : won't have + PP."],
      ['f', 'By 2030, I ___ (pay) off my loan.', ['will have paid', "'ll have paid"], "Pay → paid → paid."],
      ['m', 'By the end of the day, she ___ 20 pages.', ['will write', 'will have written', 'writes', 'is writing'], 1, "Bilan à un moment futur."],
      ['f', '___ you ___ (finish) by noon? (deux mots : will … have finished)', ['will have finished', 'will … have finished', 'will...have finished'], "Question : Will + sujet + have + PP."],
      ['m', 'Next month, we ___ married for ten years.', ['will be', 'will have been', 'are', 'have been'], 1, "Bilan à un moment futur, avec be (verbe d'état)."],
      ['b', "Traduis : « J'aurai fini d'ici demain. »", 'I will have finished by tomorrow', ['until', 'finish', 'has'], "Will have + PP + by."],
      ['b', "Traduis : « Quand tu arriveras, nous serons partis. »", 'When you arrive we will have left', ['will', 'leave', 'arriving'], "Présent après when, future perfect dans la principale."],
    ],

    future_perfect_continuous: [
      ['f', 'In June, I ___ (work) here for 10 years.', ['will have been working', "'ll have been working"], "Durée d'une activité jusqu'à un moment futur."],
      ['m', 'By next year, she ___ English for five years.', ['will learn', 'will have been learning', 'learns', 'has been learning'], 1, "Durée jusqu'à un moment futur."],
      ['m', 'Choisis la phrase correcte.', ['I will have working here for 10 years.', 'I will have been working here for 10 years.', 'I will been working here for 10 years.', 'I have will been working here for 10 years.'], 1, "Will + have + been + V-ing."],
      ['m', "At 6, we ___ for ten hours. We'll be exhausted.", ['will drive', 'will have been driving', 'drive', 'have driven'], 1, "Durée d'une activité jusqu'à 18 h."],
      ['m', 'By May, I ___ her for a year.', ['will have been knowing', 'will have known', 'know', 'am knowing'], 1, "Know = verbe d'état → future perfect simple."],
      ['f', 'How long ___ you ___ (live) here by the end of the year? (deux mots)', ['will have been living', 'will … have been living', 'will...have been living'], "Question : Will + sujet + have been + V-ing."],
      ['f', "He'll be tired: he ___ (study) all night.", ['will have been studying', "'ll have been studying"], "Cause d'un état futur."],
      ['m', 'By the time she retires, she ___ for 40 years.', ['will teach', 'will have been teaching', 'teaches', 'taught'], 1, "Durée jusqu'à un moment futur."],
      ['f', 'They ___ (not / wait) long when we arrive.', ["won't have been waiting", 'will not have been waiting'], "Négation : won't have been + V-ing."],
      ['m', 'Next month, I ___ this course for a year.', ['will have been taking', 'will take', 'take', 'am taking'], 0, "« Cela fera un an que je suis ce cours. »"],
      ['b', "Traduis : « En juin, cela fera trois ans que je vis ici. »", 'In June I will have been living here for three years', ['since', 'am', 'live'], "Will have been + V-ing + for."],
    ],
  };

  /* --------------------------------------------------------
     TRADUCTIONS FR → EN (saisie libre)
     [phrase FR, [traductions acceptées], [formes verbales clés], explication, [formes interdites]]
     Formes clés : mots qui doivent apparaître DANS CET ORDRE (le sujet peut s'intercaler).
     Si la phrase diffère du modèle mais contient la forme clé → le temps est juste.
     -------------------------------------------------------- */
  const TRANS = {
    present_simple: [
      ['Elle travaille dans une banque.', ['She works in a bank', 'She works at a bank'], ['works'], "Vérité permanente → present simple, avec -s à la 3e personne."],
      ['Nous ne regardons jamais la télévision le matin.', ['We never watch TV in the morning', 'We never watch television in the morning'], ['never watch'], "Habitude → present simple. Never se place avant le verbe."],
      ['Est-ce que ton père parle anglais ?', ['Does your father speak English', 'Does your dad speak English'], ['does speak'], "Question au present simple : Does + sujet + base verbale (speak, sans -s)."],
      ['Le train part à 8 heures demain.', ['The train leaves at 8 tomorrow', 'The train leaves tomorrow at 8', 'The train leaves at 8 am tomorrow'], ['train leaves'], "Horaire officiel → present simple, même pour un futur."],
      ['Il ne boit pas de café.', ["He doesn't drink coffee"], ['does not drink'], "Négation à la 3e personne : doesn't + base verbale."],
    ],
    present_continuous: [
      ['Regarde ! Il pleut.', ["Look! It's raining", 'Look, it is raining'], ['is raining'], "Action en cours au moment où l'on parle → present continuous."],
      ['Je suis en train de lire un livre passionnant.', ["I'm reading an exciting book", 'I am reading a fascinating book', "I'm reading a gripping book", "I'm reading a great book"], ['am reading'], "« Être en train de » → be + V-ing."],
      ['Cette semaine, elle travaille depuis chez elle.', ['This week she is working from home', 'She is working from home this week'], ['is working'], "Situation temporaire (cette semaine) → present continuous."],
      ['Que fais-tu en ce moment ?', ['What are you doing at the moment', 'What are you doing right now', 'What are you doing now'], ['are doing'], "Action en cours → What are you doing…?"],
      ['Je vois Paul demain soir (c\'est organisé).', ["I'm seeing Paul tomorrow evening", "I'm meeting Paul tomorrow evening", "I'm seeing Paul tomorrow night", "I'm meeting Paul tomorrow night"], ['am seeing', 'am meeting'], "Rendez-vous organisé → present continuous à valeur de futur."],
    ],
    present_perfect: [
      ["J'habite ici depuis 2015.", ['I have lived here since 2015', "I've been living here since 2015"], ['have lived since', 'have been living since'], "« Depuis » + situation qui continue → present perfect (jamais le présent simple), et since + date."],
      ['Je le connais depuis dix ans.', ['I have known him for ten years', "I've known him for 10 years"], ['have known for'], "Know est un verbe d'état : present perfect simple + for + durée."],
      ['As-tu déjà été à Londres ?', ['Have you ever been to London'], ['have ever been'], "Expérience de vie → Have you ever been…?"],
      ["Elle n'a pas encore fini.", ["She hasn't finished yet", "She hasn't finished it yet"], ['has not finished'], "Not… yet → present perfect : hasn't + participe passé."],
      ['Je viens de voir ta sœur.', ["I've just seen your sister", 'I have just seen your sister'], ['have just seen'], "« Venir de » → have just + participe passé."],
      ["C'est le meilleur film que j'aie jamais vu.", ["It's the best film I've ever seen", 'It is the best movie I have ever seen', 'This is the best film I have ever seen', "That's the best film I've ever seen"], ['have ever seen'], "Superlatif + present perfect + ever."],
    ],
    present_perfect_continuous: [
      ["J'attends depuis une heure.", ["I've been waiting for an hour", 'I have been waiting for one hour'], ['have been waiting for'], "Activité qui dure jusqu'à maintenant → have been + V-ing + for."],
      ['Il pleut depuis ce matin.', ['It has been raining since this morning', "It's been raining since this morning"], ['has been raining since'], "Durée d'une activité jusqu'à maintenant + since (point de départ)."],
      ["Depuis combien de temps apprends-tu l'anglais ?", ['How long have you been learning English', 'How long have you been studying English'], ['how long have been learning', 'how long have been studying'], "« Depuis combien de temps » → How long have you been + V-ing ?"],
      ['Tu es essoufflé. Tu as couru ?', ["You're out of breath. Have you been running", 'You are out of breath, have you been running'], ['have been running'], "Activité récente qui laisse des traces visibles → present perfect continuous."],
      ['Ça fait trois heures que je travaille sur ce projet.', ["I've been working on this project for three hours", 'I have been working on this project for 3 hours'], ['have been working for'], "« Ça fait … que » = durée jusqu'à maintenant → have been + V-ing + for."],
    ],
    past_simple: [
      ["Je l'ai vu hier.", ['I saw him yesterday', 'I saw it yesterday', 'I saw her yesterday'], ['saw yesterday'], "Yesterday = moment passé précis → past simple (jamais « I have seen him yesterday »)."],
      ["Nous sommes allés à Rome l'été dernier.", ['We went to Rome last summer'], ['went'], "Last summer → past simple. Go → went.", ['have went', 'have gone']],
      ["Elle ne m'a pas appelé hier soir.", ["She didn't call me last night", "She didn't phone me last night", "She didn't ring me last night", "She didn't call me yesterday evening"], ['did not call', 'did not phone', 'did not ring'], "Négation au past simple : didn't + base verbale."],
      ['Quand es-tu arrivé ?', ['When did you arrive', 'When did you get here'], ['when did arrive', 'when did get'], "Question avec When → past simple : did + sujet + base verbale."],
      ["J'ai acheté une voiture il y a deux ans.", ['I bought a car two years ago', 'Two years ago I bought a car'], ['bought'], "« Il y a » = ago → past simple. Buy → bought.", ['have bought']],
      ["Quand j'étais enfant, j'habitais à Lyon.", ['When I was a child I lived in Lyon', 'When I was a child I used to live in Lyon', 'When I was a kid I lived in Lyon'], ['was lived', 'was used to live'], "Situation passée terminée → past simple (ou used to), pas le past continuous."],
    ],
    past_continuous: [
      ['Je cuisinais quand le téléphone a sonné.', ['I was cooking when the phone rang'], ['was cooking rang'], "Action longue (was cooking) interrompue par une action courte (rang)."],
      ['Que faisais-tu hier à 20 heures ?', ['What were you doing at 8 pm yesterday', 'What were you doing yesterday at 8 pm', 'What were you doing at 8 yesterday evening'], ['were doing'], "Action en cours à un moment passé précis → past continuous."],
      ["Pendant qu'elle conduisait, elle a vu un accident.", ['While she was driving she saw an accident', 'She saw an accident while she was driving'], ['was driving saw', 'saw was driving'], "While + past continuous (action longue), past simple pour l'action courte."],
      ['Il pleuvait et les enfants jouaient dehors.', ['It was raining and the children were playing outside', 'It was raining and the kids were playing outside'], ['was raining were playing'], "Description du décor → past continuous."],
    ],
    past_perfect: [
      ['Quand nous sommes arrivés, le film avait commencé.', ['When we arrived the film had started', 'When we arrived the movie had already started', 'When we got there the film had started', 'When we arrived the film had begun'], ['had started', 'had begun'], "Action antérieure à une autre action passée → had + participe passé."],
      ["Elle m'a dit qu'elle avait perdu son travail.", ['She told me she had lost her job', 'She told me that she had lost her job', 'She said she had lost her job'], ['had lost'], "Plus-que-parfait / discours indirect → past perfect."],
      ["Je n'avais jamais vu la mer avant.", ['I had never seen the sea before'], ['had never seen'], "Expérience antérieure à un moment passé → had never + participe passé."],
      ["Si j'avais su, je serais venu.", ['If I had known I would have come'], ['if had known would have come'], "3e conditionnel : If + past perfect, would have + participe passé."],
      ['Il était déjà parti quand je suis arrivé.', ['He had already left when I arrived', 'He had already gone when I arrived', 'He had already left when I got there'], ['had left', 'had gone'], "Il était parti AVANT mon arrivée → past perfect + past simple."],
    ],
    past_perfect_continuous: [
      ["J'attendais depuis deux heures quand il est enfin arrivé.", ['I had been waiting for two hours when he finally arrived', 'I had been waiting for 2 hours when he finally arrived'], ['had been waiting for'], "« Depuis » + imparfait = durée jusqu'à un moment passé → had been + V-ing."],
      ['Elle travaillait là depuis dix ans quand elle a été promue.', ['She had been working there for ten years when she was promoted', 'She had been working there for 10 years when she got promoted'], ['had been working for'], "Durée jusqu'à un moment passé → past perfect continuous."],
      ["Il était fatigué parce qu'il avait couru.", ['He was tired because he had been running'], ['had been running'], "Activité prolongée qui explique un état passé."],
      ['Le sol était mouillé : il avait plu.', ['The ground was wet, it had been raining', 'The ground was wet because it had been raining'], ['had been raining'], "Traces d'une activité antérieure dans le passé → had been + V-ing."],
    ],
    future_will: [
      ["Je t'appellerai quand j'arriverai.", ["I'll call you when I arrive", 'I will call you when I get there', 'I will phone you when I arrive'], ['will call when arrive', 'will phone when arrive', 'will call when get', 'when arrive will call', 'when arrive will phone', 'when get will call'], "Futur dans la principale, mais PRÉSENT après when : « when I arrive », jamais « when I will arrive ».", ['when will arrive', 'when will get']],
      ["Je pense qu'il gagnera.", ['I think he will win', "I think he'll win"], ['will win'], "Prédiction basée sur une opinion (I think) → will."],
      ["Je t'aiderai, c'est promis.", ["I'll help you, I promise", 'I promise I will help you', 'I will help you, I promise'], ['will help'], "Promesse → will + base verbale."],
      ["S'il pleut demain, nous resterons à la maison.", ['If it rains tomorrow we will stay at home', "If it rains tomorrow we'll stay home", 'We will stay at home if it rains tomorrow'], ['rains will stay', 'will stay rains'], "Présent après if (it rains), will dans la principale.", ['if will rain']],
      ["« Il n'y a plus de lait. — D'accord, je vais en acheter ! » (décision prise sur le moment)", ["There's no milk. OK, I'll buy some", 'There is no more milk. OK, I will buy some', "There's no milk left. OK, I'll get some"], ['will buy', 'will get'], "Décision spontanée → will (et non going to)."],
    ],
    future_going_to: [
      ['Regarde ces nuages ! Il va pleuvoir.', ["Look at those clouds! It's going to rain", 'Look at these clouds, it is going to rain'], ['is going to rain'], "Prédiction basée sur une preuve visible → be going to."],
      ["J'ai décidé : je vais apprendre l'espagnol l'année prochaine.", ["I've decided: I'm going to learn Spanish next year", "I have decided I'm going to study Spanish next year"], ['am going to learn', 'am going to study'], "Intention déjà décidée → be going to."],
      ['Ils ne vont pas acheter cette maison.', ["They aren't going to buy that house", 'They are not going to buy this house', "They're not going to buy that house"], ['are not going to buy'], "Négation : be + not + going to + base verbale."],
      ['Attention ! Tu vas tomber !', ["Watch out! You're going to fall", 'Be careful! You are going to fall', "Careful! You're going to fall"], ['are going to fall'], "Danger imminent visible → going to."],
    ],
    future_continuous: [
      ['Demain à 10 heures, je serai en train de passer mon examen.', ["Tomorrow at 10 I'll be taking my exam", 'At 10 tomorrow I will be taking my exam', 'At 10 am tomorrow I will be sitting my exam'], ['will be taking', 'will be sitting', 'will be doing'], "« Je serai en train de » → will be + V-ing."],
      ["N'appelle pas à 20 heures, nous serons en train de dîner.", ["Don't call at 8, we'll be having dinner", "Don't call at 8 pm, we will be having dinner", "Don't phone at 8, we will be eating dinner"], ['will be having', 'will be eating'], "Action en cours à un moment futur → future continuous."],
      ['Est-ce que tu utiliseras la voiture ce soir ? (question polie)', ['Will you be using the car tonight', 'Will you be using the car this evening'], ['will be using'], "Question polie sur les projets → Will you be + V-ing ?"],
      ['Samedi prochain à midi, nous serons en train de nous détendre sur la plage.', ['Next Saturday at noon we will be relaxing on the beach', "At noon next Saturday we'll be relaxing on the beach"], ['will be relaxing', 'will be lying'], "Action en cours à un moment futur précis."],
    ],
    future_perfect: [
      ["J'aurai fini le rapport d'ici vendredi.", ['I will have finished the report by Friday', "I'll have finished the report by Friday", 'I will have completed the report by Friday'], ['will have finished by', 'will have completed by'], "Action terminée avant un moment futur → will have + participe passé + by."],
      ['Quand tu arriveras, nous serons partis.', ['When you arrive we will have left', "When you arrive we'll have gone", 'By the time you arrive we will have left'], ['arrive will have left', 'arrive will have gone', 'will have left arrive', 'will have gone arrive'], "Présent après when / by the time, future perfect dans la principale.", ['when will arrive', 'time will arrive']],
      ["D'ici 2030, elle aura remboursé son prêt.", ['By 2030 she will have paid off her loan', "By 2030 she'll have repaid her loan", 'She will have paid back her loan by 2030'], ['will have paid', 'will have repaid'], "By + date future → future perfect."],
      ['Ils ne seront pas arrivés avant 18 heures.', ["They won't have arrived by 6 pm", 'They will not have arrived by 6', "They won't have arrived before 6 pm"], ['will not have arrived'], "Négation : won't have + participe passé."],
    ],
    future_perfect_continuous: [
      ['En juin, cela fera dix ans que je travaille ici.', ['In June I will have been working here for ten years', "By June I'll have been working here for 10 years"], ['will have been working for'], "« Cela fera … que » au futur → will have been + V-ing + for."],
      ["L'année prochaine, cela fera cinq ans que j'apprends l'anglais.", ['Next year I will have been learning English for five years', "By next year I'll have been learning English for 5 years", 'Next year I will have been studying English for five years'], ['will have been learning for', 'will have been studying for'], "Durée d'une activité jusqu'à un moment futur."],
      ['À 18 heures, cela fera dix heures que nous roulons.', ['At 6 pm we will have been driving for ten hours', "At 6 we'll have been driving for 10 hours", 'By 6 pm we will have been driving for ten hours'], ['will have been driving for'], "Durée jusqu'à un moment futur → will have been + V-ing."],
      ['Il sera épuisé : il aura étudié toute la nuit.', ['He will be exhausted, he will have been studying all night', "He'll be exhausted: he'll have been studying all night"], ['will have been studying', 'will have been working'], "Activité prolongée qui expliquera un état futur."],
    ],
  };

  const out = [];
  Object.entries(TRANS).forEach(([tense, list]) => {
    list.forEach((it, i) => out.push({ id: `${tense}#t${i}`, t: tense, k: 'trans', q: it[0], a: it[1], key: it[2], ex: it[3], no: it[4] || [] }));
  });
  Object.entries(BANK).forEach(([tense, list]) => {
    list.forEach((it, i) => {
      const id = `${tense}#${i}`;
      if (it[0] === 'm') out.push({ id, t: tense, k: 'mcq', q: it[1], o: it[2], a: it[3], ex: it[4] });
      else if (it[0] === 'f') out.push({ id, t: tense, k: 'fill', q: it[1], a: it[2], ex: it[3] });
      else if (it[0] === 'b') out.push({ id, t: tense, k: 'build', q: it[1], a: it[2], d: it[3], ex: it[4] });
    });
  });
  // Supplément (questions-extra.js) : identifiants distincts pour garder l'historique stable
  Object.entries(window.EXTRA_TRANS || {}).forEach(([tense, list]) => {
    list.forEach((it, i) => out.push({ id: `${tense}#xt${i}`, t: tense, k: 'trans', q: it[0], a: it[1], key: it[2], ex: it[3], no: it[4] || [] }));
  });
  Object.entries(window.EXTRA_BANK || {}).forEach(([tense, list]) => {
    list.forEach((it, i) => {
      const id = `${tense}#x${i}`;
      if (it[0] === 'm') out.push({ id, t: tense, k: 'mcq', q: it[1], o: it[2], a: it[3], ex: it[4] });
      else if (it[0] === 'f') out.push({ id, t: tense, k: 'fill', q: it[1], a: it[2], ex: it[3] });
      else if (it[0] === 'b') out.push({ id, t: tense, k: 'build', q: it[1], a: it[2], d: it[3], ex: it[4] });
    });
  });
  // Supplément de traductions (translations-extra.js)
  const DEF = window.EXTRA_TRANS_DEFAULT_EX || {};
  Object.entries(window.EXTRA_TRANS2 || {}).forEach(([tense, list]) => {
    list.forEach((it, i) => out.push({ id: `${tense}#yt${i}`, t: tense, k: 'trans', q: it[0], a: it[1], key: it[2], ex: it[3] || DEF[tense] || '', no: it[4] || [] }));
  });
  window.QUESTIONS = out;
})();
