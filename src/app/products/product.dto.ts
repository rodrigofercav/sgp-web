export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  quantity: number;
  expiry_date: string;
}

export interface UpdateProductDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  expiry_date: string;
  status: string;
}
