export const APP = {
  name: "Atelier",
  subtitle: "Mon système de travail",
  period: "Septembre 2026 — septembre 2027",
  version: "Version 1.0",
  thesis:
    "Maintenir trois projets exigeants dans la durée, en donnant périodiquement à chacun assez de profondeur pour franchir un véritable changement de niveau.",
  unit: "L’unité de progrès est la transformation obtenue.",
} as const;

export const CHAPTERS = [
  { id: "intention", num: "01", label: "Intention", kicker: "Le document" },
  { id: "projets", num: "02", label: "Projets", kicker: "Trois formes de progrès" },
  { id: "journee", num: "03", label: "La journée", kicker: "Préparer, approfondir, fermer" },
  { id: "semaine", num: "04", label: "La semaine", kicker: "Une géométrie soutenable" },
  { id: "next", num: "05", label: "NEXT", kicker: "Le mécanisme de reprise" },
  { id: "regimes", num: "06", label: "Régimes", kicker: "Choisir l’intensité" },
  { id: "energie", num: "07", label: "Énergie", kicker: "Charge, fatigue, récupération" },
  { id: "jalons", num: "08", label: "Jalons", kicker: "Un an de trajectoire" },
  { id: "bilan", num: "09", label: "Bilan", kicker: "Observer, décider, placer" },
  { id: "regles", num: "10", label: "Une page", kicker: "Les règles fondamentales" },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];

export const SCALES = [
  {
    name: "Année",
    question: "Quelles capacités et quels objets construire ?",
    result: "Jalons à 3, 6 et 12 mois",
  },
  {
    name: "Semaine",
    question: "Où concentrer l’énergie maintenant ?",
    result: "Un résultat prioritaire par projet actif",
  },
  {
    name: "Séance",
    question: "Quelle transformation précise accomplir ?",
    result: "Une trace exploitable et une prochaine action",
  },
] as const;

export const PROJECTS = [
  {
    id: "essai",
    name: "Essai politique",
    short: "Essai",
    arc: "Matière → compréhension → argument → texte",
    proof: "Un passage mieux démontré, reformulé et raccordé",
    method:
      "Le chapitre donne le cadre. L’unité de séance est un problème argumentatif : ce qu’il affirme, sur quelle preuve, pourquoi cette preuve autorise la conclusion, ce qui la limite, ce qu’il transmet à la suite.",
    objects: [
      { name: "POC 0.1", focus: "Assembler et rendre la démonstration continue" },
      { name: "Passes profondes", focus: "Chaque élément remplit-il vraiment sa fonction ?" },
      { name: "Draft 1", focus: "La démonstration complète tient-elle ?" },
      { name: "Draft 2", focus: "Le manuscrit porte-t-il clairement cette démonstration ?" },
    ],
    note: "Une lecture ciblée peut être une excellente séance sans produire une page — à condition de laisser une compréhension formulée, une décision, ou une question mieux délimitée.",
  },
  {
    id: "musique",
    name: "Musique",
    short: "Musique",
    arc: "Compréhension → oreille → jeu → réutilisation",
    proof: "Une idée entendue, jouée et réemployée",
    method:
      "Un seul matériau circule : un morceau ou un passage, une question principale, une réutilisation. Analyse, oreille, clavier, guitare, saxophone, improvisation et création travaillent le même dossier, pas sept programmes concurrents.",
    objects: [
      { name: "Analyse", focus: "Fonctions, mouvements, relation mélodie–harmonie" },
      { name: "Oreille", focus: "Chanter, reconnaître, relever une partie du mouvement" },
      { name: "Instruments", focus: "Rendre la structure audible, puis transférer" },
      { name: "Création", focus: "Improviser, varier, en tirer quelques mesures" },
    ],
    note: "Le soir prépare le passage. Le matin approfondit. Une séance pratique ultérieure vérifie ce que cette compréhension change à l’écoute et au jeu. Le MPC/FM1 reste principalement dans le loisir libre.",
  },
  {
    id: "rustfx",
    name: "RustFX",
    short: "RustFX",
    arc: "Expérimentation → fonction → intégration → système",
    proof: "Un comportement reproductible dans la chaîne audio",
    method:
      "La chaîne de référence est entrée audio → traitement → sortie, avec un contrôle exploitable. La roadmap tient en trois positions : maintenant, ensuite, plus tard. Les blocs isolés ne s’accumulent pas.",
    objects: [
      { name: "Maintenant", focus: "Un obstacle ou une fonction à traiter" },
      { name: "Ensuite", focus: "L’intégration qui rend ce travail utile" },
      { name: "Plus tard", focus: "Les extensions hors du travail courant" },
      { name: "Mesure", focus: "Latence, charge, saturation, artefacts, paramètres" },
    ],
    note: "Une séance peut supprimer du code et faire avancer le projet si elle élimine une voie fragile. Un échec documenté compte comme une clôture valable.",
  },
] as const;

