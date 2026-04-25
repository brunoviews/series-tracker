import { ItemStatus } from '@/types/app.types';
import { useCallback, useEffect, useState } from 'react';

export const parseRating = (value: string | null): number | null => {
  if (!value) return null;

  const parsed = parseFloat(value.replace(',', '.'));
  if (isNaN(parsed)) return null;
  if (parsed < 0 || parsed > 10) return null;

  return parsed;
};

export const useViewModel = (
  initialStatus?: ItemStatus | null,
  initialRating?: number | null,
) => {
  const [selectedStatus, setSelectedStatus] = useState<ItemStatus | null>(
    initialStatus ?? null,
  );

  const [rating, setRating] = useState<string | null>(
    initialRating !== null && initialRating !== undefined
      ? String(initialRating)
      : null,
  );

  // Cuando el modal se abre con un nuevo item, reseteamos el estado al status/rating del nuevo item.
  // El modal no se desmonta entre aperturas, por eso necesitamos useEffect.
  useEffect(() => {
    setSelectedStatus(initialStatus ?? null);
    setRating(
      initialRating !== null && initialRating !== undefined
        ? String(initialRating)
        : null,
    );
  }, [initialStatus, initialRating]);

  // useCallback memoriza la función → no se recrea en cada render.
  // Si pulsas la misma badge → deselecciona; si pulsas otra → selecciona.
  const handleSelectStatus = useCallback((status: ItemStatus) => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  }, []);

  return { selectedStatus, handleSelectStatus, rating, setRating };
};
