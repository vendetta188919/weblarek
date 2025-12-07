import { IProduct } from '../../types/index';

/**
 * Класс модели данных для управления корзиной покупок
 * Отвечает за хранение товаров, выбранных покупателем для покупки
 */
export class Basket {
    protected items: IProduct[] = [];

    getItems(): IProduct[] {
        return [...this.items];
    }

    addItem(product: IProduct): void {
        this.items.push(product);
    }

    removeItem(productId: string): void {
        this.items = this.items.filter(item => item.id !== productId);
    }

    clear(): void {
        this.items = [];
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
