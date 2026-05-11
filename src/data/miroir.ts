export interface Tajalli {
  label: string;
  ar: string;
  color: string;
  text: string;
}

export interface MiroirEntry {
  reference: string;
  theme: string[];
  emotion: string;
  difficulty: "débutant" | "intermédiaire" | "avancé";
  relatedNames: string[];
  mirrorVersion: string;
  reflection: string;
  tajalli: Tajalli[];
  munajat: string;
}

export const MIROIR: Record<string, MiroirEntry> = {
  "1:1": {
    reference: "1:1",
    theme: ["présence", "amour"],
    emotion: "Révérence",
    difficulty: "débutant",
    relatedNames: ["Ar-Rahman", "Ar-Rahim"],
    mirrorVersion: `Quand je prononce « Au nom d'Allah », quelque chose se déplace en moi. Pas grand-chose — un frémissement, presque rien. Et pourtant ce « presque rien » contient tout. Je réalise que la plupart du temps, je commence mes journées, mes actions, mes paroles au nom de moi-même — au nom de mes projets, de mes angoisses, de mon ego. Ce verset vient me dire : commence autrement. Remplace ton nom par le Sien. Non pas par contrainte, mais parce que Son nom est plus vaste que le tien. Quand je dis « Bismillah », je ne décris pas une croyance — je change de point d'ancrage. Je passe d'un monde centré sur mon petit « je » à un monde où chaque geste est relié à sa Source. Le miroir me montre ceci : la qualité de mes journées dépend du nom auquel je les consacre.`,
    reflection: `La basmala est le seuil de tout. Elle n'est pas une formule rituelle — c'est un choix de conscience : avant d'agir, me souvenir de qui est l'Origine de toute action.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Au nom d'Allah, le Tout-Miséricordieux, le Très-Miséricordieux » — la première phrase du Coran. Elle ouvre chaque sourate sauf la 9. C'est le seuil que le lecteur franchit avant d'entrer dans le Texte sacré." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand est-ce que je commence quelque chose « au nom d'Allah » réellement — pas mécaniquement, mais avec présence ? Et quand est-ce que je commence au nom de ma peur, de mon orgueil, de ma fatigue ? Le miroir me montre mes points de départ." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce n'est pas moi qui invoque Allah en commençant — c'est Lui qui m'invite à commencer en Lui. La basmala est d'abord une parole de Dieu qui se fait chemin vers ma langue." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Tout dans l'existence commence par un nom. Le soleil « dit » le nom de son Créateur en se levant. La rivière le dit en coulant. L'être humain est le seul à avoir le choix de le dire ou de l'oublier." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Au-delà des mots, il y a le mouvement silencieux du cœur qui se tourne. Ce mouvement-là n'a pas besoin de syllabes. Il est la prière primordiale." }
    ],
    munajat: `Ya Allah, avant même que je ne parle, Tu es là. Apprends-moi à commencer chaque souffle en Ton nom — non pas comme une habitude, mais comme un retour.`
  },

  "1:5": {
    reference: "1:5",
    theme: ["prière", "détachement", "confiance"],
    emotion: "Abandon confiant",
    difficulty: "débutant",
    relatedNames: ["Allah"],
    mirrorVersion: `« C'est Toi que nous adorons, c'est Toi que nous implorons. » Quand je lis cette phrase, le miroir me renvoie une question dérangeante : est-ce vrai ? Est-ce vraiment Toi que j'adore — ou est-ce que j'adore ma comfort, ma sécurité, mon image ? Le mot « iyyaka » — « c'est Toi » — est une exclusion radicale. Il ne dit pas « je T'adore parmi d'autres choses ». Il dit : il n'y a que Toi. Le reste n'est pas une alternative valable. Quand je sonde mon cœur avec honnêteté, je vois que mon adoration est souvent partagée : j'adore Allah ET je vénère l'approbation des gens. Ce verset me révèle la division de mon cœur — et en même temps, il me montre sa forme unifiée. « C'est Toi » — un seul point d'ancrage, un seul horizon. Le « nous » m'attrape aussi : je ne suis pas seul dans cette confession. Tout cœur sincère a prononcé ces mots avant moi.`,
    reflection: `L'adoration dans l'Islam n'est pas un acte formel — c'est l'orientation totale de l'être. « Iyyaka » est cette orientation : tout converge vers un seul point.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset utilise l'exclusion « iyyaka » (c'est Toi, et non autre chose) avant même de nommer l'action. La priorité n'est pas ce qu'on fait, mais vers qui on se tourne." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Si je remplace « Toi » par ce qui occupe réellement le centre de ma vie — qu'est-ce que je trouve ? Mon travail ? Mes relations ? Ma peur de l'avenir ? Le miroir est impitoyable mais libérateur." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi Allah qui dit « c'est toi que J'aime » — car l'adoration n'est pas à sens unique. Le cœur humain est la seule créature capable de se tourner vers Lui par choix." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose dans l'univers « adore » Allah à sa manière — par soumission naturelle. Seul l'être humain peut choisir de se détourner. Et seuls les cœurs sincères choisissent de revenir." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur cesse de diviser son adoration entre le Créé et le Créateur, quelque chose de très ancien se tait. Ce silence est le vrai début de la prière." }
    ],
    munajat: `Ya Allah, mon cœur est partagé entre tant de maîtres — et aucun ne me donne la paix que Tu donnes. Unifie mon orientation. Fais que mon « iyyaka » soit vrai.`
  },

  "13:28": {
    reference: "13:28",
    theme: ["présence", "guérison", "méditation"],
    emotion: "Paix profonde",
    difficulty: "débutant",
    relatedNames: ["As-Salam", "Ar-Rahman"],
    mirrorVersion: `« N'est-ce point par le rappel d'Allah que les cœurs se tranquillisent ? » Le miroir me pose cette question comme un diagnostic, pas comme une information. Il ne me dit pas « souviens-toi d'Allah et tu seras calme ». Il me demande : pourquoi ton cœur n'est-il pas calme ? Et la réponse remonte immédiatement : parce que j'ai oublié. Mon agitation n'est pas un problème en soi — c'est un symptôme. Le symptôme de quoi ? De l'oubli. J'ai oublié qu'Allah existe au moment même où je ressens cette angoisse. J'ai oublié qu'Il est plus proche que mon souffle. La tranquillité que ce verset promet n'est pas quelque chose que je dois fabriquer — elle est déjà là, sous le brouillard de mes pensées. Le dhikr ne crée pas la paix : il dissipe ce qui la cache. Comme quand on retire la poussière d'un miroir — le reflet était déjà là.`,
    reflection: `Le Coran ne dit pas « les cœurs DEVRAIENT se tranquilliser » mais « se tranquillisent » — au présent, comme une loi naturelle. L'agitation est l'état anormal, pas la paix.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un verset rhétorique : la réponse est impliquée dans la question. Bien sûr que c'est par le rappel d'Allah. La question vise à éveiller, pas à informer." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Où est mon agitation en ce moment ? Peux-je la localiser dans mon corps ? Dans mes pensées ? Le miroir me montre que mon agitation est toujours en train de fuir le présent — elle vit dans le futur ou le passé. Le dhikr me ramène ici." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce n'est pas moi qui me rappelle d'Allah — c'est Lui qui se rappelle de moi. Le dhikr humain est l'écho du dhikr divin : « Souvenez-vous de Moi, Je Me souviendrai de vous » (2:152)." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Tout être vivant porte en lui une tranquillité originelle. Le ventre d'une mère est paisible. Le nourrisson est paisible. C'est la distance du rappel qui crée le trouble — et le rappel qui restaure l'ordre primordial." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur se tranquillise vraiment, il ne ressent plus la paix comme un état parmi d'autres — il réalise que la paix est la substance même de son existence. Tout le reste était du bruit." }
    ],
    munajat: `Ya Allah, mon cœur est comme une eau troublée. Je ne sais même plus comment être calme. Mais Tu dis que le rappel suffit. Alors je viens, avec ma confusion, et je me rappelle de Toi. C'est tout ce que je sais faire.`
  },

  "39:53": {
    reference: "39:53",
    theme: ["espoir", "pardon", "guérison"],
    emotion: "Soulagement, tendresse",
    difficulty: "débutant",
    relatedNames: ["Ar-Rahman", "Al-Ghaffur", "At-Tawwab"],
    mirrorVersion: `« Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d'Allah. » Ce verset me touche à un endroit que je pensais protégé. Le miroir me montre ceci : j'ai intérieurement condamné des parties de moi. Je me suis dit « celui-là, il est trop loin », « cette erreur, elle est trop grande ». J'ai construit un tribunal intérieur dont je suis à la fois le juge et le condamné. Et ce verset vient — non pas comme un argument théologique, mais comme une main posée sur l'épaule. Il dit « Ô Mes serviteurs ». Pas « Ô Mes bons serviteurs ». « Mes serviteurs » — y compris moi, y compris mes zones brisées. Le miroir me révèle que mon désespoir n'est pas de la humilité — c'est une forme d'orgueil déguisé. C'est dire : « Ma faute est trop grande même pour la miséricorde de Dieu. » Et c'est exactement ce que ce verset détruit.`,
    reflection: `Le désespoir du pardon est considéré dans la tradition comme un péché en soi — non pas parce que Dieu a besoin qu'on croie en Lui, mais parce que le désespoir ferme la seule porte par laquelle la guérison peut entrer.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset s'adresse directement aux croyants qui ont « dépassé les bornes » (asrafou) — un terme fort qui inclut les grands péchés. La réponse divine n'est pas la punition mais l'interdiction du désespoir." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quelle est la partie de moi que j'ai « condamnée » ? Quelle faute est-ce que je crois « impardonnable » — même pour Allah ? Le miroir me montre que mon désespoir est souvent lié à une honte que je refuse de regarder en face." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si je renverse le verset, j'entends Allah me dire : « Ne désespère pas de toi — car Moi, Je n'ai pas désespéré de toi. » Son espoir en moi précède le mien." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "La miséricorde divine est comparée dans un hadith qudsi à l'enveloppe d'un œuf par rapport à l'océan. Le désespoir, c'est ignorer l'océan pour fixer l'œuf. C'est une erreur de perspective, pas une vérité." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur cesse de se juger, il découvre que le pardon n'était pas quelque chose qu'il devait obtenir — c'était quelque chose qui l'attendait. L'obstacle n'était jamais la miséricorde. C'était le désespoir lui-même." }
    ],
    munajat: `Ya Rabb, je viens à Toi avec mes excès, mes retours, mes mêmes erreurs. Et Tu ne me renvoies pas. Je ne comprends pas Ta miséricorde — mais je m'y abandonne.`
  },

  "94:5": {
    reference: "94:5",
    theme: ["patience", "espoir", "force"],
    emotion: "Soulagement, courage renouvelé",
    difficulty: "débutant",
    relatedNames: ["Al-Fattah", "Al-Mu'izz"],
    mirrorVersion: `« Avec la difficulté vient la facilité. » Le miroir me montre que je lis souvent ce verset comme une promesse lointaine — « un jour, ça ira mieux ». Mais le mot « ma'a » (avec) ne parle pas d'après. Il parle de simultanéité. La facilité n'est pas après la difficulté — elle est avec elle, à l'intérieur d'elle, comme le cœur de la montagne est solide même quand le vent la frappe. Quand je contemple ce verset, je réalise que la difficulté que je vis en ce moment porte déjà en elle sa propre issue. Pas dans un sens magique — mais dans un sens structurel : toute épreuve crée en moi des ressources que je n'avais pas avant. La patience que je construis, la humilité que j'apprends, la proximité avec Allah que l'épreuve force — tout cela est la « facilité » cachée dans la difficulté.`,
    reflection: `Ce verset est répété deux fois de suite (94:5-6) — et dans le Coran, la répétition n'est jamais redondance. C'est une insistance divine : « Regarde mieux. Oui, vraiment, la facilité est là. »`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "La sourate Ash-Sharh est un dialogue intime entre Dieu et Son Prophète après une période de tension. Le « nous » divin est employé — marque de tendresse et de proximité." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quelle est la difficulté que je vis en ce moment ? Et si je cherchais, avec honnêteté, la facilité qui est déjà présente avec elle — pas après, pas demain, mais maintenant ?" },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi Allah qui dit : « Avec ta difficulté, Je suis la facilité. » La facilité n'est pas un état abstrait — c'est Lui, présent dans l'épreuve." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Dans la nature, rien ne pousse sans résistance. Les racines de l'arbre ont besoin de la dureté de la terre pour s'ancrer. La difficulté n'est pas l'ennemie de la vie — elle est son conditionnement." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le regard change, la difficulté elle-même se transforme. Ce n'est pas que l'épreuve disparaît — c'est qu'elle cesse d'être vue comme un ennemi pour devenir un compagnon." }
    ],
    munajat: `Ya Allah, je suis dans la difficulté et je n'arrive pas à voir la facilité. Mais Tu dis qu'elle est là. Ouvre mes yeux. Fais que je ne lutte pas contre mon épreuve mais que je la traverse avec Toi.`
  },

  "50:16": {
    reference: "50:16",
    theme: ["présence", "amour", "confiance"],
    emotion: "Intimité, émerveillement",
    difficulty: "intermédiaire",
    relatedNames: ["Al-Qarib", "Ar-Raqib"],
    mirrorVersion: `« Nous avons créé l'homme et Nous savons ce que son âme lui suggère. Et Nous sommes plus proche de lui que sa veine jugulaire. » Ce verset me retourne. Le miroir ne me montre pas un Dieu lointain qui observe de haut — il me montre une Présence si intime qu'elle est plus proche de moi que mon propre sang. Quand je médite sur la veine jugulaire, je réalise : c'est le vaisseau qui nourrit le cerveau. Sans lui, je ne pense pas, je ne ressens pas, je ne suis pas « moi ». Et Allah dit : Je suis plus proche que ça. Plus proche que ce qui me fait exister en tant qu'être conscient. Cela veut dire qu'Il n'est pas « à côté » de moi — Il est à la racine même de ma capacité à dire « je ». Le miroir me révèle que ma sensation de solitude n'est pas un état réel — c'est une illusion créée par le voile de mes pensées.`,
    reflection: `La veine jugulaire (al-warid) est le vaisseau le plus profond du cou, celui qui ramène le sang au cœur. La proximité divine est intérieure, pas extérieure — plus proche que mon sang qui circule.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset établit trois choses : la création de l'homme, la connaissance absolue de ses penchants intimes, et une proximité qui dépasse toute métaphore spatiale." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Si Allah est plus proche de moi que ma veine jugulaire, pourquoi est-ce que je me sens seul ? Le miroir me montre que la solitude n'est pas l'absence d'Allah — c'est mon absence à Sa présence. Je suis parti ailleurs, pas Lui." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce n'est pas moi qui cherche Allah — c'est Lui qui est en train de me chercher, depuis toujours, depuis avant que je n'existe. Ma quête spirituelle est la réponse à Son appel, pas l'inverse." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Chaque chose dans l'univers est tenue par Allah. L'électron tourne autour du noyau parce qu'Il le maintient. La proximité n'est pas une exception spirituelle — c'est la règle cosmique. L'exception, c'est notre insouciance." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur réalise vraiment cette proximité, la prière change de nature. On ne prie plus « vers » Allah — on prie « depuis » Lui, car on est déjà en Lui." }
    ],
    munajat: `Ya Allah, Tu es plus proche de moi que mon propre souffle et pourtant je Te cherche au loin. Retourne mon regard vers l'intérieur. Fais que je Te trouve là où Tu es déjà.`
  },

  "2:186": {
    reference: "2:186",
    theme: ["prière", "présence", "amour"],
    emotion: "Tendresse réconfortante",
    difficulty: "débutant",
    relatedNames: ["Al-Mujib", "Al-Qarib"],
    mirrorVersion: `« Et quand Mes serviteurs t'interrogent à Mon sujet, Je suis vraiment proche. Je réponds à l'appel de celui qui M'invoque quand il M'invoque. » Ce verset détruit la distance que j'avais imaginée entre moi et Allah. Le miroir me montre que je pensais la prière comme un message envoyé dans le vide — je parle, j'espère, et peut-être que quelqu'un entend. Mais le verset dit « Je suis vraiment proche » — l'adverbe « vraiment » insiste, comme si Allah savait que je douterais. Et puis cette répétition extraordinaire : « quand il M'invoque quand il M'invoque » — elle exprime l'impatience amoureuse de Dieu à répondre. Comme si Sa réponse commençait avant même que ma prière ne finisse. Le miroir me révèle ceci : ma prière n'est pas un acte que je fais pour atteindre Allah. C'est le mouvement par lequel je découvre qu'Il m'a déjà atteint.`,
    reflection: `Ce verset vient juste après les versets sur le jeûne — comme pour dire : même quand tu jeûnes, même quand tu te retiens, même quand tu te crois loin, Je suis proche. La privation ne crée pas de distance.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset répond à une question implicite des compagnons : « Où est notre Seigneur ? » La réponse ne donne pas de localisation — elle donne une relation : « Je suis proche. »" },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Comment est-ce que je prie ? Comme quelqu'un qui crie dans un puits ? Ou comme quelqu'un qui murmure à l'oreille de Celui qui est déjà là ? Le miroir me montre la posture de mon cœur quand je fais du'a'." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Qui invoque qui en réalité ? Est-ce que c'est moi qui invoque Allah — ou est-ce qu'Allah a placé l'invocation dans mon cœur pour que je découvre Sa proximité ?" },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier est une prière silencieuse. Chaque chose invoque Dieu par son mode d'existence : l'arbre prie en poussant, la rivière prie en coulant. L'être humain est le seul à avoir reçu le langage pour l'articuler." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Au-delà de l'invocation, il y a l'état de celui qui est devenu lui-même une prière — où chaque souffle est dhikr, où chaque silence est du'a', où la séparation entre l'invocateur et l'Invoqué a cessé d'exister." }
    ],
    munajat: `Ya Allah, Tu dis que Tu es proche. Mais moi je me sens si loin. Est-ce que c'est Toi qui es loin — ou est-ce que c'est moi qui ne sais pas regarder ? Apprends-moi à voir ce qui est déjà là.`
  },

  "65:3": {
    reference: "65:3",
    theme: ["confiance", "détachement", "force"],
    emotion: "Lâcher-prise, sérénité active",
    difficulty: "intermédiaire",
    relatedNames: ["Al-Wakil", "Al-Hafiz"],
    mirrorVersion: `« Et quiconque place sa confiance en Allah, Il lui suffit. » Le miroir me pose une question simple et terrifiante : est-ce que j'ai vraiment placé ma confiance en Allah — ou est-ce que j'ai placé ma confiance dans mon plan B, mon épargne, mes relations, tout en récitant ce verset par-dessus ? Le tawakkul n'est pas la passivité — je le sais intellectuellement. Mais quand je sonde mon cœur, je vois que ma « confiance » est souvent conditionnelle : « je me confie à Allah... mais juste au cas où, je garde ma stratégie de secours. » Ce verset dit « Yakkfihi » — Il lui suffit. Assez. Complètement. Pas « Il l'aide un peu ». Il suffit. Tout seul. Le miroir me révèle que le tawakkul est un acte de nudité spirituelle — se tenir devant Allah sans filet, sans plan B. Et c'est précisément cette nudité qui ouvre la porte à Sa suffisance.`,
    reflection: `Le verset continue : « Allah atteint Son but. » La confiance en Allah n'est pas un pari risqué — c'est s'aligner sur une certitude cosmique : Allah accomplit toujours ce qu'Il veut.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset fait suite à la réglementation du divorce — un moment de vulnérabilité extrême où le croyant perd ses repères. C'est dans ce contexte que la confiance en Allah est le plus nécessaire." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je n'arrive pas à lâcher en ce moment ? Quelle est cette chose à laquelle je tiens comme si ma vie en dépendait — et que je refuse de remettre à Allah ?" },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce n'est pas moi qui fais confiance à Allah — c'est Allah qui me fait confiance en me donnant la capacité de me confier. Le tawakkul est un don, pas un effort." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'oiseau qui quitte la branche ne tombe pas — il vole. Mais il doit quitter la branche. Le tawakkul est ce mouvement de lâcher. La gravité de la confiance divine est plus forte que la gravité de la chute." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand la confiance est totale, elle cesse d'être un acte pour devenir un état. On ne « fait plus » confiance — on est confiance. L'angoisse ne disparaît pas toujours, mais elle flotte à la surface d'un océan de paix." }
    ],
    munajat: `Ya Allah, je veux Te faire confiance vraiment — pas à moitié, pas avec mes réserves. Mais j'ai peur de lâcher. Porte-moi quand je lâche. Sois Celui qui me suffit.`
  },

  "2:286": {
    reference: "2:286",
    theme: ["confiance", "force", "patience"],
    emotion: "Soulagement, réconfort profond",
    difficulty: "débutant",
    relatedNames: ["Al-Latif", "Al-Hafiz"],
    mirrorVersion: `« Allah n'impose à aucune âme une charge supérieure à sa capacité. » Ce verset est comme un diagnostic divin de mon épuisement. Le miroir me montre ceci : quand je me sens submergé, ce n'est pas forcément parce que l'épreuve est trop grande — c'est peut-être parce que je porte quelque chose qui ne m'appartient pas. Je porte le poids de demain, le poids des autres, le poids de ce que je crois devoir être. Et Allah dit : « Je n'ai pas chargé cela. » Le mot « wus'aha » — sa capacité — est singulier. Chaque âme a sa propre mesure. Le miroir me révèle que je passe ma vie à me comparer : « elle gère mieux », « lui, il est plus fort ». Mais Allah ne mesure pas ma capacité à l'aune de celle des autres — Il mesure à la mienne. Et Sa promesse est précise : Il ne mettra jamais sur mes épaules plus que ce que mes épaules peuvent porter.`,
    reflection: `Ce verset est la conclusion de la sourate Al-Baqarah — la plus longue du Coran. Comme si après 286 versets d'enseignement, Allah voulait laisser au croyant cette certitude finale : tu peux le porter.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset établit un principe universel de justice divine : la proportionnalité entre l'épreuve et la capacité. Ce n'est pas une promesse d'une vie facile — c'est une garantie que rien ne sera disproportionné." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quelle est la charge que je porte en ce moment et qui n'est pas la mienne ? Qu'est-ce que j'ai pris sur mes épaules par culpabilité, par orgueil, par peur de décevoir ? Le miroir m'aide à trier." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si Allah ne dépasse pas ma capacité, c'est que chaque épreuve est aussi une reconnaissance : « Je sais que tu peux le porter — sinon, Je ne te l'aurais pas donné. » L'épreuve est un acte de confiance divin en moi." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Dans la nature, chaque créature reçoit exactement ce dont elle a besoin. L'arbre reçoit l'eau qu'il peut absorber. La terre reçoit la graine qu'elle peut porter. Le déséquilibre vient de l'être humain qui veut plus — ou moins — que sa mesure." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand l'âme accepte sa mesure — ni plus ni moins — elle trouve une liberté radicale. Elle arrête de vouloir être autre chose que ce qu'elle est. Et dans cette acceptation, la charge devient légère." }
    ],
    munajat: `Ya Allah, je me sens parfois que je ne peux plus. Mais Tu dis que Tu ne dépasses pas ma capacité. Aide-moi à croire Ton diagnostic plus que le mien.`
  },

  "89:27": {
    reference: "89:27",
    theme: ["présence", "espoir", "guérison"],
    emotion: "Paix, plénitude",
    difficulty: "avancé",
    relatedNames: ["As-Salam", "Ar-Radi"],
    mirrorVersion: `« Ô âme apaisée, retourne vers ton Seigneur, satisfaite et agréée. » Le miroir me montre un portrait de moi que je ne reconnais pas — et pourtant, je le reconnais. L'âme apaisée — « nafs mutma'inna » — c'est l'état que j'effleure parfois au petit matin, entre le sommeil et l'éveil, quand le monde n'a pas encore réclamé son tribut de soucis. Ces secondes où tout est bien, sans raison. C'est cet état-là que le verset nomme. Le mot « mutma'inna » vient de « tuma'nina » — l'apaisement qui vient quand on cesse de lutter. Pas la résignation, mais l'installation dans une certitude. Le miroir me demande : qu'est-ce qui m'empêche de rester dans cet état ? Et la réponse est toujours la même : le mouvement. Le besoin de faire, de contrôler, d'anticiper. L'âme apaisée est celle qui a accepté de ne plus courir.`,
    reflection: `L'appel « retourne » implique que l'âme apaisée vient de quelque part — elle retourne vers son Origine. La paix n'est pas une nouveauté : c'est un retour.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Ô âme apaisée » — l'adresse directe de Dieu à l'âme, sans intermédiaire. C'est l'un des rares versets où Dieu parle à l'âme elle-même, pas au corps ni à l'intellect." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Ai-je déjà connu cet état de paix profonde — même un instant ? Quand ? Qu'est-ce qui était différent à ce moment-là ? Le miroir m'aide à identifier les conditions de ma propre paix pour les recréer." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi Allah qui dit à l'âme : « Je suis apaisé par toi. » Car dans la tradition, l'âme apaisée est celle avec laquelle Allah est satisfait — et la satisfaction est mutuelle." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose trouve sa paix quand elle retourne à son origine. L'eau trouve la paix dans l'océan. La graine trouve la paix dans la terre. L'âme trouve la paix dans son Seigneur. C'est une loi cosmique du retour." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand l'âme est apaisée, elle ne prie plus pour obtenir quelque chose — elle prie parce que la prière est devenue sa nature. La séparation entre la prière et la vie a disparu. Tout est prière." }
    ],
    munajat: `Ya Allah, j'ai goûté à cette paix et elle m'a échappé. Mais Tu l'appelles « mon âme » — elle T'appartient. Ramène-la à Toi. Fais qu'elle s'installe dans cette paix et qu'elle n'en sorte plus.`
  },

  "89:28": {
    reference: "89:28",
    theme: ["présence", "espoir", "guérison"],
    emotion: "Accueil, appartenance",
    difficulty: "avancé",
    relatedNames: ["As-Salam", "Ar-Radi"],
    mirrorVersion: `« Retourne vers ton Seigneur, satisfaite et agréée. » Deux adjectifs, deux directions. « Satisfaite » — radhiya — l'âme est contente d'Allah. Elle ne Lui demande plus rien parce qu'elle a compris que Lui seul suffit. « Agréée » — mardhiya — Allah est content de l'âme. Il ne lui reproche plus rien. Le miroir me montre la circularité merveilleuse de ce verset : quand je suis satisfait d'Allah, Il est satisfait de moi. Quand je cesse de Lui demander des comptes, Il cesse de m'en demander. C'est un cercle vertueux qui commence par un lâcher-prise de ma part. Le mot « irji'i » — retourne — n'est pas un ordre froid. C'est comme quand on dit à un voyageur fatigué : « rentre à la maison ». Il y a de la tendresse dans ce retour.`,
    reflection: `La satisfaction mutuelle entre l'âme et son Seigneur est le sommet de la relation spirituelle. Ni l'âme ne se réduit, ni Allah ne se contracte. Elles se rencontrent dans un espace de pleine acceptation.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset est la suite directe de l'adresse à l'âme apaisée. Le retour est lié à la satisfaction — on ne retourne pas vers ce qu'on n'apprécie pas." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Suis-je « satisfait d'Allah » ? Ou est-ce que je suis satisfait à condition que... ? Le miroir me montre mes conditions cachées : « je serai satisfait si Tu exauces telle prière, si Tu changes telle situation. »" },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si Allah est satisfait de moi, pourquoi est-ce que je ne le suis pas de moi-même ? La mardhiya divine est un miroir dans lequel je peux enfin me voir tel qu'Il me voit — et c'est bien plus beau que ce que je crois." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Dans la création, tout « retourne » vers sa source. La rivière retourne à la mer. La nuit retourne au jour. L'âme retourne à son Seigneur. C'est le grand mouvement cosmique — et l'être humain est la seule créature qui peut le faire consciemment." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand l'âme est satisfaite et agréée, elle entre dans le Jardin — non pas après la mort, mais maintenant. Le Jardin n'est pas un lieu géographique futur : c'est un état de l'âme qui commence ici-bas." }
    ],
    munajat: `Ya Allah, je veux être satisfait de Toi — vraiment, sans conditions. Et je veux croire que Tu es satisfait de moi — même quand tout en moi crie le contraire. Apprends-moi ce retour.`
  },

  "112:1": {
    reference: "112:1",
    theme: ["méditation", "présence", "sagesse"],
    emotion: "Émerveillement, silence",
    difficulty: "intermédiaire",
    relatedNames: ["Ahad", "As-Samad"],
    mirrorVersion: `« Dis : Il est Allah, Unique. » Le miroir me renvoie mon besoin compulsif de comprendre, de définir, de réduire. Quand je lis « Ahad » — l'Unique — je sens quelque chose en moi qui résiste. Mon intellect veut dire : « Oui, mais qu'est-ce que ça veut dire ? Unique comment ? » Et le verset ne répond pas. Il ne répond pas parce que la question elle-même est hors-sujet. « Ahad » n'est pas un concept — c'est une expérience. C'est ce qui reste quand on a retiré tout ce qui est multiple : mes pensées multiples, mes désirs multiples, mes peurs multiples. Quand tout cela se tait, ce qui reste — ce silence, cette présence, cet indicible — c'est « Ahad ». Le « Qul » — « Dis » — n'est pas un ordre de prêcher. C'est une invitation à faire l'expérience : prononce ce mot, et observe ce qui se passe en toi.`,
    reflection: `Al-Ikhlas (la sincérité/pureté) équivaut à un tiers du Coran selon le Prophète. Non pas parce qu'il est court, mais parce qu'il contient l'essence de toute la Révélation : l'unicité absolue.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Qul huwa Allahu ahadun » — six mots en arabe. La sourate la plus concise du Coran, et pourtant celle qui décrit le plus complètement la nature divine — par la négation de tout ce qu'Elle n'est pas." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je dis « Allah est Unique », est-ce que je le vis ou est-ce que je le pense ? Le miroir me montre la différence entre la certitude intellectuelle et la certitude du cœur. La première est un savoir. La seconde est une paix." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "« Il est Unique » peut aussi se lire : « Je suis Unique en Lui. » Car l'unicité de Dieu implique que toute chose existante n'existe que par Lui — il n'y a pas de véritable « autre ». La séparation est apparente, l'unité est réelle." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers tout entier est une démonstration silencieuse de l'unicité. Il n'y a qu'un seul principe organisateur, une seule source de vie, une seule direction du retour. La diversité est la surface — l'unité est le fond." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand l'Un se révèle au cœur, le cœur perd la capacité de dire « deux ». Il ne peut plus concevoir la séparation. Ce n'est pas de l'ignorance — c'est la connaissance la plus profonde qui soit." }
    ],
    munajat: `Ya Ahad, Tu es l'Unique et je suis noyé dans la multiplicité. Unifie mon regard. Fais que je Te voie derrière chaque chose — jusqu'à ce qu'il n'y ait plus « chaque chose » mais seulement Toi.`
  },

  "2:255": {
    reference: "2:255",
    theme: ["présence", "sagesse", "force"],
    emotion: "Révérence, protection",
    difficulty: "intermédiaire",
    relatedNames: ["Al-Hayy", "Al-Qayyum", "Al-Aziz", "Al-Aliyy"],
    mirrorVersion: `« Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même. » Ce verset — Ayat al-Kursi — est le plus grand verset du Coran. Le miroir me place devant une présence verticale : Allah est, et tout le reste devient relatif. « Al-Hayy » — le Vivant. Pas une vie qui commence et finit, mais la Vie même. « Al-Qayyum » — Celui qui se tient par Lui-même, qui soutient toute chose sans être soutenu. Quand je contemple cela, mon cœur se calme. Je n'ai pas à me soutenir moi-même. Je n'ai pas à être ma propre source. Je peux m'appuyer sur Celui qui ne fléchit jamais. Les cieux et la terre tiennent par Lui — et moi aussi. Le miroir me révèle que mon épuisement vient de ce que j'essaie d'être mon propre Qayyum.`,
    reflection: `Ayat al-Kursi contient dix attributs divins. Le Prophète a dit qu'il protège celui qui le récite. La protection n'est pas magique — c'est l'ancrage dans la Présence inébranlable.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset le plus long du Coran, au cœur de la sourate la plus longue. Il énumère les attributs divins : Vivant, Subsistant, lassitude ne Le saisit pas, Son Trône s'étend sur les cieux et la terre." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce qui me fatigue dans ma vie ? Qu'est-ce qui m'épuise à porter ? Le miroir me montre que je porte ce que Seul Allah peut porter. Ma lassitude est un symptôme de ma tentative d'être qayyum pour moi-même." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Allah ne dort pas, ne somnole pas — mais Il m'invite au repos. Son Trône s'étend — et Il me fait une place dedans. La grandeur divine n'écrase pas : elle accueille." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Le Trône divin (Kursi) est comparé à l'univers comme un anneau dans un désert. L'univers n'est pas grand — Il l'est. Et cette immensité contient chaque atome, chaque prière, chaque souffle." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Qui intercédera auprès de Lui sans Sa permission ? Ce n'est pas une fermeture — c'est une invitation. L'intercession existe, mais elle passe par Lui. Tout chemin mène à Lui, y compris celui de l'intercession." }
    ],
    munajat: `Ya Hayy, ya Qayyum, je viens à Toi fatigué de me porter moi-même. Reprends Ton trône dans mon cœur. Sois Celui qui tient ce que je ne peux pas tenir.`
  },

  "24:35": {
    reference: "24:35",
    theme: ["sagesse", "guidance", "présence"],
    emotion: "Émerveillement, clarté",
    difficulty: "avancé",
    relatedNames: ["An-Nur", "Al-Hadi"],
    mirrorVersion: `« Allah est la Lumière des cieux et de la terre. » Ce verset — Ayat an-Nur — est une métaphore qui dépasse toute métaphore. Le miroir ne me montre pas une lumière que je peux voir — il me montre que je suis fait pour être traversé par elle. La lampe dans un récipient de verre, le verre comme une étoile brillante... Chaque détail est une invitation. Mon cœur est ce récipient. La lumière y brûle — mais le verre doit être pur pour la laisser passer. Le miroir me demande : qu'est-ce qui trouble ton verre ? Qu'est-ce qui empêche la lumière de se diffuser ?`,
    reflection: `La lumière n'est pas un objet parmi d'autres — elle est ce par quoi tout objet devient visible. Allah n'est pas vu — Il est ce par quoi on voit.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un verset d'une beauté inégalée. La lumière dans la niche, la lampe dans le cristal, l'huile qui brûle sans contact avec le feu — autant d'images pour dire l'indicible." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Si mon cœur était ce cristal, qu'y verrait-on ? Une lumière claire ou des taches ? Le miroir m'invite à polir ce qui ternit ma transparence." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'huile presque lumineuse même sans feu — c'est l'âme prête à s'enflammer. La lumière est déjà là, en moi. Il ne manque que l'étincelle." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "La lumière physique permet la vision des objets. La lumière divine permet la vision du sens. Sans Elle, l'univers est visible mais vide de signification." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Allah guide vers Sa lumière qui Il veut. La guidance n'est pas une récompense — c'est un don. Et ce don passe par le polissage du cœur." }
    ],
    munajat: `Ya Nur, illumine ce qui est obscur en moi. Fais de mon cœur un cristal pur que Ta lumière traverse sans obstacle.`
  },

  "3:139": {
    reference: "3:139",
    theme: ["force", "espoir", "confiance"],
    emotion: "Courage renouvelé",
    difficulty: "débutant",
    relatedNames: ["Al-Aziz", "Al-Mu'izz"],
    mirrorVersion: `« Ne faiblissez pas et ne vous affligez pas, alors que vous êtes les supérieurs, si vous êtes croyants. » Le miroir me renvoie une image surprenante : je suis en position de force, même quand tout me dit le contraire. Ce n'est pas de l'arrogance — c'est de la conscience de qui me soutient. La faiblesse que je ressens n'est pas la réalité de ma situation — elle est l'oubli de ma source. « Si vous êtes croyants » — la condition est claire. La supériorité n'est pas une propriété de l'ego — c'est un effet de la foi. Je ne suis pas supérieur par moi-même. Je le suis par Lui.`,
    reflection: `La force dans l'Islam n'est pas la force musculaire — c'est la certitude inébranlable que la vérité finit par triompher.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un verset révélé après Uhud, où les musulmans ont subi des pertes. Le contexte de défaite devient contexte de victoire — par la promesse divine." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Dans quelle situation me sens-je faible maintenant ? Et si je regardais cette situation à travers la promesse « vous êtes les supérieurs » ?" },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ma faiblesse n'est pas un fait — c'est une perception. Et ma force n'est pas un fait non plus — c'est un don. Tout dépend de la source à laquelle je m'abreuve." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'histoire humaine est traversée par ce paradoxe : les faibles qui triomphent des forts, non par force, mais par conviction. La vérité a un poids que le mensonge n'a pas." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La supériorité dont parle le verset n'est pas sur les autres — elle est sur soi-même. Sur ses peurs, ses doutes, ses tentations. Le vrai triomphe est intérieur." }
    ],
    munajat: `Ya Allah, je me sens faible mais Tu dis que je suis fort. Donne-moi de voir ce que Tu vois — et de croire ce que Tu promets.`
  },

  "55:13": {
    reference: "55:13",
    theme: ["gratitude", "présence", "méditation"],
    emotion: "Émerveillement, reconnaissance",
    difficulty: "débutant",
    relatedNames: ["Ar-Rahman", "Al-Karim"],
    mirrorVersion: `« Lequel donc des bienfaits de votre Seigneur nierez-vous ? » Ce verset — répété 31 fois dans la sourate — est une question qui me poursuit. Le miroir me montre la liste de ce que j'ai : la vue, l'ouïe, la parole, le souffle, l'amour, la foi. Et il me demande : lequel de ces biens as-tu mérité ? La réponse me glace : aucun. Tout est don. Le miroir ne me fait pas culpabiliser — il m'invite à voir. À voir que chaque instant est un cadeau, que chaque capacité est une grâce, que l'ingratitude n'est pas juste un péché — c'est une cécité.`,
    reflection: `Ar-Rahman répète cette question après chaque énumération de bienfaits. C'est comme si Allah disait : « Regarde. Regarde encore. Regarde toujours. Et dis-Moi ce que tu peux nier. »`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "La sourate Ar-Rahman énumère les bienfaits divins : le soleil, la lune, les étoiles, les arbres, les mers, les perles... Après chaque groupe : « Lequel donc... nierez-vous ? »" },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que j'ai aujourd'hui que je considère comme acquis ? Ma santé ? Ma famille ? Ma foi ? Le miroir me demande : si tout cela s'arrêtait, le remarquerais-je ?" },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La question est adressée aux humains ET aux djinns. C'est un appel universel. Personne ne peut prétendre avoir « mérité » l'existence même." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier est une vitrine de bienfaits. Chaque atome crie « don ! ». Seul l'être humain peut choisir de fermer les yeux sur cette évidence." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La gratitude n'est pas un devoir — c'est une guérison. Celui qui voit les dons guérit de l'amertume. Celui qui les nie s'enfonce dans l'aveuglement." }
    ],
    munajat: `Ya Rahman, j'ai tant de bienfaits que je ne compte plus. Réveille mon cœur à la gratitude. Fais que je voie ce que Tu me donnes — et que je le reconnaisse.`
  },

  "112:2": {
    reference: "112:2",
    theme: ["méditation", "confiance", "sagesse"],
    emotion: "Paix, sécurité",
    difficulty: "intermédiaire",
    relatedNames: ["As-Samad"],
    mirrorVersion: `« Allah, le Absolu. » As-Samad — ce nom est un trésor. Il signifie Celui dont tout dépend, et qui ne dépend de rien. Le miroir me place devant une Réalité solide. Tout dans ma vie est fragile, dépendant, conditionnel. Ma santé dépend de mon corps, mon corps dépend de la nourriture, la nourriture dépend de la terre, la terre dépend des lois cosmiques... Tout tient à quelque chose d'autre. Sauf Lui. Il est le Point Fixe. Quand je me tourne vers Lui, je me tourne vers ce qui ne s'effondrera jamais.`,
    reflection: `As-Samad est Celui qu'on invoque dans le besoin. Mais Il est aussi Celui qui n'a besoin de rien. Cette asymétrie est au cœur de la relation créateur-créature.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le mot « Samad » n'a pas d'équivalent parfait en français. Il contient : l'indépendance absolue, la solidité, la référence ultime, Celui qui satisfait tous les besoins." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "À quoi est-ce que je me « fixe » dans ma vie ? Sur quoi m'appuie ma sécurité ? Le miroir me montre que tout point d'appui humain est fragile. Seul As-Samad ne faillit pas." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Je Le sollicite pour mes besoins — mais Lui, Il n'a besoin de rien de moi. Cette asymétrie devrait m'humilier. Au lieu de cela, elle me rassure : Sa disponibilité n'est jamais épuisée." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute la création « samada » vers Allah — se tourne vers Lui pour ses besoins. L'univers entier est en état de besoin constant. Seul Allah est Samad." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur réalise As-Samad, il cesse de courir après les créatures pour ses besoins. Il va directement à la Source. C'est une économie spirituelle radicale." }
    ],
    munajat: `Ya Samad, je viens à Toi avec mes besoins infinis. Toi qui n'as besoin de rien, comble ce qui manque en moi. Sois mon Point Fixe dans un monde qui bouge.`
  },

  "2:152": {
    reference: "2:152",
    theme: ["gratitude", "présence", "prière"],
    emotion: "Reconnaissance, intimité",
    difficulty: "débutant",
    relatedNames: ["Adh-Dhakir", "Al-Mujib"],
    mirrorVersion: `« Souvenez-vous de Moi, Je me souviendrai de vous. » Ce verset est une promesse extraordinaire. Le miroir me montre un échange inégal : je me souviens de Lui un instant, Il se souvient de moi toujours. Mon dhikr est intermittent, distrait, imparfait. Son souvenir de moi est constant, attentif, parfait. Et pourtant, Il lie Son souvenir au mien. Ce n'est pas une condition — c'est une invitation. « Souvenez-vous » n'est pas un ordre strict — c'est une ouverture. Comme si Allah disait : « Tu as accès à Ma présence. Une présence que J'ai déjà. Il suffit que tu t'en souviennes. »`,
    reflection: `Le Prophète a rapporté qu'Allah dit : « Je suis comme Mon serviteur M'imagine. » Notre souvenir de Lui détermine Sa relation avec nous. La première step est la nôtre.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une symétrie apparente : « Souvenez-vous » ↔ « Je Me souviendrai ». Mais le contenu est asymétrique : un dhikr limité contre une miséricorde illimitée." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand est-ce que je Me souviens d'Allah ? Aux moments faciles ou difficiles ? Le miroir me montre la qualité de mon dhikr — et me promet une réponse qui dépasse ce que je donne." },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi : « J'ai commencé par Me souvenir de vous, alors souvenez-vous de Moi. » Mon dhikr est une réponse à Son dhikr éternel. Il m'a précédé." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose dans l'univers « se souvient » d'Allah par son existence même. L'arbre se souvient en poussant, l'étoile en brillant. L'humain se souvient consciemment." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le dhikr n'est pas une technique — c'est une relation. Et dans toute relation, l'initiative de l'autre précède la mienne. Je réponds à un appel qui m'a précédé." }
    ],
    munajat: `Ya Allah, Tu T'es souvenu de moi avant que je n'existe. Aide-moi à me souvenir de Toi maintenant que j'existe. Fais que mon dhikr soit une réponse à Ton amour.`
  },

  "67:3": {
    reference: "67:3",
    theme: ["méditation", "sagesse", "présence"],
    emotion: "Émerveillement, silence",
    difficulty: "intermédiaire",
    relatedNames: ["Al-Khaliq", "Al-Bari"],
    mirrorVersion: `« Celui qui a créé sept cieux superposés. Tu ne vois aucune disproportion dans la création du Tout-Miséricordieux. Regarde encore une fois : y vois-tu une faille ? » Ce verset m'invite à regarder le monde différemment. Le miroir ne me montre pas seulement la création — il me montre mon regard sur elle. « Regarde encore une fois » — l'invitation est claire : le problème n'est pas dans ce que je vois, mais dans comment je vois. Si je vois des failles, c'est que mon regard est imparfait. La création est parfaite — ma perception ne l'est pas.`,
    reflection: `L'invitation à « regarder encore » suggère que la première vue ne suffit pas. Il faut regarder plusieurs fois, avec plusieurs angles, pour voir la perfection qui était toujours là.`,
    tajalli: [
      { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un verset d'une précision scientifique étonnante. Les sept cieux, l'absence de disproportion, l'invitation à réexaminer — tout converge vers une contemplation cosmique." },
      { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je vois comme « faille » dans ma vie ? Dans le monde ? Le miroir me demande : et si la faille était dans ton regard, pas dans l'objet ?" },
      { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "« Regarde encore » — et si je regardais mes propres « failles » de la même manière ? Peut-être que ce que je juge imparfait a une perfection que je ne vois pas encore." },
      { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Les sciences modernes confirment l'ajustement fin de l'univers. Chaque constante physique est calibrée avec une précision extrême. La création n'a pas de faille." },
      { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le regard se purifie, tout devient signe. Chaque imperfection apparente révèle une sagesse cachée. La faille n'est jamais dans la création — elle est dans l'observateur." }
    ],
    munajat: `Ya Khaliq, mon regard est limité et je vois des failles partout. Purifie ma vision. Fais que je voie Ta perfection dans tout ce que Tu as créé — y compris en moi.`
  }
};

// Helper function to get miroir count
export function getMiroirCount(): number {
  return Object.keys(MIROIR).length;
}

// Helper function to get random miroir reference
export function getRandomMiroir(): string | null {
  const keys = Object.keys(MIROIR);
  if (keys.length === 0) return null;
  return keys[Math.floor(Math.random() * keys.length)];
}

// Get all miroir references
export function getAllMiroirReferences(): string[] {
  return Object.keys(MIROIR);
}

// ============================================
// NEW MIROIR ENTRIES - Expanding Coverage
// ============================================

// Surah 4 - An-Nisa
MIROIR["4:36"] = {
  reference: "4:36",
  theme: ["présence", "amour", "méditation"],
  emotion: "Responsabilité, connexion",
  difficulty: "débutant",
  relatedNames: ["Ar-Rahman", "Al-Wadud"],
  mirrorVersion: `« Adorez Allah et ne Lui donnez aucun associé. Agissez avec bonté envers vos père et mère, les proches, les orphelins, les pauvres, le proche voisin, le voisin lointain, le collègue et le voyageur. » Ce verset me place devant une verticalité et une horizontalité. Verticalité : « Adorez Allah » — l'orientation vers le Haut. Horizontalité : « agissez avec bonté » — le déploiement vers les autres. Le miroir me montre que ces deux dimensions ne sont pas séparées. Mon adoration n'est pas complète si elle ne devient pas bonté envers ceux qui m'entourent. Et ma bonté n'est pas durable si elle n'est pas nourrie par l'adoration.`,
  reflection: `L'islam unit le droit de Dieu et le droit des humains. Les deux sont inséparables. Celui qui prit mais maltraite les gens, son prit est incomplet.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une énumération complète : parents, proches, orphelins, pauvres, voisins proches et lointains, collègues, voyageurs. Huit catégories de devoirs sociaux." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Parmi ces huit catégories, laquelle est-ce que je néglige ? Le miroir m'aide à identifier mes zones d'aveuglement dans mes relations humaines." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "« Ne Lui donnez aucun associé » — et si mon égoïsme était une forme d'association ? Quand je place mes intérêts au-dessus de ceux des autres, je m'associe à Allah dans mon cœur." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'humanité forme une seule famille. Le verset trace un cercle concentrique qui part du plus proche (les parents) vers le plus lointain (le voyageur de passage)." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La bonté envers les autres est un miroir de la bonté d'Allah envers moi. Je ne peux pas recevoir Sa miséricorde et refuser d'en être le canal." }
  ],
  munajat: `Ya Allah, Tu me demandes d'être bon envers ceux qui m'entourent. Mais parfois je suis égoïste, indifférent. Ouvre mon cœur à la générosité que Tu veux faire passer à travers moi.`
};

// Surah 5 - Al-Ma'idah
MIROIR["5:3"] = {
  reference: "5:3",
  theme: ["confiance", "guidance", "force"],
  emotion: "Accomplissement, gratitude",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Kamil", "An-Ni'mah"],
  mirrorVersion: `« Aujourd'hui, J'ai parachevé pour vous votre religion, et accompli sur vous Mon bienfait. Et J'agrée l'Islam comme religion pour vous. » Ce verset a été révélé lors du Pèlerinage d'Adieu, dans les derniers jours du Prophète. Le miroir me montre un moment d'accomplissement — comme quand une œuvre est terminée, complète. « J'ai parachevé » — le verbe implique que rien ne manque. La religion n'a pas besoin d'ajouts, de corrections. Elle est complète. Ma quête spirituelle n'est pas de compléter ce qui manque — mais de découvrir ce qui est déjà là.`,
  reflection: `La perfection de la religion signifie que tout ce dont l'âme a besoin pour son voyage vers Dieu est présent. Le chemin est tracé — il reste à le parcourir.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Révélé à 'Arafat, lors du dernier pèlerinage du Prophète. C'est l'un des derniers versets révélés — un testament spirituel." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Est-ce que je vis ma foi comme une quête de perfection personnelle, ou comme la découverte d'un chemin déjà parfait ? Le miroir m'invite à la confiance plutôt qu'à l'anxiété." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "« J'agrée l'Islam » — c'est Allah qui choisit, pas moi. Ma conversion spirituelle n'est pas mon exploit — c'est Son cadeau." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'achèvement de la religion marque la fin de la révélation et le début de l'humanité responsable. Le message est complet — maintenant, à nous de le vivre." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand la religion est complète, le cœur n'a plus besoin de chercher ailleurs. Tout ce qu'il cherche est déjà dans ce qu'il a reçu." }
  ],
  munajat: `Ya Allah, Tu as parfait ma religion. Aide-moi à ne pas chercher ce que Tu as déjà donné, à ne pas douter de ce que Tu as accompli. Fais-moi vivre dans la plénitude de Ton bienfait.`
};

// Surah 6 - Al-An'am
MIROIR["6:59"] = {
  reference: "6:59",
  theme: ["sagesse", "présence", "confiance"],
  emotion: "Révérence, sécurité",
  difficulty: "intermédiaire",
  relatedNames: ["Al-'Alim", "Al-Khabir"],
  mirrorVersion: `« Auprès de Lui se trouvent les clés de l'Inconnaissable. Nul autre que Lui ne les connaît. Et Il connaît ce qui est dans la terre ferme et dans la mer. Pas une feuille ne tombe sans qu'Il ne le sache. » Le miroir me place devant une Connaissance absolue. Chaque feuille qui tombe, chaque grain de sable, chaque pensée qui traverse mon esprit — tout est connu. Cette omniscience n'est pas une surveillance oppressive — c'est une présence rassurante. Rien de ma vie n'est perdu, oublié, insignifiant. Tout est enregistré, conservé, valorisé.`,
  reflection: `Les « clés de l'Inconnaissable » (mafâtih al-ghayb) signifient que seul Allah connaît l'avenir, le destin, les secrets des cœurs. Cette ignorance est une protection, pas une punition.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "L'expression « mafâtih al-ghayb » est unique. Les clés ouvrent ce qui est fermé — ici, ce qui est caché à la connaissance humaine." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je cherche à savoir que je ne peux pas savoir ? L'avenir ? Le destin de mes proches ? Le miroir m'invite à laisser ces questions à Celui qui les connaît." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si Allah sait tout, alors mon ignorance n'est pas un échec — c'est ma place d'humain. Je suis fait pour ne pas tout savoir." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Chaque feuille qui tombe est comptée. L'univers entier est un registre vivant, chaque événement y est inscrit. Rien n'est perdu." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La connaissance divine n'est pas une menace — c'est une promesse. Ce que je vis n'est pas oublié. Tout a un sens, même si je ne le vois pas." }
  ],
  munajat: `Ya 'Alim, Tu sais tout de moi — même ce que j'ignore de moi-même. Remets-moi là où mon ignorance me pèse. Fais que je vive dans la confiance de Celui qui sait.`
};

// Surah 7 - Al-A'raf
MIROIR["7:43"] = {
  reference: "7:43",
  theme: ["gratitude", "espoir", "guérison"],
  emotion: "Reconnaissance, émerveillement",
  difficulty: "intermédiaire",
  relatedNames: ["Ash-Shakur", "Al-Wadud"],
  mirrorVersion: `« Et ils diront : 'Louange à Allah qui nous a guidés vers ceci. Nous n'aurions pas été guidés si Allah ne nous avait pas guidés.' » Ce verset décrit les habitants du Paradis. Le miroir me place au cœur de leur reconnaissance. Ils ne disent pas « nous avons mérité ». Ils disent « nous n'aurions pas été guidés si... ». La gratitude n'est pas pour l'accomplissement personnel — elle est pour le Don reçu. Le Paradis n'est pas une récompense pour mes efforts — c'est le résultat de Sa guidance.`,
  reflection: `Au Paradis, la première parole est « al-hamdu lillah » — la louange. Pas l'orgueil, pas la comparaison, mais la reconnaissance pure.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une scène du Paradis : les élus reconnaissent que leur présence là n'est pas leur mérite, mais le fruit de la guidance divine." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Dans mes réussites, combien de fois dis-je « c'est grâce à Allah » ? Et combien de fois dis-je « c'est grâce à moi » ? Le miroir mesure mon gratitude." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La guidance précède le guidé. Allah a guidé avant même que je ne demande à l'être. Sa miséricorde court après moi." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute guidance est un don. L'étoile qui guide le navigateur, l'instinct qui guide l'oiseau migrateur — tout vient de Lui." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La vraie gratitude n'est pas dans les mots — elle est dans la conscience que tout est don. Même la capacité de dire « merci » est un don." }
  ],
  munajat: `Ya Allah, tout ce que j'ai vient de Toi. Même ma capacité à Te remercier. Fais que ma gratitude soit sincère — pas une formule, mais une conscience constante.`
};

