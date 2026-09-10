export const WHATSAPP_NUMBER = "5511996065988";
export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Auto Escola Cancun e gostaria de mais informações.";
export const WHATSAPP_DISPLAY = "(11) 99606-5988";

export const INSTAGRAM_URL = "https://www.instagram.com/cancun_auto_escola/";
export const INSTAGRAM_HANDLE = "@cancun_auto_escola";

export const ADDRESS_LINES = [
  "Av. Dr. José Maciel, 315",
  "Jardim Maria Rosa",
  "Taboão da Serra - SP",
  "CEP 06763-270",
];

export const SITE_URL = "https://cancunautoescola.com.br";

export function getWhatsappUrl() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
