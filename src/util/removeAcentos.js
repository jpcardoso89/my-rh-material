export default function removerAcentos(palavra) {
  return palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}
