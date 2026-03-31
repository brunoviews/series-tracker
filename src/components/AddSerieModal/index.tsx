import {
  ActionRow,
  ActionText,
  BadgePressable,
  CancelAction,
  CloseButton,
  ConfirmAction,
  Container,
  Content,
  ContentTitle,
  HeaderContainer,
  ModalTitle,
  Overlay,
  PosterContainer,
  PosterImage,
  StatusBadge,
  StatusBadgeText,
  StatusContainer,
} from './styles';
import { AddSerieModalProps } from './types';
import { useViewModel } from './viewmodel';
import { theme } from '@/theme';
import { SeriesStatus } from '@/types/database.types';
import DefaultImg from '@assets/img/default-fallback-image.png';
import {
  CalendarBlankIcon,
  CheckCircleIcon,
  MonitorPlayIcon,
  TrashIcon,
  XIcon,
} from 'phosphor-react-native';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-native';

// ─── Constantes fuera del componente ─────────────────────────────────
// No dependen de props ni state → definirlas aquí evita que se
// recreen en cada render (memoria y rendimiento).

const STATUSES: SeriesStatus[] = [
  SeriesStatus.Watching,
  SeriesStatus.Completed,
  SeriesStatus.Planned,
  SeriesStatus.Dropped,
];

// Cada status tiene su color propio para reforzar visualmente su significado.
const STATUS_COLORS: Record<string, string> = {
  [SeriesStatus.Watching]: '#2DD4BF', // teal  → activamente viendo
  [SeriesStatus.Completed]: '#22C55E', // verde → completada
  [SeriesStatus.Planned]: '#FBBF24', // ámbar → pendiente
  [SeriesStatus.Dropped]: '#F43F5E', // rosa  → abandonada
};

// Función pura: recibe status + color y devuelve el icono adecuado.
// Un switch es más legible que un Record de funciones para un junior.
const getStatusIcon = (status: SeriesStatus, color: string) => {
  switch (status) {
    case SeriesStatus.Watching:
      return <MonitorPlayIcon size={16} weight="fill" color={color} />;
    case SeriesStatus.Completed:
      return <CheckCircleIcon size={16} weight="fill" color={color} />;
    case SeriesStatus.Planned:
      return <CalendarBlankIcon size={16} weight="fill" color={color} />;
    case SeriesStatus.Dropped:
      return <TrashIcon size={16} weight="fill" color={color} />;
    default:
      return null;
  }
};

// ─── Componente ──────────────────────────────────────────────────────

const AddSerieModal: FC<AddSerieModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  serie,
}) => {
  const { selectedStatus, handleSelectStatus, resetStatus } = useViewModel();
  const { t } = useTranslation();

  const handleCancel = () => {
    resetStatus();
    onCancel?.();
  };

  const handleConfirm = () => {
    if (selectedStatus) {
      onConfirm?.(selectedStatus);
      resetStatus();
    }
  };

  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      transparent
      onRequestClose={handleCancel}
    >
      <Container>
        {/* Overlay cierra el modal al pulsar fuera del contenido */}
        <Overlay onPress={handleCancel} />

        <Content>
          <HeaderContainer>
            <ModalTitle>{t('modal.addSerie')}</ModalTitle>
            <CloseButton onPress={handleCancel}>
              <XIcon size={24} color={theme.colors.textIcon.default.medium} />
            </CloseButton>
          </HeaderContainer>

          <PosterContainer>
            <PosterImage source={serie?.poster_path ? { uri: serie.poster_path } : DefaultImg} />
          </PosterContainer>

          <ContentTitle>{serie?.name ?? ''}</ContentTitle>

          <StatusContainer>
            {STATUSES.map((status) => {
              const isSelected = selectedStatus === status;
              const color = STATUS_COLORS[status];
              // Color del icono: su propio color si está seleccionado, muted si no.
              const iconColor = isSelected
                ? color
                : theme.colors.textIcon.default.medium;

              return (
                <BadgePressable
                  key={status}
                  onPress={() => handleSelectStatus(status)}
                >
                  <StatusBadge $isSelected={isSelected} $color={color}>
                    {getStatusIcon(status, iconColor)}
                    <StatusBadgeText $isSelected={isSelected} $color={color}>
                      {t(`series.status.${status}` as 'series.status.watching')}
                    </StatusBadgeText>
                  </StatusBadge>
                </BadgePressable>
              );
            })}
          </StatusContainer>

          <ActionRow>
            <CancelAction onPress={handleCancel}>
              <ActionText $variant="cancel">{t('modal.cancel')}</ActionText>
            </CancelAction>
            <ConfirmAction
              onPress={handleConfirm}
              disabled={!selectedStatus}
              $disabled={!selectedStatus}
            >
              <ActionText $variant="confirm" $disabled={!selectedStatus}>
                {t('modal.confirm')}
              </ActionText>
            </ConfirmAction>
          </ActionRow>
        </Content>
      </Container>
    </Modal>
  );
};

export default memo(AddSerieModal);
