export class House {
    id: string;
    houseType: string;
    price: string;
    image?: string;

    public asFormData(): FormData {
        const data = new FormData();
        data.append('houseType', this.houseType);
        data.append('price', this.price);
        data.append('image', this.image);

        return data;
    }
}
