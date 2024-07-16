export interface IProductDetails {
    id:          string;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
    price:       number;
    stock:       number;
    createdAt:   Date;
    updatedAt:   Date;
    categoryId:  string | null;
    category:    IProductDetailsCategory | null;
}

export interface IProductDetailsCategory {
    id:        string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}