export type ProjectId = (typeof PROJECTS)[number]["id"];

export const SESSION_BEATS = [
  { name: "Reprise", duration: "5 min", action: "Lire NEXT et retrouver le résultat visé" },
  { name: "Travail central", duration: "70 min", action: "Traiter une seule question principale" },
  { name: "Fermeture", duration: "15 min", action: "Conserver le résultat et préparer la reprise" },
] as const;

export const EVENING_FORMATS = [
  {
    name: "Préparation minimale",
    duration: "10–20 min",
    role: "Choisir la question, ouvrir les ressources, écrire le départ",
  },
  {
    name: "Séance complémentaire",
    duration: "45–90 min",
    role: "Application instrumentale, lecture ciblée ou consolidation — jamais une dette quotidienne",
  },
] as const;

export const AFTERNOON_STEPS = [
  {
    title: "Collation déjà prête",
    body: "Décidée avant la faim, visible, préparée le dimanche. Rien à choisir vers 17 h.",
  },
  {
    title: "Repas loin de l’écran",
    body: "Téléphone hors de portée. Le repas n’est pas un sas vers le scroll.",
  },
  {
    title: "Une activité choisie le matin",
    body: "Marche courte, lecture hors-sujet, un bout de match. Une seule option, pas un menu.",
  },
  {
    title: "Minuteur de 20 à 30 min",
    body: "Le créneau a une fin fixée par une alarme, pas par une sensation.",
  },
  {
    title: "Retour au travail via ce sas",
    body: "Jamais directement depuis le repas. Le sas clôt la fatigue au lieu de la prolonger.",
  },
] as const;

