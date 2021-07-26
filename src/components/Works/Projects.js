import MAC from "../../Assets/PC-MAC.png";
import Crispy from "../../Assets/PC-Crispy.png";
import CrispyShowUP from "../../Assets/website-crispy.png";
import MACShowUP from "../../Assets/website-mac.png";

export const projects = [
    {
        title: "Crispy Chicken",
        description: {
            fr: "Crispy Chicken est un site de restaurant que nous designer et développé",
            en: "Crispy Chicken is a restaurant website we designed & developed.",
        },
        demo: "https://addayounes.github.io/CrispyChicken/",
        thumbnail: Crispy,
        showUpImage: CrispyShowUP,
        to: "Crispy",
    },
    {
        title: "MAC Science Club",
        description: {
            fr: "Le Mechanical Activities Club est une structure estudiantine scientifique regroupant des étudiants de l’École Nationale Polytechnique d’Oran – Maurice Audin – autour d’un domaine d’activité technologique.",
            en: "The Mechanical Activities Club is a scientific student structure bringing together students from the National Polytechnic School of Oran - Maurice Audin - around a field of technological activity.",
        },
        demo: "https://www.mac-club-oran.com/",
        thumbnail: MAC,
        showUpImage: MACShowUP,
        to: "MAC",
    },
];
