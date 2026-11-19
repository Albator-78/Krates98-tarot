const express = require("express");
const router = express.Router();

const tarotCards = [
  {
    name: "Le Mat",
    description:
      "Le Mat représente les nouveaux départs, le renouveau et le fait d'avancer vers l'inconnu le cœur ouvert. Il évoque l'innocence, la spontanéité et la volonté de faire un saut dans le vide sans savoir exactement où mène le chemin.\n\nCette carte vous invite à faire confiance au voyage qui s'annonce, à cultiver votre curiosité et à accueillir les opportunités inattendues. Bien qu'elle porte l'esprit d'aventure, elle vous rappelle aussi avec douceur de rester attentif à ce qui vous entoure et d'apprendre de chaque pas.",
    image: "/tarotdeck/thefool.jpeg",
  },
  {
    name: "Le Bateleur",
    description:
      "Le Bateleur symbolise l'intention concentrée, le savoir-faire et la capacité à transformer des idées en réalité. Il représente quelqu'un qui dispose de tous les outils nécessaires et de la conscience requise pour les utiliser à bon escient.\n\nLorsque cette carte apparaît, elle suggère que votre volonté, votre créativité et votre clarté d'esprit sont alignées. Elle vous encourage à agir avec confiance, à communiquer clairement et à croire que ce que vous imaginez peut prendre forme grâce à un effort délibéré.",
    image: "/tarotdeck/themagician.jpeg",
  },
  {
    name: "La Papesse",
    description:
      "La Papesse représente l'intuition, la sagesse intérieure et la voix silencieuse qui parle sous le vacarme du quotidien. Elle est la gardienne des mystères, des secrets et des connaissances qui ne peuvent pas toujours être mises en mots.\n\nLorsqu'elle apparaît, elle vous invite à ralentir, à écouter votre intériorité et à vous fier à ce que vous ressentez plutôt qu'à ce que vous pouvez prouver. C'est une carte de réflexion, de rêves et de vérités subtiles qui ne se révèlent que lorsque vous leur laissez de l'espace.",
    image: "/tarotdeck/thehighpriestess.jpeg",
  },
  {
    name: "L'Impératrice",
    description:
      "L'Impératrice incarne l'abondance, l'énergie nourricière et la force créatrice qui donne naissance aux idées et à la vie. Elle est liée à la nature, à la beauté, à la sensualité et au réconfort de se sentir profondément entouré.\n\nCette carte vous encourage à prendre soin de ce que vous avez semé, qu'il s'agisse d'une relation, d'un projet ou de votre propre bien-être. Elle parle d'une croissance qui se déploie naturellement lorsqu'on lui accorde chaleur, patience et attention.",
    image: "/tarotdeck/theempress.jpeg",
  },
  {
    name: "L'Empereur",
    description:
      "L'Empereur symbolise la structure, l'autorité et la main ferme du leadership. Il représente la part de nous qui pose des fondations, fixe des limites et met de l'ordre dans le chaos.\n\nLorsque cette carte apparaît, elle suggère que la discipline, la planification et des principes clairs vous seront précieux. Elle vous invite à prendre vos responsabilités, à diriger avec équité et à protéger ce que vous avez bâti grâce à un effort constant et un jugement sûr.",
    image: "/tarotdeck/theemperor.jpeg",
  },
  {
    name: "Le Pape",
    description:
      "Le Pape représente la tradition, les croyances partagées et la sagesse transmise par les institutions, les enseignants et les communautés. Il évoque le mentorat, l'apprentissage et la valeur des voies établies.\n\nCette carte peut suggérer que les conseils d'une source respectée, l'étude de ce qui est familier ou un retour à vos racines pourraient vous apporter de la clarté dès maintenant. Elle honore le rituel, la cérémonie et le sens que nous tirons de l'appartenance à quelque chose de plus grand que nous.",
    image: "/tarotdeck/thehierophant.jpeg",
  },
  {
    name: "L'Amoureux",
    description:
      "L'Amoureux représente les liens profonds, les choix conscients et l'union des contraires en un tout harmonieux. Bien que souvent associée à l'amour romantique, cette carte parle plus largement des valeurs, des engagements et de l'alignement entre le cœur et l'esprit.\n\nElle vous invite à réfléchir à ce qui compte vraiment pour vous et à choisir avec honnêteté. Que vous soyez face à une relation, une décision ou un carrefour, cette carte vous demande de rester fidèle à votre boussole intérieure.",
    image: "/tarotdeck/TheLovers.jpg",
  },
  {
    name: "Le Chariot",
    description:
      "Le Chariot représente la détermination, la concentration et l'élan pour aller de l'avant malgré les obstacles. Il évoque la victoire acquise par l'autodiscipline et la capacité à garder le cap lorsque des forces tirent dans des directions opposées.\n\nLorsque cette carte apparaît, elle vous encourage à prendre les rênes, à fixer une direction claire et à avoir confiance en votre force. Le progrès est possible lorsque vous restez engagé envers votre objectif et refusez de vous laisser détourner.",
    image: "/tarotdeck/thechariot.jpeg",
  },
  {
    name: "La Force",
    description:
      "La Force représente le courage tranquille, la patience et la puissance douce qui naît de l'équilibre intérieur plutôt que de la brutalité. C'est le calme qui apprivoise l'instinct sauvage, la main ferme qui accueille la difficulté avec compassion.\n\nCette carte vous rappelle que la véritable force n'est ni bruyante ni agressive. C'est la résilience de continuer, la bienveillance envers soi-même sous la pression et la certitude que douceur et puissance peuvent coexister.",
    image: "/tarotdeck/thestrength.jpeg",
  },
  {
    name: "L'Hermite",
    description:
      "L'Hermite représente la solitude, l'introspection et la quête de sens intérieure. Il porte une lanterne qui n'éclaire que le pas suivant, nous rappelant que la sagesse se trouve dans le calme tout autant que dans le mouvement.\n\nLorsque cette carte apparaît, elle vous invite à prendre du recul par rapport au bruit ambiant, à réfléchir à votre parcours et à écouter ce que vous savez déjà. Le temps passé seul avec vos pensées peut apporter la clarté que le monde extérieur ne peut offrir.",
    image: "/tarotdeck/thehermit.jpeg",
  },
  {
    name: "La Roue de Fortune",
    description:
      "La Roue de Fortune représente le tournant des cycles, le rythme du changement et les moments où la vie bascule de manière inattendue. Elle parle de chance, de destin et des grands schémas à l'œuvre sous nos choix quotidiens.\n\nCette carte vous rappelle que rien ne reste figé pour toujours. Lorsque les choses semblent difficiles, le changement approche. Lorsqu'elles semblent faciles, savourez-les. Restez ancré à travers les virages et ayez confiance : la roue continue de tourner.",
    image: "/tarotdeck/wheeloffortune.jpeg",
  },
  {
    name: "La Justice",
    description:
      "La Justice représente l'équité, la vérité et les conséquences naturelles de nos actes. Elle souligne l'importance de l'honnêteté, de la responsabilité et d'une vision claire des situations, sans parti pris.\n\nLorsque cette carte apparaît, elle vous demande de peser le pour et le contre avec soin, d'agir avec intégrité et d'accepter les résultats des décisions passées. L'équilibre se rétablit non pas en évitant la difficulté, mais en l'affrontant avec lucidité et la volonté de rétablir ce qui est juste.",
    image: "/tarotdeck/justice.jpeg",
  },
  {
    name: "Le Pendu",
    description:
      "Le Pendu représente la pause, le lâcher-prise et la perspective nouvelle qui émerge lorsque vous cessez de lutter contre l'instant présent. Il évoque l'abandon du contrôle, la suspension du jugement et le fait de voir les choses sous un angle différent.\n\nCette carte suggère qu'attendre n'est pas perdre. Parfois, la compréhension ne survient que lorsque vous relâchez votre emprise. Autorisez-vous à rester immobile, à observer et à croire que cette pause a sa propre raison d'être.",
    image: "/tarotdeck/thehangedman.jpeg",
  },
  {
    name: "L'Arcane sans nom",
    description:
      "L'Arcane sans nom fait rarement référence à une fin littérale. Il représente la transformation, la clôture d'un chapitre pour qu'un autre puisse s'ouvrir, et le détachement naturel de ce qui ne vous sert plus.\n\nLorsque cette carte apparaît, elle vous invite à lâcher prise avec grâce. Les fins peuvent sembler inconfortables, mais elles libèrent de l'espace pour le renouveau. Ayez confiance : ce qui s'efface fait place à quelque chose de plus aligné avec la personne que vous devenez.",
    image: "/tarotdeck/death.jpeg",
  },
  {
    name: "Tempérance",
    description:
      "Tempérance représente l'équilibre, la modération et le mélange patient des opposés vers l'harmonie. Elle évoque l'action mesurée, le bon tempo et l'art de trouver la voie du milieu.\n\nCette carte vous encourage à respirer, à prendre votre temps et à harmoniser les différentes sphères de votre vie. La guérison et les progrès durables ne viennent pas des extrêmes, mais d'une attention douce et constante.",
    image: "/tarotdeck/temperance.jpeg",
  },
  {
    name: "Le Diable",
    description:
      "Le Diable représente l'attachement, l'illusion et les schémas qui nous maintiennent prisonniers alors que la liberté est plus proche que nous ne le pensons. Il évoque les habitudes, les peurs ou les croyances qui semblent insurmontables mais sont souvent de notre propre fait.\n\nLorsque cette carte apparaît, elle vous demande d'examiner honnêtement ce qui vous retient. Les chaînes sur cette image sont lâches. La prise de conscience est la première étape pour vous libérer de ce qui vous limite et reprendre votre pouvoir.",
    image: "/tarotdeck/thedevil.jpeg",
  },
  {
    name: "La Maison Dieu",
    description:
      "La Maison Dieu représente un changement soudain, l'effondrement des structures bâties sur un terrain instable et les révélations qui surgissent lorsque les illusions tombent. Cela peut sembler bouleversant, mais cela ouvre la voie à quelque chose de plus authentique.\n\nCette carte vous rappelle que ce qui est fondé sur la vérité résistera. Ce qui s'écroule devait tomber. Même au cœur du bouleversement, il y a une liberté à voir les choses telles qu'elles sont réellement.",
    image: "/tarotdeck/thetower.jpeg",
  },
  {
    name: "L'Étoile",
    description:
      "L'Étoile représente l'espoir, le renouveau et la foi tranquille qui revient après une traversée difficile. C'est la lumière douce qui apparaît une fois l'orage passé, vous rappelant que la guérison est possible.\n\nLorsque cette carte apparaît, elle vous invite à croire à nouveau, à rêver et à renouer avec ce qui vous inspire. Il règne ici un calme profond et le sentiment que vous êtes exactement là où vous devez être.",
    image: "/tarotdeck/thestar.jpeg",
  },
  {
    name: "La Lune",
    description:
      "La Lune représente l'invisible, l'intuition et les zones de la vie qui ne sont pas encore claires. Elle parle des rêves, de l'imagination et de l'incertitude qui nous demande d'avancer à tâtons par le ressenti plutôt que par la seule raison.\n\nCette carte vous invite à honorer vos émotions et à faire preuve de patience envers ce qui prend encore forme. Tout n'a pas besoin d'être expliqué immédiatement. Faites confiance à vos perceptions, même lorsque le chemin est sombre.",
    image: "/tarotdeck/themoon.jpeg",
  },
  {
    name: "Le Soleil",
    description:
      "Le Soleil représente la joie, la clarté et la chaleur d'une vie vécue à cœur ouvert. C'est la carte de la célébration, de la vitalité et du bonheur simple d'être pleinement présent.\n\nLorsque cette carte apparaît, elle apporte un puissant encouragement. Quoi que vous entrepreniez, la lumière est de votre côté. Autorisez-vous à ressentir de l'optimisme, partagez votre chaleur avec les autres et profitez de l'instant sans retenue.",
    image: "/tarotdeck/thesun.jpeg",
  },
  {
    name: "Le Jugement",
    description:
      "Le Jugement représente l'éveil, la réflexion et l'appel à incarner une version plus vraie de vous-même. Il évoque ces instants où vous voyez le passé avec lucidité et vous sentez prêt à aller de l'avant avec une compréhension nouvelle.\n\nCette carte vous demande d'écouter la voix intérieure qui sait ce qui doit changer. Pardonnez ce qui doit l'être, libérez ce qui est achevé et répondez à l'appel de vivre plus authentiquement.",
    image: "/tarotdeck/judgement.jpeg",
  },
  {
    name: "Le Monde",
    description:
      "Le Monde représente l'accomplissement, la plénitude et la clôture satisfaisante d'un cycle important. C'est la carte de la réussite, de l'intégration et de la fierté tranquille d'avoir mené un projet à terme.\n\nLorsque cette carte apparaît, elle honore le chemin parcouru. Prenez une pause pour reconnaître tout ce que vous avez accompli. Un chapitre s'achève harmonieusement, et un nouveau se prépare à s'ouvrir.",
    image: "/tarotdeck/theworld.jpeg",
  },
  {
    name: "As de Coupe",
    description:
      "L'As de Coupe représente le début d'un élan émotionnel, un nouvel amour et l'ouverture du cœur. C'est une carte d'émotions naissantes, d'inspiration créative et de connexion qui arrive sans prévenir.\n\nLorsque cette carte apparaît, elle vous invite à accueillir ce qui vous est offert. Autorisez-vous à ressentir profondément, à exprimer ce qui s'éveille en vous et à recevoir la chaleur qui se dirige vers vous.",
    image: "/tarotdeck/aceofcups.jpeg",
  },
  {
    name: "Deux de Coupe",
    description:
      "Le Deux de Coupe représente le partenariat, le respect mutuel et la rencontre de deux cœurs dans une compréhension partagée. Il parle d'harmonie, d'attirance et de la chaleur qui circule entre deux personnes qui se voient réellement.\n\nCette carte peut annoncer une amitié naissante, une conversation profonde ou une relation qui gagne en confiance. Elle vous rappelle que les liens se construisent par l'ouverture et la volonté de rencontrer l'autre d'égal à égal.",
    image: "/tarotdeck/twoofcups.jpeg",
  },
  {
    name: "Trois de Coupe",
    description:
      "Le Trois de Coupe représente la célébration, l'amitié et la joie qui naît des moments partagés. C'est une carte de communauté, de rassemblements et du plaisir simple d'être entouré de personnes qui tiennent à vous.\n\nLorsque cette carte apparaît, elle vous invite à passer du temps avec ceux qui vous élèvent l'esprit. Qu'il s'agisse de marquer une étape importante ou simplement de profiter d'une bonne compagnie, le bonheur se trouve dans le partage.",
    image: "/tarotdeck/threeofcups.jpeg",
  },
  {
    name: "Quatre de Coupe",
    description:
      "Le Quatre de Coupe représente l'introspection, l'ennui et le sentiment d'être peu inspiré par ce qui se trouve devant vous. Il évoque les moments où vous sentez qu'il manque quelque chose, même lorsque des bienfaits sont à portée de main.\n\nCette carte vous invite à lever les yeux. Une opportunité attend peut-être discrètement, mais encore faut-il la remarquer. Réfléchissez à ce que vous désirez vraiment et demandez-vous si ce que vous négligez n'est pas précisément ce dont vous avez besoin.",
    image: "/tarotdeck/fourofcups.jpeg",
  },
  {
    name: "Cinq de Coupe",
    description:
      "Le Cinq de Coupe représente le chagrin, la déception et le poids de se focaliser sur ce qui a été perdu. Il honore la tristesse qui survient lorsque les choses ne se déroulent pas comme espéré.\n\nCette carte vous rappelle également que tout n'est pas perdu. Deux coupes restent debout. Lorsque vous serez prêt, tournez doucement votre attention vers ce qui demeure. La guérison commence lorsque vous vous autorisez à ressentir votre peine, puis choisissez de regarder devant vous.",
    image: "/tarotdeck/fiveofcups.jpeg",
  },
  {
    name: "Six de Coupe",
    description:
      "Le Six de Coupe représente le souvenir, la nostalgie et la douceur de retrouver quelque chose de familier. Il évoque l'enfance, les anciennes amitiés et le réconfort des temps plus simples.\n\nLorsque cette carte apparaît, elle vous invite à puiser de la chaleur dans votre passé sans y rester figé. Renouez avec ce qui vous rendait heureux autrefois, partagez votre bienveillance librement et laissez une joie innocente retrouver sa place dans votre quotidien.",
    image: "/tarotdeck/sixofcups.jpeg",
  },
  {
    name: "Sept de Coupe",
    description:
      "Le Sept de Coupe représente les choix, la rêverie et les nombreuses possibilités qui peuvent sembler accablantes lorsqu'elles s'offrent à vous. Il parle d'imagination, mais aussi du risque de se perdre dans l'illusion.\n\nCette carte vous demande de distinguer clairement ce qui est réel de ce qui relève du vœu pieux. Ramenez vos rêves sur terre, choisissez avec discernement et souvenez-vous que chaque coupe ne contient pas forcément ce qu'elle laisse paraître.",
    image: "/tarotdeck/sevenofcups.jpeg",
  },
  {
    name: "Huit de Coupe",
    description:
      "Le Huit de Coupe représente le départ, le fait de laisser derrière soi ce qui ne nous comble plus et la quête de quelque chose de plus profond. Il parle de courage tranquille et de la sagesse de quitter ce qui semblait autrefois essentiel.\n\nLorsque cette carte apparaît, elle suggère qu'une part de vous est prête pour le changement. Faites confiance à cet élan vers ce qui sonne plus juste, même si cela implique de quitter le confort du familier.",
    image: "/tarotdeck/eightofcups.jpeg",
  },
  {
    name: "Neuf de Coupe",
    description:
      "Le Neuf de Coupe représente le contentement, la satisfaction et la joie paisible de voir ses vœux se réaliser. On l'appelle souvent la carte des souhaits, signe d'épanouissement émotionnel et de gratitude.\n\nCette carte vous invite à savourer ce que vous avez créé et à apprécier le confort qui vous entoure. Autorisez-vous à ressentir de la fierté, partagez votre bonheur et reconnaissez l'abondance déjà présente dans votre vie.",
    image: "/tarotdeck/nineofcups.jpeg",
  },
  {
    name: "Dix de Coupe",
    description:
      "Le Dix de Coupe représente l'harmonie émotionnelle, la famille et le bonheur durable qui naît d'un amour librement partagé. Il évoque la paix au foyer, les liens profonds et le sentiment d'appartenance.\n\nLorsque cette carte apparaît, elle honore les relations que vous avez cultivées. Prenez un instant pour être pleinement présent auprès de ceux que vous aimez et reconnaître la beauté sereine d'une vie bâtie sur l'attention mutuelle.",
    image: "/tarotdeck/tenofcups.jpeg",
  },
  {
    name: "Valet de Coupe",
    description:
      "Le Valet de Coupe représente l'inspiration créative, la curiosité douce et les messages qui touchent le cœur. Ce personnage est ouvert, imaginatif et n'a pas peur de ressentir.\n\nLorsque cette carte apparaît, elle vous invite à aborder la vie avec émerveillement. Une idée surprenante, un message inattendu ou un sentiment tendre est peut-être en chemin vers vous. Accueillez-le l'esprit ouvert.",
    image: "/tarotdeck/pageofcups.jpeg",
  },
  {
    name: "Cavalier de Coupe",
    description:
      "Le Cavalier de Coupe représente le romantisme, l'idéalisme et la quête de quelque chose qui a du sens. Ce personnage suit son cœur, offrant ses gestes avec sincérité et grâce.\n\nCette carte peut annoncer une invitation, une proposition créative ou l'arrivée d'une personne ou d'une situation qui éveille vos émotions. Avancez vers ce qui vous appelle, tout en gardant les pieds suffisamment sur terre pour voir les choses telles qu'elles sont.",
    image: "/tarotdeck/knightofcups.jpeg",
  },
  {
    name: "Reine de Coupe",
    description:
      "La Reine de Coupe représente la profondeur émotionnelle, la compassion et la compréhension intuitive. Elle écoute de tout son être et offre son soutien sans qu'on ait besoin de le lui demander.\n\nLorsque cette carte apparaît, elle vous invite à guider vos actes par l'empathie. Faites confiance à vos ressentis, offrez un espace d'écoute aux autres et souvenez-vous que votre sensibilité est aussi une forme de sagesse.",
    image: "/tarotdeck/queenofcups.jpeg",
  },
  {
    name: "Roi de Coupe",
    description:
      "Le Roi de Coupe représente la maturité émotionnelle, le calme sous la pression et la sagesse sereine de quelqu'un qui se connaît bien. Il équilibre le cœur et l'esprit avec une autorité tranquille.\n\nCette carte vous encourage à répondre plutôt qu'à réagir, à offrir vos conseils avec patience et à garder vos eaux intérieures calmes même lorsque le monde autour de vous s'agite.",
    image: "/tarotdeck/kingofcups.jpeg",
  },
  {
    name: "As de Denier",
    description:
      "L'As de Denier représente de nouvelles opportunités dans le monde matériel, des bases solides et la graine de quelque chose de stable et durable. Il parle de commencements ancrés dans le concret et le tangible.\n\nLorsque cette carte apparaît, elle vous invite à planter ce que vous souhaitez voir grandir. Qu'il s'agisse de lancer un projet, de s'installer dans un nouvel espace ou d'adopter une nouvelle routine, la terre est prête.",
    image: "/tarotdeck/aceofpentacles.jpeg",
  },
  {
    name: "Deux de Denier",
    description:
      "Le Deux de Denier représente l'équilibre, l'adaptabilité et l'art de gérer plusieurs choses à la fois. Il évoque le fait de jongler avec les responsabilités tout en restant agile.\n\nCette carte vous rappelle que la vie avance par vagues. Restez souple, fixez vos priorités avec discernement et souvenez-vous que garder son élégance sous la pression est déjà une belle réussite.",
    image: "/tarotdeck/twoofpentacles.jpeg",
  },
  {
    name: "Trois de Denier",
    description:
      "Le Trois de Denier représente la collaboration, le savoir-faire artisanal et la satisfaction de bâtir quelque chose de qualité avec d'autres. Il parle d'une compétence reconnue et d'un effort valorisé.\n\nLorsque cette carte apparaît, elle suggère que travailler ensemble apportera de meilleurs résultats que d'avancer seul. Partagez vos idées, écoutez les autres et soyez fier de ce que vous créez en équipe.",
    image: "/tarotdeck/threeofpentacles.jpeg",
  },
  {
    name: "Quatre de Denier",
    description:
      "Le Quatre de Denier représente la conservation, la sécurité et le désir de protéger ce que vous possédez. Il parle de stabilité, mais aussi du risque de s'accrocher trop fermement.\n\nCette carte vous demande de réfléchir à ce que vous gardez jalousement et pourquoi. Certaines choses méritent d'être protégées. D'autres ne grandissent que lorsqu'on leur laisse de l'espace. Trouvez l'équilibre entre prudence et ouverture.",
    image: "/tarotdeck/fourofpentacles.jpeg",
  },
  {
    name: "Cinq de Denier",
    description:
      "Le Cinq de Denier représente l'épreuve matérielle, le sentiment d'exclusion ou la traversée d'une période de manque. Il reconnaît la solitude qui peut accompagner les moments difficiles.\n\nCette carte vous rappelle aussi que l'aide est plus proche qu'il n'y paraît. Cherchez la lumière. Tendez la main lorsque vous en avez besoin et ayez confiance : ce passage n'est que temporaire.",
    image: "/tarotdeck/fiveofpentacles.jpeg",
  },
  {
    name: "Six de Denier",
    description:
      "Le Six de Denier représente la générosité, l'équité et le mouvement fluide entre donner et recevoir. Il parle de partager ce que l'on a et de rester ouvert au soutien lorsqu'il se présente.\n\nLorsque cette carte apparaît, elle vous invite à observer où un équilibre est nécessaire. Offrez ce que vous pouvez. Acceptez l'aide avec grâce. L'abondance croît lorsqu'elle circule librement entre les êtres.",
    image: "/tarotdeck/sixofpentacles.jpeg",
  },
  {
    name: "Sept de Denier",
    description:
      "Le Sept de Denier représente la patience, le bilan et la vision à long terme qu'exige un effort régulier. Il évoque le fait de marquer une pause pour évaluer ses progrès et accepter que la croissance demande du temps.\n\nCette carte vous invite à prendre du recul pour observer ce que vous avez semé. Certaines choses sont prêtes à être récoltées. D'autres demandent encore du temps. Dans les deux cas, votre travail n'est pas vain.",
    image: "/tarotdeck/sevenofpentacles.jpeg",
  },
  {
    name: "Huit de Denier",
    description:
      "Le Huit de Denier représente le dévouement, le perfectionnement et la fierté tranquille de maîtriser un domaine par la pratique. Il parle de concentration, de répétition et de soin apporté à l'ouvrage.\n\nLorsque cette carte apparaît, elle vous encourage à persévérer. Chaque petit effort s'additionne. La maîtrise ne vient pas du seul talent, mais de la régularité avec laquelle on se remet à l'ouvrage jour après jour.",
    image: "/tarotdeck/eightofpentacles.jpeg",
  },
  {
    name: "Neuf de Denier",
    description:
      "Le Neuf de Denier représente l'indépendance, le confort et la jouissance paisible de la vie que vous avez construite. Il parle d'autonomie et du plaisir des instants qui n'appartiennent qu'à vous.\n\nCette carte vous invite à apprécier votre cadre de vie et à reconnaître la liberté acquise par vos propres efforts. Prenez le temps de savourer les fruits de ce que vous avez bâti.",
    image: "/tarotdeck/nineofpentacles.jpeg",
  },
  {
    name: "Dix de Denier",
    description:
      "Le Dix de Denier représente la stabilité durable, la famille et le sentiment d'appartenir à quelque chose qui dépasse l'instant présent. Il parle d'héritage, de tradition et du réconfort de fondations solides.\n\nLorsque cette carte apparaît, elle honore ce que vous et ceux qui vous ont précédé avez construit. Soyez fier du foyer, de la communauté ou de l'histoire commune qui vous soutient.",
    image: "/tarotdeck/tenofpentacles.jpeg",
  },
  {
    name: "Valet de Denier",
    description:
      "Le Valet de Denier représente une nouvelle étude, l'acquisition de compétences et l'envie d'apprendre quelque chose de concret. Ce personnage aborde le monde avec curiosité et accepte de commencer par le début.\n\nLorsque cette carte apparaît, elle vous invite à vous intéresser à un nouveau domaine. Inscrivez-vous à un cours, lancez ce projet ou ouvrez ce livre. Les petits débuts mènent à de grandes évolutions.",
    image: "/tarotdeck/pageofpentacles.jpeg",
  },
  {
    name: "Cavalier de Denier",
    description:
      "Le Cavalier de Denier représente l'effort constant, la fiabilité et le progrès lent mais sûr qui découle de la fidélité à un plan. Ce personnage privilégie la régularité à l'éclat passager.\n\nCette carte vous encourage à être patient et méthodique. Tenez vos engagements, soignez les détails et ayez confiance : un travail minutieux produit des résultats durables.",
    image: "/tarotdeck/knightofpentacles.jpeg",
  },
  {
    name: "Reine de Denier",
    description:
      "La Reine de Denier représente le sens pratique bienveillant, le confort et la chaleur ancrée de quelqu'un qui veille avec soin sur son foyer, sa famille et les détails du quotidien.\n\nLorsque cette carte apparaît, elle vous invite à prendre soin de l'essentiel. Mangez bien, reposez-vous, entretenez votre espace et entourez vos proches d'attentions délicates. Un amour calme et constant est une magie en soi.",
    image: "/tarotdeck/queenofpentacles.jpeg",
  },
  {
    name: "Roi de Denier",
    description:
      "Le Roi de Denier représente la réussite établie, la générosité et l'assurance de quelqu'un qui a bâti quelque chose de solide et aime en partager les fruits.\n\nCette carte vous encourage à diriger avec constance et à vous montrer généreux avec ce que vous possédez. La stabilité se construit avec le temps, et vous avez la sagesse nécessaire pour gérer judicieusement ce qui vous est confié.",
    image: "/tarotdeck/kingofpentacles.jpeg",
  },
  {
    name: "As d'Épée",
    description:
      "L'As d'Épée représente la clarté, la percée intellectuelle et l'éclair de lucidité qui tranche à travers la confusion. Il parle d'une perspective nouvelle et de la puissance d'une pensée claire.\n\nLorsque cette carte apparaît, elle vous invite à parler franchement, à voir avec discernement et à agir selon ce que vous comprenez désormais. La vérité possède son propre élan : maniez-la avec soin.",
    image: "/tarotdeck/aceofswords.jpeg",
  },
  {
    name: "Deux d'Épée",
    description:
      "Le Deux d'Épée représente les choix difficiles, l'impasse et les moments où l'évitement semble plus rassurant que la décision. Il évoque le fait d'être coincé entre deux options et de n'en choisir aucune.\n\nCette carte vous invite à retirer votre bandeau. Regardez honnêtement ce qui se trouve devant vous. Même une décision inconfortable vaut mieux que de rester figé.",
    image: "/tarotdeck/twoofswords.jpeg",
  },
  {
    name: "Trois d'Épée",
    description:
      "Le Trois d'Épée représente le chagrin d'amour, les vérités douloureuses et la lucidité tranchante qui naît parfois de la peine. Il reconnaît la blessure qui demande à être entendue.\n\nLorsque cette carte apparaît, autorisez-vous à ressentir ce qui est réel. La douleur ne dure pas éternellement, et la nommer est le premier pas pour la laisser vous traverser et s'apaiser.",
    image: "/tarotdeck/threeofswords.jpeg",
  },
  {
    name: "Quatre d'Épée",
    description:
      "Le Quatre d'Épée représente le repos, la récupération et la sagesse de prendre du recul lorsque vous êtes fatigué. Il parle du calme comme d'une forme de force plutôt que d'un repli.\n\nCette carte vous invite à faire une pause. Apaisez votre esprit, ressourcez votre corps et accordez-vous la tranquillité nécessaire avant que le prochain chapitre ne commence.",
    image: "/tarotdeck/fourofswords.jpeg",
  },
  {
    name: "Cinq d'Épée",
    description:
      "Le Cinq d'Épée représente le conflit, les victoires amères et le prix à payer pour gagner à tout prix. Il vous demande de réfléchir si avoir raison vaut ce que cela vous coûte.\n\nCette carte invite à la remise en question. Parfois, le choix le plus sage consiste à se retirer. Choisissez vos batailles avec discernement et souvenez-vous que la paix est souvent plus précieuse que le triomphe.",
    image: "/tarotdeck/fiveofswords.jpeg",
  },
  {
    name: "Six d'Épée",
    description:
      "Le Six d'Épée représente la transition, le fait de tourner la page et le soulagement tranquille de laisser derrière soi un passage difficile. Il annonce des eaux plus calmes à l'horizon.\n\nLorsque cette carte apparaît, elle suggère qu'un changement est en cours. Le voyage n'est peut-être pas terminé, mais le plus dur est derrière vous. N'emportez que l'essentiel et laissez le reste s'éloigner.",
    image: "/tarotdeck/sixofswords.jpeg",
  },
  {
    name: "Sept d'Épée",
    description:
      "Le Sept d'Épée représente la ruse, la stratégie et la tentation de prendre des raccourcis. Il peut indiquer une tromperie, qu'elle vienne d'autrui ou de vous-même.\n\nCette carte vous demande d'être honnête quant à vos intentions. Les manœuvres trop habiles peuvent se retourner contre vous. Demandez-vous si une approche plus directe ne vous servirait pas mieux sur le long terme.",
    image: "/tarotdeck/sevenofswords.jpeg",
  },
  {
    name: "Huit d'Épée",
    description:
      "Le Huit d'Épée représente le sentiment d'être piégé, limité ou incapable de voir une issue. Il évoque les prisons mentales que nous construisons parfois autour de nous.\n\nCette carte vous rappelle que vos liens sont bien plus lâches qu'ils n'en ont l'air. Regardez autour de vous : le chemin vers l'avant existe. Ayez confiance en votre capacité à sortir de l'histoire qui prétend que vous ne pouvez pas bouger.",
    image: "/tarotdeck/eightofswords.jpeg",
  },
  {
    name: "Neuf d'Épée",
    description:
      "Le Neuf d'Épée représente l'inquiétude, les nuits blanches et la manière dont la peur prend de l'ampleur dans le silence de la nuit. Il reconnaît le poids d'un esprit anxieux.\n\nCette carte vous rappelle que toutes vos pensées ne sont pas des vérités. Ramenez vos inquiétudes à la lumière du jour. Exprimez-les à voix haute, écrivez-les et observez combien l'angoisse est souvent plus lourde que la réalité elle-même.",
    image: "/tarotdeck/nineofswords.jpeg",
  },
  {
    name: "Dix d'Épée",
    description:
      "Le Dix d'Épée représente les fins, les conclusions douloureuses et le point de bascule qui ouvre enfin la voie au renouveau. Il parle d'un achèvement définitif portant la promesse d'un nouveau départ.\n\nLorsque cette carte apparaît, sachez que l'épreuve touche à sa fin. Vous ne pouvez plus tomber plus bas : la seule direction possible est vers le haut. Autorisez-vous à faire votre deuil, puis relevez-vous doucement vers ce qui vient.",
    image: "/tarotdeck/tenofswords.jpeg",
  },
  {
    name: "Valet d'Épée",
    description:
      "Le Valet d'Épée représente la curiosité, la vivacité d'esprit et l'envie de découvrir la vérité des choses. Ce personnage pose des questions et suit les idées partout où elles mènent.\n\nLorsque cette carte apparaît, elle vous invite à rester curieux, à recueillir des informations et à prendre la parole lorsque vous avez quelque chose à dire. Veillez simplement à la façon dont vos mots sont reçus.",
    image: "/tarotdeck/pageofswords.jpeg",
  },
  {
    name: "Cavalier d'Épée",
    description:
      "Le Cavalier d'Épée représente la rapidité, la conviction et l'élan d'agir sur une idée sans hésitation. Ce personnage fonce droit devant, parfois plus vite que la sagesse ne le conseillerait.\n\nCette carte encourage l'action audacieuse, mais aussi la prudence. Avancez avec détermination, mais assurez-vous de savoir où vous allez. Les décisions rapides sont puissantes, mais elles laissent peu de place à la réflexion.",
    image: "/tarotdeck/knightofswords.jpeg",
  },
  {
    name: "Reine d'Épée",
    description:
      "La Reine d'Épée représente la clairvoyance, l'honnêteté et la sagesse issue de l'expérience. Elle parle sans détour et perce à jour les faux-semblants.\n\nLorsque cette carte apparaît, elle vous invite à vous guider par la vérité et à poser des limites claires. Compassion et lucidité peuvent cohabiter : vous n'avez pas besoin d'édulcorer la vérité pour faire preuve de bienveillance.",
    image: "/tarotdeck/queenofswords.jpeg",
  },
  {
    name: "Roi d'Épée",
    description:
      "Le Roi d'Épée représente l'intellect, l'équité et l'autorité qui découle d'une pensée claire sous la pression. C'est un esprit stable dans les moments difficiles.\n\nCette carte vous encourage à diriger par la raison, à peser les faits et à offrir des conseils à la fois honnêtes et réfléchis. Un jugement éclairé est votre meilleur atout en ce moment.",
    image: "/tarotdeck/kingofswords.jpeg",
  },
  {
    name: "As de Bâton",
    description:
      "L'As de Bâton représente l'inspiration, une énergie nouvelle et l'étincelle qui allume une voie créative inédite. Il parle de passion, de potentiel et de l'urgence de commencer.\n\nLorsque cette carte apparaît, elle vous invite à suivre cette étincelle. Ce qui bouillonnait en vous est prêt à prendre forme. Faites confiance à cette impulsion et passez à l'action.",
    image: "/tarotdeck/aceofwands.jpeg",
  },
  {
    name: "Deux de Bâton",
    description:
      "Le Deux de Bâton représente la planification, la vision et l'instant où l'on se tient au seuil de ce qui pourrait être. Il évoque le regard tourné vers l'extérieur et la réflexion sur la prochaine étape.\n\nCette carte vous invite à voir grand et à choisir votre direction avec soin. Le monde est plus vaste qu'il n'y paraît. La suite de votre parcours vous appartient.",
    image: "/tarotdeck/twoofwands.jpeg",
  },
  {
    name: "Trois de Bâton",
    description:
      "Le Trois de Bâton représente l'expansion, la prévoyance et la satisfaction de voir ses projets commencer à se déployer. Il parle de progrès et d'un horizon qui se dessine.\n\nLorsque cette carte apparaît, elle suggère que vos efforts portent leurs fruits. Restez patient tandis que les choses évoluent et demeurez ouvert aux opportunités surgissant d'endroits inattendus.",
    image: "/tarotdeck/threeofwands.jpeg",
  },
  {
    name: "Quatre de Bâton",
    description:
      "Le Quatre de Bâton représente la célébration, le foyer et la joie d'atteindre une étape qui mérite d'être marquée. Il parle d'harmonie, d'appartenance et de réussite partagée.\n\nCette carte vous invite à faire une pause pour apprécier ce que vous avez bâti. Retrouvez ceux qui comptent pour vous. La joie partagée est une joie multipliée.",
    image: "/tarotdeck/fourofwands.jpeg",
  },
  {
    name: "Cinq de Bâton",
    description:
      "Le Cinq de Bâton représente les frictions, la compétition et l'énergie d'opinions divergentes qui s'entrechoquent. Il évoque des désaccords qui peuvent soit diviser, soit stimuler, selon la manière dont ils sont gérés.\n\nCette carte vous invite à écouter autant que vous parlez. Le conflit peut être constructif lorsqu'il est abordé avec patience. Cherchez un terrain d'entente sous le tumulte.",
    image: "/tarotdeck/fiveofwands.jpeg",
  },
  {
    name: "Six de Bâton",
    description:
      "Le Six de Bâton représente la victoire, la reconnaissance et la fierté de voir ses efforts salués. Il parle de réussite publique et des récompenses de la persévérance.\n\nLorsque cette carte apparaît, elle honore votre travail acharné. Accueillez les éloges avec grâce, partagez le mérite avec ceux qui y ont contribué et laissez ce succès vous encourager à poursuivre.",
    image: "/tarotdeck/sixofwands.jpeg",
  },
  {
    name: "Sept de Bâton",
    description:
      "Le Sept de Bâton représente le fait de tenir bon, de défendre ce que vous avez bâti et de rester ferme face à l'adversité. Il parle de convictions mises à l'épreuve.\n\nCette carte vous encourage à rester fort. Vous avez l'avantage du terrain. Faites confiance à ce que vous savez, maintenez votre position et souvenez-vous que certaines limites méritent d'être défendues.",
    image: "/tarotdeck/sevenofwands.jpeg",
  },
  {
    name: "Huit de Bâton",
    description:
      "Le Huit de Bâton représente le mouvement rapide, l'élan et le déroulement accéléré des événements. Il annonce des nouvelles qui arrivent vite et des projets qui prennent de la vitesse.\n\nLorsque cette carte apparaît, attendez-vous à ce que les choses bougent. Restez agile, réagissez promptement et surfez sur la vague d'énergie désormais en mouvement.",
    image: "/tarotdeck/eightofwands.jpeg",
  },
  {
    name: "Neuf de Bâton",
    description:
      "Le Neuf de Bâton représente la résilience, la dernière ligne droite et la force tranquille de quelqu'un qui a parcouru un long chemin et reste déterminé à aller jusqu'au bout.\n\nCette carte vous rappelle que vous êtes plus fort que vous ne le pensez. Reposez-vous si nécessaire, mais n'abandonnez pas. Vous êtes plus proche de l'arrivée que vous ne l'imaginez.",
    image: "/tarotdeck/nineofwands.jpeg",
  },
  {
    name: "Dix de Bâton",
    description:
      "Le Dix de Bâton représente le fardeau, les responsabilités et le poids de porter trop de choses depuis trop longtemps. Il évoque le coût de vouloir tout assumer seul.\n\nCette carte vous invite à déposer une partie de cette charge. Vous n'avez pas à tout porter par vous-même. Demandez de l'aide, simplifiez ce qui peut l'être et souvenez-vous que le repos fait partie du travail.",
    image: "/tarotdeck/tenofwands.jpeg",
  },
  {
    name: "Valet de Bâton",
    description:
      "Le Valet de Bâton représente l'enthousiasme, les idées neuves et l'étincelle d'une aventure prête à commencer. Ce personnage est audacieux, curieux et avide d'explorer.\n\nLorsque cette carte apparaît, elle vous invite à suivre votre enthousiasme. De nouveaux centres d'intérêt, des voyages ou des élans créatifs vous appellent peut-être. Dites oui et voyez où ils vous mènent.",
    image: "/tarotdeck/pageofwands.jpeg",
  },
  {
    name: "Cavalier de Bâton",
    description:
      "Le Cavalier de Bâton représente la passion, l'action et l'élan de poursuivre ce qui vous anime. Ce personnage avance vite, porté par l'inspiration et l'assurance.\n\nCette carte vous encourage à concrétiser vos idées, mais aussi à réfléchir avant de sauter. Canalisez votre énergie avec discernement afin que votre enthousiasme vous mène vers une destination qui en vaille la peine.",
    image: "/tarotdeck/knightofwands.jpeg",
  },
  {
    name: "Reine de Bâton",
    description:
      "La Reine de Bâton représente la chaleur humaine, la confiance en soi et la présence magnétique d'une personne pleinement en accord avec elle-même. Elle inspire les autres simplement par ce qu'elle est.\n\nLorsque cette carte apparaît, elle vous invite à entrer dans votre propre lumière. Ayez confiance en votre charisme, agissez avec cœur et laissez votre authenticité attirer vers vous les bonnes personnes et les bonnes opportunités.",
    image: "/tarotdeck/queenofwands.jpeg",
  },
  {
    name: "Roi de Bâton",
    description:
      "Le Roi de Bâton représente la vision, le leadership et l'assurance de quelqu'un qui transforme des idées en mouvements. Il dirige avec une passion équilibrée par l'expérience.\n\nCette carte vous encourage à voir grand, à prendre les rênes de votre direction et à inspirer votre entourage. Une action audacieuse ancrée dans la sagesse peut vous mener très loin.",
    image: "/tarotdeck/kingofwands.jpeg",
  },
];

router.get("/", (req, res) => {
  res.json(tarotCards);
});

router.get("/onecard", (req, res) => {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const randomCard = tarotCards[randomIndex];
  res.json(randomCard);
});

module.exports = router;
