import { SeriesStatus } from '@/types/database.types';
import { useCallback, useState } from 'react';

export const useViewModel = () => {
  const [selectedStatus, setSelectedStatus] = useState<SeriesStatus | null>(
    null,
  );

  // useCallback memoriza la función → no se recrea en cada render.
  // Si pulsas la misma badge → deselecciona; si pulsas otra → selecciona.
  const handleSelectStatus = useCallback((status: SeriesStatus) => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  }, []);

  // Limpia la selección al cerrar o confirmar el modal.
  const resetStatus = useCallback(() => {
    setSelectedStatus(null);
  }, []);

  return { selectedStatus, handleSelectStatus, resetStatus };
};
