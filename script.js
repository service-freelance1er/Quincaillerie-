// =========================================
// PIECES AUTO KOUASSI - ABIDJAN 🇨🇮
// Fichier JavaScript - Tout marche avec ça
// =========================================

const WHATSAPP_NUMERO = "21655061653";

// 1. QUAND LA PAGE EST CHARGEE, ON LANCE TOUT
document.addEventListener("DOMContentLoaded", function() {
    brancherBoutonsWhatsApp();
    brancherBoutonAppeler();
    brancherMenuMobile();
    brancherFiltreProduits();
    brancherBoutonsCommander();
    console.log("Site Pièces Auto prêt ✅");
});

// 2. TOUS LES BOUTONS WHATSAPP MARCHENT
function brancherBoutonsWhatsApp() {
    // Tous les boutons qui ont class="btn-whatsapp"
    const boutons = document.querySelectorAll(".btn-whatsapp, #btn-whatsapp, [data-whatsapp]");

    boutons.forEach(function(bouton) {
        bouton.addEventListener("click", function(e) {
            e.preventDefault();
            // On prend le message du bouton, sinon message par défaut
            const produit = bouton.getAttribute("data-produit") || "une pièce auto à Abidjan";
            const message = "Bonjour Pièces Auto Kouassi 🇨🇮, je veux : " + produit;
            const lien = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(message);
            window.open(lien, "_blank");
        });
    });
}

// 3. BOUTON APPELER MARCHE
function brancherBoutonAppeler() {
    const boutonsAppel = document.querySelectorAll(".btn-appeler, #btn-appeler");
    boutonsAppel.forEach(function(bouton) {
        bouton.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "tel:+" + WHATSAPP_NUMERO;
        });
    });
}

// 4. MENU MOBILE (LE PETIT MENU ☰) MARCHE
function brancherMenuMobile() {
    const boutonMenu = document.querySelector("#menu-btn, .menu-btn, #menu-toggle");
    const menu = document.querySelector("#menu, .nav-links, #nav-menu");

    if (boutonMenu && menu) {
        boutonMenu.addEventListener("click", function() {
            menu.classList.toggle("active");
            // Si le menu est ouvert, on le montre, sinon on le cache
            if (menu.classList.contains("active")) {
                menu.style.display = "flex";
            } else {
                menu.style.display = "none";
            }
        });
    }
}

// 5. FILTRE PRODUITS (Plaquettes, Batterie, Filtre)
function brancherFiltreProduits() {
    const boutonsFiltre = document.querySelectorAll(".filtre-btn, [data-filtre]");
    const produits = document.querySelectorAll(".produit, .product-card");

    // Si pas de filtre sur ton site, on ne fait rien
    if (boutonsFiltre.length === 0) return;

    boutonsFiltre.forEach(function(bouton) {
        bouton.addEventListener("click", function() {
            const categorie = bouton.getAttribute("data-filtre");

            // Enlève la couleur active des autres boutons
            boutonsFiltre.forEach(b => b.classList.remove("active"));
            bouton.classList.add("active");

            // Montre / Cache les produits
            produits.forEach(function(produit) {
                if (categorie === "tout" || categorie === "all") {
                    produit.style.display = "block";
                } else {
                    if (produit.getAttribute("data-categorie") === categorie) {
                        produit.style.display = "block";
                    } else {
                        produit.style.display = "none";
                    }
                }
            });
        });
    });
}

// 6. BOUTON COMMANDER SUR CHAQUE PRODUIT
function brancherBoutonsCommander() {
    const boutonsCommander = document.querySelectorAll(".btn-commander, .btn-acheter");

    boutonsCommander.forEach(function(bouton) {
        // Si le bouton a déjà WhatsApp, on ne le refait pas
        if (bouton.classList.contains("btn-whatsapp")) return;

        bouton.addEventListener("click", function(e) {
            e.preventDefault();
            const produit = bouton.getAttribute("data-produit") || "une pièce auto";
            const message = "Bonjour, je veux commander : " + produit + " à Abidjan 🇨🇮. C'est combien ?";
            const lien = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(message);
            window.open(lien, "_blank");
        });
    });
}

// 7. DÉFILEMENT DOUX QUAND ON CLIQUE SUR ACCUEIL, PRODUITS, CONTACT
document.querySelectorAll('a[href^="#"]').forEach(function(lien) {
    lien.addEventListener("click", function(e) {
        const id = lien.getAttribute("href");
        if (id === "#") return;
        const section = document.querySelector(id);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
