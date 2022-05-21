export interface AuthorData {
    name: string;
    wikiUrl: string;
    quoteCount: number;
}

export interface Author {
    [key: string]: AuthorData;
}
