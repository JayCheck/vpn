export interface VPNItem {
    imageUri: string;
    title: string;
    description: string;
    pricing: Pricing;
    rating: number;
    url: string;
}

export interface Pricing {
    original: string;
    discounted: string;
}
