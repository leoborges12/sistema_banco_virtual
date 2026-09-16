export type PortalAreaIcon = 'map' | 'exam' | 'health' | 'document' | 'news';
export interface PortalArea { slug: string; title: string; description: string; icon: PortalAreaIcon; topics: string[]; }
export const portalAreas: PortalArea[] = [
  { slug: 'mapeamento', title: 'Mapeamento', description: 'Descubra onde encontrar medicamentos e localize a ESF de referência a partir do seu endereço.', icon: 'map', topics: ['Onde encontrar medicamentos', 'Localizar a ESF pelo endereço'] },
  { slug: 'locais-de-exames', title: 'Locais de exames', description: 'Consulte informações sobre locais e orientações para realização de exames.', icon: 'exam', topics: ['Locais de atendimento', 'Orientações para exames'] },
  { slug: 'informacoes-de-saude', title: 'Informações sobre doenças', description: 'Acesse orientações confiáveis sobre doenças e exames preventivos.', icon: 'health', topics: ['Informações sobre doenças', 'Exames preventivos'] },
  { slug: 'documentacao', title: 'Documentação', description: 'Encontre documentos, guias, formulários e materiais de referência.', icon: 'document', topics: ['Documentos', 'Guias e formulários'] },
  { slug: 'noticias', title: 'Notícias', description: 'Acompanhe comunicados e atualizações relevantes para a comunidade.', icon: 'news', topics: ['Comunicados', 'Atualizações'] },
];
export function findPortalArea(slug: string) { return portalAreas.find((area) => area.slug === slug); }
