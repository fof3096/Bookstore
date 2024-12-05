export interface Book {
    title: string;
    description: string;
    authors: Array<string>;
    language: string;
    categories: string;
    imageLinks: { thumbnail: string };
}
