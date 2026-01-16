export type TranslationKey = 
  | "nav.home"
  | "nav.modules"
  | "nav.bonuses"
  | "nav.professor"
  | "nav.testimonials"
  | "nav.offer"
  | "nav.faq"
  | "header.whatsapp"
  | "hero.badge"
  | "hero.title"
  | "hero.subtitle"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.badges.immediate"
  | "hero.badges.certificate"
  | "hero.badges.basicToAdvanced"
  | "hero.badges.practical"
  | "hero.stats.modules"
  | "hero.stats.classes"
  | "hero.stats.students"
  | "welcome.title"
  | "welcome.subtitle"
  | "why.title"
  | "why.reasons"
  | "techniques.title"
  | "techniques.sections"
  | "course.value.title"
  | "course.value.professional"
  | "course.value.vip"
  | "course.payment.title"
  | "course.payment.methods"
  | "course.contact"
  | "professor.title"
  | "professor.subtitle"
  | "professor.name"
  | "professor.role"
  | "professor.description"
  | "offer.title"
  | "offer.subtitle"
  | "offer.includes"
  | "offer.cta.primary"
  | "offer.cta.secondary"
  | "offer.trust"
  | "footer.rights"
  | "common.hours"
  | "common.yen"
  | "common.or"
  | "common.view"
  | "common.cash";

