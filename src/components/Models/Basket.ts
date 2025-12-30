import { IProduct } from '../../types/index';
import { IEvents } from '../base/Events';

/**
 * Класс модели данных для управления корзиной покупок
 * Отвечает за хранение товаров, выбранных покупателем для покупки
 */
export class Basket {
    constructor(private readonly events?: IEvents) {}

    protected items: IProduct[] = [];

    getItems(): IProduct[] {
        return [...this.items];
    }

    addItem(product: IProduct): void {
        this.items.push(product);
        this.events?.emit('basket:changed');
    }

    removeItem(productId: string): void {
        this.items = this.items.filter(item => item.id !== productId);
        this.events?.emit('basket:changed');
    }

    clear(): void {
        this.items = [];
        this.events?.emit('basket:changed');
    }

    getTotalPrice(): number {
        return this.items.reduce((sum, item) => {
            return sum + (item.price ?? 0);
        }, 0);
    }

    getCount(): number {
        return this.items.length;
    }

    hasProduct(productId: string): boolean {
        return this.items.some(item => item.id === productId);
    }
}
