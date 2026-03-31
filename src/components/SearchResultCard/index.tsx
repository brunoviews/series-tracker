import AddButton from '../AddButton';
import {
  CardContainer,
  Container,
  RatingYearContainer,
  ResultRating,
  ResultTitle,
  ResultYear,
} from './styles';
import type { TmdbSeries } from '@/lib/tmdb';
import DefaultImg from '@assets/img/default-fallback-image.png';
import { StarIcon } from 'phosphor-react-native';

export default function SearchResultCard({
  name,
  poster_path,
  first_air_date,
  vote_average,
}: TmdbSeries) {
  return (
    <Container>
      <CardContainer
        imageStyle={{ borderRadius: 6 }}
        source={poster_path ? { uri: poster_path } : DefaultImg}
      >
        <AddButton
          onPress={() => {}}
          width={32}
          height={32}
          iconSize={16}
          bottom={8}
          right={8}
        />
      </CardContainer>

      <ResultTitle numberOfLines={1}>{name}</ResultTitle>
      <RatingYearContainer>
        <StarIcon size={12} color="#FDCC0D" weight="fill" />
        <ResultRating>{vote_average.toFixed(1)}/10</ResultRating>
        <ResultYear>
          {' '}
          · {first_air_date ? new Date(first_air_date).getFullYear() : 'N/A'}
        </ResultYear>
      </RatingYearContainer>
    </Container>
  );
}
