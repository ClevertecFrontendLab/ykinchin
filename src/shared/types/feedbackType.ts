export interface IFeedback {
    fullName?: string;
    imageSrc: string | null;
    message: string | null;
    rating: TRating;
    createdAt: Date;
    id: string;
}

export type TRating = 0 | 1 | 2 | 3 | 4 | 5;
