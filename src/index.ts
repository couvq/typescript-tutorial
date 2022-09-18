type Employee = {
    readonly id: number,
    name: string,
    retire: (data: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}