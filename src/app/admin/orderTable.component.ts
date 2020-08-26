import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.module';

@Component({
    // template: `<div class="bg-info p-2 text-white">
    //     <h3>Order Table Placeholder</h3>
    // </div>`
    templateUrl: "orderTable.component.html"
})

export class OrderTableComponent {
    includeShipped: boolean = false;

    constructor(private repo: OrderRepository) { }

    getOrders(): Order[] {
        // console.log(this.repo.getOrders());
        return this.repo.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repo.updateOrder(order);
    }

    delete(id: number) {
        this.repo.deleteOrder(id);
    }
}