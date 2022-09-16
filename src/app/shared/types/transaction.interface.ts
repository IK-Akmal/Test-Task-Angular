import { TransactionType } from "./transaction.type";

interface TransactionInterface {
    _id: string;
    amount: number;
    type: TransactionType
    name: {
        first: string;
        last: string;
    },
    company: string;
    email: string;
    phone: string;
    address: string;
}

export default TransactionInterface;