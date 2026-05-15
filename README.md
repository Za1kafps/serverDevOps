# serverDev

Личный frontend-сайт Za1ka про DevOps, Linux-инфраструктуру, Zero Trust hardening и кибербезопасность.

## Структура

```text
src/
  components/        Vue-секции и UI-компоненты
  composables/       Поведение браузера
  content/           Контент сайта, разбитый по смыслу
  styles/            CSS по секциям и общим слоям
public/
  images/cases/      Картинки кейсов для тарифов
  svg/tools/         SVG-иконки инструментов
  favicon.svg        Иконка вкладки браузера
```

## Где менять контент

- `src/content/navigation.ts` — пункты меню.
- `src/content/hero.ts` — карточки на первом экране.
- `src/content/tools.ts` — инструменты, SVG-иконки, бегущая строка.
- `src/content/expertise.ts` — вкладки опыта.
- `src/content/services.ts` — услуги.
- `src/content/pricing.ts` — тарифы и пути к картинкам кейсов.
- `src/content/security.ts` — Zero Trust текст.
- `src/content/payment.ts` — реквизиты оплаты и текст для копирования.
- `src/content/contacts.ts` — Telegram, GitHub, GitLab, email и другие ссылки.

## SVG-иконки инструментов

Иконки лежат в `public/svg/tools/`. Сейчас папка пустая специально.

1. Положи файл, например `public/svg/tools/linux.svg`.
2. Добавь путь в `toolIconByName` внутри `src/content/tools.ts`.
3. Иконки используются только там, где они нужны: в hero и в `Zero Trust`.
4. В `Опыт` и `Услуги` сейчас остаются только текстовые бейджи без картинок.

## Картинки кейсов

Кейсы для тарифов лежат в `public/images/cases/`. Сейчас папка тоже пустая специально.

Чтобы добавить картинку:

1. Положи файл в `public/images/cases/`.
2. Укажи путь в `image` внутри `src/content/pricing.ts`, например `/images/cases/linux-server.png`.
3. Если `image` пустой, карточка покажет аккуратную заглушку без битой картинки.

## Иконка вкладки

Файл вкладки браузера: `public/favicon.svg`. Сейчас там зеленый `</>`.

## Запуск

```bash
nvm use
npm install
npm run dev
```

## Сборка

```bash
nvm use
npm run build
npm run preview
```

## Timeweb Apps

- Тип: `Docker`
- Вариант: `Dockerfile`
- Порт: `80`
- Путь проверки состояния: `/healthz`
