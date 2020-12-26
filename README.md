## Project Name & Pitch

mybuzz-space-pro

Espace Pro pour visualiser les buzzs (images) du client pro. Le client pro est proprietaire d'un buzz apparent dans l'application. Ce buzz étant privé (nécessite une validation du client Pro)  ou public (autorisation directe pas besoin de review) , cet espace permet seulement au client de voir les buzzs qui lui appartienent et de savoir le nombre d'utilisation du buzz et enfin gérer la gestion de validation des buzzs privés.

## Project Status

Le projet est actuellement en cours de developpement.

## Project Screen Shot(s)  

[ PAS DE DESIGN ACTUELEMENT ]

[ PAS DE DESING ACTUELLEMENT]

## Installation and Setup Instructions
 

Pour cloner le repos, tu aura besoin de `node` et `npm` globalement installés dans ton ordinateur.  

Installation:

`npm install`  

Pour executer des Test:  

`npm test`  

Pour executer Start Server:

`npm start`  

Pour visiter l'App:

`localhost:3000`  

## Reflection

Etant donné mybuzz est une application de design graphique (AR - collage), nous sommes dans l'obligation de fournir à nos partenaires un espace de visualisation et de gestion de leurs produits (Buzz) cependant il faut forcément un espace pour voir l'historique des buzzs, les buzzs en cours, le nombre cas d'utilisation et si le buzz est privé le client pro doit pouvoir APPROUVER OU DESAPROUVER un buzz soumis à une étude (review).

Nous développerons la plateforme (espace pro) avec  `react` , `react-router` and `redux` grace a l'outil de lingne de commade create-react-app .  

## models database

# user
`{
  username: {
    type: String,
    unique: true,
    trim: true
  },
  role: {
    type: String,
    default: "ROLE_CLIENT",
    enum: ["ROLE_CLIENT", "ROLE_ADMIN", "ROLE_PRO"]
  },
  password: {
    type: String,
    required: true,
  },
  refreshtoken: {
    type: String
  },
  accesstoken: {
    type: String
  },
  avatar: {
    type: String,
    required: false,
    default: "https://facebook.github.io/react/img/logo_og.png"
  },
  email: {
    type: String,
    required: false,
    trim: true
  },
  tel: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    required: false
  },
  useCases: [
    {
      useCase: {
        type: mongoose.Types.ObjectId,
        ref: "UseCase"
      }
    }
  ]
}`

# usecase
`{
  date: {
    type: Date,
    default: Date.now
  },
  buzz: {
    type: mongoose.Types.ObjectId,
    ref: "Buzz"
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  approuved: {
    type: Boolean,
    default: false
  },
  useCasesUri: {
    type: String,
  }
}` 

# buzz
 `{
  buzzType: {
    type: String, // enumeration
    enum: ["BUZZ_FILTER", "BUZZ_COLLAGE"]

  },
  buzzSecret: {
    type: String, // enumeration
    enum: ["BUZZ_PUBLIC", "BUZZ_PRIVATE"],
    default: "BUZZ_PRIVATE"

  },
  description: {
    type: String
  },
  buzzImageUrl: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"

  },
  date: {
    type: Date,
    default: Date.now
  },
  delay: {
    type: Date,
  },
  useCases: [
    {
      useCase: {
        type: mongoose.Types.ObjectId,
        ref: "UseCase"
      }
    }
  ],
  componentUrl: {
    type: String
  },
  componentOptions: {
    type: Array
  },
  state: {
    type: String,
    enum: ["BUZZ_HOT", "BUZZ_COLD"], // depends on delai(date) > date.now
    require: false
  }
}` 
