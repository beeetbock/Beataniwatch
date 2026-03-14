export interface BeatAniWatchError extends Error {
    scraper: string;
    status: number;
}
