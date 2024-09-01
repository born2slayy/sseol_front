import { ContractApiResponse } from "../api/useContractAPI";
import { SearchApiResponse } from "../api/useSearchAPI";
import { OrderCardProps } from "../components/Order";
import { CardProps } from "../components/Result";

export const orderCardData: ContractApiResponse = {
    items: [
        {
            productImages: [
                "https://via.placeholder.com/600x400/ff7f7f/333333",
                "https://via.placeholder.com/600x400/ffbf7f/333333",
                "https://via.placeholder.com/600x400/ffff7f/333333",
            ],
            productName: "Dresses",
            productCode: "R23CD02",
            wholesalePrice: 150.00,
            suggestedRetail: 450.00,
        },
        {
            productImages: [
                "https://via.placeholder.com/600x400/7f7fff/333333",
                "https://via.placeholder.com/600x400/7fbfff/333333",
                "https://via.placeholder.com/600x400/7fffff/333333",
            ],
            productName: "Tops",
            productCode: "R23CT09",
            wholesalePrice: 65.00,
            suggestedRetail: 195.00,
        },
        {
            productImages: [
                "https://via.placeholder.com/600x400/7fff7f/333333",
                "https://via.placeholder.com/600x400/bfff7f/333333",
                "https://via.placeholder.com/600x400/ffff7f/333333",
            ],
            productName: "Skirts",
            productCode: "R23CS08",
            wholesalePrice: 65.00,
            suggestedRetail: 195.00,
        },
        {
            productImages: [
                "https://via.placeholder.com/600x400/ff7fff/333333",
                "https://via.placeholder.com/600x400/ff7f7f/333333",
                "https://via.placeholder.com/600x400/ffbf7f/333333",
            ],
            productName: "Dresses",
            productCode: "R23CD05",
            wholesalePrice: 140.00,
            suggestedRetail: 420.00,
        },
        {
            productImages: [
                "https://via.placeholder.com/600x400/ff7fff/333333",
                "https://via.placeholder.com/600x400/ff7f7f/333333",
                "https://via.placeholder.com/600x400/ffbf7f/333333",
            ],
            productName: "Dresses",
            productCode: "R23CD05",
            wholesalePrice: 140.00,
            suggestedRetail: 420.00,
        },
        {
            productImages: [
                "https://via.placeholder.com/600x400/ff7fff/333333",
                "https://via.placeholder.com/600x400/ff7f7f/333333",
                "https://via.placeholder.com/600x400/ffbf7f/333333",
            ],
            productName: "Dresses",
            productCode: "R23CD05",
            wholesalePrice: 140.00,
            suggestedRetail: 420.00,
        },
        {
            productImages: [
                "https://via.placeholder.com/600x400/ff7fff/333333",
                "https://via.placeholder.com/600x400/ff7f7f/333333",
                "https://via.placeholder.com/600x400/ffbf7f/333333",
            ],
            productName: "Dresses",
            productCode: "R23CD05",
            wholesalePrice: 140.00,
            suggestedRetail: 420.00,
        },
    ],
};

export const cardDataList: SearchApiResponse = {
    brands: [
        {
            brandName: 'Acme Fashion',
            brandLogo: "https://via.placeholder.com/400x300?text=Acme+Fashion+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Acme+Fashion+2",
            location: 'New York, USA',
            revenue: '100M - 500M',
            priceRange: '$50 - $500',
            category: 'Apparel',
        },
        {
            brandName: 'Stylish Designs',
            brandLogo: "https://via.placeholder.com/400x300?text=Stylish+Designs+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Stylish+Designs+2",
            location: 'London, UK',
            revenue: '50M - 100M',
            priceRange: '$30 - $300',
            category: 'Accessories',
        },
        {
            brandName: 'Trendy Threads',
            brandLogo: "https://via.placeholder.com/400x300?text=Trendy+Threads+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Trendy+Threads+2",
            location: 'Paris, France',
            revenue: '500M - 1B',
            priceRange: '$80 - $800',
            category: 'Apparel',
        },
        {
            brandName: 'Chic Boutique',
            brandLogo: "https://via.placeholder.com/400x300?text=Chic+Boutique+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Chic+Boutique+2",
            location: 'Milan, Italy',
            revenue: '20M - 50M',
            priceRange: '$40 - $400',
            category: 'Accessories',
        },
        {
            brandName: 'Elegant Essentials',
            brandLogo: "https://via.placeholder.com/400x300?text=Elegant+Essentials+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Elegant+Essentials+2",
            location: 'Tokyo, Japan',
            revenue: '100M - 500M',
            priceRange: '$60 - $600',
            category: 'Apparel',
        },
        {
            brandName: 'Elegant Essentials',
            brandLogo: "https://via.placeholder.com/400x300?text=Elegant+Essentials+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Elegant+Essentials+2",
            location: 'Tokyo, Japan',
            revenue: '100M - 500M',
            priceRange: '$60 - $600',
            category: 'Apparel',
        },
        {
            brandName: 'Elegant Essentials',
            brandLogo: "https://via.placeholder.com/400x300?text=Elegant+Essentials+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Elegant+Essentials+2",
            location: 'Tokyo, Japan',
            revenue: '100M - 500M',
            priceRange: '$60 - $600',
            category: 'Apparel',
        },
        {
            brandName: 'Elegant Essentials',
            brandLogo: "https://via.placeholder.com/400x300?text=Elegant+Essentials+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Elegant+Essentials+2",
            location: 'Tokyo, Japan',
            revenue: '100M - 500M',
            priceRange: '$60 - $600',
            category: 'Apparel',
        },
        {
            brandName: 'Elegant Essentials',
            brandLogo: "https://via.placeholder.com/400x300?text=Elegant+Essentials+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Elegant+Essentials+2",
            location: 'Tokyo, Japan',
            revenue: '100M - 500M',
            priceRange: '$60 - $600',
            category: 'Apparel',
        },
        {
            brandName: 'Elegant Essentials',
            brandLogo: "https://via.placeholder.com/400x300?text=Elegant+Essentials+1",
            firstProductImg: "https://via.placeholder.com/400x300?text=Elegant+Essentials+2",
            location: 'Tokyo, Japan',
            revenue: '100M - 500M',
            priceRange: '$60 - $600',
            category: 'Apparel',
        },
    ],
    solarOutput: "solarOutput example",
};
