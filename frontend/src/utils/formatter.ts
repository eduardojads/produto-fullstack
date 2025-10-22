
export function unmaskCurrency(value: string): number {
    //1. Permite dígitos, vírgula e ponto.
    const cleanValue = value.replace(/[^d,.]/g,"");

    //2. Padroniza: Substiti vírgula por ponto
    const numericString = cleanValue.replace(",", ".");

    //3. Converte para float (ou 0 se o valor for vazio/inválido)
    return parseFloat(numericString) || 0;
}

export function formatToBRL(value: number | ""): string {
    if (value === "" || isNaN(Number(value)) || Number(value) === 0) return "";

    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}