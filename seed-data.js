// Demo seed — all billing IDs, product codes and URLs are fake placeholders.
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
          "link": "https://demo-upfollow.example.com/onboarding",
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
              "billingId": "9d2677f8-c1a8-ecf4-52f3-9e8ac0dc3ff9"
            },
            {
              "name": "Pro Plan",
              "price": "3 дня триал за $3.99, далее $39.99 в месяц",
              "billingId": "d6449b4c-2d54-05ed-4959-607a203d3e84"
            },
            {
              "name": "Unlim Plan",
              "price": "3 дня триал за $9.99, далее $99.99 в месяц",
              "billingId": "4c600fbc-b3a9-2f0b-2202-661a5a9a8592"
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
          "link": "https://demo-upfollow.example.com/onboarding/?variant=old_default&utm_source=fb&ad_name=fb",
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
              "billingId": "4c22c99b-44d9-88b6-9359-aadd8a0c1934"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": "75d8c229-dc09-8b0c-0b6e-059b7b21917d"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_e1584ab5"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_8a39f453"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_978df263"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_eb2d2369"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_343ff71e"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_a7759feb"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1.5K лайков за $19.99",
              "mainCode": "demo_upsell_fb30f9a9",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "demo_upsell_9edde218"
            },
            {
              "title": "Апсейл 2",
              "main": "800 Комментов за $19.99",
              "mainCode": "demo_upsell_82290e2b",
              "discount": "800 Комментов за $14.99",
              "discountCode": "demo_upsell_7b321ef6"
            }
          ]
        },
        {
          "id": "upfollow-inapp-2",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Инапная сетка",
          "link": "https://demo-upfollow.example.com/onboarding/?utm_source=fb&variant=inapp&ad_name=fb",
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
              "billingId": "0f0a678b-8f3b-71eb-715a-5f00170beb59"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": "fe2440ad-c161-43ea-7568-db26b9cf5815"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_ee71efb6"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_30d44332"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_ca512b31"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_ceb52f0f"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_5139dff0"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_dfbac090"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1.5K лайков за $19.99",
              "mainCode": "demo_upsell_d3fa4e3d",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "demo_upsell_e4264360"
            },
            {
              "title": "Апсейл 2",
              "main": "800 Комментов за $19.99",
              "mainCode": "demo_upsell_e426b212",
              "discount": "800 Комментов за $14.99",
              "discountCode": "demo_upsell_11f5e614"
            }
          ]
        },
        {
          "id": "upfollow-old-default-inapp-upsale-3",
          "status": "active",
          "statusLabel": "Активен",
          "name": "Олд дефолт с улучшенной подпиской и инапным апсейлом",
          "link": "https://demo-upfollow.example.com/onboarding/?utm_source=fb&variant=old_default_inapp_upsale",
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
              "billingId": "87aa6cea-72a6-820b-c009-cfb696812621"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня интро за $2.99, далее $18.49 в неделю",
              "billingId": "4a5438aa-db8b-e19c-c8ee-709ee0691964"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_fa1249e4"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_f11996c4"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_c064904a"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_d06346a2"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_0e710b1a"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_42e14f8d"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "1.5K лайков за $19.99",
              "mainCode": "demo_upsell_c420a87d",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "demo_upsell_8dae43c5"
            },
            {
              "title": "Апсейл 2",
              "main": "800 Комментов за $19.99",
              "mainCode": "demo_upsell_8d21920d",
              "discount": "800 Комментов за $14.99",
              "discountCode": "demo_upsell_3262f714"
            }
          ]
        },
        {
          "id": "upfollow-variant-letter-inapp-fromletter-5",
          "status": "stopped",
          "statusLabel": "Рассылка писем с 24.06 - 500 users",
          "name": "Онборд с рассылкой писем - без подписки",
          "link": "https://demo-upfollow.example.com/onboarding/?completed&email=t.nuryieu%40pxlnd.com&idfm=7824b7e0-665d-11f1-925d-4dfcaf5558b2&utm_source=fb&variant=letter_inapp&fromLetter",
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
              "code": "demo_pack_f62b9dd6"
            },
            {
              "name": "250 Followers - $4.99",
              "code": "demo_pack_25153001"
            },
            {
              "name": "500 Followers - $9.99",
              "code": "demo_pack_65263698"
            },
            {
              "name": "1K Followers - $12.99",
              "code": "demo_pack_4bcbc040"
            },
            {
              "name": "2K Followers - $19.99",
              "code": "demo_pack_42a3a97b"
            },
            {
              "name": "5K Followers - $39.99",
              "code": "demo_pack_69564f57"
            },
            {
              "name": "10K Followers - $49.99",
              "code": "demo_pack_77b8c85f"
            },
            {
              "name": "20K Followers - $79.99",
              "code": "demo_pack_db1065c8"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 1",
              "main": "700 Followers - $14.99",
              "mainCode": "demo_upsell_1245c40c",
              "discount": "-",
              "discountCode": "-"
            },
            {
              "title": "Апсейл 2",
              "main": "1.5K лайков за $19.99",
              "mainCode": "demo_upsell_9527a049",
              "discount": "1.5K лайков за $14.99",
              "discountCode": "demo_upsell_eb598f9d"
            },
            {
              "title": "Апсейл 3",
              "main": "800 Комментов за $19.99",
              "mainCode": "demo_upsell_f86b8077",
              "discount": "800 Комментов за $14.99",
              "discountCode": "demo_upsell_2ea539f7"
            }
          ]
        },
        {
          "id": "upfollow-hp-6",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Хай прайсес",
          "link": "https://demo-upfollow.example.com/onboarding/?variant=hp&utm_source=fb&ad_name=fb",
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
          "link": "https://demo-upfollow.example.com/onboarding/?utm_source=fb&variant=WT&ad_name=fb",
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
          "link": "https://demo-upfollow.example.com/onboarding/?utm_source=fb&variant=no_quiz&ad_name=fb",
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
          "link": "https://demo-upfollow.example.com/onboarding/?utm_source=fb&variant=no_quiz_inapp&ad_name=fb",
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
          "link": "https://demo-upfollow.example.com/onboarding/?variant=old_default_upgrade&utm_source=fb&ad_name=fb",
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
          "link": "https://demo-upfollow.example.com/onboarding/?variant=old_default_nd&utm_source=fb&ad_name=fb",
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
          "link": "https://demo-upfollow.example.com/onboarding/?utm_source=fb&variant=tik_tok",
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
          "link": "https://demo-followerse.example.com/onboarding",
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
              "billingId": "demo_plan_5d89bd9b"
            },
            {
              "name": "Pro Plan",
              "price": "3 дня триал за $3.99, далее $39.99 в месяц",
              "billingId": "demo_plan_9724c5b6"
            },
            {
              "name": "Unlim Plan",
              "price": "3 дня триал за $9.99, далее $99.99 в месяц",
              "billingId": "demo_plan_b9582cab"
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
          "link": "https://demo-followerse.example.com/onboarding/?variant=old_default&utm_source=fb",
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
              "billingId": "demo_plan_b78f08f8"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_3836b0a5"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_04677211"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_c61e9c06"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_d995df5c"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_bb13a38c"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_3ab73042"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_2e6bbccc"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_61a411cd",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_7720a106"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_030abf55",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_6e36fb53"
            }
          ]
        },
        {
          "id": "followerse-no-quiz-inapp-2",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд no_quiz_inapp = old default варианту",
          "link": "https://demo-followerse.example.com/onboarding/?utm_source=fb&variant=no_quiz_inapp",
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
              "billingId": "demo_plan_fb2503d8"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_107f3abe"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_9481123f"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_34a0fbcf"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_9ade20a6"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_c60a6225"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_8b5b3d16"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_1f4856a9"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_020afb78",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_493567a4"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_4af5c7b6",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_d819b5a8"
            }
          ]
        },
        {
          "id": "followerse-inapp-3",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд inapp = old default варианту",
          "link": "https://demo-followerse.example.com/onboarding/?utm_source=fb&variant=inapp",
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
              "billingId": "demo_plan_ba4e67b3"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_de692357"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_49d2461a"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_dc914df3"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_eda0603f"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_fe391d47"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_270476bb"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_d4d32138"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_0a42705a",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_28bfffa0"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_4313681d",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_f8277607"
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
          "link": "https://demo-wordbeat.example.com/onboarding/",
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
              "billingId": "demo_plan_236283ae"
            },
            {
              "name": "Pro Plan",
              "price": "Без триала, $21.99 в месяц",
              "billingId": "demo_plan_2df52a53"
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
          "link": "https://demo-wordbeat.example.com/onboarding/?variant=old_default&utm_source=test",
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
              "billingId": "demo_plan_c9e6dd58"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_2dda7c66"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_2ed19121"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_04d6048e"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_06601fee"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_e3418bc4"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_7184fbea"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_9c39d174"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_f138d367",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_c826d1bc"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_d92e2617",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_4a397570"
            }
          ]
        },
        {
          "id": "wordbeat-inapp-2",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд inapp = old default варианту",
          "link": "https://demo-wordbeat.example.com/onboarding/?utm_source=fb&variant=inapp",
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
              "billingId": "demo_plan_de157a90"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_484f5c22"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_66757630"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_085c3ca7"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_19f81176"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_f0a0663f"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_3bd67f3f"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_ee31fd85"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_6ec4d495",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_719848d9"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_4a60a001",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_8a1a1b2d"
            }
          ]
        },
        {
          "id": "wordbeat-no-quiz-inapp-3",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд no_quiz_inapp = old default варианту",
          "link": "https://demo-wordbeat.example.com/onboarding/?utm_source=fb&variant=no_quiz_inapp",
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
              "billingId": "demo_plan_954df514"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_0040f97d"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_dcbb06b3"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_17d85002"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_dd77ab36"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_6ffe1640"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_4bc3fe3f"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_9cd19c35"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_b77069f5",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_72548646"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_0c36cd87",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_4a591a0a"
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
          "link": "https://demo-planly.example.com/onboarding/",
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
              "billingId": "demo_plan_9819c052"
            },
            {
              "name": "Pro Plan",
              "price": "Без триала, $19.99 в месяц",
              "billingId": "demo_plan_e2b1258e"
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
          "link": "https://demo-planly.example.com/onboarding/?variant=old_default&utm_source=test",
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
              "billingId": "demo_plan_f57f9ef0"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_ed1f5e7d"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_ce84bf18"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_e51acef4"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_445a8c4c"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_89dcf1ba"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_ce2012f5"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_c64699f0"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_f484ac9b",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_6a4da43c"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_5c878134",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_76e6bf95"
            }
          ]
        },
        {
          "id": "planly-inapp-2",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд inapp = old default варианту",
          "link": "https://demo-planly.example.com/onboarding/?utm_source=fb&variant=inapp",
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
              "billingId": "demo_plan_eb1c25b5"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_eadf79d1"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_283b21a6"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_4d449cb3"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_3772e2f6"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_dbcea9e1"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_0289bf4a"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_84b72458"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_f887d860",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_becf75e7"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_4e356bc6",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_c985826e"
            }
          ]
        },
        {
          "id": "planly-no-quiz-inapp-3",
          "status": "stopped",
          "statusLabel": "На стопе",
          "name": "Онборд no_quiz_inapp = old default варианту",
          "link": "https://demo-planly.example.com/onboarding/?utm_source=fb&variant=no_quiz_inapp",
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
              "billingId": "demo_plan_a3fcdfa0"
            },
            {
              "name": "Подписка скидочная",
              "price": "3 дня триал за $2.99, далее $18.49 в неделю",
              "billingId": "demo_plan_588777f0"
            }
          ],
          "packs": [
            {
              "name": "700 Followers - $14.99",
              "code": "demo_pack_bc36cf8e"
            },
            {
              "name": "1K Followers - $19.99",
              "code": "demo_pack_917b226b"
            },
            {
              "name": "2K Followers - $29.99",
              "code": "demo_pack_de60f8f4"
            },
            {
              "name": "5K Followers - $74.99",
              "code": "demo_pack_ff8a19ae"
            },
            {
              "name": "10K Followers - $99.99",
              "code": "demo_pack_2f0e14cc"
            },
            {
              "name": "30K Followers - $199.99",
              "code": "demo_pack_9a7f5246"
            }
          ],
          "upsells": [
            {
              "title": "Апсейл 2",
              "main": "Апсейл Лайков 1.5K $29.99",
              "mainCode": "demo_upsell_2d1e7ee0",
              "discount": "Апсейл Лайков 1.5K $19.99",
              "discountCode": "demo_upsell_44444188"
            },
            {
              "title": "Апсейл 3",
              "main": "Апсейл Комментов +800 $29.99",
              "mainCode": "demo_upsell_ed49c0e8",
              "discount": "Апсейл Комментов +800 $19.99",
              "discountCode": "demo_upsell_e396cd29"
            }
          ]
        }
      ]
    }
  ]
};
