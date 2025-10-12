// Tüm slug işlemleri için ortak fonksiyon
export function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Türkçe karakterleri kaldır
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}
