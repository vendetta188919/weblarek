import { IProduct } from '../../types/index';
import { IEvents } from '../base/Events';

/**
 * Класс модели данных для хранения каталога товаров
 * Отвечает за хранение всех товаров магазина и выбранного для просмотра товара
 */
export class ProductCatalog {
    constructor(private readonly events?: IEvents) {}

    protected items: IProduct[] = [];
    protected preview: IProduct | null = null;

    setItems(items: IProduct[]): void {
        this.items = items;
        this.events?.emit('catalog:changed');
    }

    getItems(): IProduct[] {
        return this.items;
    }

    setPreview(product: IProduct): void {
        this.preview = product;
        this.events?.emit('catalog:preview');
    }

    getPreview(): IProduct | null {
        return this.preview;
    }
}
