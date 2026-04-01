import AddButton from '../AddButton';
import {
  CardContainer,
  Container,
  CurrentStatus,
  CurrentStatusBadge,
  RatingYearContainer,
  ResultRating,
  ResultTitle,
  ResultYear,
} from './styles';
import { SearchResultCardProps } from './types';
import { SeriesStatus } from '@/types/database.types';
import DefaultImg from '@assets/img/default-fallback-image.png';
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
}: SearchResultCardProps) {
  return (
    <Container>
      <CardContainer
        imageStyle={{ borderRadius: 6 }}
        source={serie.poster_path ? { uri: serie.poster_path } : DefaultImg}
      >
        {userSeriesMap[serie.id] &&
          (() => {
            const status = userSeriesMap[serie.id];
            const iconProps = {
              size: 16,
              color: '#0a0a0a',
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
              <CurrentStatusBadge status={status}>
                {icon}
                <CurrentStatus>{status}</CurrentStatus>
              </CurrentStatusBadge>
            );
          })()}
        <AddButton
          onPress={() => onAdd()}
          width={32}
          height={32}
          iconSize={16}
          bottom={8}
          right={8}
          buttonType="options"
        />
      </CardContainer>

      <ResultTitle numberOfLines={1}>{serie.name}</ResultTitle>
      <RatingYearContainer>
        <StarIcon size={12} color="#FBBF24" weight="fill" />
        <ResultRating>{serie.vote_average.toFixed(1)}</ResultRating>
        <ResultYear>
          {' '}
          ·{' '}
          {serie.first_air_date
            ? new Date(serie.first_air_date).getFullYear()
            : 'N/A'}
        </ResultYear>
      </RatingYearContainer>
    </Container>
  );
}