// Surah 8 - Al-Anfal
MIROIR["8:17"] = {
  reference: "8:17",
  theme: ["confiance", "présence", "force"],
  emotion: "Humilité, émerveillement",
  difficulty: "avancé",
  relatedNames: ["Al-Qawiyy", "Al-Aziz"],
  mirrorVersion: `« Ce n'est pas vous qui les avez tués, mais c'est Allah qui les a tués. Et ce n'est pas toi qui as lancé, quand tu as lancé, mais c'est Allah qui a lancé. » Ce verset déconstruit la notion d'action autonome. Le Prophète a physiquement lancé — mais Allah dit « c'est Moi qui ai lancé ». Le miroir me place devant une vérité bouleversante : mes actions sont réellement miennes, et en même temps, elles sont l'expression de l'action divine. Je ne suis pas un robot — je suis un canal. Tout ce que je fais de bien passe à travers moi, mais vient de Lui.`,
  reflection: `Ce verset révèle le mystère de l'action humaine et de l'action divine. L'homme agit vraiment — mais c'est Allah qui crée l'acte. Les deux vérités coexistent.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Révélé après Badr, où les musulmans étaient en minorité. Le succès apparent était le résultat d'une intervention invisible." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je réussis quelque chose, à qui attribue-je le mérite ? À mon effort ? À ma chance ? Le miroir m'invite à voir la Main derrière la main." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Je ne suis pas l'auteur de mes succès — je suis leur canal. Et je ne suis pas l'auteur de mes échecs non plus — ils font partie d'un plan que je ne vois pas." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute action dans l'univers est le résultat d'une interaction entre le choix créaturel et la volonté créatrice. L'homme choisit — Allah crée." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur comprend cela, l'orgueil devient impossible. Comment être fier de ce qui ne vient pas de moi ? Et le désespoir aussi devient impossible." }
  ],
  munajat: `Ya Allah, tout ce que je fais de bien vient de Toi. Ne me laisse pas m'approprier ce qui T'appartient. Fais que je sois un canal transparent de Ta volonté.`
};

// Surah 9 - At-Tawbah
MIROIR["9:51"] = {
  reference: "9:51",
  theme: ["confiance", "force", "patience"],
  emotion: "Sérénité, résilience",
  difficulty: "débutant",
  relatedNames: ["Al-Mu'min", "Al-Wakil"],
  mirrorVersion: `« Dis : 'Rien ne nous atteindra excepté ce qu'Allah a décrété pour nous. Il est notre Maître. Et c'est en Allah que les croyants doivent placer leur confiance.' » Ce verset est un bouclier contre l'anxiété. Le miroir me montre que je passe ma vie à craindre ce qui pourrait arriver — mais rien n'arrive sans Son décret. Ce n'est pas du fatalisme passif — c'est la reconnaissance que je suis entre des Mains bienveillantes. « Rien ne nous atteindra » — le verbe est futur. C'est une promesse pour demain, et après-demain, et toujours.`,
  reflection: `Le décret divin (qadar) n'est pas une prison — c'est une sécurité. Rien ne peut m'atteindre sans Sa permission, et ce qui m'atteint a un sens.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une réponse aux hypocrites qui menaçaient les musulmans. Le verset replace la menace dans la perspective du décret divin." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je crains en ce moment ? Perte d'emploi ? Maladie ? Abandon ? Le miroir me demande : est-ce que je crois que c'est déjà écrit ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si rien ne m'atteint sans Son décret, alors tout ce qui m'atteint est soit une bénédiction, soit un test, soit une purification — mais jamais une punition arbitraire." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Chaque événement dans l'univers suit un ordre. L'étoile ne sort pas de son orbite, la saison ne change pas au hasard. Ma vie aussi a son ordre." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La confiance totale libère une énergie considérable. Au lieu de lutter contre ce qui arrive, je peux accueillir ce qui vient et y trouver le sens." }
  ],
  munajat: `Ya Allah, j'ai peur de ce qui pourrait arriver. Mais Tu dis que rien ne m'atteint sans Ton décret. Apprends-moi à faire confiance à Ton écriture, même quand je ne la comprends pas.`
};

// Surah 10 - Yunus
MIROIR["10:62"] = {
  reference: "10:62",
  theme: ["présence", "amour", "confiance"],
  emotion: "Sécurité, appartenance",
  difficulty: "débutant",
  relatedNames: ["Al-Waliyy", "Al-Wadud"],
  mirrorVersion: `« En vérité, les bien-aimés d'Allah n'auront rien à craindre, et ils ne seront pas affligés. » Ce verset contient un mot extraordinaire : « auliya' » — les bien-aimés, les amis, les proches d'Allah. Le miroir me montre que cette proximité n'est pas réservée aux prophètes. Elle est accessible à tout cœur sincère. Et la promesse est double : « rien à craindre » pour le futur, « pas affligés » pour le passé. La proximité divine nettoie les deux directions du temps.`,
  reflection: `La walâya (amitié divine) est le sommet de la vie spirituelle. Elle n'est pas obtenue par des miracles — mais par la sincérité, l'adoration et le détachement du monde.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le terme « wali » signifie proche, ami, protecteur. C'est une relation d'intimité et de confiance mutuelle." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Est-ce que je suis un « wali » d'Allah ? Le miroir me montre les signes : ma crainte diminue-t-elle ? Ma tristesse se transforme-t-elle ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi Allah qui est mon Wali — mon Protecteur. La relation est réciproque. Je suis Sien, et Il est mien." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute la création est « wali » d'Allah par soumission naturelle. L'être humain peut choisir de devenir « wali » par amour conscient." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand on est vraiment proche d'Allah, la peur disparaît parce qu'on sait que tout est bien, et la tristesse disparaît parce qu'on sait que tout a un sens." }
  ],
  munajat: `Ya Waliyy, je veux être de Tes bien-aimés. Rapproche-moi de Toi. Fais que ma peur et ma tristesse fondent devant Ta présence.`
};

// Surah 11 - Hud
MIROIR["11:88"] = {
  reference: "11:88",
  theme: ["confiance", "prière", "sagesse"],
  emotion: "Humilité, clarté",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Hakam", "Al-Hadi"],
  mirrorVersion: `« Et mon succès ne dépend que d'Allah. En Lui je place ma confiance, et vers Lui je me repens. » Ce verset est une formule complète de spiritualité. « Mon succès ne dépend que d'Allah » — la reconnaissance de la source. « En Lui je place ma confiance » — l'attitude face à l'avenir. « Vers Lui je me repens » — le retour constant. Le miroir me montre que ces trois éléments sont liés. Parce que mon succès vient de Lui, je peux me fier à Lui, et quand je dévie, je retourne à Lui.`,
  reflection: `Shu'ayb, ce prophète méconnu, résume en quelques mots toute l'attitude spirituelle : origine, confiance, retour.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le prophète Shu'ayb s'adresse à son peuple qui le rejette. Son discours est un modèle de dignité et de confiance." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "À qui attribue-je mes succès ? À mon travail ? À ma chance ? À mes relations ? Le miroir m'invite à relocaliser la source." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "« Je me repens » — le retour est constant. On ne se repent pas une fois pour toutes. On se repent chaque jour, chaque instant." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute réussite dans l'univers vient de l'alignement avec la volonté divine. La rivière coule parce qu'elle suit la pente que Dieu a créée." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Ces trois phrases sont une respiration spirituelle : inspir (reconnaissance), pause (confiance), expir (retour). Un cycle constant." }
  ],
  munajat: `Ya Allah, je veux vivre dans cette conscience : Tu es la source de tout bien, je Te fais confiance pour tout, et je retourne à Toi sans cesse. Fais que ces mots deviennent ma respiration.`
};

