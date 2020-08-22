export enum PaginationType {
    NEXT = 'next',
    LAST = 'last',
    FIRST = 'first',
    PREV = 'prev'
}

export interface Pagination {
    type : PaginationType;
    url: string;
    page: number;
    per_page: number;
}