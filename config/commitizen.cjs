"use strict";

module.exports = {
  types: [
    {
      value: "build",
      name: "build:     Сборка проекта или изменения внешних зависимостей"
    },
    { value: "ci", name: "ci:        Настройка CI и работа со скриптами" },
    { value: "docs", name: "docs:      Обновление документации" },
    { value: "feat", name: "feat:      Добавление нового функционала" },
    { value: "fix", name: "fix:       Исправление ошибок" },
    {
      value: "perf",
      name: "perf:      Изменения направленные на улучшение производительности"
    },
    {
      value: "refactor",
      name:
        "refactor:  Правки кода без исправления ошибок или добавления новых функций"
    },
    { value: "revert", name: "revert:    Откат на предыдущие коммиты" },
    {
      value: "style",
      name:
        "style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)"
    },
    { value: "test", name: "test:      Добавление тестов" }
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  // scopes: [
  //   { name: "components" },
  //   { name: "module" },
  //   { name: "config" },
  // ],

  // Поменяем дефолтные вопросы
  messages: {
    type: "Какие изменения вы вносите?",
    subject: "Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n",
    body:
      'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: "Список BREAKING CHANGES (опционально):\n",
    footer: "Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n",
    confirmCommit: "Вас устраивает получившийся коммит?"
  },

  // Область
  allowCustomScopes: false,
  skipEmptyScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: "Мета:",

  // limit subject length
  subjectLimit: 72
};