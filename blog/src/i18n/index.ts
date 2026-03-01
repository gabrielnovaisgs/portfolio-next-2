/**
 * UI translations for pt-BR.
 * Usage: import { t, MONTHS } from "@/i18n";
 */

export const ui = {
  // ── Navigation ────────────────────────────────────────────
  "nav.posts": "Posts",
  "nav.tags": "Tags",
  "nav.about": "Sobre",
  "nav.search": "Buscar",
  "nav.archives": "Arquivo",
  "nav.galleries": "Galerias",
  "nav.projects": "Projetos",

  // ── Header ────────────────────────────────────────────────
  "header.skipToContent": "Pular para o conteúdo",
  "header.openMenu": "Abrir menu",
  "header.closeMenu": "Fechar menu",
  "header.searchTitle": "Ir para busca",
  "header.searchBtn": "Buscar (⌘K)",
  "header.searchBtnAria": "Abrir busca",
  "header.themeToggle": "Alternar claro/escuro",
  "header.darkMode": "Modo escuro",
  "header.lightMode": "Modo claro",

  // ── BackButton ────────────────────────────────────────────
  "back.aria": "Ir para início",
  "back.title": "Início",

  // ── BackToTopButton ───────────────────────────────────────
  "backToTop.label": "topo",

  // ── Breadcrumb ────────────────────────────────────────────
  "breadcrumb.home": "Início",

  // ── Datetime ─────────────────────────────────────────────
  "datetime.updated": "Atualizado:",

  // ── Footer ───────────────────────────────────────────────
  "footer.tagline": "Compartilhando conhecimento",
  "footer.connect": "Conectar",
  "footer.rights": "Todos os direitos reservados.",
  "footer.madeWith": "Feito com",
  "footer.coffee": "e muito café",

  // ── GalleryCard ───────────────────────────────────────────
  "gallery.photo": "foto",
  "gallery.photos": "fotos",

  // ── GalleryEmbed ──────────────────────────────────────────
  "galleryEmbed.more": "mais",
  "galleryEmbed.ariaGrid": "Galeria",
  "galleryEmbed.ariaViewImage": "Ver imagem",
  "galleryEmbed.empty": "Esta galeria ainda não tem imagens.",
  "galleryEmbed.viewFull": "Ver galeria completa",
  "galleryEmbed.ariaViewer": "Visualizador",
  "galleryEmbed.close": "Fechar",
  "galleryEmbed.prev": "Anterior",
  "galleryEmbed.next": "Próximo",

  // ── Pagination ────────────────────────────────────────────
  "pagination.prev": "Ir para página anterior",
  "pagination.next": "Ir para próxima página",

  // ── SearchModal ───────────────────────────────────────────
  "search.modalAria": "Buscar no site",
  "search.title": "Buscar",
  "search.closeShortcut": "fechar",
  "search.closeBtnAria": "Fechar busca",
  "search.placeholder": "Digite para buscar artigos, tutoriais e ideias...",
  "search.hintOpen": "↵ abrir",
  "search.hintNavigate": "↑↓ navegar",

  // ── ShareLinks ────────────────────────────────────────────
  "share.label": "Compartilhar",

  // ── PostDetails ───────────────────────────────────────────
  "post.end": "fim",
  "post.prev": "Anterior",
  "post.next": "Próximo",
  "post.copyLink": "Copiar",
  "post.copied": "Copiado",
  "post.linkToHeading": "link para seção",

  // ── AboutLayout ───────────────────────────────────────────
  "about.greeting": "Olá! Sou",
  "about.badge.developer": "🚀 Desenvolvedor",
  "about.badge.student": "📚 Estudante",
  "about.badge.gamer": "🎮 Gamer",

  // ── Home page ─────────────────────────────────────────────
  "home.rssAria": "feed rss",
  "home.writtenBy": "Escrito por",
  "home.featured": "Destaques",
  "home.recent": "Recentes",
  "home.viewAll": "Ver todos os posts",
  "home.description":
    "Um espaço onde a curiosidade se transforma em código. Explorando desenvolvimento web, arquitetura de software e tudo que move o mundo tech.",

  // ── 404 page ──────────────────────────────────────────────
  "404.message": "Página não encontrada",
  "404.back": "Voltar para a página inicial",

  // ── Search page ───────────────────────────────────────────
  "searchPage.title": "Buscar",
  "searchPage.description": "Encontre qualquer artigo, tutorial ou ideia no blog.",

  // ── Archives page ─────────────────────────────────────────
  "archives.title": "Arquivo",
  "archives.description":
    "Uma jornada por tudo que publiquei, organizado no tempo.",
  "archives.posts": "posts",
  "archives.year": "ano",
  "archives.years": "anos",

  // ── Projects page ─────────────────────────────────────────
  "projects.title": "Projetos",
  "projects.description":
    "Uma seleção dos projetos que desenvolvi ao longo da minha jornada.",
  "projects.count": "projetos",
  "projects.featuredSection": "Projetos em Destaque",
  "projects.viewAll": "Ver todos os projetos",
  "projects.visitSite": "Ver site",
  "projects.github": "GitHub",

  // ── Tags page ─────────────────────────────────────────────
  "tags.title": "Tags",
  "tags.description":
    "Explore todos os temas do blog. Cada tag é um universo de conteúdo.",
  "tags.count": "tags",
  "tags.post": "post",
  "tags.posts": "posts",
} as const;

export type UIKey = keyof typeof ui;

/** Returns the Portuguese translation for a given key. */
export function t(key: UIKey): string {
  return ui[key];
}

/** Portuguese month names (0-indexed). */
export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
] as const;
