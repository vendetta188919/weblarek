import { IApi, IProduct, IProductListResponse, IOrder, IOrderResponse } from '../types/index';

/**
 * Класс для взаимодействия с API сервера "Веб-ларёк"
 */
export class WebLarekAPI {
    constructor(private api: IApi) {}

    getProductList(): Promise<IProduct[]> {
        return this.api.get<IProductListResponse>('/product/')
            .then(response => response.items);
    }

    orderProducts(order: IOrder): Promise<IOrderResponse> {
        return this.api.post<IOrderResponse>('/order', order);
    }
}
