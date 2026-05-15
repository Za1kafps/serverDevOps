import type { PaymentDetail } from './types'

const tonWallet = 'UQDPAcuDbxw1GYbgnBNGwr4BVNXCNBY5OwAF7FVtO5JttT2e'

export const paymentDetails: PaymentDetail[] = [
  {
    label: 'Альфа-Банк',
    value: '4585220015443301',
    hint: 'Нажмите, чтобы скопировать номер карты. Реквизиты раскрываются внутри карточки.',
    details: [
      { label: 'Номер карты', value: '4585220015443301' },
      { label: 'Держатель', value: 'ALIAKSANDR ZJUZIN' },
      { label: 'Срок действия', value: '04/31' },
      { label: 'IBAN / номер счета', value: 'BY16ALFA30147583710070270000' },
    ],
  },
  {
    label: 'TON',
    value: tonWallet,
    hint: 'TON-кошелек. По клику копируется адрес.',
  },
  {
    label: 'Криптовалюта',
    value: tonWallet,
    hint: tonWallet,
  },
]
