import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "galerie","/pages/galerie.html",[]),
    new Route("/signin", "Connexion","/pages/signin.html",["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription","/pages/signup.html",["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte","/pages/account.html",["client","admin"]),
    new Route("/editPassword", "changement de mot passe","/pages/editPassword.html",["client","admin"]),
    new Route("/allResa", "Vos réservation","/pages/reservations/allResa.html",["client"]),
    new Route("/reserver", "reserver","/pages/reservations/reserver.html",["client"]),
]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";