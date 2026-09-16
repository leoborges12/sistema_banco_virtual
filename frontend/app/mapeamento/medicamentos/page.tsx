import { MappingServicePage } from '@/components/sections/mapping-service-page';

export default function MedicineLocationsPage() {
  return <MappingServicePage title="Onde encontrar medicamentos" description="Consulte os locais previstos para retirada de medicamentos e as orientações relacionadas ao atendimento." steps={['Informar o medicamento ou selecionar uma categoria.', 'Consultar unidades que disponibilizam o item.', 'Verificar endereço, horário e orientações antes do deslocamento.']} />;
}
