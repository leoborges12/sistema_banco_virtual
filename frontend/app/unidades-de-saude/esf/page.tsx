import { MappingServicePage } from '@/components/sections/mapping-service-page';

export default function EsfLocationPage() {
  return <MappingServicePage title="Localizar a ESF pelo endereço" description="Identifique a equipe de Saúde da Família responsável pela região do endereço informado." steps={['Informar o endereço completo.', 'Confirmar a localização encontrada.', 'Consultar a ESF de referência e as informações de atendimento.']} />;
}