// Surah 12 - Yusuf
MIROIR["12:53"] = {
  reference: "12:53",
  theme: ["guérison", "confiance", "présence"],
  emotion: "Humilité, lucidité",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Ghaffur", "Ar-Ra'uf"],
  mirrorVersion: `« Je ne m'innocente pas. Car l'âme est incitatrice au mal, sauf celle à qui mon Seigneur fait miséricorde. » Ce verset est une déclaration d'humilité radicale. Yusuf, après des années d'épreuves, ne se présente pas comme un saint impeccable. Il dit : je suis capable du pire — si Allah ne me protège pas. Le miroir me montre que ma « bonté » n'est pas une qualité stable que je possède. Elle est un état maintenu par Sa miséricorde. Si Il me lâche, je tombe. Cette conscience est le début de la véritable vigilance.`,
  reflection: `L'âme (nafs) a plusieurs niveaux. Ici, Yusuf parle du « nafs ammara » — l'âme qui commande le mal. Mais il existe aussi le « nafs lawwama » (qui blâme) et le « nafs mutma'inna » (apaisée).`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Yusuf refuse l'auto-justification. Même après avoir résisté à la tentation, il ne s'attribue aucun mérite." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je résiste à une tentation, est-ce que je me dis « je suis fort » ? Le miroir me corrige : « tu es protégé »." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La miséricorde qui protège n'est pas une récompense pour ma bonté — c'est elle qui crée ma bonté. Je suis bon parce qu'Il est bon avec moi." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Chaque créature a sa « nafs » — son instinct, ses pulsions. L'animal suit sa nafs naturellement. L'humain peut choisir — avec l'aide d'Allah." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "L'humilité n'est pas de se voir mauvais — c'est de se voir dépendant. Je ne suis pas mauvais par nature, mais je ne suis pas bon par moi-même." }
  ],
  munajat: `Ya Allah, je ne veux pas m'innocenter. Je veux Te reconnaître comme la source de tout bien en moi. Protège-moi de moi-même. Maintiens-moi dans Ta miséricorde.`
};

