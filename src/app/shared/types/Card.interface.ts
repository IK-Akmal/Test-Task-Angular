interface CardInterface {
    _id: string;
    type: "income" | "outcome" | "loan" | "investment";
    amount: number;
    name: {
        first: string;
        last: string;
    },
    company: string;
    email: string;
    phone: string;
    address: string;
}