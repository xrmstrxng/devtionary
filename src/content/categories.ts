import { categorySchema, type Category } from "@/entities/category/model";

const rawCategories: Category[] = [
  ["development", "Development", "Desenvolvimento"],
  ["architecture", "Architecture", "Arquitetura"],
  ["database", "Database", "Banco de dados"],
  ["git", "Git", "Git"],
  ["devops", "DevOps", "DevOps"],
  ["cloud", "Cloud", "Cloud"],
  ["security", "Security", "Segurança"],
  ["quality", "Quality", "Qualidade"],
  ["product", "Product", "Produto"],
  ["design", "Design", "Design"],
  ["agile-meetings", "Agile & Meetings", "Ágil e reuniões"],
  ["management", "Management", "Gestão"],
  ["business", "Business", "Negócios"],
  ["documentation", "Documentation", "Documentação"],
  ["corporate-systems", "Corporate Systems", "Sistemas corporativos"],
  ["frontend", "Frontend", "Frontend"],
  ["observability", "Observability", "Observabilidade"],
  ["messaging", "Messaging", "Mensageria"],
  ["distributed-systems", "Distributed Systems", "Sistemas distribuídos"],
  ["performance", "Performance", "Performance"],
  ["integrations", "Integrations", "Integrações"],
  ["data", "Data & Analytics", "Dados e analytics"],
  ["platform-engineering", "Platform Engineering", "Engenharia de plataforma"],
].map(([slug, en, pt]) => ({
  slug,
  name: { en, "pt-BR": pt },
  description: {
    en: `Terms used in ${en.toLowerCase()} work and conversations.`,
    "pt-BR": `Termos usados no trabalho e nas conversas sobre ${pt.toLowerCase()}.`,
  },
}));

export const categories = categorySchema.array().parse(rawCategories);
export const categorySlugs = new Set(
  categories.map((category) => category.slug),
);
