import AddButton from '../AddButton';
import {
  CardContainer,
  Container,
  RatingYearContainer,
  ResultRating,
  ResultTitle,
  ResultYear,
} from './styles';
import { SearchResultCardProps } from './types';
import DefaultImg from '@assets/img/default-fallback-image.png';
import { StarIcon } from 'phosphor-react-native';

export default function SearchResultCard({
  serie,
  onAdd,
}: SearchResultCardProps) {
  return (
    <Container>
      <CardContainer
        imageStyle={{ borderRadius: 6 }}
        source={serie.poster_path ? { uri: serie.poster_path } : DefaultImg}
      >
        <AddButton
          onPress={() => onAdd()}
          width={32}
          height={32}
          iconSize={16}
          bottom={8}
          right={8}
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
