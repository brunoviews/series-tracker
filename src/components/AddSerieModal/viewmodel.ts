import { SeriesStatus } from '@/types/database.types';
import { useCallback, useEffect, useState } from 'react';

export const useViewModel = (initialStatus?: SeriesStatus | null) => {
  const [selectedStatus, setSelectedStatus] = useState<SeriesStatus | null>(
    initialStatus ?? null,
  );

  // Sincroniza el estado seleccionado cuando cambia la serie abierta en el modal.
  // El modal no se desmonta entre aperturas, por eso necesitamos useEffect.
  useEffect(() => {
    setSelectedStatus(initialStatus ?? null);
  }, [initialStatus]);

  // useCallback memoriza la función → no se recrea en cada render.
  // Si pulsas la misma badge → deselecciona; si pulsas otra → selecciona.
  const handleSelectStatus = useCallback((status: SeriesStatus ) => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  }, []);

  // Limpia la selección al cerrar o confirmar el modal.
  const resetStatus = useCallback(() => {
    setSelectedStatus(null);
  }, []);



  return { selectedStatus, handleSelectStatus, resetStatus, };
};
