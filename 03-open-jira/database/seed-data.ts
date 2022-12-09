
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {
            description: "Pendiente: Pariatur magna ut nisi fugiat sunt reprehenderit enim id velit enim laboris cillum.",
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: "En progreso: Fugiat aute aliquip esse enim non dolore amet veniam irure et nostrud.",
            status: 'in-progress',
            createdAt: Date.now(),
        },
        {
            description: "Completado: Pariatur Lorem aliqua ea et aliqua aliquip exercitation aliquip veniam mollit.",
            status: 'finished',
            createdAt: Date.now(),
        },
    ],
};