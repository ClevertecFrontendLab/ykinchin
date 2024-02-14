export interface IContentCard {
    title: string;
    icon: React.ReactNode;
    buttonText: string;
}
export type TMenuButton = Omit<IContentCard, 'title'> & { key: number };
