export class HouseIdealista {
    country: string;
    operation: string;
    propertyType: string;
    center?: string;
    distance?: string;
    maxPrice?: string;
    minPrice?: string;
    maxSize?: string;
    minSize?: string;
    flat?: boolean;
    penthouse?: boolean;

    // public asFormData(): FormData {
    //     const data = new FormData();
    //     data.append('houseType', this.houseType);
    //     data.append('price', this.price.toString());
    //     data.append('image', this.image);
    //
    //     return data;
    // }
}