export const translations: Record<"pt" | "en" | "ja" | "fr", Record<TranslationKey, string>> = {
  pt: {
    "nav.home": "Início",
    "nav.modules": "Módulos",
    "nav.bonuses": "Bônus",
    "nav.professor": "Professor",
    "nav.testimonials": "Depoimentos",
    "nav.offer": "Oferta",
    "nav.faq": "FAQ",
    "header.whatsapp": "Falar no WhatsApp",
    "hero.badge": "Formação Profissional Completa",
    "hero.title": "Curso de Barbeiro Profissional",
    "hero.subtitle": "Professores Japoneses e Brasileiro 🇯🇵💈🇧🇷",
    "hero.cta.primary": "Quero me inscrever agora",
    "hero.cta.secondary": "Ver módulos",
    "hero.badges.immediate": "Acesso imediato",
    "hero.badges.certificate": "Certificado incluso",
    "hero.badges.basicToAdvanced": "Do básico ao avançado",
    "hero.badges.practical": "Aulas práticas",
    "hero.stats.modules": "Módulos",
    "hero.stats.classes": "Aulas",
    "hero.stats.students": "Alunos",
    "welcome.title": "SEJA BEM-VINDO AO FÁBRICA DE ESTILO",
    "welcome.subtitle": "100% DINÂMICO COM MAIS DE 70 ALUNOS FORMADOS NO JAPÃO 🇯🇵",
    "why.title": "POR QUE FAZER O CURSO CONOSCO?",
    "why.reasons": "A Fábrica de Estilo é referência no mercado!",
    "techniques.title": "TÉCNICAS ABORDADAS NO CURSO",
    "techniques.sections": "Seções do curso",
    "course.value.title": "Valor do curso e carga horária",
    "course.value.professional": "BARBEARIA PROFISSIONAL",
    "course.value.vip": "CURSO VIP",
    "course.payment.title": "Formas de pagamento",
    "course.payment.methods": "Métodos de pagamento",
    "course.contact": "Informações",
    "professor.title": "Conheça seu Professor",
    "professor.subtitle": "Professores Japoneses e Brasileiro",
    "professor.name": "Professores Especializados",
    "professor.role": "Instrutores Certificados",
    "professor.description": "Aprenda com professores japoneses e brasileiros especializados, com experiência comprovada no mercado japonês e brasileiro.",
    "offer.title": "Acesso completo ao",
    "offer.subtitle": "Oferta Especial",
    "offer.includes": "O que está incluído",
    "offer.cta.primary": "Quero me inscrever agora",
    "offer.cta.secondary": "Falar no WhatsApp",
    "offer.trust": "Compra segura",
    "footer.rights": "Todos os direitos reservados",
    "common.hours": "hrs",
    "common.yen": "¥",
    "common.or": "ou",
    "common.view": "à vista",
    "common.cash": "À Vista",
  },
  en: {
    "nav.home": "Home",
    "nav.modules": "Modules",
    "nav.bonuses": "Bonuses",
    "nav.professor": "Professor",
    "nav.testimonials": "Testimonials",
    "nav.offer": "Offer",
    "nav.faq": "FAQ",
    "header.whatsapp": "Talk on WhatsApp",
    "hero.badge": "Complete Professional Training",
    "hero.title": "Professional Barber Course",
    "hero.subtitle": "Japanese and Brazilian Teachers 🇯🇵💈🇧🇷",
    "hero.cta.primary": "I want to enroll now",
    "hero.cta.secondary": "View modules",
    "hero.badges.immediate": "Immediate access",
    "hero.badges.certificate": "Certificate included",
    "hero.badges.basicToAdvanced": "From basic to advanced",
    "hero.badges.practical": "Practical classes",
    "hero.stats.modules": "Modules",
    "hero.stats.classes": "Classes",
    "hero.stats.students": "Students",
    "welcome.title": "WELCOME TO FÁBRICA DE ESTILO",
    "welcome.subtitle": "100% DYNAMIC WITH OVER 70 STUDENTS GRADUATED IN JAPAN 🇯🇵",
    "why.title": "WHY TAKE THE COURSE WITH US?",
    "why.reasons": "Fábrica de Estilo is a market reference!",
    "techniques.title": "TECHNIQUES COVERED IN THE COURSE",
    "techniques.sections": "Course sections",
    "course.value.title": "Course value and workload",
    "course.value.professional": "PROFESSIONAL BARBERSHOP",
    "course.value.vip": "VIP COURSE",
    "course.payment.title": "Payment methods",
    "course.payment.methods": "Payment methods",
    "course.contact": "Information",
    "professor.title": "Meet your Professor",
    "professor.subtitle": "Japanese and Brazilian Teachers",
    "professor.name": "Specialized Teachers",
    "professor.role": "Certified Instructors",
    "professor.description": "Learn from specialized Japanese and Brazilian teachers, with proven experience in the Japanese and Brazilian markets.",
    "offer.title": "Full access to",
    "offer.subtitle": "Special Offer",
    "offer.includes": "What's included",
    "offer.cta.primary": "I want to enroll now",
    "offer.cta.secondary": "Talk on WhatsApp",
    "offer.trust": "Secure purchase",
    "footer.rights": "All rights reserved",
    "common.hours": "hrs",
    "common.yen": "¥",
    "common.or": "or",
    "common.view": "cash",
    "common.cash": "Cash",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.modules": "モジュール",
    "nav.bonuses": "ボーナス",
    "nav.professor": "講師",
    "nav.testimonials": "お客様の声",
    "nav.offer": "オファー",
    "nav.faq": "FAQ",
    "header.whatsapp": "WhatsAppで話す",
    "hero.badge": "完全なプロフェッショナルトレーニング",
    "hero.title": "プロフェッショナル理容師コース",
    "hero.subtitle": "日本人とブラジル人の講師 🇯🇵💈🇧🇷",
    "hero.cta.primary": "今すぐ登録する",
    "hero.cta.secondary": "モジュールを見る",
    "hero.badges.immediate": "即時アクセス",
    "hero.badges.certificate": "証明書付き",
    "hero.badges.basicToAdvanced": "基礎から上級まで",
    "hero.badges.practical": "実践的なクラス",
    "hero.stats.modules": "モジュール",
    "hero.stats.classes": "クラス",
    "hero.stats.students": "学生",
    "welcome.title": "ファブリカ・デ・エスティロへようこそ",
    "welcome.subtitle": "100%動的、日本で70人以上の卒業生 🇯🇵",
    "why.title": "なぜ私たちとコースを受講するのか？",
    "why.reasons": "ファブリカ・デ・エスティロは市場のリファレンスです！",
    "techniques.title": "コースで扱う技術",
    "techniques.sections": "コースセクション",
    "course.value.title": "コースの価格と時間",
    "course.value.professional": "プロフェッショナル理容",
    "course.value.vip": "VIPコース",
    "course.payment.title": "支払い方法",
    "course.payment.methods": "支払い方法",
    "course.contact": "情報",
    "professor.title": "講師を知る",
    "professor.subtitle": "日本人とブラジル人の講師",
    "professor.name": "専門講師",
    "professor.role": "認定インストラクター",
    "professor.description": "日本とブラジルの市場で実績のある専門の日本人とブラジル人の講師から学びます。",
    "offer.title": "への完全アクセス",
    "offer.subtitle": "特別オファー",
    "offer.includes": "含まれるもの",
    "offer.cta.primary": "今すぐ登録する",
    "offer.cta.secondary": "WhatsAppで話す",
    "offer.trust": "安全な購入",
    "footer.rights": "全著作権所有",
    "common.hours": "時間",
    "common.yen": "¥",
    "common.or": "または",
    "common.view": "現金",
    "common.cash": "現金",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.modules": "Modules",
    "nav.bonuses": "Bonus",
    "nav.professor": "Professeur",
    "nav.testimonials": "Témoignages",
    "nav.offer": "Offre",
    "nav.faq": "FAQ",
    "header.whatsapp": "Parler sur WhatsApp",
    "hero.badge": "Formation Professionnelle Complète",
    "hero.title": "Cours de Barbier Professionnel",
    "hero.subtitle": "Professeurs Japonais et Brésiliens 🇯🇵💈🇧🇷",
    "hero.cta.primary": "Je veux m'inscrire maintenant",
    "hero.cta.secondary": "Voir les modules",
    "hero.badges.immediate": "Accès immédiat",
    "hero.badges.certificate": "Certificat inclus",
    "hero.badges.basicToAdvanced": "Du basique à l'avancé",
    "hero.badges.practical": "Cours pratiques",
    "hero.stats.modules": "Modules",
    "hero.stats.classes": "Cours",
    "hero.stats.students": "Étudiants",
    "welcome.title": "BIENVENUE À FÁBRICA DE ESTILO",
    "welcome.subtitle": "100% DYNAMIQUE AVEC PLUS DE 70 ÉTUDIANTS DIPLÔMÉS AU JAPON 🇯🇵",
    "why.title": "POURQUOI SUIVRE LE COURS AVEC NOUS ?",
    "why.reasons": "Fábrica de Estilo est une référence sur le marché !",
    "techniques.title": "TECHNIQUES COUVERTES DANS LE COURS",
    "techniques.sections": "Sections du cours",
    "course.value.title": "Valeur du cours et charge horaire",
    "course.value.professional": "BARBERIE PROFESSIONNELLE",
    "course.value.vip": "COURS VIP",
    "course.payment.title": "Modes de paiement",
    "course.payment.methods": "Modes de paiement",
    "course.contact": "Informations",
    "professor.title": "Rencontrez votre Professeur",
    "professor.subtitle": "Professeurs Japonais et Brésiliens",
    "professor.name": "Professeurs Spécialisés",
    "professor.role": "Instructeurs Certifiés",
    "professor.description": "Apprenez auprès de professeurs japonais et brésiliens spécialisés, avec une expérience avérée sur les marchés japonais et brésilien.",
    "offer.title": "Accès complet à",
    "offer.subtitle": "Offre Spéciale",
    "offer.includes": "Ce qui est inclus",
    "offer.cta.primary": "Je veux m'inscrire maintenant",
    "offer.cta.secondary": "Parler sur WhatsApp",
    "offer.trust": "Achat sécurisé",
    "footer.rights": "Tous droits réservés",
    "common.hours": "h",
    "common.yen": "¥",
    "common.or": "ou",
    "common.view": "au comptant",
    "common.cash": "Au Comptant",
  },
};