export const WEEK = [
  {
    id: "lun",
    name: "Lundi",
    short: "Lun",
    main: "RustFX",
    project: "rustfx" as const,
    when: "À partir de 16 h",
    detail: "Séance longue d’exploration et de développement. Le matin reste disponible.",
    slots: [
      { band: "Matin", label: "Disponible" },
      { band: "16 h", label: "RustFX long — hypothèse, défaut, bloc" },
      { band: "Soir", label: "Léger · préparation minimale" },
    ],
  },
  {
    id: "mar",
    name: "Mardi",
    short: "Mar",
    main: "Essai",
    project: "essai" as const,
    when: "6 h 30 – 8 h",
    detail: "Bloc profond sur un problème argumentatif. Soir : instrument et préparation du mercredi.",
    slots: [
      { band: "6 h 30", label: "Essai — une question, une trace" },
      { band: "Journée", label: "Travail professionnel" },
      { band: "Soir", label: "Instrument · préparer mercredi" },
    ],
  },
  {
    id: "mer",
    name: "Mercredi",
    short: "Mer",
    main: "Harmonie",
    project: "musique" as const,
    when: "6 h 30 – 8 h",
    detail: "Dossier musical : comprendre un mouvement, le rendre audible. Puis application instrumentale.",
    slots: [
      { band: "6 h 30", label: "Harmonie — un passage, une question" },
      { band: "Journée", label: "Travail professionnel" },
      { band: "Soir", label: "Application instrumentale · préparer jeudi" },
    ],
  },
  {
    id: "jeu",
    name: "Jeudi",
    short: "Jeu",
    main: "Essai",
    project: "essai" as const,
    when: "6 h 30 – 8 h",
    detail: "Deuxième matinée d’essai. Entretien RustFX court. Préparer le samedi ici, pas vendredi soir.",
    slots: [
      { band: "6 h 30", label: "Essai" },
      { band: "Entretien", label: "RustFX court — état, ressources, NEXT" },
      { band: "Soir", label: "Préparer vendredi · et le samedi RustFX" },
    ],
  },
  {
    id: "ven",
    name: "Vendredi",
    short: "Ven",
    main: "Harmonie",
    project: "musique" as const,
    when: "6 h 30 – 8 h",
    detail: "Deuxième matinée d’harmonie. La soirée est entièrement libre — réellement libre.",
    slots: [
      { band: "6 h 30", label: "Harmonie" },
      { band: "Journée", label: "Travail professionnel" },
      { band: "Soir", label: "Soirée libre" },
    ],
  },
  {
    id: "sam",
    name: "Samedi",
    short: "Sam",
    main: "RustFX",
    project: "rustfx" as const,
    when: "Matin",
    detail: "Intégration et consolidation : replacer le travail du lundi dans la chaîne, mesurer, figer un état reproductible.",
    slots: [
      { band: "Matin", label: "RustFX long — intégration, mesure" },
      { band: "Après-midi", label: "Libre" },
      { band: "Soir", label: "Préparation brève du dimanche" },
    ],
  },
  {
    id: "dim",
    name: "Dimanche",
    short: "Dim",
    main: "Essai",
    project: "essai" as const,
    when: "Bloc matinal",
    detail: "Synthèse sur machine à écrire : deux à trois pages, référencées au POC. Puis bilan de vingt minutes et préparation de la semaine.",
    slots: [
      { band: "Matin", label: "Essai — Lettera 32, 2–3 pages, lien POC" },
      { band: "Après", label: "Scanner, coller dans Obsidian, conserver le scan" },
      { band: "Bilan", label: "20 min — observer, décider, placer, préparer" },
    ],
  },
] as const;

export const NEXT_FIELDS = [
  { key: "etat", label: "ÉTAT", hint: "Où en est l’objet travaillé ?" },
  { key: "resultat", label: "RÉSULTAT", hint: "Qu’ai-je compris, produit ou éliminé ?" },
  { key: "obstacle", label: "OBSTACLE", hint: "Quelle difficulté reste ouverte ?" },
  { key: "next", label: "NEXT", hint: "Quelle action exacte déclenche la prochaine séance ?" },
  { key: "acces", label: "ACCÈS", hint: "Quel fichier, passage, morceau ou test ouvrir ?" },
] as const;

export const NEXT_EXAMPLES = [
  {
    project: "essai" as const,
    bad: "Continuer le chapitre.",
    good: "Reprendre le passage sur l’après-indépendance ; confronter l’affirmation de continuité au passage repéré chez Leveau ; terminer par une formulation distinguant fait et inférence.",
    fields: {
      etat: "Raccord après-indépendance encore trop affirmatif.",
      resultat: "Leveau donne un contrepoint factuel ; l’inférence de continuité n’est pas établie.",
      obstacle: "La formulation actuelle mélange fait et lecture.",
      next: "Confronter l’affirmation au passage Leveau ; distinguer fait et inférence en une phrase.",
      acces: "POC § après-indépendance · note Leveau · draft du raccord.",
    },
  },
  {
    project: "musique" as const,
    bad: "Travailler l’harmonie.",
    good: "Reprendre huit mesures du standard choisi ; chanter le mouvement des notes guides, puis le réaliser au clavier et à la guitare ; enregistrer un essai.",
    fields: {
      etat: "Huit mesures lues, pas encore dans l’oreille.",
      resultat: "Fonctions identifiées ; le mouvement des notes guides n’est pas chantable seul.",
      obstacle: "Le transfert clavier → guitare casse la voix intérieure.",
      next: "Chanter les notes guides, les poser au clavier puis à la guitare, enregistrer un essai.",
      acces: "Lead sheet du standard · prise précédente · clavier et guitare prêts.",
    },
  },
  {
    project: "rustfx" as const,
    bad: "Avancer sur le DSP.",
    good: "Reproduire le défaut avec le signal de test enregistré ; comparer traitement actif et contourné ; consigner la mesure avant de modifier le bloc.",
    fields: {
      etat: "Artefact audible, non isolé.",
      resultat: "Le défaut n’apparaît que chaîne complète, pas en bloc isolé.",
      obstacle: "Pas de mesure avant/après comparable.",
      next: "Rejouer le signal de test ; comparer actif / contourné ; noter la mesure, puis seulement modifier.",
      acces: "Projet RustFX · signal de test · build reproductible de lundi.",
    },
  },
] as const;

