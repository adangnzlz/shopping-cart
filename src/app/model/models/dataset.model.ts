export class Dataset {
    page: number;
    total_pages: number;
    total_results: number;
    results: any[];

    constructor() {
        this.page = null;
        this.total_pages = null;
        this.total_results = null;
        this.results = [];
    }
}
