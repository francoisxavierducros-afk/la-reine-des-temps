/* ==========================================================
   La Reine des Temps — application
   Données stockées localement (localStorage), aucune dépendance.
   ========================================================== */
(function () {
  'use strict';

  const KEY = 'tensemaster.v1';
  const LESSONS = window.LESSONS;
  const LESSON = Object.fromEntries(LESSONS.map(l => [l.id, l]));
  const TENSES = LESSONS.map(l => l.id);
  const QUESTIONS = window.QUESTIONS;
  const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
  const GROUPS = window.TENSE_GROUPS;

  /* ---------------- Icônes ---------------- */
  const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    book: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/><path d="M8 7h8M8 11h6"/>',
    dumbbell: '<path d="M6 7v10M18 7v10M3 9.5v5M21 9.5v5M6 12h12"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    report: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.3 1.2 2.8 2.5 2.8z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    volume: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    upload: '<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
    snow: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    notebook: '<path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6zM6 3v18M10 8h6M10 12h6"/>',
    alert: '<path d="M12 3 2 21h20z"/><path d="M12 10v4M12 17.5v.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    gem: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21 8 9l4-6 4 6z"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>',
  };
  const I = (n, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONS[n] || ''}</svg>`;

  /* ---------------- Utilitaires ---------------- */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const dstr = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dstr(new Date());
  const parseD = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (s, n) => { const d = parseD(s); d.setDate(d.getDate() + n); return dstr(d); };
  const diffDays = (a, b) => Math.round((parseD(b) - parseD(a)) / 86400000);
  const weekStart = s => { const d = parseD(s); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return dstr(d); };
  const fmt = (s, o = { day: 'numeric', month: 'short' }) => parseD(s).toLocaleDateString('fr-FR', o);
  const fmtLong = s => fmt(s, { weekday: 'long', day: 'numeric', month: 'long' });
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const sum = a => a.reduce((x, y) => x + y, 0);
  const pct = (c, n) => n ? Math.round(c / n * 100) : 0;

  function hash(str) { let h = 1779033703 ^ str.length; for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; } return h >>> 0; }
  function rng(seed) { let a = typeof seed === 'string' ? hash(seed) : seed; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffle(arr, r = Math.random) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  /* ---------------- État ---------------- */
  function fresh() {
    return {
      version: 1, onboarded: false,
      profile: { name: 'Elise', createdAt: today(), dailyMinutes: 15, vocabMinutes: 10 },
      diagnostic: null, xp: 0, xpLog: {}, tense: {}, log: [], daily: {},
      streak: { current: 0, best: 0, last: null, freezes: 1 },
      lessonViews: [], lessonsRead: {}, badges: {}, weeks: {}, reportsSeen: {},
      snapshots: {}, mistakes: {}, words: [], wordReviews: {}, vocab: {},
    };
  }
  function load() {
    try { const raw = localStorage.getItem(KEY); if (raw) return Object.assign(fresh(), JSON.parse(raw)); } catch (e) { /* stockage indisponible */ }
    return fresh();
  }
  let S = load();
  function migrate() {
    S.profile.dailyMinutes = S.profile.dailyMinutes || 15;
    S.profile.vocabMinutes = S.profile.vocabMinutes || 10;
    S.vocab = S.vocab || {};
  }
  migrate();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* quota */ } }

  /* ---------------- Maîtrise ---------------- */
  const mastery = t => { const r = S.tense[t]?.r || []; return r.length ? Math.round(sum(r) / r.length * 100) : 0; };
  const answeredCount = t => S.tense[t]?.n || 0;
  const avgMastery = () => Math.round(sum(TENSES.map(mastery)) / TENSES.length);
  function firstSnapshot() { const k = Object.keys(S.snapshots).sort()[0]; return k ? S.snapshots[k] : null; }
  function baseline(t) {
    if (S.diagnostic) return S.diagnostic.scores[t] ?? 0;
    return firstSnapshot()?.per?.[t] ?? 0;
  }
  const baselineAvg = () => Math.round(sum(TENSES.map(baseline)) / TENSES.length);
  function snapshotAt(date) {
    const keys = Object.keys(S.snapshots).filter(k => k <= date).sort();
    return keys.length ? S.snapshots[keys[keys.length - 1]] : null;
  }
  function takeSnapshot() {
    const per = {}; TENSES.forEach(t => per[t] = mastery(t));
    S.snapshots[today()] = { avg: avgMastery(), per };
  }
  function estLevel(v) {
    if (v < 20) return { code: 'A1', label: 'Découverte' };
    if (v < 40) return { code: 'A2', label: 'Élémentaire' };
    if (v < 60) return { code: 'B1', label: 'Intermédiaire' };
    if (v < 80) return { code: 'B2', label: 'Avancé' };
    if (v < 92) return { code: 'C1', label: 'Autonome' };
    return { code: 'C2', label: 'Maîtrise' };
  }

  /* ---------------- ★ & niveaux ---------------- */
  const TITLES = ['Choriste', 'Coryphée', 'Comprimario', 'Soubrette', 'Soprano lirico', 'Soprano léger', 'Soprano colorature', 'Prima donna', 'Diva', 'Diva assoluta', 'Reine de la Nuit'];
  function levelInfo(xp = S.xp) {
    let L = 1; while (xp >= 50 * L * (L + 1)) L++;
    const cur = 50 * (L - 1) * L, next = 50 * L * (L + 1);
    return { L, cur, next, pct: (xp - cur) / (next - cur), title: TITLES[Math.min(L - 1, TITLES.length - 1)] };
  }
  function gainXP(n, label) {
    if (!n) return;
    const before = levelInfo().L;
    S.xp += n; S.xpLog[today()] = (S.xpLog[today()] || 0) + n;
    const after = levelInfo();
    if (label) toast('✨', `+${n} ★`, label);
    if (after.L > before) {
      setTimeout(() => { toast('🎭', `Nouveau rôle : ${after.title} !`, `Niveau ${after.L} atteint. Brava !`); confetti(); }, 300);
    }
    save();
  }

  /* ---------------- Enregistrement des réponses ---------------- */
  function record(q, ok, mode) {
    const entry = { d: today(), q: q.id, t: q.t, ok: ok ? 1 : 0, m: mode };
    const ts = (S.tense[q.t] = S.tense[q.t] || { r: [], n: 0, c: 0 });
    ts.r.push(ok ? 1 : 0); if (ts.r.length > 20) ts.r = ts.r.slice(-20);
    ts.n++; if (ok) ts.c++;
    const mk = S.mistakes[q.id];
    if (!ok) S.mistakes[q.id] = { n: (mk?.n || 0) + 1, last: today(), fixed: false };
    else if (mk && !mk.fixed && mode !== 'diag') { mk.fixed = true; mk.fixedOn = today(); entry.fx = 1; }
    S.log.push(entry); if (S.log.length > 30000) S.log = S.log.slice(-30000);
    takeSnapshot(); save();
  }

  /* ---------------- Série (streak) ---------------- */
  function checkStreak() {
    const s = S.streak; if (!s.last) return;
    const gap = diffDays(s.last, today());
    if (gap <= 1) return;
    const missed = gap - 1;
    if (s.current > 0 && s.freezes >= missed) {
      s.freezes -= missed; s.last = addDays(today(), -1);
      setTimeout(() => toast('🎭', 'La doublure a chanté pour toi', `Ta série de ${s.current} nuits est sauvée (${missed} jour${missed > 1 ? 's' : ''} manqué${missed > 1 ? 's' : ''}).`), 800);
    } else if (s.current > 0) {
      setTimeout(() => toast('🥀', 'Rideau !', `Ta série de ${s.current} nuits s'est arrêtée. Le spectacle reprend ce soir !`), 800);
      s.current = 0;
    }
    save();
  }
  function checkDayComplete(d, date) {
    if (!d || d.full || !d.done || !(d.vocab && d.vocab.done)) return false;
    d.full = true;
    if (date === today()) bumpStreak();
    setTimeout(() => { toast('💐', 'Journée complète !', 'Temps et vocabulaire terminés. Ton bouquet du soir t\'attend.'); confetti(); }, 500);
    return true;
  }
  function bumpStreak() {
    const s = S.streak, t = today();
    if (s.last === t) return;
    s.current = (s.last === addDays(t, -1)) ? s.current + 1 : 1;
    s.last = t; s.best = Math.max(s.best, s.current);
    const bonus = { 3: 30, 7: 100, 14: 200, 30: 500, 60: 800, 100: 1500 }[s.current];
    if (bonus) setTimeout(() => gainXP(bonus, `Bonus : ${s.current} nuits en scène 🌙`), 600);
    if (s.current % 7 === 0 && s.freezes < 3) { s.freezes++; setTimeout(() => toast('🎭', 'Doublure engagée', 'Elle chantera à ta place si tu manques une soirée.'), 1200); }
  }

  /* ---------------- Sélection des questions ---------------- */
  function lastSeen() { const m = {}; S.log.forEach(l => m[l.q] = l); return m; }
  function pickFrom(tenses, count, r, exclude = new Set(), kinds = null) {
    const seen = lastSeen(), t0 = today();
    const pool = QUESTIONS.filter(q => tenses.includes(q.t) && !exclude.has(q.id) && (!kinds || kinds.includes(q.k)));
    const scored = pool.map(q => {
      const l = seen[q.id]; let s = r();
      if (l && l.ok && diffDays(l.d, t0) < 4) s += 1.2;
      if (l && l.ok) s += 1.5;   // une question déjà réussie passe après les questions jamais vues
      if (S.mistakes[q.id] && !S.mistakes[q.id].fixed) s -= 0.4;
      return { q, s };
    }).sort((a, b) => a.s - b.s);
    return scored.slice(0, count).map(x => x.q);
  }
  function weakest(n = 3) {
    return TENSES.slice().sort((a, b) => (mastery(a) - mastery(b)) || (answeredCount(a) - answeredCount(b))).slice(0, n);
  }
  // Durée estimée d'un exercice (lecture, réponse et explication comprises), en secondes
  const EST = { mcq: 30, fill: 40, build: 50, trans: 70 };
  function generateDaily(date) {
    const r = rng('daily' + date + S.profile.name);
    const budget = (S.profile.dailyMinutes || 15) * 60;
    const chosen = new Set(); const out = []; let t = 0;
    const add = (list, cap) => { for (const q of list) { if (t >= cap) break; if (chosen.has(q.id)) continue; chosen.add(q.id); out.push(q.id); t += EST[q.k]; } };
    // 1) erreurs à revoir (≈ 20 % du temps)
    const due = Object.entries(S.mistakes).filter(([, m]) => !m.fixed && m.last < date).map(([id]) => id).filter(id => QMAP[id]);
    add(shuffle(due, r).map(id => QMAP[id]), budget * 0.2);
    // 2) traductions et exercices sur les 3 temps les plus faibles (≈ 55 %)
    const weak = TENSES.slice().sort((a, b) => (mastery(a) - mastery(b)) + (r() - 0.5) * 8).slice(0, 3);
    add(pickFrom(weak, 4, r, chosen, ['trans']), budget * 0.45);
    add(shuffle(weak.flatMap(tn => pickFrom([tn], 12, r, chosen)), r), budget * 0.75);
    // 3) révision générale des autres temps
    add(pickFrom(TENSES.filter(tn => !weak.includes(tn)), 80, r, chosen), budget);
    return { v: 2, qids: shuffle(out, r), res: [], done: false, chest: false, perfect: false, focus: weak, est: t };
  }
  function getDaily(date = today()) {
    const old = S.daily[date];
    if (!old || (!old.v && !old.res.length)) { S.daily[date] = generateDaily(date); save(); }
    const d = S.daily[date];
    if (d.v && !d.vocab) { d.vocab = generateVocab(date); save(); }
    return d;
  }
  const dayFull = d => !!d && (d.full || (d.done && !d.v));

  /* ---------------- Vocabulaire du jour (répétition espacée) ---------------- */
  const VOCAB_INT = [0, 1, 2, 4, 7, 15, 30];   // jours avant de revoir un mot, selon sa boîte
  const VEST = { intro: 12, en2fr: 12, fr2en: 12, type: 20 };
  const BASE_VOCAB = [
    ...window.OPERA_VOCAB.map(o => ({ key: 'o:' + o.en + '|' + o.fr, en: o.en, fr: o.fr, cat: o.cat })),
    ...window.DICTIONARY.map(e => ({ key: 'd:' + e[0] + '|' + e[2], en: e[0], fr: e[2], cat: e[4], ex: e[3] })),
  ];
  function vocabPool() { return BASE_VOCAB.concat(S.words.map(w => ({ key: 'w:' + w.id, en: w.w, fr: w.tr, cat: 'Mon carnet', ex: w.ex }))); }
  function vocabItem(key) { return vocabPool().find(v => v.key === key); }
  function generateVocab(date) {
    const r = rng('vocab' + date + S.profile.name), pool = vocabPool();
    const byKey = Object.fromEntries(pool.map(v => [v.key, v]));
    const budget = (S.profile.vocabMinutes || 10) * 60;
    let t = 0;
    const known = Object.keys(S.vocab).filter(k => byKey[k]);
    const due = known.filter(k => { const v = S.vocab[k]; return !v.last || diffDays(v.last, date) >= VOCAB_INT[Math.min(v.box, 6)]; })
      .sort((a, b) => S.vocab[a].box - S.vocab[b].box || (S.vocab[a].last || '').localeCompare(S.vocab[b].last || ''));
    const fresh = shuffle(pool.filter(v => v.cat === 'Mon carnet' && !S.vocab[v.key]), r).concat(shuffle(pool.filter(v => v.cat !== 'Mon carnet' && v.cat !== 'Œuvres célèbres (titres)' && !S.vocab[v.key]), r));
    const nNew = Math.max(4, Math.round(budget / 75));
    const news = []; const first = [], second = [], reviews = [];
    const addNew = v => { news.push(v.key); first.push({ key: v.key, m: 'en2fr' }); second.push({ key: v.key, m: 'fr2en' }); t += VEST.intro + VEST.en2fr + VEST.fr2en; };
    fresh.slice(0, nNew).forEach(addNew);
    for (const k of due) { if (t >= budget) break; const m = S.vocab[k].box >= 2 ? 'type' : 'fr2en'; reviews.push({ key: k, m }); t += VEST[m]; }
    // Temps restant : écrire les mots du jour, puis quelques nouveaux mots (12 maximum par jour)
    const typed = [];
    for (const k of news) { if (t >= budget - 15) break; typed.push({ key: k, m: 'type' }); t += VEST.type; }
    let fi = nNew;
    while (t < budget - 30 && fi < fresh.length && news.length < 12) addNew(fresh[fi++]);
    const items = shuffle(first, r).concat(shuffle(second.concat(reviews), r), shuffle(typed, r));
    return { news, items, res: [], done: false, est: t };
  }
  function recordVocab(key, ok) {
    const v = S.vocab[key] || (S.vocab[key] = { box: 0, last: null, n: 0, ok: 0 });
    if (ok) { if (v.last !== today() || v.box === 0) v.box = Math.min(6, v.box + 1); v.ok++; }
    else v.box = 0;
    v.last = today(); v.n++;
  }
  const VQ = {};
  function vocabQuestions(d) {
    const pool = vocabPool(), byKey = Object.fromEntries(pool.map(v => [v.key, v]));
    const r = rng('vq' + today());
    return d.vocab.items.map((it, idx) => {
      const v = byKey[it.key]; if (!v) return null;
      const id = `v${idx}:${it.key}:${it.m}`;
      const same = pool.filter(o => o.cat === v.cat && o.fr !== v.fr && o.en !== v.en);
      const others = shuffle(same.length >= 3 ? same : pool.filter(o => o.fr !== v.fr && o.en !== v.en), r).slice(0, 3);
      const base = { id, k: 'mcq', vkey: v.key, cat: v.cat, speak: v.en.replace(/\s*\(.*?\)/g, ''), ex: `${v.en} = ${v.fr}` + (v.ex ? ` · ${v.ex}` : '') };
      let q;
      if (it.m === 'type') {
        const plain = v.en.replace(/\s*\(.*?\)/g, '').trim();
        q = Object.assign(base, { k: 'fill', q: `Écris en anglais : « ${v.fr} »`, a: [v.en, plain, plain.replace(/^to /, ''), plain.replace(/^the /i, '')] });
      } else {
        const opts = shuffle([v, ...others], r);
        q = Object.assign(base, it.m === 'en2fr'
          ? { q: `Que signifie « ${v.en} » ?`, o: opts.map(o => o.fr), a: opts.indexOf(v) }
          : { q: `Comment dit-on « ${v.fr} » en anglais ?`, o: opts.map(o => o.en), a: opts.indexOf(v) });
      }
      VQ[id] = q; return id;
    }).filter(Boolean);
  }

  /* ---------------- Vérification des réponses ---------------- */
  function norm(s) {
    return String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/…|\.\.\./g, ' ').replace(/[.,!?;:"«»()]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function variants(s) {
    let x = ' ' + norm(s) + ' ';
    x = x.replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'cannot').replace(/\bshan't\b/g, 'shall not')
      .replace(/\bain't\b/g, 'is not').replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are')
      .replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will').replace(/\bcan not\b/g, 'cannot');
    let out = [x];
    if (/'s\b/.test(x)) out = out.flatMap(v => [v.replace(/'s\b/g, ' is'), v.replace(/'s\b/g, ' has')]);
    if (/'d\b/.test(x)) out = out.flatMap(v => [v.replace(/'d\b/g, ' had'), v.replace(/'d\b/g, ' would')]);
    return out.map(v => v.replace(/\s+/g, ' ').trim());
  }
  function matches(given, answers) {
    const g = new Set(variants(given));
    return answers.some(a => variants(a).some(v => g.has(v)));
  }

  /* Traduction : on vérifie d'abord la phrase entière, puis la forme verbale clé (le temps). */
  const NUMS = { one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', ten: '10', twelve: '12', twenty: '20' };
  function tnorm(s) {
    return String(s).toLowerCase().replace(/o['’]clock/g, ' ').replace(/\b(p\.?m\.?)\b/g, ' pm ')
      .replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|twelve|twenty)\b/g, w => NUMS[w]);
  }
  const words = v => v.split(' ').filter(Boolean);
  function hasSeq(vWords, kWords) { let i = 0; for (const w of vWords) { if (w === kWords[i]) i++; if (i === kWords.length) return true; } return false; }
  function seqIn(given, keys) {
    const gv = variants(tnorm(given)).map(words);
    return keys.some(k => variants(tnorm(k)).some(kv => gv.some(g => hasSeq(g, words(kv)))));
  }
  function checkTrans(given, q) {
    if (q.no && q.no.length && seqIn(given, q.no)) return 'wrong';
    if (matches(tnorm(given), q.a.map(tnorm))) return 'exact';
    if (seqIn(given, q.key)) return 'tense';
    return 'wrong';
  }
  function correctOf(q) {
    if (q.k === 'mcq') return q.o[q.a];
    if (q.k === 'fill') return q.a[0].replace(/\s*(…|\.\.\.)\s*/g, ' ');
    if (q.k === 'trans') return q.a[0];
    return q.a;
  }

  /* ---------------- Badges ---------------- */
  const BADGES = [
    { id: 'first', emo: '🎵', name: 'Première note', desc: 'Répondre à ta première question', test: () => S.log.length >= 1 },
    { id: 'diag', emo: '🎤', name: 'Audition', desc: 'Passer le test de positionnement', test: () => !!S.diagnostic },
    { id: 'daily1', emo: '🎼', name: 'Premier air', desc: 'Terminer une vocalise du jour', test: () => Object.values(S.daily).some(d => d.done) },
    { id: 'perfect', emo: '💎', name: 'Justesse parfaite', desc: 'Faire 100 % à une vocalise du jour', test: () => Object.values(S.daily).some(d => d.perfect) },
    { id: 'streak3', emo: '🌙', name: 'Trois soirs', desc: '3 nuits consécutives', test: () => S.streak.best >= 3 },
    { id: 'streak7', emo: '✨', name: 'Une semaine en scène', desc: '7 nuits consécutives', test: () => S.streak.best >= 7 },
    { id: 'streak30', emo: '🌌', name: 'Saison complète', desc: '30 nuits consécutives', test: () => S.streak.best >= 30 },
    { id: 'q100', emo: '🎶', name: 'Cent notes', desc: 'Répondre à 100 questions', test: () => S.log.length >= 100 },
    { id: 'q500', emo: '🎹', name: 'Cinq cents notes', desc: 'Répondre à 500 questions', test: () => S.log.length >= 500 },
    { id: 'lessons', emo: '📜', name: 'Répertoire complet', desc: 'Étudier les 13 leçons', test: () => Object.keys(S.lessonsRead).length >= TENSES.length },
    { id: 'master1', emo: '🎭', name: 'Premier rôle', desc: '80 % de maîtrise sur un temps (10 réponses min.)', test: () => TENSES.some(t => mastery(t) >= 80 && answeredCount(t) >= 10) },
    { id: 'master5', emo: '🏅', name: 'Cinq rôles au répertoire', desc: '5 temps maîtrisés à 80 %', test: () => TENSES.filter(t => mastery(t) >= 80 && answeredCount(t) >= 10).length >= 5 },
    { id: 'masterAll', emo: '👑', name: 'Reine de la Nuit', desc: 'Les 13 temps maîtrisés à 80 %', test: () => TENSES.every(t => mastery(t) >= 80 && answeredCount(t) >= 10) },
    { id: 'fix10', emo: '🩹', name: 'Reprise parfaite', desc: 'Corriger 10 anciennes erreurs', test: () => S.log.filter(l => l.fx).length >= 10 },
    { id: 'words20', emo: '📒', name: 'Livret annoté', desc: '20 mots dans ton carnet', test: () => S.words.length >= 20 },
    { id: 'level5', emo: '⭐', name: 'Soprano lirico', desc: 'Atteindre le niveau 5', test: () => levelInfo().L >= 5 },
    { id: 'level10', emo: '🌟', name: 'Diva assoluta', desc: 'Atteindre le niveau 10', test: () => levelInfo().L >= 10 },
    { id: 'week', emo: '💐', name: 'Ovation', desc: 'Valider toutes les quêtes d\'une semaine', test: () => Object.values(S.weeks).some(w => w.chest) },
  ];
  function checkBadges() {
    BADGES.forEach(b => {
      if (!S.badges[b.id] && b.test()) {
        S.badges[b.id] = today();
        setTimeout(() => { toast(b.emo, 'Nouveau rôle au répertoire !', b.name); }, 500);
      }
    });
    save();
  }

  /* ---------------- Quêtes hebdomadaires ---------------- */
  function weekStats(wk) {
    const end = addDays(wk, 6);
    const logs = S.log.filter(l => l.d >= wk && l.d <= end && l.m !== 'diag');
    const correct = logs.filter(l => l.ok).length;
    const days = new Set(logs.map(l => l.d));
    const dailyDone = Object.entries(S.daily).filter(([d, v]) => d >= wk && d <= end && dayFull(v)).length;
    let xp = 0; for (let i = 0; i < 7; i++) xp += S.xpLog[addDays(wk, i)] || 0;
    const lessons = new Set(S.lessonViews.filter(v => v.d >= wk && v.d <= end).map(v => v.id)).size;
    return { wk, end, logs, answered: logs.length, correct, acc: pct(correct, logs.length), days: days.size, dailyDone, xp, lessons, fixed: logs.filter(l => l.fx).length };
  }
  const QUESTS = [
    { id: 'daily5', icon: 'music', title: 'Complète 5 journées (temps + vocabulaire)', goal: 5, xp: 150, val: s => s.dailyDone },
    { id: 'q60', icon: 'pen', title: 'Réponds à 60 questions', goal: 60, xp: 100, val: s => s.answered },
    { id: 'acc80', icon: 'target', title: '80 % de réussite (30 réponses min.)', goal: 80, xp: 120, unit: '%', val: s => s.answered >= 30 ? s.acc : 0 },
    { id: 'lesson2', icon: 'book', title: 'Étudie 2 leçons', goal: 2, xp: 60, val: s => s.lessons },
    { id: 'fix5', icon: 'refresh', title: 'Corrige 5 anciennes erreurs', goal: 5, xp: 80, val: s => s.fixed },
    { id: 'xp500', icon: 'star', title: 'Gagne 500 ★', goal: 500, xp: 100, val: s => s.xp },
  ];
  const weekState = wk => (S.weeks[wk] = S.weeks[wk] || { claimed: {}, chest: false });

  /* ---------------- Rapport hebdomadaire ---------------- */
  function buildReport(wk) {
    const st = weekStats(wk), prev = weekStats(addDays(wk, -7));
    const end = st.end, t0 = today(), final = end < t0;
    const per = {};
    TENSES.forEach(t => per[t] = { n: 0, c: 0 });
    st.logs.forEach(l => { if (per[l.t]) { per[l.t].n++; per[l.t].c += l.ok; } });
    const startSnap = snapshotAt(addDays(wk, -1));
    const endSnap = snapshotAt(final ? end : t0);
    const mStart = t => startSnap ? startSnap.per[t] : baseline(t);
    const mEnd = t => endSnap ? endSnap.per[t] : mastery(t);
    const rows = TENSES.map(t => ({ t, n: per[t].n, acc: pct(per[t].c, per[t].n), start: mStart(t), end: mEnd(t), base: baseline(t) }));
    const practiced = rows.filter(r => r.n >= 2);
    const strengths = practiced.filter(r => r.acc >= 75).sort((a, b) => b.acc - a.acc || b.n - a.n).slice(0, 3);
    const weakPool = rows.slice().sort((a, b) => {
      const sa = a.n >= 2 ? a.acc : a.end, sb = b.n >= 2 ? b.acc : b.end;
      return sa - sb || b.n - a.n;
    });
    const weaknesses = weakPool.filter(r => !strengths.includes(r)).slice(0, 3);
    const seenQ = new Set();
    const mistakes = st.logs.filter(l => !l.ok).reverse().filter(l => !seenQ.has(l.q) && seenQ.add(l.q) && QMAP[l.q]).slice(0, 6).map(l => QMAP[l.q]);
    const avgStart = startSnap ? startSnap.avg : baselineAvg();
    const avgEnd = endSnap ? endSnap.avg : avgMastery();
    const delta = avgEnd - avgStart;
    let verdict;
    if (!st.answered) verdict = "Semaine sans entraînement. Ce n'est pas grave : l'important est de reprendre dès aujourd'hui, même 5 minutes.";
    else if (st.acc >= 85 && st.days >= 5) verdict = `Semaine excellente : ${st.acc} % de réussite sur ${st.days} jours. Tu peux passer à des temps plus avancés.`;
    else if (delta > 0) verdict = `Belle progression : ta maîtrise globale gagne ${delta} point${delta > 1 ? 's' : ''} cette semaine. Continue sur ce rythme.`;
    else if (st.days < 3) verdict = `Tu t'es entraîné ${st.days} jour${st.days > 1 ? 's' : ''} seulement. La régularité est la clé : vise au moins 5 jours la semaine prochaine.`;
    else verdict = `Semaine de consolidation (${st.acc} % de réussite). Concentre-toi sur tes points faibles pour débloquer ta progression.`;
    const objectives = [];
    objectives.push(st.dailyDone >= 5 ? `Garder le rythme : ${Math.max(5, st.dailyDone)} vocalises du jour ou plus.` : `Faire au moins 5 vocalises du jour (cette semaine : ${st.dailyDone}).`);
    weaknesses.slice(0, 2).forEach(w => objectives.push(`Relire la leçon « ${LESSON[w.t].name} » puis viser 80 % sur ce temps (actuellement ${w.n >= 2 ? w.acc : w.end} %).`));
    if (mistakes.length) objectives.push(`Lancer la « Révision de mes erreurs » pour corriger les ${Object.values(S.mistakes).filter(m => !m.fixed).length} erreurs en attente.`);
    if (st.acc && st.acc < 70) objectives.push('Ralentir : relire la question et chercher le mot-repère (since, ago, yet, now…) avant de répondre.');
    return { wk, end, final, st, prev, rows, strengths, weaknesses, mistakes, avgStart, avgEnd, delta, verdict, objectives };
  }
  function allWeeks() {
    const first = weekStart(S.profile.createdAt || today());
    const out = []; let w = first; const cur = weekStart(today());
    while (w <= cur) { out.push(w); w = addDays(w, 7); }
    return out.reverse();
  }
  function unseenFinalReports() {
    const cur = weekStart(today());
    return allWeeks().filter(w => w < cur && !S.reportsSeen[w] && weekStats(w).answered > 0);
  }

  /* ---------------- UI : toasts, confettis, modale ---------------- */
  function toast(icon, title, text) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="ti">${icon}</span><div><b>${esc(title)}</b>${text ? `<span class="mid">${esc(text)}</span>` : ''}</div>`;
    document.getElementById('toasts').appendChild(el);
    setTimeout(() => { el.style.transition = 'opacity .3s'; el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 3800);
  }
  function confetti(n = 80) {
    const colors = ['#c9a96e', '#efe6d6', '#d9c9a3', '#c9a96e', '#b08d57', '#d8c08a'];
    for (let i = 0; i < n; i++) {
      const c = document.createElement('div'); c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw'; c.style.background = colors[i % colors.length];
      c.style.animationDuration = 1.8 + Math.random() * 1.8 + 's'; c.style.animationDelay = Math.random() * .4 + 's';
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(c); setTimeout(() => c.remove(), 4200);
    }
  }
  function xpPop(n, el) {
    if (!el) return; const r = el.getBoundingClientRect();
    const p = document.createElement('div'); p.className = 'xp-pop'; p.textContent = `+${n} ★`;
    p.style.left = r.left + r.width / 2 - 30 + 'px'; p.style.top = r.top - 10 + 'px';
    document.body.appendChild(p); setTimeout(() => p.remove(), 1000);
  }
  function modal(html, cls = '') {
    const root = document.getElementById('modal-root');
    root.innerHTML = `<div class="modal-backdrop" data-act="closeModal"><div class="modal ${cls}">${html}</div></div>`;
  }
  /* Récompense d'une quête hebdomadaire : l'air de la Reine de la Nuit (Diana Damrau, Royal Opera House) */
  const QUEEN_VIDEO = 'YuBeBjqKSGQ';
  function playQueenOfTheNight(questTitle) {
    const watch = `https://www.youtube.com/watch?v=${QUEEN_VIDEO}`;
    modal(`<div class="row between"><span class="eyebrow-sm">Quête accomplie · ${esc(questTitle)}</span><button class="btn btn-ghost btn-sm" data-act="closeModal" aria-label="Fermer">${I('x')}</button></div>
      <h3 class="display-sm mt-8">Brava, Elise ! La Reine de la Nuit chante pour toi.</h3>
      <p class="body-sm mute mt-8">« Der Hölle Rache » — Mozart, <i>La Flûte enchantée</i> · Diana Damrau, Royal Opera House.</p>
      <div class="video-frame mt-16"><iframe src="https://www.youtube-nocookie.com/embed/${QUEEN_VIDEO}?autoplay=1&rel=0&modestbranding=1" title="La Reine de la Nuit — Der Hölle Rache" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
      <div class="row between wrap mt-16"><span class="caption mute">La vidéo ne s'affiche pas ? Ouvre-la directement sur YouTube.</span><a class="btn btn-secondary btn-sm" href="${watch}" target="_blank" rel="noopener">Ouvrir sur YouTube</a></div>`, 'modal-video');
  }
  function closeModal() { document.getElementById('modal-root').innerHTML = ''; }

  /* ---------------- Synthèse vocale ---------------- */
  function say(text) {
    if (!('speechSynthesis' in window)) { toast('🔇', 'Synthèse vocale indisponible', 'Ton navigateur ne la prend pas en charge.'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    u.voice = voices.find(v => v.lang === 'en-GB') || voices.find(v => v.lang.startsWith('en')) || null;
    u.lang = 'en-GB'; u.rate = 0.92;
    speechSynthesis.speak(u);
  }
  const speakBtn = text => `<button class="speak" data-say="${esc(text)}" title="Écouter">${I('volume')}</button>`;

  /* ---------------- Composants ---------------- */
  const groupOf = t => GROUPS[LESSON[t].group];
  const tenseTag = t => `<span class="tag ${groupOf(t).color}"><span class="dot" style="background:${groupOf(t).hex}"></span>${esc(LESSON[t].name)}</span>`;
  const bar = (v, cls = '', marker = null, color = null) => `<div class="bar ${cls}"><span style="width:${clamp(v, 0, 100)}%;${color ? `background:${color}` : ''}"></span>${marker !== null ? `<i class="marker" style="left:${clamp(marker, 0, 100)}%"></i>` : ''}</div>`;
  const deltaHtml = (d, unit = ' pts') => d > 0 ? `<span class="up">▲ +${d}${unit}</span>` : d < 0 ? `<span class="down">▼ ${d}${unit}</span>` : `<span class="mute">= 0${unit}</span>`;

  function ring(v, size = 132, color = '#efe6d6', label = null) {
    const r = 54, c = 2 * Math.PI * r, off = c * (1 - clamp(v, 0, 100) / 100);
    return `<svg class="ring" viewBox="0 0 132 132" style="width:${size}px;height:${size}px">
      <circle cx="66" cy="66" r="${r}" fill="none" stroke="#2a221c" stroke-width="10"/>
      <circle cx="66" cy="66" r="${r}" fill="none" stroke="${color}" stroke-width="10" stroke-linecap="round"
        stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 66 66)" style="transition:stroke-dashoffset .8s"/>
      <text x="66" y="72" text-anchor="middle" class="ring-label">${label ?? v + '%'}</text></svg>`;
  }

  function timelineSvg(lesson) {
    const col = GROUPS[lesson.group].hex;
    const X = x => 40 + (x + 1) / 2 * 520, y = 62;
    let s = `<svg viewBox="0 0 600 130" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#8f8475"/></marker></defs>
      <line x1="20" y1="${y}" x2="582" y2="${y}" stroke="#8f8475" stroke-width="1.5" marker-end="url(#ah)"/>
      <text x="22" y="${y + 52}" font-family="Raleway" font-size="11" letter-spacing="1.2" fill="#8f8475">PASSÉ</text>
      <text x="578" y="${y + 52}" font-family="Raleway" font-size="11" letter-spacing="1.2" fill="#8f8475" text-anchor="end">FUTUR</text>`;
    lesson.tl.forEach(it => {
      if (it.k === 'ref') {
        const isNow = it.label === 'now';
        s += `<line x1="${X(it.x)}" y1="${y - 40}" x2="${X(it.x)}" y2="${y + 22}" stroke="${isNow ? '#efe6d6' : '#5e554a'}" stroke-width="${isNow ? 1.5 : 1}" stroke-dasharray="${isNow ? '0' : '4 4'}"/>
          <text x="${X(it.x)}" y="${y + 38}" text-anchor="middle" font-family="Raleway" font-size="12" font-weight="500" fill="${isNow ? '#efe6d6' : '#b3a998'}">${isNow ? 'MAINTENANT' : esc(it.label)}</text>`;
      }
    });
    lesson.tl.forEach(it => {
      if (it.k === 'span') s += `<rect x="${X(it.a)}" y="${y - 7}" width="${X(it.b) - X(it.a)}" height="14" rx="3" fill="${col}" opacity=".28"/>`;
      if (it.k === 'wave') {
        let d = `M${X(it.a)},${y}`; const x0 = X(it.a), x1 = X(it.b);
        for (let x = x0; x <= x1; x += 2) d += ` L${x.toFixed(1)},${(y + Math.sin((x - x0) / 7) * 9).toFixed(1)}`;
        s += `<path d="${d}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`;
      }
    });
    lesson.tl.forEach(it => { if (it.k === 'dot') s += `<circle cx="${X(it.x)}" cy="${y}" r="8" fill="${col}" stroke="#14100d" stroke-width="2.5"/>`; });
    return s + '</svg>';
  }

  function lineChart(points, opts = {}) {
    const W = 640, H = opts.h || 220, L = 36, R = 14, T = 14, B = 28;
    const color = opts.color || '#d9c9a3';
    if (points.length < 2) return `<div class="empty">Pas encore assez de données. Reviens après quelques jours d'entraînement.</div>`;
    const xs = i => L + i * (W - L - R) / (points.length - 1);
    const ys = v => T + (1 - v / 100) * (H - T - B);
    let g = '';
    [0, 25, 50, 75, 100].forEach(v => { g += `<line x1="${L}" x2="${W - R}" y1="${ys(v)}" y2="${ys(v)}" stroke="#2a221c"/><text x="${L - 8}" y="${ys(v) + 4}" text-anchor="end">${v}</text>`; });
    const d = points.map((p, i) => `${i ? 'L' : 'M'}${xs(i).toFixed(1)},${ys(p.y).toFixed(1)}`).join(' ');
    const area = `${d} L${xs(points.length - 1)},${ys(0)} L${xs(0)},${ys(0)} Z`;
    const idx = [0, Math.floor((points.length - 1) / 2), points.length - 1].filter((v, i, a) => a.indexOf(v) === i);
    const labels = idx.map(i => `<text x="${xs(i)}" y="${H - 8}" text-anchor="${i === 0 ? 'start' : i === points.length - 1 ? 'end' : 'middle'}">${esc(points[i].label)}</text>`).join('');
    let base = '';
    if (opts.base != null) base = `<line x1="${L}" x2="${W - R}" y1="${ys(opts.base)}" y2="${ys(opts.base)}" stroke="#8f8475" stroke-dasharray="5 5"/><text x="${W - R}" y="${ys(opts.base) - 6}" text-anchor="end">départ ${opts.base}%</text>`;
    const dots = points.map((p, i) => `<circle cx="${xs(i)}" cy="${ys(p.y)}" r="${points.length > 40 ? 0 : 3.5}" fill="#14100d" stroke="${color}" stroke-width="2"><title>${esc(p.label)} : ${p.y}%</title></circle>`).join('');
    return `<div class="chart"><svg viewBox="0 0 ${W} ${H}">
      <defs><linearGradient id="lg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".18"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
      ${g}${base}<path d="${area}" fill="url(#lg)"/><path d="${d}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/>${dots}${labels}</svg></div>`;
  }
  function barChart(items, opts = {}) {
    const W = 640, H = opts.h || 200, L = 36, R = 8, T = 10, B = 26;
    const max = Math.max(opts.min || 50, ...items.map(i => i.v));
    const bw = (W - L - R) / items.length;
    let s = '';
    [0, .5, 1].forEach(f => { const y = T + (1 - f) * (H - T - B); s += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" stroke="#2a221c"/><text x="${L - 8}" y="${y + 4}" text-anchor="end">${Math.round(max * f)}</text>`; });
    items.forEach((it, i) => {
      const h = (it.v / max) * (H - T - B), x = L + i * bw + bw * 0.18, y = H - B - h;
      s += `<rect x="${x}" y="${y}" width="${bw * 0.64}" height="${Math.max(h, it.v ? 2 : 0)}" rx="2" fill="${it.hi ? '#efe6d6' : (opts.color || '#d9c9a3')}"><title>${esc(it.label)} : ${it.v} ★</title></rect>`;
      if (items.length <= 14 || i % Math.ceil(items.length / 10) === 0) s += `<text x="${x + bw * 0.32}" y="${H - 8}" text-anchor="middle">${esc(it.short || it.label)}</text>`;
    });
    return `<div class="chart"><svg viewBox="0 0 ${W} ${H}">${s}</svg></div>`;
  }
  function heatmap(weeks = 20) {
    const t0 = today(); const start = addDays(weekStart(t0), -7 * (weeks - 1));
    let h = '';
    for (let i = 0; i < weeks * 7; i++) {
      const d = addDays(start, i); if (d > t0) { h += '<i style="visibility:hidden"></i>'; continue; }
      const xp = S.xpLog[d] || 0; const l = xp === 0 ? '' : xp < 60 ? 'l1' : xp < 140 ? 'l2' : xp < 250 ? 'l3' : 'l4';
      h += `<i class="${l} ${d === t0 ? 'today' : ''}" title="${fmt(d)} : ${xp} ★"></i>`;
    }
    return `<div class="heatmap">${h}</div>`;
  }
  function weekStrip(wk = weekStart(today())) {
    const names = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    return `<div class="week-days">${names.map((n, i) => {
      const d = addDays(wk, i), dl = S.daily[d];
      const st = dayFull(dl) ? 'done' : (dl?.res?.length || dl?.vocab?.res?.length ? 'partial' : '');
      return `<div class="week-day ${st} ${d === today() ? 'today' : ''}"><div class="d">${n}</div><div class="s">${dayFull(dl) ? I('check') : ''}</div></div>`;
    }).join('')}</div>`;
  }

  const NOTES = ['do', 'ré', 'mi', 'fa', 'sol', 'la', 'si'];
  /* Portée « Encre et ivoire » : la gamme monte jusqu'au contre-fa (fa⁶) */
  const INK = { paper: '#f5efe2', line: '#8c7f6a', done: '#1d1a16', next: '#8b1e2d', rest: '#c4b8a2', top: '#8b1e2d', sub: '#7a6e5c' };
  function noteName(k, total) {
    const idx = 3 + 6 * 7 - (total - 1 - k);
    return NOTES[((idx % 7) + 7) % 7] + (k === total - 1 ? '⁶' : '');
  }
  function staffSvg(done, total, compact = false) {
    const c = INK, W = compact ? 760 : Math.max(304, 84 + total * 18), x0 = 64, x1 = W - 14, yBottom = 84, yTop = 22;
    const step = total > 1 ? (x1 - x0) / (total - 1) : 0;
    let s = '';
    for (let i = 0; i < 5; i++) s += `<line x1="8" x2="${W - 8}" y1="${30 + i * 12}" y2="${30 + i * 12}" stroke="${c.line}" stroke-width="0.9"/>`;
    s += `<line x1="8" x2="8" y1="30" y2="78" stroke="${c.line}" stroke-width="1.2"/><line x1="${W - 8}" x2="${W - 8}" y1="30" y2="78" stroke="${c.line}" stroke-width="2.4"/><line x1="${W - 12}" x2="${W - 12}" y1="30" y2="78" stroke="${c.line}" stroke-width="0.9"/>`;
    s += `<text x="12" y="81" font-size="60" fill="${c.done}" font-family="'Noto Music','Apple Symbols','Segoe UI Symbol',serif">𝄞</text>`;
    const showNames = !compact && total <= 12;
    for (let i = 0; i < total; i++) {
      const x = x0 + i * step, y = yBottom - (total > 1 ? i * (yBottom - yTop) / (total - 1) : 0);
      const isDone = i < done, isNext = i === done, isTop = i === total - 1;
      if (y < 30) for (let ly = 18; ly >= y - 1; ly -= 12) s += `<line x1="${x - 9}" x2="${x + 9}" y1="${ly}" y2="${ly}" stroke="${c.line}" stroke-width="0.9"/>`;
      if (y > 78) for (let ly = 90; ly <= y + 1; ly += 12) s += `<line x1="${x - 9}" x2="${x + 9}" y1="${ly}" y2="${ly}" stroke="${c.line}" stroke-width="0.9"/>`;
      const col = isDone ? (isTop ? c.top : c.done) : (isNext ? c.next : c.rest);
      s += `<ellipse cx="${x}" cy="${y}" rx="6.6" ry="4.8" transform="rotate(-20 ${x} ${y})" fill="${isDone ? col : c.paper}" stroke="${col}" stroke-width="${isNext ? 2 : 1.4}"/>`;
      s += y < 54 ? `<line x1="${x - 6}" x2="${x - 6}" y1="${y}" y2="${y + 26}" stroke="${col}" stroke-width="1.2"/>` : `<line x1="${x + 6}" x2="${x + 6}" y1="${y}" y2="${y - 26}" stroke="${col}" stroke-width="1.2"/>`;
      if (isTop) s += `<path d="M${x - 9} ${y - 32} q9 -11 18 0" fill="none" stroke="${c.top}" stroke-width="1.4"/><circle cx="${x}" cy="${y - 34}" r="1.6" fill="${c.top}"/>`;
      if (showNames && (isDone || isNext || isTop)) s += `<text x="${x}" y="114" text-anchor="middle" font-size="10.5" font-family="Raleway,sans-serif" fill="${isNext || isTop ? c.next : c.sub}">${noteName(i, total)}</text>`;
    }
    return `<svg viewBox="0 0 ${W} ${compact ? 96 : 120}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${done} notes sur ${total}">${s}</svg>`;
  }
  function vocalise(done, total) {
    return `<div class="partition" title="${done} / ${total} notes">${staffSvg(done, total)}</div>`;
  }
  /* Maîtrise d'un temps : 5 notes (1 note = 20 %) */
  function noteRating(v, base = null) {
    const n = Math.round(clamp(v, 0, 100) / 20), b = base == null ? null : Math.round(clamp(base, 0, 100) / 20);
    let h = '';
    for (let i = 0; i < 5; i++) h += `<span class="rn ${i < n ? 'on' : ''} ${b !== null && i === b - 1 ? 'base' : ''}">♪</span>`;
    return `<span class="note-rating" title="${v} %${base != null ? ` · départ ${base} %` : ''}">${h}</span>`;
  }

  /* ---------------- Shell ---------------- */
  const NAV = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'home' },
    { id: 'daily', label: 'Vocalise du jour', icon: 'target' },
    { id: 'vocab', label: 'Vocabulaire du jour', icon: 'notebook' },
    { id: 'lessons', label: 'Leçons', icon: 'book' },
    { id: 'practice', label: 'Entraînement', icon: 'dumbbell' },
    { id: 'dictionary', label: 'Dictionnaire', icon: 'search' },
    { sep: 'Suivi' },
    { id: 'progress', label: 'Progression', icon: 'chart' },
    { id: 'reports', label: 'Critiques', icon: 'report' },
    { id: 'rewards', label: 'Récompenses', icon: 'trophy' },
    { id: 'settings', label: 'Réglages', icon: 'settings' },
  ];
  function shell(content, active, title) {
    const lv = levelInfo(), d = getDaily();
    const unseen = unseenFinalReports().length;
    const navActive = { lesson: 'lessons', compare: 'lessons', report: 'reports' }[active] || active;
    return `<div class="app">
      <aside class="sidebar" id="sidebar">
        <div class="brand brand-medal" data-go="#/dashboard"><span class="logo-medal"><img src="assets/logo-reine.webp" alt="La Reine des Temps"></span><div class="brand-sub">Les vocalises d'Elise</div></div>
        ${NAV.map(n => n.sep ? `<div class="nav-section eyebrow-sm">${n.sep}</div>` :
          `<button class="nav-row ${navActive === n.id ? 'active' : ''}" data-go="#/${n.id}">${n.label}
            ${n.id === 'daily' && !d.done ? `<span class="nav-badge tag dark">${d.res.length}/${d.qids.length}</span>` : ''}
            ${n.id === 'daily' && d.done ? `<span class="nav-badge tag green">${I('check', 'style="width:12px;height:12px"')}</span>` : ''}
            ${n.id === 'vocab' && d.vocab && !d.vocab.done ? `<span class="nav-badge tag dark">${d.vocab.res.length}/${d.vocab.items.length}</span>` : ''}
            ${n.id === 'vocab' && d.vocab && d.vocab.done ? `<span class="nav-badge tag green">${I('check', 'style="width:12px;height:12px"')}</span>` : ''}
            ${n.id === 'reports' && unseen ? `<span class="nav-badge tag pink">Nouveau</span>` : ''}
          </button>`).join('')}
        <div class="sidebar-foot">
          <div class="card tight" style="padding:16px">
            <div class="row"><div class="icon-circle dark" style="width:36px;height:36px;font:600 14px Raleway">${esc((S.profile.name || '?')[0].toUpperCase())}</div>
            <div><div class="body-sm-strong ink">${esc(S.profile.name || 'Apprenant')}</div><div class="caption mute">Niv. ${lv.L} · ${lv.title}</div></div></div>
          </div>
        </div>
      </aside>
      <div class="main">
        <header class="topbar">
          <button class="btn btn-ghost menu-btn" data-act="toggleMenu" aria-label="Menu">${I('menu')}</button>
          <div class="topbar-title hide-sm">${esc(title || '')}</div>
          <div class="topbar-spacer"></div>
          <span class="stat-chip" title="Nuits consécutives">${I('moon', 'style="color:#efe6d6"')}${S.streak.current}<span class="mute hide-sm">nuit${S.streak.current > 1 ? 's' : ''}</span>${S.streak.freezes ? `<span class="mute hide-sm" title="Doublures">· ${S.streak.freezes} doubl.</span>` : ''}</span>
          <span class="stat-chip" title="Étoiles gagnées">${I('star', 'style="color:#c9a96e"')}${S.xp.toLocaleString('fr-FR')} <span class="mute">★</span></span>
          <span class="stat-chip level-chip hide-sm" title="${lv.next - S.xp} ★ avant le niveau ${lv.L + 1}">Niv. ${lv.L}${bar(lv.pct * 100)}</span>
        </header>
        <main class="page ${animNow ? 'fade-in' : ''}">${content}</main>
      </div>
    </div>`;
  }

  /* ==========================================================
     VUES
     ========================================================== */

  /* ---------- Onboarding ---------- */
  function viewOnboarding() {
    return {
      full: true, html: `<div class="onboard">
      <div class="onboard-left">
        <span class="logo-medal lg"><img src="assets/logo-reine.webp" alt="La Reine des Temps"></span>

        <div class="stack mt-32" style="max-width:440px">
          <label class="field">Ton prénom<input class="input" id="ob-name" placeholder="Elise" value="${esc(S.profile.name)}" autocomplete="off"></label>
          <label class="field">Objectif quotidien
            <div class="segmented" id="ob-goal">${[10, 15, 20, 25].map(g => `<button type="button" data-g="${g}" class="${S.profile.dailyMinutes === g ? 'on' : ''}">${g} min</button>`).join('')}</div>
            <span class="caption mute">Temps consacré aux temps verbaux, + ${S.profile.vocabMinutes} min de vocabulaire.</span>
          </label>
          <div class="callout mt-8"><div class="body-sm-strong ink">Étape suivante : le test de positionnement</div><div class="body-sm mid">26 questions (2 par temps) pour mesurer ton point de départ. Toute ta progression sera calculée à partir de ce test.</div></div>
          <div class="row wrap mt-8">
            <button class="btn btn-primary btn-lg" data-act="startDiag">Commencer le test ${I('arrowR')}</button>
            <button class="btn btn-ghost" data-act="skipDiag">Passer pour l'instant</button>
          </div>
        </div>
      </div>
      <div class="onboard-right">
        <div class="eyebrow" style="color:#b3a998">Ce qui t'attend</div>
        ${[['purple', 'book', '13 leçons détaillées', 'Formation, emplois, mots-repères, pièges et règles pour chaque temps.'],
          ['blue', 'target', 'Vocalise du jour', 'Une vocalise adaptée à tes points faibles, renouvelée chaque jour.'],
          ['pink', 'trophy', 'Étoiles, bouquets et rôles', 'Gagne des étoiles, reçois des bouquets, débloque des rôles.'],
          ['orange', 'report', 'Une critique chaque semaine', 'Tes progrès, ce qui va bien et ce qu\'il faut travailler.'],
          ['green', 'search', 'Dictionnaire intégré', 'Verbes irréguliers, faux amis, carnet de vocabulaire.']].map(([c, ic, t, p]) =>
          `<div class="onboard-feature"><div class="sq cat-${c}">${I(ic)}</div><div><h4>${t}</h4><p>${p}</p></div></div>`).join('')}
      </div></div>`,
      mount() {
        document.querySelectorAll('#ob-goal button').forEach(b => b.onclick = () => {
          document.querySelectorAll('#ob-goal button').forEach(x => x.classList.remove('on')); b.classList.add('on');
          S.profile.dailyMinutes = +b.dataset.g;
        });
        const n = document.getElementById('ob-name'); n.focus();
        n.oninput = () => { S.profile.name = n.value.trim(); };
      },
    };
  }

  /* ---------- Tableau de bord ---------- */
  function viewDashboard() {
    const d = getDaily(), lv = levelInfo();
    const avg = avgMastery(), base = baselineAvg();
    const wk = weekStart(today()), ws = weekStats(wk), wst = weekState(wk);
    const qDone = QUESTS.filter(q => q.val(ws) >= q.goal).length;
    const hour = new Date().getHours();
    const hello = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';
    const weak = weakest(3);
    const lastReport = unseenFinalReports()[0];
    const progressDaily = pct(d.res.length, d.qids.length);
    const lvl = estLevel(avg);
    return `
      ${!S.diagnostic ? `<div class="card featured mb-24" style="margin-bottom:24px;display:flex;gap:16px;align-items:center;flex-wrap:wrap"><div class="icon-circle">${I('alert')}</div><div style="flex:1;min-width:220px"><div class="strong">Tu n'as pas encore passé le test de positionnement</div><div class="body-sm mid">Il fixe ton point de départ pour mesurer précisément tes progrès.</div></div><button class="btn btn-primary" data-act="startDiag">Passer le test</button></div>` : ''}
      ${lastReport ? `<div class="cat-card cat-pink" style="margin-bottom:24px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:22px 28px"><div style="font-size:28px">📊</div><div style="flex:1;min-width:220px"><div class="eyebrow">Nouveau</div><div style="font:500 18px/26px Raleway">La critique de ta semaine du ${fmt(lastReport)} est parue.</div></div><button class="btn btn-inverse" data-go="#/report/${lastReport}">Lire la critique ${I('arrowR')}</button></div>` : ''}
      <section class="hero">
        <div class="card dark hero-main"><div class="moon-deco"></div>
          <span class="eyebrow">${fmtLong(today())}</span>
          <h1>${hello}${S.profile.name ? ', ' + esc(S.profile.name) : ''}.</h1>
          <p class="mt-12" style="color:#d6cfc2;max-width:480px">${dayFull(d) ? "Journée complète : temps et vocabulaire. Brava ! Tu peux continuer avec l'entraînement libre." : d.done ? `Partie 1 terminée. Il reste environ ${S.profile.vocabMinutes} minutes de vocabulaire.` : d.res.length ? `Tu as commencé ta vocalise du jour : il te reste ${d.qids.length - d.res.length} questions.` : `Programme du jour : environ ${S.profile.dailyMinutes} min sur les temps (${d.qids.length} questions, surtout ${d.focus.map(t => LESSON[t].name).slice(0, 2).join(' et ')}) puis ${S.profile.vocabMinutes} min de vocabulaire.`}</p>
          <div style="margin-top:auto;padding-top:28px">
            ${vocalise(d.res.length, d.qids.length)}
            <div class="row between" style="margin:8px 0 18px"><span class="body-sm" style="color:#b3a998">${d.res.length} / ${d.qids.length} notes · objectif : le contre-fa</span>${d.done ? '<span class="tag" style="color:#c9a96e;border-color:#c9a96e">Contre-fa atteint ✨</span>' : ''}</div>
            ${dayParts(d)}
            <div class="row wrap mt-16">
              ${dayFull(d) ? (d.chest ? `<button class="btn btn-inverse btn-lg" data-go="#/practice">S'entraîner encore ${I('arrowR')}</button>` : `<button class="btn btn-inverse btn-lg" data-act="openDailyChest">${I('gift')} Recevoir le bouquet du soir</button>`)
                : d.done ? `<button class="btn btn-inverse btn-lg" data-go="#/vocab">Vocabulaire du jour ${I('arrowR')}</button>`
                : `<button class="btn btn-inverse btn-lg" data-act="startDaily">${d.res.length ? 'Reprendre la vocalise' : 'Monter la gamme'} ${I('arrowR')}</button>`}
            </div>
          </div>
        </div>
        <div class="card featured">
          <div class="card-title"><h3>Ta maîtrise des temps</h3><button class="link-arrow" data-go="#/progress">Détails</button></div>
          <div class="ring-wrap">${ring(avg, 132, '#d9c9a3')}
            <div class="stack" style="gap:8px">
              <div><span class="eyebrow-sm">Tessiture estimée</span><div class="display-xs ink"><span class="num">${lvl.code}</span> · ${lvl.label}</div></div>
              <div class="body-sm mid">Départ : <b class="ink">${base}%</b></div>
              <div class="caption">${deltaHtml(avg - base)} depuis le début</div>
            </div>
          </div>
          <hr class="divider" style="margin:22px 0">
          <div class="row between"><span class="body-sm-strong ink">Niveau ${lv.L} · ${lv.title}</span><span class="caption mute">${S.xp - lv.cur} / ${lv.next - lv.cur} ★</span></div>
          <div class="mt-8">${bar(lv.pct * 100)}</div>
        </div>
      </section>

      <section class="grid grid-4 mt-24">
        <div class="card kpi"><div class="row between"><span class="eyebrow-sm">Nuits en scène</span>${I('moon', 'style="width:18px;color:#efe6d6"')}</div><div class="kpi-value mt-12">${S.streak.current} nuit${S.streak.current > 1 ? 's' : ''}</div><div class="kpi-label body-sm mute">Record : ${S.streak.best} · ${S.streak.freezes} doublure${S.streak.freezes > 1 ? 's' : ''}</div></div>
        <div class="card kpi"><div class="row between"><span class="eyebrow-sm">Étoiles (semaine)</span>${I('star', 'style="width:18px;color:#c9a96e"')}</div><div class="kpi-value mt-12">${ws.xp}</div><div class="kpi-label body-sm mute">Total : ${S.xp.toLocaleString('fr-FR')} ★</div></div>
        <div class="card kpi"><div class="row between"><span class="eyebrow-sm">Réussite (7 j)</span>${I('target', 'style="width:18px;color:#d8c08a"')}</div><div class="kpi-value mt-12">${ws.answered ? ws.acc + '%' : '—'}</div><div class="kpi-label body-sm mute">${ws.answered} réponses cette semaine</div></div>
        <div class="card kpi"><div class="row between"><span class="eyebrow-sm">Quêtes hebdo</span>${I('trophy', 'style="width:18px;color:#c9a96e"')}</div><div class="kpi-value mt-12">${qDone}/${QUESTS.length}</div><div class="kpi-label body-sm mute">${wst.chest ? 'Grand bouquet reçu ✓' : 'Grand bouquet : 250 ★'}</div></div>
      </section>

      <section class="grid grid-2 mt-24">
        <div class="card">
          <div class="card-title"><h3>Cette semaine</h3><button class="link-arrow" data-go="#/rewards">Quêtes</button></div>
          ${weekStrip()}
          <div class="stack mt-24" style="gap:0">
            ${QUESTS.slice(0, 3).map(q => questRow(q, ws, wst, true)).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-title"><h3>À travailler en priorité</h3><button class="link-arrow" data-go="#/lessons">Toutes les leçons</button></div>
          <div class="stack" style="gap:0">
          ${weak.map(t => `<div class="tense-row" style="grid-template-columns:minmax(0,1fr) auto auto;cursor:pointer" data-go="#/lesson/${t}">
              <div><div class="name">${tenseTag(t)}</div><div class="body-sm mute mt-8">${esc(LESSON[t].fr)} · ${answeredCount(t)} réponses</div></div>
              <div>${noteRating(mastery(t), baseline(t))}</div>
              <div class="val">${mastery(t)}%</div></div>`).join('')}
          </div>
          <div class="row wrap mt-24"><button class="btn btn-secondary btn-sm" data-act="practiceWeak">${I('dumbbell')} S'entraîner sur ces 3 temps</button></div>
        </div>
      </section>`;
  }
  function dayParts(d) {
    const v = d.vocab || { items: [], res: [] };
    const part = (n, title, mins, done, cur, tot, go) => `<div class="day-part ${done ? 'done' : ''}" data-go="${go}">
      <div class="icon-circle" style="width:34px;height:34px">${done ? I('check') : `<span class="num" style="font-size:13px">${n}</span>`}</div>
      <div style="flex:1;min-width:0"><div class="body-sm-strong ink">${title}</div><div class="caption mute">≈ ${mins} min · ${cur}/${tot}</div></div></div>`;
    return `<div class="day-parts">${part(1, 'Les temps', S.profile.dailyMinutes, d.done, d.res.length, d.qids.length, '#/daily')}${part(2, 'Vocabulaire', S.profile.vocabMinutes, v.done, v.res.length, v.items.length, '#/vocab')}</div>`;
  }
  function questRow(q, ws, wst, compact) {
    const v = q.val(ws), done = v >= q.goal, claimed = wst.claimed[q.id];
    return `<div class="quest ${claimed ? 'done' : ''}">
      <div class="icon-circle">${I(claimed ? 'check' : q.icon)}</div>
      <div><div class="body-sm-strong ink">${q.title}</div><div class="row mt-8" style="gap:10px"><div style="flex:1;max-width:260px">${bar(pct(Math.min(v, q.goal), q.goal))}</div><span class="caption mute">${Math.min(v, q.goal)}${q.unit || ''} / ${q.goal}${q.unit || ''}</span></div></div>
      <div>${claimed ? `<span class="tag green">+${q.xp} ★</span>` : done ? `<button class="btn btn-primary btn-sm" data-act="claimQuest" data-q="${q.id}">Récupérer ${q.xp} ★</button>` : `<span class="tag">${q.xp} ★</span>`}</div>
    </div>`;
  }

  /* ---------- Exercices du jour ---------- */
  function viewDaily() {
    const d = getDaily(); const ok = d.res.filter(Boolean).length;
    const recent = Array.from({ length: 7 }, (_, i) => addDays(today(), -i));
    return `
      <div class="page-head"><div class="grow"><span class="eyebrow">${fmtLong(today())}</span><h1 class="display-lg">Vocalise du jour</h1>
        <p class="lead">Chaque jour : environ ${S.profile.dailyMinutes} minutes sur les temps (tes 3 temps les plus faibles, tes erreurs passées, une révision générale), puis ${S.profile.vocabMinutes} minutes de vocabulaire. La journée est validée quand les deux parties sont terminées.</p></div></div>
      <div class="grid grid-3">
        <div class="card dark hero-main span-2" style="padding:36px;min-height:280px;display:flex;flex-direction:column"><div class="moon-deco"></div>
          <span class="eyebrow">Vocalise du ${fmt(today(), { day: 'numeric', month: 'long' })}</span>
          <h2 class="display-md" style="margin-top:10px">${d.done ? 'Partie 1 terminée ✓' : `${d.qids.length} questions · environ ${Math.round((d.est || d.qids.length * 40) / 60)} min`}</h2>
          <div class="row wrap mt-16">${d.focus.map(t => `<span class="tag" style="background:rgba(201,169,110,.08);color:#efe6d6;border-color:rgba(201,169,110,.35)">${esc(LESSON[t].name)}</span>`).join('')}</div>
          <div class="mt-24">${vocalise(d.res.length, d.qids.length)}</div>
          <div style="margin-top:auto;padding-top:20px" class="row wrap">
            ${d.done ? `<div style="font:500 18px Raleway">${ok}/${d.qids.length} bonnes réponses${d.perfect ? ' · 💎 Sans faute !' : ''}</div>
              ${dayFull(d) ? (!d.chest ? `<button class="btn btn-inverse" data-act="openDailyChest">${I('gift')} Recevoir le bouquet du soir</button>` : `<button class="btn btn-inverse" data-go="#/practice">Continuer à s'entraîner</button>`) : `<button class="btn btn-inverse" data-go="#/vocab">Partie 2 · Vocabulaire ${I('arrowR')}</button>`}`
              : `<button class="btn btn-inverse btn-lg" data-act="startDaily">${d.res.length ? `Reprendre (${d.res.length}/${d.qids.length})` : 'Commencer'} ${I('arrowR')}</button>`}
          </div>
        </div>
        <div class="card">
          <div class="card-title"><h3>Récompenses du jour</h3></div>
          <div class="stack" style="gap:14px">
            ${[['star', '10 ★', 'par bonne réponse (+2 par combo)'], ['music', '+50 ★', 'partie 1 terminée'], ['notebook', '4 ★ / mot · +30 ★', 'vocabulaire du jour'], ['gem', '+30 ★', 'bonus sans faute'], ['gift', 'Bouquet', 'étoiles bonus ou doublure'], ['moon', 'Nuits en scène', 'bonus à 3, 7, 14, 30 nuits']].map(([e, a, b]) => `<div class="row"><div class="icon-circle">${I(e)}</div><div><div class="body-sm-strong ink">${a}</div><div class="body-sm mute">${b}</div></div></div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card mt-24">
        <div class="card-title"><h3>Ta semaine</h3><span class="caption mute">5 vocalises = quête hebdo validée</span></div>
        ${weekStrip()}
      </div>
      <div class="card mt-24">
        <div class="card-title"><h3>Historique des 7 derniers jours</h3></div>
        <div class="table-scroll"><table class="data-table" style="width:100%;border-collapse:collapse;min-width:480px">
          <tr><th style="text-align:left" class="caption mute">Jour</th><th style="text-align:left" class="caption mute">Statut</th><th style="text-align:left" class="caption mute">Score</th><th style="text-align:left" class="caption mute">★</th></tr>
          ${recent.map(day => { const x = S.daily[day]; const sc = x ? x.res.filter(Boolean).length : 0;
            return `<tr style="border-top:1px solid #2a221c"><td style="padding:12px 0" class="body-sm ink">${fmtLong(day)}</td><td class="body-sm">${x?.done ? '<span class="tag green">Terminée</span>' : x?.res?.length ? '<span class="tag orange">Incomplète</span>' : '<span class="tag">—</span>'}</td><td class="body-sm">${x?.res?.length ? `${sc}/${x.res.length}` : '—'}</td><td class="body-sm">${S.xpLog[day] || 0}</td></tr>`; }).join('')}
        </table></div>
      </div>`;
  }

  /* ---------- Vocabulaire du jour ---------- */
  function viewVocab() {
    const d = getDaily(), v = d.vocab, pool = vocabPool();
    const byKey = Object.fromEntries(pool.map(x => [x.key, x]));
    const news = v.news.map(k => byKey[k]).filter(Boolean);
    const reviews = v.items.filter(it => !v.news.includes(it.key)).length;
    const learned = Object.values(S.vocab);
    const acquired = learned.filter(x => x.box >= 4).length, inProgress = learned.length - acquired;
    const ok = v.res.filter(Boolean).length;
    return `<div class="page-head"><div class="grow"><span class="eyebrow">${fmtLong(today())} · Partie 2</span><h1 class="display-lg">Vocabulaire du jour</h1>
      <p class="lead">Environ ${S.profile.vocabMinutes} minutes : découvre ${news.length} nouveaux mots, puis entraîne-toi sur ces mots et sur ceux qui reviennent en révision (répétition espacée : un mot bien su revient de plus en plus tard).</p></div></div>
      <div class="grid grid-3">
        <div class="card dark hero-main span-2" style="padding:32px;min-height:0"><div class="moon-deco" style="width:56px;height:56px"></div>
          <span class="eyebrow">${v.done ? 'Terminé' : v.res.length ? 'En cours' : 'Prêt'}</span>
          <h2 class="display-md" style="margin-top:8px">${v.done ? `${ok}/${v.items.length} bonnes réponses` : `${v.items.length} exercices · ≈ ${Math.round(v.est / 60)} min`}</h2>
          <p class="body-sm mt-8" style="color:#d6cfc2">${news.length} nouveaux mots · ${reviews} révision${reviews > 1 ? 's' : ''} · QCM dans les deux sens et mots à écrire.</p>
          <div class="row wrap mt-24">${v.done ? (dayFull(d) && !d.chest ? `<button class="btn btn-inverse btn-lg" data-act="openDailyChest">${I('gift')} Recevoir le bouquet du soir</button>` : !d.done ? `<button class="btn btn-inverse btn-lg" data-act="startDaily">Partie 1 · Les temps ${I('arrowR')}</button>` : `<button class="btn btn-inverse btn-lg" data-go="#/dictionary">Explorer le dictionnaire ${I('arrowR')}</button>`)
            : `<button class="btn btn-inverse btn-lg" data-act="startVocab">${v.res.length ? `Reprendre (${v.res.length}/${v.items.length})` : 'Commencer les exercices'} ${I('arrowR')}</button>`}</div>
        </div>
        <div class="card"><div class="card-title"><h3>Ta mémoire</h3></div>
          <div class="kpi"><div class="kpi-value">${learned.length}</div><div class="body-sm mute">mots appris au total</div></div>
          <div class="row mt-16" style="gap:24px"><div><div class="strong">${acquired}</div><div class="caption mute">acquis</div></div><div><div class="strong">${inProgress}</div><div class="caption mute">en cours</div></div></div>
          <p class="caption mute mt-16">Un mot est « acquis » après 4 bonnes réponses espacées dans le temps.</p></div>
      </div>
      <div class="card mt-24"><div class="card-title"><h3>Les ${news.length} mots du jour</h3><span class="caption mute">Écoute-les et lis-les avant de commencer</span></div>
        ${news.map(x => `<div class="dict-item"><div><div class="row wrap" style="gap:8px">${speakBtn(x.en.replace(/\s*\(.*?\)/g, ''))}<span class="w">${esc(x.en)}</span><span class="tag" style="margin-left:auto">${esc(x.cat)}</span></div><div class="tr mt-8">${esc(x.fr)}</div>${x.ex ? `<div class="exs">${esc(x.ex)}</div>` : ''}</div><div></div></div>`).join('')}
      </div>`;
  }

  /* ---------- Leçons ---------- */
  function viewLessons() {
    const groups = ['present', 'past', 'future'];
    return `
      <div class="page-head"><div class="grow"><span class="eyebrow">Module leçons</span><h1 class="display-lg">Les 13 temps de l'anglais</h1>
        <p class="lead">Pour chaque temps : sa formation, tous ses emplois avec exemples audio, les mots-repères, les pièges des francophones et les règles à retenir.</p></div>
        <div class="row"><span class="tag dark">${Object.keys(S.lessonsRead).length}/${TENSES.length} étudiées</span></div></div>
      ${groups.map(g => `
        <div class="row mt-32" style="margin-bottom:16px"><span class="dot" style="width:10px;height:10px;background:${GROUPS[g].hex}"></span><h2 class="display-xs">${GROUPS[g].label}</h2></div>
        <div class="grid grid-3">
          ${LESSONS.filter(l => l.group === g).map(l => `
            <div class="card clickable lesson-card" data-go="#/lesson/${l.id}">
              <div class="row between"><span class="tag ${GROUPS[g].color}">${l.level}</span>${S.lessonsRead[l.id] ? `<span class="tag green">${I('check', 'style="width:12px;height:12px"')} Étudiée</span>` : ''}</div>
              <div><h3 class="display-xs">${esc(l.name)}</h3><div class="body-sm mute">${esc(l.fr)}</div></div>
              <div class="formula">${esc(l.formula)}</div>
              <div style="margin-top:auto"><div class="row between"><span class="caption mute">Maîtrise</span><span class="caption ink">${mastery(l.id)}%</span></div><div class="mt-8">${noteRating(mastery(l.id))}</div></div>
            </div>`).join('')}
        </div>`).join('')}
      <div class="row mt-48" style="margin-bottom:16px">${I('layers', 'style="width:20px"')}<h2 class="display-xs">Comparatifs : les confusions classiques</h2></div>
      <div class="grid grid-3">
        ${window.COMPARISONS.map((c, i) => `<div class="cat-card cat-${['pink', 'blue', 'orange', 'purple', 'green'][i % 5]} clickable card" style="border:none" data-go="#/compare/${c.id}">
          <span class="eyebrow">Comparatif</span><h3 class="display-xs" style="margin-top:8px">${esc(c.title)}</h3><p class="body-sm mt-8" style="opacity:.9">${esc(c.intro)}</p></div>`).join('')}
      </div>`;
  }
  function viewLesson(id) {
    const l = LESSON[id]; if (!l) return viewLessons();
    const g = GROUPS[l.group];
    const sec = [['formation', 'Formation'], ['emplois', 'Emplois'], ['reperes', 'Mots-repères'], ['pieges', 'Pièges à éviter'], ['regles', 'Règles à retenir'], ['astuce', 'Astuce']];
    const idx = TENSES.indexOf(id), prev = TENSES[idx - 1], next = TENSES[idx + 1];
    return `
      <button class="link-arrow" data-go="#/lessons">${I('arrowL', 'style="width:16px"')} Toutes les leçons</button>
      <div class="lesson-hero mt-16">
        <div class="cat-card cat-${g.color}" style="padding:40px">
          <div class="deco"></div>
          <span class="eyebrow">${g.label} · Niveau ${l.level}</span>
          <h1 class="display-xl" style="margin-top:12px;color:inherit">${esc(l.name)}</h1>
          <div style="font:500 18px/26px Raleway;opacity:.9;margin-top:4px">${esc(l.fr)}</div>
          <p class="mt-16" style="max-width:520px;opacity:.95">${esc(l.summary)}</p>
          <div class="mt-24" style="display:inline-block;background:rgba(255,255,255,.16);padding:10px 14px;border-radius:4px;font:400 16px/22px var(--mono)">${esc(l.formula)}</div>
        </div>
        <div class="card featured timeline" style="display:flex;flex-direction:column">
          <span class="eyebrow-sm">Frise chronologique</span>
          <div style="margin:auto 0;padding:18px 0">${timelineSvg(l)}</div>
          <p class="body-sm mid">${esc(l.tlCaption)}</p>
          <hr class="divider" style="margin:18px 0">
          <div class="row between"><span class="body-sm-strong ink">Ta maîtrise</span><span class="body-sm-strong ink">${mastery(id)}%</span></div>
          <div class="mt-8">${noteRating(mastery(id), baseline(id))}</div>
          <div class="caption mute mt-8">1 note = 20 % · note soulignée = ton niveau de départ (${baseline(id)}%)</div>
        </div>
      </div>
      <div class="lesson-body">
        <nav class="toc">${sec.map(([a, t]) => `<a href="javascript:void(0)" data-act="scrollTo" data-target="${a}">${t}</a>`).join('')}
          <div class="stack mt-24"><button class="btn btn-primary btn-sm" data-act="practiceTense" data-t="${id}">${I('dumbbell')} S'entraîner</button></div></nav>
        <div>
          <section class="lesson-section" id="formation"><h2><span class="num">01</span>Formation</h2>
            <div class="card" style="padding:0 8px"><table class="form-table">${l.formation.map(f => `<tr><th>${esc(f.label)}</th><td><code>${esc(f.code)}</code><div class="ex row" style="gap:8px">${speakBtn(f.ex)}<span>${esc(f.ex)}</span></div></td></tr>`).join('')}</table></div>
            <div class="callout mt-16"><div class="body-sm-strong ink" style="margin-bottom:8px">Points d'orthographe et de construction</div><ul style="margin:0;padding-left:18px" class="body-sm">${l.formationNotes.map(n => `<li style="margin:4px 0">${esc(n)}</li>`).join('')}</ul></div>
          </section>
          <section class="lesson-section" id="emplois"><h2><span class="num">02</span>Emplois</h2>
            ${l.uses.map((u, i) => `<div class="use-item"><div class="n">${i + 1}</div><div><h4>${esc(u.title)}</h4><p class="body-sm mid mt-8" style="margin-top:4px">${esc(u.desc)}</p>
              ${u.examples.map(([en, fr]) => `<div class="example">${speakBtn(en)}<div><div class="en">${esc(en)}</div><div class="fr">${esc(fr)}</div></div></div>`).join('')}</div></div>`).join('')}
          </section>
          <section class="lesson-section" id="reperes"><h2><span class="num">03</span>Mots-repères</h2>
            <p class="body-sm mid" style="margin-bottom:14px">Quand tu vois l'un de ces mots, pense immédiatement au ${esc(l.name)}.</p>
            <div class="signals">${l.signals.map(s => `<span class="tag ${g.color}">${esc(s)}</span>`).join('')}</div>
          </section>
          <section class="lesson-section" id="pieges"><h2><span class="num">04</span>Pièges à éviter</h2>
            ${l.traps.map(t => `<div class="trap"><h4>${I('alert', 'style="width:18px;color:#d99a8f"')}${esc(t.title)}</h4>
              <div class="wr"><div class="wrong">${esc(t.wrong)}</div><div class="right">${esc(t.right)}</div></div>
              <p class="body-sm mid mt-12">${esc(t.explain)}</p></div>`).join('')}
          </section>
          <section class="lesson-section" id="regles"><h2><span class="num">05</span>Règles à retenir</h2>
            <ol class="rule-list">${l.rules.map(r => `<li>${esc(r)}</li>`).join('')}</ol>
          </section>
          <section class="lesson-section" id="astuce"><h2><span class="num">06</span>Astuce</h2>
            <div class="card dark" style="display:flex;gap:18px;align-items:flex-start"><div style="font-size:28px">💡</div><div style="font:500 18px/28px Raleway">${esc(l.tip)}</div></div>
          </section>
          <div class="card featured" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">
            <div style="flex:1;min-width:220px"><div class="strong">${S.lessonsRead[id] ? 'Leçon déjà étudiée ✓' : 'Tu as terminé cette leçon ?'}</div><div class="body-sm mid">${S.lessonsRead[id] ? 'Révise-la quand tu veux et valide-la à nouveau (+5 ★ par jour).' : 'Valide-la pour gagner 20 ★, puis teste-toi avec 8 questions.'}</div></div>
            <button class="btn btn-secondary" data-act="markRead" data-t="${id}">${I('check')} J'ai compris</button>
            <button class="btn btn-primary" data-act="practiceTense" data-t="${id}">Quiz de la leçon ${I('arrowR')}</button>
          </div>
          <div class="row between wrap mt-32 lesson-nav">
            ${prev ? `<button class="btn btn-ghost" data-go="#/lesson/${prev}">${I('arrowL')} ${esc(LESSON[prev].name)}</button>` : '<span></span>'}
            ${next ? `<button class="btn btn-ghost" data-go="#/lesson/${next}">${esc(LESSON[next].name)} ${I('arrowR')}</button>` : ''}
          </div>
        </div>
      </div>`;
  }
  function viewCompare(id) {
    const c = window.COMPARISONS.find(x => x.id === id); if (!c) return viewLessons();
    return `<button class="link-arrow" data-go="#/lessons">${I('arrowL', 'style="width:16px"')} Leçons</button>
      <div class="page-head mt-16"><div class="grow"><span class="eyebrow">Comparatif</span><h1 class="display-lg">${esc(c.title)}</h1><p class="lead">${esc(c.intro)}</p></div>
        <button class="btn btn-primary" data-act="practiceMulti" data-ts="${c.tenses.join(',')}">${I('dumbbell')} S'entraîner sur ces temps</button></div>
      <div class="card" style="padding:0 8px"><table class="form-table">
        <tr><th style="width:auto">Situation</th><th style="width:auto">Temps</th><th style="width:auto">Exemple</th></tr>
        ${c.rows.map(([s, t, e]) => `<tr><td class="body-sm ink">${esc(s)}</td><td><span class="tag dark">${esc(t)}</span></td><td><div class="row" style="gap:8px">${speakBtn(e)}<span class="ink">${esc(e)}</span></div></td></tr>`).join('')}
      </table></div>
      <div class="grid grid-3 mt-24">${c.tenses.map(t => `<div class="card clickable" data-go="#/lesson/${t}"><div class="row between">${tenseTag(t)}<span class="caption ink">${mastery(t)}%</span></div><div class="body-sm mid mt-12">Revoir la leçon complète</div></div>`).join('')}</div>`;
  }

  /* ---------- Entraînement ---------- */
  let practiceSel = new Set(); let practiceCount = 10;
  function viewPractice() {
    const pending = Object.entries(S.mistakes).filter(([id, m]) => !m.fixed && QMAP[id]).length;
    return `
      <div class="page-head"><div class="grow"><span class="eyebrow">Entraînement libre</span><h1 class="display-lg">Entraîne-toi à ton rythme</h1>
        <p class="lead">Choisis un ou plusieurs temps, ou lance une session ciblée. Chaque bonne réponse rapporte 5 ★ (+ combo).</p></div></div>
      <div class="grid grid-3">
        <div class="cat-card cat-purple clickable span-3" data-act="practiceTrans" style="cursor:pointer;display:flex;gap:24px;align-items:center;flex-wrap:wrap"><div class="deco"></div><div style="font-size:40px">🇫🇷 → 🇬🇧</div><div style="flex:1;min-width:240px"><span class="eyebrow">Session</span><h3 class="display-sm mt-8">Traduction français → anglais</h3><p class="body-sm mt-8" style="opacity:.9">${QUESTIONS.filter(q => q.k === 'trans').length} phrases à traduire librement. Le correcteur vérifie avant tout que tu as choisi le bon temps. +5 ★ bonus par phrase.</p></div><span class="btn btn-inverse">Commencer ${I('arrowR')}</span></div>
        <div class="cat-card cat-blue clickable" data-act="practiceMix" style="cursor:pointer"><div class="deco"></div><span class="eyebrow">Session</span><h3 class="display-sm mt-8">Mélange de tous les temps</h3><p class="body-sm mt-8" style="opacity:.9">Le meilleur entraînement pour apprendre à choisir le bon temps.</p></div>
        <div class="cat-card cat-orange clickable" data-act="practiceWeak" style="cursor:pointer"><div class="deco"></div><span class="eyebrow">Session</span><h3 class="display-sm mt-8">Mes 3 points faibles</h3><p class="body-sm mt-8" style="opacity:.9">${weakest(3).map(t => LESSON[t].name).join(' · ')}</p></div>
        <div class="cat-card cat-pink ${pending ? 'clickable' : ''}" data-act="${pending ? 'practiceMistakes' : ''}" style="cursor:${pending ? 'pointer' : 'default'};${pending ? '' : 'opacity:.6'}"><div class="deco"></div><span class="eyebrow">Session</span><h3 class="display-sm mt-8">Révision de mes erreurs</h3><p class="body-sm mt-8" style="opacity:.9">${pending ? `${pending} question${pending > 1 ? 's' : ''} à retravailler. Corrige-les pour la quête hebdo !` : 'Aucune erreur en attente. Bravo !'}</p></div>
      </div>
      <div class="card mt-24">
        <div class="card-title"><h3>Session personnalisée</h3>
          <div class="segmented" id="pcount">${[5, 10, 20].map(n => `<button data-n="${n}" class="${practiceCount === n ? 'on' : ''}">${n} questions</button>`).join('')}</div></div>
        ${['present', 'past', 'future'].map(g => `<div class="eyebrow-sm mt-16" style="margin-bottom:10px">${GROUPS[g].label}</div>
          <div class="row wrap">${LESSONS.filter(l => l.group === g).map(l => `<button class="btn btn-sm ${practiceSel.has(l.id) ? 'btn-primary' : 'btn-secondary'}" data-act="togglePractice" data-t="${l.id}">${esc(l.name)} <span class="${practiceSel.has(l.id) ? '' : 'mute'}" style="font-size:12px">${mastery(l.id)}%</span></button>`).join('')}</div>`).join('')}
        <div class="row wrap mt-24"><button class="btn btn-primary" data-act="practiceCustom" ${practiceSel.size ? '' : 'disabled'}>Lancer la session ${I('arrowR')}</button>
          ${practiceSel.size ? `<button class="btn btn-ghost" data-act="clearPractice">Tout désélectionner</button>` : '<span class="body-sm mute">Sélectionne au moins un temps.</span>'}</div>
      </div>`;
  }

  /* ---------- Quiz ---------- */
  let Q = null;
  function startQuiz(opts) {
    const items = opts.qids.map(id => QMAP[id] || VQ[id]).filter(Boolean);
    if (!items.length) { toast('🤷', 'Aucune question disponible'); return; }
    Q = Object.assign({ i: opts.start || 0, ans: null, build: null, results: [], combo: 0, bestCombo: 0, xp: 0, finished: false }, opts, { items });
    location.hash = '#/quiz'; render();
  }
  const XP_BASE = { daily: 10, practice: 5, review: 8, diag: 0 };
  function quizAnswer(ok, given, grade) {
    if (!Q || Q.ans) return;
    const q = Q.items[Q.i];
    if (Q.mode === 'vocab') {
      recordVocab(q.vkey, ok);
      const dv = getDaily(Q.date).vocab; dv.res.push(ok ? 1 : 0);
      let xpv = 0;
      if (ok) { Q.combo++; Q.bestCombo = Math.max(Q.bestCombo, Q.combo); xpv = 4; gainXP(xpv); Q.xp += xpv; } else Q.combo = 0;
      save();
      Q.ans = { ok, given, xp: xpv }; Q.results.push({ q, ok, given });
      render(); if (xpv) xpPop(xpv, document.querySelector('.feedback'));
      return;
    }
    const wasMistake = S.mistakes[q.id] && !S.mistakes[q.id].fixed;
    record(q, ok, Q.mode);
    let xp = 0;
    if (ok) { Q.combo++; Q.bestCombo = Math.max(Q.bestCombo, Q.combo); xp = XP_BASE[Q.mode] ? XP_BASE[Q.mode] + Math.min(10, (Q.combo - 1) * 2) : 0; if (wasMistake && Q.mode !== 'diag') xp += 5; if (q.k === 'trans' && xp) xp += 5; }
    else Q.combo = 0;
    if (xp) { gainXP(xp); Q.xp += xp; }
    if (Q.mode === 'daily') { getDaily(Q.date).res.push(ok ? 1 : 0); save(); }
    Q.ans = { ok, given, xp, grade, fixed: wasMistake && ok };
    Q.results.push({ q, ok, given });
    render();
    if (xp) xpPop(xp, document.querySelector('.feedback'));
  }
  function quizNext() {
    if (!Q) return;
    Q.i++; Q.ans = null; Q.build = null;
    if (Q.i >= Q.items.length) quizFinish();
    render();
  }
  function quizFinish() {
    Q.finished = true;
    const ok = Q.results.filter(r => r.ok).length, n = Q.results.length;
    if (Q.mode === 'daily') {
      const d = getDaily(Q.date);
      if (!d.done && d.res.length >= d.qids.length) {
        d.done = true; d.perfect = d.res.every(Boolean);
        gainXP(50, 'Vocalise du jour terminée ☀️'); Q.xp += 50;
        if (d.perfect) { setTimeout(() => gainXP(30, 'Bonus sans faute 💎'), 400); Q.xp += 30; }
        confetti();
        checkDayComplete(d, Q.date);
      }
    } else if (Q.mode === 'vocab') {
      const d = getDaily(Q.date);
      if (!d.vocab.done && d.vocab.res.length >= d.vocab.items.length) {
        d.vocab.done = true;
        gainXP(30, 'Vocabulaire du jour terminé 📖'); Q.xp += 30;
        checkDayComplete(d, Q.date);
      }
    } else if (Q.mode === 'diag') {
      const scores = {};
      TENSES.forEach(t => { const rs = Q.results.filter(r => r.q.t === t); scores[t] = pct(rs.filter(r => r.ok).length, rs.length); });
      S.diagnostic = { date: today(), scores, avg: Math.round(sum(Object.values(scores)) / TENSES.length) };
      S.onboarded = true;
      gainXP(50, 'Bienvenue ! Test de positionnement terminé'); Q.xp += 50;
    } else if (n >= 5) {
      const bonus = ok === n ? 20 : 10; gainXP(bonus, 'Session terminée'); Q.xp += bonus;
    }
    Q.score = { ok, n };
    checkBadges(); save();
  }
  function viewQuiz() {
    if (!Q) { setTimeout(() => { location.hash = '#/dashboard'; }, 0); return ''; }
    if (Q.finished) return { full: true, html: quizResult(), mount: mountResult };
    const q = Q.items[Q.i], total = Q.items.length;
    const kindLabel = Q.mode === 'vocab' ? 'Vocabulaire' : { mcq: 'Choisis la bonne réponse', fill: 'Complète la phrase', build: 'Construis la phrase', trans: 'Traduis en anglais' }[q.k];
    let body = '';
    if (q.k === 'mcq') {
      body = `<div class="options">${q.o.map((o, i) => {
        let cls = '';
        if (Q.ans) { if (i === q.a) cls = 'correct'; else if (Q.ans.given === i) cls = 'wrong-pick'; }
        return `<button class="option ${cls}" data-act="pickOption" data-i="${i}" ${Q.ans ? 'disabled' : ''}><span class="key">${i + 1}</span>${esc(o)}</button>`;
      }).join('')}</div>`;
    } else if (q.k === 'fill') {
      const multi = (q.q.match(/___/g) || []).length > 1;
      body = `<div class="fill-row"><input class="input ${Q.ans ? (Q.ans.ok ? 'ok' : 'ko') : ''}" id="fill" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta réponse…" value="${Q.ans ? esc(Q.ans.given) : ''}" ${Q.ans ? 'disabled' : ''}>
        ${Q.ans ? '' : `<button class="btn btn-primary" data-act="submitFill">Valider</button>`}</div>
        <div class="caption mute mt-12">${Q.mode === 'vocab' ? 'Écris le mot ou l\'expression en anglais (sans majuscule obligatoire).' : `${multi ? 'Écris les mots manquants dans l\'ordre, séparés par un espace. ' : ''}Les contractions sont acceptées (don't, I've…).`}</div>`;
    } else if (q.k === 'trans') {
      body = `<div class="fill-row"><input class="input ${Q.ans ? (Q.ans.ok ? 'ok' : 'ko') : ''}" id="fill" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Écris la phrase en anglais…" value="${Q.ans ? esc(Q.ans.given) : ''}" ${Q.ans ? 'disabled' : ''}>
        ${Q.ans ? '' : `<button class="btn btn-primary" data-act="submitTrans">Valider</button>`}</div>
        <div class="caption mute mt-12">Le plus important : <b class="ink">le bon temps</b>. Majuscules et ponctuation sont ignorées, les contractions acceptées. +5 ★ bonus par traduction réussie.</div>`;
    } else if (q.k === 'build') {
      if (!Q.build) {
        const words = q.a.split(' ');
        const bank = shuffle(words.concat(q.d || []));
        Q.build = { bank, picked: [] };
      }
      const B = Q.build;
      body = `<div class="build-answer ${Q.ans ? (Q.ans.ok ? 'ok' : 'ko') : ''}">${B.picked.length ? B.picked.map((bi, k) => `<button class="chip-word" data-act="unpickWord" data-k="${k}" ${Q.ans ? 'disabled' : ''}>${esc(B.bank[bi])}</button>`).join('') : '<span class="body-sm mute" style="padding:8px">Clique sur les mots ci-dessous dans le bon ordre…</span>'}</div>
        <div class="build-bank">${B.bank.map((w, bi) => `<button class="chip-word ${B.picked.includes(bi) ? 'used' : ''}" data-act="pickWord" data-bi="${bi}" ${Q.ans ? 'disabled' : ''}>${esc(w)}</button>`).join('')}</div>
        ${Q.ans ? '' : `<div class="row mt-16"><button class="btn btn-primary" data-act="submitBuild" ${B.picked.length ? '' : 'disabled'}>Valider</button><button class="btn btn-ghost" data-act="resetBuild">Effacer</button></div>`}`;
    }
    let fb = '';
    if (Q.ans) {
      const correct = correctOf(q);
      const isT = q.k === 'trans', g = Q.ans.grade;
      const title = isT ? (g === 'exact' ? 'Parfait, traduction exacte !' : g === 'tense' ? 'Bon temps ✓ — formulation un peu différente' : "Ce n'est pas le bon temps…") : Q.ans.ok ? ['Brava !', 'Bravissima !', 'Quelle justesse !', 'Magnifique !'][Q.i % 4] : 'Pas tout à fait…';
      fb = `<div class="feedback ${Q.ans.ok ? 'ok' : 'ko'}"><div class="fi">${I(Q.ans.ok ? 'check' : 'x')}</div><div>
        <h4>${title}${Q.ans.fixed ? ' <span class="tag green" style="margin-left:6px">Erreur corrigée +5 ★</span>' : ''}</h4>
        ${isT && g !== 'exact' ? `<div class="body-sm ink" style="margin-top:4px">Traduction modèle : <b>${esc(correct)}</b></div>${g === 'wrong' ? `<div class="body-sm ink" style="margin-top:4px">Temps attendu : <b>${esc(LESSON[q.t].name)}</b> <span class="mute">— ${esc(LESSON[q.t].formula)}</span></div>` : ''}${q.a.length > 1 ? `<div class="caption mute" style="margin-top:6px">Aussi accepté : ${q.a.slice(1).map(esc).join(' · ')}</div>` : ''}` : ''}
        ${!isT && !Q.ans.ok ? `<div class="body-sm ink mt-8" style="margin-top:4px">Bonne réponse : <b>${esc(correct)}</b></div>` : ''}
        <div class="body-sm mid" style="margin-top:6px">${esc(q.ex)}</div>
        <div class="row mt-12" style="gap:14px">${q.speak ? speakBtn(q.speak) : q.k === 'build' ? speakBtn(q.a) : q.k === 'trans' ? speakBtn(q.a[0]) : ''}${q.t ? `<button class="link-arrow" data-act="openLessonFromQuiz" data-t="${q.t}">Revoir la leçon ${esc(LESSON[q.t].name)}</button>` : ''}</div>
      </div></div>`;
    }
    const qHtml = q.k === 'trans' ? `<span class="mute" style="font-weight:400">🇫🇷</span> « ${esc(q.q)} »` : esc(q.q).replace(/___/g, '<span class="blank">&nbsp;</span>').replace(/\(([^)]+)\)/g, '<span class="hint">($1)</span>');
    const html = `<div style="min-height:100vh">
      <div class="page" style="max-width:860px;padding-top:28px">
        <div class="quiz-top">
          <button class="btn btn-ghost" data-act="quitQuiz" aria-label="Quitter">${I('x')}</button>
          <div class="partition mini" style="flex:1">${staffSvg(Q.i + (Q.ans ? 1 : 0), total, true)}</div>
          <span class="body-sm-strong ink">${Q.i + 1}/${total}</span>
          ${Q.combo >= 2 ? `<span class="combo">🔥 x${Q.combo}</span>` : ''}
          <span class="stat-chip">${I('star', 'style="color:#c9a96e"')}+${Q.xp}</span>
        </div>
        <div class="card featured quiz-card ${Q.animI !== Q.i ? 'fade-in' : ''}">
          <div class="row between wrap"><span class="eyebrow-sm">${esc(Q.title)} · ${kindLabel}</span>${Q.mode === 'diag' ? '<span class="tag blue">Test</span>' : q.t ? tenseTag(q.t) : `<span class="tag">${esc(q.cat || 'Vocabulaire')}</span>`}</div>
          <div class="quiz-q">${qHtml}</div>
          ${body}${fb}
          <div class="quiz-actions">
            <span class="caption mute">${Q.ans ? '<kbd>Entrée</kbd> pour continuer' : q.k === 'mcq' ? 'Raccourcis : <kbd>1</kbd>–<kbd>4</kbd>' : '<kbd>Entrée</kbd> pour valider'}</span>
            ${Q.ans ? `<button class="btn btn-primary btn-lg" data-act="nextQ" id="nextBtn">${Q.i + 1 >= total ? 'Voir les résultats' : 'Continuer'} ${I('arrowR')}</button>` : ''}
          </div>
        </div>
      </div></div>`;
    Q.animI = Q.i;
    return { full: true, html, mount: () => { const f = document.getElementById('fill'); if (f && !Q.ans) f.focus(); else document.getElementById('nextBtn')?.focus(); } };
  }
  function quizResult() {
    const { ok, n } = Q.score; const p = pct(ok, n);
    const wrong = Q.results.filter(r => !r.ok);
    const isDaily = Q.mode === 'daily' || Q.mode === 'vocab', isDiag = Q.mode === 'diag', isVocab = Q.mode === 'vocab';
    const d = isDaily ? getDaily(Q.date) : null;
    let extra = '';
    if (isDiag) {
      extra = `<div class="card mt-24"><div class="card-title"><h3>Ton point de départ par temps</h3><span class="caption mute">Référence pour mesurer tes progrès</span></div>
        ${TENSES.map(t => `<div class="tense-row"><div class="name">${tenseTag(t)}</div>${noteRating(S.diagnostic.scores[t])}<div class="val">${S.diagnostic.scores[t]}%</div><div class="delta mute">${S.diagnostic.scores[t] >= 100 ? 'acquis' : S.diagnostic.scores[t] >= 50 ? 'fragile' : 'à travailler'}</div></div>`).join('')}</div>`;
    }
    const nextPart = isDaily && !dayFull(d) ? `<div class="card featured mt-24" style="text-align:center;padding:30px"><div class="eyebrow">Suite de la journée</div><h3 class="display-sm mt-8">${d.done ? 'Place au vocabulaire' : 'Place aux temps'}</h3><p class="body-sm mute mt-8">${d.done ? `Partie 2 · environ ${S.profile.vocabMinutes} minutes de vocabulaire.` : `Partie 1 · environ ${S.profile.dailyMinutes} minutes sur les temps.`}</p><button class="btn btn-primary mt-16" data-act="${d.done ? 'startVocab' : 'startDaily'}">Continuer ${I('arrowR')}</button></div>` : '';
    const chest = isDaily && dayFull(d) && !d.chest ? `<div class="card featured mt-24" style="text-align:center;padding:36px">
        <div class="eyebrow">Récompense du jour</div><h3 class="display-sm mt-8">Ton bouquet t'attend !</h3>
        <div class="chest shake mt-16" data-act="openDailyChest" title="Ouvrir">${chestSvg()}</div>
        <p class="body-sm mute mt-12">Clique sur le bouquet : étoiles bonus ou doublure.</p></div>` : '';
    return `<div style="min-height:100vh"><div class="page" style="max-width:860px">
      <div class="card featured result-hero fade-in">
        <span class="eyebrow">${esc(Q.title)}</span>
        <div class="big mt-16">${ok}/${n}</div>
        <div class="display-xs mt-8">${isDiag ? 'Test de positionnement terminé' : p === 100 ? 'Justesse parfaite : ovation ! 💐' : p >= 80 ? 'Brava, quelle belle soirée !' : p >= 60 ? 'Belle prestation, continue !' : 'Chaque répétition te fait progresser.'}</div>
        <div class="row wrap mt-24" style="justify-content:center">
          <span class="stat-chip">${I('star', 'style="color:#c9a96e"')}+${Q.xp} ★</span>
          <span class="stat-chip">${I('target', 'style="color:#d8c08a"')}${p}% de réussite</span>
          ${Q.bestCombo >= 3 ? `<span class="stat-chip">🔥 Meilleur combo x${Q.bestCombo}</span>` : ''}
          ${isDaily && dayFull(d) ? `<span class="stat-chip">${I('moon', 'style="color:#efe6d6"')}${S.streak.current} nuit${S.streak.current > 1 ? 's' : ''} en scène</span>` : ''}
        </div>
        <div class="row wrap mt-32" style="justify-content:center">
          <button class="btn btn-primary btn-lg" data-act="endQuiz">${isDiag ? 'Découvrir mon tableau de bord' : 'Retour au tableau de bord'} ${I('arrowR')}</button>
          ${wrong.length && !isDiag && !isVocab ? `<button class="btn btn-secondary btn-lg" data-act="retryWrong">Refaire mes ${wrong.length} erreur${wrong.length > 1 ? 's' : ''}</button>` : ''}
        </div>
      </div>
      ${nextPart}${chest}${extra}
      ${wrong.length ? `<div class="card mt-24"><div class="card-title"><h3>Tes erreurs à retenir</h3><span class="caption mute">Elles reviendront dans tes prochaines vocalises</span></div>
        ${wrong.map(r => { const q = r.q; const correct = correctOf(q);
          const given = q.k === 'mcq' ? q.o[r.given] : r.given;
          return `<div class="mistake"><div class="row between wrap">${q.t ? `${tenseTag(q.t)}<button class="link-arrow" data-act="openLessonFromQuiz" data-t="${q.t}">Leçon</button>` : `<span class="tag">${esc(q.cat || 'Vocabulaire')}</span>${q.speak ? speakBtn(q.speak) : ''}`}</div>
          <div class="q mt-8">${esc(q.q)}</div>
          <div class="body-sm mt-8"><span class="down">Ta réponse : ${esc(given || '—')}</span> · <span class="up">Correct : ${esc(correct)}</span></div>
          <div class="body-sm mute" style="margin-top:4px">${esc(q.ex)}</div></div>`; }).join('')}</div>` : ''}
    </div></div>`;
  }
  function mountResult() { }
  function chestSvg(open = false) {
    const rose = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#c9a96e"/><circle cx="${x}" cy="${y}" r="8" fill="#f27bbf"/><path d="M${x - 4} ${y} q4 -6 8 0 q-4 5 -8 0" fill="#ffc2e6"/>`;
    const spark = open ? [[18, 30], [100, 24], [24, 70], [98, 66], [60, 10]].map(([x, y]) => `<path d="M${x} ${y - 6} L${x + 1.6} ${y - 1.6} L${x + 6} ${y} L${x + 1.6} ${y + 1.6} L${x} ${y + 6} L${x - 1.6} ${y + 1.6} L${x - 6} ${y} L${x - 1.6} ${y - 1.6} Z" fill="#c9a96e"/>`).join('') : '';
    return `<svg viewBox="0 0 120 120">${spark}
      <g stroke="#b9c79a" stroke-width="3" stroke-linecap="round" fill="none"><path d="M60 108 L44 52"/><path d="M60 108 L60 42"/><path d="M60 108 L77 54"/></g>
      <ellipse cx="50" cy="70" rx="7" ry="3.5" fill="#b9c79a" transform="rotate(-35 50 70)"/><ellipse cx="70" cy="72" rx="7" ry="3.5" fill="#b9c79a" transform="rotate(35 70 72)"/>
      ${rose(44, 48)}${rose(77, 50)}${rose(60, 36)}
      <path d="M42 78 L78 78 L68 106 L52 106 Z" fill="#d9c9a3"/><path d="M42 78 L78 78 L74 86 L46 86 Z" fill="#efe6d6"/>
      <path d="M50 92 Q60 100 70 92" stroke="#c9a96e" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;
  }

  /* ---------- Dictionnaire ---------- */
  let dictTab = 'search', dictQuery = '', dictCat = 'Tous', verbFilter = '', verbKind = 'all', verbLimit = 150, operaCat = 'Toutes', operaQuery = '', operaLimit = 120, online = { word: '', status: '', data: null };
  function viewDictionary() {
    const tabs = [['search', 'Recherche'], ['opera', `Opéra (${window.OPERA_VOCAB.length})`], ['verbs', `Verbes (${window.VERBS.length})`], ['notebook', `Mon carnet (${S.words.length})`]];
    let body = '';
    if (dictTab === 'search') {
      const cats = ['Tous', ...new Set(window.DICTIONARY.map(e => e[4]))];
      const q = norm(dictQuery);
      const res = window.DICTIONARY.filter(e => (dictCat === 'Tous' || e[4] === dictCat) && (!q || norm(e[0]).includes(q) || norm(e[2]).includes(q)));
      const verbs = q ? window.VERBS.filter(v => [v.b, v.s, v.p, v.pp, v.ing].some(f => norm(f).split(/[ /]+/).includes(q)) || norm(v.fr).split(/[ ,()']+/).includes(q)).slice(0, 6) : [];
      const opera = q ? window.OPERA_VOCAB.filter(o => norm(o.en).includes(q) || norm(o.fr).includes(q)).slice(0, 8) : [];
      body = `<div class="dict-layout"><div>
        <div class="input-icon">${I('search')}<input class="input" id="dq" placeholder="Cherche un mot en anglais ou en français…" value="${esc(dictQuery)}" autocomplete="off"></div>
        <div class="row wrap mt-16">${cats.map(c => `<button class="btn btn-sm ${dictCat === c ? 'btn-primary' : 'btn-secondary'}" data-act="dictCat" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div>
        ${verbs.length ? `<div class="card mt-24 tight"><span class="eyebrow-sm">Verbe${verbs.length > 1 ? 's' : ''}</span>${verbs.map(v => `<div class="row wrap mt-12" style="gap:8px">${speakBtn(`${v.b}, ${v.p}, ${v.pp}`)}<b class="ink" style="font-size:18px">${esc(v.b)}</b><span class="mute">→</span><span class="tag ${v.irr ? 'purple' : 'blue'}">${esc(v.p)}</span><span class="tag ${v.irr ? 'purple' : 'blue'}">${esc(v.pp)}</span><span class="tag">${esc(v.ing)}</span><span class="mid">${esc(v.fr)}</span>${v.irr ? '<span class="tag orange">irrégulier</span>' : ''}</div>`).join('')}</div>` : ''}
        ${opera.length ? `<div class="card mt-24 tight"><div class="row between"><span class="eyebrow-sm">Lexique de l'opéra</span><button class="link-arrow" data-act="operaFromSearch">Tout voir</button></div>${opera.map(o => operaRow(o)).join('')}</div>` : ''}
        <div class="card mt-16" style="padding:4px 20px">${res.length ? res.slice(0, 120).map(e => `<div class="dict-item"><div>
            <div class="row wrap" style="gap:8px">${speakBtn(e[0])}<span class="w">${esc(e[0])}</span><span class="pos">${esc(e[1])}</span><span class="tag" style="margin-left:auto">${esc(e[4])}</span></div>
            <div class="tr mt-8">${esc(e[2])}</div><div class="exs">${esc(e[3])}</div></div>
            <div><button class="btn btn-ghost btn-sm" data-act="addWord" data-w="${esc(e[0])}" data-tr="${esc(e[2])}" data-ex="${esc(e[3])}" title="Ajouter au carnet">${I(S.words.some(w => w.w === e[0]) ? 'check' : 'plus')}</button></div></div>`).join('')
          : `<div class="empty">Aucun résultat dans le dictionnaire intégré.${q ? ' Essaie la recherche en ligne →' : ''}</div>`}</div>
      </div>
      <div class="card featured" style="position:sticky;top:88px">
        <div class="card-title"><h3>${I('globe', 'style="width:18px;vertical-align:-3px"')} Définition en ligne</h3></div>
        <p class="body-sm mid">Définitions anglaises, phonétique et prononciation (nécessite une connexion internet).</p>
        <div class="row mt-16"><input class="input" id="oq" placeholder="ex : achieve" value="${esc(online.word || (dictQuery && /^[a-z' -]+$/i.test(dictQuery) ? dictQuery : ''))}" autocomplete="off"><button class="btn btn-primary" data-act="lookup">${I('search')}</button></div>
        <div class="mt-16" id="online-res">${onlineHtml()}</div>
      </div></div>`;
    } else if (dictTab === 'opera') {
      const f = norm(operaQuery);
      const all = window.OPERA_VOCAB.filter(o => (operaCat === 'Toutes' || o.cat === operaCat) && (!f || norm(o.en).includes(f) || norm(o.fr).includes(f)));
      const list = all.slice(0, operaLimit);
      const counts = {}; window.OPERA_VOCAB.forEach(o => counts[o.cat] = (counts[o.cat] || 0) + 1);
      body = `<div class="card dark hero-main" style="padding:28px;min-height:0"><div class="moon-deco" style="width:54px;height:54px;top:22px;right:26px"></div>
          <span class="eyebrow">Lexique de l'opéra</span><h2 class="display-sm" style="margin-top:8px">${window.OPERA_VOCAB.length} mots et expressions pour la scène</h2>
          <p class="body-sm mt-8" style="color:#d6cfc2;max-width:620px">Voix, technique, solfège, coulisses, métiers, costumes, orchestre, santé vocale, carrière, critique, idiomes et titres d'œuvres : tout le vocabulaire d'une soprano en anglais.</p>
          <div class="row wrap mt-16"><button class="btn btn-inverse" data-act="operaQuiz">${I('music')} Quiz${operaCat !== 'Toutes' ? ' : ' + esc(operaCat) : ' de vocabulaire'}</button></div></div>
        <div class="input-icon mt-24">${I('search')}<input class="input" id="opq" placeholder="Cherche en anglais ou en français (ex : tessitura, coulisses…)" value="${esc(operaQuery)}" autocomplete="off"></div>
        <div class="row wrap mt-16">${['Toutes', ...window.OPERA_CATS].map(c => `<button class="btn btn-sm ${operaCat === c ? 'btn-primary' : 'btn-secondary'}" data-act="operaCat" data-c="${esc(c)}">${esc(c)} <span class="${operaCat === c ? '' : 'mute'}" style="font-size:12px">${c === 'Toutes' ? window.OPERA_VOCAB.length : counts[c]}</span></button>`).join('')}</div>
        <div class="card mt-16" style="padding:4px 20px">${list.length ? list.map(o => operaRow(o, operaCat === 'Toutes')).join('') : '<div class="empty">Aucun résultat.</div>'}</div>
        <div class="row between wrap mt-12"><p class="caption mute">${list.length} affiché${list.length > 1 ? 's' : ''} sur ${all.length}</p>${all.length > list.length ? `<button class="btn btn-secondary btn-sm" data-act="moreOpera">Afficher plus</button>` : ''}</div>`;
    } else if (dictTab === 'verbs') {
      const f = norm(verbFilter);
      const all = window.VERBS.filter(v => (verbKind === 'all' || (verbKind === 'irr') === v.irr) && (!f || [v.b, v.p, v.pp, v.ing].some(x => norm(x).includes(f)) || norm(v.fr).includes(f)));
      const list = all.slice(0, verbLimit);
      const nIrr = window.VERBS.filter(v => v.irr).length;
      body = `<div class="row wrap"><div class="input-icon" style="flex:1;min-width:240px">${I('search')}<input class="input" id="vq" placeholder="Filtrer : anglais ou français…" value="${esc(verbFilter)}"></div>
          <button class="btn btn-primary" data-act="verbQuiz" data-mode="irr">${I('dumbbell')} Quiz irréguliers</button>
          <button class="btn btn-secondary" data-act="verbQuiz" data-mode="reg">${I('dumbbell')} Quiz orthographe (-ed, -ing)</button></div>
        <div class="segmented mt-16">${[['all', `Tous (${window.VERBS.length})`], ['irr', `Irréguliers (${nIrr})`], ['reg', `Réguliers (${window.VERBS.length - nIrr})`]].map(([k, l]) => `<button class="${verbKind === k ? 'on' : ''}" data-act="verbKind" data-k="${k}">${l}</button>`).join('')}</div>
        <div class="callout mt-16 body-sm"><b>Prétérit</b> → past simple · <b>Participe passé</b> → tous les temps perfect (have + participe) · <b>Forme en -ing</b> → tous les temps continuous. Les verbes réguliers suivent les règles : <i>stop → stopped, stopping</i> · <i>study → studied</i> · <i>live → lived, living</i> · <i>die → dying</i>.</div>
        <div class="card mt-16 table-scroll" style="padding:0 8px"><table class="verb-table wide"><tr><th></th><th>Base verbale</th><th>3e pers.</th><th>Prétérit</th><th>Participe passé</th><th>Forme -ing</th><th>Traduction</th></tr>
        ${list.map(v => `<tr><td style="width:40px">${speakBtn(`${v.b}, ${v.p}, ${v.pp}`)}</td><td class="v">${esc(v.b)}${v.irr ? ' <span class="tag orange" style="font-size:11px;padding:1px 5px">irr.</span>' : ''}</td><td>${esc(v.s)}</td><td${v.irr ? ' class="ink"' : ''}>${esc(v.p)}</td><td${v.irr ? ' class="ink"' : ''}>${esc(v.pp)}</td><td>${esc(v.ing)}</td><td class="mid">${esc(v.fr)}</td></tr>`).join('')}</table></div>
        <div class="row between wrap mt-12"><p class="caption mute">${list.length} verbe${list.length > 1 ? 's' : ''} affiché${list.length > 1 ? 's' : ''} sur ${all.length}</p>${all.length > list.length ? `<button class="btn btn-secondary btn-sm" data-act="moreVerbs">Afficher plus</button>` : ''}</div>`;
    } else {
      body = `<div class="grid grid-3"><div class="card span-2">
          <div class="card-title"><h3>Mes mots</h3>${S.words.length ? `<button class="btn btn-primary btn-sm" data-act="flashcards">${I('refresh')} Réviser (flashcards)</button>` : ''}</div>
          ${S.words.length ? S.words.slice().reverse().map(w => `<div class="dict-item"><div><div class="row" style="gap:8px">${speakBtn(w.w)}<span class="w">${esc(w.w)}</span><span class="tag" style="margin-left:8px">${'●'.repeat(w.box || 0)}${'○'.repeat(5 - (w.box || 0))}</span></div><div class="tr mt-8">${esc(w.tr)}</div>${w.ex ? `<div class="exs">${esc(w.ex)}</div>` : ''}</div>
            <div><button class="btn btn-ghost btn-sm" data-act="delWord" data-id="${w.id}" title="Supprimer">${I('trash')}</button></div></div>`).join('')
            : '<div class="empty">Ton carnet est vide. Ajoute des mots depuis la recherche (bouton +) ou avec le formulaire.</div>'}
        </div>
        <div class="card featured"><div class="card-title"><h3>Ajouter un mot</h3></div>
          <div class="stack"><label class="field">Mot ou expression (anglais)<input class="input" id="nw"></label>
          <label class="field">Traduction<input class="input" id="ntr"></label>
          <label class="field">Exemple (facultatif)<input class="input" id="nex"></label>
          <button class="btn btn-primary" data-act="addWordForm">${I('plus')} Ajouter au carnet</button>
          <p class="caption mute">Chaque mot su en révision rapporte 2 ★. Les points ●○ montrent ta mémorisation (5 = acquis).</p></div></div></div>`;
    }
    return `<div class="page-head"><div class="grow"><span class="eyebrow">Dictionnaire</span><h1 class="display-lg">Dictionnaire & vocabulaire</h1>
      <p class="lead">${window.OPERA_VOCAB.length} mots de l'opéra, ${window.DICTIONARY.length} mots essentiels (marqueurs de temps, faux amis, verbes d'état…), ${window.VERBS.length} verbes (dont ${window.IRREGULAR_VERBS.length} irréguliers) avec toutes leurs formes, la recherche en ligne et ton carnet personnel.</p></div></div>
      <div class="segmented" style="margin-bottom:24px">${tabs.map(([k, l]) => `<button class="${dictTab === k ? 'on' : ''}" data-act="dictTab" data-k="${k}">${l}</button>`).join('')}</div>${body}`;
  }
  function operaRow(o, showCat = true) {
    const inBook = S.words.some(w => w.w === o.en);
    return `<div class="dict-item"><div><div class="row wrap" style="gap:8px">${speakBtn(o.en.replace(/\s*\(.*?\)/g, ''))}<span class="w">${esc(o.en)}</span>${showCat ? `<span class="tag" style="margin-left:auto">${esc(o.cat)}</span>` : ''}</div>
      <div class="tr mt-8">${esc(o.fr)}</div></div>
      <div><button class="btn btn-ghost btn-sm" data-act="addWord" data-w="${esc(o.en)}" data-tr="${esc(o.fr)}" data-ex="" title="Ajouter au carnet">${I(inBook ? 'check' : 'plus')}</button></div></div>`;
  }
  function operaQuiz() {
    const pool = window.OPERA_VOCAB.filter(o => operaCat === 'Toutes' || o.cat === operaCat);
    const items = shuffle(pool).slice(0, 10);
    let i = 0, score = 0;
    const draw = (picked) => {
      if (i >= items.length) { const xp = score * 2; gainXP(xp); modal(`<div style="text-align:center"><div style="font-size:48px">🎭</div><h3 class="display-sm mt-12">${score}/${items.length}</h3><p class="mid mt-8">+${xp} ★</p><button class="btn btn-primary mt-24" data-act="closeModal">Fermer</button></div>`); render(); return; }
      const it = items[i];
      if (!it.opts) {
        const toFr = i % 2 === 0; it.toFr = toFr;
        const same = shuffle(window.OPERA_VOCAB.filter(o => o.cat === it.cat && o.fr !== it.fr && o.en !== it.en));
        const others = same.length >= 3 ? same : shuffle(window.OPERA_VOCAB.filter(o => o.fr !== it.fr));
        it.opts = shuffle([it, ...others.slice(0, 3)]);
      }
      const label = o => esc(it.toFr ? o.fr : o.en);
      modal(`<div class="row between"><span class="eyebrow-sm">Lexique de l'opéra · ${i + 1}/${items.length}</span><button class="btn btn-ghost btn-sm" data-act="closeModal">${I('x')}</button></div>
        <div class="caption mute mt-16">${esc(it.cat)} · ${it.toFr ? 'Quelle est la traduction ?' : 'Comment dit-on en anglais ?'}</div>
        <div class="row mt-8" style="gap:10px">${it.toFr ? speakBtn(it.en.replace(/\s*\(.*?\)/g, '')) : ''}<div class="display-sm ink">${esc(it.toFr ? it.en : it.fr)}</div></div>
        <div class="options">${it.opts.map((o, k) => `<button class="option ${picked != null ? (o === it ? 'correct' : k === picked ? 'wrong-pick' : '') : ''}" data-k="${k}" ${picked != null ? 'disabled' : ''}><span class="key">${k + 1}</span>${label(o)}</button>`).join('')}</div>
        ${picked != null ? `<div class="row mt-24"><button class="btn btn-primary" id="oqnext">${i + 1 >= items.length ? 'Résultats' : 'Suivant'}</button></div>` : ''}`);
      if (picked == null) document.querySelectorAll('.modal .option').forEach(b => b.onclick = () => { const k = +b.dataset.k; if (it.opts[k] === it) score++; draw(k); });
      else { const n = document.getElementById('oqnext'); n.focus(); n.onclick = () => { i++; draw(); }; }
    };
    draw();
  }
  function onlineHtml() {
    if (online.status === 'loading') return '<div class="body-sm mute">Recherche…</div>';
    if (online.status === 'error') return `<div class="body-sm down">${esc(online.msg)}</div>`;
    if (!online.data) return '';
    const e = online.data[0];
    const ph = e.phonetic || e.phonetics?.find(p => p.text)?.text || '';
    const audio = e.phonetics?.find(p => p.audio)?.audio;
    return `<div class="row" style="gap:10px"><span class="display-xs ink">${esc(e.word)}</span><span class="mono mute">${esc(ph)}</span>
        ${audio ? `<button class="speak" data-audio="${esc(audio)}" title="Écouter">${I('volume')}</button>` : speakBtn(e.word)}</div>
      ${online.data.flatMap(x => x.meanings).slice(0, 4).map(m => `<div class="def-block"><span class="tag">${esc(m.partOfSpeech)}</span>
        ${m.definitions.slice(0, 3).map(d => `<div class="body-sm ink mt-8">• ${esc(d.definition)}</div>${d.example ? `<div class="body-sm mute" style="font-style:italic;margin-left:12px">“${esc(d.example)}”</div>` : ''}`).join('')}</div>`).join('')}
      <button class="btn btn-secondary btn-sm mt-12" data-act="addOnline">${I('plus')} Ajouter à mon carnet</button>`;
  }
  async function lookup(word) {
    word = (word || '').trim().toLowerCase(); if (!word) return;
    online = { word, status: 'loading', data: null }; refreshOnline();
    try {
      const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      if (!r.ok) throw new Error(r.status === 404 ? `Aucune définition trouvée pour « ${word} ».` : 'Service indisponible.');
      online = { word, status: 'ok', data: await r.json() };
    } catch (e) {
      online = { word, status: 'error', msg: e.message.includes('fetch') ? 'Pas de connexion internet : la recherche en ligne est indisponible.' : e.message };
    }
    refreshOnline();
  }
  function refreshOnline() { const el = document.getElementById('online-res'); if (el) el.innerHTML = onlineHtml(); }
  function addWord(w, tr, ex) {
    if (!w || !tr) { toast('✏️', 'Mot et traduction requis'); return false; }
    if (S.words.some(x => x.w.toLowerCase() === w.toLowerCase())) { toast('📒', 'Déjà dans ton carnet', w); return false; }
    S.words.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5), w, tr, ex: ex || '', d: today(), box: 0 });
    save(); toast('📒', 'Ajouté au carnet', w); checkBadges(); return true;
  }
  function flashcards() {
    const cards = shuffle(S.words.slice().sort((a, b) => (a.box || 0) - (b.box || 0)).slice(0, 15));
    let i = 0, shown = false, known = 0;
    const draw = () => {
      if (i >= cards.length) {
        modal(`<div style="text-align:center"><div style="font-size:48px">📒</div><h3 class="display-sm mt-12">Révision terminée</h3><p class="mid mt-8">${known}/${cards.length} mots connus · +${known * 2} ★</p><button class="btn btn-primary mt-24" data-act="closeModal">Fermer</button></div>`);
        render(); return;
      }
      const c = cards[i];
      modal(`<div class="row between"><span class="eyebrow-sm">Flashcard ${i + 1}/${cards.length}</span><button class="btn btn-ghost btn-sm" data-act="closeModal">${I('x')}</button></div>
        <div style="text-align:center;padding:36px 0"><div class="display-md ink">${esc(c.w)}</div><div class="mt-8">${speakBtn(c.w)}</div>
        ${shown ? `<div class="display-xs mid mt-24">${esc(c.tr)}</div>${c.ex ? `<div class="body-sm mute mt-8" style="font-style:italic">${esc(c.ex)}</div>` : ''}` : ''}</div>
        <div class="row" style="justify-content:center">${shown ? `<button class="btn btn-secondary" id="fc-no">À revoir</button><button class="btn btn-primary" id="fc-yes">Je savais ✓</button>` : `<button class="btn btn-primary" id="fc-show">Voir la traduction</button>`}</div>`);
      document.getElementById('fc-show')?.addEventListener('click', () => { shown = true; draw(); });
      document.getElementById('fc-yes')?.addEventListener('click', () => { c.box = Math.min(5, (c.box || 0) + 1); known++; gainXP(2); i++; shown = false; save(); draw(); });
      document.getElementById('fc-no')?.addEventListener('click', () => { c.box = 0; i++; shown = false; save(); draw(); });
    };
    draw();
  }
  function verbQuiz(mode = 'irr') {
    // irr : prétérit + participe passé des irréguliers · reg : orthographe du prétérit et du -ing des réguliers
    let verbs;
    if (mode === 'reg') {
      const reg = window.VERBS.filter(v => !v.irr);
      const tricky = reg.filter(v => v.p !== v.b + 'ed' || v.ing !== v.b + 'ing');
      verbs = shuffle(shuffle(tricky).slice(0, 7).concat(shuffle(reg.filter(v => !tricky.includes(v))).slice(0, 3)));
    } else verbs = shuffle(window.VERBS.filter(v => v.irr)).slice(0, 10);
    const f1 = 'Prétérit', f2 = mode === 'reg' ? 'Forme en -ing' : 'Participe passé';
    const ref = v => mode === 'reg' ? [v.p, v.ing] : [v.p, v.pp];
    // Variantes américaines acceptées (traveled, canceled, worshiped…)
    const us = v => (mode === 'reg' && v.dbl && /(el|al|ip)$/.test(v.b)) ? [v.b + 'ed', v.b + 'ing'] : [];
    const okForm = (val, refStr, extra) => refStr.split('/').map(x => norm(x)).concat(extra.map(norm)).includes(norm(val));
    let i = 0, score = 0;
    const draw = (fb) => {
      if (i >= verbs.length) { const xp = score * 3; gainXP(xp); modal(`<div style="text-align:center"><div style="font-size:48px">🎼</div><h3 class="display-sm mt-12">${score}/${verbs.length}</h3><p class="mid mt-8">+${xp} ★</p><button class="btn btn-primary mt-24" data-act="closeModal">Fermer</button></div>`); render(); return; }
      const v = verbs[i], [r1, r2] = ref(v);
      modal(`<div class="row between"><span class="eyebrow-sm">${mode === 'reg' ? 'Orthographe' : 'Irréguliers'} · verbe ${i + 1}/${verbs.length}</span><button class="btn btn-ghost btn-sm" data-act="closeModal">${I('x')}</button></div>
        <div class="mt-16 row" style="gap:10px">${speakBtn(v.b)}<div><div class="display-sm ink">${esc(v.b)}</div><div class="mute">${esc(v.fr)}</div></div></div>
        <div class="stack mt-24"><label class="field">${f1}<input class="input" id="vp1" autocomplete="off" autocapitalize="off" spellcheck="false"></label><label class="field">${f2}<input class="input" id="vp2" autocomplete="off" autocapitalize="off" spellcheck="false"></label></div>
        ${fb || ''}
        <div class="row mt-24"><button class="btn btn-primary" id="vgo">${fb ? 'Suivant' : 'Valider'}</button></div>`);
      const go = document.getElementById('vgo'); const a = document.getElementById('vp1'), b = document.getElementById('vp2'); a.focus();
      const submit = () => {
        if (fb) { i++; draw(); return; }
        const x = us(v);
        const ok = okForm(a.value, r1, x.slice(0, 1)) && okForm(b.value, r2, x.slice(1)); if (ok) score++;
        const sv1 = a.value, sv2 = b.value;
        const rule = mode === 'reg' ? (v.dbl ? 'Consonne finale doublée.' : /ied$/.test(v.p) ? 'Consonne + y → ied (mais -ying).' : v.ing.endsWith('ying') && v.b.endsWith('ie') ? 'ie → ying.' : v.b.endsWith('e') && !v.ing.includes(v.b) ? 'Le e muet tombe devant -ing.' : '') : '';
        draw(`<div class="feedback ${ok ? 'ok' : 'ko'}"><div class="fi">${I(ok ? 'check' : 'x')}</div><div><h4>${ok ? 'Brava !' : 'Pas tout à fait…'}</h4><div class="body-sm ink">${esc(v.b)} → <b>${esc(r1)}</b> → <b>${esc(r2)}</b></div>${rule ? `<div class="body-sm mid" style="margin-top:4px">${rule}</div>` : ''}</div></div>`);
        document.getElementById('vp1').value = sv1; document.getElementById('vp2').value = sv2;
        document.getElementById('vgo').focus();
      };
      go.onclick = submit; [a, b].forEach(el => el.onkeydown = e => { if (e.key === 'Enter') submit(); });
    };
    draw();
  }

  /* ---------- Progression ---------- */
  function viewProgress() {
    const avg = avgMastery(), base = baselineAvg(), lvl = estLevel(avg), lvlBase = estLevel(base);
    const total = S.log.filter(l => l.m !== 'diag').length, corr = S.log.filter(l => l.m !== 'diag' && l.ok).length;
    const activeDays = new Set(S.log.map(l => l.d)).size;
    const start = S.diagnostic?.date || S.profile.createdAt;
    const snaps = Object.keys(S.snapshots).sort().map(k => ({ label: fmt(k), y: S.snapshots[k].avg }));
    if (S.diagnostic && snaps.length && Object.keys(S.snapshots).sort()[0] >= S.diagnostic.date) snaps.unshift({ label: 'Départ', y: S.diagnostic.avg });
    const days = Array.from({ length: 30 }, (_, i) => addDays(today(), i - 29));
    const xpBars = days.map(d => ({ label: fmt(d), short: parseD(d).getDate(), v: S.xpLog[d] || 0, hi: d === today() }));
    const rows = TENSES.map(t => ({ t, m: mastery(t), b: baseline(t) }));
    return `<div class="page-head"><div class="grow"><span class="eyebrow">Progression</span><h1 class="display-lg">Tes progrès depuis le départ</h1>
      <p class="lead">Point de départ : ${S.diagnostic ? `test de positionnement du ${fmt(S.diagnostic.date, { day: 'numeric', month: 'long', year: 'numeric' })}` : `premières réponses (${fmt(start, { day: 'numeric', month: 'long' })})`}. La maîtrise d'un temps = ton taux de réussite sur tes 20 dernières réponses à ce temps.</p></div></div>
      <div class="grid grid-3">
        <div class="cat-card cat-purple"><div class="deco"></div><span class="eyebrow">Maîtrise globale</span><div style="font:300 56px/1 Raleway;letter-spacing:-1.5px;margin-top:14px">${avg}%</div><div class="mt-12" style="opacity:.9">Départ : ${base}% · ${avg - base >= 0 ? '+' : ''}${avg - base} points</div></div>
        <div class="card featured"><span class="eyebrow-sm">Tessiture estimée sur les temps</span><div class="row mt-16" style="gap:14px"><div class="tag" style="font-size:16px;padding:8px 12px">${lvlBase.code}</div>${I('arrowR', 'style="width:20px;color:#8f8475"')}<div class="tag dark" style="font-size:16px;padding:8px 12px">${lvl.code}</div></div><div class="display-xs mt-16">${lvl.label}</div><div class="body-sm mute">Estimation basée sur ta maîtrise moyenne des 13 temps.</div></div>
        <div class="card"><div class="grid grid-2" style="gap:18px">
          <div class="kpi"><div class="kpi-value" style="font-size:28px">${total}</div><div class="body-sm mute">réponses</div></div>
          <div class="kpi"><div class="kpi-value" style="font-size:28px">${pct(corr, total)}%</div><div class="body-sm mute">réussite globale</div></div>
          <div class="kpi"><div class="kpi-value" style="font-size:28px">${activeDays}</div><div class="body-sm mute">jours actifs</div></div>
          <div class="kpi"><div class="kpi-value" style="font-size:28px">${S.streak.best} j</div><div class="body-sm mute">meilleure série de nuits</div></div></div></div>
      </div>
      <div class="card mt-24"><div class="card-title"><h3>Évolution de ta maîtrise globale</h3><div class="legend"><span><i class="dot" style="background:#d9c9a3"></i>Maîtrise</span><span><i class="dot" style="background:#8f8475"></i>Départ</span></div></div>
        ${lineChart(snaps, { base })}</div>
      <div class="grid grid-2 mt-24">
        <div class="card"><div class="card-title"><h3>Maîtrise par temps</h3><div class="legend"><span>1 note = 20 %</span><span>note soulignée = départ</span></div></div>
          ${rows.map(r => `<div class="tense-row" style="cursor:pointer" data-go="#/lesson/${r.t}"><div class="name"><span class="dot" style="background:${groupOf(r.t).hex}"></span>${esc(LESSON[r.t].name)}</div>${noteRating(r.m, r.b)}<div class="val">${r.m}%</div><div class="delta">${deltaHtml(r.m - r.b, '')}</div></div>`).join('')}
        </div>
        <div class="stack" style="gap:24px">
          <div class="card"><div class="card-title"><h3>Étoiles gagnées (30 jours)</h3><span class="caption mute">${sum(xpBars.map(x => x.v))} ★</span></div>${barChart(xpBars)}</div>
          <div class="card"><div class="card-title"><h3>Régularité</h3><span class="caption mute">20 dernières semaines</span></div>${heatmap(20)}
            <div class="legend mt-12"><span>Moins</span>${['#2a221c', '#3d3122', '#6b5636', '#a8895a', '#c9a96e'].map(c => `<i style="width:12px;height:12px;border-radius:3px;background:${c};display:inline-block"></i>`).join('')}<span>Plus</span></div></div>
        </div>
      </div>`;
  }

  /* ---------- Rapports ---------- */
  function viewReports() {
    const weeks = allWeeks(), cur = weekStart(today());
    return `<div class="page-head"><div class="grow"><span class="eyebrow">Critiques hebdomadaires</span><h1 class="display-lg">Bilans de la semaine</h1>
      <p class="lead">Chaque lundi, le bilan de la semaine écoulée est finalisé : ce que tu as fait, tes progrès, tes points forts et ce qui doit être amélioré, avec des objectifs concrets.</p></div></div>
      <div class="stack" style="gap:14px">${weeks.map(w => { const st = weekStats(w); const isCur = w === cur;
        return `<div class="card clickable" data-go="#/report/${w}" style="display:grid;grid-template-columns:auto 1fr auto;gap:20px;align-items:center">
          <div class="icon-circle ${isCur ? '' : 'dark'}">${I('report')}</div>
          <div><div class="row wrap" style="gap:10px"><span class="strong">Semaine du ${fmt(w, { day: 'numeric', month: 'long' })} au ${fmt(addDays(w, 6), { day: 'numeric', month: 'long' })}</span>
            ${isCur ? '<span class="tag orange">En cours</span>' : '<span class="tag">Final</span>'}${!isCur && !S.reportsSeen[w] && st.answered ? '<span class="tag pink">Nouveau</span>' : ''}</div>
            <div class="body-sm mute mt-8" style="margin-top:4px">${st.answered ? `${st.days} jour${st.days > 1 ? 's' : ''} actif${st.days > 1 ? 's' : ''} · ${st.answered} réponses · ${st.acc}% de réussite · ${st.xp} ★` : 'Aucune activité'}</div></div>
          ${I('arrowR', 'style="width:20px"')}</div>`; }).join('')}</div>`;
  }
  function viewReport(wk) {
    if (!wk) return viewReports();
    const R = buildReport(wk), st = R.st, pv = R.prev;
    if (R.final && st.answered && !S.reportsSeen[wk]) { S.reportsSeen[wk] = today(); save(); }
    const cmp = (a, b, unit = '') => b == null ? '' : deltaHtml(a - b, unit);
    return `<button class="link-arrow" data-go="#/reports">${I('arrowL', 'style="width:16px"')} Toutes les critiques</button>
      <div class="page-head mt-16"><div class="grow"><span class="eyebrow">${R.final ? 'Critique finale' : 'Critique provisoire — semaine en cours'}</span>
        <h1 class="display-lg">Semaine du ${fmt(wk, { day: 'numeric', month: 'long' })}</h1><p class="lead">${fmtLong(wk)} → ${fmtLong(R.end)}</p></div>
        <button class="btn btn-secondary" data-act="print">${I('download')} Imprimer / PDF</button></div>
      <div class="report-head">
        <div class="card dark" style="padding:36px"><span class="eyebrow">Verdict de la semaine</span><p class="verdict mt-16">${esc(R.verdict)}</p>
          <div class="row wrap mt-24" style="gap:28px">
            <div><div style="font:300 32px/1 Raleway;color:#fff">${R.avgEnd}%</div><div class="body-sm" style="color:#b3a998;margin-top:6px">maîtrise fin de semaine</div></div>
            <div><div style="font:300 32px/1 Raleway;color:${R.delta >= 0 ? '#b9c79a' : '#d99a8f'}">${R.delta >= 0 ? '+' : ''}${R.delta}</div><div class="body-sm" style="color:#b3a998;margin-top:6px">points cette semaine</div></div>
            <div><div style="font:300 32px/1 Raleway;color:#fff">${R.avgEnd - baselineAvg() >= 0 ? '+' : ''}${R.avgEnd - baselineAvg()}</div><div class="body-sm" style="color:#b3a998;margin-top:6px">points depuis le départ</div></div>
          </div></div>
        <div class="card"><div class="grid grid-2" style="gap:22px">
          <div class="kpi"><span class="eyebrow-sm">Jours actifs</span><div class="kpi-value mt-8">${st.days}/7</div><div class="kpi-delta">${cmp(st.days, pv.days, '')}</div></div>
          <div class="kpi"><span class="eyebrow-sm">Vocalises du jour</span><div class="kpi-value mt-8">${st.dailyDone}</div><div class="kpi-delta">${cmp(st.dailyDone, pv.dailyDone, '')}</div></div>
          <div class="kpi"><span class="eyebrow-sm">Réponses</span><div class="kpi-value mt-8">${st.answered}</div><div class="kpi-delta">${cmp(st.answered, pv.answered, '')}</div></div>
          <div class="kpi"><span class="eyebrow-sm">Réussite</span><div class="kpi-value mt-8">${st.answered ? st.acc + '%' : '—'}</div><div class="kpi-delta">${pv.answered && st.answered ? cmp(st.acc, pv.acc, ' pts') : ''}</div></div>
          <div class="kpi"><span class="eyebrow-sm">Étoiles gagnées</span><div class="kpi-value mt-8">${st.xp}</div><div class="kpi-delta">${cmp(st.xp, pv.xp, '')}</div></div>
          <div class="kpi"><span class="eyebrow-sm">Erreurs corrigées</span><div class="kpi-value mt-8">${st.fixed}</div><div class="kpi-delta mute">anciennes erreurs</div></div>
        </div><p class="caption mute mt-16">Flèches : comparaison avec la semaine précédente.</p></div>
      </div>
      <div class="grid grid-2 mt-24">
        <div class="card"><div class="card-title"><h3>✅ Points forts</h3></div>
          ${R.strengths.length ? R.strengths.map(r => `<div class="advice"><div class="stripe" style="background:#b9c79a"></div><div><div class="row between">${tenseTag(r.t)}<span class="strong">${r.acc}%</span></div><div class="body-sm mid mt-8">${r.n} réponses cette semaine · maîtrise ${r.end}% (départ ${r.base}%)</div></div></div>`).join('')
            : '<div class="empty" style="padding:24px">Pas encore assez de réponses pour dégager des points forts (min. 2 réponses à 75 % sur un temps).</div>'}
        </div>
        <div class="card"><div class="card-title"><h3>🎯 À améliorer</h3></div>
          ${R.weaknesses.map(r => { const l = LESSON[r.t]; const trap = l.traps[0];
            return `<div class="advice"><div class="stripe" style="background:#d99a8f"></div><div><div class="row between">${tenseTag(r.t)}<span class="strong">${r.n >= 2 ? r.acc + '% cette semaine' : 'maîtrise ' + r.end + '%'}</span></div>
              <div class="body-sm ink mt-8"><b>Piège à surveiller :</b> ${esc(trap.title)} — <span class="down">${esc(trap.wrong)}</span> → <span class="up">${esc(trap.right)}</span></div>
              <div class="body-sm mid" style="margin-top:4px">💡 ${esc(l.tip)}</div>
              <div class="row mt-12"><button class="btn btn-secondary btn-sm" data-go="#/lesson/${r.t}">Relire la leçon</button><button class="btn btn-primary btn-sm" data-act="practiceTense" data-t="${r.t}">S'entraîner</button></div></div></div>`; }).join('')}
        </div>
      </div>
      <div class="card mt-24"><div class="card-title"><h3>Évolution par temps</h3><span class="caption mute">Début de semaine → fin de semaine</span></div>
        <div class="table-scroll"><table class="form-table wide"><tr><th style="width:auto">Temps</th><th style="width:auto">Réponses</th><th style="width:auto">Réussite</th><th style="width:auto">Maîtrise</th><th style="width:auto">Évolution</th><th style="width:auto">Depuis le départ</th></tr>
        ${R.rows.map(r => `<tr><td>${tenseTag(r.t)}</td><td class="body-sm">${r.n}</td><td class="body-sm">${r.n ? r.acc + '%' : '—'}</td><td class="body-sm ink">${r.start}% → <b>${r.end}%</b></td><td class="caption">${deltaHtml(r.end - r.start, '')}</td><td class="caption">${deltaHtml(r.end - r.base, '')}</td></tr>`).join('')}</table></div></div>
      ${R.mistakes.length ? `<div class="card mt-24"><div class="card-title"><h3>Erreurs de la semaine à retenir</h3><button class="btn btn-secondary btn-sm" data-act="practiceMistakes">Réviser mes erreurs</button></div>
        ${R.mistakes.map(q => { const correct = correctOf(q);
          return `<div class="mistake"><div class="row between wrap"><span class="q">${esc(q.q)}</span>${tenseTag(q.t)}</div><div class="body-sm mt-8"><span class="up">✓ ${esc(correct)}</span> — <span class="mute">${esc(q.ex)}</span></div></div>`; }).join('')}</div>` : ''}
      <div class="cat-card cat-orange mt-24"><div class="deco"></div><span class="eyebrow">Plan d'action</span><h3 class="display-sm mt-8">Objectifs pour la semaine prochaine</h3>
        <ol style="margin:18px 0 0;padding-left:22px;line-height:30px">${R.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ol></div>`;
  }

  /* ---------- Récompenses ---------- */
  function viewRewards() {
    const wk = weekStart(today()), ws = weekStats(wk), wst = weekState(wk);
    const allClaimed = QUESTS.every(q => wst.claimed[q.id]);
    const lv = levelInfo();
    const got = BADGES.filter(b => S.badges[b.id]).length;
    return `<div class="page-head"><div class="grow"><span class="eyebrow">Récompenses</span><h1 class="display-lg">Quêtes, bouquets et rôles</h1>
      <p class="lead">Gagne des étoiles chaque soir, valide les quêtes de la semaine pour recevoir le grand bouquet, et collectionne les rôles.</p></div></div>
      <div class="grid grid-3">
        <div class="card dark"><span class="eyebrow">Niveau</span><div style="font:300 56px/1 Raleway;color:#fff;margin-top:14px">${lv.L}</div><div style="font:500 18px Raleway;color:#fff;margin-top:6px">${lv.title}</div><div class="mt-16">${bar(lv.pct * 100, '', null, '#c9a96e')}</div><div class="body-sm mt-8" style="color:#b3a998">${lv.next - S.xp} ★ avant le niveau ${lv.L + 1} (${TITLES[Math.min(lv.L, TITLES.length - 1)]})</div></div>
        <div class="cat-card cat-orange"><div class="deco"></div><span class="eyebrow">Nuits en scène</span><div style="font:300 56px/1 Raleway;margin-top:14px">${I('moon', 'style="width:42px;height:42px;vertical-align:-4px;color:#c9a96e"')} ${S.streak.current}</div><div class="mt-12">Record : ${S.streak.best} nuits</div><div class="body-sm mt-8" style="opacity:.9">${S.streak.freezes} doublure${S.streak.freezes > 1 ? 's' : ''} (1 engagée toutes les 7 nuits, max 3)</div></div>
        <div class="cat-card cat-green"><span class="eyebrow">Répertoire</span><div style="font:300 56px/1 Raleway;margin-top:14px">${got}/${BADGES.length}</div><div class="mt-12">rôles débloqués</div></div>
      </div>
      <div class="grid grid-3 mt-24">
        <div class="card span-2"><div class="card-title"><h3>Quêtes de la semaine</h3><span class="caption mute">Se renouvellent chaque lundi</span></div>
          ${QUESTS.map(q => questRow(q, ws, wst)).join('')}</div>
        <div class="card featured" style="text-align:center;display:flex;flex-direction:column;justify-content:center">
          <span class="eyebrow-sm">Grand bouquet de la semaine</span>
          <div class="chest mt-16 ${allClaimed && !wst.chest ? 'shake' : ''}" style="${allClaimed || wst.chest ? '' : 'filter:grayscale(1);opacity:.4;cursor:default'}" ${allClaimed && !wst.chest ? 'data-act="openWeekChest"' : ''}>${chestSvg(wst.chest)}</div>
          <h3 class="display-xs mt-16">${wst.chest ? 'Bouquet reçu ✓' : allClaimed ? 'Clique pour le recevoir !' : '250 ★ + un rôle'}</h3>
          <p class="body-sm mute mt-8">${wst.chest ? 'Reviens lundi pour de nouvelles quêtes.' : `Valide les ${QUESTS.length} quêtes pour le déverrouiller (${QUESTS.filter(q => wst.claimed[q.id]).length}/${QUESTS.length}).`}</p>
        </div>
      </div>
      <div class="card mt-24"><div class="card-title"><h3>Barème des points</h3></div>
        <div class="grid grid-4" style="gap:14px">${[['Bonne réponse (vocalise du jour)', '10 ★ + combo'], ['Bonne réponse (entraînement)', '5 ★ + combo'], ['Ancienne erreur corrigée', '+5 ★'], ['Vocalise du jour terminée', '+50 ★'], ['Vocalise sans faute', '+30 ★'], ['Leçon étudiée', '+20 ★'], ['Bonus 3 / 7 / 14 / 30 nuits', '30 / 100 / 200 / 500 ★'], ['Grand bouquet de la semaine', '+250 ★']].map(([a, b]) => `<div style="padding:14px;border:1px solid #2a221c;border-radius:8px"><div class="body-sm mid">${a}</div><div class="strong mt-8" style="margin-top:4px">${b}</div></div>`).join('')}</div></div>
      <div class="row mt-48" style="margin-bottom:16px"><h2 class="display-xs">Répertoire de rôles</h2></div>
      <div class="grid grid-4">${BADGES.map(b => `<div class="badge-tile ${S.badges[b.id] ? 'got' : ''}"><div class="emo">${b.emo}</div><h4>${b.name}</h4><p>${b.desc}</p>${S.badges[b.id] ? `<div class="caption up mt-8">Obtenu le ${fmt(S.badges[b.id])}</div>` : `<div class="caption mute mt-8">${I('lock', 'style="width:12px;vertical-align:-1px"')} Verrouillé</div>`}</div>`).join('')}</div>`;
  }

  /* ---------- Réglages ---------- */
  function viewSettings() {
    return `<div class="page-head"><div class="grow"><span class="eyebrow">Réglages</span><h1 class="display-lg">Réglages</h1></div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card-title"><h3>Profil</h3></div><div class="stack">
          <label class="field">Prénom<input class="input" id="set-name" value="${esc(S.profile.name)}"></label>
          <label class="field">Partie 1 · Les temps<div class="segmented" id="set-goal">${[10, 15, 20, 25].map(g => `<button data-g="${g}" class="${S.profile.dailyMinutes === g ? 'on' : ''}">${g} min</button>`).join('')}</div></label>
          <label class="field">Partie 2 · Vocabulaire<div class="segmented" id="set-vgoal">${[5, 10, 15].map(g => `<button data-g="${g}" class="${S.profile.vocabMinutes === g ? 'on' : ''}">${g} min</button>`).join('')}</div></label>
          <p class="caption mute">Le changement s'applique à partir de la vocalise de demain.</p>
          <button class="btn btn-primary" data-act="saveSettings" style="align-self:flex-start">Enregistrer</button></div></div>
        <div class="card"><div class="card-title"><h3>Sauvegarde</h3></div>
          <p class="body-sm mid">Tes données sont enregistrées dans ce navigateur. Exporte-les régulièrement pour ne rien perdre ou pour les transférer sur un autre ordinateur.</p>
          <div class="row wrap mt-16"><button class="btn btn-secondary" data-act="exportData">${I('download')} Exporter</button>
          <label class="btn btn-secondary" style="cursor:pointer">${I('upload')} Importer<input type="file" id="importFile" accept="application/json" style="display:none"></label></div>
          <hr class="divider">
          <div class="card-title"><h3>Test de positionnement</h3></div>
          <p class="body-sm mid">${S.diagnostic ? `Passé le ${fmt(S.diagnostic.date, { day: 'numeric', month: 'long', year: 'numeric' })} · score ${S.diagnostic.avg}%. Le refaire remplace ton point de départ.` : 'Pas encore passé.'}</p>
          <button class="btn btn-secondary mt-16" data-act="startDiag">${S.diagnostic ? 'Refaire le test' : 'Passer le test'}</button>
          <hr class="divider">
          <div class="card-title"><h3 class="down">Zone dangereuse</h3></div>
          <button class="btn btn-secondary" data-act="resetAll" style="color:#e3aea4">${I('trash')} Effacer toutes mes données</button></div>
      </div>`;
  }

  /* ==========================================================
     ACTIONS
     ========================================================== */
  function diagQids() { return TENSES.flatMap(t => QUESTIONS.filter(q => q.t === t && (q.k === 'mcq' || q.k === 'fill')).slice(0, 2).map(q => q.id)); }
  function practice(tenses, n, title) {
    const qs = pickFrom(tenses, n || practiceCount, Math.random);
    startQuiz({ mode: 'practice', title: title || 'Entraînement', qids: shuffle(qs.map(q => q.id)) });
  }
  const ACT = {
    toggleMenu: () => document.getElementById('sidebar')?.classList.toggle('open'),
    closeModal,
    startDiag: () => {
      if (!S.onboarded) { const n = document.getElementById('ob-name'); if (n) S.profile.name = n.value.trim(); }
      save(); startQuiz({ mode: 'diag', title: 'Test de positionnement', qids: diagQids() });
    },
    skipDiag: () => { const n = document.getElementById('ob-name'); if (n) S.profile.name = n.value.trim(); S.onboarded = true; save(); location.hash = '#/dashboard'; render(); },
    startVocab: () => {
      const d = getDaily(); if (!d.vocab) return;
      if (d.vocab.done) { location.hash = '#/vocab'; return; }
      d.vocab.news.forEach(k => { if (!S.vocab[k]) S.vocab[k] = { box: 0, last: null, n: 0, ok: 0 }; }); save();
      startQuiz({ mode: 'vocab', title: 'Vocabulaire du jour', qids: vocabQuestions(d), start: d.vocab.res.length, date: today() });
    },
    startDaily: () => { const d = getDaily(); if (d.done) { location.hash = '#/daily'; return; } startQuiz({ mode: 'daily', title: 'Vocalise du jour', qids: d.qids, start: d.res.length, date: today() }); },
    pickOption: el => { const q = Q.items[Q.i]; const i = +el.dataset.i; quizAnswer(i === q.a, i); },
    submitFill: () => { const v = document.getElementById('fill').value; if (!v.trim()) return; quizAnswer(matches(v, Q.items[Q.i].a), v.trim()); },
    submitTrans: () => { const v = document.getElementById('fill').value; if (!v.trim()) return; const g = checkTrans(v, Q.items[Q.i]); quizAnswer(g !== 'wrong', v.trim(), g); },
    practiceTrans: () => { const qs = pickFrom(TENSES, practiceCount, Math.random, new Set(), ['trans']); startQuiz({ mode: 'practice', title: 'Traduction FR → EN', qids: shuffle(qs.map(q => q.id)) }); },
    pickWord: el => { Q.build.picked.push(+el.dataset.bi); render(); },
    unpickWord: el => { Q.build.picked.splice(+el.dataset.k, 1); render(); },
    resetBuild: () => { Q.build.picked = []; render(); },
    submitBuild: () => { const s = Q.build.picked.map(i => Q.build.bank[i]).join(' '); quizAnswer(matches(s, [Q.items[Q.i].a]), s); },
    nextQ: quizNext,
    quitQuiz: () => {
      if (Q.mode === 'diag' && !S.onboarded) { if (!confirm('Quitter le test ? Tu pourras le repasser depuis le tableau de bord.')) return; S.onboarded = true; save(); }
      else if (Q.results.length && !confirm(Q.mode === 'daily' ? 'Quitter ? Ta progression dans la vocalise du jour est conservée.' : 'Quitter la session ?')) return;
      Q = null; location.hash = '#/dashboard'; render();
    },
    endQuiz: () => { Q = null; location.hash = '#/dashboard'; render(); },
    retryWrong: () => { const ids = Q.results.filter(r => !r.ok).map(r => r.q.id); startQuiz({ mode: 'review', title: 'Révision des erreurs', qids: ids }); },
    openLessonFromQuiz: el => { if (Q && !Q.finished && !confirm('Quitter l\'exercice pour voir la leçon ?' + (Q.mode === 'daily' ? ' (ta progression est conservée)' : ''))) return; Q = null; location.hash = '#/lesson/' + el.dataset.t; },
    openDailyChest: () => {
      const d = getDaily(); if (!dayFull(d) || d.chest) return;
      d.chest = true;
      const r = Math.random(); let msg;
      if (r < 0.2 && S.streak.freezes < 3) { S.streak.freezes++; msg = '🎭 Une doublure engagée !'; }
      else { const xp = r < 0.55 ? 25 : r < 0.85 ? 50 : r < 0.97 ? 80 : 150; gainXP(xp); msg = `✨ ${xp} ★ bonus !${xp >= 80 ? ' Bouquet rare !' : ''}`; }
      save(); confetti(50);
      modal(`<div style="text-align:center"><div class="chest" style="cursor:default">${chestSvg(true)}</div><h3 class="display-sm mt-16">${msg}</h3><p class="mid mt-8">Reviens demain soir pour un nouveau bouquet.</p><button class="btn btn-primary mt-24" data-act="closeModal">Super !</button></div>`);
      render();
    },
    openWeekChest: () => {
      const wst = weekState(weekStart(today())); if (wst.chest) return;
      wst.chest = true; gainXP(250, 'Grand bouquet de la semaine 💐'); confetti(120); checkBadges(); save();
      modal(`<div style="text-align:center"><div class="chest" style="cursor:default">${chestSvg(true)}</div><h3 class="display-sm mt-16">Ovation ! +250 ★</h3><p class="mid mt-8">Toutes les quêtes validées. Rôle « Ovation » ajouté au répertoire.</p><button class="btn btn-primary mt-24" data-act="closeModal">Génial !</button></div>`);
      render();
    },
    claimQuest: el => {
      const wk = weekStart(today()), wst = weekState(wk), q = QUESTS.find(x => x.id === el.dataset.q);
      if (!q || wst.claimed[q.id] || q.val(weekStats(wk)) < q.goal) return;
      wst.claimed[q.id] = today(); gainXP(q.xp, `Quête validée : ${q.title}`); xpPop(q.xp, el); save(); render();
      playQueenOfTheNight(q.title);
    },
    markRead: el => {
      const id = el.dataset.t, t0 = today();
      const already = S.lessonViews.some(v => v.id === id && v.d === t0);
      S.lessonViews.push({ id, d: t0 });
      if (!S.lessonsRead[id]) { S.lessonsRead[id] = t0; gainXP(20, `Leçon étudiée : ${LESSON[id].name}`); }
      else if (!already) gainXP(5, 'Révision de leçon');
      else toast('📖', 'Déjà validée aujourd\'hui');
      checkBadges(); save(); render();
    },
    scrollTo: el => document.getElementById(el.dataset.target)?.scrollIntoView({ behavior: 'smooth' }),
    practiceTense: el => practice([el.dataset.t], 8, `Quiz : ${LESSON[el.dataset.t].name}`),
    practiceMulti: el => practice(el.dataset.ts.split(','), 10, 'Comparatif'),
    practiceWeak: () => practice(weakest(3), 10, 'Mes points faibles'),
    practiceMix: () => practice(TENSES, practiceCount, 'Mélange de tous les temps'),
    practiceMistakes: () => {
      const ids = Object.entries(S.mistakes).filter(([id, m]) => !m.fixed && QMAP[id]).sort((a, b) => b[1].n - a[1].n).map(([id]) => id).slice(0, 15);
      if (!ids.length) { toast('🎉', 'Aucune erreur à revoir'); return; }
      startQuiz({ mode: 'review', title: 'Révision de mes erreurs', qids: shuffle(ids) });
    },
    togglePractice: el => { const t = el.dataset.t; practiceSel.has(t) ? practiceSel.delete(t) : practiceSel.add(t); render(); },
    clearPractice: () => { practiceSel.clear(); render(); },
    practiceCustom: () => practice([...practiceSel], practiceCount, 'Session personnalisée'),
    dictTab: el => { dictTab = el.dataset.k; render(); },
    dictCat: el => { dictCat = el.dataset.c; render(); },
    lookup: () => lookup(document.getElementById('oq').value),
    addWord: el => { if (addWord(el.dataset.w, el.dataset.tr, el.dataset.ex)) render(); },
    addOnline: () => {
      const e = online.data?.[0]; if (!e) return;
      const def = e.meanings?.[0]?.definitions?.[0];
      const tr = prompt(`Traduction française de « ${e.word} » :`, ''); if (tr === null) return;
      if (addWord(e.word, tr || def?.definition || '', def?.example || '')) render();
    },
    addWordForm: () => {
      const w = document.getElementById('nw').value.trim(), tr = document.getElementById('ntr').value.trim(), ex = document.getElementById('nex').value.trim();
      if (addWord(w, tr, ex)) render();
    },
    delWord: el => { S.words = S.words.filter(w => w.id !== el.dataset.id); save(); render(); },
    flashcards, operaQuiz,
    operaCat: el => { operaCat = el.dataset.c; operaLimit = 120; render(); },
    moreOpera: () => { operaLimit += 200; render(); },
    operaFromSearch: () => { operaQuery = dictQuery; operaCat = 'Toutes'; dictTab = 'opera'; render(); },
    verbQuiz: el => verbQuiz(el.dataset.mode || 'irr'),
    verbKind: el => { verbKind = el.dataset.k; verbLimit = 150; render(); },
    moreVerbs: () => { verbLimit += 200; render(); },
    print: () => window.print(),
    saveSettings: () => {
      S.profile.name = document.getElementById('set-name').value.trim();
      const on = document.querySelector('#set-goal .on'); if (on) S.profile.dailyMinutes = +on.dataset.g;
      const von = document.querySelector('#set-vgoal .on'); if (von) S.profile.vocabMinutes = +von.dataset.g;
      save(); toast('✓', 'Réglages enregistrés'); render();
    },
    exportData: () => {
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `reine-des-temps-sauvegarde-${today()}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    },
    resetAll: () => {
      if (!confirm('Effacer définitivement toute ta progression ? Pense à exporter une sauvegarde avant.')) return;
      S = fresh(); save(); location.hash = '#/'; render();
    },
  };

  /* ==========================================================
     ROUTEUR & RENDU
     ========================================================== */
  const ROUTES = {
    dashboard: [viewDashboard, 'Tableau de bord'], daily: [viewDaily, 'Vocalise du jour'], lessons: [viewLessons, 'Leçons'],
    lesson: [viewLesson, 'Leçon'], compare: [viewCompare, 'Comparatif'], practice: [viewPractice, 'Entraînement'],
    dictionary: [viewDictionary, 'Dictionnaire'], progress: [viewProgress, 'Progression'], reports: [viewReports, 'Critiques'],
    report: [viewReport, 'Critique de la semaine'], vocab: [viewVocab, 'Vocabulaire du jour'], rewards: [viewRewards, 'Récompenses'], settings: [viewSettings, 'Réglages'], quiz: [viewQuiz, ''],
  };
  let lastRoute = '', animNow = true;
  function render() {
    const app = document.getElementById('app');
    const [, name = 'dashboard', param] = (location.hash || '#/dashboard').replace(/^#\/?/, '#/').split('/');
    const routeKey = name + '/' + (param || '');
    animNow = routeKey !== lastRoute;
    let out, active = name;
    if (!S.onboarded && name !== 'quiz') out = viewOnboarding();
    else { const r = ROUTES[name] || ROUTES.dashboard; if (!ROUTES[name]) active = 'dashboard'; out = r[0](param); out = typeof out === 'string' ? { html: shell(out, active, (ROUTES[name] || ROUTES.dashboard)[1]) } : out; }
    app.innerHTML = out.html;
    if (animNow && name !== 'quiz') window.scrollTo(0, 0);
    lastRoute = routeKey;
    out.mount && out.mount();
    mountCommon();
  }
  function mountCommon() {
    const dq = document.getElementById('dq');
    if (dq) { dq.oninput = () => { dictQuery = dq.value; const pos = dq.selectionStart; render(); const n = document.getElementById('dq'); n.focus(); n.setSelectionRange(pos, pos); }; }
    const oq = document.getElementById('oq'); if (oq) oq.onkeydown = e => { if (e.key === 'Enter') lookup(oq.value); };
    const opq = document.getElementById('opq');
    if (opq) { opq.oninput = () => { operaQuery = opq.value; operaLimit = 120; const pos = opq.selectionStart; render(); const n = document.getElementById('opq'); n.focus(); n.setSelectionRange(pos, pos); }; }
    const vq = document.getElementById('vq');
    if (vq) { vq.oninput = () => { verbFilter = vq.value; verbLimit = 150; const pos = vq.selectionStart; render(); const n = document.getElementById('vq'); n.focus(); n.setSelectionRange(pos, pos); }; }
    document.querySelectorAll('#pcount button').forEach(b => b.onclick = () => { practiceCount = +b.dataset.n; render(); });
    ['#set-goal', '#set-vgoal'].forEach(sel => document.querySelectorAll(sel + ' button').forEach(b => b.onclick = () => { document.querySelectorAll(sel + ' button').forEach(x => x.classList.remove('on')); b.classList.add('on'); }));
    const imp = document.getElementById('importFile');
    if (imp) imp.onchange = () => {
      const f = imp.files[0]; if (!f) return;
      f.text().then(txt => { const data = JSON.parse(txt); if (!data.version) throw new Error(); S = Object.assign(fresh(), data); migrate(); save(); toast('✓', 'Sauvegarde importée'); render(); })
        .catch(() => toast('⚠️', 'Fichier invalide'));
    };
  }

  document.addEventListener('click', e => {
    const sb = document.getElementById('sidebar');
    if (sb && sb.classList.contains('open') && !e.target.closest('#sidebar') && !e.target.closest('[data-act="toggleMenu"]')) { sb.classList.remove('open'); return; }
    const say_ = e.target.closest('[data-say]'); if (say_) { e.stopPropagation(); say(say_.dataset.say); return; }
    const au = e.target.closest('[data-audio]'); if (au) { new Audio(au.dataset.audio).play().catch(() => say(online.word)); return; }
    const a = e.target.closest('[data-act]');
    if (a && a.classList.contains('modal-backdrop') && e.target.closest('.modal')) return;
    if (a && a.dataset.act && ACT[a.dataset.act]) {
      e.preventDefault(); ACT[a.dataset.act](a, e); return;
    }
    const g = e.target.closest('[data-go]');
    if (g) { document.getElementById('sidebar')?.classList.remove('open'); location.hash = g.dataset.go; }
  });
  document.addEventListener('keydown', e => {
    if (document.getElementById('modal-root').innerHTML) { if (e.key === 'Escape') closeModal(); return; }
    if (!Q || Q.finished || location.hash !== '#/quiz') return;
    const q = Q.items[Q.i];
    if (Q.ans) { if (e.key === 'Enter') { e.preventDefault(); quizNext(); } return; }
    if (q.k === 'mcq' && /^[1-4]$/.test(e.key) && +e.key <= q.o.length) { const i = +e.key - 1; quizAnswer(i === q.a, i); }
    if (q.k === 'fill' && e.key === 'Enter') { e.preventDefault(); ACT.submitFill(); }
    if (q.k === 'trans' && e.key === 'Enter') { e.preventDefault(); ACT.submitTrans(); }
    if (q.k === 'build' && e.key === 'Enter' && Q.build.picked.length) { e.preventDefault(); ACT.submitBuild(); }
    if (q.k === 'build' && e.key === 'Backspace' && Q.build.picked.length) { Q.build.picked.pop(); render(); }
  });
  window.addEventListener('hashchange', () => { if (location.hash !== '#/quiz' && Q && !Q.finished) Q = null; render(); });
  if ('speechSynthesis' in window) speechSynthesis.getVoices();

  /* ---------------- Démarrage ---------------- */
  checkStreak();
  if (S.onboarded) {
    checkBadges();
    const n = unseenFinalReports().length;
    if (n) setTimeout(() => toast('📰', 'La critique est parue', 'Découvre ton bilan de la semaine dernière.'), 1200);
  }
    render();

  /* Application installable (iPad, iPhone) : fonctionnement hors ligne et stockage durable */
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
})();
