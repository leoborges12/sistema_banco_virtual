export type PortalAreaIcon = 'map' | 'exam' | 'health' | 'document' | 'news';

export interface PortalTopic {
  title: string;
  description: string;
  href?: string;
}

export interface PortalArea {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  icon: PortalAreaIcon;
  topics: PortalTopic[];
}

export const portalAreas: PortalArea[] = [
  {
    slug: 'mapeamento',
    title: 'Mapeamento',
    description: 'Descubra onde encontrar medicamentos e localize a ESF de referência a partir do seu endereço.',
    introduction: 'Esta área reunirá ferramentas de localização para facilitar o acesso da população aos serviços de saúde disponíveis no território.',
    icon: 'map',
    topics: [
      { title: 'Onde encontrar medicamentos', description: 'Consulte os pontos de atendimento previstos para retirada de medicamentos.', href: '/mapeamento/medicamentos' },
      { title: 'Localizar a ESF pelo endereço', description: 'Informe um endereço para identificar a equipe de Saúde da Família de referência.', href: '/mapeamento/esf' },
    ],
  },
  {
    slug: 'locais-de-exames',
    title: 'Locais de exames',
    description: 'Consulte informações sobre locais e orientações para realização de exames.',
    introduction: 'O conteúdo será organizado por tipo de exame, requisitos de atendimento e orientações necessárias antes do comparecimento ao serviço.',
    icon: 'exam',
    topics: [
      { title: 'Locais de atendimento', description: 'Relação de unidades organizada por exame e região.' },
      { title: 'Orientações para exames', description: 'Informações sobre preparo, documentos e encaminhamentos.' },
      { title: 'Dúvidas frequentes', description: 'Respostas para questões comuns sobre o acesso aos exames.' },
    ],
  },
  {
    slug: 'informacoes-de-saude',
    title: 'Informações sobre doenças',
    description: 'Acesse orientações confiáveis sobre doenças e exames preventivos.',
    introduction: 'Esta área apresentará conteúdo educativo em linguagem clara, organizado por tema e revisado antes da publicação institucional.',
    icon: 'health',
    topics: [
      { title: 'Informações sobre doenças', description: 'Conteúdos sobre sinais, prevenção e quando procurar atendimento.' },
      { title: 'Exames preventivos', description: 'Orientações gerais sobre acompanhamento e prevenção em saúde.' },
      { title: 'Materiais educativos', description: 'Guias e conteúdos para consulta da comunidade.' },
    ],
  },
  {
    slug: 'documentacao',
    title: 'Documentação',
    description: 'Encontre documentos, guias, formulários e materiais de referência.',
    introduction: 'Os documentos serão classificados por assunto, tipo e data de publicação para tornar a consulta mais clara e segura.',
    icon: 'document',
    topics: [
      { title: 'Documentos', description: 'Publicações institucionais organizadas por categoria.' },
      { title: 'Guias e manuais', description: 'Materiais de orientação para consulta e download.' },
      { title: 'Formulários', description: 'Modelos e formulários disponibilizados pela instituição.' },
    ],
  },
  {
    slug: 'noticias',
    title: 'Notícias',
    description: 'Acompanhe comunicados e atualizações relevantes para a comunidade.',
    introduction: 'Este espaço reunirá notícias verificadas, avisos de serviço e atualizações publicadas pela instituição responsável.',
    icon: 'news',
    topics: [
      { title: 'Comunicados', description: 'Avisos importantes relacionados aos serviços de saúde.' },
      { title: 'Atualizações', description: 'Novidades sobre conteúdos e recursos do portal.' },
      { title: 'Agenda', description: 'Informações futuras sobre ações e atividades institucionais.' },
    ],
  },
];

export function findPortalArea(slug: string) {
  return portalAreas.find((area) => area.slug === slug);
}
