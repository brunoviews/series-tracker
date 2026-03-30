import { useTranslation } from 'react-i18next';
import {
  CardContainer,
  Container,
  RatingYearContainer,
  ResultRating,
  ResultTitle,
  ResultYear,
} from './styles';
import { StarIcon } from 'phosphor-react-native';

import AddButton from '../AddButton';
import { TmdbSeries } from '@/lib/tmdb';

export default function SearchResultCard({
  id,
  name,
  poster_path,
  first_air_date,
  vote_average,
}: TmdbSeries) {
  const { t } = useTranslation();
  return (
    <Container>
      <CardContainer
        imageStyle={{ borderRadius: 6 }}
        source={{ uri: poster_path || undefined }}
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
        <ResultYear> · {new Date(first_air_date).getFullYear()}</ResultYear>
      </RatingYearContainer>
    </Container>
  );
}