export const REGIMES = [
  {
    name: "Sprint",
    role: "Produire un résultat délimité",
    commit: "Davantage de séances pendant une durée annoncée",
    exit: "Résultat obtenu, ou bilan à la date prévue",
  },
  {
    name: "Actif",
    role: "Faire avancer le projet régulièrement",
    commit: "Séances profondes et résultat hebdomadaire",
    exit: "Révision au bilan",
  },
  {
    name: "Maintenance",
    role: "Préserver l’état et réduire le coût de reprise",
    commit: "Contact court, contexte à jour, NEXT exploitable",
    exit: "Retour à l’activité, ou pause assumée",
  },
  {
    name: "Pause volontaire",
    role: "Libérer de la capacité",
    commit: "État sauvegardé et date de réexamen",
    exit: "Décision explicite de reprise",
  },
  {
    name: "Loisir libre",
    role: "Jouer, explorer, se détendre",
    commit: "Aucune obligation de résultat",
    exit: "Au choix",
  },
] as const;

export const ENERGY_LEVELS = [
  {
    id: "bonne",
    label: "Bonne",
    choice: "Lecture difficile, raisonnement, analyse harmonique, débogage exigeant",
  },
  {
    id: "moyenne",
    label: "Moyenne",
    choice: "Réécriture délimitée, pratique connue, intégration préparée",
  },
  {
    id: "faible",
    label: "Faible",
    choice: "NEXT, classement ciblé, écoute libre, fermeture ou repos",
  },
] as const;

export const PHENOMENA = [
  { name: "Temps investi", how: "Durée effectivement consacrée à l’activité" },
  { name: "Présence mentale", how: "Place occupée par le projet, y compris hors séance" },
  { name: "Apprentissage", how: "Compréhension formulable ou capacité réutilisable" },
  { name: "Production", how: "Objet transformé : texte, enregistrement, fonction intégrée" },
  { name: "Rumination", how: "Même problème revisité sans apport ni décision nouvelle" },
] as const;

export const OVERLOAD = [
  { signal: "Deux séances consécutives peinent à démarrer", action: "Réduire la prochaine tâche et améliorer NEXT" },
  { signal: "Plusieurs soirées deviennent obligatoires", action: "Supprimer une séance complémentaire, ou réduire un régime" },
  { signal: "Un projet monopolise l’attention sans résultat nouveau", action: "Définir une question fermée et un critère d’arrêt" },
  { signal: "Un projet devient difficile à reprendre", action: "Séance de remise en contexte, délimitée" },
  { signal: "Fatigue persistante ou sommeil écourté", action: "Alléger le volume et revoir les horaires" },
  { signal: "Semaine perturbée", action: "Une priorité, et seulement les reprises utiles" },
] as const;

