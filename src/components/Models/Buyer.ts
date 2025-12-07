import { IBuyer, TPayment } from '../../types/index';
type TBuyerErrors = Partial<Record<keyof IBuyer, string>>;

export class Buyer {
    protected payment: TPayment | null = null;
    protected address: string = '';
    protected email: string = '';
    protected phone: string = '';

    setField<K extends keyof IBuyer>(field: K, value: IBuyer[K]): void {
        switch (field) {
            case 'payment':
                this.payment = value as TPayment;
                break;
            case 'address':
                this.address = value as string;
                break;
            case 'email':
                this.email = value as string;
                break;
            case 'phone':
                this.phone = value as string;
                break;
        }
    }

    getData(): Partial<IBuyer> {
        return {
            payment: this.payment ?? undefined,
            address: this.address,
            email: this.email,
            phone: this.phone
        };
    }


    clear(): void {
        this.payment = null;
        this.address = '';
        this.email = '';
        this.phone = '';
    }

    validate(): TBuyerErrors {
        const errors: TBuyerErrors = {};

        if (!this.payment) {
            errors.payment = 'Не выбран вид оплаты';
        }

        if (!this.address?.trim()) {
            errors.address = 'Укажите адрес доставки';
        }

        if (!this.email?.trim()) {
            errors.email = 'Укажите емэйл';
        }

        if (!this.phone?.trim()) {
            errors.phone = 'Укажите телефон';
        }

        return errors;
    }
}
