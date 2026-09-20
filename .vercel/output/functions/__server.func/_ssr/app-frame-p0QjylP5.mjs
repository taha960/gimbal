import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ChevronRight, r as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-frame-p0QjylP5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs font-medium tracking-[0.18em] text-muted uppercase",
		children
	});
}
function ChapterHeader({ num, kicker, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: [
				num,
				" · ",
				kicker
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl",
				children: title
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg leading-relaxed text-muted",
				children: lead
			}) : null
		]
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6", className),
		children
	});
}
function Quote({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
		className: "border-l-2 border-pine pl-5 font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl",
		children
	});
}
function GridCards({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-pine text-pine-fg shadow-[var(--shadow-border)] hover:opacity-90",
			outline: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:bg-paper hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-ink hover:bg-paper",
			quiet: "text-muted hover:text-ink hover:bg-paper"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var APP = {
	name: "Atelier",
	subtitle: "Mon système de travail",
	period: "Septembre 2026 — septembre 2027",
	version: "Version 1.0",
	thesis: "Maintenir trois projets exigeants dans la durée, en donnant périodiquement à chacun assez de profondeur pour franchir un véritable changement de niveau.",
	unit: "L’unité de progrès est la transformation obtenue."
};
var CHAPTERS = [
	{
		id: "intention",
		num: "01",
		label: "Intention",
		kicker: "Le document"
	},
	{
		id: "projets",
		num: "02",
		label: "Projets",
		kicker: "Trois formes de progrès"
	},
	{
		id: "journee",
		num: "03",
		label: "La journée",
		kicker: "Préparer, approfondir, fermer"
	},
	{
		id: "semaine",
		num: "04",
		label: "La semaine",
		kicker: "Une géométrie soutenable"
	},
	{
		id: "next",
		num: "05",
		label: "NEXT",
		kicker: "Le mécanisme de reprise"
	},
	{
		id: "regimes",
		num: "06",
		label: "Régimes",
		kicker: "Choisir l’intensité"
	},
	{
		id: "energie",
		num: "07",
		label: "Énergie",
		kicker: "Charge, fatigue, récupération"
	},
	{
		id: "jalons",
		num: "08",
		label: "Jalons",
		kicker: "Un an de trajectoire"
	},
	{
		id: "bilan",
		num: "09",
		label: "Bilan",
		kicker: "Observer, décider, placer"
	},
	{
		id: "regles",
		num: "10",
		label: "Une page",
		kicker: "Les règles fondamentales"
	}
];
var SCALES = [
	{
		name: "Année",
		question: "Quelles capacités et quels objets construire ?",
		result: "Jalons à 3, 6 et 12 mois"
	},
	{
		name: "Semaine",
		question: "Où concentrer l’énergie maintenant ?",
		result: "Un résultat prioritaire par projet actif"
	},
	{
		name: "Séance",
		question: "Quelle transformation précise accomplir ?",
		result: "Une trace exploitable et une prochaine action"
	}
];
var PROJECTS = [
	{
		id: "essai",
		name: "Essai politique",
		short: "Essai",
		arc: "Matière → compréhension → argument → texte",
		proof: "Un passage mieux démontré, reformulé et raccordé",
		method: "Le chapitre donne le cadre. L’unité de séance est un problème argumentatif : ce qu’il affirme, sur quelle preuve, pourquoi cette preuve autorise la conclusion, ce qui la limite, ce qu’il transmet à la suite.",
		objects: [
			{
				name: "POC 0.1",
				focus: "Assembler et rendre la démonstration continue"
			},
			{
				name: "Passes profondes",
				focus: "Chaque élément remplit-il vraiment sa fonction ?"
			},
			{
				name: "Draft 1",
				focus: "La démonstration complète tient-elle ?"
			},
			{
				name: "Draft 2",
				focus: "Le manuscrit porte-t-il clairement cette démonstration ?"
			}
		],
		note: "Une lecture ciblée peut être une excellente séance sans produire une page — à condition de laisser une compréhension formulée, une décision, ou une question mieux délimitée."
	},
	{
		id: "musique",
		name: "Musique",
		short: "Musique",
		arc: "Compréhension → oreille → jeu → réutilisation",
		proof: "Une idée entendue, jouée et réemployée",
		method: "Un seul matériau circule : un morceau ou un passage, une question principale, une réutilisation. Analyse, oreille, clavier, guitare, saxophone, improvisation et création travaillent le même dossier, pas sept programmes concurrents.",
		objects: [
			{
				name: "Analyse",
				focus: "Fonctions, mouvements, relation mélodie–harmonie"
			},
			{
				name: "Oreille",
				focus: "Chanter, reconnaître, relever une partie du mouvement"
			},
			{
				name: "Instruments",
				focus: "Rendre la structure audible, puis transférer"
			},
			{
				name: "Création",
				focus: "Improviser, varier, en tirer quelques mesures"
			}
		],
		note: "Le soir prépare le passage. Le matin approfondit. Une séance pratique ultérieure vérifie ce que cette compréhension change à l’écoute et au jeu. Le MPC/FM1 reste principalement dans le loisir libre."
	},
	{
		id: "rustfx",
		name: "RustFX",
		short: "RustFX",
		arc: "Expérimentation → fonction → intégration → système",
		proof: "Un comportement reproductible dans la chaîne audio",
		method: "La chaîne de référence est entrée audio → traitement → sortie, avec un contrôle exploitable. La roadmap tient en trois positions : maintenant, ensuite, plus tard. Les blocs isolés ne s’accumulent pas.",
		objects: [
			{
				name: "Maintenant",
				focus: "Un obstacle ou une fonction à traiter"
			},
			{
				name: "Ensuite",
				focus: "L’intégration qui rend ce travail utile"
			},
			{
				name: "Plus tard",
				focus: "Les extensions hors du travail courant"
			},
			{
				name: "Mesure",
				focus: "Latence, charge, saturation, artefacts, paramètres"
			}
		],
		note: "Une séance peut supprimer du code et faire avancer le projet si elle élimine une voie fragile. Un échec documenté compte comme une clôture valable."
	}
];
var SESSION_BEATS = [
	{
		name: "Reprise",
		duration: "5 min",
		action: "Lire NEXT et retrouver le résultat visé"
	},
	{
		name: "Travail central",
		duration: "70 min",
		action: "Traiter une seule question principale"
	},
	{
		name: "Fermeture",
		duration: "15 min",
		action: "Conserver le résultat et préparer la reprise"
	}
];
var EVENING_FORMATS = [{
	name: "Préparation minimale",
	duration: "10–20 min",
	role: "Choisir la question, ouvrir les ressources, écrire le départ"
}, {
	name: "Séance complémentaire",
	duration: "45–90 min",
	role: "Application instrumentale, lecture ciblée ou consolidation — jamais une dette quotidienne"
}];
var AFTERNOON_STEPS = [
	{
		title: "Collation déjà prête",
		body: "Décidée avant la faim, visible, préparée le dimanche. Rien à choisir vers 17 h."
	},
	{
		title: "Repas loin de l’écran",
		body: "Téléphone hors de portée. Le repas n’est pas un sas vers le scroll."
	},
	{
		title: "Une activité choisie le matin",
		body: "Marche courte, lecture hors-sujet, un bout de match. Une seule option, pas un menu."
	},
	{
		title: "Minuteur de 20 à 30 min",
		body: "Le créneau a une fin fixée par une alarme, pas par une sensation."
	},
	{
		title: "Retour au travail via ce sas",
		body: "Jamais directement depuis le repas. Le sas clôt la fatigue au lieu de la prolonger."
	}
];
var WEEK = [
	{
		id: "lun",
		name: "Lundi",
		short: "Lun",
		main: "RustFX",
		project: "rustfx",
		when: "À partir de 16 h",
		detail: "Séance longue d’exploration et de développement. Le matin reste disponible.",
		slots: [
			{
				band: "Matin",
				label: "Disponible"
			},
			{
				band: "16 h",
				label: "RustFX long — hypothèse, défaut, bloc"
			},
			{
				band: "Soir",
				label: "Léger · préparation minimale"
			}
		]
	},
	{
		id: "mar",
		name: "Mardi",
		short: "Mar",
		main: "Essai",
		project: "essai",
		when: "6 h 30 – 8 h",
		detail: "Bloc profond sur un problème argumentatif. Soir : instrument et préparation du mercredi.",
		slots: [
			{
				band: "6 h 30",
				label: "Essai — une question, une trace"
			},
			{
				band: "Journée",
				label: "Travail professionnel"
			},
			{
				band: "Soir",
				label: "Instrument · préparer mercredi"
			}
		]
	},
	{
		id: "mer",
		name: "Mercredi",
		short: "Mer",
		main: "Harmonie",
		project: "musique",
		when: "6 h 30 – 8 h",
		detail: "Dossier musical : comprendre un mouvement, le rendre audible. Puis application instrumentale.",
		slots: [
			{
				band: "6 h 30",
				label: "Harmonie — un passage, une question"
			},
			{
				band: "Journée",
				label: "Travail professionnel"
			},
			{
				band: "Soir",
				label: "Application instrumentale · préparer jeudi"
			}
		]
	},
	{
		id: "jeu",
		name: "Jeudi",
		short: "Jeu",
		main: "Essai",
		project: "essai",
		when: "6 h 30 – 8 h",
		detail: "Deuxième matinée d’essai. Entretien RustFX court. Préparer le samedi ici, pas vendredi soir.",
		slots: [
			{
				band: "6 h 30",
				label: "Essai"
			},
			{
				band: "Entretien",
				label: "RustFX court — état, ressources, NEXT"
			},
			{
				band: "Soir",
				label: "Préparer vendredi · et le samedi RustFX"
			}
		]
	},
	{
		id: "ven",
		name: "Vendredi",
		short: "Ven",
		main: "Harmonie",
		project: "musique",
		when: "6 h 30 – 8 h",
		detail: "Deuxième matinée d’harmonie. La soirée est entièrement libre — réellement libre.",
		slots: [
			{
				band: "6 h 30",
				label: "Harmonie"
			},
			{
				band: "Journée",
				label: "Travail professionnel"
			},
			{
				band: "Soir",
				label: "Soirée libre"
			}
		]
	},
	{
		id: "sam",
		name: "Samedi",
		short: "Sam",
		main: "RustFX",
		project: "rustfx",
		when: "Matin",
		detail: "Intégration et consolidation : replacer le travail du lundi dans la chaîne, mesurer, figer un état reproductible.",
		slots: [
			{
				band: "Matin",
				label: "RustFX long — intégration, mesure"
			},
			{
				band: "Après-midi",
				label: "Libre"
			},
			{
				band: "Soir",
				label: "Préparation brève du dimanche"
			}
		]
	},
	{
		id: "dim",
		name: "Dimanche",
		short: "Dim",
		main: "Essai",
		project: "essai",
		when: "Bloc matinal",
		detail: "Synthèse sur machine à écrire : deux à trois pages, référencées au POC. Puis bilan de vingt minutes et préparation de la semaine.",
		slots: [
			{
				band: "Matin",
				label: "Essai — Lettera 32, 2–3 pages, lien POC"
			},
			{
				band: "Après",
				label: "Scanner, coller dans Obsidian, conserver le scan"
			},
			{
				band: "Bilan",
				label: "20 min — observer, décider, placer, préparer"
			}
		]
	}
];
var NEXT_FIELDS = [
	{
		key: "etat",
		label: "ÉTAT",
		hint: "Où en est l’objet travaillé ?"
	},
	{
		key: "resultat",
		label: "RÉSULTAT",
		hint: "Qu’ai-je compris, produit ou éliminé ?"
	},
	{
		key: "obstacle",
		label: "OBSTACLE",
		hint: "Quelle difficulté reste ouverte ?"
	},
	{
		key: "next",
		label: "NEXT",
		hint: "Quelle action exacte déclenche la prochaine séance ?"
	},
	{
		key: "acces",
		label: "ACCÈS",
		hint: "Quel fichier, passage, morceau ou test ouvrir ?"
	}
];
var NEXT_EXAMPLES = [
	{
		project: "essai",
		bad: "Continuer le chapitre.",
		good: "Reprendre le passage sur l’après-indépendance ; confronter l’affirmation de continuité au passage repéré chez Leveau ; terminer par une formulation distinguant fait et inférence.",
		fields: {
			etat: "Raccord après-indépendance encore trop affirmatif.",
			resultat: "Leveau donne un contrepoint factuel ; l’inférence de continuité n’est pas établie.",
			obstacle: "La formulation actuelle mélange fait et lecture.",
			next: "Confronter l’affirmation au passage Leveau ; distinguer fait et inférence en une phrase.",
			acces: "POC § après-indépendance · note Leveau · draft du raccord."
		}
	},
	{
		project: "musique",
		bad: "Travailler l’harmonie.",
		good: "Reprendre huit mesures du standard choisi ; chanter le mouvement des notes guides, puis le réaliser au clavier et à la guitare ; enregistrer un essai.",
		fields: {
			etat: "Huit mesures lues, pas encore dans l’oreille.",
			resultat: "Fonctions identifiées ; le mouvement des notes guides n’est pas chantable seul.",
			obstacle: "Le transfert clavier → guitare casse la voix intérieure.",
			next: "Chanter les notes guides, les poser au clavier puis à la guitare, enregistrer un essai.",
			acces: "Lead sheet du standard · prise précédente · clavier et guitare prêts."
		}
	},
	{
		project: "rustfx",
		bad: "Avancer sur le DSP.",
		good: "Reproduire le défaut avec le signal de test enregistré ; comparer traitement actif et contourné ; consigner la mesure avant de modifier le bloc.",
		fields: {
			etat: "Artefact audible, non isolé.",
			resultat: "Le défaut n’apparaît que chaîne complète, pas en bloc isolé.",
			obstacle: "Pas de mesure avant/après comparable.",
			next: "Rejouer le signal de test ; comparer actif / contourné ; noter la mesure, puis seulement modifier.",
			acces: "Projet RustFX · signal de test · build reproductible de lundi."
		}
	}
];
var REGIMES = [
	{
		name: "Sprint",
		role: "Produire un résultat délimité",
		commit: "Davantage de séances pendant une durée annoncée",
		exit: "Résultat obtenu, ou bilan à la date prévue"
	},
	{
		name: "Actif",
		role: "Faire avancer le projet régulièrement",
		commit: "Séances profondes et résultat hebdomadaire",
		exit: "Révision au bilan"
	},
	{
		name: "Maintenance",
		role: "Préserver l’état et réduire le coût de reprise",
		commit: "Contact court, contexte à jour, NEXT exploitable",
		exit: "Retour à l’activité, ou pause assumée"
	},
	{
		name: "Pause volontaire",
		role: "Libérer de la capacité",
		commit: "État sauvegardé et date de réexamen",
		exit: "Décision explicite de reprise"
	},
	{
		name: "Loisir libre",
		role: "Jouer, explorer, se détendre",
		commit: "Aucune obligation de résultat",
		exit: "Au choix"
	}
];
var ENERGY_LEVELS = [
	{
		id: "bonne",
		label: "Bonne",
		choice: "Lecture difficile, raisonnement, analyse harmonique, débogage exigeant"
	},
	{
		id: "moyenne",
		label: "Moyenne",
		choice: "Réécriture délimitée, pratique connue, intégration préparée"
	},
	{
		id: "faible",
		label: "Faible",
		choice: "NEXT, classement ciblé, écoute libre, fermeture ou repos"
	}
];
var PHENOMENA = [
	{
		name: "Temps investi",
		how: "Durée effectivement consacrée à l’activité"
	},
	{
		name: "Présence mentale",
		how: "Place occupée par le projet, y compris hors séance"
	},
	{
		name: "Apprentissage",
		how: "Compréhension formulable ou capacité réutilisable"
	},
	{
		name: "Production",
		how: "Objet transformé : texte, enregistrement, fonction intégrée"
	},
	{
		name: "Rumination",
		how: "Même problème revisité sans apport ni décision nouvelle"
	}
];
var OVERLOAD = [
	{
		signal: "Deux séances consécutives peinent à démarrer",
		action: "Réduire la prochaine tâche et améliorer NEXT"
	},
	{
		signal: "Plusieurs soirées deviennent obligatoires",
		action: "Supprimer une séance complémentaire, ou réduire un régime"
	},
	{
		signal: "Un projet monopolise l’attention sans résultat nouveau",
		action: "Définir une question fermée et un critère d’arrêt"
	},
	{
		signal: "Un projet devient difficile à reprendre",
		action: "Séance de remise en contexte, délimitée"
	},
	{
		signal: "Fatigue persistante ou sommeil écourté",
		action: "Alléger le volume et revoir les horaires"
	},
	{
		signal: "Semaine perturbée",
		action: "Une priorité, et seulement les reprises utiles"
	}
];
var MILESTONES = [
	{
		horizon: "3 mois",
		when: "Décembre 2026",
		items: [
			{
				project: "Essai",
				level: "POC et passes profondes engagées",
				test: "Manuscrit continu, problèmes majeurs classés"
			},
			{
				project: "Musique",
				level: "Langage harmonique disponible",
				test: "Deux ou trois morceaux laboratoires, traces audio comparables"
			},
			{
				project: "RustFX",
				level: "Projet vivant, socle fonctionnel",
				test: "Peux-tu travailler dès l’ouverture de la séance ?"
			}
		]
	},
	{
		horizon: "6 mois",
		when: "Mars 2027",
		items: [
			{
				project: "Essai",
				level: "Draft 1 sérieux",
				test: "Tous les chapitres ont reçu une passe importante"
			},
			{
				project: "Musique",
				level: "Passerelles construites",
				test: "Chanter, réaliser, improviser, varier un même passage"
			},
			{
				project: "RustFX",
				level: "Prototype jouable",
				test: "Peux-tu jouer avec un système cohérent ?"
			}
		]
	},
	{
		horizon: "12 mois",
		when: "Septembre 2027",
		items: [
			{
				project: "Essai",
				level: "Draft 2 mature",
				test: "Architecture, objections, affirmations vérifiées"
			},
			{
				project: "Musique",
				level: "Première autonomie intégrée",
				test: "Préparer un morceau avec une méthode autonome"
			},
			{
				project: "RustFX",
				level: "Plateforme personnelle extensible",
				test: "Peux-tu modifier une partie sans casser l’ensemble ?"
			}
		]
	}
];
var YEAR_PHASES = [
	{
		period: "Septembre 2026",
		essai: "Assemblage du POC",
		musique: "Matériau commun, premières traces",
		rustfx: "État des lieux reproductible"
	},
	{
		period: "Octobre–décembre",
		essai: "Passes sur les problèmes prioritaires",
		musique: "Langage et applications",
		rustfx: "Socle audio/DSP, reprise fluide"
	},
	{
		period: "Janvier–mars 2027",
		essai: "Achèvement visé du Draft 1",
		musique: "Oreille, transfert, improvisation",
		rustfx: "Prototype jouable"
	},
	{
		period: "Avril–juin",
		essai: "Révision globale et objections",
		musique: "Intégration sur un répertoire",
		rustfx: "Stabilisation et extensibilité"
	},
	{
		period: "Juillet–septembre",
		essai: "Draft 2, retour extérieur possible",
		musique: "Arrangements, créations, autonomie",
		rustfx: "Plateforme personnelle"
	}
];
var REVIEW_FIELDS = [
	{
		key: "contraintes",
		label: "Contraintes et énergie prévues"
	},
	{
		key: "priorite",
		label: "Priorité de la semaine"
	},
	{
		key: "essai",
		label: "Essai — régime, résultat, première action"
	},
	{
		key: "musique",
		label: "Musique — régime, résultat, première action"
	},
	{
		key: "rustfx",
		label: "RustFX — régime, résultat, première action"
	},
	{
		key: "libre",
		label: "Soirée libre et marge conservée"
	},
	{
		key: "ajustement",
		label: "Un ajustement de méthode à essayer"
	}
];
var RULES = [
	"Un front personnel lourd par jour, en tenant compte de la journée professionnelle.",
	"Une question principale par séance, et un NEXT précis à la fermeture.",
	"Fermer porte sur la question du jour, pas sur le projet entier.",
	"Un sprint a un résultat et une date de fin.",
	"Les lectures répondent à un besoin ; les expériences rejoignent le système.",
	"Le MPC/FM1 conserve une place libre.",
	"Les jalons se valident par leurs résultats, pas par leur seule date.",
	"Les séances manquées se réévaluent au bilan — elles ne basculent pas automatiquement sur le week-end.",
	"Un jour isolé d’échec n’invalide rien ; deux jours d’affilée se notent."
];
var SIGNALS = [
	"Reprise longue répétée",
	"Fatigue persistante",
	"Soirées devenues obligatoires",
	"Projet mentalement envahissant",
	"Lectures ou expériences sans transformation",
	"Disparition prolongée d’un projet",
	"Critères de jalon qui cessent de se rapprocher"
];
var INSUFFICIENCIES = [
	{
		name: "Documentaire",
		diagnosis: "Un fait ou une interprétation manque d’appui",
		action: "Revenir à une source précise"
	},
	{
		name: "Argumentative",
		diagnosis: "Les éléments présents n’établissent pas la conclusion",
		action: "Revoir le raisonnement, comparer, limiter"
	},
	{
		name: "Rédactionnelle",
		diagnosis: "La démonstration est disponible mais mal exposée",
		action: "Réordonner et reformuler"
	}
];
var STORAGE_KEY = "atelier-bilan";
function emptyReview() {
	return {
		contraintes: "",
		priorite: "",
		essai: "",
		musique: "",
		rustfx: "",
		libre: "",
		ajustement: ""
	};
}
function loadReview() {
	if (typeof window === "undefined") return emptyReview();
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return emptyReview();
		return {
			...emptyReview(),
			...JSON.parse(raw)
		};
	} catch {
		return emptyReview();
	}
}
function BilanChapter() {
	const [review, setReview] = (0, import_react.useState)(emptyReview);
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReview(loadReview());
	}, []);
	function save() {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(review));
		setSaved(true);
		window.setTimeout(() => setSaved(false), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "09",
				kicker: "Observer, décider, placer",
				title: "Vingt minutes le dimanche, avant de répartir",
				lead: "Regarder les traces plutôt que reconstituer toutes les heures. Une ligne par projet au bilan suffit. Ces catégories n’ont pas vocation à produire une note globale : elles aident à prendre une décision."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					{
						n: "01",
						t: "Observer",
						d: "Pour chaque projet : produit, compris, laissé ouvert."
					},
					{
						n: "02",
						t: "Décider",
						d: "Régime de la semaine suivante, un résultat principal par projet actif."
					},
					{
						n: "03",
						t: "Placer",
						d: "Séances lourdes, préparations indispensables, soirée libre. Laisser de la marge."
					},
					{
						n: "04",
						t: "Préparer",
						d: "Écrire le point de départ du premier bloc."
					}
				].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-faint",
							children: step.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: step.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: step.d
						})
					]
				}, step.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-medium tracking-tight",
					children: "Fiche de la semaine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Reste sur cet appareil. Rien n’est envoyé nulle part."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-5",
					onSubmit: (e) => {
						e.preventDefault();
						save();
					},
					children: [REVIEW_FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: field.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: review[field.key],
							onChange: (e) => {
								setReview((prev) => ({
									...prev,
									[field.key]: e.target.value
								}));
								setSaved(false);
							},
							rows: 3,
							className: "min-h-20 w-full resize-y rounded-md bg-bg px-3 py-3 text-sm leading-relaxed text-ink shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none",
							placeholder: "…"
						})]
					}, field.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Enregistrer la fiche"
						}), saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ok",
							children: "Enregistrée"
						}) : null]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Revue mensuelle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 grid gap-2 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quel projet a reçu le plus de temps, lequel a occupé le plus d’attention ?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quelles transformations sont désormais visibles ?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quel projet coûte davantage à reprendre ?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Les critères du prochain jalon se rapprochent-ils ?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quelle méthode produit peu malgré plusieurs essais ?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quel unique changement de répartition tester le mois suivant ?" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "Conserver les décisions qui fonctionnent assez longtemps pour observer leur effet. Changer tous les horaires chaque semaine rend le diagnostic difficile."
				})
			] })
		]
	});
}
function EnergieChapter() {
	const [level, setLevel] = (0, import_react.useState)("bonne");
	const current = ENERGY_LEVELS.find((e) => e.id === level) ?? ENERGY_LEVELS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "07",
				kicker: "Charge, fatigue, récupération",
				title: "Un seul front personnel lourd par jour",
				lead: "Le travail professionnel peut déjà avoir consommé une grande partie de la capacité. Choisir le type de séance selon l’énergie restante, pas selon la liste des envies."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl font-medium tracking-tight",
					children: "Quelle énergie aujourd’hui"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: ENERGY_LEVELS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: item.id === level ? "default" : "outline",
						className: "h-12 flex-1",
						onClick: () => setLevel(item.id),
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-widest text-muted uppercase",
						children: "Choix adapté"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-xl font-medium tracking-tight",
						children: current.choice
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl font-medium tracking-tight",
					children: "Cinq phénomènes à ne pas confondre"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: PHENOMENA.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.how
						})]
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Une idée utile hors séance se capture en une ligne. Si elle provoque sans cesse la réouverture du projet, la question devient celle de la charge mentale."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-2xl font-medium tracking-tight",
				children: "Signaux, décisions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: OVERLOAD.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)] md:grid-cols-2 md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: item.signal
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: item.action
					})]
				}, item.signal))
			})] })
		]
	});
}
function IntentionChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "01",
				kicker: "Le document",
				title: "Un système pour tenir la durée",
				lead: "Ce document organise les décisions qui produisent les semaines : quel projet approfondir, comment préparer une séance, ce qui constitue un progrès, et quand modifier la répartition du travail."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { children: APP.thesis }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-2xl font-medium tracking-tight",
				children: "Trois échelles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridCards, { children: SCALES.map((scale) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-muted uppercase",
					children: scale.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-ink",
					children: scale.question
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: scale.result
				})
			] }, scale.name)) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-medium tracking-tight",
					children: APP.unit
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Les échéances sont des cibles de pilotage. Un jalon se franchit lorsque ses critères sont remplis ; sa date ne suffit pas à le valider. La référence initiale est septembre 2026. Si le démarrage se décale, les horizons se déplacent ensemble."
				})]
			})
		]
	});
}
function JalonsChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "08",
				kicker: "Un an de trajectoire",
				title: "Les jalons se valident par leurs résultats",
				lead: "Après quelques passes, estimer le rythme réel. Si un chapitre exige beaucoup plus de séances que prévu, modifier le périmètre ou la date — pas le critère de qualité."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: MILESTONES.map((mile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: mile.horizon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: mile.when
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4",
					children: mile.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-1 border-t border-line pt-4 first:border-t-0 first:pt-0 md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted uppercase",
							children: item.project
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: item.level
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.test
						})] })]
					}, item.project))
				})] }, mile.horizon))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl font-medium tracking-tight",
					children: "La trajectoire"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: YEAR_PHASES.map((phase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: phase.period
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "Essai"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm leading-relaxed",
								children: phase.essai
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "Musique"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm leading-relaxed",
								children: phase.musique
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "RustFX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm leading-relaxed",
								children: phase.rustfx
							})] })
						]
					})] }, phase.period))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: "Nous sommes en septembre 2026 : fenêtre de sprint POC. Musique en continuité, RustFX au niveau compatible avec l’assemblage."
				})
			] })
		]
	});
}
function JourneeChapter() {
	const [step, setStep] = (0, import_react.useState)(0);
	const current = AFTERNOON_STEPS[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "03",
				kicker: "Préparer, approfondir, fermer",
				title: "Le soir réduit les décisions du matin",
				lead: "Réveil visé vers 6 h, bloc personnel vers 6 h 30–8 h lorsque la journée le permet. L’adoption est progressive : quelques matinées préparées, observer la fatigue, puis étendre."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: EVENING_FORMATS.map((format) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: format.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-xs text-muted",
						children: format.duration
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: format.role
					})
				] }, format.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl font-medium tracking-tight",
					children: "Une séance de 90 minutes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-3",
					children: SESSION_BEATS.map((beat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-4 rounded-lg bg-paper p-4 shadow-[var(--shadow-border)] sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm tabular-nums text-faint",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: beat.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted",
								children: beat.duration
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: beat.action
						})] })]
					}, beat.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Si une lecture ou un débogage prend toute la séance, la fermeture reste nécessaire. Elle transforme un effort interrompu en travail reprenable."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-display text-2xl font-medium tracking-tight",
					children: "La fenêtre de fin d’après-midi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Sport le midi, creux vers 17 h, faim traitée trop tard, repas, scroll. Ce n’est pas un manque de volonté : un créneau sans forme se remplit du geste le plus facile, au moment où il reste le moins d’énergie pour en choisir un autre. Le levier : retirer la décision de ce moment-là."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: AFTERNOON_STEPS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep(i),
							className: cn("h-11 rounded-md px-3 font-mono text-xs tabular-nums transition-colors duration-150", i === step ? "bg-pine text-pine-fg" : "bg-bg text-muted hover:text-ink"),
							children: String(i + 1).padStart(2, "0")
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-xl font-medium tracking-tight",
						children: current.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: current.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							disabled: step === 0,
							onClick: () => setStep((s) => Math.max(0, s - 1)),
							children: "Précédent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: step === AFTERNOON_STEPS.length - 1,
							onClick: () => setStep((s) => Math.min(AFTERNOON_STEPS.length - 1, s + 1)),
							children: "Étape suivante"
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Un jour où ça échoue n’est pas une faute, c’est une donnée. Ne pas rater deux fois de suite. Protocole à l’essai deux semaines avant d’être considéré comme acquis."
				})
			] })
		]
	});
}
function NextChapter() {
	const [projectId, setProjectId] = (0, import_react.useState)("essai");
	const example = NEXT_EXAMPLES.find((e) => e.project === projectId) ?? NEXT_EXAMPLES[0];
	const project = PROJECTS.find((p) => p.id === projectId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "05",
				kicker: "Le mécanisme de reprise",
				title: "Cinq lignes, pas une page",
				lead: "Chaque séance importante se termine ainsi. Un bon NEXT contient un verbe, un objet, et un critère d’arrêt. « Continuer le chapitre » ne donne pas assez d’information pour redémarrer."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { children: "Fermer porte sur la question posée ce matin — pas sur le projet entier." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-sm leading-relaxed text-muted",
				children: "Le projet reste ouvert des semaines. La question du jour a une réponse nette à la fin de la séance, même négative. Un échec documenté compte comme une clôture. Si la question n’a pas de réponse, elle était trop large : le NEXT devient la reformuler, pas « continuer »."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: NEXT_EXAMPLES.map((item) => {
					const label = PROJECTS.find((p) => p.id === item.project)?.short;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: item.project === projectId ? "default" : "outline",
						className: "h-12 flex-1",
						onClick: () => setProjectId(item.project),
						children: label
					}, item.project);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-warn uppercase",
					children: "Trop vague"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed",
					children: example.bad
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-ok uppercase",
					children: "Assez précis"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed",
					children: example.good
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-4 font-display text-2xl font-medium tracking-tight",
				children: ["Fermeture type — ", project?.short]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-3",
				children: NEXT_FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)] sm:grid-cols-[7rem_1fr] sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-xs tracking-widest text-muted",
						children: field.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: example.fields[field.key]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-faint",
						children: field.hint
					})] })]
				}, field.key))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Pour l’essai, l’unité qui se ferme est la note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
					children: "On lit exactement ce qu’il faut pour produire cette note. Critère de clôture : elle a au moins un lien, dans Obsidian, vers l’argument qu’elle va servir. Les parties denses se dédoublent : séance de repérage, puis séance de notation. NotebookLM (Gemini Notebook) cible et descoper une source le soir — il ne rédige pas les notes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-xs text-muted",
					children: "Indicateur à suivre : sujet du jour clos — oui / non"
				})
			] })
		]
	});
}
function ProjetsChapter() {
	const [active, setActive] = (0, import_react.useState)("essai");
	const project = PROJECTS.find((p) => p.id === active) ?? PROJECTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "02",
				kicker: "Trois formes de progrès",
				title: "Les projets ne sont pas interchangeables",
				lead: "Ils partagent une méthode de continuité. Leurs résultats, non. Une séance vaut par la transformation obtenue — une compréhension formulée, un geste devenu disponible, une voie fragile éliminée."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: PROJECTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: item.id === active ? "default" : "outline",
					className: "h-12 flex-1",
					onClick: () => setActive(item.id),
					children: item.short
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-muted uppercase",
					children: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-2xl font-medium tracking-tight",
					children: project.arc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: ["Preuve : ", project.proof]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed",
					children: project.method
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: project.objects.map((object) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-bg px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: object.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: object.focus
						})]
					}, object.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted",
					children: project.note
				})
			] }),
			active === "essai" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl font-medium tracking-tight",
					children: "Trois insuffisances, trois gestes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "La distinction évite de répondre à tout par davantage de lecture."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: INSUFFICIENCIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: item.diagnosis
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-ink",
							children: item.action
						})
					] }, item.name))
				})
			] }) : null
		]
	});
}
function RegimesChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "06",
				kicker: "Choisir l’intensité",
				title: "L’équilibre se juge sur plusieurs semaines",
				lead: "Une semaine consacrée davantage à l’essai peut être cohérente, à condition de connaître son objectif et de préparer la continuité des autres. La continuité, c’est la facilité de reprise — elle peut tenir en maintenance et se perdre dans une semaine chargée sans trace."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: REGIMES.map((regime, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "grid gap-4 sm:grid-cols-[8rem_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tabular-nums text-faint",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl font-medium tracking-tight",
							children: regime.name
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-widest text-muted uppercase",
								children: "Fonction"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed",
								children: regime.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: regime.commit
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-widest text-muted uppercase",
							children: "Sortie"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: regime.exit
						})] })
					]
				}, regime.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "Démarrage proposé"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Deux semaines de sprint POC, musique en continuité, RustFX au niveau compatible avec l’assemblage. À la fin de cette fenêtre : figer le POC, examiner la charge réellement supportée, revenir à la géométrie normale. Toute séance empruntée à un autre projet a une date de restitution."
			})] })
		]
	});
}
function ReglesChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "10",
				kicker: "Les règles fondamentales",
				title: "Le système en une page",
				lead: "Matin et soir, structure hebdomadaire, trois parcours, jalons, et les signaux qui demandent un ajustement."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { children: "Le soir prépare. Le matin porte. La séance se ferme par un NEXT." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-widest text-muted uppercase",
							children: "Essai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-lg font-medium tracking-tight",
							children: "Comprendre → argumenter → écrire"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Trois matinées possibles, dont le dimanche."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-widest text-muted uppercase",
							children: "Musique"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-lg font-medium tracking-tight",
							children: "Comprendre → entendre → jouer → créer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Deux matinées d’harmonie, applications en soirée."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-widest text-muted uppercase",
							children: "RustFX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-lg font-medium tracking-tight",
							children: "Expérimenter → développer → intégrer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Lundi dès 16 h, samedi matin, entretien court."
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-2xl font-medium tracking-tight",
				children: "Règles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-2",
				children: RULES.map((rule, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_1fr] gap-4 rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs tabular-nums text-faint",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm leading-relaxed",
						children: rule
					})]
				}, rule))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-2xl font-medium tracking-tight",
					children: "Signaux d’ajustement"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-2",
					children: SIGNALS.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-paper px-4 py-2 text-sm text-ink shadow-[var(--shadow-border)]",
						children: signal
					}, signal))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Une soirée entièrement libre, et de la marge. Le troisième bloc d’essai est ajustable. Les jours peuvent changer selon les contraintes. Ce qui ne change pas : une question par séance, une trace, un NEXT."
				})
			] })
		]
	});
}
function SemaineChapter() {
	const [dayId, setDayId] = (0, import_react.useState)("mar");
	const day = WEEK.find((d) => d.id === dayId) ?? WEEK[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterHeader, {
				num: "04",
				kicker: "Une géométrie soutenable",
				title: "Trois matinées d’essai, deux d’harmonie, RustFX aux extrémités",
				lead: "Environ 11 h 30 à 13 h 30 de travail principal, avant maintenance, préparation et instruments. L’enveloppe peut dépasser quinze heures. Deux semaines d’essai avant d’en faire une routine."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto pb-1 sm:gap-2",
				children: WEEK.map((item) => {
					const selected = item.id === dayId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setDayId(item.id),
						className: cn("flex h-24 min-w-24 flex-1 flex-col items-start rounded-md px-3 py-3 text-left transition-colors duration-150 sm:h-28", selected ? "bg-pine text-pine-fg" : "bg-paper text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tracking-widest uppercase opacity-70",
							children: item.short
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-auto text-sm font-medium leading-tight",
							children: item.main
						})]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: day.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: day.when
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: day.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-2",
					children: day.slots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-1 gap-1 rounded-md bg-bg px-4 py-3 sm:grid-cols-[7rem_1fr] sm:items-baseline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted",
							children: slot.band
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: slot.label
						})]
					}, slot.band))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Vendredi soir reste libre"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "La séance du samedi se prépare le jeudi, ou à la fermeture du lundi. Le lundi matin reste disponible : la longue séance RustFX porte déjà la charge du jour."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Dimanche — Lettera 32"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "Deux à trois pages à la machine, à partir des notes de la semaine. En tête : le passage du POC concerné, et la relation — confirme, étend, complique, contredit. Scanner tout de suite, coller dans Obsidian, garder le scan."
				})] })]
			})
		]
	});
}
var CHAPTER_VIEWS = {
	intention: IntentionChapter,
	projets: ProjetsChapter,
	journee: JourneeChapter,
	semaine: SemaineChapter,
	next: NextChapter,
	regimes: RegimesChapter,
	energie: EnergieChapter,
	jalons: JalonsChapter,
	bilan: BilanChapter,
	regles: ReglesChapter
};
function ChapterView({ id }) {
	const View = CHAPTER_VIEWS[id] ?? IntentionChapter;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "chapter-enter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {})
	}, id);
}
function SiteShell({ chapterId, onChange, children }) {
	const index = CHAPTERS.findIndex((c) => c.id === chapterId);
	const current = CHAPTERS[index] ?? CHAPTERS[0];
	const prev = index > 0 ? CHAPTERS[index - 1] : null;
	const next = index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null;
	const scroller = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: 0 });
	}, [chapterId]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const target = e.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
			if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "j") {
				if (next) onChange(next.id);
			} else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "k") {
				if (prev) onChange(prev.id);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		next,
		prev,
		onChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh bg-bg text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-line px-5 py-8 lg:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: APP.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-[11px] tracking-widest text-muted uppercase",
						children: "26 — 27"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-10 flex flex-1 flex-col gap-0.5",
					"aria-label": "Chapitres",
					children: CHAPTERS.map((chapter) => {
						const active = chapter.id === chapterId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onChange(chapter.id),
							className: cn("flex items-baseline gap-3 rounded-md px-2 py-2 text-left transition-colors duration-150", active ? "bg-paper text-ink shadow-[var(--shadow-border)]" : "text-muted hover:bg-paper/70 hover:text-ink"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] tabular-nums text-faint",
								children: chapter.num
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: chapter.label
							})]
						}, chapter.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-2 font-mono text-[11px] leading-relaxed text-faint",
					children: [
						"Document directeur",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Flèches ou J / K"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-sm lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-medium leading-none",
								children: APP.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 truncate font-mono text-[11px] text-muted",
								children: [
									current.num,
									" · ",
									current.label
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								className: "size-11",
								"aria-label": "Chapitre précédent",
								disabled: !prev,
								onClick: () => prev && onChange(prev.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								className: "size-11",
								"aria-label": "Chapitre suivant",
								disabled: !next,
								onClick: () => next && onChange(next.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 overflow-x-auto px-3 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children: CHAPTERS.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onChange(chapter.id),
							className: cn("h-9 shrink-0 rounded-md px-3 font-mono text-[11px] tracking-wide transition-colors duration-150", chapter.id === chapterId ? "bg-pine text-pine-fg" : "bg-paper text-muted shadow-[var(--shadow-border)]"),
							children: chapter.num
						}, chapter.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px w-full bg-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px bg-pine transition-[width] duration-200 ease-[var(--ease-out)]",
						style: { width: `${(index + 1) / CHAPTERS.length * 100}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					ref: scroller,
					className: "min-h-0 flex-1 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12",
						children
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-5 pb-12 sm:px-8 lg:px-12",
						children: [
							prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => onChange(prev.id),
								className: "min-h-11",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: prev.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:hidden",
										children: "Précédent"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tabular-nums text-faint",
								children: [
									current.num,
									" / ",
									CHAPTERS.length
								]
							}),
							next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => onChange(next.id),
								className: "min-h-11",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: next.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:hidden",
										children: "Suivant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					})]
				})
			]
		})]
	});
}
function AppFrame({ chapterId }) {
	const navigate = useNavigate();
	const onChange = (0, import_react.useCallback)((id) => {
		if (id === "intention") {
			navigate({ to: "/" });
			return;
		}
		navigate({
			to: "/$chapterId",
			params: { chapterId: id }
		});
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		chapterId,
		onChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterView, { id: chapterId })
	});
}
//#endregion
export { CHAPTERS as n, AppFrame as t };
