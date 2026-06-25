// Auto-generated from Followers_Products.xlsx — seed data for the CMS.
// Structure: products[] -> variants[] -> {plans[], packs[], upsells[]}
window.SEED_DATA = {
  "products": [
    {
      "id": "upfollow",
      "name": "UpFollow",
      "billingLabel": "Truegate ID",
      "variants": [
        {
          "id": "upfollow-x-0",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Орг вариант олд дефолт",
          "link": "https://upfollow.io/onboarding",
          "variantKey": "",
          "vat": true,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "",
          "cancelFlow": "Терминейт линка",
          "plans": [
            {
              "name": "Basic Plan",
              "price": "3 дня триал за $1.99, далее $19.99 в месяц",
              "billingId": "1d25ae05-ec7c-46d7-89fd-e5916b35bbea"
            },
            {
              "name": "Pro Plan",
              "price": "3 дня триал за $3.99, далее $39.99 в месяц",
              "billingId": "844496a7-43c9-4c92-94ba-ad0786b360fe"
            },
            {
              "name": "Unlim Plan",
              "price": "3 дня триал за $9.99, далее $99.99 в месяц",
              "billingId": "026dd933-b53d-4137-b254-7b8079e2244d"
            }
          ],
          "packs": [],
          "upsells": []
        },
        {
          "id": "upfollow-old-default-1",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Олд дефолт с улучшенной подпиской и инапным апсейлом",
          "link": "https://upfollow.io/onboarding/?variant=old_default&utm_source=fb&ad_name=fb",
          "variantKey": "old_default",
          "vat": true,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "fc95dfa0-53ae-441d-8e89-2df497c26ca5"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": "1d0ea2e2-8421-438c-a9d4-3dce9e23de34"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_upfollow_pack_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_upfollow_pack_1K_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_upfollow_pack_2K_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_upfollow_pack_5K_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_upfollow_pack_10K_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_upfollow_pack_30K_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1.5K лайков за $19.99",
              "mainCode": "likes_1500_upfollow_pack_19_99",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "likes_1500_upfollow_pack_14_99"
            },
            {
              "title": "Апсейл 2",
              "main": "800 Комментов за $19.99",
              "mainCode": "comments_800_upfollow_pack_19_99",
              "discount": "800 Комментов за $14.99",
              "discountCode": "comments_800_upfollow_pack_14_99"
            }
          ]
        },
        {
          "id": "upfollow-inapp-2",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Инапная сетка",
          "link": "https://upfollow.io/onboarding/?utm_source=fb&variant=inapp&ad_name=fb",
          "variantKey": "inapp",
          "vat": true,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "fc95dfa0-53ae-441d-8e89-2df497c26ca5"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": "1d0ea2e2-8421-438c-a9d4-3dce9e23de34"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_upfollow_pack_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_upfollow_pack_1K_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_upfollow_pack_2K_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_upfollow_pack_5K_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_upfollow_pack_10K_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_upfollow_pack_30K_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1.5K лайков за $19.99",
              "mainCode": "likes_1500_upfollow_pack_19_99",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "likes_1500_upfollow_pack_14_99"
            },
            {
              "title": "Апсейл 2",
              "main": "800 Комментов за $19.99",
              "mainCode": "comments_800_upfollow_pack_19_99",
              "discount": "800 Комментов за $14.99",
              "discountCode": "comments_800_upfollow_pack_14_99"
            }
          ]
        },
        {
          "id": "upfollow-old-default-inapp-upsale-3",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Олд дефолт с улучшенной подпиской и инапным апсейлом",
          "link": "https://upfollow.io/onboarding/?utm_source=fb&variant=old_default_inapp_upsale",
          "variantKey": "old_default_inapp_upsale",
          "vat": true,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "fc95dfa0-53ae-441d-8e89-2df497c26ca5"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": "1d0ea2e2-8421-438c-a9d4-3dce9e23de34"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_upfollow_pack_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_upfollow_pack_1K_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_upfollow_pack_2K_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_upfollow_pack_5K_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_upfollow_pack_10K_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_upfollow_pack_30K_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1.5K лайков за $19.99",
              "mainCode": "likes_1500_upfollow_pack_19_99",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "likes_1500_upfollow_pack_14_99"
            },
            {
              "title": "Апсейл 2",
              "main": "800 Комментов за $19.99",
              "mainCode": "comments_800_upfollow_pack_19_99",
              "discount": "800 Комментов за $14.99",
              "discountCode": "comments_800_upfollow_pack_14_99"
            }
          ]
        },
        {
          "id": "upfollow-variant-letter-inapp-fromletter-5",
          "status": "stopped",
          "statusLabel": "Рассылка писем с 24.06 - 500 users",
          "name": "Онборд с рассылкой писем - без подписки",
          "link": "https://upfollow.io/onboarding/?completed&email=t.nuryieu%40pxlnd.com&idfm=7824b7e0-665d-11f1-925d-4dfcaf5558b2&utm_source=fb&variant=letter_inapp&fromLetter",
          "variantKey": "variant=letter_inapp&fromLetter",
          "vat": false,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Без подписки",
              "price": "-",
              "billingId": "-"
            }
          ],
          "packs": [
            {
              "name": "100 Followers - $2.99",
              "code": "1_time_insta_upfollow_pack_followers_2_99"
            },
            {
              "name": "250 Followers - $4.99",
              "code": "1_time_insta_upfollow_pack_followers_4_99"
            },
            {
              "name": "500 Followers - $9.99",
              "code": "1_time_insta_upfollow_pack_followers_9_99"
            },
            {
              "name": "1K Followers - $12.99",
              "code": "1_time_insta_upfollow_pack_followers_12_99"
            },
            {
              "name": "2K Followers - $19.99",
              "code": "1_time_insta_upfollow_pack_followers_19_99"
            },
            {
              "name": "5K Followers - $39.99",
              "code": "1_time_insta_upfollow_pack_followers_39_99"
            },
            {
              "name": "10K Followers - $49.99",
              "code": "1_time_insta_upfollow_pack_followers_49_99"
            },
            {
              "name": "20K Followers - $79.99",
              "code": "1_time_insta_upfollow_pack_followers_79_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "700 Followers - $14.99",
              "mainCode": "1_time_insta_upfollow_pack_700_followers_14_99",
              "discount": "-",
              "discountCode": "-"
            },
            {
              "title": "Апсейл 2",
              "main": "1.5K лайков за $19.99",
              "mainCode": "likes_1500_upfollow_pack_19_99",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "likes_1500_upfollow_pack_14_99"
            },
            {
              "title": "Апсейл 3",
              "main": "800 Комментов за $19.99",
              "mainCode": "comments_800_upfollow_pack_19_99",
              "discount": "800 Комментов за $14.99",
              "discountCode": "comments_800_upfollow_pack_14_99"
            }
          ]
        },
        {
          "id": "upfollow-hp-6",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Хай прайсес",
          "link": "https://upfollow.io/onboarding/?variant=hp&utm_source=fb&ad_name=fb",
          "variantKey": "hp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 10 итераций. 40% от текущего числа фолловеров юзера. Не менее 100, не более 300 за период.\nПолный период - 20 итераций. 50% от текущего числа фолловеров юзера. Не менее 200, не более 760 за период",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триала за $9.99, дале $18.49 в неделю",
              "billingId": ""
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триала за $4.99, дале $18.49 в неделю",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "3K Фолловерс за $29.99",
              "mainCode": "",
              "discount": "3K Фолловерс за $24.99",
              "discountCode": ""
            },
            {
              "title": "Апсейл 2",
              "main": "Пак лайков и комментов за $19.99",
              "mainCode": "",
              "discount": "Пак лайков и комментов за $14.99",
              "discountCode": ""
            }
          ]
        },
        {
          "id": "upfollow-wt-7",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Инапная сетка с подписками",
          "link": "https://upfollow.io/onboarding/?utm_source=fb&variant=WT&ad_name=fb",
          "variantKey": "WT",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "10 итераций. 100% от текущего числа фолловеров юзера. Не менее 250, не более 250 за период",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "250 Followers/week",
              "price": "$5.99/week",
              "billingId": ""
            },
            {
              "name": "500 Followers/week",
              "price": "$9.99/week",
              "billingId": ""
            },
            {
              "name": "1000 Followers/week",
              "price": "$16.99/week",
              "billingId": ""
            },
            {
              "name": "2000 Followers/week",
              "price": "$24.99/week",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "500 Лайков за $19.99",
              "mainCode": "",
              "discount": "500 Лайков за $14.99",
              "discountCode": ""
            },
            {
              "title": "Апсейл 2",
              "main": "100 Комментов за $19.99",
              "mainCode": "",
              "discount": "100 Комментов за $14.99",
              "discountCode": ""
            }
          ]
        },
        {
          "id": "upfollow-no-quiz-8",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд без онборда",
          "link": "https://upfollow.io/onboarding/?utm_source=fb&variant=no_quiz&ad_name=fb",
          "variantKey": "no_quiz",
          "vat": false,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 30, не более 300 за период.\nПолный период - 50 итераций. 30% от текущего числа фолловеров юзера. Не менее 500, не более 1500 за период",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": ""
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1K Фолловерс за $19.99",
              "mainCode": "",
              "discount": "1K Фолловерс за $14.99",
              "discountCode": ""
            },
            {
              "title": "Апсейл 2",
              "main": "Пак лайков и комментов за $19.99",
              "mainCode": "",
              "discount": "Пак лайков и комментов за $14.99",
              "discountCode": ""
            }
          ]
        },
        {
          "id": "upfollow-no-quiz-inapp-9",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд без онборда с инапной сеткой",
          "link": "https://upfollow.io/onboarding/?utm_source=fb&variant=no_quiz_inapp&ad_name=fb",
          "variantKey": "no_quiz_inapp",
          "vat": true,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "Начисляем фолловеров, лайки, комменты",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": ""
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "100 Followers",
              "mainCode": "",
              "discount": "",
              "discountCode": ""
            }
          ]
        },
        {
          "id": "upfollow-old-default-upgrade-10",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Нон орг олд дефолт с апгрейдом подписки",
          "link": "https://upfollow.io/onboarding/?variant=old_default_upgrade&utm_source=fb&ad_name=fb",
          "variantKey": "old_default_upgrade",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 10 итераций. 40% от текущего числа фолловеров юзера. Не менее 100, не более 300 за период.\nПолный период - 20 итераций. 50% от текущего числа фолловеров юзера. Не менее 200, не более 760 за период",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": ""
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "3K Фолловерс за $29.99",
              "mainCode": "",
              "discount": "3K Фолловерс за $24.99",
              "discountCode": ""
            },
            {
              "title": "Апсейл 2",
              "main": "Пак лайков и комментов за $19.99",
              "mainCode": "",
              "discount": "Пак лайков и комментов за $14.99",
              "discountCode": ""
            }
          ]
        },
        {
          "id": "upfollow-old-default-nd-11",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Нон орг олд дефолт без скидочной подписки",
          "link": "https://upfollow.io/onboarding/?variant=old_default_nd&utm_source=fb&ad_name=fb",
          "variantKey": "old_default_nd",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 10 итераций. 40% от текущего числа фолловеров юзера. Не менее 100, не более 300 за период.\nПолный период - 20 итераций. 50% от текущего числа фолловеров юзера. Не менее 200, не более 760 за период",
          "cancelFlow": "Длинный флоу",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": ""
            },
            {
              "name": "Подписка скидочная",
              "price": "-",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1K Фолловерс за $29.99",
              "mainCode": "",
              "discount": "1K Фолловерс за $19.99",
              "discountCode": ""
            },
            {
              "title": "Апсейл 2",
              "main": "Пак лайков и комментов за $19.99",
              "mainCode": "",
              "discount": "Пак лайков и комментов за $14.99",
              "discountCode": ""
            }
          ]
        },
        {
          "id": "upfollow-tik-tok-12",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Нон орг олд дефолт по продаже фолловеров в тик ток",
          "link": "https://upfollow.io/onboarding/?utm_source=fb&variant=tik_tok",
          "variantKey": "tik_tok",
          "vat": false,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "После покупки подписки показываем экран ошибки. Автоотмена подписки и сапорт делает рефанд",
          "cancelFlow": "",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.99 в неделю",
              "billingId": ""
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.99 в неделю",
              "billingId": ""
            }
          ],
          "packs": [],
          "upsells": []
        }
      ]
    },
    {
      "id": "followerse",
      "name": "Followerse",
      "billingLabel": "Recurly ID",
      "variants": [
        {
          "id": "followerse-x-0",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Орг вариант",
          "link": "https://followerse.io/onboarding",
          "variantKey": "",
          "vat": false,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "",
          "cancelFlow": "Терминейт линка",
          "plans": [
            {
              "name": "Basic Plan",
              "price": "3 дня триал за $1.99, далее $19.99 в месяц",
              "billingId": "insta_followerse_plan_3dt_1_99_m_19_99"
            },
            {
              "name": "Pro Plan",
              "price": "3 дня триал за $3.99, далее $39.99 в месяц",
              "billingId": "insta_followerse_plan_3dt_3_99_m_39_99"
            },
            {
              "name": "Unlim Plan",
              "price": "3 дня триал за $9.99, далее $99.99 в месяц",
              "billingId": "insta_followerse_plan_3dt_9_99_m_99_99"
            }
          ],
          "packs": [],
          "upsells": []
        },
        {
          "id": "followerse-old-default-1",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Олд дефолт с улучшенной подпиской и инапным апсейлом",
          "link": "https://followerse.io/onboarding/?variant=old_default&utm_source=fb",
          "variantKey": "old_default",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_flwrs_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_flwrs_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_1k_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_followerse_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_5k_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_10k_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_30k_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_followerse_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_followerse_pack_19_99"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_followerse_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_followerse_pack_19_99"
            }
          ]
        },
        {
          "id": "followerse-no-quiz-inapp-2",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд no_quiz_inapp = old default варианту",
          "link": "https://followerse.io/onboarding/?utm_source=fb&variant=no_quiz_inapp",
          "variantKey": "no_quiz_inapp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_flwrs_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_flwrs_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_1k_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_followerse_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_5k_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_10k_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_30k_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_followerse_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_followerse_pack_19_99"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_followerse_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_followerse_pack_19_99"
            }
          ]
        },
        {
          "id": "followerse-inapp-3",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд inapp = old default варианту",
          "link": "https://followerse.io/onboarding/?utm_source=fb&variant=inapp",
          "variantKey": "inapp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_flwrs_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_flwrs_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_1k_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_followerse_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_5k_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_10k_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_30k_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_followerse_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_followerse_pack_19_99"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_followerse_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_followerse_pack_19_99"
            }
          ]
        }
      ]
    },
    {
      "id": "wordbeat",
      "name": "Wordbeat",
      "billingLabel": "Recurly ID",
      "variants": [
        {
          "id": "wordbeat-x-0",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Орг вариант",
          "link": "https://wordbeat.io/onboarding/",
          "variantKey": "",
          "vat": false,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "",
          "cancelFlow": "Терминейт линка",
          "plans": [
            {
              "name": "Basic Plan",
              "price": "Без триала, $12.99 в месяц",
              "billingId": "basic_wordbeat_plan_m_12_99"
            },
            {
              "name": "Pro Plan",
              "price": "Без триала, $21.99 в месяц",
              "billingId": "pro_wordbeat_plan_m_21_99"
            }
          ],
          "packs": [],
          "upsells": []
        },
        {
          "id": "wordbeat-old-default-1",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Олд дефолт с улучшенной подпиской и инапным апсейлом",
          "link": "https://wordbeat.io/onboarding/?variant=old_default&utm_source=test",
          "variantKey": "old_default",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_wordbeat_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_wordbeat_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_wb_od_pack_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_wb_od_pack_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_wb_od_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_wb_od_pack_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_wb_od_pack_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_wb_od_pack_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_wordbeat_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_wordbeat_pack_19_99"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_wordbeat_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_wordbeat_pack_19_99"
            }
          ]
        },
        {
          "id": "wordbeat-inapp-2",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд inapp = old default варианту",
          "link": "https://wordbeat.io/onboarding/?utm_source=fb&variant=inapp",
          "variantKey": "inapp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_wordbeat_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_wordbeat_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_wb_od_pack_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_wb_od_pack_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_wb_od_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_wb_od_pack_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_wb_od_pack_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_wb_od_pack_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_wordbeat_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_wordbeat_pack_19_99"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_wordbeat_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_wordbeat_pack_19_99"
            }
          ]
        },
        {
          "id": "wordbeat-no-quiz-inapp-3",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд no_quiz_inapp = old default варианту",
          "link": "https://wordbeat.io/onboarding/?utm_source=fb&variant=no_quiz_inapp",
          "variantKey": "no_quiz_inapp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_wordbeat_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_wordbeat_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_wb_od_pack_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_wb_od_pack_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_wb_od_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_wb_od_pack_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_wb_od_pack_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_wb_od_pack_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_wordbeat_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_wordbeat_pack_19_99"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_wordbeat_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_wordbeat_pack_19_99"
            }
          ]
        }
      ]
    },
    {
      "id": "planly",
      "name": "Planly",
      "billingLabel": "Recurly ID",
      "variants": [
        {
          "id": "planly-x-0",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Орг вариант",
          "link": "https://planlyapp.io/onboarding/",
          "variantKey": "",
          "vat": false,
          "localizationOn": false,
          "languages": [],
          "accrualLogic": "",
          "cancelFlow": "Терминейт линка",
          "plans": [
            {
              "name": "Starter Plan",
              "price": "Без триала, $9.99 в месяц",
              "billingId": "starter_planly_plan_m_9_99"
            },
            {
              "name": "Pro Plan",
              "price": "Без триала, $19.99 в месяц",
              "billingId": "pro_planly_plan_m_19_99"
            }
          ],
          "packs": [],
          "upsells": []
        },
        {
          "id": "planly-old-default-1",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Олд дефолт с улучшенной подпиской и инапным апсейлом",
          "link": "https://planlyapp.io/onboarding/?variant=old_default&utm_source=test",
          "variantKey": "old_default",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_planly_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_planly_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_planly_pack_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_planly_pack_1K_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_planly_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_planly_pack_5K_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_planly_pack_10K_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_planly_pack_30k_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_planly_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_planly_pack_19_99_d"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_planly_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_planly_pack_19_99_d"
            }
          ]
        },
        {
          "id": "planly-inapp-2",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд inapp = old default варианту",
          "link": "https://planlyapp.io/onboarding/?utm_source=fb&variant=inapp",
          "variantKey": "inapp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_planly_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_planly_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_planly_pack_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_planly_pack_1K_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_planly_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_planly_pack_5K_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_planly_pack_10K_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_planly_pack_30k_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_planly_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_planly_pack_19_99_d"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_planly_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_planly_pack_19_99_d"
            }
          ]
        },
        {
          "id": "planly-no-quiz-inapp-3",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд no_quiz_inapp = old default варианту",
          "link": "https://planlyapp.io/onboarding/?utm_source=fb&variant=no_quiz_inapp",
          "variantKey": "no_quiz_inapp",
          "vat": false,
          "localizationOn": true,
          "languages": [
            "English",
            "Spanish",
            "Portuguese",
            "Turkish",
            "Arabic",
            "Chinese"
          ],
          "accrualLogic": "3 дня триал - 3 итерации. 10% от текущего числа фолловеров юзера. Не менее 300, не более 900 за период, лайки - 90, комментарии - 30.\nПолный период - 7 итераций. 15% от текущего числа фолловеров юзера. Не менее 250, не более 750 за период, лайки - 250, комментарии - 70.\nПосты - начисления на 1 последний пост.",
          "cancelFlow": "Терминейт/ отмена через подтверждение email",
          "plans": [
            {
              "name": "Подписка основная",
              "price": "3 дня триал за $4.99, далее $18.49 в неделю",
              "billingId": "insta_planly_like_comments_plan_3dt_4_99_w_18_49"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "insta_planly_like_comments_plan_3dt_2_99_w_18_49"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "1_time_insta_planly_pack_700_followers_14_99"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "1_time_insta_planly_pack_1K_followers_19_99"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "1_time_insta_planly_pack_followers_29_99"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "1_time_insta_planly_pack_5K_followers_74_99"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "1_time_insta_planly_pack_10K_followers_99_99"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "1_time_insta_planly_pack_30k_followers_199_99"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "likes_1500_planly_pack_29_99",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "likes_1500_planly_pack_19_99_d"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "comments_800_planly_pack_29_99",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "comments_800_planly_pack_19_99_d"
            }
          ]
        }
      ]
    }
  ]
};
