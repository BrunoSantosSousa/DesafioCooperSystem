export enum PageType {
    NEXT = 'next',
    LAST = 'last',
    FIRST = 'first',
    PREV = 'prev'
}

export interface Page {
    type : PageType;
    url: string;
    page: number;
    per_page: number;
}