// Surah 14 - Ibrahim
MIROIR["14:34"] = {
  reference: "14:34",
  theme: ["gratitude", "présence", "espoir"],
  emotion: "Reconnaissance, émerveillement",
  difficulty: "débutant",
  relatedNames: ["Ash-Shakur", "Al-Karim"],
  mirrorVersion: `« Et si vous comptez les bienfaits d'Allah, vous ne saurez pas les dénombrer. » Ce verset me place devant l'impossibilité de la gratitude complète. Je peux essayer de compter — mais je n'y arriverai pas. Chaque souffle est un bienfait. Chaque battement de cœur. Chaque pensée. Chaque capacité. La liste est infinie parce que la source est infinie. Le miroir me montre que la gratitude n'est pas une tâche à accomplir — c'est un état à habiter.`,
  reflection: `L'ingratitude n'est pas le contraire de la gratitude — c'est l'aveuglement. On ne peut pas être ingrat en voyant vraiment les dons.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une invitation au dénombrement qui révèle l'impossibilité du dénombrement. C'est le paradoxe de la gratitude infinie." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quels bienfaits est-ce que je considère comme « normaux » ? Ma vue ? Mon ouïe ? Ma capacité à aimer ? Le miroir m'invite à voir l'extraordinaire dans l'ordinaire." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si je ne peux pas compter les bienfaits, je peux au moins les reconnaître. La reconnaissance n'a pas besoin de liste complète — elle a besoin d'un cœur ouvert." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier est un bienfait. Le soleil qui chauffe, la pluie qui nourrit, la terre qui porte — tout est don, rien n'est dû." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le cœur reconnaissant voit des bienfaits partout. Le cœur ingrat ne voit que des manques. Le monde est le même — le regard change tout." }
  ],
  munajat: `Ya Shakur, Tes bienfaits sont innombrables et ma gratitude est limitée. Accepte mon effort de reconnaissance. Ouvre mes yeux à l'océan de dons dans lequel je nage.`
};

// Surah 15 - Al-Hijr
MIROIR["15:99"] = {
  reference: "15:99",
  theme: ["prière", "présence", "espoir"],
  emotion: "Urgence, consécration",
  difficulty: "débutant",
  relatedNames: ["Al-Haqq", "Al-Mumin"],
  mirrorVersion: `« Et adore ton Seigneur jusqu'à ce que te vienne la certitude. » La « certitude » (yaqin) dans ce verset signifie la mort — le moment où l'incertitude de la foi devient la certitude de la vision. Le miroir me montre que l'adoration n'est pas un épisode dans ma vie — elle est le fil conducteur qui doit traverser toute ma vie, du début à la fin. Pas de retraite spirituelle, pas de pause, pas de « maintenant je suis bon ». L'adoration jusqu'au dernier souffle.`,
  reflection: `Le yaqin (certitude) est le plus haut degré de connaissance. Il y a la certitude de la science ('ilm al-yaqin), la certitude de la vue ('ayn al-yaqin), et la certitude de la vérité (haqq al-yaqin).`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un commandement simple mais total : adore jusqu'à la fin. Pas de condition, pas d'exception." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Mon adoration a-t-elle une date de fin ? Ai-je un âge où je me dis « j'ai assez prié » ? Le miroir m'invite à la consécration totale." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La mort n'est pas la fin de l'adoration — elle est son accomplissement. L'adoration terrestre prépare l'adoration éternelle." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose adore Allah par son existence. L'ange adore par l'obéissance constante. L'humain adore par le choix constant." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "L'adoration continue n'est pas une charge — c'est une respiration. Le cœur qui adore en permanence ne s'épuise pas. Il se nourrit." }
  ],
  munajat: `Ya Allah, fais que mon adoration soit constante, pas intermittente. Fais que je T'adore jusqu'à mon dernier souffle — et que ce souffle soit une prière.`
};

