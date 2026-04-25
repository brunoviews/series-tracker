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
import { ItemStatus } from '@/types/app.types';
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
  item,
  onAdd,
  userSeriesMap,
  userMoviesMap,
  id,
}: SearchResultCardProps) {
  const { handleCardPress } = useViewModel(item.media_type);

  const title = item.media_type === 'series' ? item.name : item.title;
  const date =
    item.media_type === 'series' ? item.first_air_date : item.release_date;

  const userStatus =
    item.media_type === 'series'
      ? userSeriesMap[item.id]?.status
      : userMoviesMap[item.id]?.status;

  return (
    <Container onPress={() => handleCardPress(id)}>
      <CardContainer
        source={
          item.poster_path
            ? { uri: getPosterUrl(item.poster_path) ?? '' }
            : DefaultImg
        }
      >
        <GradientOverlay>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.75)']}
            style={{ flex: 1 }}
          />
        </GradientOverlay>
        {userStatus &&
          (() => {
            const statusColor = STATUS_COLORS[userStatus];
            const iconProps = {
              size: 16,
              color: statusColor,
              weight: 'fill',
            } as const;
            const icon =
              userStatus === ItemStatus.Watching ? (
                <TelevisionIcon {...iconProps} />
              ) : userStatus === ItemStatus.Completed ? (
                <CheckCircleIcon {...iconProps} />
              ) : userStatus === ItemStatus.Planned ? (
                <BookmarkIcon {...iconProps} />
              ) : (
                <ProhibitIcon {...iconProps} />
              );
            return (
              <CurrentStatusBadge status={userStatus}>
                {icon}
              </CurrentStatusBadge>
            );
          })()}
        <RatingContainer>
          <StarIcon size={12} color="#FBBF24" weight="fill" />
          <ResultRating>{item.vote_average.toFixed(1)}</ResultRating>
        </RatingContainer>
        <AddButton
          onPress={() => onAdd()}
          width={26}
          height={26}
          iconSize={16}
          bottom={8}
          right={8}
          buttonType={userStatus ? 'edit' : 'add'}
          shape="circle"
        />
      </CardContainer>

      <ResultTitle numberOfLines={1}>{title}</ResultTitle>
      <YearContainer>
        <ResultYear>{date ? new Date(date).getFullYear() : 'N/A'}</ResultYear>
      </YearContainer>
    </Container>
  );
}
