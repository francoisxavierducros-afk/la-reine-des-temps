/* ==========================================================
   VERBES — supplément du dictionnaire
   1) Verbes irréguliers supplémentaires (ajoutés à IRREGULAR_VERBS)
   2) Verbes réguliers : "base:traduction"  (* = consonne finale doublée : stop* → stopped, stopping)
   3) window.VERBS : liste unifiée { b, p, pp, ing, s, fr, irr } avec formes calculées
   ========================================================== */

(function () {
  const MORE_IRREGULAR = [
    ['babysit', 'babysat', 'babysat', 'faire du baby-sitting'],
    ['bid', 'bid', 'bid', 'faire une offre, enchérir'],
    ['bind', 'bound', 'bound', 'lier, relier'],
    ['breed', 'bred', 'bred', 'élever (animaux)'],
    ['broadcast', 'broadcast', 'broadcast', 'diffuser, retransmettre'],
    ['burst', 'burst', 'burst', 'éclater'],
    ['cast', 'cast', 'cast', 'jeter ; distribuer les rôles'],
    ['cling', 'clung', 'clung', "s'accrocher"],
    ['creep', 'crept', 'crept', 'ramper, se glisser'],
    ['dwell', 'dwelt / dwelled', 'dwelt / dwelled', 'demeurer ; s\'attarder sur'],
    ['flee', 'fled', 'fled', "s'enfuir"],
    ['fling', 'flung', 'flung', 'lancer violemment'],
    ['forecast', 'forecast', 'forecast', 'prévoir (météo)'],
    ['foresee', 'foresaw', 'foreseen', 'prévoir, anticiper'],
    ['grind', 'ground', 'ground', 'moudre'],
    ['kneel', 'knelt / kneeled', 'knelt / kneeled', "s'agenouiller"],
    ['knit', 'knit / knitted', 'knit / knitted', 'tricoter'],
    ['lean', 'leant / leaned', 'leant / leaned', "se pencher, s'appuyer"],
    ['leap', 'leapt / leaped', 'leapt / leaped', 'bondir'],
    ['mislead', 'misled', 'misled', 'induire en erreur'],
    ['mistake', 'mistook', 'mistaken', 'confondre, se tromper'],
    ['misunderstand', 'misunderstood', 'misunderstood', 'mal comprendre'],
    ['mow', 'mowed', 'mown / mowed', 'tondre'],
    ['outdo', 'outdid', 'outdone', 'surpasser'],
    ['outgrow', 'outgrew', 'outgrown', 'devenir trop grand pour'],
    ['outrun', 'outran', 'outrun', 'courir plus vite que'],
    ['overcome', 'overcame', 'overcome', 'surmonter'],
    ['overdo', 'overdid', 'overdone', 'exagérer'],
    ['overeat', 'overate', 'overeaten', 'trop manger'],
    ['overhear', 'overheard', 'overheard', 'entendre par hasard'],
    ['override', 'overrode', 'overridden', "passer outre, l'emporter sur"],
    ['oversee', 'oversaw', 'overseen', 'superviser'],
    ['oversleep', 'overslept', 'overslept', 'ne pas se réveiller à temps'],
    ['overtake', 'overtook', 'overtaken', 'dépasser, doubler'],
    ['overthrow', 'overthrew', 'overthrown', 'renverser (un régime)'],
    ['prove', 'proved', 'proven / proved', 'prouver'],
    ['rebuild', 'rebuilt', 'rebuilt', 'reconstruire'],
    ['redo', 'redid', 'redone', 'refaire'],
    ['repay', 'repaid', 'repaid', 'rembourser'],
    ['rethink', 'rethought', 'rethought', 'repenser'],
    ['rewrite', 'rewrote', 'rewritten', 'réécrire'],
    ['rid', 'rid', 'rid', 'débarrasser'],
    ['saw', 'sawed', 'sawn / sawed', 'scier'],
    ['sew', 'sewed', 'sewn / sewed', 'coudre'],
    ['shed', 'shed', 'shed', 'perdre (feuilles, poils), verser (larmes)'],
    ['shrink', 'shrank', 'shrunk', 'rétrécir'],
    ['slit', 'slit', 'slit', 'fendre, inciser'],
    ['sow', 'sowed', 'sown / sowed', 'semer'],
    ['speed', 'sped / speeded', 'sped / speeded', 'aller vite, accélérer'],
    ['spin', 'spun', 'spun', 'tourner, filer'],
    ['spit', 'spat / spit', 'spat / spit', 'cracher'],
    ['spoil', 'spoilt / spoiled', 'spoilt / spoiled', 'gâcher, gâter'],
    ['spring', 'sprang', 'sprung', 'jaillir, bondir'],
    ['stink', 'stank', 'stunk', 'puer'],
    ['stride', 'strode', 'stridden', 'marcher à grands pas'],
    ['string', 'strung', 'strung', 'enfiler, tendre (des cordes)'],
    ['strive', 'strove / strived', 'striven / strived', "s'efforcer"],
    ['swell', 'swelled', 'swollen / swelled', 'gonfler, enfler'],
    ['swing', 'swung', 'swung', 'se balancer'],
    ['thrive', 'thrived / throve', 'thrived', 'prospérer, s\'épanouir'],
    ['thrust', 'thrust', 'thrust', 'pousser brusquement'],
    ['tread', 'trod', 'trodden', 'marcher sur, fouler'],
    ['undergo', 'underwent', 'undergone', 'subir'],
    ['undertake', 'undertook', 'undertaken', 'entreprendre'],
    ['undo', 'undid', 'undone', 'défaire, annuler'],
    ['unwind', 'unwound', 'unwound', 'se détendre ; dérouler'],
    ['uphold', 'upheld', 'upheld', 'maintenir, confirmer'],
    ['upset', 'upset', 'upset', 'contrarier, bouleverser'],
    ['weave', 'wove', 'woven', 'tisser'],
    ['weep', 'wept', 'wept', 'pleurer'],
    ['wet', 'wet / wetted', 'wet / wetted', 'mouiller'],
    ['wind', 'wound', 'wound', 'enrouler, remonter (une montre)'],
    ['withdraw', 'withdrew', 'withdrawn', 'retirer, se retirer'],
    ['withhold', 'withheld', 'withheld', 'retenir, refuser'],
    ['withstand', 'withstood', 'withstood', 'résister à'],
    ['wring', 'wrung', 'wrung', 'tordre, essorer'],
  ];
  const known = new Set(window.IRREGULAR_VERBS.map(v => v[0]));
  MORE_IRREGULAR.forEach(v => { if (!known.has(v[0])) window.IRREGULAR_VERBS.push(v); });
  window.IRREGULAR_VERBS.sort((a, b) => a[0].localeCompare(b[0]));

  const REGULAR = `accept:accepter|accompany:accompagner|achieve:accomplir, réussir|act:agir, jouer (un rôle)|adapt:adapter|add:ajouter|admire:admirer|admit*:admettre|adore:adorer|advise:conseiller|affect:affecter|afford:avoir les moyens de|agree:être d'accord|aim:viser|allow:permettre|alter:modifier|amaze:stupéfier|amuse:amuser|analyse:analyser|announce:annoncer|annoy:agacer|answer:répondre|apologize:s'excuser|appear:apparaître|applaud:applaudir|apply:postuler, appliquer|appoint:nommer (à un poste)|appreciate:apprécier|approach:s'approcher de|approve:approuver|argue:se disputer, soutenir que|arrange:organiser, arranger|arrest:arrêter (police)|arrive:arriver|ask:demander|assist:aider|assume:supposer|attach:attacher, joindre|attack:attaquer|attempt:tenter|attend:assister à|attract:attirer|audition:auditionner|avoid:éviter|bake:faire cuire au four|balance:équilibrer|ban*:interdire|bark:aboyer|bathe:se baigner|beg*:supplier|behave:se comporter|belong:appartenir|blame:blâmer|bless:bénir|blink:cligner des yeux|boast:se vanter|boil:bouillir|book:réserver|borrow:emprunter|bother:déranger|bounce:rebondir|bow:s'incliner, saluer|brake:freiner|breathe:respirer|browse:parcourir, feuilleter|brush:brosser|bury:enterrer|calculate:calculer|call:appeler|calm:calmer|camp:camper|cancel*:annuler|care:se soucier|carry:porter|cause:causer|cease:cesser|celebrate:célébrer|challenge:défier|change:changer|charge:facturer, charger|charm:charmer|chase:poursuivre|chat*:bavarder|cheat:tricher|check:vérifier|cheer:acclamer|cherish:chérir|chew:mâcher|choke:s'étouffer|chop*:hacher|claim:affirmer, réclamer|clap*:applaudir, taper des mains|clean:nettoyer|clear:dégager, débarrasser|climb:grimper|close:fermer|coach:entraîner|collapse:s'effondrer|collect:collectionner, ramasser|comb:peigner|combine:combiner|commit*:commettre, s'engager|communicate:communiquer|compare:comparer|compete:concourir|complain:se plaindre|complete:compléter, achever|compliment:complimenter|compose:composer|concentrate:se concentrer|concern:concerner|conduct:diriger (un orchestre)|confess:avouer|confirm:confirmer|confuse:embrouiller|connect:relier|consider:envisager, considérer|consist:consister|contain:contenir|continue:continuer|contribute:contribuer|control*:contrôler, maîtriser|convince:convaincre|cook:cuisiner|copy:copier|correct:corriger|cough:tousser|count:compter|cover:couvrir|crack:fissurer|crash:s'écraser|crawl:ramper|create:créer|cross:traverser|crush:écraser|cry:pleurer, crier|cure:guérir|cycle:faire du vélo|damage:endommager|dance:danser|dare:oser|decide:décider|decorate:décorer|dedicate:dédier|defend:défendre|define:définir|delay:retarder|delight:ravir|deliver:livrer|demand:exiger|deny:nier|depend:dépendre|describe:décrire|deserve:mériter|design:concevoir|desire:désirer|destroy:détruire|detect:détecter|determine:déterminer|develop:développer|die:mourir|direct:diriger, mettre en scène|disagree:ne pas être d'accord|disappear:disparaître|disappoint:décevoir|discover:découvrir|discuss:discuter de|dislike:ne pas aimer|display:afficher, exposer|divide:diviser|doubt:douter|drag*:traîner|dress:s'habiller|drop*:laisser tomber|drown:se noyer|dry:sécher|earn:gagner (de l'argent)|echo:faire écho|educate:éduquer|elect:élire|eliminate:éliminer|embarrass:gêner|emerge:émerger|employ:employer|empty:vider|enable:permettre|encourage:encourager|end:finir|enjoy:apprécier|ensure:garantir, s'assurer|enter:entrer|entertain:divertir|escape:s'échapper|establish:établir|estimate:estimer|evaluate:évaluer|examine:examiner|exchange:échanger|excite:enthousiasmer|excuse:excuser|exercise:faire de l'exercice|exhibit:exposer|exist:exister|expand:développer, agrandir|expect:s'attendre à|explain:expliquer|explode:exploser|explore:explorer|express:exprimer|extend:prolonger|face:faire face à|fade:s'estomper|fail:échouer|fancy:avoir envie de|fasten:attacher|fear:craindre|fetch:aller chercher|file:classer|fill:remplir|film:filmer|finance:financer|finish:finir|fire:licencier, tirer|fit*:aller (taille), convenir|fix:réparer, fixer|flash:clignoter|float:flotter|flourish:s'épanouir|flow:couler|focus:se concentrer|fold:plier|follow:suivre|force:forcer|form:former|found:fonder|frighten:effrayer|fry:frire|gain:gagner, obtenir|gather:rassembler|gaze:contempler|glance:jeter un coup d'œil|glow:rayonner|glue:coller|govern:gouverner|grab*:saisir|grant:accorder|greet:saluer|grin*:sourire largement|guarantee:garantir|guard:garder, surveiller|guess:deviner|guide:guider|hammer:marteler|hand:tendre, remettre|handle:gérer, manier|happen:arriver, se produire|harm:nuire à|hate:détester|heal:guérir|heat:chauffer|help:aider|hesitate:hésiter|hope:espérer|host:accueillir, animer|hug*:serrer dans ses bras|hum*:fredonner|hunt:chasser|hurry:se dépêcher|identify:identifier|ignore:ignorer|illustrate:illustrer|imagine:imaginer|imply:impliquer, sous-entendre|impress:impressionner|improve:améliorer, progresser|improvise:improviser|include:inclure|increase:augmenter|influence:influencer|inform:informer|inherit:hériter|injure:blesser|insist:insister|inspire:inspirer|install:installer|intend:avoir l'intention de|interest:intéresser|interpret:interpréter|interrupt:interrompre|introduce:présenter|invent:inventer|investigate:enquêter|invite:inviter|involve:impliquer|iron:repasser|join:rejoindre|joke:plaisanter|judge:juger|jump:sauter|justify:justifier|kick:donner un coup de pied|kill:tuer|kiss:embrasser|knock:frapper (à la porte)|label*:étiqueter|land:atterrir|last:durer|laugh:rire|launch:lancer|lick:lécher|lift:soulever|like:aimer bien|limit:limiter|link:relier|list:énumérer|listen:écouter|live:vivre, habiter|load:charger|locate:localiser|lock:fermer à clé|look:regarder|love:aimer|maintain:maintenir|manage:gérer, réussir à|mark:marquer, noter|marry:épouser|match:correspondre|matter:importer|measure:mesurer|memorize:mémoriser|mention:mentionner|mind:déranger, faire attention|miss:manquer, rater|mix:mélanger|motivate:motiver|move:bouger, déménager|murder:assassiner|nail:clouer|name:nommer|need:avoir besoin de|negotiate:négocier|nod*:hocher la tête|note:noter|notice:remarquer|number:numéroter|obey:obéir|object:objecter|observe:observer|obtain:obtenir|occur*:se produire|offer:offrir, proposer|open:ouvrir|operate:opérer, fonctionner|oppose:s'opposer à|order:commander|organize:organiser|owe:devoir (de l'argent)|own:posséder|pack:emballer, faire ses valises|paint:peindre|park:se garer|participate:participer|pass:passer, réussir (un examen)|pause:faire une pause|perform:se produire (sur scène), interpréter|permit*:permettre|persuade:persuader|phone:téléphoner|pick:cueillir, choisir|place:placer|plan*:planifier|plant:planter|play:jouer|please:plaire|point:montrer du doigt|polish:polir, cirer|possess:posséder|post:poster|pour:verser|practise:s'entraîner, pratiquer|pray:prier|predict:prédire|prefer*:préférer|prepare:préparer|present:présenter|preserve:préserver|press:appuyer|pretend:faire semblant|prevent:empêcher|print:imprimer|proceed:procéder|produce:produire|promise:promettre|pronounce:prononcer|propose:proposer|protect:protéger|provide:fournir|publish:publier|pull:tirer|pump:pomper|punch:frapper du poing|punish:punir|push:pousser|qualify:se qualifier|question:interroger|quote:citer|race:faire la course|rain:pleuvoir|raise:lever, élever|reach:atteindre|realize:se rendre compte|receive:recevoir|recognize:reconnaître|recommend:recommander|record:enregistrer|recover:se rétablir|reduce:réduire|refer*:faire référence à|reflect:refléter|refresh:rafraîchir|refuse:refuser|register:s'inscrire|regret*:regretter|rehearse:répéter (un spectacle)|reject:rejeter|relax:se détendre|release:libérer, sortir (un album)|rely:compter sur|remain:rester|remark:remarquer|remember:se souvenir|remind:rappeler (à qqn)|remove:enlever|renew:renouveler|rent:louer|repair:réparer|repeat:répéter|replace:remplacer|reply:répondre|report:signaler, rapporter|represent:représenter|request:demander|require:exiger|rescue:sauver|research:faire des recherches|reserve:réserver|resign:démissionner|resist:résister|resolve:résoudre|resonate:résonner|respect:respecter|respond:répondre, réagir|rest:se reposer|restore:restaurer|retain:retenir|retire:prendre sa retraite|return:revenir, rendre|reveal:révéler|revise:réviser|reward:récompenser|rhyme:rimer|risk:risquer|rob*:voler (qqn), cambrioler|rock:bercer|roll:rouler|rub*:frotter|ruin:ruiner|rule:gouverner|rush:se précipiter|sail:naviguer|satisfy:satisfaire|save:sauver, économiser|scare:effrayer|schedule:planifier|score:marquer (un point)|scream:hurler|search:chercher|seem:sembler|select:sélectionner|separate:séparer|serve:servir|settle:s'installer, régler|share:partager|shave:se raser|shiver:frissonner|shock:choquer|shop*:faire les courses|shout:crier|sigh:soupirer|sign:signer|signal*:signaler|skate:patiner|ski:skier|skip*:sauter|slip*:glisser|smash:fracasser|smile:sourire|smoke:fumer|snore:ronfler|snow:neiger|solve:résoudre|sound:sembler, sonner|spare:épargner|sparkle:étinceler|specialize:se spécialiser|spot*:repérer|spray:vaporiser|squeeze:presser|stamp:tamponner|stare:fixer du regard|start:commencer|state:déclarer|stay:rester|step*:faire un pas|stir*:remuer|stop*:arrêter|store:stocker|stretch:étirer|struggle:lutter|study:étudier|submit*:soumettre|succeed:réussir|suck:sucer|suffer:souffrir|suggest:suggérer|suit:aller (bien) à|supply:fournir|support:soutenir|suppose:supposer|surprise:surprendre|surround:entourer|survive:survivre|suspect:soupçonner|swallow:avaler|switch:changer, basculer|tackle:s'attaquer à|talk:parler|tap*:tapoter|taste:goûter|tease:taquiner|telephone:téléphoner|tempt:tenter|terrify:terrifier|test:tester|thank:remercier|thrill:ravir, enthousiasmer|tick:cocher|tidy:ranger|tie:attacher, nouer|tire:fatiguer|toss:lancer|touch:toucher|tour:faire une tournée|tow:remorquer|trace:tracer|trade:échanger, commercer|train:entraîner, s'entraîner|transform:transformer|translate:traduire|transport:transporter|trap*:piéger|travel*:voyager|treat:traiter, soigner|tremble:trembler|trick:duper|trip*:trébucher|trouble:troubler|trust:faire confiance|try:essayer|tune:accorder (un instrument)|turn:tourner|twist:tordre|type:taper (au clavier)|underline:souligner|undress:se déshabiller|unite:unir|unlock:déverrouiller|unpack:déballer|update:mettre à jour|upload:mettre en ligne|urge:exhorter|use:utiliser|value:apprécier, évaluer|vanish:disparaître|vary:varier|vibrate:vibrer|visit:visiter, rendre visite|volunteer:se porter volontaire|vote:voter|wait:attendre|walk:marcher|wander:errer|want:vouloir|warm:chauffer, réchauffer|warn:avertir|wash:laver|waste:gaspiller|watch:regarder|water:arroser|wave:faire signe de la main|weigh:peser|welcome:accueillir|whisper:chuchoter|whistle:siffler|wink:faire un clin d'œil|wipe:essuyer|wish:souhaiter|witness:être témoin de|wonder:se demander|work:travailler|worry:s'inquiéter|worship*:vénérer|wrap*:envelopper|yawn:bâiller|yell:hurler|zip*:fermer (une fermeture éclair)`;

  /* ---------- Règles d'orthographe ---------- */
  const VOW = /[aeiou]/;
  const dbl = w => w.slice(-1) === 'c' ? w + 'k' : w + w.slice(-1);
  function pastOf(b, d) {
    if (d) return dbl(b) + 'ed';
    if (b.endsWith('e')) return b + 'd';
    if (b.endsWith('y') && !VOW.test(b.slice(-2, -1))) return b.slice(0, -1) + 'ied';
    return b + 'ed';
  }
  function ingOf(b, d) {
    if (b.endsWith('ie')) return b.slice(0, -2) + 'ying';
    if (d) return dbl(b) + 'ing';
    if (b.length > 2 && b.endsWith('e') && !/[eoy]e$/.test(b)) return b.slice(0, -1) + 'ing';
    return b + 'ing';
  }
  function thirdOf(b) {
    if (b === 'have') return 'has';
    if (b === 'be') return 'is';
    if (/(s|sh|ch|x|z|o)$/.test(b)) return b + 'es';
    if (b.endsWith('y') && !VOW.test(b.slice(-2, -1))) return b.slice(0, -1) + 'ies';
    return b + 's';
  }
  // Irréguliers dont la consonne finale double au -ing
  const IRR_DBL = new Set(['babysit', 'begin', 'bet', 'bid', 'cut', 'dig', 'forbid', 'forget', 'get', 'hit', 'input', 'let', 'outrun', 'put', 'quit', 'rid', 'run', 'set', 'shut', 'sit', 'slit', 'spin', 'spit', 'split', 'swim', 'upset', 'wet', 'win']);

  const irrSet = new Set(window.IRREGULAR_VERBS.map(v => v[0]));
  const verbs = window.IRREGULAR_VERBS.map(v => ({ b: v[0], p: v[1], pp: v[2], fr: v[3], irr: true, ing: ingOf(v[0], IRR_DBL.has(v[0])), s: thirdOf(v[0]) }));
  const seen = new Set();
  REGULAR.split('|').forEach(item => {
    const i = item.indexOf(':');
    let b = item.slice(0, i).trim(); const fr = item.slice(i + 1).trim();
    const d = b.endsWith('*'); if (d) b = b.slice(0, -1);
    if (irrSet.has(b) || seen.has(b)) return;
    seen.add(b);
    const p = pastOf(b, d);
    verbs.push({ b, p, pp: p, fr, irr: false, ing: ingOf(b, d), s: thirdOf(b), dbl: d });
  });
  verbs.sort((a, b) => a.b.localeCompare(b.b));
  window.VERBS = verbs;
})();