// Surah 16 - An-Nahl
MIROIR["16:97"] = {
  reference: "16:97",
  theme: ["espoir", "force", "confiance"],
  emotion: "Encouragement, joie",
  difficulty: "débutant",
  relatedNames: ["Al-Wadud", "Al-Karim"],
  mirrorVersion: `« Quiconque, homme ou femme, fait une bonne œuvre tout en étant croyant, Nous lui ferons vivre une bonne vie. Et Nous les récompenserons selon les meilleures de leurs actions. » Ce verset contient une promesse extraordinaire pour ici-bas, pas seulement pour l'au-delà. « Une bonne vie » — hayatan tayyiba. Le miroir me montre que la qualité de ma vie spirituelle n'est pas en contradiction avec la qualité de ma vie terrestre. La foi et les bonnes œuvres produisent une vie bonne, maintenant, pas seulement plus tard.`,
  reflection: `La « bonne vie » (hayat tayyiba) est une vie de paix intérieure, de sens, de contentement — même dans les épreuves. C'est la qualité de la présence, pas des circonstances.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une promesse équilibrée entre hommes et femmes, entre cette vie et l'au-delà. La bonne œuvre n'est pas sexuée." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Ma vie est-elle « bonne » ? Pas dans les circonstances, mais dans la qualité intérieure ? Le miroir m'aide à distinguer le bonheur de la satisfaction." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La bonne vie n'est pas une récompense extérieure — elle est le fruit naturel de l'alignement intérieur. Quand je suis aligné, je suis bien." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose qui accomplit sa fonction vit une « bonne vie » à sa manière. L'arbre qui pousse est bien. L'oiseau qui vole est bien." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La « meilleure récompense » n'est pas forcément la plus visible. Parfois c'est la paix, parfois c'est la clarté, parfois c'est la présence divine elle-même." }
  ],
  munajat: `Ya Allah, promets-moi une bonne vie. Pas une vie facile, mais une vie bonne. Une vie où Tu es présent, où le sens est clair, où la paix intérieure accompagne chaque jour.`
};

// Surah 17 - Al-Isra
MIROIR["17:82"] = {
  reference: "17:82",
  theme: ["guérison", "prière", "espoir"],
  emotion: "Soulagement, confiance",
  difficulty: "débutant",
  relatedNames: ["Ash-Shafi", "Al-Kafi"],
  mirrorVersion: `« Et Nous faisons descendre du Coran ce qui est guérison et miséricorde pour les croyants. » Le Coran n'est pas qu'un livre de lois — c'est un remède. Le miroir me montre que chaque verset peut être une médecine pour un mal spécifique. Mon cœur est anxieux ? Il y a un verset pour cela. Mon âme est triste ? Il y a un verset pour cela. Je me sens seul ? Il y a un verset pour cela. Le Coran est une pharmacie spirituelle — mais je dois savoir quel remède prendre pour quel mal.`,
  reflection: `La guérison par le Coran n'est pas magique — elle passe par la récitation, la contemplation, et l'application. Le remède doit être pris.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Ce qui est guérison » — le Coran est décrit comme remède (shifa') pour les cœurs et les corps." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce qui me fait souffrir maintenant ? Quel verset pourrait être mon remède ? Le miroir m'invite à chercher dans le Coran la médecine pour mon mal." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La guérison est « pour les croyants » — pas parce qu'Allah exclut, mais parce que la guérison nécessite la confiance en Celui qui guérit." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute guérison vient d'Allah, qu'elle passe par un médecin, un médicament, ou une prière. Le Coran est une guérison directe de Sa Parole." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La vraie guérison n'est pas la disparition du mal — c'est la transformation du rapport au mal. Le Coran ne supprime pas toujours l'épreuve, mais il change comment je la vis." }
  ],
  munajat: `Ya Shafi, guéris mon cœur par Ta Parole. Montre-moi quel verset est mon remède aujourd'hui. Fais que le Coran soit pour moi ce qu'il est vraiment : une guérison et une miséricorde.`
};

// Surah 18 - Al-Kahf
MIROIR["18:24"] = {
  reference: "18:24",
  theme: ["confiance", "présence", "humilité"],
  emotion: "Humilité, rappel",
  difficulty: "débutant",
  relatedNames: ["Al-Muhaymin", "Al-Wakil"],
  mirrorVersion: `« Et ne dis jamais à propos d'une chose : 'Je la ferai demain', sans ajouter : 'Si Allah le veut'. » Ce verset m'invite à reconnaître ma limite. Je ne possède pas demain. Je peux planifier, mais je ne peux pas garantir. « Insha'Allah » n'est pas une formule vide — c'est la reconnaissance que le futur appartient à Allah. Le miroir me montre mon illusion de contrôle. Je dis « je ferai » comme si je possédais le temps. Mais je ne possède même pas ma prochaine respiration.`,
  reflection: `Le « insha'Allah » n'est pas une excuse pour la paresse — c'est la conscience que tout futur dépend de la volonté divine.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un conseil pratique intégré dans une histoire. Le Prophète a oublié de dire « insha'Allah » et a été rappelé à l'ordre divinement." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Combien de fois dis-je « je ferai » sans ajouter « si Allah le veut » ? Le miroson mesure mon illusion de contrôle." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Dire « insha'Allah » ne diminue pas ma responsabilité — elle l'encadre. Je planifie et j'agis, tout en sachant que le résultat n'est pas à moi." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier fonctionne selon la volonté divine. Le soleil se lève parce qu'Il le veut. Les saisons changent parce qu'Il le décide." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand « insha'Allah » devient une habitude sincère, l'anxiété diminue. Je fais ce que je peux, et j'accepte ce qui vient." }
  ],
  munajat: `Ya Allah, je veux vivre dans la conscience que demain T'appartient. Fais que « insha'Allah » soit pour moi une reconnaissance sincère, pas une formule mécanique.`
};

// Surah 19 - Maryam
MIROIR["19:96"] = {
  reference: "19:96",
  theme: ["amour", "présence", "espoir"],
  emotion: "Tendresse, appartenance",
  difficulty: "débutant",
  relatedNames: ["Al-Wadud", "Ar-Rahman"],
  mirrorVersion: `« Ceux qui croient et font de bonnes œuvres, le Tout-Miséricordieux leur accordera Son amour. » Ce verset me promet quelque chose d'extraordinaire : l'amour d'Allah. Pas seulement Sa miséricorde, Sa justice, ou Sa clémence — mais Son amour. Et le miroir me montre que cet amour a des conditions simples : croire et faire le bien. Pas être parfait, pas être sans péché — mais croire et essayer. L'amour d'Allah n'est pas réservé à une élite spirituelle. Il est accessible.`,
  reflection: `L'amour divin (hubb) est mentionné à plusieurs reprises dans le Coran. Ici, il est promis à ceux qui croient et agissent bien. L'amour suit l'action.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "L'expression « Sa part d'amour » (wuddan) suggère une relation personnelle, pas une approbation abstraite." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Est-ce que je crois qu'Allah m'aime ? Ou est-ce que je Le vois comme un juge sévère ? Le miroir m'invite à accueillir Sa tendresse." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si Allah m'aime, pourquoi est-ce que je doute de ma valeur ? Son amour est la mesure ultime de ma dignité." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'amour est la force qui maintient l'univers. Les atomes s'attirent, les planètes gravitent, les cœurs s'aiment — tout est wudd." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur sait qu'il est aimé d'Allah, il n'a plus besoin de chercher l'approbation ailleurs. L'amour divin suffit à guérir toutes les insécurités." }
  ],
  munajat: `Ya Wadud, je veux être de ceux que Tu aimes. Accepte ma foi et mes efforts, si modestes soient-ils. Fais-moi ressentir Ton amour, et fais qu'il me suffise.`
};

// Surah 20 - Ta-Ha
MIROIR["20:14"] = {
  reference: "20:14",
  theme: ["prière", "présence", "méditation"],
  emotion: "Révérence, focus",
  difficulty: "débutant",
  relatedNames: ["Allah", "Al-Haqq"],
  mirrorVersion: `« En vérité, Moi, Je suis Allah. Point de divinité en dehors de Moi. Adore-Moi donc et accomplis la prière pour M'évoquer. » Ce verset est adressé à Moïse, dans la vallée sacrée. Allah Se présente directement : « Je suis Allah ». Pas d'intermédiaire, pas de métaphore. « Point de divinité en dehors de Moi » — le tawhid pur. « Adore-Moi » — la conséquence de la reconnaissance. « Accomplis la prière pour M'évoquer » — la prière n'est pas un rituel vide, mais un rappel conscient.`,
  reflection: `La prière comme dhikr — rappel. Chaque geste de la prière est conçu pour me ramener à la conscience d'Allah.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une auto-présentation divine. Allah Se nomme, Se définit, et commande. Le fondement de la révélation à Moïse." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Ma prière est-elle un rappel ou une routine ? Est-ce que j'y suis présent avec Allah, ou ailleurs avec mes pensées ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi Allah qui m'évoque dans la prière. La relation n'est pas à sens unique. Je Le nomme, Il me répond." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute la création est en état de prière permanente. L'ange ne cesse d'adorer. L'être humain a reçu des moments dédiés." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La prière pour l'évocation n'est pas une obligation qui pèse — c'est une respiration qui libère. Le cœur étouffe sans elle." }
  ],
  munajat: `Ya Allah, Tu es le Vrai. Fais que ma prière soit un vrai rendez-vous avec Toi, pas une habitude vide. Que chaque prosternation soit un retour à Toi.`
};

// Surah 21 - Al-Anbya
MIROIR["21:35"] = {
  reference: "21:35",
  theme: ["patience", "confiance", "force"],
  emotion: "Acceptation, résilience",
  difficulty: "débutant",
  relatedNames: ["Al-Hakim", "Al-'Adl"],
  mirrorVersion: `« Tout âme goûtera la mort. Nous vous éprouvons par le mal et par le bien, à titre de tentation. Et c'est à Nous que vous serez ramenés. » Ce verset me place devant l'inévitable : la mort. Chaque âme la goûtera. Le miroir me montre que cette vérité n'est pas sombre — elle est libératrice. Si je sais que tout finira, je peux arrêter de courir après l'éternel ici-bas. Et l'épreuve par le bien — le succès, la richesse — est aussi un test que l'épreuve par le mal.`,
  reflection: `La mort est l'horizon de toute vie. La conscience de la mort n'est pas morbide — elle est la condition d'une vie lucide.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Tout âme goûtera » — le verbe suggère une expérience intime, personnelle. La mort n'est pas une abstraction." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce qui m'éprouve en ce moment ? Le mal ou le bien ? Le miroir m'aide à voir chaque situation comme un test, pas comme un hasard." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'épreuve par le bien peut être plus dangereuse que l'épreuve par le mal. Le succès peut éloigner de Dieu plus sûrement que l'échec." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose dans l'univers passe. Les étoiles meurent, les civilisations s'effondrent. Seul Dieu demeure." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La conscience de la mort est le secret de la vie. Vivre en sachant qu'on mourra change tout — chaque moment devient précieux." }
  ],
  munajat: `Ya Allah, fais que je vive avec la conscience de la mort sans être obsédé par elle. Aide-moi à voir chaque épreuve comme ce qu'elle est : un test de ma foi.`
};

// Surah 22 - Al-Hajj
MIROIR["22:78"] = {
  reference: "22:78",
  theme: ["force", "confiance", "prière"],
  emotion: "Determination, engagement",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Waliyy", "Al-Mawla"],
  mirrorVersion: `« Et luttez pour Allah avec la lutte qui Lui est due. C'est Lui qui vous a élus; et Il n'a placé aucune gêne dans la religion. » Ce verset m'appelle au jihad — pas le jihad militaire, mais le jihad spirituel : l'effort sur soi-même pour Allah. « La lutte qui Lui est due » — Allah mérite un effort total. Mais aussitôt : « Il n'a placé aucune gêne dans la religion ». Le paradoxe est résolu : l'effort est total, mais il n'est pas pénible quand il est fait avec amour.`,
  reflection: `Le « jihad nafs » — la lutte contre l'ego — est le plus grand combat. Et le « haraj » (gêne) n'existe pas dans une religion faite pour la facilité de l'âme.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le jihad authentique est pour Allah, pas pour l'ego, pas pour le pouvoir, pas pour la tribu." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Pour quoi est-ce que je lutte dans ma vie ? Pour ma carrière ? Mon image ? Ou pour Allah ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "« Il vous a élus » — je ne me suis pas choisi. Allah m'a choisi avant que je ne Le choisisse. Ma lutte est une réponse à Son élection." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose dans l'univers lutte pour sa place. La plante lutte vers la lumière. L'être humain lutte vers Dieu — ou vers autre chose." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "L'absence de gêne dans la religion signifie que le chemin vers Dieu est naturel pour l'âme. L'âme est faite pour ce chemin." }
  ],
  munajat: `Ya Allah, je veux lutter pour Toi, pas pour mes désirs. Montre-moi quel combat est le mien. Et fais que ce combat soit une joie, pas un fardeau.`
};

// Surah 25 - Al-Furqan
MIROIR["25:70"] = {
  reference: "25:70",
  theme: ["pardon", "espoir", "guérison"],
  emotion: "Soulagement, gratitude",
  difficulty: "débutant",
  relatedNames: ["At-Tawwab", "Al-Ghaffur"],
  mirrorVersion: `« Sauf celui qui se repent, croit et accomplit de bonnes œuvres. Ceux-là, Allah changera leurs mauvaises actions en bonnes actions. » Ce verset contient une promesse extraordinaire : non seulement les péchés sont pardonnés, mais ils sont transformés. Les mauvaises actions deviennent bonnes. Comment ? Par le repentir sincère. Le miroir me montre que mon passé n'est pas fixé. Ce que j'ai fait de mal peut devenir, par la grâce d'Allah, une source de bien.`,
  reflection: `La transformation des péchés en bonnes actions est le signe ultimate de la miséricorde divine. Le passé ne condamne pas — il peut devenir trésor.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Trois conditions : repentir (tawba), foi (iman), bonnes œuvres ('amal salih). Les trois ensemble transforment le passé." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quel passé me pèse ? Qu'est-ce que j'ai fait que je crois impossible à transformer ? Le miroir me dit : même ça peut devenir bien." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Le péché qui m'éloignait de Allah peut devenir le chemin qui m'en rapproche. La prise de conscience du péché peut ouvrir une porte que l'innocence n'ouvre pas." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "La nature transforme le poison en remède, la pourriture en terre fertile. Allah transforme le mal en bien — c'est Sa façon d'être." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le péché pardonné devient une bénédiction cachée. Celui qui a péché et s'est repenti connaît une miséricorde que l'innocent ne connaît pas." }
  ],
  munajat: `Ya Tawwab, transforme mes erreurs en trésors. Ne laisse aucun péché sans pardon, aucune faute sans rédemption. Fais de mon passé une source de lumière.`
};

// Surah 29 - Al-'Ankabut
MIROIR["29:69"] = {
  reference: "29:69",
  theme: ["guidance", "force", "confiance"],
  emotion: "Determination, espérance",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Hadi", "As-Sirat"],
  mirrorVersion: `« Et ceux qui luttent pour Nous, Nous les guiderons sur Nos chemins. » Ce verset contient une promesse conditionnelle. Ceux qui luttent — ceux qui font l'effort — reçoivent la guidance. La précèdent pas ; elle répond à l'effort. Le miroir me montre que j'attends souvent la guidance avant de bouger. Mais Allah dit : bouge d'abord, et Je te guiderai. L'effort sur soi-même ouvre les chemins que l'immobilité ne peut pas voir.`,
  reflection: `La guidance (hidaya) n'est pas seulement une connaissance — c'est un chemin qui s'ouvre. Et ce chemin s'ouvre à celui qui marche.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Nos chemins » au pluriel suggère une multiplicité de voies vers Allah. Pas un seul chemin, mais autant de chemins que de chercheurs sincères." },
    { label: "Le Reflet", ar: "المرصAD", color: "var(--mirror)", text: "Où est-ce que je stagne en attendant la guidance ? Le miroir m'invite à faire le premier pas, même dans le flou." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La lutte pour Allah n'est pas une lutte contre le monde — c'est une lutte pour Sa proximité. Et c'est Lui qui ouvre la porte." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose dans l'univers cherche son créateur à sa manière. La plante cherche la lumière. L'âme cherche son Seigneur." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Les chemins d'Allah sont sans nombre. Chaque âme a son chemin unique. La lutte pour Allah révèle quel est mon chemin personnel." }
  ],
  munajat: `Ya Hadi, je veux lutter pour Toi. Ouvre-moi Tes chemins. Montre-moi la voie qui est faite pour moi — et donne-moi la force de la suivre.`
};

// Surah 30 - Ar-Rum
MIROIR["30:21"] = {
  reference: "30:21",
  theme: ["amour", "paix", "méditation"],
  emotion: "Tendresse, gratitude",
  difficulty: "débutant",
  relatedNames: ["Al-Wadud", "As-Salam"],
  mirrorVersion: `« Et parmi Ses signes, Il a créé de vous des épouses pour que vous viviez avec elles en tranquillité, et Il a mis entre vous de l'affection et de la bonté. » Ce verset décrit le mariage comme un signe divin. Le miroir me montre que l'amour humain n'est pas une distraction spirituelle — c'est une fenêtre sur l'amour divin. La « tranquillité » (sakina) recherchée dans le couple est un reflet de la sakina que l'âme cherche en Allah.`,
  reflection: `L'amour entre époux est un « signe » d'Allah — un miroir de Son amour. Celui qui comprend l'amour humain peut comprendre l'amour divin.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Trois dons dans le couple : tranquillité (sakina), affection (mawadda), bonté (rahma). La relation conjugale est une école spirituelle." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Est-ce que je trouve la sakina dans mes relations ? Ou est-ce que je cherche la tranquillité ailleurs que dans les liens authentiques ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si le mariage est un signe, alors l' célibat aussi peut être un signe. Chaque état de vie révèle quelque chose de Dieu." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers est tissé de relations. L'atome avec l'atome, la planète avec l'étoile, l'être avec l'être. La relation est la structure de l'existence." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "L'amour humain parfait n'existe pas — mais l'amour humain peut être parfait comme chemin vers l'Amour parfait. Chaque relation est une école." }
  ],
  munajat: `Ya Wadud, remercie-Toi pour l'amour que Tu as mis entre les êtres. Fais que mes relations soient des chemins vers Toi, pas des distractions de Toi.`
};

