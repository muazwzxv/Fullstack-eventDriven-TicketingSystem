

### List of services

- Auth : everything authentication
- Ticket : ticket creation/editing. Knows whether ticket can be updated
- Order : order creation/editing
- expiration : watches for orders to be created, cancels them after 15 minutes
- payment : handles credit card payments, cancels orders if payments fail, completes if payment succeeds
