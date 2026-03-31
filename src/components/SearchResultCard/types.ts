import { TmdbSeries } from "@/lib/tmdb";

export type SearchResultCardProps = {
    serie: TmdbSeries;
    onAdd: () => void;
}