// Surah 31 - Luqman
MIROIR["31:17"] = {
  reference: "31:17",
  theme: ["prière", "force", "confiance"],
  emotion: "Détermination, équilibre",
  difficulty: "débutant",
  relatedNames: ["Al-Hakim", "Al-Hadi"],
  mirrorVersion: `« Ô mon fils, accomplis la prière, commande le convenable, interdis le blâmable, et endure ce qui t'atteint avec patience. » Les conseils de Luqman à son fils résument la vie spirituelle en quatre piliers : la prière (relation verticale), commander le bien (responsabilité sociale), interdire le mal (engagement moral), la patience (attitude face aux épreuves). Le miroir me montre que ces quatre éléments sont interdépendants. La prière donne la force pour le bien social, et la patience permet de tenir dans les deux.`,
  reflection: `Luqman le sage n'était pas un prophète, mais ses conseils sont dignes de la révélation. La sagesse n'est pas l'apanage des prophètes — elle est accessible à tout cœur sage.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Quatre commandements en ordre : prière, bien, vérité, patience. La base est la prière — tout le reste en découle." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Lequel de ces quatre piliers est faible en moi ? Ma prière ? Mon engagement social ? Ma patience ? Le miroir identifie la brèche." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La patience vient à la fin — elle est la conséquence de tout le reste. Celui qui prie, fait le bien et dit la vérité aura besoin de patience." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute société qui pratique ces quatre principes prospère. Toute société qui les abandonne décline. C'est une loi universelle." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "L'équilibre entre ces quatre est le secret. Trop de patience sans action devient passivité. Trop d'action sans prière devient épuisement." }
  ],
  munajat: `Ya Hakim, donne-moi la sagesse de Luqman. Fais que je prie, que j'agisse, que je dise la vérité, et que j'endure avec grâce. Enseigne-moi l'équilibre.`
};

// Surah 32 - As-Sajdah
MIROIR["32:17"] = {
  reference: "32:17",
  theme: ["espoir", "amour", "présence"],
  emotion: "Émerveillement, attente",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Karim", "Al-Wadud"],
  mirrorVersion: `« Aucun être humain ne sait ce qui lui est caché comme réjouissance pour récompense de ce qu'il œuvrait. » Ce verset promet des joies cachées que l'esprit humain ne peut même pas imaginer. Le miroir me montre que mon imagination est limitée par mon expérience. Je ne peux pas imaginer une couleur que je n'ai jamais vue. De même, les joies du Paradis dépassent tout ce que j'ai connu. Cette promesse n'est pas une fuite — elle est une perspective qui donne du sens à l'effort présent.`,
  reflection: `Les joies du Paradis ne sont pas des plaisirs connus amplifiés — elles sont d'une nature radicalement nouvelle. « Ce que aucun œil n'a vu, aucune oreille n'a entendu ».`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Ce qui est caché » (ma ayyana) suggère une réserve secrète, préparée spécifiquement pour chaque âme." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que j'espère ? Des plaisirs que je connais ? Le miroir m'invite à espérer ce que je ne peux même pas imaginer." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce qui est caché pour les œuvres est aussi caché pour les épreuves. De même que je ne peux pas imaginer les joies, je ne peux pas imaginer les bienfaits cachés dans mes difficultés." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers réserve des surprises à chaque niveau. Le microscope révèle un monde invisible. Le Paradis révèlera des joies invisibles." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "L'espérance en ce qui est caché transforme le présent. Vivre en sachant qu'un trésor m'attend change comment je traverse chaque jour." }
  ],
  munajat: `Ya Karim, Tu as préparé pour moi ce que je ne peux pas imaginer. Ouvre mon cœur à l'espérance. Fais que je vive dans l'attente joyeuse de Tes surprises.`
};

// Surah 33 - Al-Ahzab
MIROIR["33:56"] = {
  reference: "33:56",
  theme: ["amour", "prière", "présence"],
  emotion: "Revérence, connexion",
  difficulty: "débutant",
  relatedNames: ["Ar-Rahman", "Al-Muhammad"],
  mirrorVersion: `« Certes, Allah et Ses anges prient sur le Prophète. Ô vous qui croyez, priez sur lui et saluez-le abondamment. » Ce verset révèle quelque chose d'extraordinaire : Allah Lui-même « prie » sur le Prophète. La prière d'Allah n'est pas comme la nôtre — c'est Sa miséricorde, Son attention, Son honneur qu'Il accorde. Le miroir me montre que prier sur le Prophète n'est pas un rituel vide — c'est entrer dans un courant de grâce qui va d'Allah aux anges aux croyants.`,
  reflection: `La prière sur le Prophète (salawat) est une connexion à la source de la miséricorde. Celui qui prie sur le Prophète reçoit dix prières d'Allah en retour.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verbe « yusalli » est utilisé pour Allah, les anges et les croyants — un même mot pour des réalités différentes." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "À quelle fréquence prie-je sur le Prophète ? Le miroir me montre que cette pratique simple ouvre une porte immense de bénédictions." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Le Prophète prie aussi pour ceux qui prient sur lui. La relation est réciproque. Je me connecte à lui, il se connecte à moi." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Le Prophète est une miséricorde pour les mondes. Prier sur lui, c'est se connecter à la source de la miséricorde universelle." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La salawat régulière poli le cœur. Chaque salawat est une goutte qui nettoie l'ego et rapproche de la lumière prophétique." }
  ],
  munajat: `Ya Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et la famille d'Ibrahim. Accorde-lui la bénédiction et la paix.`
};

// Surah 35 - Fatir
MIROIR["35:2"] = {
  reference: "35:2",
  theme: ["confiance", "gratitude", "force"],
  emotion: "Reconnaissance, humilité",
  difficulty: "débutant",
  relatedNames: ["Al-Wahhab", "Al-Mu'ti"],
  mirrorVersion: `« Ce qu'Allah accorde comme miséricorde aux gens, nul ne peut la retenir. Et ce qu'Il retient, nul ne peut le relâcher après Lui. » Ce verset place ma vie entre les mains d'Allah. Ce qu'Il donne, personne ne peut l'enlever. Ce qu'Il retient, personne ne peut le donner. Le miroir me montre que mes efforts pour « sécuriser » ce que j'ai sont vains. Je ne possède rien — je reçois tout. La sécurité ne vient pas de mes stratégies, mais de Sa volonté de donner.`,
  reflection: `La miséricorde d'Allah est inconditionnelle dans sa source, mais conditionnée par Sa sagesse. Il donne quand c'est bon, retient quand c'est nécessaire.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Deux impossibilités : personne ne peut empêcher ce qu'Il donne, personne ne peut donner ce qu'Il retient. Sa volonté est absolue." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je crains de perdre ? Et qu'est-ce que je désespère d'obtenir ? Le miroir me dit : ni la peur ni le désespoir n'ont de sens." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce qu'Il retient peut être un bien. Ce qu'Il donne peut être une épreuve. Seul Lui connaît la valeur véritable de ce qui arrive." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose dans l'univers reçoit ce qui lui est destiné. La pluie tombe sur qui elle doit tomber. Le soleil éclaire qui il doit éclairer." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La confiance totale libère de la lutte. Pourquoi lutter pour ce qui ne peut pas être retenu ? Pourquoi craindre pour ce qui ne peut pas être enlevé ?" }
  ],
  munajat: `Ya Wahhab, Tu donnes et Tu retiens selon Ta sagesse. Fais que je reçoive avec gratitude ce que Tu donnes, et que j'accepte avec confiance ce que Tu retiens.`
};

// Surah 36 - Ya-Sin
MIROIR["36:11"] = {
  reference: "36:11",
  theme: ["guidance", "présence", "méditation"],
  emotion: "Révérence, attention",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Hadi", "Al-Wa'iz"],
  mirrorVersion: `« Tu avertis seulement celui qui suit le Rappel et craint le Tout-Miséricordieux en secret. » Ce verset distingue ceux qui peuvent être touchés par le message : ceux qui suivent le Rappel (le Coran) et qui craignent Allah « en secret ». La crainte en secret signifie une conscience de Allah même quand personne ne regarde. Le miroir me montre que ma vie publique peut être impeccable tandis que mon cœur en privé est ailleurs. La vraie piété se mesure dans le secret.`,
  reflection: `La crainte en secret (khawf al-sirr) est le signe d'une conscience vivante. Celui qui ne craint que le regard des hommes n'a pas vraiment compris.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le Rappel (dhikr) et la crainte secrète (khawf) sont les deux conditions pour être touché par l'avertissement coranique." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qui suis-je quand personne ne me voit ? Le miroir du secret révèle ma vraie relation avec Allah." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La crainte en secret n'est pas de la peur — c'est de la conscience. Je ne crains pas Sa punition autant que Sa désapprobation." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier est dans la crainte respectueuse de son Créateur. L'atome obéit aux lois. L'être humain peut choisir — mais le cœur sage craint." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La crainte en secret purifie l'intention. Quand je fais le bien sans témoin, c'est vraiment pour Allah que je le fais." }
  ],
  munajat: `Ya Rahman, je veux Te craindre même quand personne ne me voit. Purifie mon intention. Fais que chaque acte secret soit un acte pour Toi.`
};

// Surah 40 - Ghafir
MIROIR["40:60"] = {
  reference: "40:60",
  theme: ["prière", "confiance", "espoir"],
  emotion: "Espérance, connexion",
  difficulty: "débutant",
  relatedNames: ["Al-Mujib", "Al-Qarib"],
  mirrorVersion: `« Et votre Seigneur dit : 'Invoquez-Moi, Je vous exaucerai.' » Ce verset est une invitation directe d'Allah. Pas une suggestion — une invitation. Et une promesse : « Je vous exaucerai ». Le miroir me montre que je ne prie pas assez. Je m'inquiète, je planifie, je me plains — mais je n'invoque pas vraiment. Pourtant, la promesse est là : demandez, et vous recevrez. Pas peut-être — vous recevrez.`,
  reflection: `L'invocation (du'a') est l'essence de l'adoration selon le Prophète. C'est le moment où la créature reconnaît sa dépendance et le Créateur Sa générosité.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un impératif divin : « Invoquez-Moi ». Le du'a' n'est pas optionnel — c'est une obligation spirituelle." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je désire vraiment ? Et ai-je vraiment demandé à Allah ? Le miroir m'invite à verbaliser mes désirs devant Lui." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'exaucement n'est pas forcément selon ma demande. Parfois Allah donne mieux, parfois Il retient par sagesse. Mais Il répond toujours." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose invoque Allah par son besoin. La plante invoque la pluie. L'âme invoque son Seigneur. Le besoin est une prière." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le du'a' change celui qui prie autant que sa situation. En demandant, je reconnais que je ne suis pas autonome. Et cette reconnaissance est un trésor." }
  ],
  munajat: `Ya Mujib, Tu m'invites à T'invoquer. Me voici. J'apporte mes besoins, mes désirs, mes peurs. Exauce-moi selon Ta sagesse, pas selon mon impatience.`
};

// Surah 41 - Fussilat
MIROIR["41:53"] = {
  reference: "41:53",
  theme: ["guidance", "présence", "méditation"],
  emotion: "Certitude, émerveillement",
  difficulty: "débutant",
  relatedNames: ["Al-Haqq", "Al-Bayyinah"],
  mirrorVersion: `« Nous leur montrerons Nos signes dans l'univers et en eux-mêmes, jusqu'à ce qu'il leur devienne évident que c'est la vérité. » Ce verset promet que la vérité finira par être évidente. Les signes d'Allah sont partout — dans l'univers (le cosmos) et en nous-mêmes (l'âme). Le miroir me montre que je cherche parfois Allah au loin alors qu'Il est visible dans la création et dans ma propre constitution. Chaque cellule, chaque étoile, chaque souffle est un signe.`,
  reflection: `La vérité (al-haqq) devient évidente non par l'argument mais par l'expérience. Celui qui regarde avec sincérité finit par voir.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Deux lieux de signes : l'univers (l'extérieur) et l'âme (l'intérieur). Le macrocosme et le microcosme disent la même vérité." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quel signe d'Allah ai-je vu aujourd'hui ? Le soleil ? Mon cœur qui bat ? Une parole qui m'a touché ? Le miroir m'invite à la reconnaissance." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si la vérité doit devenir évidente, pourquoi est-elle parfois obscure ? Parce que mon regard est voilé, pas parce que la vérité est cachée." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier est un livre de signes. Chaque page dit « Allah ». L'âme aussi est un livre — chaque expérience dit « Il est là »." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand la vérité devient évidente, la foi cesse d'être un effort pour devenir une évidence. C'est l'état du yaqin — la certitude." }
  ],
  munajat: `Ya Haqq, montre-moi Tes signes. Ouvre mes yeux à l'univers et à mon âme. Fais que la vérité devienne évidente pour mon cœur, pas seulement pour mon intellect.`
};

// ============================================
// EXPANSION PHASE 2 - More Surah Coverage
// ============================================

// Surah 23 - Al-Mu'minun
MIROIR["23:1"] = {
  reference: "23:1",
  theme: ["présence", "prière", "méditation"],
  emotion: "Espoir, détermination",
  difficulty: "débutant",
  relatedNames: ["Al-Mu'min", "Al-Muflih"],
  mirrorVersion: `« Bienheureux sont les croyants qui sont humbles dans leur prière. » Ce verset ouvre une sourate entière dédiée aux qualités des croyants véritables. Le miroir me place devant une liste de contrôle spirituelle. Suis-je de ceux qui « sont humbles dans leur prière » ? L'humilité dans la prière (khushu') n'est pas une émotion — c'est une présence. C'est quand mon corps et mon cœur sont alignés face à Allah.`,
  reflection: `Les « bienheureux » (aflaha) sont ceux qui réussissent vraiment. Le succès dans l'au-delà commence par la qualité de la prière ici-bas.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "La sourate énumère les qualités des croyants : khushu' dans la prière, évitement du vain, paiement de la zakat, préservation des parties intimes..." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je prie, où est mon cœur ? Est-ce que je suis présent ou distrait ? Le miroir m'invite à évaluer la qualité, pas seulement la quantité." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'humilité dans la prière n'est pas un effort — c'est un don. C'est quand je réalise devant Qui je me tiens que l'humilité devient naturelle." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute la création « prie » à sa manière. L'humain seul peut prier avec conscience ou sans. Le khushu' est ce qui distingue la prière vivante de la récitation morte." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La prière avec khushu' est le paradis anticipé. Dans ces moments, le temps s'arrête, et l'âme goûte à ce qui l'attend." }
  ],
  munajat: `Ya Allah, je me tiens devant Toi mais mon cœur s'égare. Apprends-moi le khushu'. Fais que ma prière soit une vraie rencontre, pas une répétition.`
};

// Surah 26 - Ash-Shu'ara
MIROIR["26:88"] = {
  reference: "26:88",
  theme: ["détachement", "confiance", "sagesse"],
  emotion: "Lucidité, priorisation",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Wali", "Al-Hadi"],
  mirrorVersion: `« Le jour où ni les biens ni les enfants ne seront d'aucune utilité, sauf celui qui vient à Allah avec un cœur sain. » Ce verset est un diagnostic radical. Le miroir me demande : sur quoi comptes-tu vraiment ? Tes économies ? Ta famille ? Ta réputation ? Tout cela sera inutile. Seul un « cœur sain » (qalb salim) servira. Un cœur sain, c'est un cœur sans maladie : sans shirk (association), sans hasad (envie), sans kibr (orgueil). Un cœur purifié.`,
  reflection: `Le cœur sain est la seule monnaie valable au Jour du Jugement. Ni l'intelligence, ni la beauté, ni la richesse ne seront acceptées. Seul le cœur compte.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset vient dans le contexte des épreuves de l'au-delà. Les biens et les enfants, souvent nos plus grandes fiertés, deviennent inutiles." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce qui « sécurise » ma vie aujourd'hui ? Et si j'enlevais cela, que resterait-il ? Le miroir m'aide à identifier mes fausses assurances." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Le cœur sain n'est pas un cœur parfait — c'est un cœur qui se tourne sincèrement vers Allah. La santé spirituelle n'est pas l'absence de péché, mais la présence de retour." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose retourne à son origine. Le cœur retourne à son Créateur. Seul ce qui est compatible avec Lui peut faire ce voyage." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le cœur sain est celui qui a fait la paix avec Allah — qui a cessé de Lui faire la guerre par ses résistances, ses doutes, ses rébellions." }
  ],
  munajat: `Ya Allah, purifie mon cœur. Enlève ce qui l'encombre : l'orgueil, l'envie, l'attachement au monde. Donne-moi un qalb salim qui viendra à Toi sans honte.`
};

