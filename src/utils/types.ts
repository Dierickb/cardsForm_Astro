export interface Form {
    title: string;
    questions: string[];
    cardName: string;
}

export interface FormsCollection {
    [key: string]: Form;
}