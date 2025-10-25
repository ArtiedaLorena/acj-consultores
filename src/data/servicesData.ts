import { Shield, Users, Microscope, HardHat, ClipboardCheck, Zap } from "lucide-react";

import higieneImg from "../components/images/higiene_seguridad.jpg";
import evacuacionImg from "../components/images/evacuacion.png";
import relevamientosImg from "../components/images/mediciones.jpeg";
import capacitacionImg from "../components/images/capacitacion.jpg";
import puestaTierraImg from "../components/images/puesta_a_tierra.jpg";
import equipamientoImg from "../components/images/epp.jpg";


export interface ServiceData {
  id: string;
  icon: any;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  detailedDescription: string[];
  benefits: string[];
  imageUrl: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "higiene-seguridad",
    icon: Shield,
    title: "Higiene y Seguridad en el Trabajo",
    shortDescription: "Protegemos a tus trabajadores con servicios integrales cumpliendo normativas de industria, construcción, minería y actividades especiales.",
    description: "Brindamos servicios integrales de higiene y seguridad en el trabajo, garantizando el cumplimiento de todas las normativas vigentes y la protección de tus trabajadores.",
    features: [
      "Industrias (Decreto 351/79)",
      "Actividad agraria (Decreto 617/97)",
      "Construcción (Decreto 911/96)",
      "Actividad minera (Decreto 249/07)",
      "Televisión por Cable (Resolución 311/03)",
    ],
    detailedDescription: [
      "Nuestro servicio de Higiene y Seguridad en el Trabajo está diseñado para crear ambientes laborales seguros y saludables, cumpliendo con todas las exigencias legales de la normativa argentina específica para cada sector.",
      "Cubrimos todas las industrias y sectores productivos, desde industrias manufactureras bajo el Decreto 351/79, actividades agrarias reguladas por el Decreto 617/97, construcción bajo el Decreto 911/96, hasta la actividad minera con el Decreto 249/07 y televisión por cable según la Resolución 311/03.",
      "Desarrollamos programas integrales de prevención de riesgos laborales adaptados a las necesidades específicas de cada empresa, considerando sus procesos productivos, maquinarias y características particulares del sector.",
      "Nuestro equipo de profesionales realiza evaluaciones periódicas de los puestos de trabajo, identificando peligros potenciales y estableciendo medidas de control efectivas para minimizar los riesgos.",
      "Elaboramos y mantenemos actualizados todos los legajos técnicos requeridos por la normativa, incluyendo relevamientos generales de riesgos laborales, planes de evacuación y procedimientos de trabajo seguro."
    ],
    benefits: [
      "Cumplimiento normativo para todos los sectores productivos",
      "Reducción de accidentes laborales y enfermedades profesionales",
      "Protección legal frente a inspecciones de la SRT",
      "Asesoramiento continuo especializado por sector",
      "Mejora del clima laboral y productividad",
      "Disminución de costos asociados a siniestralidad"
    ],
    imageUrl: higieneImg
  },
  {
    id: "plan-evacuacion",
    icon: ClipboardCheck,
    title: "Plan de evacuación",
    shortDescription: "Diseñamos planes de evacuación personalizados con presentación ante Defensa Civil, capacitación de brigadas y simulacros periódicos.",
    description: "Diseñamos planes de evacuación personalizados que cumplen con toda la normativa local y preparan a tu organización ante situaciones de emergencia.",
    features: [
      "Confección según normativa local",
      "Presentaciones ante Defensa Civil (CABA)",
      "Informe antisiniestral (PBA)",
      "Planimetría y relevamientos",
      "Plan de mejoras y recomendaciones",
      "Entrenamiento de brigadas",
      "Capacitación específica en evacuación",
      "Planificación y realización de simulacros",
    ],
    detailedDescription: [
      "Los planes de evacuación son fundamentales para garantizar la seguridad de las personas en caso de emergencia. Desarrollamos planes integrales adaptados a las características específicas de cada edificio o instalación.",
      "Confeccionamos la documentación completa según las normativas locales vigentes, tanto para la Ciudad Autónoma de Buenos Aires como para la Provincia de Buenos Aires, asegurando el cumplimiento de todos los requisitos legales.",
      "Realizamos las presentaciones ante Defensa Civil de CABA y elaboramos los informes antisinuestrales requeridos en PBA, gestionando toda la tramitación necesaria para la aprobación oficial de los planes.",
      "Incluimos la planimetría completa de las instalaciones, identificando vías de evacuación, puntos de reunión, ubicación de extintores y equipamiento de emergencia, salidas de emergencia y zonas de riesgo.",
      "Desarrollamos programas de entrenamiento para brigadas de emergencia, capacitamos al personal en procedimientos de evacuación y planificamos y ejecutamos simulacros periódicos para evaluar la efectividad del plan."
    ],
    benefits: [
      "Cumplimiento de normativa local (CABA y PBA)",
      "Aprobación oficial ante organismos competentes",
      "Personal capacitado para actuar en emergencias",
      "Minimización de riesgos en situaciones críticas",
      "Protección de vidas y bienes patrimoniales",
      "Simulacros periódicos para mantener la preparación"
    ],
    imageUrl: evacuacionImg
   },{
    id: "estudios-relevamientos",
    icon: Microscope,
    title: "Estudios y relevamientos",
    shortDescription: "Mediciones profesionales de ruido, iluminación, ergonomía, puesta a tierra y carga térmica cumpliendo resoluciones SRT vigentes.",
    description: "Realizamos estudios técnicos completos y relevamientos especializados para identificar, medir y controlar los diferentes agentes de riesgo presentes en el ambiente laboral.",
    features: [
      "Ruido Res. SRT 85/12",
      "Iluminación Res. SRT 84/12",
      "Ruidos molestos Res. PBA 159/96",
      "Puesta a tierra Res. SRT 900/15",
      "Carga térmica Res. SRT 30/23",
      "Ergonomía Res. SRT 886/15",
      "Protocolo de Ventilación",
      "Carga de fuego",
      "Termografías",
      "Recipientes sometidos a presión",
    ],
    detailedDescription: [
      "Los estudios y relevamientos son esenciales para identificar la exposición de los trabajadores a diferentes agentes de riesgo físicos, químicos y ergonómicos, permitiendo implementar las medidas de control adecuadas.",
      "Realizamos mediciones de ruido según Resolución SRT 85/12, evaluando los niveles de exposición sonora y determinando la necesidad de implementar protección auditiva. También medimos ruidos molestos conforme a la Resolución PBA 159/96 para cumplir con normativa provincial.",
      "Efectuamos estudios de iluminación según Resolución SRT 84/12, verificando que los niveles de iluminación en cada puesto de trabajo cumplan con los valores mínimos establecidos para garantizar condiciones visuales adecuadas.",
      "Medimos puesta a tierra según Resolución SRT 900/15, certificando la resistencia de los sistemas de puesta a tierra para garantizar la seguridad eléctrica de las instalaciones y equipos.",
      "Evaluamos carga térmica según Resolución SRT 30/23, midiendo las condiciones de temperatura, humedad y velocidad del aire en ambientes con exposición a calor, y ergonomía según Resolución SRT 886/15 para prevenir trastornos musculoesqueléticos.",
      "Realizamos protocolos de ventilación, estudios de carga de fuego para determinar la carga de combustible en edificios, termografías para detectar puntos calientes en instalaciones eléctricas, y evaluaciones de recipientes sometidos a presión."
    ],
    benefits: [
      "Identificación precisa de riesgos laborales",
      "Cumplimiento de resoluciones SRT vigentes",
      "Certificaciones oficiales válidas",
      "Informes técnicos detallados y profesionales",
      "Recomendaciones de medidas correctivas",
      "Prevención de enfermedades profesionales"
    ],
    imageUrl: relevamientosImg
  },
  {
    id: "capacitacion",
    icon: Users,
    title: "Capacitación",
    shortDescription: "Formación especializada en seguridad con prácticas de extinción de incendios, evacuación y capacitaciones in company certificadas.",
    description: "Desarrollamos programas de capacitación personalizados para formar a tu equipo en las mejores prácticas de seguridad e higiene laboral.",
    features: [
      "Capacitaciones generales y específicas",
      "Prácticas de extinción de incendio y evacuación",
      "Desarrollo de capacitaciones \"in company\"",
      "Desarrollo de capacitaciones en centros propios",
    ],
    detailedDescription: [
      "La capacitación es fundamental para crear una cultura de prevención en la organización. Ofrecemos programas de formación adaptados a cada nivel de la empresa y a las necesidades específicas de cada sector productivo.",
      "Brindamos capacitaciones generales sobre temas básicos de seguridad e higiene (uso de EPP, riesgos generales, procedimientos de emergencia) y capacitaciones específicas según los riesgos particulares de cada puesto de trabajo (trabajo en altura, espacios confinados, manejo de sustancias peligrosas, etc.).",
      "Realizamos prácticas de extinción de incendio con fuego real, donde los participantes aprenden a usar extintores y mangueras de manera efectiva, y simulacros de evacuación para entrenar al personal en los procedimientos correctos ante emergencias.",
      "Ofrecemos modalidad \"in company\", donde nos trasladamos a las instalaciones del cliente para capacitar a su personal en su propio ambiente de trabajo, o en nuestros centros propios equipados con todas las herramientas didácticas necesarias.",
      "Todos nuestros programas cumplen con los requisitos de la Superintendencia de Riesgos del Trabajo (SRT) y entregan certificaciones válidas y reconocidas oficialmente."
    ],
    benefits: [
      "Personal capacitado y consciente de los riesgos",
      "Cumplimiento de obligaciones legales de capacitación",
      "Certificaciones reconocidas por la SRT",
      "Flexibilidad en modalidades (in company o centros propios)",
      "Prácticas con equipamiento real",
      "Reducción de incidentes por error humano"
    ],
    imageUrl: capacitacionImg
  },
  {
    id: "puesta-tierra",
    icon: Zap,
    title: "Servicios de Puesta a Tierra",
    shortDescription: "Medición, diseño y certificación oficial de sistemas de puesta a tierra garantizando seguridad eléctrica según normativa SRT.",
    description: "Ofrecemos servicios completos de puesta a tierra, desde el diseño hasta la certificación, garantizando la seguridad eléctrica de tus instalaciones.",
    features: [
      "Medición de resistencia",
      "Certificación oficial",
      "Diseño de sistemas",
      "Mantenimiento preventivo",
    ],
    detailedDescription: [
      "Los sistemas de puesta a tierra son fundamentales para la seguridad eléctrica de las instalaciones, protegiendo tanto a las personas como a los equipos de potenciales fallas eléctricas y descargas atmosféricas.",
      "Realizamos mediciones periódicas de resistencia de puesta a tierra con equipamiento calibrado y certificado, verificando que los valores cumplan con los límites establecidos por la normativa vigente (Resolución SRT 900/15 y normas IRAM aplicables).",
      "Diseñamos e instalamos sistemas de puesta a tierra completos, considerando las características del suelo, las dimensiones de las instalaciones, los requerimientos específicos de cada equipo o sector, y las condiciones particulares del emplazamiento.",
      "Emitimos certificaciones oficiales de medición de puesta a tierra, necesarias para habilitaciones municipales, auditorías de compañías de seguros, cumplimiento de requisitos de la ART y verificaciones de la SRT.",
      "Ofrecemos servicios de mantenimiento preventivo para asegurar que los sistemas de puesta a tierra mantengan sus características de funcionamiento a lo largo del tiempo."
    ],
    benefits: [
      "Protección contra descargas eléctricas y atmosféricas",
      "Cumplimiento de Resolución SRT 900/15",
      "Certificaciones válidas y reconocidas",
      "Prevención de daños en equipamiento electrónico",
      "Mejora en la calidad de la instalación eléctrica",
      "Reducción de riesgo de incendios eléctricos"
    ],
    imageUrl: puestaTierraImg
  },
  {
    id: "equipamiento",
    icon: HardHat,
    title: "Equipamiento y elementos de seguridad",
    shortDescription: "Proveemos elementos de protección personal certificados, ropa laboral, señalización, extintores y equipos de detección industrial.",
    description: "Proveemos todo el equipamiento y elementos de seguridad necesarios para proteger a tus trabajadores y cumplir con la normativa vigente.",
    features: [
      "Elementos de protección personal",
      "Ropa de trabajo",
      "Señalización",
      "Equipos de detección y alarma",
      "Extintores",
      "Elementos de evacuación y equipamiento edilicio",
    ],
    detailedDescription: [
      "Ofrecemos una amplia gama de elementos de protección personal (EPP) de primeras marcas, certificados y homologados según normas IRAM y estándares internacionales, garantizando la máxima protección para tus trabajadores.",
      "Nuestro catálogo incluye protección para cabeza (cascos de seguridad), protección visual y facial (antiparras, máscaras), protección auditiva (tapones, auriculares), protección respiratoria (barbijos, máscaras con filtros), protección de manos (guantes), protección de pies (calzado de seguridad) y protección anticaídas (arneses, líneas de vida).",
      "Proveemos ropa de trabajo adaptada a cada actividad, incluyendo uniformes, ropa ignífuga, ropa de alta visibilidad, delantales, y prendas para protección contra agentes químicos y biológicos.",
      "Suministramos señalización completa para la empresa: carteles de seguridad, señales fotoluminiscentes, cintas de demarcación, balizas, conos, y toda la señalética necesaria para delimitar y advertir sobre riesgos.",
      "Ofrecemos equipos de detección y alarma (detectores de humo, detectores de gas, alarmas sonoras), extintores de todo tipo (ABC, CO2, HCFC, carros) con su correspondiente mantenimiento y recarga, y elementos de evacuación como luces de emergencia, carteles fotoluminiscentes de salida, y equipamiento edilicio de seguridad."
    ],
    benefits: [
      "EPP certificados y homologados",
      "Amplia variedad de productos y marcas",
      "Asesoramiento en la selección adecuada",
      "Precios competitivos por volumen",
      "Entrega en todo el país",
      "Cumplimiento de normativa de la SRT y ART"
    ],
    imageUrl: equipamientoImg
  }
];

export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find(service => service.id === id);
}