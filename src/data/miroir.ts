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