// Surah 27 - An-Naml
MIROIR["27:62"] = {
  reference: "27:62",
  theme: ["espoir", "confiance", "prière"],
  emotion: "Soulagement, confiance",
  difficulty: "débutant",
  relatedNames: ["Al-Mujib", "Al-Fattah"],
  mirrorVersion: `« N'est-ce pas Lui qui répond à l'accablé quand il L'invoque, et qui dissipe le mal ? » Ce verset est une des plus belles promesses du Coran. Le miroir me montre un Allah qui répond spécifiquement à « l'accablé » (al-mudtar). Pas au parfait, pas au saint — à celui qui est écrasé par les difficultés. Quand je suis au fond du trou, incapable de bouger, Allah dit : « Invoque-Moi, Je répondrai. »`,
  reflection: `La réponse d'Allah à l'accablé est une promesse inconditionnelle. Celui qui est vraiment dans la difficulté a accès direct à la miséricorde.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset utilise la forme interrogative rhétorique : « N'est-ce pas Lui... ? » La réponse est évidente : oui, c'est Lui." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je suis accablé, vers qui me tourne-je en premier ? Vers les remèdes humains ou vers l'Invoqué divin ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est peut-être l'accablement lui-même qui est la porte. Sans lui, je n'invoquerais pas. La difficulté crée l'ouverture vers Allah." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute créature en détresse « invoque » à sa manière. Le cri du bébé, le gémissement du malade, le silence du désespéré — tout est entendu." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La réponse d'Allah précède parfois l'invocation. Il prépare la délivrance avant même que je ne demande." }
  ],
  munajat: `Ya Mujib, je suis accablé et je viens à Toi. Réponds à mon invocation. Délivre-moi de ce qui m'écrase. Tu es le seul qui peut vraiment soulager.`
};

// Surah 28 - Al-Qasas
MIROIR["28:56"] = {
  reference: "28:56",
  theme: ["guidance", "amour", "sagesse"],
  emotion: "Humilité, acceptation",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Hadi", "Al-Muqtadir"],
  mirrorVersion: `« Tu ne guides pas celui que tu aimes, mais c'est Allah qui guide qui Il veut. » Ce verset a été révélé au sujet d'Abu Talib, l'oncle du Prophète qui l'avait protégé mais n'avait pas embrassé l'Islam. Le miroir me montre les limites de mon influence. J'ai des proches que j'aime et que je voudrais voir guidés. Mais la guidance n'est pas dans mes mains. Mon rôle est d'aimer, de témoigner, de prier — le reste appartient à Allah.`,
  reflection: `La guidance (hidayah) est un don divin, pas un fruit de l'effort humain. Le Prophète lui-même ne pouvait pas guider ceux qu'il aimait.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un verset d'humilité pour le Prophète et pour nous. Même le meilleur des humains ne contrôle pas les cœurs." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qui est-ce que j'essaie de « sauver » ? Et comment réagis-je quand mes efforts échouent ? Le miroir m'invite au lâcher-prise." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Si je ne peux pas guider, je peux aimer. L'amour authentique est plus puissant que la persuasion." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Chaque cœur a son propre chemin vers Allah. Certains prennent des détours que je ne comprends pas." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "La vraie guidance passe par l'acceptation que je ne suis pas le Maître des cœurs. Je suis un messager, pas un contrôleur." }
  ],
  munajat: `Ya Hadi, Toi seul guides les cœurs. J'aime ceux qui m'entourent mais je ne peux pas les sauver. Conduis-les vers Toi, à Ton heure, à Ta manière.`
};

// Surah 34 - Saba
MIROIR["34:3"] = {
  reference: "34:3",
  theme: ["présence", "sagesse", "confiance"],
  emotion: "Révérence, certitude",
  difficulty: "intermédiaire",
  relatedNames: ["Al-Khaliq", "Al-'Alim"],
  mirrorVersion: `« Ceux qui ne croient pas disent : 'L'Heure ne nous viendra pas.' Dis : 'Au contraire, par mon Seigneur, elle vous viendra certainement.' » Ce verset traite de la certitude de l'Heure (as-sa'ah). Le miroir me montre que je vis parfois comme si l'Heure n'arriverait jamais. Je remets à demain ce que je devrais faire aujourd'hui. La mort, le jugement, la rencontre avec Allah — tout cela semble si lointain. Et pourtant, c'est une certitude.`,
  reflection: `L'Heure est certaine, mais son moment est inconnu. Cette combinaison crée une tension salutaire : vivre chaque jour comme si c'était le dernier.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset répond aux négateurs par une affirmation solennelle : « Par mon Seigneur » (rabbika). Le serment divin confirme la certitude." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Si l'Heure arrivait aujourd'hui, serais-je prêt ? Qu'est-ce que j'aurais regret de ne pas avoir fait ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La certitude de l'Heure devrait transformer mon présent. Chaque instant devient précieux, chaque acte devient compté." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Tout dans l'univers tend vers une fin. Les étoiles s'éteindront, les montagnes s'effondreront. Seul Allah demeure." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui vit avec la certitude de l'Heure ne s'attache à rien. Il passe dans ce monde sans s'y installer." }
  ],
  munajat: `Ya Allah, l'Heure viendra certainement. Fais que je ne l'oublie pas. Aide-moi à vivre chaque jour comme si c'était le dernier, dans la préparation et la présence.`
};

// Surah 39 - Az-Zumar (adding another important verse)
MIROIR["39:9"] = {
  reference: "39:9",
  theme: ["méditation", "sagesse", "présence"],
  emotion: "Humilité, aspiration",
  difficulty: "intermédiaire",
  relatedNames: ["Al-'Alim", "Al-Hakim"],
  mirrorVersion: `« Dis : 'Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?' Seuls les doués d'intelligence se rappellent. » Ce verset établit une hiérarchie spirituelle basée sur la connaissance. Le miroir me demande : quelle est ma relation avec le savoir ? Le « savoir » ici n'est pas l'information — c'est la connaissance d'Allah (ma'rifa). Celui qui connaît vraiment Allah ne peut pas vivre comme celui qui ne Le connaît pas.`,
  reflection: `La connaissance d'Allah transforme l'être. Le savant spirituel voit ce que l'ignorant ne voit pas. Sa prière, sa patience, sa confiance sont d'une autre qualité.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une question rhétorique : l'égalité entre savants et ignorants est évidemment impossible." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je « sais » vraiment d'Allah ? Et comment cette connaissance transforme-t-elle ma vie quotidienne ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La vraie connaissance n'enflée pas — elle humilie. Plus je connais Allah, plus je me connais comme limité." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers entier est une manifestation de la connaissance divine. Le connaître, c'est Le connaître à travers Ses signes." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Les « doués d'intelligence » (ulu l-albab) sont ceux dont le cœur a été ouvert. L'intelligence spirituelle n'est pas dans la tête — elle est dans le cœur." }
  ],
  munajat: `Ya 'Alim, apprends-moi ce qui Te concerne. Pas une connaissance qui enflée, mais une connaissance qui rapproche. Fais de moi un de ceux qui se rappellent.`
};

// Surah 42 - Ash-Shura
MIROIR["42:37"] = {
  reference: "42:37",
  theme: ["force", "patience", "confiance"],
  emotion: "Résilience, pardon",
  difficulty: "intermédiaire",
  relatedNames: ["Al-'Afuww", "Al-Ghaffur"],
  mirrorVersion: `« Ceux qui évitent les péchés graves et les turpitudes, et qui pardonnent quand ils sont en colère. » Ce verset décrit les croyants de haut rang. Le miroir me montre deux axes : l'un vertical (éviter les péchés) et l'un horizontal (pardonner quand on est en colère). Le deuxième est peut-être plus difficile. Être en colère et pardonner — c'est le test ultime de la maîtrise de soi.`,
  reflection: `Le pardon dans la colère est un miracle spirituel. C'est quand l'ego crie « justice ! » que le cœur choisi « miséricorde ».`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le verset lie le pardon à la colère (ghadab). Pas le pardon facile, mais le pardon dans le moment où l'ego est blessé." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je suis en colère, quelle est ma première réaction ? La riposte ou le pardon ? Le miroir me montre mon niveau spirituel réel." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Pardonner quand on est en colère, c'est se souvenir que j'ai été pardonné par Allah. Je donne ce que j'ai reçu." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "La justice humaine demande « œil pour œil ». La justice divine offre le pardon. Le croyant transcende la première pour embrasser la seconde." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le pardon dans la colère purifie le cœur de ses chaînes. Celui qui pardonne se libère, même si l'autre ne le mérite pas." }
  ],
  munajat: `Ya 'Afuww, Tu me pardonnes quand je ne le mérite pas. Apprends-moi à faire de même. Quand la colère monte, fais que je choisisse le pardon, pas la riposte.`
};

// Surah 47 - Muhammad
MIROIR["47:7"] = {
  reference: "47:7",
  theme: ["confiance", "force", "guidance"],
  emotion: "Engagement, assurance",
  difficulty: "débutant",
  relatedNames: ["An-Nasir", "Al-Wali"],
  mirrorVersion: `« Ô vous qui croyez ! Si vous soutenez Allah, Il vous soutiendra et raffermira vos pas. » Ce verset établit un partenariat extraordinaire. Le miroir me montre que « soutenir Allah » signifie soutenir Sa cause, Sa vérité, Sa guidance. Et la promesse est double : soutien divin et raffermissement. Quand je marche dans Sa direction, Il raffermît mes pas.`,
  reflection: `Le soutien d'Allah n'est pas magique — il vient quand je m'engage. Ma step déclenche Sa réponse. L'initiative est la mienne.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Soutenir Allah » (tansuruna Allah) signifie aider Sa religion, défendre Ses signes, propager Sa vérité." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Comment est-ce que je « soutiens » Allah dans ma vie quotidienne ? Par ma parole ? Mes actions ? Ma patience ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est aussi Allah qui me soutient en premier. Mon soutien à Sa cause est une réponse à Son soutien éternel." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute cause juste est « soutenue » par Allah. L'histoire est remplie de vainqueurs apparemment faibles qui ont triomphé par un soutien invisible." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le raffermissement des pas signifie que la route devient plus claire, plus stable. Celui qui soutient Allah n'est jamais vraiment perdu." }
  ],
  munajat: `Ya Nasir, je veux Te soutenir. Mais je suis faible et distrait. Montre-moi comment Te soutenir, et promets-moi Ton aide quand je le ferai.`
};

// Surah 49 - Al-Hujurat
MIROIR["49:13"] = {
  reference: "49:13",
  theme: ["sagesse", "présence", "amour"],
  emotion: "Humilité, fraternité",
  difficulty: "débutant",
  relatedNames: ["Al-Khaliq", "Al-'Alim"],
  mirrorVersion: `« Ô humains ! Nous vous avons créés d'un mâle et d'une femelle, et Nous avons fait de vous des nations et des tribus pour que vous vous connaissiez. Le plus noble d'entre vous auprès d'Allah est le plus pieux. » Ce verset est la charte universelle de l'humanité. Le miroir me montre que mes distinctions (nationalité, ethnie, statut) sont des outils de connaissance, pas de supériorité. La seule vraie hiérarchie est la piété (taqwa) — et elle est invisible aux yeux humains.`,
  reflection: `La diversité humaine est voulue par Allah. Les différences ne sont pas des obstacles mais des opportunités de rencontre et de connaissance.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Un appel universel : « Ô humains ! » Pas « ô croyants » ou « ô Arabes ». Tous sont concernés." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Comment est-ce que je vois ceux qui sont différents de moi ? Avec curiosité ou jugement ? Le miroir m'invite à la rencontre plutôt qu'à la comparaison." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La noblesse aux yeux d'Allah n'est pas visible. Le plus pauvre, le plus simple peut être le plus noble. Le plus puissant peut être le plus vide." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'humanité forme une seule famille, diverse mais unie dans son origine et sa destination. La taqwa est le lien universel." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui réalise que la seule noblesse est la taqwa cesse de juger par l'apparence. Il regarde les cœurs, pas les habits." }
  ],
  munajat: `Ya Khaliq, Tu m'as créé parmi des peuples différents. Aide-moi à voir au-delà des différences. Fais que je recherche la taqwa — la seule chose qui compte vraiment auprès de Toi.`
};

// Surah 51 - Adh-Dhariyat
MIROIR["51:56"] = {
  reference: "51:56",
  theme: ["présence", "prière", "méditation"],
  emotion: "Purpose, orientation",
  difficulty: "débutant",
  relatedNames: ["Al-Ghani", "Al-Hamid"],
  mirrorVersion: `« Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent. » Ce verset est le verset de la finalité. Le miroir me place devant la question ultime : pourquoi existé-je ? La réponse est claire : l'adoration. Pas parce qu'Allah a besoin de mon adoration — Il est « Al-Ghani », le Riche — mais parce que l'adoration est le sens de mon existence. C'est ce pour quoi je suis fait.`,
  reflection: `L'adoration ('ibadah) dans l'Islam englobe toute action faite avec intention divine. Travailler, aimer, apprendre — tout peut être adoration.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une déclaration de but : « Je n'ai créé... que pour... » La raison d'être est unique et claire." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce que je poursuis dans ma vie ? Est-ce aligné avec ma raison d'être ? Le miroir m'invite à vérifier ma direction." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Allah n'a pas besoin de mon adoration — c'est moi qui ai besoin d'adorer. L'adoration me construit, pas Lui." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute la création « adore » par son existence. L'humain seul peut choisir d'adorer consciemment." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand l'adoration devient l'orientation de toute la vie, chaque acte devient prière. La vie entière devient un acte de présence." }
  ],
  munajat: `Ya Allah, Tu m'as créé pour T'adorer. Mais je m'égare dans tant de poursuites. Recentre-moi. Fais que chaque acte soit un acte d'adoration.`
};

// Surah 53 - An-Najm
MIROIR["53:39"] = {
  reference: "53:39",
  theme: ["force", "méditation", "sagesse"],
  emotion: "Responsabilité, authenticité",
  difficulty: "intermédiaire",
  relatedNames: ["Al-'Adl", "Al-Hasib"],
  mirrorVersion: `« Que l'homme n'obtiendra que ce qu'il aura acquis par son effort. » Ce verset établit le principe de la responsabilité personnelle. Le miroir me montre que je ne peux pas compter sur l'héritage spirituel, la famille pieuse, ou les bonnes actions des autres. Chacun récolte ce qu'il sème. Mon effort (sa'y) détermine mon résultat.`,
  reflection: `L'effort spirituel est individuel. Personne ne peut prier à ma place, ni croire pour moi. Ma relation avec Allah est personnelle et intransférable.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le mot « sa'y » signifie effort, course, lutte. C'est l'investissement personnel, pas le statut social." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quel est mon effort spirituel réel ? Est-ce que je compte sur les autres ou est-ce que je travaille sur moi-même ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'effort est nécessaire — mais le résultat dépend d'Allah. Je fournis le sa'y, et Lui fournit le résultat." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "La loi de cause à effet gouverne le monde. Semer récolter. Effort résultat. C'est une justice cosmique." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le plus bel effort est celui fait pour Allah, sans attacher le cœur au résultat. L'effort purifié de son ego." }
  ],
  munajat: `Ya Allah, fais que je ne compte que sur mon propre effort. Apprends-moi à travailler pour Toi, sans attendre la validation des autres, sans craindre le résultat.`
};

