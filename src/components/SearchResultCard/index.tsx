import AddButton from '../AddButton';
import {
  CardContainer,
  Container,
  CurrentStatusBadge,
  GradientOverlay,
  RatingContainer,
  ResultRating,
  ResultTitle,
  ResultYear,
  YearContainer,
} from './styles';
import { SearchResultCardProps } from './types';
import { useViewModel } from './viewmodel';
import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/database.types';
import DefaultImg from '@assets/img/default-fallback-image.png';
import { getPosterUrl } from '@lib/tmdb';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BookmarkIcon,
  CheckCircleIcon,
  ProhibitIcon,
  StarIcon,
  TelevisionIcon,
} from 'phosphor-react-native';

export default function SearchResultCard({
  serie,
  onAdd,
  userSeriesMap,
  id,
}: SearchResultCardProps) {
  const { handleCardPress } = useViewModel();
  return (
    <Container onPress={() => handleCardPress(id)}>
      <CardContainer
        source={
          serie.poster_path
            ? { uri: getPosterUrl(serie.poster_path) ?? '' }
            : DefaultImg
        }
      >
        <GradientOverlay>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.75)']}
            style={{ flex: 1 }}
          />
        </GradientOverlay>
        {userSeriesMap[serie.id] &&
          (() => {
            const status = userSeriesMap[serie.id].status;
            const statusColor = STATUS_COLORS[status];
            const iconProps = {
              size: 16,
              color: statusColor,
              weight: 'fill',
            } as const;
            const icon =
              status === SeriesStatus.Watching ? (
                <TelevisionIcon {...iconProps} />
              ) : status === SeriesStatus.Completed ? (
                <CheckCircleIcon {...iconProps} />
              ) : status === SeriesStatus.Planned ? (
                <BookmarkIcon {...iconProps} />
              ) : (
                <ProhibitIcon {...iconProps} />
              );
            return (
              <CurrentStatusBadge status={status}>{icon}</CurrentStatusBadge>
            );
          })()}
        <RatingContainer>
          <StarIcon size={12} color="#FBBF24" weight="fill" />
          <ResultRating>{serie.vote_average.toFixed(1)}</ResultRating>
        </RatingContainer>
        <AddButton
          onPress={() => onAdd()}
          width={26}
          height={26}
          iconSize={16}
          bottom={8}
          right={8}
          buttonType={userSeriesMap[serie.id] ? 'edit' : 'add'}
          shape="circle"
        />
      </CardContainer>

      <ResultTitle numberOfLines={1}>{serie.name}</ResultTitle>
      <YearContainer>
        <ResultYear>
          {serie.first_air_date
            ? new Date(serie.first_air_date).getFullYear()
            : 'N/A'}
        </ResultYear>
      </YearContainer>
    </Container>
  );
}