export const MILESTONES = [
  {
    horizon: "3 mois",
    when: "Décembre 2026",
    items: [
      { project: "Essai", level: "POC et passes profondes engagées", test: "Manuscrit continu, problèmes majeurs classés" },
      { project: "Musique", level: "Langage harmonique disponible", test: "Deux ou trois morceaux laboratoires, traces audio comparables" },
      { project: "RustFX", level: "Projet vivant, socle fonctionnel", test: "Peux-tu travailler dès l’ouverture de la séance ?" },
    ],
  },
  {
    horizon: "6 mois",
    when: "Mars 2027",
    items: [
      { project: "Essai", level: "Draft 1 sérieux", test: "Tous les chapitres ont reçu une passe importante" },
      { project: "Musique", level: "Passerelles construites", test: "Chanter, réaliser, improviser, varier un même passage" },
      { project: "RustFX", level: "Prototype jouable", test: "Peux-tu jouer avec un système cohérent ?" },
    ],
  },
  {
    horizon: "12 mois",
    when: "Septembre 2027",
    items: [
      { project: "Essai", level: "Draft 2 mature", test: "Architecture, objections, affirmations vérifiées" },
      { project: "Musique", level: "Première autonomie intégrée", test: "Préparer un morceau avec une méthode autonome" },
      { project: "RustFX", level: "Plateforme personnelle extensible", test: "Peux-tu modifier une partie sans casser l’ensemble ?" },
    ],
  },
] as const;

export const YEAR_PHASES = [
  { period: "Septembre 2026", essai: "Assemblage du POC", musique: "Matériau commun, premières traces", rustfx: "État des lieux reproductible" },
  { period: "Octobre–décembre", essai: "Passes sur les problèmes prioritaires", musique: "Langage et applications", rustfx: "Socle audio/DSP, reprise fluide" },
  { period: "Janvier–mars 2027", essai: "Achèvement visé du Draft 1", musique: "Oreille, transfert, improvisation", rustfx: "Prototype jouable" },
  { period: "Avril–juin", essai: "Révision globale et objections", musique: "Intégration sur un répertoire", rustfx: "Stabilisation et extensibilité" },
  { period: "Juillet–septembre", essai: "Draft 2, retour extérieur possible", musique: "Arrangements, créations, autonomie", rustfx: "Plateforme personnelle" },
] as const;

export const REVIEW_FIELDS = [
  { key: "contraintes", label: "Contraintes et énergie prévues" },
  { key: "priorite", label: "Priorité de la semaine" },
  { key: "essai", label: "Essai — régime, résultat, première action" },
  { key: "musique", label: "Musique — régime, résultat, première action" },
  { key: "rustfx", label: "RustFX — régime, résultat, première action" },
  { key: "libre", label: "Soirée libre et marge conservée" },
  { key: "ajustement", label: "Un ajustement de méthode à essayer" },
] as const;

export const RULES = [
  "Un front personnel lourd par jour, en tenant compte de la journée professionnelle.",
  "Une question principale par séance, et un NEXT précis à la fermeture.",
  "Fermer porte sur la question du jour, pas sur le projet entier.",
  "Un sprint a un résultat et une date de fin.",
  "Les lectures répondent à un besoin ; les expériences rejoignent le système.",
  "Le MPC/FM1 conserve une place libre.",
  "Les jalons se valident par leurs résultats, pas par leur seule date.",
  "Les séances manquées se réévaluent au bilan — elles ne basculent pas automatiquement sur le week-end.",
  "Un jour isolé d’échec n’invalide rien ; deux jours d’affilée se notent.",
] as const;

export const SIGNALS = [
  "Reprise longue répétée",
  "Fatigue persistante",
  "Soirées devenues obligatoires",
  "Projet mentalement envahissant",
  "Lectures ou expériences sans transformation",
  "Disparition prolongée d’un projet",
  "Critères de jalon qui cessent de se rapprocher",
] as const;

export const INSUFFICIENCIES = [
  { name: "Documentaire", diagnosis: "Un fait ou une interprétation manque d’appui", action: "Revenir à une source précise" },
  { name: "Argumentative", diagnosis: "Les éléments présents n’établissent pas la conclusion", action: "Revoir le raisonnement, comparer, limiter" },
  { name: "Rédactionnelle", diagnosis: "La démonstration est disponible mais mal exposée", action: "Réordonner et reformuler" },
] as const;