// Surah 54 - Al-Qamar
MIROIR["54:17"] = {
  reference: "54:17",
  theme: ["méditation", "guidance", "présence"],
  emotion: "Accessibilité, gratitude",
  difficulty: "débutant",
  relatedNames: ["Al-Hakim", "Al-Murshid"],
  mirrorVersion: `« En vérité, Nous avons rendu le Coran facile pour la méditation. Y a-t-il quelqu'un pour le méditer ? » Ce verset est répété quatre fois dans cette sourate. Le miroir me montre une offre extraordinaire : le Coran est « facile » (yassarna) — accessible à tous, pas seulement aux savants. La seule condition est la volonté de méditer. « Y a-t-il quelqu'un pour le méditer ? » — c'est une invitation, pas un reproche.`,
  reflection: `La facilité du Coran ne signifie pas la superficialité. C'est une profondeur accessible à tous ceux qui approchent avec sincérité.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le mot « yassarna » signifie facilité, accessibilité. Le Coran parle à chaque niveau de compréhension." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Est-ce que je médite le Coran ? Ou est-ce que je le lis mécaniquement ? Le miroir m'invite à ralentir, à réfléchir." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Le Coran est facile — mais est-ce que je suis disponible ? La facilité du Texte rencontre parfois mon indisponibilité." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Le Coran est le seul texte qui « parle » à chaque époque, chaque culture, chaque niveau. Il est vivant." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Méditer le Coran, c'est le laisser méditer sur moi. C'est un dialogue où le Texte me révèle à moi-même." }
  ],
  munajat: `Ya Allah, le Coran est facile et pourtant je le trouve parfois difficile. Ouvre mon cœur à sa méditation. Fais que je sois de ceux qui répondent à Ton invitation.`
};

// Surah 57 - Al-Hadid
MIROIR["57:3"] = {
  reference: "57:3",
  theme: ["présence", "sagesse", "méditation"],
  emotion: "Contemplation, sécurité",
  difficulty: "avancé",
  relatedNames: ["Al-Awwal", "Al-Akhir", "Az-Zahir", "Al-Batin"],
  mirrorVersion: `« Il est le Premier et le Dernier, l'Apparent et le Caché. » Ce verset contient quatre noms divins qui embrassent toute la réalité. Le miroir me place devant une Présence qui est partout — avant le commencement, après la fin, visible dans la création, caché dans les cœurs. Il n'y a pas de lieu où Allah n'est pas. Je ne peux pas Le fuir, je ne peux pas Le perdre — je peux seulement ne pas Le voir.`,
  reflection: `Ces quatre noms forment un cercle parfait de présence divine. Où que je me tourne, je Le trouve — si je regarde avec les bons yeux.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Quatre attributs : Premier (Awal), Dernier (Akhir), Apparent (Zahir), Caché (Batin). Deux temporalités, deux spatialités." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Dans ma vie, où est-ce que je vois Allah ? Dans le visible ou dans le caché ? Dans le début ou dans la fin ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "S'Il est Premier et Dernier, alors je suis entre Ses deux mains. S'Il est Apparent et Caché, alors nul endroit n'est sans Lui." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose manifeste un de ces attributs. Le soleil est apparent, le vent est caché. L'aube est premier, le crépuscule est dernier." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui réalise ces quatre noms ne se sent jamais seul, jamais perdu. Allah l'enveloppe de toutes parts." }
  ],
  munajat: `Ya Awwal, ya Akhir, ya Zahir, ya Batin, Tu es avant tout, après tout, visible en tout, caché en tout. Aide-moi à Te voir partout.`
};

// Surah 59 - Al-Hashr
MIROIR["59:21"] = {
  reference: "59:21",
  theme: ["présence", "force", "méditation"],
  emotion: "Révérence, émerveillement",
  difficulty: "intermédiaire",
  relatedNames: ["Al-'Aziz", "Al-Hakim"],
  mirrorVersion: `« Si Nous avions fait descendre ce Coran sur une montagne, tu l'aurais vu s'humilier et se fendre par crainte d'Allah. » Ce verset me montre la puissance du Coran. Une montagne — symbole de solidité et de force — s'humilierait et se fendrait devant ce Livre. Le miroir me demande : et moi ? Comment est-ce que je réagis au Coran ? Suis-je plus dur qu'une montagne ? Ou est-ce que je laisse Ses paroles me transformer ?`,
  reflection: `La montagne est physiquement solide mais spirituellement sensible. L'humain est souvent l'inverse : physiquement fragile mais spirituellement endurci.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une image saisissante : la montagne qui s'humilie et se fend. Le Coran a un poids qui dépasse la matière." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand j'entends le Coran, qu'est-ce qui se passe en moi ? Une montagne se fendrait — et moi ? Je continue comme si de rien n'était ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'humilité de la montagne devrait être la mienne. Si la pierre craint Allah, comment puis-je ne pas Le craindre ?" },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute la création reconnaît la Parole divine. L'homme seul peut l'entendre sans être transformé." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le Coran est une lumière qui fend les cœurs endurcis. Ceux qui ne sont pas fendus sont plus durs que les montagnes." }
  ],
  munajat: `Ya Allah, ne me laisse pas devenir plus dur que la montagne. Fends mon cœur avec Ton Livre. Fais que Sa parole me transforme vraiment.`
};

// Surah 63 - Al-Munafiqun
MIROIR["63:9"] = {
  reference: "63:9",
  theme: ["détachement", "méditation", "confiance"],
  emotion: "Vigilance, priorisation",
  difficulty: "débutant",
  relatedNames: ["Al-Hadi", "Al-Fattah"],
  mirrorVersion: `« Ô vous qui croyez ! Que ni vos biens ni vos enfants ne vous distrait du rappel d'Allah. » Ce verset me met en garde contre la distraction (lahw) la plus courante : les biens et les enfants. Le miroir me montre que ce que je considère comme « bénédiction » peut devenir « obstacle » s'il me détourne d'Allah. Le problème n'est pas la possession — c'est la distraction. Puis-je avoir des biens sans être distrait ?`,
  reflection: `Les biens et les enfants sont des tests, pas des buts. Ils sont des moyens de se rapprocher d'Allah — ou de s'en éloigner.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Le mot « tulhikum » vient de la racine qui signifie distraire, faire oublier. L'enjeu est l'attention, pas la possession." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Qu'est-ce qui me « distrait » d'Allah ? Mon travail ? Mes projets ? Mes relations ? Le miroir m'aide à identifier mes idoles modernes." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Les biens et les enfants peuvent aussi me rapprocher d'Allah — si je les vois comme des dons à gérer, pas des maîtres à servir." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose est un test dans ce monde. Ce qui est bénédiction pour l'un peut être malédiction pour l'autre, selon l'usage." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui possède sans être possédé a trouvé la liberté. Ses biens sont dans ses mains, pas dans son cœur." }
  ],
  munajat: `Ya Allah, j'ai des biens et des responsabilités qui m'occupent. Fais qu'ils ne m'éloignent pas de Toi. Aide-moi à Te rappeler au milieu de mes occupations.`
};

// Surah 73 - Al-Muzzammil
MIROIR["73:8"] = {
  reference: "73:8",
  theme: ["prière", "présence", "méditation"],
  emotion: "Dévotion, focalisation",
  difficulty: "avancé",
  relatedNames: ["Ath-Thikr", "Al-Qarib"],
  mirrorVersion: `« Et rappelle-toi du nom de ton Seigneur et consacre-toi entièrement à Lui. » Ce verset m'invite à une relation exclusive. « Consacre-toi entièrement » (tabattal) signifie couper les liens avec tout sauf Allah. Le miroir me montre que ma spiritualité est souvent partagée : je suis avec Allah ET avec le monde. L'invitation ici est à être entièrement avec Lui, même brièvement.`,
  reflection: `Le tabattul (dévotion exclusive) est l'état du cœur qui ne regarde qu'Allah. C'est un trésor caché accessible à tous, même brièvement.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "« Tabattal » vient de « batta » (couper). C'est couper toute attache autre qu'Allah — pendant le dhikr, la prière, la méditation." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Pendant mes moments de prière, suis-je vraiment « entièrement » à Allah ? Ou une partie de moi est-elle ailleurs ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Ce n'est pas moi qui me consacre à Lui — c'est Lui qui m'attire. La consécration est une réponse à Son appel." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose retourne à Allah. Le croyant anticipe ce retour en se consacrant à Lui dès maintenant." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Quand le cœur est entièrement tourné vers Allah, même un instant, cet instant a la valeur de l'éternité." }
  ],
  munajat: `Ya Allah, je veux me consacrer entièrement à Toi. Mais mon cœur est partagé. Coupe ce qui m'attache ailleurs. Donne-moi des moments de pureté.`
};

// Surah 87 - Al-A'la
MIROIR["87:14"] = {
  reference: "87:14",
  theme: ["guérison", "présence", "prière"],
  emotion: "Succès, gratitude",
  difficulty: "débutant",
  relatedNames: ["At-Tawwab", "Al-Ghaffur"],
  mirrorVersion: `« Bienheureux celui qui se purifie, qui prononce le nom de son Seigneur et prie. » Ce verset condense le chemin spirituel en trois étapes : purification (tazkiyah), rappel (dhikr), prière (salah). Le miroir me montre une progression logique : d'abord je me purifie des souillures, puis je me tourne vers Allah par le dhikr, puis je stabilise cette relation par la prière.`,
  reflection: `La purification est la base. Sans elle, le dhikr est superficiel et la prière mécanique. Le cœur propre accueille la présence.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Trois verbes : se purifier, prononcer, prier. Un programme spirituel complet en trois mots." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quel est l'état de mon cœur maintenant ? Est-il purifié ? Le miroir m'invite à l'examen avant l'action." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La purification n'est pas un effort — c'est un don qui vient quand je me tourne vers Allah avec sincérité." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute chose cherche la pureté. L'eau se purifie en s'écoulant. L'air se purifie par le vent. L'âme se purifie par le dhikr." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Le bienheureux (aflaha) est celui qui a réussi le voyage de retour vers la pureté originelle." }
  ],
  munajat: `Ya Tawwab, purifie mon cœur. Fais que je prononce Ton nom avec présence. Et que ma prière soit le couronnement de ma purification.`
};

// Surah 93 - Ad-Duha
MIROIR["93:3"] = {
  reference: "93:3",
  theme: ["espoir", "amour", "confiance"],
  emotion: "Réconfort, assurance",
  difficulty: "débutant",
  relatedNames: ["Ar-Rahman", "Al-Wadud"],
  mirrorVersion: `« Ton Seigneur ne t'a ni abandonné ni détesté. » Ce verset a été révélé quand le Prophète n'avait pas reçu de révélation pendant un temps, et pensait qu'Allah l'avait abandonné. Le miroir me montre mes propres moments d'abandon apparent — quand je prie et que rien ne vient, quand j'attends et que rien ne change. Le verset me dit : « Il ne t'a pas abandonné. » Mon sentiment d'abandon est une illusion.`,
  reflection: `Le silence de Dieu n'est pas Son absence. La pause dans la guidance n'est pas un rejet. Allah aime même dans le silence.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Deux négations : « pas abandonné » et « pas détesté ». Allah rassure doublement Son Prophète." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand est-ce que je me sens « abandonné » par Allah ? Et si ce sentiment était une illusion ? Le miroir m'invite à la confiance." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "C'est peut-être dans le silence que l'amour d'Allah est le plus profond. Il me laisse grandir, chercher, désirer." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "La nuit précède l'aube. Le silence précède la parole. L'absence apparente précède la présence plus forte." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui sait qu'il n'est pas abandonné peut traverser n'importe quel silence. La confiance remplace la peur." }
  ],
  munajat: `Ya Wadud, parfois je me sens abandonné. Mais Tu dis que Tu ne m'abandonnes pas. Je choisis de Te croire, même quand je ne ressens rien.`
};

// Surah 103 - Al-'Asr
MIROIR["103:1"] = {
  reference: "103:1",
  theme: ["méditation", "confiance", "force"],
  emotion: "Urgence, détermination",
  difficulty: "débutant",
  relatedNames: ["Al-'Asr", "Al-Haqq"],
  mirrorVersion: `« Par le Temps ! L'humanité est certes en perdition, sauf ceux qui croient, accomplissent les bonnes œuvres, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement la patience. » Cette sourate est la plus courte mais l'une des plus complètes. Le miroir me place devant l'urgence du temps. Je suis en perdition (khusr) — perte — sauf si je fais quatre choses : croire, agir, conseiller la vérité, conseiller la patience.`,
  reflection: `Le temps (asr) est la ressource la plus précieuse et la plus gaspillée. Chaque instant non investi dans le bien est une perte.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Quatre conditions pour échapper à la perdition : iman (foi), amal salih (bonnes actions), tawasi bil-haqq (conseil mutuel de vérité), tawasi bis-sabr (conseil mutuel de patience)." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Comment est-ce que je dépense mon temps ? Est-ce en perte ou en investissement ? Le miroir m'invite à l'audit temporel." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La perdition est l'état par défaut. Le salut exige un effort actif et continu. Personne n'est sauvé automatiquement." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Le temps est la dimension où se joue le destin. L'éternité se décide dans le temporel. L'infini dans le fini." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Ceux qui remplissent ces quatre conditions transforment le temps en éternité. Chaque instant devient éternel par sa qualité." }
  ],
  munajat: `Ya Allah, je suis en perdition sans Toi. Fais que je croie, que j'agisse, que je conseille la vérité et la patience. Sauve-moi de la perte du temps.`
};

// Surah 108 - Al-Kawthar
MIROIR["108:1"] = {
  reference: "108:1",
  theme: ["gratitude", "prière", "espoir"],
  emotion: "Reconnaissance, plénitude",
  difficulty: "débutant",
  relatedNames: ["Al-Wahhab", "Al-Karim"],
  mirrorVersion: `« Nous t'avons certes accordé l'Abondance. » Ce verset promet à Muhammad le Kawthar — l'abondance. Le miroir me montre qu'Allah donne sans compter. Le mot « Kawthar » suggère une rivière au Paradis, mais aussi toute forme de bien abondant. Ce que j'ai reçu — la vie, la foi, la capacité d'aimer — est une forme de Kawthar. Ma reconnaissance devrait être à la mesure de ce don.`,
  reflection: `L'abondance divine n'est pas seulement matérielle. Le plus grand Kawthar est la proximité d'Allah et la capacité de L'invoquer.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Une courte sourate mais dense. Le Kawthar est un don spécifique au Prophète, mais le principe s'applique à tous les croyants." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quelle est mon « abondance » ? Qu'est-ce que j'ai reçu en quantité généreuse ? Et comment est-ce que je le reconnais ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "L'abondance n'est pas une accumulation — c'est une grâce. Je ne l'ai pas méritée, je l'ai reçue." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'univers déborde de générosité divine. Chaque soleil, chaque goutte d'eau, chaque souffle est un cadeau." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui reconnaît l'abondance reçoit plus. La gratitude est la clé qui ouvre les portes du don." }
  ],
  munajat: `Ya Wahhab, Tu m'as donné l'abondance que je ne mérite pas. Aide-moi à la reconnaître, à l'utiliser pour Toi, et à ne jamais l'oublier.`
};

// Surah 110 - An-Nasr
MIROIR["110:1"] = {
  reference: "110:1",
  theme: ["guidance", "gratitude", "espoir"],
  emotion: "Accomplissement, humilité",
  difficulty: "débutant",
  relatedNames: ["An-Nasir", "Al-Fattah"],
  mirrorVersion: `« Lorsque vient le secours d'Allah ainsi que la victoire. » Cette sourate annonce la victoire finale de l'Islam. Le miroir me montre que toute victoire vient d'Allah. Quand je réussis, ce n'est pas mon mérite — c'est Son secours (nasr). La bonne réaction à la victoire n'est pas l'orgueil mais la reconnaissance : « tu verras les gens entrer en masse dans la religion d'Allah, alors glorifie par les louanges ton Seigneur et implore Son pardon. »`,
  reflection: `La victoire appelle à l'humilité, pas à l'arrogance. Plus le succès est grand, plus la prosternation devrait être profonde.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "La dernière sourate révélée chronologiquement. Elle annonce la fin proche du Prophète et l'accomplissement de sa mission." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Quand je réussis, quelle est ma réaction ? Célébration personnelle ou reconnaissance divine ?" },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "La victoire n'est pas la fin — elle est le début de la gratitude et de la préparation au retour vers Allah." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "Toute victoire dans l'histoire est un don d'Allah. Les empires s'effondrent et les causes justes triomphent par Sa permission." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui comprend que la victoire vient d'Allah ne s'enorgueillit jamais. Il reste prosterné, même au sommet." }
  ],
  munajat: `Ya Nasir, Tu accordes la victoire à qui Tu veux. Si Tu me donnes le succès, fais que je ne m'enorgueillisse pas. Garde-moi prosterné devant Toi.`
};

// Surah 114 - An-Nas
MIROIR["114:1"] = {
  reference: "114:1",
  theme: ["guérison", "confiance", "présence"],
  emotion: "Protection, refuge",
  difficulty: "débutant",
  relatedNames: ["Rab an-Nas", "Malik an-Nas", "Ilah an-Nas"],
  mirrorVersion: `« Dis : Je cherche refuge auprès du Seigneur des humains, le Souverain des humains, le Dieu des humains. » Ce verset ouvre la dernière sourate du Coran. Le miroir me place devant trois attributs divins liés à l'humanité : Seigneur (Celui qui nourrit), Souverain (Celui qui gouverne), Dieu (Celui qui est adoré). Je cherche refuge en Lui contre le mal qui vient du cœur des autres — l'envie, la jalousie, le mal occulte.`,
  reflection: `La protection divine couvre tout : visible et invisible. Le « refuge » (isti'adha) est une prise de conscience que seule Sa protection est fiable.`,
  tajalli: [
    { label: "La Forme", ar: "الأصل", color: "var(--gold)", text: "Trois fois « an-nas » (les humains). La relation Allah-humanité est au cœur de cette sourate." },
    { label: "Le Reflet", ar: "المرصاد", color: "var(--mirror)", text: "Contre quoi ai-je besoin de protection ? Les maladies occultes (hasad, 'ayn, sihr) sont réelles. Le miroir m'invite à me réfugier." },
    { label: "L'Inversion", ar: "القلب", color: "var(--purple)", text: "Le mal vient parfois de ceux qu'on aime. La protection d'Allah est nécessaire même — surtout — de la part des proches." },
    { label: "L'Universel", ar: "الكون", color: "#34d399", text: "L'humanité a besoin de protection contre elle-même. Les humains peuvent être la plus grande bénédiction ou le plus grand danger." },
    { label: "Le Secret", ar: "السر", color: "#fb7185", text: "Celui qui se réfugie vraiment en Allah n'a peur de rien d'autre. Sa protection est un bouclier contre tout mal visible et invisible." }
  ],
  munajat: `Ya Rabb an-nas, ya Malik an-nas, ya Ilah an-nas, je cherche refuge en Toi contre tout mal qui vient des cœurs. Protège-moi, visible et invisible.`
};
