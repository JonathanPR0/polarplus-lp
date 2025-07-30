/**
 * Normaliza um número de telefone removendo caracteres não numéricos
 * @param phone O número de telefone a ser normalizado
 * @param forUrl Se true, retorna apenas dígitos para uso em URLs (ex: whatsapp). Default: false
 * @returns O número formatado
 */
export function normalizePhoneNumber(
  phone: string,
  forUrl: boolean = false,
): string {
  // Remove todos os caracteres não numéricos
  const digitsOnly = phone.replace(/\D/g, "");

  // Se for para URL (como WhatsApp), retorna apenas os dígitos
  if (forUrl) {
    // Adiciona o código do país (55) se não tiver e tiver pelo menos 10 dígitos (número BR)
    if (digitsOnly.length >= 10 && !digitsOnly.startsWith("55")) {
      return `55${digitsOnly}`;
    }
    return digitsOnly;
  }

  // Para exibição, formata como (XX) XXXXX-XXXX para celular brasileiro
  if (digitsOnly.length === 11) {
    return `(${digitsOnly.substring(0, 2)}) ${digitsOnly.substring(2, 7)}-${digitsOnly.substring(
      7,
    )}`;
  }

  // Para exibição, formata como (XX) XXXX-XXXX para telefone fixo brasileiro
  if (digitsOnly.length === 10) {
    return `(${digitsOnly.substring(0, 2)}) ${digitsOnly.substring(2, 6)}-${digitsOnly.substring(
      6,
    )}`;
  }

  // Números internacionais ou outros formatos - mantém apenas os dígitos
  return digitsOnly;
}
