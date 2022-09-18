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

console.log(employee);

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};