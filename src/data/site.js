export const navigation = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'cortes', label: 'Cortes' },
  { id: 'kits', label: 'Kits' },
  { id: 'contato', label: 'Contato' },
];

export const address = 'Rua Conde de Bonfim, 120, Tijuca, Rio de Janeiro, RJ';
export const phone = '(21) 90000-0120';
export const whatsappNumber = '5521900000120';
export const instagramUrl = 'https://www.instagram.com/';

export function whatsappUrl(message = 'Olá, gostaria de saber sobre os cortes.') {
  return 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
}
