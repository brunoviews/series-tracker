import { SeriesStatus } from '@/types/database.types';

// Fuente de verdad única para los colores de status.
// Importar siempre desde aquí — nunca definir colores de status inline.
export const STATUS_COLORS: Record<SeriesStatus, string> = {
  [SeriesStatus.Watching]: '#2DD4BF', // teal   → activamente viendo
  [SeriesStatus.Completed]: '#22C55E', // verde  → completada
  [SeriesStatus.Planned]: '#FBBF24', // ámbar  → pendiente
  [SeriesStatus.Dropped]: '#F43F5E', // rosa   → abandonada
};
